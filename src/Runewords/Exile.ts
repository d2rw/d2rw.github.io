import Runeword from "@App/Runeword";

import Item from "@App/Type/Item";
import StatType from "@App/Type/Stat";

import * as Rune from "@App/Runes";
import Stat from "@App/Stat";
import Character from "@App/Type/Character";

export default new Runeword(
    "Exile",
    [Item.ShieldPaladin],
    [Rune.Vex, Rune.Ohm, Rune.Ist, Rune.Dol],
    [
        new Stat(StatType.Default, "15% Chance To Cast Level 5 Life Tap On Striking"),
        new Stat(StatType.Aura, "Level 13-16 Defiance Aura When Equipped (varies)"),
        new Stat(StatType.Skill, "+2 To Offensive Auras (Paladin Only)"),
        new Stat(StatType.FasterBlockRate, "+30% Faster Block Rate"),
        new Stat(StatType.Special, "Freezes Target"),
        new Stat(StatType.Defense, "+220-260% Enhanced Defense (varies)"),
        new Stat(StatType.Defense, "Replenish Life +7"),
        new Stat(StatType.Resistance, "+5% To Maximum Cold Resist"),
        new Stat(StatType.Resistance, "+5% To Maximum Fire Resist"),
        new Stat(StatType.MagicFind, "25% Better Chance Of Getting Magic Items"),
        new Stat(StatType.Defense, "Repairs 1 Durability in 4 Seconds"),
    ],
    Character.Paladin
);
