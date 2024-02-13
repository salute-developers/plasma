plugins {
    id(buildsrc.Plugins.Conventions.ANDROID_LIB)
}

android {
    namespace = "com.sdds.compose.uikit"
}

dependencies {

    val composeBom = platform(buildsrc.Dependencies.AndroidX.Compose.BOM)
    implementation(composeBom)
    implementation(buildsrc.Dependencies.AndroidX.Compose.FOUNDATION)

    // Preview support
    implementation(buildsrc.Dependencies.AndroidX.Compose.UI_TOOLING_PREVIEW)
    debugImplementation(buildsrc.Dependencies.AndroidX.Compose.UI_TOOLING)

    // UI Tests
    androidTestImplementation(composeBom)
    androidTestImplementation(buildsrc.Dependencies.Test.UI.Compose.JUNIT4)
    debugImplementation(buildsrc.Dependencies.Test.UI.Compose.UI_TEST_MANIFEST)

    // Unit tests
    testImplementation(buildsrc.Dependencies.Test.Unit.JUNIT)

}
