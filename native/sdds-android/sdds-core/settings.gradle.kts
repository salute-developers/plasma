pluginManagement {
    repositories {
        google()
        mavenCentral()
        gradlePluginPortal()
    }
}

dependencyResolutionManagement {
    versionCatalogs {
        create("libs") {
            from(files("../gradle/libs.versions.toml"))
        }
    }
}

rootProject.name = "sdds-core"

includeBuild("../build-system")
include(
    ":plugin_theme_builder",
    ":sandbox",
    ":uikit",
    ":uikit-compose"
)
