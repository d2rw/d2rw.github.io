import Runeword from "@App/Runeword";

import Item from "@App/Type/Item";
import StatType from "@App/Type/Stat";

import * as Rune from "@App/Runes";
import Stat from "@App/Stat";
import Character from "@App/Type/Character";

export default new Runeword(
    "Peace (Amazon)",
    [Item.BodyArmor],
    [Rune.Shael, Rune.Thul, Rune.Amn],
    [
        new Stat(StatType.Default, "4% Chance To Cast Level 5 Slow Missiles When Struck"),
        new Stat(StatType.Default, "2% Chance To Cast level 15 Valkyrie On Striking"),
        new Stat(StatType.Skill, "+2 To Amazon Skill Levels"),
        new Stat(StatType.FasterHitRecovery, "+20% Faster Hit Recovery"),
        new Stat(StatType.Skill, "+2 To Critical Strike"),
        new Stat(StatType.Resistance, "Cold Resist +30%"),
        new Stat(StatType.Defense, "Attacker Takes Damage of 14"),
    ],
    Character.Amazon
);
