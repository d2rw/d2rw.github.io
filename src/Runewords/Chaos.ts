import Runeword from "@App/Runeword";

import Item from "@App/Type/Item";
import StatType from "@App/Type/Stat";

import * as Rune from "@App/Runes";
import Stat from "@App/Stat";

export default new Runeword(
    "Chaos",
    [Item.Claw],
    [Rune.Fal, Rune.Ohm, Rune.Um],
    [
        new Stat(StatType.Default, "9% Chance To Cast Level 11 Frozen Orb On Striking"),
        new Stat(StatType.Default, "11% Chance To Cast Level 9 Charged Bolt On Striking"),
        new Stat(StatType.IncreasedAttackSpeed, "+35% Increased Attack Speed"),
        new Stat(StatType.Damage, "+290-340% Enhanced Damage (varies)"),
        new Stat(StatType.Damage, "Adds 216-471 Magic Damage"),
        new Stat(StatType.Special, "25% Chance of Open Wounds"),
        new Stat(StatType.Skill, "+1 To Whirlwind"),
        new Stat(StatType.Stats, "+10 To Strength"),
        new Stat(StatType.Defense, "+15 Life After Each Demon Kill"),
    ],
);
