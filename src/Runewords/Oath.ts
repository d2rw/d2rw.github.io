import Runeword from "@App/Runeword";

import Item from "@App/Type/Item";
import StatType from "@App/Type/Stat";

import * as Rune from "@App/Runes";
import Stat from "@App/Stat";

export default new Runeword(
    "Oath",
    [Item.Sword, Item.Axe, Item.Mace],
    [Rune.Shael, Rune.Pul, Rune.Mal, Rune.Lum],
    [
        new Stat(StatType.Default, "30% Chance To Cast Level 20 Bone Spirit On Striking"),
        new Stat(StatType.Special, "Indestructible"),
        new Stat(StatType.IncreasedAttackSpeed, "+50% Increased Attack Speed"),
        new Stat(StatType.Damage, "+210-340% Enhanced Damage (varies)"),
        new Stat(StatType.Damage, "+75% Damage To Demons"),
        new Stat(StatType.AttackRating, "+100 To Attack Rating Against Demons"),
        new Stat(StatType.Special, "Prevent Monster Heal"),
        new Stat(StatType.Stats, "+10 To Energy"),
        new Stat(StatType.Defense, "+10-15 Magic Absorb (varies)"),
        new Stat(StatType.Charges, "Level 16 Heart Of Wolverine (20 Charges)"),
        new Stat(StatType.Charges, "Level 17 Iron Golem (14 Charges)"),
    ],
    undefined,
    true
);
