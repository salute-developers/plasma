import buildsrc.Dependencies
import buildsrc.SdkConfig
import buildsrc.Versions

plugins {
    id(buildsrc.Plugins.APPLICATION)
    id(buildsrc.Plugins.KOTLIN_ANDROID)
}

android {
    namespace = "ru.plasma.sandbox"
    compileSdk = SdkConfig.COMPILE_SDK

    defaultConfig {
        applicationId = "ru.plasma.sandbox"
        minSdk = SdkConfig.MIN_SDK
        targetSdk = SdkConfig.TARGET_SDK
        versionCode = Versions.SandboxApp.VERSION_CODE
        versionName = Versions.SandboxApp.VERSION_NAME

        testInstrumentationRunner = "androidx.test.runner.AndroidJUnitRunner"
    }

    compileOptions {
        sourceCompatibility = Versions.Global.java
        targetCompatibility = Versions.Global.java
    }
    kotlinOptions {
        jvmTarget = Versions.Global.JVM_TARGET
    }
}

dependencies {
    implementation(Dependencies.AndroidX.CORE)
    implementation(Dependencies.AndroidX.APPCOMPAT)
}
