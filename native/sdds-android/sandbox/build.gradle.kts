plugins {
    id(buildsrc.Plugins.Conventions.ANDROID_APP)
}

android {
    namespace = "com.sdds.sandbox"

    defaultConfig {
        applicationId = "com.sdds.sandbox"
        versionCode = buildsrc.Versions.SandboxApp.VERSION_CODE
        versionName = buildsrc.Versions.SandboxApp.VERSION_NAME
    }
}

dependencies {
    implementation(buildsrc.Dependencies.AndroidX.CORE)
    implementation(buildsrc.Dependencies.AndroidX.APPCOMPAT)
}
