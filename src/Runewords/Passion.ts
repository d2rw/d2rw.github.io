import Runeword from "@App/Runeword";

import Item from "@App/Type/Item";
import StatType from "@App/Type/Stat";

import * as Rune from "@App/Runes";
import Stat from "@App/Stat";

export default new Runeword(
    "Passion",
    [Item.Weapon],
    [Rune.Dol, Rune.Ort, Rune.Eld, Rune.Lem],
    [
        new Stat(StatType.IncreasedAttackSpeed, "+25% Increased Attack Speed"),
        new Stat(StatType.Damage, "+160-210% Enhanced Damage (varies)"),
        new Stat(StatType.AttackRating, "50-80% Bonus To Attack Rating (varies)"),
        new Stat(StatType.Damage, "+75% Damage To Undead"),
        new Stat(StatType.AttackRating, "+50 To Attack Rating Against Undead"),
        new Stat(StatType.Damage, "Adds 1-50 Lightning Damage"),
        new Stat(StatType.Skill, "+1 To Berserk"),
        new Stat(StatType.Skill, "+1 To Zeal"),
        new Stat(StatType.Special, "Hit Blinds Target +10"),
        new Stat(StatType.Special, "Hit Causes Monster To Flee 25%"),
        new Stat(StatType.GoldFind, "75% Extra Gold From Monsters"),
        new Stat(StatType.Charges, "Level 3 Heart of Wolverine (12 Charges)"),
    ],
);
