import Runeword from "@App/Runeword";

import Item from "@App/Type/Item";
import StatType from "@App/Type/Stat";

import * as Rune from "@App/Runes";
import Stat from "@App/Stat";

export default new Runeword(
    "Gloom",
    [Item.BodyArmor],
    [Rune.Fal, Rune.Um, Rune.Pul],
    [
        new Stat(StatType.Default, "15% Chance To Cast Level 3 Dim Vision When Struck"),
        new Stat(StatType.FasterHitRecovery, "+10% Faster Hit Recovery"),
        new Stat(StatType.Defense, "+200-260% Enhanced Defense (varies)"),
        new Stat(StatType.Stats, "+10 To Strength"),
        new Stat(StatType.Resistance, "All Resistances +45"),
        new Stat(StatType.Special, "Half Freeze Duration"),
        new Stat(StatType.Defense, "5% Damage Taken Goes To Mana"),
        new Stat(StatType.Default, "-3 To Light Radius"),
    ],
);