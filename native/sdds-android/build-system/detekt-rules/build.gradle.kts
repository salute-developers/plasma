plugins {
    id("org.gradle.kotlin.kotlin-dsl")
}

group = "com.sdds.build.system"

dependencies {
    implementation(libs.base.kotlin.stdlib)
    implementation(libs.base.staticAnalysis.detekt.api)
    testImplementation(libs.base.staticAnalysis.detekt.test)
}
