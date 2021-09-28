import Runeword from "@App/Runeword";

import Item from "@App/Type/Item";
import StatType from "@App/Type/Stat";

import * as Rune from "@App/Runes";
import Stat from "@App/Stat";

import Character from "@App/Type/Character";

export default new Runeword(
    "Memory",
    [Item.Stave],
    [Rune.Lum, Rune.Io, Rune.Sol, Rune.Eth],
    [
        new Stat(StatType.Skill, "+3 to Sorceress Skill Levels"),
        new Stat(StatType.FasterCastRate, "33% Faster Cast Rate"),
        new Stat(StatType.Stats, "Increase Maximum Mana 20%"),
        new Stat(StatType.Skill, "+3 Energy Shield (Sorceress Only)"),
        new Stat(StatType.Skill, "+2 Static Field (Sorceress Only)"),
        new Stat(StatType.Stats, "+10 To Energy"),
        new Stat(StatType.Stats, "+10 To Vitality"),
        new Stat(StatType.Damage, "+9 To Minimum Damage"),
        new Stat(StatType.Damage, "-25% Target Defense"),
        new Stat(StatType.Defense, "Magic Damage Reduced By 7"),
        new Stat(StatType.Defense, "+50% Enhanced Defense"),
    ],
    Character.Sorceress
);