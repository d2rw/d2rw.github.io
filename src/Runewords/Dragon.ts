import Runeword from "@App/Runeword";

import Item from "@App/Type/Item";
import StatType from "@App/Type/Stat";

import * as Rune from "@App/Runes";
import Stat from "@App/Stat";

export default new Runeword(
    "Dragon",
    [Item.BodyArmor, Item.Shield],
    [Rune.Sur, Rune.Lo, Rune.Sol],
    [
        new Stat(StatType.Default, "20% Chance to Cast Level 18 Venom When Struck"),
        new Stat(StatType.Default, "12% Chance To Cast Level 15 Hydra On Striking"),
        new Stat(StatType.Aura, "Level 14 Holy Fire Aura When Equipped"),
        new Stat(StatType.Defense, "+360 Defense"),
        new Stat(StatType.Defense, "+230 Defense Vs. Missile"),
        new Stat(StatType.Stats, "+3-5 To All Attributes (varies)"),
        new Stat(StatType.Stats, "+0.375-37.125 To Strength (Based on Character Level)"),
        new Stat(StatType.Stats, "Increase Maximum Mana 5% (Armor Only)"),
        new Stat(StatType.Stats, "+50 To Mana (Shields Only)"),
        new Stat(StatType.Resistance, "+5% To Maximum Lightning Resist"),
        new Stat(StatType.Defense, "Damage Reduced by 7"),
    ],
    undefined,
    true
);
