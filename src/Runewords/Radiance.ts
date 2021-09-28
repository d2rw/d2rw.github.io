import Runeword from "@App/Runeword";

import Item from "@App/Type/Item";
import StatType from "@App/Type/Stat";

import * as Rune from "@App/Runes";
import Stat from "@App/Stat";

export default new Runeword(
    "Radiance",
    [Item.Helm],
    [Rune.Nef, Rune.Sol, Rune.Ith],
    [
        new Stat(StatType.Defense, "+75% Enhanced Defense"),
        new Stat(StatType.Default, "+30 Defense Vs. Missile"),
        new Stat(StatType.Stats, "+10 To Energy"),
        new Stat(StatType.Stats, "+10 To Vitality"),
        new Stat(StatType.Defense, "15% Damage Goes To Mana"),
        new Stat(StatType.Defense, "Magic Damage Reduced By 3"),
        new Stat(StatType.Stats, "+33 To Mana"),
        new Stat(StatType.Defense, "Damage Reduced By 7"),
        new Stat(StatType.Default, "+5 To Light Radius"),
    ],
);