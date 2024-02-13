package buildsrc

/**
 * Плагины проекта.
 * @author Малышев Александр on 12.02.2024
 */
// Плагины добавляются в алфавитном порядке
object Plugins {
    const val ANDROID_LIB = "com.android.library"
    const val APPLICATION = "com.android.application"
    const val JAVA_GRADLE_PLUGIN = "java-gradle-plugin"
    const val KOTLIN_ANDROID = "org.jetbrains.kotlin.android"
    const val KOTLIN_JVM = "org.jetbrains.kotlin.jvm"


    object Conventions {
        const val ANDROID_APP = "convention.android-app"
        const val ANDROID_LIB = "convention.android-lib"
    }
}
