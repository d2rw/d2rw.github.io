import Runeword from "@App/Runeword";

import Item from "@App/Type/Item";
import StatType from "@App/Type/Stat";

import * as Rune from "@App/Runes";
import Stat from "@App/Stat";
import Character from "@App/Type/Character";

export default new Runeword(
    "Fury",
    [Item.Melee],
    [Rune.Jah, Rune.Gul, Rune.Eth],
    [
        new Stat(StatType.Damage, "+209% Enhanced Damage"),
        new Stat(StatType.IncreasedAttackSpeed, "40% Increased Attack Speed"),
        new Stat(StatType.Special, "Prevent Monster Heal"),
        new Stat(StatType.Special, "66% Chance Of Open Wounds"),
        new Stat(StatType.Special, "33% Deadly Strike"),
        new Stat(StatType.Damage, "Ignore Target's Defense"),
        new Stat(StatType.Damage, "-25% Target Defense"),
        new Stat(StatType.AttackRating, "20% Bonus To Attack Rating"),
        new Stat(StatType.Defense, "6% Life Stolen Per Hit"),
        new Stat(StatType.Skill, "+5 To Frenzy (Barbarian Only)"),
    ],
    Character.Barbarian,
);