package com.sdds.detekt.rules

import io.gitlab.arturbosch.detekt.api.Config
import io.gitlab.arturbosch.detekt.api.RuleSet
import io.gitlab.arturbosch.detekt.api.RuleSetProvider

/**
 * Провайдер кастомных detekt правил
 * @author Малышев Александр on 20.02.2024
 */
class CustomRulesProvider : RuleSetProvider {

    override val ruleSetId = "custom-rules"

    override fun instance(config: Config) = RuleSet(
        ruleSetId,
        listOf(
            CompanionObjectInEndRule(config),
            SuppressLintUsageRule(config),
            TodoPatternRule(config),
        )
    )
}
