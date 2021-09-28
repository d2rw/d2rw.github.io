import Runeword from "@App/Runeword";

import Item from "@App/Type/Item";
import StatType from "@App/Type/Stat";

import * as Rune from "@App/Runes";
import Stat from "@App/Stat";
import Character from "@App/Type/Character";

export default new Runeword(
    "Beast",
    [Item.Axe, Item.Scepter, Item.Hammer],
    [Rune.Ber, Rune.Tir, Rune.Um, Rune.Mal, Rune.Lum],
    [
        new Stat(StatType.Aura, "Level 9 Fanaticism Aura When Equipped"),
        new Stat(StatType.IncreasedAttackSpeed, "+40% Increased Attack Speed"),
        new Stat(StatType.Damage, "+240-270% Enhanced Damage (varies)"),
        new Stat(StatType.Special, "20% Chance of Crushing Blow"),
        new Stat(StatType.Special, "25% Chance of Open Wounds"),
        new Stat(StatType.Skill, "+3 To Werebear"),
        new Stat(StatType.Skill, "+3 To Lycanthropy"),
        new Stat(StatType.Special, "Prevent Monster Heal"),
        new Stat(StatType.Stats, "+25-40 To Strength (varies)"),
        new Stat(StatType.Stats, "+10 To Energy"),
        new Stat(StatType.Defense, "+2 To Mana After Each Kill"),
        new Stat(StatType.Charges, "Level 13 Summon Grizzly (5 Charges)"),
    ],
    Character.Druid
);
