plugins {
    id("convention.android-app")
}

android {
    namespace = "com.sdds.sandbox"

    defaultConfig {
        applicationId = "com.sdds.sandbox"
        versionCode = 1
        versionName = "0.0.1"
    }
}

dependencies {
    implementation(libs.base.androidX.core)
    implementation(libs.base.androidX.appcompat)
}
