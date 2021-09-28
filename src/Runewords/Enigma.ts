import Runeword from "@App/Runeword";

import Item from "@App/Type/Item";
import StatType from "@App/Type/Stat";

import * as Rune from "@App/Runes";
import Stat from "@App/Stat";

export default new Runeword(
    "Enigma",
    [Item.BodyArmor],
    [Rune.Jah, Rune.Ith, Rune.Ber],
    [
        new Stat(StatType.Skill, "+2 To All Skills"),
        new Stat(StatType.FasterRunWalk, "+45% Faster Run/Walk"),
        new Stat(StatType.Skill, "+1 To Teleport"),
        new Stat(StatType.Defense, "+750-775 Defense (varies)"),
        new Stat(StatType.Stats, "+ (0.75 Per Character Level) +0-74 To Strength (Based On Character Level)"),
        new Stat(StatType.Stats, "Increase Maximum Life 5%"),
        new Stat(StatType.Defense, "Damage Reduced By 8%"),
        new Stat(StatType.Defense, "+14 Life After Each Kill"),
        new Stat(StatType.Defense, "15% Damage Taken Goes To Mana"),
        new Stat(StatType.MagicFind, "+ (1 Per Character Level) +1-99% Better Chance of Getting Magic Items (Based On Character Level)"),
    ],
);
