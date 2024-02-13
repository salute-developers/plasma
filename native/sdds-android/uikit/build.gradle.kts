plugins {
    id(buildsrc.Plugins.Conventions.ANDROID_LIB)
}

android {
    namespace = "com.sdds.uikit"
}

dependencies {
    implementation(buildsrc.Dependencies.AndroidX.APPCOMPAT)
    testImplementation(buildsrc.Dependencies.Test.Unit.JUNIT)
}
