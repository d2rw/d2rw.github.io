import Runeword from "@App/Runeword";

import Item from "@App/Type/Item";
import StatType from "@App/Type/Stat";

import * as Rune from "@App/Runes";
import Stat from "@App/Stat";

export default new Runeword(
    "Pride",
    [Item.Polearm],
    [Rune.Cham, Rune.Sur, Rune.Io, Rune.Lo],
    [
        new Stat(StatType.Default, "25% Chance To Cast Level 17 Fire Wall When Struck"),
        new Stat(StatType.Aura, "Level 16-20 Concentration Aura When Equipped (varies)"),
        new Stat(StatType.AttackRating, "260-300% Bonus To Attack Rating (varies)"),
        new Stat(StatType.Damage, "+1-99% Damage To Demons (Based on Character Level)"),
        new Stat(StatType.Damage, "Adds 50-280 Lightning Damage"),
        new Stat(StatType.Special, "20% Deadly Strike"),
        new Stat(StatType.Special, "Hit Blinds Target"),
        new Stat(StatType.Special, "Freezes Target +3"),
        new Stat(StatType.Stats, "+10 To Vitality"),
        new Stat(StatType.Defense, "Replenish Life +8"),
        new Stat(StatType.GoldFind, "1.875-185.625% Extra Gold From Monsters (Based on Character Level)"),
    ],
    undefined,
    true
);
