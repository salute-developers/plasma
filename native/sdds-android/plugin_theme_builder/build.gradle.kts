import buildsrc.Versions

plugins {
    id(buildsrc.Plugins.JAVA_GRADLE_PLUGIN)
    id(buildsrc.Plugins.KOTLIN_JVM)
}

java {
    sourceCompatibility = Versions.Global.java
    targetCompatibility = Versions.Global.java
}

gradlePlugin {
    plugins {
        create("simplePlugin") {
            id = "com.sdds.plugin.theme-builder"
            implementationClass = "com.sdds.plugin.themebuilder.ThemeBuilderPlugin"
        }
    }
}
