import Runeword from "@App/Runeword";

import Item from "@App/Type/Item";
import StatType from "@App/Type/Stat";

import * as Rune from "@App/Runes";
import Stat from "@App/Stat";
import Character from "@App/Type/Character";

export default new Runeword(
    "Principle (Paladin)",
    [Item.BodyArmor],
    [Rune.Ral, Rune.Gul, Rune.Eld],
    [
        new Stat(StatType.Default, "100% Chance To Cast Level 5 Holy Bolt On Striking"),
        new Stat(StatType.Skill, "+2 To Paladin Skill Levels"),
        new Stat(StatType.Damage, "+50% Damage to Undead"),
        new Stat(StatType.Stats, "+100-150 To Life (varies)"),
        new Stat(StatType.Special, "15% Slower Stamina Drain"),
        new Stat(StatType.Resistance, "+5% To Maximum Poison Resist"),
        new Stat(StatType.Resistance, "Fire Resist +30%"),
    ],
    Character.Paladin
);
