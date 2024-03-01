pluginManagement {
    repositories {
        google()
        mavenCentral()
        gradlePluginPortal()
    }
}

rootProject.name = "sdds-android"

includeBuild("build-system")
includeBuild("sdds-core")
