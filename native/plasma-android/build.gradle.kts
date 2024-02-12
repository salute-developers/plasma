buildscript {
    repositories {
        google()
        mavenCentral()
    }
    dependencies {
        classpath(buildsrc.Dependencies.AndroidX.GRADLE_PLUGIN)
        classpath(buildsrc.Dependencies.Kotlin.GRADLE_PLUGIN)
    }
}

allprojects {
    repositories {
        google()
        mavenCentral()
    }
}
