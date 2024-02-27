import utils.withVersionCatalogs

plugins {
    id("com.android.library")
    kotlin("android")
    id("org.gradle.android.cache-fix")
    id("convention.detekt")
    id("convention.spotless")
}

android {

    withVersionCatalogs {
        compileSdk = versions.global.compileSdk.get().toInt()

        defaultConfig {
            minSdk = versions.global.minSdk.get().toInt()
            testInstrumentationRunner = "androidx.test.runner.AndroidJUnitRunner"
        }
        kotlinOptions.jvmTarget = versions.global.jvmTarget.get()
    }

    buildTypes {
        release {
            isMinifyEnabled = false
            proguardFiles(getDefaultProguardFile("proguard-android-optimize.txt"), "proguard-rules.pro")
        }
    }

    compileOptions {
        sourceCompatibility = JavaVersion.VERSION_1_8
        targetCompatibility = JavaVersion.VERSION_1_8
    }
}

dependencies {
    withVersionCatalogs {
        implementation(base.kotlin.stdlib)
        testImplementation(base.test.unit.jUnit)
        testImplementation(base.test.unit.mockk)
        testImplementation(base.test.unit.robolectric)
    }
}
