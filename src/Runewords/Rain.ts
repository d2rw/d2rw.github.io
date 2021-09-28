import Runeword from "@App/Runeword";

import Item from "@App/Type/Item";
import StatType from "@App/Type/Stat";

import * as Rune from "@App/Runes";
import Stat from "@App/Stat";
import Character from "@App/Type/Character";

export default new Runeword(
    "Rain (Druid)",
    [Item.BodyArmor],
    [Rune.Ort, Rune.Mal, Rune.Ith],
    [
        new Stat(StatType.Default, "5% Chance To Cast Level 15 Cyclone Armor When Struck"),
        new Stat(StatType.Default, "5% Chance To Cast Level 15 Twister On Striking"),
        new Stat(StatType.Skill, "+2 To Druid Skills"),
        new Stat(StatType.Stats, "+100-150 To Mana (varies)"),
        new Stat(StatType.Resistance, "Lightning Resist +30%"),
        new Stat(StatType.Defense, "Magic Damage Reduced By 7"),
        new Stat(StatType.Defense, "15% Damage Taken Goes to Mana"),
    ],
    Character.Druid
);
