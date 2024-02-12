pluginManagement {
    repositories {
        google()
        mavenCentral()
        gradlePluginPortal()
    }
}

rootProject.name = "plasma-android"
include(
    ":plugin_token_generator",
    ":sandbox"
)
