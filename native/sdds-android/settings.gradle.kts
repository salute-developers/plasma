pluginManagement {
    repositories {
        google()
        mavenCentral()
        gradlePluginPortal()
    }
}

rootProject.name = "sdds-android"
include(
    ":plugin_theme_builder",
    ":sandbox"
)
include(":uikit")
include(":uikit-compose")
