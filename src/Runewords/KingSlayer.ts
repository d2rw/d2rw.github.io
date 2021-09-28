import Runeword from "@App/Runeword";

import Item from "@App/Type/Item";
import StatType from "@App/Type/Stat";

import * as Rune from "@App/Runes";
import Stat from "@App/Stat";

export default new Runeword(
    "Kingslayer",
    [Item.Sword, Item.Axe],
    [Rune.Mal, Rune.Um, Rune.Gul, Rune.Fal],
    [
        new Stat(StatType.IncreasedAttackSpeed, "+30% Increased Attack Speed"),
        new Stat(StatType.Damage, "+230-270% Enhanced Damage (varies)"),
        new Stat(StatType.Damage, "-25% Target Defense"),
        new Stat(StatType.AttackRating, "20% Bonus To Attack Rating"),
        new Stat(StatType.Special, "33% Chance of Crushing Blow"),
        new Stat(StatType.Special, "50% Chance of Open Wounds"),
        new Stat(StatType.Skill, "+1 To Vengeance"),
        new Stat(StatType.Special, "Prevent Monster Heal"),
        new Stat(StatType.Stats, "+10 To Strength"),
        new Stat(StatType.GoldFind, "40% Extra Gold From Monsters"),
    ],
);
