@Suppress("DSL_SCOPE_VIOLATION")
plugins {
    id("convention.android-lib")
    alias(libs.plugins.paparazzi)
}

android {
    namespace = "com.sdds.uikit"
}

dependencies {
    implementation(libs.base.androidX.appcompat)
    androidTestImplementation(libs.base.test.ui.espresso.core)
}
