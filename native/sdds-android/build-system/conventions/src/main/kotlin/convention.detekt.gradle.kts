import io.gitlab.arturbosch.detekt.Detekt
import io.gitlab.arturbosch.detekt.DetektPlugin
import io.gitlab.arturbosch.detekt.extensions.DetektExtension
import utils.findDetektBaselineAll
import utils.withVersionCatalogs

apply<DetektPlugin>()

configure<DetektExtension> {
    source = project.files("src/main/kotlin")
    println("detekt: rootDir $rootDir")
    // Так как `convention.detekt` находится в includeBuild 'build-system'.
    // Это значит, что если есть `convention.detekt` плагин то должен быть и includeBuild с именем 'build-system'.
    // Однако в мета-проектах аля:
    // ':generatePrecompiledScriptPluginAccessors:accessors9671554153437552041'
    // почему-то есть плагин `convention.detekt`, но нету includeBuild с именем 'build-system'.
    // Делаем хак, что если это мета-проект с генерацией accessors - то не настраиваем detekt.
    if (!project.displayName.contains("generatePrecompiledScriptPluginAccessors")) {
        try {
            val buildSystemProjectDir = gradle.includedBuild("build-system").projectDir.path
            val configFilePath = "$buildSystemProjectDir/.detekt/config.yml"
            if (file(configFilePath).exists()) {
                config = files(configFilePath)
            } else {
                throw GradleException("Detekt config not found in path: '$configFilePath'")
            }
        } catch (e: UnknownDomainObjectException) {
            throw GradleException("Include build with name 'build-system' not found in project: '${project.displayName}'.")
        }
    }
    if (project.name != "gradle-kotlin-dsl-accessors" &&
        !project.name.contains("generatePrecompiledScriptPluginAccessors")
    ) {
        baseline = findDetektBaselineAll(project) // использовать бейзлайн, общий на все проекты
    }
}


dependencies {
    withVersionCatalogs {
        "detektPlugins"(base.staticAnalysis.detekt.formatting)
        "detektPlugins"("com.sdds.build.system:detekt-rules")
    }
}

tasks.withType<Detekt>().configureEach {
    parallel = true
    ignoreFailures = false
    buildUponDefaultConfig = true

    reports {
        xml {
            required.set(false)
        }

        html {
            required.set(false)
        }

        md {
            required.set(false)
        }

        sarif {
            required.set(false)
        }

        txt {
            required.set(true)
            outputLocation.set(project.file("build/reports/detekt.txt"))
        }
    }
    exclude("**/resources/**", "**/build/**")
    include("**/*.kt")
}

tasks.withType<Detekt>().configureEach {
    withVersionCatalogs {
        jvmTarget = versions.global.jvmTarget.get()
    }
    val detektRulesAssembleTask = gradle
        .includedBuild("build-system")
        .task(":detekt-rules:assemble")
    dependsOn(detektRulesAssembleTask)
}
