import Runeword from "@App/Runeword";

import Item from "@App/Type/Item";
import StatType from "@App/Type/Stat";

import * as Rune from "@App/Runes";
import Stat from "@App/Stat";

export default new Runeword(
    "Stealth",
    [Item.BodyArmor],
    [Rune.Tal, Rune.Eth],
    [
        new Stat(StatType.Defense, "Magic Damage Reduced By 3"),
        new Stat(StatType.Stats, "+6 To Dexterity"),
        new Stat(StatType.Stats, "+15 To Maximum Stamina"),
        new Stat(StatType.Resistance, "Poison Resist +30%"),
        new Stat(StatType.Defense, "Regenerate Mana 15%"),
        new Stat(StatType.FasterRunWalk, "25% Faster Run/Walk"),
        new Stat(StatType.FasterCastRate, "25% Faster Cast Rate"),
        new Stat(StatType.FasterHitRecovery, "25% Faster Hit Recovery"),
    ],
);