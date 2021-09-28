import Runeword from "@App/Runeword";

import Item from "@App/Type/Item";
import StatType from "@App/Type/Stat";

import * as Rune from "@App/Runes";
import Stat from "@App/Stat";

export default new Runeword(
    "Smoke",
    [Item.BodyArmor],
    [Rune.Nef, Rune.Lum],
    [
        new Stat(StatType.Defense, "+75% Enhanced Defense"),
        new Stat(StatType.Defense, "+280 Defense Vs. Missile"),
        new Stat(StatType.Resistance, "All Resistances +50"),
        new Stat(StatType.FasterHitRecovery, "20% Faster Hit Recovery"),
        new Stat(StatType.Charges, "Level 6 Weaken (18 Charges)"),
        new Stat(StatType.Stats, "+10 To Energy"),
        new Stat(StatType.Default, "-1 To Light Radius"),
    ],
);