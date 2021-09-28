import Runeword from "@App/Runeword";

import Item from "@App/Type/Item";
import StatType from "@App/Type/Stat";

import * as Rune from "@App/Runes";
import Stat from "@App/Stat";
import Character from "@App/Type/Character";

export default new Runeword(
    "Bone (Necromancer)",
    [Item.BodyArmor],
    [Rune.Sol, Rune.Um, Rune.Um],
    [
        new Stat(StatType.Default, "15% Chance To Cast level 10 Bone Armor When Struck"),
        new Stat(StatType.Default, "15% Chance To Cast level 10 Bone Spear On Striking"),
        new Stat(StatType.Skill, "+2 To Necromancer Skill Levels"),
        new Stat(StatType.Stats, "+100-150 To Mana (varies)"),
        new Stat(StatType.Resistance, "All Resistances +30"),
        new Stat(StatType.Defense, "Damage Reduced By 7"),
    ],
    Character.Necromancer
);
