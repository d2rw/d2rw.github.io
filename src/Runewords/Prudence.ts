import Runeword from "@App/Runeword";

import Item from "@App/Type/Item";
import StatType from "@App/Type/Stat";

import * as Rune from "@App/Runes";
import Stat from "@App/Stat";

export default new Runeword(
    "Prudence",
    [Item.BodyArmor],
    [Rune.Mal, Rune.Tir],
    [
        new Stat(StatType.FasterHitRecovery, "+25% Faster Hit Recovery"),
        new Stat(StatType.Defense, "+140-170% Enhanced Defense (varies)"),
        new Stat(StatType.Resistance, "All Resistances +25-35 (varies)"),
        new Stat(StatType.Defense, "Damage Reduced by 3"),
        new Stat(StatType.Defense, "Magic Damage Reduced by 17"),
        new Stat(StatType.Defense, "+2 To Mana After Each Kill"),
        new Stat(StatType.Default, "+1 To Light Radius"),
        new Stat(StatType.Special, "Repairs Durability 1 In 4 Seconds"),
    ],
);
