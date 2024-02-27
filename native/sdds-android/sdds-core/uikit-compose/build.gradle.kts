@Suppress("DSL_SCOPE_VIOLATION")
plugins {
    id("convention.android-lib")
    alias(libs.plugins.paparazzi)
}


android {
    namespace = "com.sdds.compose.uikit"
}

dependencies {

    val composeBom = platform(libs.base.androidX.compose.bom)
    implementation(composeBom)
    implementation(libs.base.androidX.compose.foundation)

    // Preview support
    implementation(libs.base.androidX.compose.uiTooling.preview)
    debugImplementation(libs.base.androidX.compose.uiTooling)

    // UI Tests
    androidTestImplementation(composeBom)
    androidTestImplementation(libs.base.test.ui.compose.jUnit4)
    debugImplementation(libs.base.test.ui.compose.uiTestManifest)

    // Unit tests
    testImplementation(libs.base.test.unit.jUnit)

}
