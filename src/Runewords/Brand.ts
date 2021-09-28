import Runeword from "@App/Runeword";

import Item from "@App/Type/Item";
import StatType from "@App/Type/Stat";

import * as Rune from "@App/Runes";
import Stat from "@App/Stat";

export default new Runeword(
    "Brand",
    [Item.Missile],
    [Rune.Jah, Rune.Lo, Rune.Mal, Rune.Gul],
    [
        new Stat(StatType.Default, "35% Chance To Cast Level 14 Amplify Damage When Struck"),
        new Stat(StatType.Default, "100% Chance To Cast Level 18 Bone Spear On Striking"),
        new Stat(StatType.Damage, "+260-340% Enhanced Damage (varies)"),
        new Stat(StatType.Damage, "Ignore Target's Defense"),
        new Stat(StatType.AttackRating, "20% Bonus to Attack Rating"),
        new Stat(StatType.Damage, "+280-330% Damage To Demons (varies)"),
        new Stat(StatType.Special, "20% Deadly Strike"),
        new Stat(StatType.Special, "Prevent Monster Heal"),
        new Stat(StatType.Special, "Knockback"),
        new Stat(StatType.Damage, "Fires Explosive Arrows or Bolts"),
    ],
    undefined,
    true
);
