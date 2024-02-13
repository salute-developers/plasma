package buildsrc

/**
 * Зависимости проекта.
 * @author Малышев Александр on 09.02.2024
 */
// Новые зависимости добавляются в алфавитном порядке
object Dependencies {

    object AndroidX {
        const val APPCOMPAT = "androidx.appcompat:appcompat:${Versions.AndroidX.APPCOMPAT}"
        const val CORE = "androidx.core:core-ktx:${Versions.AndroidX.CORE}"
        const val GRADLE_PLUGIN = "com.android.tools.build:gradle:${Versions.Global.GRADLE}"

        object Compose {
            const val BOM = "androidx.compose:compose-bom:${Versions.AndroidX.Compose.BOM}"
            const val FOUNDATION = "androidx.compose.foundation:foundation"
            const val UI_TOOLING = "androidx.compose.ui:ui-tooling"
            const val UI_TOOLING_PREVIEW = "androidx.compose.ui:ui-tooling-preview"
        }
    }

    object Kotlin {
        const val GRADLE_PLUGIN = "org.jetbrains.kotlin:kotlin-gradle-plugin:${Versions.Global.KOTLIN}"
        const val STDLIB = "org.jetbrains.kotlin:kotlin-stdlib:${Versions.Global.KOTLIN}"
    }

    object Test {

        object Integration {
            const val ESPRESSO_CORE = "androidx.test.espresso:espresso-core:${Versions.Test.ESPRESSO}"
            const val JUNIT = "androidx.test.ext:junit:${Versions.Test.JUNIT_INTEGRATION}"
        }

        object UI {
            object Compose {
                const val JUNIT4 = "androidx.compose.ui:ui-test-junit4"
                const val UI_TEST_MANIFEST = "androidx.compose.ui:ui-test-manifest"
            }
        }

        object Unit {
            const val JUNIT = "junit:junit:${Versions.Test.JUNIT}"
        }
    }
}
