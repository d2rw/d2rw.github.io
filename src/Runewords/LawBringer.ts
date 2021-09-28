import Runeword from "@App/Runeword";

import Item from "@App/Type/Item";
import StatType from "@App/Type/Stat";

import * as Rune from "@App/Runes";
import Stat from "@App/Stat";

export default new Runeword(
    "Lawbringer",
    [Item.Sword, Item.Hammer, Item.Scepter],
    [Rune.Amn, Rune.Lem, Rune.Ko],
    [
        new Stat(StatType.Default, "20% Chance To Cast Level 15 Decrepify On Striking"),
        new Stat(StatType.Aura, "Level 16-18 Sanctuary Aura When Equipped (varies)"),
        new Stat(StatType.Damage, "-50% Target Defense"),
        new Stat(StatType.Damage, "Adds 150-210 Fire Damage"),
        new Stat(StatType.Damage, "Adds 130-180 Cold Damage"),
        new Stat(StatType.Defense, "7% Life Stolen Per Hit"),
        new Stat(StatType.Special, "Slain Monsters Rest In Peace"),
        new Stat(StatType.Defense, "+200-250 Defense Vs. Missile (varies)"),
        new Stat(StatType.Stats, "+10 To Dexterity"),
        new Stat(StatType.GoldFind, "75% Extra Gold From Monsters"),
    ],
    undefined,
    true
);
