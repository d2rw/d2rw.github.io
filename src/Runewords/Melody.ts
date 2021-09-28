import Runeword from "@App/Runeword";

import Item from "@App/Type/Item";
import StatType from "@App/Type/Stat";

import * as Rune from "@App/Runes";
import Stat from "@App/Stat";

import Character from "@App/Type/Character";

export default new Runeword(
    "Melody",
    [Item.Missile],
    [Rune.Shael, Rune.Ko, Rune.Nef],
    [
        new Stat(StatType.Damage, "+50% Enhanced Damage"),
        new Stat(StatType.Damage, "+300% Damage To Undead"),
        new Stat(StatType.Skill, "+3 To Bow and Crossbow Skills (Amazon Only)"),
        new Stat(StatType.Skill, "+3 To Critical Strike (Amazon Only)"),
        new Stat(StatType.Skill, "+3 To Dodge (Amazon Only)"),
        new Stat(StatType.Skill, "+3 To Slow Missiles (Amazon Only)"),
        new Stat(StatType.IncreasedAttackSpeed, "20% Increased Attack Speed"),
        new Stat(StatType.Stats, "+10 To Dexterity"),
        new Stat(StatType.Special, "Knockback"),
    ],
    Character.Amazon
);