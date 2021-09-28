import Runeword from "@App/Runeword";

import Item from "@App/Type/Item";
import StatType from "@App/Type/Stat";

import * as Rune from "@App/Runes";
import Stat from "@App/Stat";

export default new Runeword(
    "Bramble",
    [Item.BodyArmor],
    [Rune.Ral, Rune.Ohm, Rune.Sur, Rune.Eth],
    [
        new Stat(StatType.Aura, "Level 15-21 Thorns Aura When Equipped (varies)"),
        new Stat(StatType.FasterHitRecovery, "+50% Faster Hit Recovery"),
        new Stat(StatType.Damage, "+25-50% To Poison Skill Damage (varies)"),
        new Stat(StatType.Defense, "+300 Defense"),
        new Stat(StatType.Stats, "Increase Maximum Mana 5%"),
        new Stat(StatType.Default, "Regenerate Mana 15%"),
        new Stat(StatType.Resistance, "+5% To Maximum Cold Resist"),
        new Stat(StatType.Resistance, "Fire Resist +30%"),
        new Stat(StatType.Resistance, "Poison Resist +100%"),
        new Stat(StatType.Defense, "+13 Life After Each Kill"),
        new Stat(StatType.Charges, "Level 13 Spirit of Barbs (33 Charges)"),
    ],
);
