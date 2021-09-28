import Runeword from "@App/Runeword";

import Item from "@App/Type/Item";
import StatType from "@App/Type/Stat";

import * as Rune from "@App/Runes";
import Stat from "@App/Stat";
import Character from "@App/Type/Character";

export default new Runeword(
    "Myth (Barbarian)",
    [Item.BodyArmor],
    [Rune.Hel, Rune.Amn, Rune.Nef],
    [
        new Stat(StatType.Default, "3% Chance To Cast Level 1 Howl When Struck"),
        new Stat(StatType.Default, "10% Chance To Cast Level 1 Taunt On Striking"),
        new Stat(StatType.Skill, "+2 To Barbarian Skill Levels"),
        new Stat(StatType.Defense, "+30 Defense Vs. Missile"),
        new Stat(StatType.Defense, "Replenish Life +10"),
        new Stat(StatType.Damage, "Attacker Takes Damage of 14"),
        new Stat(StatType.Special, "Requirements -15%"),
    ],
    Character.Barbarian
);
