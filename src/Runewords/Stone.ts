import Runeword from "@App/Runeword";

import Item from "@App/Type/Item";
import StatType from "@App/Type/Stat";

import * as Rune from "@App/Runes";
import Stat from "@App/Stat";

export default new Runeword(
    "Stone",
    [Item.BodyArmor],
    [Rune.Shael, Rune.Um, Rune.Pul, Rune.Lum],
    [
        new Stat(StatType.FasterHitRecovery, "+60% Faster Hit Recovery"),
        new Stat(StatType.Defense, "+250-290% Enhanced Defense (varies)"),
        new Stat(StatType.Defense, "+300 Defense Vs. Missile"),
        new Stat(StatType.Stats, "+16 To Strength"),
        new Stat(StatType.Stats, "+16 To Vitality"),
        new Stat(StatType.Stats, "+10 To Energy"),
        new Stat(StatType.Resistance, "All Resistances +15"),
        new Stat(StatType.Charges, "Level 16 Molten Boulder (80 Charges)"),
        new Stat(StatType.Charges, "Level 16 Clay Golem (16 Charges)"),
    ],
);
