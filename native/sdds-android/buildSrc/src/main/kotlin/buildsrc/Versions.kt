package buildsrc

import org.gradle.api.JavaVersion

/**
 * Версии зависимостей
 * @author Малышев Александр on 08.02.2024
 */
// Версии добавляются в алфавитном порядке
object Versions {

    object Global {
        // Не забывать синхронизировать с `buildSrc/build.gradle.kts`
        const val GRADLE = "7.4.2"
        const val JVM_TARGET = "1.8"
        // Не забывать синхронизировать с `buildSrc/build.gradle.kts`
        const val KOTLIN = "1.7.10"
        val java = JavaVersion.VERSION_1_8
    }

    object AndroidX {
        const val CORE = "1.7.0"
        const val APPCOMPAT = "1.3.1"

        object Compose {
            const val BOM = "2024.02.00"
        }
    }

    object SandboxApp {
        const val VERSION_CODE = 1
        const val VERSION_NAME = "0.0.1"
    }

    object Test {
        const val JUNIT = "4.13.2"
        const val JUNIT_INTEGRATION = "1.1.3"
        const val ESPRESSO = "3.4.0"
    }
}
