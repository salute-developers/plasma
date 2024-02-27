@Suppress("DSL_SCOPE_VIOLATION")
plugins {
    `java-gradle-plugin`
    alias(libs.plugins.kotlin.jvm)
    id("convention.detekt")
    id("convention.spotless")
}

java {
    sourceCompatibility = JavaVersion.VERSION_1_8
    targetCompatibility = JavaVersion.VERSION_1_8
}

gradlePlugin {
    plugins {
        create("simplePlugin") {
            id = "com.sdds.plugin.theme-builder"
            implementationClass = "com.sdds.plugin.themebuilder.ThemeBuilderPlugin"
        }
    }
}

dependencies {
    implementation(libs.base.kotlin.stdlib)
    testImplementation(libs.base.test.unit.jUnit)
    testImplementation(libs.base.test.unit.mockk)
}
