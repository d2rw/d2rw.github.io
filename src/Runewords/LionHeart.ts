import Runeword from "@App/Runeword";

import Item from "@App/Type/Item";
import StatType from "@App/Type/Stat";

import * as Rune from "@App/Runes";
import Stat from "@App/Stat";

export default new Runeword(
    "Lionheart",
    [Item.BodyArmor],
    [Rune.Hel, Rune.Lum, Rune.Fal],
    [
        new Stat(StatType.Damage, "+20% Enhanced Damage"),
        new Stat(StatType.Special, "Requirements -15%"),
        new Stat(StatType.Stats, "+25 To Strength"),
        new Stat(StatType.Stats, "+10 To Energy"),
        new Stat(StatType.Stats, "+20 To Vitality"),
        new Stat(StatType.Stats, "+15 To Dexterity"),
        new Stat(StatType.Stats, "+50 To Life"),
        new Stat(StatType.Resistance, "All Resistances +30"),
    ],
);