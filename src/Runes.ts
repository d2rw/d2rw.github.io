import Rune from '@App/Rune';

import {
    ChippedAmethyst,
    ChippedDiamond,
    ChippedEmerald,
    ChippedRuby,
    ChippedSapphire,
    ChippedTopaz,
    FlawedAmethyst,
    FlawedDiamond,
    FlawedEmerald,
    FlawedRuby,
    FlawedSapphire,
    FlawedTopaz,
    RegularAmethyst,
    RegularDiamond,
    RegularEmerald,
    RegularRuby,
    RegularSapphire,
    RegularTopaz,
    FlawlessAmethyst,
    FlawlessEmerald,
    FlawlessRuby,
    FlawlessSapphire,
    FlawlessTopaz,
} from "@App/Gems";

export const El = new Rune(
    1,
    "El",
    "+50 To Attack Rating, +1 Light Radius",
    "+15 Defense, +1 To Light Radius",
    11,
    require('@Image/runes/el.png'),
);

export const Eld = new Rune(
    2,
    "Eld",
    "+75% Damage To Undead, +50 Attack Rating Against Undead",
    "15% Slower Stamina Drain/7% Increased Chance of Blocking(Shields)",
    11,
    require('@Image/runes/eld.png'),
    [El, El, El],
);

export const Tir = new Rune(
    3,
    "Tir",
    "+2 To Mana After Each Kill",
    "+2 To Mana After Each Kill",
    13,
    require('@Image/runes/tir.png'),
    [Eld, Eld, Eld],
);

export const Nef = new Rune(
    4,
    "Nef",
    "Knockback",
    "+30 Defense Vs. Missile",
    13,
    require('@Image/runes/nef.png'),
    [Tir, Tir, Tir],
);

export const Eth = new Rune(
    5,
    "Eth",
    "-25% To Target Defense",
    "Regenerate Mana 15%",
    15,
    require('@Image/runes/eth.png'),
    [Nef, Nef, Nef],
);

export const Ith = new Rune(
    6,
    "Ith",
    "+9 To Maximum Damage",
    "15% Damage Taken Goes to Mana",
    15,
    require('@Image/runes/ith.png'),
    [Eth, Eth, Eth],
);

export const Tal = new Rune(
    7,
    "Tal",
    "+75 Poison Damage Over 5 Seconds",
    "Poison Resist 30%/Poison Resist 35%(Shields)",
    17,
    require('@Image/runes/tal.png'),
    [Ith, Ith, Ith],
);

export const Ral = new Rune(
    8,
    "Ral",
    "Adds 5-30 Fire Damage",
    "Fire Resist 30%/Fire Resist 35%(Shields)",
    19,
    require('@Image/runes/ral.png'),
    [Tal, Tal, Tal],
);

export const Ort = new Rune(
    9,
    "Ort",
    "Adds 1-50 Lightning Damage",
    "Lightning Resist 30%/Lightning Resist 35%(Shields)",
    21,
    require('@Image/runes/ort.png'),
    [Ral, Ral, Ral],
);

export const Thul = new Rune(
    10,
    "Thul",
    "Adds 3-14 Cold Damage - 3 Second Duration",
    "Cold Resist 30%/Cold Resist 35%(Shields)",
    23,
    require('@Image/runes/thul.png'),
    [Ort, Ort, Ort],
);

export const Amn = new Rune(
    11,
    "Amn",
    "7% Life Stolen Per Hit",
    "Attacker Takes Damage of 14",
    25,
    require('@Image/runes/amn.png'),
    [Thul, Thul, Thul, ChippedTopaz],
);

export const Sol = new Rune(
    12,
    "Sol",
    "+9 To Minimum Damage",
    "Damage Reduced By 7",
    27,
    require('@Image/runes/sol.png'),
    [Amn, Amn, Amn, ChippedAmethyst],
);

export const Shael = new Rune(
    13,
    "Shael",
    "20% Increased Attack Speed",
    "20% Faster Hit Recovery/20% Faster Block Rate(Shields)",
    29,
    require('@Image/runes/shael.png'),
    [Sol, Sol, Sol, ChippedSapphire],
);

export const Dol = new Rune(
    14,
    "Dol",
    "Hit Causes Monster To Flee 25%",
    "Replenish Life +7",
    31,
    require('@Image/runes/dol.png'),
    [Shael, Shael, Shael, ChippedRuby],
);

export const Hel = new Rune(
    15,
    "Hel",
    "Requirements -20%",
    "Requirements -15%",
    null,
    require('@Image/runes/hel.png'),
    [Dol, Dol, Dol, ChippedEmerald],
);

export const Io = new Rune(
    16,
    "Io",
    "+10 To Vitality",
    "+10 To Vitality",
    35,
    require('@Image/runes/io.png'),
    [Hel, Hel, Hel, ChippedDiamond],
);

export const Lum = new Rune(
    17,
    "Lum",
    "+10 To Energy",
    "+10 To Energy",
    37,
    require('@Image/runes/lum.png'),
    [Io, Io, Io, FlawedTopaz],
);

export const Ko = new Rune(
    18,
    "Ko",
    "+10 To Dexterity",
    "+10 To Dexterity",
    39,
    require('@Image/runes/ko.png'),
    [Lum, Lum, Lum, FlawedAmethyst],
);

export const Fal = new Rune(
    19,
    "Fal",
    "+10 To Strength",
    "+10 To Strength",
    41,
    require('@Image/runes/fal.png'),
    [Ko, Ko, Ko, FlawedSapphire],
);

export const Lem = new Rune(
    20,
    "Lem",
    "75% Extra Gold From Monsters",
    "50% Extra Gold From Monsters",
    43,
    require('@Image/runes/lem.png'),
    [Fal, Fal, Fal, FlawedRuby],
);

export const Pul = new Rune(
    21,
    "Pul",
    "+75% Damage To Demons, +100 Attack Rating Against Demons",
    "+30% Enhanced Defense",
    45,
    require('@Image/runes/pul.png'),
    [Lem, Lem, Lem, FlawedEmerald],
);

export const Um = new Rune(
    22,
    "Um",
    "25% Chance of Open Wounds",
    "All Resistances +15(Armor/Helms) +22(Shields)",
    47,
    require('@Image/runes/um.png'),
    [Pul, Pul, FlawedDiamond],
);

export const Mal = new Rune(
    23,
    "Mal",
    "Prevent Monster Heal",
    "Magic Damage Reduced By 7",
    49,
    require('@Image/runes/mal.png'),
    [Um, Um, RegularTopaz],
);

export const Ist = new Rune(
    24,
    "Ist",
    "30% Better Chance of Getting Magic Items",
    "25% Better Chance of Getting Magic Items",
    51,
    require('@Image/runes/ist.png'),
    [Mal, Mal, RegularAmethyst],
);

export const Gul = new Rune(
    25,
    "Gul",
    "20% Bonus To Attack Rating",
    "5% To Maximum Poison Resist",
    53,
    require('@Image/runes/gul.png'),
    [Ist, Ist, RegularSapphire],
);

export const Vex = new Rune(
    26,
    "Vex",
    "7% Mana Stolen Per Hit",
    "5% To Maximum Fire Resist",
    55,
    require('@Image/runes/vex.png'),
    [Gul, Gul, RegularRuby],
);

export const Ohm = new Rune(
    27,
    "Ohm",
    "+50% Enhanced Damage",
    "5% To Maximum Cold Resist",
    57,
    require('@Image/runes/ohm.png'),
    [Vex, Vex, RegularEmerald],
);

export const Lo = new Rune(
    28,
    "Lo",
    "20% Deadly Strike",
    "5% To Maximum Lightning Resist",
    59,
    require('@Image/runes/lo.png'),
    [Ohm, Ohm, RegularDiamond],
);

export const Sur = new Rune(
    29,
    "Sur",
    "Hit Blinds Target",
    "Maximum Mana 5%/+50 To Mana (Shields)",
    61,
    require('@Image/runes/sur.png'),
    [Lo, Lo, FlawlessTopaz],
);

export const Ber = new Rune(
    30,
    "Ber",
    "20% Chance of Crushing Blow",
    "Damage Reduced by 8%",
    63,
    require('@Image/runes/ber.png'),
    [Sur, Sur, FlawlessAmethyst],
);

export const Jah = new Rune(
    31,
    "Jah",
    "Ignore Target's Defense",
    "Increase Maximum Life 5%/+50 Life (Shields)",
    65,
    require('@Image/runes/jah.png'),
    [Ber, Ber, FlawlessSapphire],
);

export const Cham = new Rune(
    32,
    "Cham",
    "Freeze Target +3",
    "Cannot Be Frozen",
    67,
    require('@Image/runes/cham.png'),
    [Jah, Jah, FlawlessRuby],
);

export const Zod = new Rune(
    33,
    "Zod",
    "Indestructible",
    "Indestructible",
    69,
    require('@Image/runes/zod.png'),
    [Cham, Cham, FlawlessEmerald],
);

export default {
    El,
    Eld,
    Tir,
    Nef,
    Eth,
    Ith,
    Tal,
    Ral,
    Ort,
    Thul,
    Amn,
    Sol,
    Shael,
    Dol,
    Hel,
    Io,
    Lum,
    Ko,
    Fal,
    Lem,
    Pul,
    Um,
    Mal,
    Ist,
    Gul,
    Vex,
    Ohm,
    Lo,
    Sur,
    Ber,
    Jah,
    Cham,
    Zod,
};