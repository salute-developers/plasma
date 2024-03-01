package com.sdds.detekt.rules

import io.gitlab.arturbosch.detekt.api.CodeSmell
import io.gitlab.arturbosch.detekt.api.Config
import io.gitlab.arturbosch.detekt.api.Debt
import io.gitlab.arturbosch.detekt.api.Entity
import io.gitlab.arturbosch.detekt.api.Issue
import io.gitlab.arturbosch.detekt.api.Rule
import io.gitlab.arturbosch.detekt.api.Severity
import org.jetbrains.kotlin.psi.KtClassBody
import org.jetbrains.kotlin.psi.KtObjectDeclaration
import org.jetbrains.kotlin.psi.psiUtil.endOffset

/**
 * Согласно официальным Kotlin Code Conventions необходимо размещать companion object в конце класса.
 * @author Малышев Александр on 20.02.2024
 */
internal class CompanionObjectInEndRule(config: Config = Config.empty) : Rule(config) {

    private val lineTrashHold = 3

    override val issue: Issue = Issue(
        id = "CompanionObjectInEnd",
        severity = Severity.Style,
        debt = Debt(mins = 1),
        description = "Companion object должен быть в самом конце класса"
    )

    override fun visitClassBody(classBody: KtClassBody) {
        val declarations = classBody.declarations.filterNotNull()
        if (declarations.isEmpty()) return

        val companionObject = declarations.firstOrNull { it is KtObjectDeclaration && it.isCompanion() } ?: return

        val endClass = classBody.endOffset
        val endCompanionObject = companionObject.endOffset

        if (endClass - endCompanionObject > lineTrashHold) {
            report(
                CodeSmell(
                    issue = issue,
                    entity = Entity.from(companionObject),
                    message = "Companion object должен быть в самом конце класса",
                )
            )
        }
    }
}
