import org.gradle.kotlin.dsl.support.zipTo

plugins {
    id("base")
}

allprojects {
    repositories {
        google()
        mavenCentral()
    }
}

tasks.register("detektAll") {
    val detektTasks = subprojects.flatMap {
        it.tasks.matching { task -> task.name == "detekt" }
    }
    val includedTasks = gradle.includedBuilds.map {
        it.task(":detektAll")
    }
    dependsOn(detektTasks, includedTasks)
}

tasks.register("spotlessCheckAll") {
    val spotlessCheckTasks = subprojects.flatMap {
        it.tasks.matching { task -> task.name == "spotlessCheck" }
    }
    val includedTasks = gradle.includedBuilds.map {
        it.task(":spotlessCheckAll")
    }
    dependsOn(spotlessCheckTasks, includedTasks)
}

tasks.register("spotlessApplyAll") {
    val spotlessApplyTasks = subprojects.flatMap {
        it.tasks.matching { task -> task.name == "spotlessApply" }
    }
    val includedTasks = gradle.includedBuilds.map {
        it.task(":spotlessApplyAll")
    }
    dependsOn(spotlessApplyTasks, includedTasks)
}

tasks.register("assembleDebugAll") {
    val testTasks = subprojects.flatMap {
        it.tasks.matching { task -> task.name == "assembleDebug" }
    }
    val includedTestTasks = gradle.includedBuilds.map {
        it.task(":assembleDebugAll")
    }
    dependsOn(testTasks, includedTestTasks)
}

tasks.register("testDebugAll") {
    val testTasks = subprojects.flatMap {
        it.tasks.matching { task -> task.name == "testDebugUnitTest" }
    }
    val includedTestTasks = gradle.includedBuilds.map {
        it.task(":testDebugAll")
    }
    dependsOn(testTasks, includedTestTasks)
}

tasks.register("lintDebugAll") {
    val testTasks = subprojects.flatMap {
        it.tasks.matching { task -> task.name == "lintDebug" }
    }
    val includedTestTasks = gradle
        .includedBuilds
        .map { it.task(":lintDebugAll") }
    dependsOn(testTasks, includedTestTasks)
}

tasks.register("mergeReports") {
    val includedMergeTasks = gradle
        .includedBuilds
        .map { it.task(":mergeReports") }
    dependsOn(includedMergeTasks)

    doLast {
        mergeReports("lint-results-debug.txt")
        mergeReports("detekt.txt")
    }
}

tasks.register("copyTestsReports") {
    val includedCopyTasks = gradle
        .includedBuilds
        .map { it.task(":copyTestsReports") }
    dependsOn(includedCopyTasks)
    finalizedBy("packageTestReports")

    doLast {
        subprojects.forEach {
            val reportDir = file("${it.projectDir.path}/build/reports/tests/")
            if (reportDir.exists()) {
                copyTestReportToRoot(it.name, reportDir)
            }
        }

        gradle.includedBuilds.forEach {
            val reportDir = file("${it.projectDir.path}/build/reports/tests/")
            if (reportDir.exists()) {
                copyTestReportToRoot(it.name, reportDir)
            }
        }
    }
}

tasks.register<Zip>("packageTestReports") {
    archiveFileName.set("test-reports.zip")
    destinationDirectory.set(layout.buildDirectory.dir("reports"))

    from(layout.buildDirectory.dir("reports/tests"))
}

fun copyTestReportToRoot(projectName: String, reportDir: File) {
    copy {
        val destination = layout.buildDirectory.dir("reports/tests/$projectName/")
        println("copying $reportDir to ${destination.get()}")
        from(reportDir)
        into(destination)
    }
}

fun mergeReports(fileName: String) {
    val subprojectsReports = subprojects.map {
        file("${it.projectDir.path}/build/reports/$fileName")
    }.filter { it.exists() }

    val includeBuildReports = gradle.includedBuilds.map {
        file("${it.projectDir.path}/build/reports/$fileName")
    }.filter { it.exists() }

    val allReports = files(subprojectsReports, includeBuildReports)
        .joinToString {
            val text = it.readText()
            if (text.isNotBlank()) {
                "${it.path}\n" + it.readText() + "\n\n"
            } else ""
        }
    val reportsDir = file("${projectDir.path}/build/reports/")
    file("${reportsDir.path}/$fileName").apply {
        if (!reportsDir.exists()) reportsDir.mkdirs()
        if (!exists()) createNewFile()
        writeText(allReports)
    }
}
