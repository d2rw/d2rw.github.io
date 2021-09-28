import Runeword from "@App/Runeword";

import Item from "@App/Type/Item";
import StatType from "@App/Type/Stat";

import * as Rune from "@App/Runes";
import Stat from "@App/Stat";

export default new Runeword(
    "Ancient's Pledge",
    [Item.Shield],
    [Rune.Ral, Rune.Ort, Rune.Tal],
    [
        new Stat(StatType.Defense, "50% Enhanced Defense"),
        new Stat(StatType.Resistance, "Cold Resist +43%"),
        new Stat(StatType.Resistance, "Fire Resist +48%"),
        new Stat(StatType.Resistance, "Lightning Resist +48%"),
        new Stat(StatType.Resistance, "Poison Resist +48%"),
        new Stat(StatType.Default, "10% Damage Goes To Mana"),
    ]
);
