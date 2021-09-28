import Runeword from "@App/Runeword";

import Item from "@App/Type/Item";
import StatType from "@App/Type/Stat";

import * as Rune from "@App/Runes";
import Stat from "@App/Stat";

export default new Runeword(
    "Doom",
    [Item.Axe, Item.Polearm, Item.Hammer],
    [Rune.Hel, Rune.Ohm, Rune.Um, Rune.Lo, Rune.Cham],
    [
        new Stat(StatType.Default, "5% Chance To Cast Level 18 Volcano On Striking"),
        new Stat(StatType.Aura, "Level 12 Holy Freeze Aura When Equipped"),
        new Stat(StatType.Skill, "+2 To All Skills"),
        new Stat(StatType.IncreasedAttackSpeed, "+45% Increased Attack Speed"),
        new Stat(StatType.Damage, "+330-370% Enhanced Damage (varies)"),
        new Stat(StatType.Damage, "-(40-60)% To Enemy Cold Resistance (varies)"),
        new Stat(StatType.Special, "20% Deadly Strike"),
        new Stat(StatType.Special, "25% Chance of Open Wounds"),
        new Stat(StatType.Special, "Prevent Monster Heal"),
        new Stat(StatType.Special, "Freezes Target +3"),
        new Stat(StatType.Special, "Requirements -20%"),
    ],
);
