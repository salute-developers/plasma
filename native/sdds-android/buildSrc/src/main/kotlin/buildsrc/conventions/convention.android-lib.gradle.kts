plugins {
    id("com.android.library")
    id("org.jetbrains.kotlin.android")
}

android {
    compileSdk = buildsrc.SdkConfig.COMPILE_SDK

    defaultConfig {
        minSdk = buildsrc.SdkConfig.MIN_SDK
        testInstrumentationRunner = "androidx.test.runner.AndroidJUnitRunner"
    }

    buildTypes {
        release {
            isMinifyEnabled = false
            proguardFiles(getDefaultProguardFile("proguard-android-optimize.txt"), "proguard-rules.pro")
        }
    }

    compileOptions {
        sourceCompatibility = buildsrc.Versions.Global.java
        targetCompatibility = buildsrc.Versions.Global.java
    }
    kotlinOptions {
        jvmTarget = buildsrc.Versions.Global.JVM_TARGET
    }
}
