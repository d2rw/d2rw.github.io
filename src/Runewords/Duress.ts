import Runeword from "@App/Runeword";

import Item from "@App/Type/Item";
import StatType from "@App/Type/Stat";

import * as Rune from "@App/Runes";
import Stat from "@App/Stat";

export default new Runeword(
    "Duress",
    [Item.BodyArmor],
    [Rune.Shael, Rune.Um, Rune.Thul],
    [
        new Stat(StatType.FasterHitRecovery, "+40% Faster Hit Recovery"),
        new Stat(StatType.Damage, "+10-20% Enhanced Damage (varies)"),
        new Stat(StatType.Damage, "Adds 37-133 Cold Damage 2 sec. Duration (Normal)"),
        new Stat(StatType.Special, "15% Chance of Crushing Blow"),
        new Stat(StatType.Special, "33% Chance of Open Wounds"),
        new Stat(StatType.Defense, "+150-200% Enhanced Defense (varies)"),
        new Stat(StatType.Special, "-20% Slower Stamina Drain"),
        new Stat(StatType.Resistance, "Cold Resist +45%"),
        new Stat(StatType.Resistance, "Lightning Resist +15%"),
        new Stat(StatType.Resistance, "Fire Resist +15%"),
        new Stat(StatType.Resistance, "Poison Resist +15%"),
    ],
);
