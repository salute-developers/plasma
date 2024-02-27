package utils

import org.gradle.accessors.dm.LibrariesForLibs
import java.io.File
import org.gradle.api.Project
import org.gradle.kotlin.dsl.the

fun findDetektBaselineAll(project: Project): File =
    try {
        val bs = project.gradle.includedBuild("build-system")
        File("${bs.projectDir}/.detekt/detekt-baseline-all.xml")
    } catch (e: Throwable) {
        project.logger.warn("${project.displayName}: fallback to use project-specific 'config/detekt-baseline.xml'")
        File("${project.projectDir}/.detekt/detekt-baseline.xml")
    }

inline fun Project.withVersionCatalogs(block: LibrariesForLibs.() -> Unit) {
    // если тут не поставить эту проверку,
    // то в момент компиляции конвеншенов будем получать ошибку о том что такой extension не зарегистрирован
    // https://github.com/gradle/gradle/issues/15383
    if (name != "gradle-kotlin-dsl-accessors") {
        val libs = the<LibrariesForLibs>()
        block(libs)
    }
}
