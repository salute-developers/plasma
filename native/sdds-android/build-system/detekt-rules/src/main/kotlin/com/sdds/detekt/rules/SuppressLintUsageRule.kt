package com.sdds.detekt.rules

import io.gitlab.arturbosch.detekt.api.CodeSmell
import io.gitlab.arturbosch.detekt.api.Config
import io.gitlab.arturbosch.detekt.api.Debt
import io.gitlab.arturbosch.detekt.api.Entity
import io.gitlab.arturbosch.detekt.api.Issue
import io.gitlab.arturbosch.detekt.api.Rule
import io.gitlab.arturbosch.detekt.api.Severity
import org.jetbrains.kotlin.psi.KtImportDirective

/**
 * Аннотация @SuppressLint должна быть заменена на @kotlin.Suppress
 * @author Малышев Александр on 20.02.2024
 */
class SuppressLintUsageRule(config: Config = Config.empty) : Rule(config) {

    override val issue: Issue = Issue(
        id = "SuppressLintUsage",
        severity = Severity.Defect,
        debt = Debt(mins = 1),
        description = "Аннотация @SuppressLint должна быть заменена на @kotlin.Suppress"
    )

    override fun visitImportDirective(importDirective: KtImportDirective) {
        super.visitImportDirective(importDirective)
        if (importDirective.text.contains("android.annotation.SuppressLint")) {
            report(
                CodeSmell(
                    issue = issue,
                    entity = Entity.from(importDirective),
                    message = "Заменить все аннотации @android.annotation.SuppressLint на @kotlin.Suppress и " +
                        "удалить зависимости от android в build.gradle модуле, если в них отпадет необходимость " +
                        "после вышеупомянутых правок аннотаций."
                )
            )
        }
    }
}
