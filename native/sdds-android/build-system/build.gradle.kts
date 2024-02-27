plugins {
    `kotlin-dsl`
}

buildscript {
    dependencies {
        classpath(libs.base.gradle.kotlin)
    }
}

allprojects {
    repositories {
        google()
        mavenCentral()
        maven {
            url = uri("https://plugins.gradle.org/m2/")
        }
    }
}

tasks.register("spotlessApplyAll")
tasks.register("spotlessCheckAll")
tasks.register("mergeReports")
tasks.register("copyTestsReports")
tasks.register("detektAll")
tasks.register("assembleDebugAll")
tasks.register("lintDebugAll")
tasks.register("testDebugAll") {
    dependsOn(tasks.named("test"))
}
