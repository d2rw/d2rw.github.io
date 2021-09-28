import Runeword from "@App/Runeword";

import Item from "@App/Type/Item";
import StatType from "@App/Type/Stat";

import * as Rune from "@App/Runes";
import Stat from "@App/Stat";

export default new Runeword(
    "Rift",
    [Item.Polearm,Item.Scepter],
    [Rune.Hel, Rune.Ko, Rune.Lem, Rune.Gul],
    [
        new Stat(StatType.Default, "20% Chance To Cast Level 16 Tornado On Striking"),
        new Stat(StatType.Default, "16% Chance To Cast Level 21 Frozen Orb On Attack"),
        new Stat(StatType.AttackRating, "20% Bonus To Attack Rating"),
        new Stat(StatType.Damage, "Adds 160-250 Magic Damage"),
        new Stat(StatType.Damage, "Adds 60-180 Fire Damage"),
        new Stat(StatType.Stats, "+5-10 To All Stats (varies)"),
        new Stat(StatType.Stats, "+10 To Dexterity"),
        new Stat(StatType.Defense, "38% Damage Taken Goes To Mana"),
        new Stat(StatType.GoldFind, "75% Extra Gold From Monsters"),
        new Stat(StatType.Charges, "Level 15 Iron Maiden (40 Charges)"),
        new Stat(StatType.Special, "Requirements -20%"),
    ],
    undefined,
    true
);
