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
            id = "ru.plasma.plugin.token-generator"
            implementationClass = "ru.plasma.plugin.tokengen.TokenGeneratorPlugin"
        }
    }
}
