buildscript {
    repositories {
        google()
        mavenCentral()
    }
    dependencies {
        classpath(buildsrc.Dependencies.AndroidX.GRADLE_PLUGIN)
        classpath(buildsrc.Dependencies.Kotlin.GRADLE_PLUGIN)
        classpath("org.jetbrains.kotlin:kotlin-gradle-plugin:1.7.10")
    }
}

allprojects {
    repositories {
        google()
        mavenCentral()
    }
}
