import Runeword from "@App/Runeword";

import Item from "@App/Type/Item";
import StatType from "@App/Type/Stat";

import * as Rune from "@App/Runes";
import Stat from "@App/Stat";
import Character from "@App/Type/Character";

export default new Runeword(
    "Enlightenment (Sorceress)",
    [Item.BodyArmor],
    [Rune.Pul, Rune.Ral, Rune.Sol],
    [
        new Stat(StatType.Default, "5% Chance To Cast Level 15 Blaze When Struck"),
        new Stat(StatType.Default, "5% Chance To Cast level 15 Fire Ball On Striking"),
        new Stat(StatType.Skill, "+2 To Sorceress Skill Levels"),
        new Stat(StatType.Skill, "+1 To Warmth"),
        new Stat(StatType.Defense, "+30% Enhanced Defense"),
        new Stat(StatType.Resistance, "Fire Resist +30%"),
        new Stat(StatType.Defense, "Damage Reduced By 7"),
    ],
    Character.Sorceress
);
