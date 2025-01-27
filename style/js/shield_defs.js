"use strict";

import * as Color from "../constants/color.js";
import * as ShieldDraw from "./shield_canvas_draw.js";
import * as ShieldText from "./shield_text.js";
import * as Gfx from "./screen_gfx.js";

//Height of modifier banners
export const bannerSizeH = 9 * Gfx.getPixelRatio();
export const bannerPadding = 0.5 * Gfx.getPixelRatio();
export const topPadding = 1 * Gfx.getPixelRatio();

export const shields = {};

function ovalShield(fillColor, strokeColor, textColor, rectWidth) {
  textColor = textColor ?? strokeColor;
  return {
    backgroundDraw: (ref) =>
      ShieldDraw.ellipse(fillColor, strokeColor, ref, rectWidth),
    textLayoutConstraint: ShieldText.ellipseTextConstraint,
    padding: {
      left: 2,
      right: 2,
      top: 2,
      bottom: 2,
    },
    textColor: textColor,
  };
}

function roundedRectShield(
  fillColor,
  strokeColor,
  textColor,
  radius,
  outlineWidth,
  rectWidth
) {
  textColor = textColor ?? strokeColor;
  radius = radius ?? 2;
  outlineWidth = outlineWidth ?? 1;
  return {
    backgroundDraw: (ref) =>
      ShieldDraw.roundedRectangle(
        fillColor,
        strokeColor,
        ref,
        radius,
        outlineWidth,
        rectWidth
      ),
    textLayoutConstraint: (spaceBounds, textBounds) =>
      ShieldText.roundedRectTextConstraint(spaceBounds, textBounds, radius),
    padding: {
      left: 3,
      right: 3,
      top: 3,
      bottom: 3,
    },
    textColor: textColor,
  };
}

function pillShield(
  fillColor,
  strokeColor,
  textColor,
  outlineWidth,
  rectWidth
) {
  return roundedRectShield(
    fillColor,
    strokeColor,
    textColor,
    10,
    outlineWidth,
    rectWidth
  );
}

function banneredShield(baseDef, modifiers) {
  return {
    ...baseDef,
    modifiers: modifiers,
  };
}

export function loadShields(shieldImages) {
  // Multi-use shields

  //Diamond shields
  let diamondShield = {
    backgroundImage: shieldImages.shield40_diamond_white,
    textLayoutConstraint: ShieldText.ellipseTextConstraint,
    textColor: Color.shields.black,
    padding: {
      left: 2.5,
      right: 2.5,
      top: 4.5,
      bottom: 4.5,
    },
  };

  let padding_pentagon = {
    left: 2,
    right: 2,
    top: 2,
    bottom: 5,
  };
  let pentagonShieldBlueYellow = {
    backgroundImage: [
      shieldImages.shield40_pentagon_blue_yellow_2,
      shieldImages.shield40_pentagon_blue_yellow_3,
    ],
    textLayoutConstraint: ShieldText.ellipseTextConstraint,
    textColor: Color.shields.yellow,
    padding: padding_pentagon,
  };
  let pentagonShieldGreenWhite = {
    backgroundImage: [
      shieldImages.shield40_pentagon_green_white_2,
      shieldImages.shield40_pentagon_green_white_3,
    ],
    textLayoutConstraint: ShieldText.ellipseTextConstraint,
    textColor: Color.shields.white,
    padding: padding_pentagon,
  };

  let badgeShield = {
    backgroundImage: [
      shieldImages.shield40_badge_2,
      shieldImages.shield40_badge_3,
    ],
    textColor: Color.shields.black,
    padding: {
      left: 2,
      right: 2,
      top: 4,
      bottom: 5,
    },
  };

  let wideHexagonGreenShield = {
    backgroundImage: shieldImages.shield40_hexagon_wide_green,
    textColor: Color.shields.white,
    padding: {
      left: 3,
      right: 3,
      top: 4.5,
      bottom: 4.5,
    },
  };

  let padding_home_down = {
    left: 2,
    right: 2,
    top: 2,
    bottom: 6,
  };
  // Home plate, flipped vertically, white fill, black stroke
  let homeDownWhiteShield = {
    backgroundImage: [
      shieldImages.shield40_home_down_white_2,
      shieldImages.shield40_home_down_white_3,
    ],
    textColor: Color.shields.black,
    padding: padding_home_down,
  };

  // Home plate, flipped vertically, blue fill, white stroke
  let homeDownBlueWhiteShield = {
    backgroundImage: [
      shieldImages.shield40_home_down_blue_2,
      shieldImages.shield40_home_down_blue_3,
    ],
    textColor: Color.shields.white,
    padding: padding_home_down,
  };

  // Home plate, flipped vertically, white fill, blue stroke
  let homeDownWhiteBlueShield = {
    ...homeDownWhiteShield,
    colorLighten: Color.shields.blue,
  };

  let padding_trapezoid_up = {
    left: 4,
    right: 4,
    top: 2,
    bottom: 5,
  };

  let trapezoidUpShield = {
    backgroundImage: [
      shieldImages.shield40_trapezoid_up_2,
      shieldImages.shield40_trapezoid_up_3,
    ],
    textColor: Color.shields.black,
    padding: padding_trapezoid_up,
  };
  let trapezoidUpShieldWhiteBlue = {
    ...trapezoidUpShield,
    colorLighten: Color.shields.blue,
  };

  let trapezoidUpShieldBlackYellow = {
    backgroundImage: [
      shieldImages.shield40_trapezoid_up_black_yellow_2,
      shieldImages.shield40_trapezoid_up_black_yellow_3,
    ],
    textColor: Color.shields.yellow,
    padding: padding_trapezoid_up,
  };

  let trapezoidUpShieldBlueWhite = {
    backgroundImage: [
      shieldImages.shield40_trapezoid_up_blue_white_2,
      shieldImages.shield40_trapezoid_up_blue_white_3,
    ],
    textColor: Color.shields.white,
    padding: padding_trapezoid_up,
  };

  let trapezoidUpShieldGreenYellow = {
    backgroundImage: [
      shieldImages.shield40_trapezoid_up_green_yellow_2,
      shieldImages.shield40_trapezoid_up_green_yellow_3,
    ],
    textColor: Color.shields.yellow,
    padding: padding_trapezoid_up,
  };

  let trapezoidUpShieldRoundedBrown = {
    backgroundImage: [
      shieldImages.shield40_trapezoid_up_rounded_brown_2,
      shieldImages.shield40_trapezoid_up_rounded_brown_3,
    ],
    textColor: Color.shields.white,
    padding: padding_trapezoid_up,
  };

  let padding_trapezoid_down = {
    left: 4,
    right: 4,
    top: 5,
    bottom: 2,
  };
  let trapezoidDownShield = {
    backgroundImage: [
      shieldImages.shield40_trapezoid_down_2,
      shieldImages.shield40_trapezoid_down_3,
    ],
    textColor: Color.shields.black,
    padding: padding_trapezoid_down,
  };

  // Default

  shields["default"] = roundedRectShield(
    Color.shields.white,
    Color.shields.black
  );

  // North America

  shields["CA:transcanada"] = {
    backgroundImage: shieldImages.shield40_ca_tch,
    textLayoutConstraint: ShieldText.ellipseTextConstraint,
    textColor: Color.shields.green,
    padding: {
      left: 2,
      right: 2,
      top: 5,
      bottom: 4,
    },
  };
  shields["CA:transcanada:namedRoute"] = {
    norefImage: shieldImages.shield40_ca_tch,
    notext: true,
  };

  shields["CA:AB:primary"] = homeDownWhiteShield;
  shields["CA:AB:secondary"] = ovalShield(
    Color.shields.white,
    Color.shields.black
  );

  shields["CA:BC"] = {
    backgroundImage: [
      shieldImages.shield40_ca_bc_2,
      shieldImages.shield40_ca_bc_3,
    ],
    textColor: Color.shields.blue,
    padding: {
      left: 3.5,
      right: 3.5,
      top: 5,
      bottom: 4,
    },
  };

  shields["CA:MB:PTH"] = homeDownWhiteShield;
  shields["CA:MB:PR"] = ovalShield(Color.shields.black, Color.shields.white);
  shields["CA:MB:Winnipeg"] = {
    backgroundImage: shieldImages.shield40_ca_mb_winnipeg,
    textColor: Color.shields.black,
    padding: {
      left: 4,
      right: 4,
      top: 4,
      bottom: 3,
    },
  };

  var padding_ca_nb = {
    left: 4,
    right: 4,
    top: 5,
    bottom: 5,
  };
  shields["CA:NB:primary"] = {
    backgroundImage: shieldImages.shield40_ca_nb_primary,
    textColor: Color.shields.black,
    padding: padding_ca_nb,
  };
  shields["CA:NB:secondary"] = {
    backgroundImage: shieldImages.shield40_ca_nb_secondary,
    textColor: Color.shields.black,
    padding: padding_ca_nb,
  };
  shields["CA:NB:tertiary"] = {
    backgroundImage: shieldImages.shield40_ca_nb_tertiary,
    textColor: Color.shields.black,
    padding: padding_ca_nb,
  };

  shields["CA:NS:H"] = {
    backgroundImage: shieldImages.shield40_ca_ns_h,
    textColor: Color.shields.white,
    padding: {
      left: 2,
      right: 2,
      top: 6.5,
      bottom: 4,
    },
  };
  shields["CA:NS:T"] = badgeShield;
  shields["CA:NS:R"] = roundedRectShield(
    Color.shields.brown,
    Color.shields.white
  );

  shields["CA:NT"] = {
    backgroundImage: shieldImages.shield40_ca_nt,
    textColor: Color.shields.white,
    padding: {
      left: 2,
      right: 2,
      top: 9,
      bottom: 3,
    },
  };

  shields["CA:ON:primary"] = {
    backgroundImage: shieldImages.shield40_ca_on_primary,
    textColor: Color.shields.black,
    padding: {
      left: 3,
      right: 3,
      top: 6,
      bottom: 3,
    },
  };
  shields["CA:ON:primary:Toll"] = {
    ...shields["CA:ON:primary"],
    backgroundImage: shieldImages.shield40_ca_on_primary_toll,
    textColor: Color.shields.white,
  };
  shields["CA:ON:private_toll"] = banneredShield(
    pillShield(Color.shields.white, Color.shields.blue, Color.shields.black),
    ["ETR"]
  );
  shields["CA:ON:secondary"] = trapezoidDownShield;
  shields["CA:ON:tertiary"] = shields["default"];
  shields["CA:ON:Halton"] = trapezoidUpShieldGreenYellow;
  shields["CA:ON:Peel"] = trapezoidUpShieldBlackYellow;
  shields["CA:ON:Simcoe"] = trapezoidUpShieldWhiteBlue;
  ["Grey", "Hamilton", "Niagara"].forEach(
    (county) => (shields[`CA:ON:${county}`] = trapezoidUpShieldBlueWhite)
  );
  [
    "Brant",
    "Bruce",
    "Chatham-Kent",
    "Cornwall",
    "Dufferin",
    "Durham",
    "Elgin",
    "Essex",
    "Frontenac:Central Frontenac",
    "Frontenac:Frontenac Islands",
    "Frontenac:North Frontenac",
    "Frontenac:South Frontenac",
    "Greater Sudbury",
    "Haldimand",
    "Haliburton",
    "Hastings:Carlow/Mayo",
    "Hastings:Hastings Highlands",
    "Hastings:Limerick",
    "Hastings:Tyendinaga",
    "Huron",
    "Kawartha Lakes",
    "Kingston",
    "Lambton",
    "Lanark",
    "Leeds and Grenville",
    "Lennox and Addington",
    "Middlesex",
    "Muskoka",
    "Norfolk",
    "Northumberland",
    "Ottawa",
    "Oxford",
    "Perth",
    "Peterborough",
    "Prescott and Russell",
    "Prince Edward",
    "Quinte West",
    "Renfrew",
    "Stormont, Dundas and Glengarry",
    "Waterloo",
    "Wellington",
    "York",
  ].forEach(
    (countyTownshipOrCity) =>
      (shields[`CA:ON:${countyTownshipOrCity}`] = trapezoidUpShield)
  );
  shields["CA:ON:Hastings:Wollaston"] = banneredShield(shields["default"], [
    "TWP",
  ]);
  shields["CA:ON:Waterloo:Wellesley"] = ovalShield(
    Color.shields.white,
    Color.shields.black
  );
  shields["CA:ON:Waterloo:Woolwich"] = ovalShield(
    Color.shields.white,
    Color.shields.black
  );
  ["North Dumfries", "Wilmot"].forEach(
    (township) =>
      (shields[`CA:ON:Waterloo:${township}`] = banneredShield(
        shields["CA:ON:Waterloo"],
        ["TWP"]
      ))
  );
  ["Brant", "Durham", "Haldimand", "Norfolk"].forEach(
    (county) =>
      (shields[`CA:ON:${county}:Highway`] = banneredShield(
        shields[`CA:ON:${county}`],
        ["HWY"]
      ))
  );
  shields["CA:ON:Muskoka:West"] = banneredShield(shields["CA:ON:Muskoka"], [
    "WEST",
  ]);

  shields["CA:PE"] = {
    backgroundImage: shieldImages.shield40_ca_pe,
    textColor: Color.shields.black,
    padding: {
      left: 2,
      right: 2,
      top: 5,
      bottom: 5,
    },
  };

  shields["CA:QC:A"] = {
    backgroundImage: [
      shieldImages.shield40_ca_qc_a_2,
      shieldImages.shield40_ca_qc_a_3,
    ],
    textColor: Color.shields.white,
    padding: {
      left: 2,
      right: 2,
      top: 5.5,
      bottom: 4,
    },
  };
  shields["CA:QC:R"] = {
    backgroundImage: shieldImages.shield40_ca_qc_r,
    textColor: Color.shields.white,
    padding: {
      left: 2,
      right: 2,
      top: 5,
      bottom: 5,
    },
  };

  shields["CA:SK:primary"] = homeDownBlueWhiteShield;
  shields["CA:SK:secondary"] = {
    backgroundImage: shieldImages.shield40_ca_sk_secondary,
    textColor: Color.shields.green,
    padding: {
      left: 2,
      right: 2,
      top: 11,
      bottom: 2,
    },
  };
  shields["CA:SK:tertiary"] = homeDownWhiteBlueShield;

  shields["CA:YT"] = roundedRectShield(Color.shields.white, Color.shields.red);

  // US Interstate Highways

  let padding_us_interstate = {
    left: 4,
    right: 4,
    top: 6,
    bottom: 5,
  };
  shields["US:I"] = {
    backgroundImage: [
      shieldImages.shield40_us_interstate_2,
      shieldImages.shield40_us_interstate_3,
    ],
    textLayoutConstraint: ShieldText.southHalfellipseTextConstraint,
    textColor: Color.shields.white,
    padding: padding_us_interstate,
  };

  shields["US:I:Alternate"] = banneredShield(shields["US:I"], ["ALT"]);
  shields["US:I:Truck"] = banneredShield(shields["US:I"], ["TRK"]);
  shields["US:I:Express"] = banneredShield(shields["US:I"], ["EXPR"]);
  shields["US:I:Express:Toll"] = shields["US:I:Express"];

  shields["US:I:Business:Loop"] = {
    backgroundImage: [
      shieldImages.shield40_us_interstate_business_2,
      shieldImages.shield40_us_interstate_business_3,
    ],
    textLayoutConstraint: ShieldText.southHalfellipseTextConstraint,
    textColor: Color.shields.white,
    padding: padding_us_interstate,
  };

  shields["US:I:Business:Spur"] = shields["US:I:Business:Loop"];

  // US Highways

  shields["US:US"] = badgeShield;
  shields["US:US:Truck"] = banneredShield(shields["US:US"], ["TRK"]);
  shields["US:US:Spur"] = banneredShield(shields["US:US"], ["SPUR"]);
  shields["US:US:Connector"] = banneredShield(shields["US:US"], ["CONN"]);
  shields["US:US:Bypass"] = banneredShield(shields["US:US"], ["BYP"]);
  shields["US:US:Business"] = banneredShield(shields["US:US"], ["BUS"]);
  shields["US:US:Business:Alternate"] = banneredShield(shields["US:US"], [
    "BUS",
    "ALT",
  ]);
  shields["US:US:Business:Truck"] = banneredShield(shields["US:US"], [
    "BUS",
    "TRK",
  ]);
  shields["US:US:Alternate"] = banneredShield(shields["US:US"], ["ALT"]);
  shields["US:US:Alternate:Truck:Business"] = banneredShield(shields["US:US"], [
    "ALT",
    "TRK",
    "BUS",
  ]);

  shields["US:US:Historic"] = {
    ...badgeShield,
    colorLighten: Color.shields.brown,
  };

  // US Federal Agencies

  shields["US:BIA"] = {
    backgroundImage: shieldImages.shield40_us_bia,
    textColor: Color.shields.black,
    textLayoutConstraint: ShieldText.southHalfellipseTextConstraint,
    padding: {
      left: 4,
      right: 4,
      top: 4,
      bottom: 5,
    },
  };

  // US States and Territories

  shields["US:AK"] = {
    backgroundImage: shieldImages.shield40_us_ak,
    textColor: Color.shields.black,
    padding: {
      left: 5,
      right: 1,
      top: 1,
      bottom: 8,
    },
  };

  shields["US:AL"] = {
    backgroundImage: [
      shieldImages.shield40_us_al_2,
      shieldImages.shield40_us_al_3,
    ],
    textColor: Color.shields.black,
    padding: {
      left: 3,
      right: 3,
      top: 3,
      bottom: 6,
    },
  };
  shields["US:AL:Truck"] = banneredShield(shields["US:AL"], ["TRK"]);
  [
    "Autauga",
    "Baldwin",
    "Barbour",
    "Bibb",
    "Blount",
    "Bullock",
    "Butler",
    "Calhoun",
    "Chambers",
    "Cherokee",
    "Chilton",
    "Choctaw",
    "Clarke",
    "Clay",
    "Cleburne",
    "Coffee",
    "Colbert",
    "Conecuh",
    "Coosa",
    "Covington",
    "Crenshaw",
    "Cullman",
    "Dale",
    "Dallas",
    "DeKalb",
    "Elmore",
    "Escambia",
    "Etowah",
    "Fayette",
    "Franklin",
    "Geneva",
    "Greene",
    "Hale",
    "Henry",
    "Houston",
    "Jackson",
    "Jefferson",
    "Lamar",
    "Lauderdale",
    "Lawrence",
    "Lee",
    "Limestone",
    "Lowndes",
    "Macon",
    "Madison",
    "Marengo",
    "Marion",
    "Marshall",
    "Mobile",
    "Monroe",
    "Montgomery",
    "Morgan",
    "Perry",
    "Pike",
    "Pikens",
    "Randolph",
    "Russell",
    "Shelby",
    "Saint_Clair",
    "Sumter",
    "Talladega",
    "Tallapoosa",
    "Tuscaloosa",
    "Walker",
    "Washington",
    "Wilcox",
    "Winston",
  ].forEach(
    (county) => (shields[`US:AL:${county}`] = pentagonShieldBlueYellow)
  );

  shields["US:AR"] = {
    backgroundImage: [
      shieldImages.shield40_us_ar_2,
      shieldImages.shield40_us_ar_3,
    ],
    textColor: Color.shields.black,
    padding: {
      left: 3,
      right: 4,
      top: 4,
      bottom: 5,
    },
  };
  [
    "Calhoun",
    "Carroll",
    "Clay",
    "Columbia",
    "Craighead",
    "Cross",
    "Dallas",
    "Greene",
    "Hempstead",
    "Jackson",
    "Jefferson",
    "Johnson",
    "Lafayette",
    "Lawrence",
    "Little_River",
    "Madison",
    "Miller",
    "Mississippi",
    "Nevada",
    "Ouachita",
    "Phillips",
    "Polk",
    "Saint_Francis",
    "Union",
    "Washington",
    "Woodruff",
  ].forEach(
    (county) => (shields[`US:AR:${county}`] = pentagonShieldBlueYellow)
  );
  ["Lee", "Izard"].forEach(
    (county) =>
      (shields[`US:AR:${county}`] = roundedRectShield(
        Color.shields.green,
        Color.shields.white
      ))
  );
  shields["US:AR:Baxter"] = roundedRectShield(
    Color.shields.blue,
    Color.shields.white
  );

  shields["US:AS"] = {
    backgroundImage: shieldImages.shield40_us_as,
    textColor: Color.shields.white,
    padding: {
      left: 4,
      right: 4,
      top: 9.5,
      bottom: 2,
    },
  };

  shields["US:AZ"] = {
    backgroundImage: [
      shieldImages.shield40_us_az_2,
      shieldImages.shield40_us_az_3,
    ],
    textColor: Color.shields.black,
    padding: {
      left: 4,
      right: 3,
      top: 3,
      bottom: 4,
    },
  };
  shields["US:AZ:Spur"] = banneredShield(shields["US:AZ"], ["SPUR"]);
  shields["US:AZ:Loop"] = banneredShield(shields["US:AZ"], ["LOOP"]);
  shields["US:AZ:Business"] = banneredShield(shields["US:AZ"], ["BUS"]);
  ["Coconino", "Mohave", "Yavapai"].forEach(
    (county) => (shields[`US:AZ:${county}`] = pentagonShieldBlueYellow)
  );
  shields["US:AZ:Apache"] = shields["default"];

  shields["US:CA"] = {
    backgroundImage: [
      shieldImages.shield40_us_ca_2,
      shieldImages.shield40_us_ca_3,
    ],
    textColor: Color.shields.white,
    padding: {
      left: 4,
      right: 4,
      top: 6,
      bottom: 4,
    },
  };
  shields["US:CA:Business"] = banneredShield(shields["US:CA"], ["BUS"]);
  shields["US:CA:CR"] = pentagonShieldBlueYellow;

  shields["US:CO"] = {
    backgroundImage: shieldImages.shield40_us_co,
    textColor: Color.shields.black,
    padding: {
      left: 2,
      right: 2,
      top: 9.5,
      bottom: 2,
    },
  };
  shields["US:CO:E470"] = {
    backgroundImage: shieldImages.shield40_us_co_e470,
    textColor: Color.shields.black,
    padding: {
      left: 2,
      right: 2,
      top: 9.5,
      bottom: 2,
    },
  };
  [
    "Archuleta",
    "Chaffee",
    "Conejos",
    "Grand",
    "Gunnison",
    "Jackson",
    "Lake",
    "La_Plata",
    "Larimer",
    "Moffat",
    "Park",
    "Rio_Blanco",
    "Rio_Grande",
    "Saguache",
    "San_Juan",
    "Teller",
  ].forEach(
    (county) => (shields[`US:CO:${county}`] = pentagonShieldBlueYellow)
  );
  ["Fremont", "Ouray", "Routt"].forEach(
    (county) =>
      (shields[`US:CO:${county}`] = roundedRectShield(
        Color.shields.green,
        Color.shields.white
      ))
  );
  shields["US:CO:Douglas"] = pentagonShieldGreenWhite;

  shields["US:CT"] = shields["default"];

  shields["US:DC"] = {
    backgroundImage: shieldImages.shield40_us_dc,
    textColor: Color.shields.black,
    padding: {
      left: 2,
      right: 2,
      top: 10,
      bottom: 4,
    },
  };

  shields["US:DE"] = ovalShield(Color.shields.white, Color.shields.black);
  shields["US:DE:Alternate"] = banneredShield(shields["US:DE"], ["ALT"]);
  shields["US:DE:Business"] = banneredShield(shields["US:DE"], ["BUS"]);
  shields["US:DE:Truck"] = banneredShield(shields["US:DE"], ["TRK"]);

  shields["US:FL"] = {
    backgroundImage: [
      shieldImages.shield40_us_fl_2,
      shieldImages.shield40_us_fl_3,
    ],
    textColor: Color.shields.black,
    padding: {
      left: 2,
      right: 4.5,
      top: 6,
      bottom: 4,
    },
  };
  shields["US:FL:Toll"] = {
    backgroundImage: shieldImages.shield40_us_fl_toll,
    textColor: Color.shields.black,
    padding: {
      left: 2,
      right: 5,
      top: 7.5,
      bottom: 4.5,
    },
  };
  shields["US:FL:Turnpike"] = {
    norefImage: shieldImages.shield40_us_fl_turnpike,
    notext: true,
  };
  shields["US:FL:CR"] = pentagonShieldBlueYellow;

  shields["US:GA"] = {
    backgroundImage: [
      shieldImages.shield40_us_ga_2,
      shieldImages.shield40_us_ga_3,
    ],
    textColor: Color.shields.black,
    padding: {
      left: 3,
      right: 4,
      top: 5,
      bottom: 4,
    },
  };
  shields["US:GA:Truck:Bypass"] = banneredShield(shields["US:GA"], [
    "TRK",
    "BYP",
  ]);
  shields["US:GA:Spur"] = banneredShield(shields["US:GA"], ["SPUR"]);
  shields["US:GA:Loop"] = banneredShield(shields["US:GA"], ["LOOP"]);
  shields["US:GA:Connector"] = banneredShield(shields["US:GA"], ["CONN"]);
  shields["US:GA:Bypass"] = banneredShield(shields["US:GA"], ["BYP"]);
  shields["US:GA:Business"] = banneredShield(shields["US:GA"], ["BUS"]);
  shields["US:GA:Alternate"] = banneredShield(shields["US:GA"], ["ALT"]);

  shields["US:GU"] = {
    backgroundImage: [
      shieldImages.shield40_us_gu_2,
      shieldImages.shield40_us_gu_3,
    ],
    textLayoutConstraint: ShieldText.ellipseTextConstraint,
    textColor: Color.shields.white,
    padding: {
      left: 1,
      right: 1,
      top: 4,
      bottom: 4,
    },
  };

  shields["US:HI"] = {
    backgroundImage: [
      shieldImages.shield40_us_hi_2,
      shieldImages.shield40_us_hi_3,
    ],
    textColor: Color.shields.black,
    padding: {
      left: 4,
      right: 4,
      top: 5,
      bottom: 1,
    },
  };

  shields["US:IA"] = pillShield(Color.shields.white, Color.shields.black);
  shields["US:IA:CR"] = pentagonShieldBlueYellow;

  shields["US:ID"] = {
    backgroundImage: [
      shieldImages.shield40_us_id_2,
      shieldImages.shield40_us_id_3,
    ],
    textColor: Color.shields.black,
    padding: {
      left: 5,
      right: 1,
      top: 1,
      bottom: 8,
    },
  };

  shields["US:IL"] = shields["default"];
  [
    "Adams",
    "Boone",
    "Bureau",
    "Champaign",
    "Christian",
    "Clay",
    "Clinton",
    "Coles",
    "Cumberland",
    "DeKalb",
    "De_Witt",
    "Douglas",
    "DuPage",
    "Edgar",
    "Effingham",
    "Fayette",
    "Henderson",
    "Henry",
    "Iroquois",
    "Kankakee",
    "Kendall",
    "Knox",
    "La_Salle",
    "Lake",
    "Livingston",
    "Logan",
    "McDonough",
    "McHenry",
    "McLean",
    "Macon",
    "Mason",
    "Menard",
    "Peoria",
    "Piatt",
    "Rock_Island",
    "Sangamon",
    "Schuyler",
    "Shelby",
    "Saint_Clair",
    "Winnebago",
    "Woodford",
  ].forEach(
    (county) => (shields[`US:IL:${county}`] = pentagonShieldBlueYellow)
  );

  shields["US:IN"] = shields["default"];
  shields["US:IN:Toll"] = {
    norefImage: shieldImages.shield40_us_in_toll,
    notext: true,
  };

  shields["US:KS"] = {
    backgroundImage: [
      shieldImages.shield40_us_ks_2,
      shieldImages.shield40_us_ks_3,
    ],
    textColor: Color.shields.black,
    padding: {
      left: 4,
      right: 4,
      top: 4,
      bottom: 4,
    },
  };

  shields["US:KY"] = pillShield(Color.shields.white, Color.shields.black);
  shields["US:KY:Business"] = banneredShield(shields["US:KY"], ["BUS"]);
  shields["US:KY:AA"] = {
    backgroundImage: shieldImages.shield40_us_ky_parkway,
    textColor: Color.shields.blue,
    padding: {
      left: 2,
      right: 2,
      top: 2,
      bottom: 6,
    },
  };
  shields["US:KY:Parkway"] = Object.assign(
    {
      // FIXME: This object contains both spelled-out and abbreviated road
      // names to accommodate both the abbreviated names from OpenMapTiles and
      // the spelled-out names from Planetiler.
      // https://github.com/onthegomap/planetiler/issues/14
      // This is a special case, as documented in CONTRIBUTE.md
      refsByWayName: {
        "Audubon Parkway": "AU",
        "Bluegrass Parkway": "BG",
        "Bluegrass Pkwy": "BG",
        "Cumberland Parkway": "LN",
        "Cumberland Pkwy": "LN",
        "Hal Rogers Parkway": "HR",
        "Hal Rogers Pkwy": "HR",
        "Mountain Parkway": "MP",
        "Mountain Pkwy": "MP",
        "Purchase Parkway": "JC",
        "Purchase Pkwy": "JC",
        "Western Kentucky Parkway": "WK",
        "Western Kentucky Pkwy": "WK",
      },
    },
    shields["US:KY:AA"]
  );

  shields["US:LA"] = {
    backgroundImage: [
      shieldImages.shield40_us_la_2,
      shieldImages.shield40_us_la_3,
    ],
    textColor: Color.shields.black,
    padding: {
      left: 2.5,
      right: 2.5,
      top: 7,
      bottom: 3,
    },
  };
  shields["US:LA:Business"] = banneredShield(shields["US:LA"], ["BUS"]);
  shields["US:LA:Spur"] = banneredShield(shields["US:LA"], ["SPUR"]);
  shields["US:LA:Truck"] = banneredShield(shields["US:LA"], ["TRK"]);
  [
    "Bienville",
    "Caddo",
    "Cameron",
    "De_Soto",
    "Grant",
    "Iberia",
    "Lincoln",
    "Livingston",
    "Natchitoches",
    "Ouachita",
    "Rapides",
    "Red_River",
    "Richland",
    "Saint_Mary",
    "Terrebonne",
    "Union",
    "Webster",
    "Winn",
  ].forEach(
    (parish) => (shields[`US:LA:${parish}`] = pentagonShieldBlueYellow)
  );

  shields["US:MA"] = shields["default"];

  let padding_us_md = {
    left: 4,
    right: 4,
    top: 7,
    bottom: 3,
  };
  let shield_us_md = [
    shieldImages.shield40_us_md_2,
    shieldImages.shield40_us_md_3,
  ];
  shields["US:MD"] = {
    backgroundImage: shield_us_md,
    textColor: Color.shields.black,
    padding: padding_us_md,
  };
  shields["US:MD:Alternate"] = banneredShield(shields["US:MD"], ["ALT"]);
  shields["US:MD:Bypass"] = banneredShield(shields["US:MD"], ["BYP"]);
  shields["US:MD:Business"] = banneredShield(
    {
      backgroundImage: shield_us_md,
      textColor: Color.shields.black,
      padding: padding_us_md,
      colorLighten: Color.shields.green,
    },
    ["BUS"]
  );

  shields["US:ME"] = shields["default"];

  shields["US:MI"] = diamondShield;
  ["CR", "Benzie", "Gogebic", "Kalkaska", "Montcalm", "Roscommon"].forEach(
    (county) => (shields[`US:MI:${county}`] = pentagonShieldBlueYellow)
  );
  ["Delta", "Manistee"].forEach(
    (county) =>
      (shields[`US:MI:${county}`] = roundedRectShield(
        Color.shields.green,
        Color.shields.white
      ))
  );
  ["Iron", "Luce", "Marquette", "Oscoda", "Schoolcraft"].forEach(
    (county) => (shields[`US:MI:${county}`] = shields["default"])
  );

  shields["US:MN"] = {
    backgroundImage: [
      shieldImages.shield40_us_mn_2,
      shieldImages.shield40_us_mn_3,
    ],
    textColor: Color.shields.white,
    padding: {
      left: 4,
      right: 4,
      top: 7,
      bottom: 3,
    },
  };
  [
    "Aitkin",
    "Anoka",
    "Becker",
    "Beltrami",
    "Benton",
    "Big_Stone",
    "Blue_Earth",
    "Brown",
    "Carlton",
    "Carver",
    "Cass",
    "Chippewa",
    "Chisago",
    "Clay",
    "Clearwater",
    "Cook",
    "Cottonwood",
    "Crow_Wing",
    "Dakota",
    "Dodge",
    "Douglas",
    "Faribault",
    "Fillmore",
    "Freeborn",
    "Goodhue",
    "Grant",
    "Hennepin",
    "Houston",
    "Hubbard",
    "Isanti",
    "Itasca",
    "Jackson",
    "Kanabec",
    "Kandiyohi",
    "Kittson",
    "Koochiching",
    "Lac_qui_Parle",
    "Lake",
    "Lake_of_the_Woods",
    "Le_Sueur",
    "Lincoln",
    "Lyon",
    "Mahnomen",
    "Marshall",
    "Martin",
    "McLeod",
    "Meeker",
    "Mille_Lacs",
    "Morrison",
    "Mower",
    "Murray",
    "Nicollet",
    "Nobles",
    "Norman",
    "Olmsted",
    "Otter_Tail",
    "Pennington",
    "Pine",
    "Pipestone",
    "Polk",
    "Pope",
    "Ramsey",
    "Red_Lake",
    "Redwood",
    "Renville",
    "Rice",
    "Rock",
    "Roseau",
    "Saint_Louis",
    "Scott",
    "Sherburne",
    "Sibley",
    "Stearns",
    "Steele",
    "Stevens",
    "Swift",
    "Todd",
    "Traverse",
    "Wabasha",
    "Wadena",
    "Waseca",
    "Washington",
    "Watonwan",
    "Wilkin",
    "Winona",
    "Wright",
    "Yellow_Medicine",
  ].forEach(
    (county) =>
      ([
        shields[`US:MN:${county}:CSAH`],
        shields[`US:MN:${county}:CR`],
        shields[`US:MN:${county}:Park_Access`],
      ] = [
        {
          ...pentagonShieldBlueYellow,
          textColor: Color.shields.white,
        },
        shields["default"],
        trapezoidUpShieldRoundedBrown,
      ])
  );

  shields["US:MO"] = {
    backgroundImage: [
      shieldImages.shield40_us_mo_2,
      shieldImages.shield40_us_mo_3,
    ],
    textColor: Color.shields.black,
    padding: {
      left: 4,
      right: 4.5,
      top: 3,
      bottom: 5.5,
    },
  };
  shields["US:MO:Alternate"] = banneredShield(shields["US:MO"], ["ALT"]);
  shields["US:MO:Business"] = banneredShield(shields["US:MO"], ["BUS"]);
  shields["US:MO:Spur"] = banneredShield(shields["US:MO"], ["SPUR"]);
  shields["US:MO:Supplemental"] = shields["default"];
  shields["US:MO:Supplemental:Spur"] = banneredShield(
    shields["US:MO:Supplemental"],
    ["SPUR"]
  );
  [
    "Bollinger",
    "Butler",
    "Cape_Girardeau",
    "Dunklin",
    "Madison",
    "Mississippi",
    "Perry",
    "Stoddard",
    "Taney",
    "Wayne",
  ].forEach(
    (county) => (shields[`US:MO:${county}`] = pentagonShieldBlueYellow)
  );
  shields["US:MO:Lewis"] = roundedRectShield(
    Color.shields.brown,
    Color.shields.white
  );

  shields["US:MP"] = {
    backgroundImage: [
      shieldImages.shield40_us_mp_2,
      shieldImages.shield40_us_mp_3,
    ],
    textColor: Color.shields.black,
    padding: {
      left: 4,
      right: 4,
      top: 2,
      bottom: 2,
    },
  };

  shields["US:MS"] = ovalShield(Color.shields.white, Color.shields.black);
  [
    "Alcorn",
    "Calhoun",
    "Carroll",
    "Lafayette",
    "Lee",
    "Prentiss",
    "Smith",
    "Tippah",
    "Union",
    "Yalobusha",
  ].forEach(
    (county) => (shields[`US:MS:${county}`] = pentagonShieldBlueYellow)
  );

  shields["US:MT"] = shields["default"];
  shields["US:MT:secondary"] = {
    backgroundImage: shieldImages.shield40_us_mt_secondary,
    textColor: Color.shields.black,
    padding: {
      left: 2,
      right: 2,
      top: 0,
      bottom: 6,
    },
  };
  ["Dawson", "Richland"].forEach(
    (county) => (shields[`US:MT:${county}`] = pentagonShieldBlueYellow)
  );

  shields["US:NC"] = diamondShield;
  shields["US:NC:Bypass"] = banneredShield(shields["US:NC"], ["BYP"]);
  shields["US:NC:Business"] = banneredShield(shields["US:NC"], ["BUS"]);
  shields["US:NC:Truck"] = banneredShield(shields["US:NC"], ["TRK"]);
  shields["US:NC:Mecklenburg:Charlotte"] = pentagonShieldGreenWhite;

  shields["US:ND"] = {
    backgroundImage: [
      shieldImages.shield40_us_nd_2,
      shieldImages.shield40_us_nd_3,
    ],
    textColor: Color.shields.black,
    padding: {
      left: 2,
      right: 5,
      top: 4,
      bottom: 4,
    },
  };
  shields["US:ND:Alternate"] = banneredShield(shields["US:ND"], ["ALT"]);
  shields["US:ND:Business"] = banneredShield(shields["US:ND"], ["BUS"]);
  shields["US:ND:Truck"] = banneredShield(shields["US:ND"], ["TRK"]);
  [
    "Barnes",
    "Benson",
    "Bottineau",
    "Burke",
    "Cass",
    "Cavalier",
    "Dickey",
    "Divide",
    "Foster",
    "Grand_Forks",
    "Griggs",
    "LaMoure",
    "McHenry",
    "McIntosh",
    "McKenzie",
    "McLean",
    "Mercer",
    "Morton",
    "Mountrail",
    "Nelson",
    "Pembina",
    "Ramsey",
    "Ransom",
    "Renville",
    "Richland",
    "Sargent",
    "Sioux",
    "Steele",
    "Stutsman",
    "Traill",
    "Walsh",
    "Ward",
    "Wells",
    "Williams",
  ].forEach(
    (county) => (shields[`US:ND:${county}`] = pentagonShieldBlueYellow)
  );
  ["Eddy", "Kidder"].forEach(
    (county) =>
      (shields[`US:ND:${county}`] = roundedRectShield(
        Color.shields.green,
        Color.shields.white
      ))
  );
  shields["US:ND:Towner"] = shields["default"];

  shields["US:NE"] = trapezoidUpShield;
  shields["US:NE:Business"] = banneredShield(shields["US:NE"], ["BUS"]);
  shields["US:NE:Link"] = banneredShield(shields["US:NE"], ["LINK"]);
  shields["US:NE:Rec"] = banneredShield(shields["US:NE"], ["REC"]);
  shields["US:NE:Spur"] = banneredShield(shields["US:NE"], ["SPUR"]);

  shields["US:NH"] = {
    backgroundImage: [
      shieldImages.shield40_us_nh_2,
      shieldImages.shield40_us_nh_3,
    ],
    textColor: Color.shields.black,
    padding: {
      left: 3.5,
      right: 2,
      top: 4,
      bottom: 5,
    },
  };
  shields["US:NH:Bypass"] = banneredShield(shields["US:NH"], ["BYP"]);

  shields["US:NJ"] = ovalShield(Color.shields.white, Color.shields.black);
  shields["US:NJ:ACE"] = {
    backgroundImage: shieldImages.shield40_us_nj_ace_noref,
    notext: true,
  };
  shields["US:NJ:GSP"] = {
    backgroundImage: shieldImages.shield40_us_nj_gsp_noref,
    notext: true,
  };
  shields["US:NJ:NJTP"] = {
    backgroundImage: shieldImages.shield40_us_nj_njtp_noref,
    notext: true,
  };
  //New Jersey county routes with standard shields
  [
    "CR",
    "Atlantic",
    "Burlington",
    "Camden",
    "Cape_May",
    "Cumberland",
    "Essex",
    "Gloucester",
    "Hudson",
    "Hunterdon",
    "Mercer",
    "Middlesex",
    "Monmouth",
    "Morris",
    "Ocean",
    "Passaic",
    "Salem",
    "Somerset",
    "Sussex",
    "Union",
    "Warren",
  ].forEach(
    (county) => (shields[`US:NJ:${county}`] = pentagonShieldBlueYellow)
  );
  shields["US:NJ:Bergen"] = shields["default"];

  shields["US:NM"] = pillShield(
    Color.shields.white,
    Color.shields.pink,
    Color.shields.black
  );
  [
    "Cibola",
    "Doña_Ana",
    "Eddy",
    "Guadalupe",
    "Lea",
    "Lincoln",
    "Luna",
    "McKinley",
    "Mora",
    "Otero",
    "Rio_Arriba",
    "Sandoval",
    "San_Juan",
    "Santa_Fe",
    "Sierra",
    "Taos",
    "Torrance",
    "Union",
  ].forEach(
    (county) => (shields[`US:NM:${county}`] = pentagonShieldBlueYellow)
  );
  shields["US:NM:San_Juan:NCM"] = banneredShield(
    {
      backgroundImage: [
        shieldImages.shield40_pentagon_white_pink_2,
        shieldImages.shield40_pentagon_white_pink_3,
      ],
      textLayoutConstraint: ShieldText.ellipseTextConstraint,
      textColor: Color.shields.pink,
      padding: padding_pentagon,
    },
    ["NCM"]
  );

  shields["US:NV"] = {
    backgroundImage: shieldImages.shield40_us_nv,
    textColor: Color.shields.black,
    padding: {
      left: 2,
      right: 2,
      top: 2,
      bottom: 12,
    },
  };
  ["Clark", "Washoe"].forEach(
    (county) => (shields[`US:NV:${county}`] = pentagonShieldBlueYellow)
  );

  shields["US:NY"] = {
    backgroundImage: [
      shieldImages.shield40_us_ny_2,
      shieldImages.shield40_us_ny_3,
    ],
    textColor: Color.shields.black,
    padding: {
      left: 2,
      right: 2,
      top: 5,
      bottom: 5,
    },
  };
  shields["US:NY:Thruway"] = {
    norefImage: shieldImages.shield40_us_ny_thruway,
    notext: true,
  };
  shields["US:NY:STE"] = {
    norefImage: shieldImages.shield40_us_ny_ste,
    notext: true,
  };
  [
    "Albany",
    "Allegany",
    "Broome",
    "Cattaraugus",
    "Chautauqua",
    "Chemung",
    "Chenango",
    "Clinton",
    "Columbia",
    "Delaware",
    "Dutchess",
    "Erie", // fallback for missing county-shaped shield
    "Essex",
    "Franklin",
    "Fulton",
    "Greene",
    "Hamilton",
    "Herkimer",
    "Jefferson",
    "Lewis",
    "Livingston",
    "Madison",
    "Montgomery",
    "Oneida",
    "Orange",
    "Oswego",
    "Otsego",
    "Putnam",
    "Rensselaer",
    "Rockland",
    "Saint_Lawrence",
    "Saratoga",
    "Schoharie",
    "Schuyler",
    "Steuben",
    "Suffolk",
    "Sullivan",
    "Tioga",
    "Tompkins",
    "Ulster",
    "Warren",
    "Washington",
    "Yates",
  ].forEach(
    (county) => (shields[`US:NY:${county}`] = pentagonShieldBlueYellow)
  );

  shields["US:OH"] = {
    backgroundImage: [
      shieldImages.shield40_us_oh_2,
      shieldImages.shield40_us_oh_3,
    ],
    norefImage: shieldImages.shield40_us_oh_turnpike,
    textColor: Color.shields.black,
    padding: {
      left: 3,
      right: 3,
      top: 4,
      bottom: 6,
    },
  };
  shields["US:OH:Bypass"] = banneredShield(shields["US:OH"], ["BYP"]);
  shields["US:OH:Business"] = banneredShield(shields["US:OH"], ["BUS"]);

  // Ohio county and township roads

  ["COL", "JEF", "MAH", "OTT", "SEN", "STA", "SUM", "TUS"].forEach(
    // Yellow on blue pentagon
    (county) => (shields[`US:OH:${county}`] = pentagonShieldBlueYellow)
  );
  [
    "CAR",
    "COS",
    "FAI",
    "FUL",
    "GAL",
    "HAS",
    "HOC",
    "HOL",
    "KNO",
    "LAW",
    "LIC",
    "LOG",
    "MAD",
    "MRG",
    "MRW",
    "PER",
    "UNI",
    "WAY",
    "BEL:Kirkwood",
    "HAR:Dudley",
    "JEF:Springfield",
    "MED:Harrisville",
    "MED:Wadsworth",
    "SAN:Fremont",
    "TRU:Kinsman",
    "WYA:township",
  ].forEach(
    (countyTownshipOrCity) =>
      (shields[`US:OH:${countyTownshipOrCity}`] = shields["default"])
  );
  [
    "ATH",
    "BEL",
    "GUE",
    "HAR",
    "HEN",
    "MOE",
    "PAU",
    "WAS",
    "WIL",
    "WYA",
    "COS:Jackson",
    "FAI:Greenfield",
    "JEF:Knox",
    "LOG:Bokescreek",
    "LOG:Pleasant",
    "LOG:Washington",
    "MED:Sharon",
    "MRG:York",
    "MRW:Bennington",
    "MRW:Chester",
    "MRW:Franklin",
    "PER:Bearfield",
    "PER:Hopewell",
    "WAY:East_Union",
  ].forEach(
    // White on green rectangle
    (countyOrTownship) =>
      (shields[`US:OH:${countyOrTownship}`] = roundedRectShield(
        Color.shields.green,
        Color.shields.white
      ))
  );
  ["MED", "NOB", "WAY:Paint", "WAY:Salt_Creek"].forEach(
    // White on blue rectangle
    (countyOrTownship) =>
      (shields[`US:OH:${countyOrTownship}`] = roundedRectShield(
        Color.shields.blue,
        Color.shields.white
      ))
  );
  ["TRU", "VIN", "COS:Adams"].forEach(
    // Black on yellow rectangle
    (countyOrTownship) =>
      (shields[`US:OH:${countyOrTownship}`] = roundedRectShield(
        Color.shields.yellow,
        Color.shields.black
      ))
  );
  shields["US:OH:ASD"] = {
    backgroundImage: [shieldImages.shield40_us_oh_asd],
    textColor: Color.shields.green,
    padding: {
      left: 6,
      right: 3,
      top: 4,
      bottom: 7,
    },
  };
  shields["US:OH:SCI"] = {
    backgroundImage: [
      shieldImages.shield40_us_oh_sci_2,
      shieldImages.shield40_us_oh_sci_3,
    ],
    textColor: Color.shields.black,
    padding: {
      left: 3,
      right: 3,
      top: 4,
      bottom: 6,
    },
  };
  shields["US:OH:HOC:Falls"] = roundedRectShield(
    Color.shields.white,
    Color.shields.green,
    Color.shields.black
  );
  shields["US:OH:PER:Monday_Creek"] = roundedRectShield(
    Color.shields.green,
    Color.shields.black
  );
  shields["US:OH:TUS:Salem"] = {
    backgroundImage: [shieldImages.shield40_us_oh_tus_salem],
    textColor: Color.shields.black,
    padding: {
      left: 1,
      right: 4,
      top: 1,
      bottom: 4,
    },
  };

  // If a township's road shields have the same shape and Color.shields as the surrounding county's road shields,
  // add a banner to distinguish the township road shields from the more prominent county road shields.

  [
    ["ASD", "TWP"],
    ["ATH", "Trimble"],
    ["FAI", "Violet"],
    ["HOL", "Berlin"],
    ["HOL", "Clark"],
    ["HOL", "Knox"],
    ["HOL", "Monroe"], // No black border in reality, but a border is needed for contrast.
    ["HOL", "Paint"],
    ["HOL", "Salt_Creek"],
    ["KNO", "Liberty"],
    ["KNO", "Milford"],
    ["LIC", "Jersey"],
    ["LOG", "Harrison"],
    ["LOG", "Jefferson"],
    ["LOG", "Lake"],
    ["LOG", "Liberty"],
    ["LOG", "McArthur"],
    ["LOG", "Miami"],
    ["LOG", "Monroe"],
    ["LOG", "Perry"],
    ["LOG", "Richland"],
    ["LOG", "Rushcreek"],
    ["LOG", "Stokes"],
    ["LOG", "Union"],
    ["MED", "York"],
    ["MRW", "Canaan"],
    ["MRW", "Harmony"],
    ["MRW", "South_Bloomfield"],
    ["MRW", "Westfield"],
    ["PAU", "Latty"],
    ["PAU", "Washington"],
    ["PER", "Coal"],
    ["WAS", "Aurelius"],
    ["WAS", "Salem"],
  ].forEach(
    (countyAndTownship) =>
      (shields[`US:OH:${countyAndTownship[0]}:${countyAndTownship[1]}`] =
        banneredShield(shields[`US:OH:${countyAndTownship[0]}`], ["TWP"]))
  );

  shields["US:OK"] = {
    backgroundImage: [
      shieldImages.shield40_us_ok_2,
      shieldImages.shield40_us_ok_3,
    ],
    textColor: Color.shields.black,
    padding: {
      left: 3,
      right: 3,
      top: 7,
      bottom: 3,
    },
  };
  shields["US:OK:Toll"] = shields["US:OK"];
  shields["US:OK:Business"] = banneredShield(shields["US:OK"], ["BUS"]);
  shields["US:OK:Loop"] = banneredShield(shields["US:OK"], ["LOOP"]);
  shields["US:OK:Spur"] = banneredShield(shields["US:OK"], ["SPUR"]);
  shields["US:OK:Truck"] = banneredShield(shields["US:OK"], ["TRK"]);

  shields["US:OR"] = {
    backgroundImage: [
      shieldImages.shield40_us_or_2,
      shieldImages.shield40_us_or_3,
    ],
    textColor: Color.shields.black,
    padding: {
      left: 3,
      right: 3,
      top: 4,
      bottom: 6.5,
    },
  };
  shields["US:OR:Business"] = banneredShield(shields["US:OR"], ["BUS"]);
  ["Douglas", "Grant", "Lake", "Morrow"].forEach(
    (county) => (shields[`US:OR:${county}`] = pentagonShieldBlueYellow)
  );

  shields["US:PA"] = {
    backgroundImage: [
      shieldImages.shield40_us_pa_2,
      shieldImages.shield40_us_pa_3,
    ],
    textColor: Color.shields.black,
    padding: {
      left: 3,
      right: 3,
      top: 5,
      bottom: 5,
    },
  };
  shields["US:PA:Truck"] = banneredShield(shields["US:PA"], ["TRK"]);
  shields["US:PA:Business"] = banneredShield(shields["US:PA"], ["BUS"]);
  shields["US:PA:Alternate"] = banneredShield(shields["US:PA"], ["ALT"]);
  shields["US:PA:Turnpike"] = {
    backgroundImage: [
      shieldImages.shield40_us_pa_turnpike_2,
      shieldImages.shield40_us_pa_turnpike_3,
    ],
    norefImage: shieldImages.shield40_us_pa_turnpike_noref,
    textColor: Color.shields.white,
    padding: {
      left: 3,
      right: 3,
      top: 5,
      bottom: 5,
    },
  };

  shields["US:RI"] = shields["default"];

  shields["US:SC"] = {
    backgroundImage: shieldImages.shield40_us_sc,
    textColor: Color.shields.blue,
    padding: {
      left: 2,
      right: 2,
      top: 6,
      bottom: 3,
    },
  };
  shields["US:SC:Truck"] = banneredShield(shields["US:SC"], ["TRK"]);
  shields["US:SC:Business"] = banneredShield(shields["US:SC"], ["BUS"]);
  shields["US:SC:Alternate"] = banneredShield(shields["US:SC"], ["ALT"]);

  shields["US:SD"] = {
    backgroundImage: [
      shieldImages.shield40_us_sd_2,
      shieldImages.shield40_us_sd_3,
    ],
    textColor: Color.shields.black,
    padding: {
      left: 2,
      right: 3,
      top: 3,
      bottom: 5,
    },
  };
  [
    "Beadle",
    "Bon_Homme",
    "Brookings",
    "Charles_Mix",
    "Clark",
    "Codington",
    "Corson",
    "Custer",
    "Day",
    "Deuel",
    "Edmunds",
    "Fall_River",
    "Faulk",
    "Grant",
    "Hamlin",
    "Harding",
    "Hyde",
    "Kingsbury",
    "Lake",
    "Lincoln",
    "McCook",
    "McPherson",
    "Marshall",
    "Meade",
    "Minnehaha",
    "Moody",
    "Perkins",
    "Roberts",
    "Spink",
    "Stanley",
    "Turner",
    "Union",
    "Yankton",
  ].forEach(
    (county) => (shields[`US:SD:${county}`] = pentagonShieldBlueYellow)
  );
  ["Brown", "Tripp"].forEach(
    (county) =>
      (shields[`US:SD:${county}`] = roundedRectShield(
        Color.shields.green,
        Color.shields.white
      ))
  );

  shields["US:TN:McMinn"] = pentagonShieldBlueYellow;

  shields["US:TX"] = shields["default"];
  shields["US:TX:Loop"] = banneredShield(shields["US:TX"], ["LOOP"]);
  shields["US:TX:Spur"] = banneredShield(shields["US:TX"], ["SPUR"]);
  shields["US:TX:Business"] = banneredShield(shields["US:TX"], ["BUS"]);
  shields["US:TX:Park"] = banneredShield(shields["US:TX"], ["PARK"]);
  shields["US:TX:Beltway"] = banneredShield(shields["US:TX"], ["BELT"]);
  shields["US:TX:FM"] = banneredShield(shields["US:TX"], ["F.M."]);
  shields["US:TX:FM:Business"] = banneredShield(shields["US:TX:FM"], [
    "BUS",
    "F.M.",
  ]);
  shields["US:TX:PA"] = banneredShield(shields["US:TX"], ["P.A."]);
  shields["US:TX:RM"] = banneredShield(shields["US:TX"], ["R.M."]);
  shields["US:TX:Recreational"] = banneredShield(
    roundedRectShield(Color.shields.white, Color.shields.brown),
    ["R"]
  );
  shields["US:TX:NASA"] = banneredShield(shields["US:TX"], ["NASA"]);
  shields["US:TX:Toll"] = roundedRectShield(
    Color.shields.blue,
    Color.shields.white
  );
  shields["US:TX:CTRMA"] = shields["US:TX:Toll"];
  shields["US:TX:NTTA"] = shields["US:TX:Toll"];
  shields["US:TX:Express:Toll"] = banneredShield(shields["US:TX:Toll"], [
    "EXPR",
  ]);
  shields["US:TX:Loop:Toll"] = banneredShield(shields["US:TX:Toll"], ["LOOP"]);
  shields["US:TX:Loop:Express:Toll"] = banneredShield(shields["US:TX:Toll"], [
    "EXPR",
    "LOOP",
  ]);
  [
    "Anderson",
    "Blanco",
    "Brooks",
    "Burnet",
    "Caldwell",
    "Grimes",
    "Jim_Wells",
    "Loving",
    "Mitchell",
    "Morris", // fallback for missing county-shaped shield
    "Panola",
    "Reeves",
    "Robertson",
    "Rusk",
    "Scurry",
    "Somervell",
    "Uvalde",
    "Winkler",
  ].forEach(
    (county) => (shields[`US:TX:${county}`] = pentagonShieldBlueYellow)
  );
  ["Brazoria", "Brown", "Burleson", "Colorado", "Comanche", "Houston"].forEach(
    (county) =>
      (shields[`US:TX:${county}`] = roundedRectShield(
        Color.shields.green,
        Color.shields.white
      ))
  );
  [
    "Cass",
    "Kent",
    "Kleberg",
    "Lavaca",
    "Milam",
    "Nolan",
    "Schleicher",
    "Shackelford",
    "Stonewall",
    "Sutton",
    "Ward",
  ].forEach(
    (county) =>
      (shields[`US:TX:${county}`] = banneredShield(shields["default"], ["CR"]))
  );
  shields["US:TX:Jackson"] = banneredShield(
    roundedRectShield(Color.shields.blue, Color.shields.white),
    ["CR"]
  );
  shields["US:TX:Andrews:Andrews:Loop"] = banneredShield(
    roundedRectShield(Color.shields.white, Color.shields.blue),
    ["LOOP"]
  );

  shields["US:UT"] = {
    backgroundImage: [
      shieldImages.shield40_us_ut_2,
      shieldImages.shield40_us_ut_3,
    ],
    textColor: Color.shields.black,
    padding: {
      left: 4,
      right: 4,
      top: 5.5,
      bottom: 5,
    },
  };
  shields["US:UT:Wayne"] = pentagonShieldBlueYellow;

  shields["US:VA"] = {
    backgroundImage: [
      shieldImages.shield40_us_va_2,
      shieldImages.shield40_us_va_3,
    ],
    textColor: Color.shields.black,
    padding: {
      left: 2,
      right: 2,
      top: 2,
      bottom: 7,
    },
  };
  shields["US:VA:Business"] = banneredShield(shields["US:VA"], ["BUS"]);
  shields["US:VA:Alternate"] = banneredShield(shields["US:VA"], ["ALT"]);
  shields["US:VA:Secondary"] = pillShield(
    Color.shields.white,
    Color.shields.black
  );

  shields["US:VI"] = pillShield(Color.shields.white, Color.shields.black);

  // Vermont routes - green and white
  shields["US:VT"] = {
    backgroundImage: [
      shieldImages.shield40_us_vt_2,
      shieldImages.shield40_us_vt_3,
    ],
    textColor: Color.shields.green,
    padding: {
      left: 3,
      right: 3,
      top: 3,
      bottom: 3,
    },
  };
  shields["US:VT:Alternate"] = banneredShield(shields["US:VT"], ["ALT"]);
  // Vermont routes town maintained sections - black and white ovals
  shields["US:VT:Town"] = ovalShield(Color.shields.white, Color.shields.black);

  shields["US:WA"] = {
    backgroundImage: shieldImages.shield40_us_wa,
    textColor: Color.shields.black,
    padding: {
      left: 3,
      right: 4,
      top: 3,
      bottom: 7,
    },
  };
  shields["US:WA:Spur"] = banneredShield(shields["US:WA"], ["SPUR"]);
  shields["US:WA:Business"] = banneredShield(shields["US:WA"], ["BUS"]);
  shields["US:WA:Alternate"] = banneredShield(shields["US:WA"], ["ALT"]);

  shields["US:WI"] = {
    backgroundImage: [
      shieldImages.shield40_us_wi_2,
      shieldImages.shield40_us_wi_3,
    ],
    textColor: Color.shields.black,
    padding: {
      left: 3,
      right: 3,
      top: 3,
      bottom: 6,
    },
  };
  shields["US:WI:Business"] = banneredShield(shields["US:WI"], ["BUS"]);
  shields["US:WI:Spur"] = banneredShield(shields["US:WI"], ["SPUR"]);
  [
    "Adams",
    "Ashland",
    "Barron",
    "Bayfield",
    "Brown",
    "Buffalo",
    "Burnett",
    "Calumet",
    "Chippewa",
    "Clark",
    "Columbia",
    "Crawford",
    "Dane",
    "Dodge",
    "Door",
    "Douglas",
    "Dunn",
    "Eau Claire",
    "Florence",
    "Fond du Lac",
    "Forest",
    "Grant",
    "Green",
    "Green Lake",
    "Iowa",
    "Iron",
    "Jackson",
    "Jefferson",
    "Juneau",
    "Kenosha",
    "Kewaunee",
    "La Crosse",
    "Lafayette",
    "Langlade",
    "Lincoln",
    "Manitowoc",
    "Marathon",
    "Marinette",
    "Marquette",
    "Menominee",
    "Milwaukee",
    "Monroe",
    "Oconto",
    "Oneida",
    "Outagamie",
    "Ozaukee",
    "Pepin",
    "Pierce",
    "Polk",
    "Portage",
    "Price",
    "Racine",
    "Richland",
    "Rock",
    "Rusk",
    "Saint Croix",
    "Sauk",
    "Sawyer",
    "Shawano",
    "Sheboygan",
    "Taylor",
    "Trempealeau",
    "Vernon",
    "Vilas",
    "Walworth",
    "Washburn",
    "Washington",
    "Waukesha",
    "Waupaca",
    "Waushara",
    "Winnebago",
    "Wood",
  ].forEach((county) => (shields[`US:WI:${county}`] = shields["default"]));
  shields["US:WI:Marquette:Truck"] = banneredShield(
    shields["US:WI:Marquette"],
    ["TRK"]
  );
  shields["US:WI:Rustic"] = {
    backgroundImage: shieldImages.shield40_us_wi_rustic,
    textColor: Color.shields.yellow,
    padding: {
      left: 1.5,
      right: 4,
      top: 9,
      bottom: 4,
    },
  };

  shields["US:WV"] = shields["default"];
  shields["US:WV:County"] = pillShield(
    Color.shields.white,
    Color.shields.black
  );

  shields["US:WY"] = roundedRectShield(
    Color.shields.yellow,
    Color.shields.black
  );
  [
    "Big_Horn",
    "Carbon",
    "Converse",
    "Crook",
    "Fremont",
    "Hot_Springs",
    "Johnson",
    "Lincoln",
    "Natrona",
    "Niobrara",
    "Park",
    "Sheridan",
    "Sublette",
    "Sweetwater",
    "Uinta",
    "Washakie",
    "Weston",
  ].forEach(
    (county) => (shields[`US:WY:${county}`] = pentagonShieldBlueYellow)
  );

  // Asia
  shields["BD:national"] = roundedRectShield(
    Color.shields.green,
    Color.shields.white
  );
  shields["BD:regional"] = roundedRectShield(
    Color.shields.yellow,
    Color.shields.black
  );

  shields["CN:national"] = roundedRectShield(
    Color.shields.red,
    Color.shields.white
  );
  shields["CN:expressway"] = {
    backgroundImage: [
      shieldImages.shield40_cn_national_expressway_2,
      shieldImages.shield40_cn_national_expressway_3,
      shieldImages.shield40_cn_national_expressway_4,
    ],
    textColor: Color.shields.white,
    padding: {
      left: 2,
      right: 2,
      top: 6,
      bottom: 2,
    },
  };
  [
    "AH",
    "BJ",
    "CQ",
    "FJ",
    "GD",
    "GS",
    "GX",
    "GZ",
    "HA",
    "HB",
    "HE",
    "HI",
    "HL",
    "HN",
    "JL",
    "JS",
    "JX",
    "LN",
    "NM",
    "NX",
    "QH",
    "SC",
    "SD",
    "SH",
    "SN",
    "SX",
    "TJ",
    "XJ",
    "XZ",
    "YN",
    "ZJ",
  ].forEach((province) => {
    shields[`CN:${province}`] = roundedRectShield(
      Color.shields.yellow,
      Color.shields.black
    );
    shields[`CN:${province}:expressway`] = {
      backgroundImage: [
        shieldImages.shield40_cn_regional_expressway_2,
        shieldImages.shield40_cn_regional_expressway_3,
        shieldImages.shield40_cn_regional_expressway_4,
      ],
      textColor: Color.shields.white,
      padding: {
        left: 2,
        right: 2,
        top: 6,
        bottom: 2,
      },
    };
  });
  [
    "FJ:Ningde",
    "GD:Gaozhou",
    "GD:Dianbai",
    "GD:Huazhou",
    "GD:Maoming",
    "GD:Maonan",
    "GD:Xinyi",
    "HA:Luoyang",
    "HA:Mengjin",
    "JS:Liyang",
    "JS:Xuzhou",
    "JS:Wuzhong",
  ].forEach((county) => (shields[`CN:${county}`] = shields["default"]));

  shields["HK"] = {
    backgroundImage: shieldImages.shield40_hk,
    textLayoutConstraint: ShieldText.southHalfellipseTextConstraint,
    textColor: Color.shields.black,
    padding: {
      left: 1,
      right: 1,
      top: 1,
      bottom: 12,
    },
  };

  shields["JP:E"] = roundedRectShield(Color.shields.green, Color.shields.white);
  shields["JP:national"] = {
    backgroundImage: [
      shieldImages.shield40_jp_national_2,
      shieldImages.shield40_jp_national_3,
    ],
    textLayoutConstraint: ShieldText.ellipseTextConstraint,
    textColor: Color.shields.white,
    padding: {
      left: 2,
      right: 2,
      top: 1,
      bottom: 5,
    },
  };
  shields["JP:prefectural"] = {
    backgroundImage: shieldImages.shield40_jp_prefectural,
    textLayoutConstraint: ShieldText.ellipseTextConstraint,
    textColor: Color.shields.white,
    padding: {
      left: 3,
      right: 3,
      top: 2,
      bottom: 2,
    },
  };
  [
    "aichi",
    "akita",
    "aomori",
    "chiba",
    "ehime",
    "fukui",
    "fukuoka",
    "fukushima",
    "gifu",
    "gunma",
    "hiroshima",
    "hokkaido",
    "hyogo",
    "ibaraki",
    "ishikawa",
    "iwate",
    "kagawa",
    "kagoshima",
    "kanagawa",
    "kochi",
    "kumamoto",
    "kyoto",
    "mie",
    "miyagi",
    "miyazaki",
    "nagano",
    "nagasaki",
    "nara",
    "niigata",
    "oita",
    "okayama",
    "okinawa",
    "osaka",
    "saga",
    "saitama",
    "shiga",
    "shimane",
    "shizuoka",
    "tochigi",
    "tokushima",
    "tokyo",
    "tottori",
    "toyama",
    "wakayama",
    "yamagata",
    "yamaguchi",
    "yamanashi",
  ].forEach((prefecture) => {
    shields[`JP:prefectural:${prefecture}`] = shields["JP:prefectural"];
  });

  shields["MY:E"] = shields["my:federal"] = {
    backgroundImage: shieldImages.shield40_my,
    textColor: Color.shields.black,
    padding: {
      left: 1,
      right: 1,
      top: 5,
      bottom: 5,
    },
  };

  shields["np:national"] = roundedRectShield(
    Color.shields.green,
    Color.shields.white
  );
  shields["np:regional"] = shields["default"];

  shields["PH:N"] = homeDownWhiteShield;
  shields["PH:E"] = {
    backgroundImage: shieldImages.shield40_ph_expressway_2,
    textColor: Color.shields.black,
    padding: {
      left: 2,
      right: 2,
      top: 2,
      bottom: 6,
    },
  };

  shields["KR:expressway"] = {
    backgroundImage: [
      shieldImages.shield40_kr_expressway_2,
      shieldImages.shield40_kr_expressway_3,
    ],
    textLayoutConstraint: ShieldText.southHalfellipseTextConstraint,
    textColor: Color.shields.white,
    padding: {
      left: 4,
      right: 4,
      top: 8,
      bottom: 4,
    },
  };
  shields["KR:national"] = ovalShield(
    Color.shields.blue,
    Color.shields.white,
    Color.shields.white,
    30
  );
  shields["KR:local"] = roundedRectShield(
    Color.shields.yellow,
    Color.shields.white,
    Color.shields.blue
  );

  shields["TW:freeway"] = {
    backgroundImage: shieldImages.shield40_tw_freeway,
    textLayoutConstraint: ShieldText.ellipseTextConstraint,
    textColor: Color.shields.black,
    padding: {
      left: 4,
      right: 4,
      top: 4,
      bottom: 4,
    },
  };
  shields["TW:provincial"] = {
    backgroundImage: shieldImages.shield40_tw_provincial,
    textLayoutConstraint: ShieldText.southHalfellipseTextConstraint,
    textColor: Color.shields.white,
    padding: {
      left: 2,
      right: 2,
      top: 2,
      bottom: 10,
    },
  };
  shields["TW:expressway"] = {
    backgroundImage: shieldImages.shield40_tw_expressway,
    textLayoutConstraint: ShieldText.southHalfellipseTextConstraint,
    textColor: Color.shields.white,
    padding: {
      left: 2,
      right: 2,
      top: 2,
      bottom: 10,
    },
  };
  ["city", "county", "district", "township"].forEach(
    (type) => (shields[`TW:${type}`] = shields["default"])
  );

  shields["vn:expressway"] = roundedRectShield(
    Color.shields.yellow,
    Color.shields.black
  );
  shields["vn:national"] = shields["default"];

  // Europe
  shields["e-road"] = roundedRectShield(
    Color.shields.green,
    Color.shields.white,
    Color.shields.white,
    2,
    1,
    35
  );

  // Austria
  shields["AT:A-road"] = roundedRectShield(
    Color.shields.blue,
    Color.shields.white
  );

  // Bosnia and Herzegovina
  shields["ba:Autoceste"] = roundedRectShield(
    Color.shields.green,
    Color.shields.white,
    Color.shields.white,
    2,
    1,
    35
  );

  shields["ba:Magistralne ceste"] = roundedRectShield(
    Color.shields.blue,
    Color.shields.white,
    Color.shields.white,
    2,
    1,
    35
  );

  // Bulgaria
  shields["bg:national"] = roundedRectShield(
    Color.shields.green,
    Color.shields.white,
    Color.shields.white,
    2,
    1,
    35
  );

  // Belarus
  shields["by:national"] = roundedRectShield(
    Color.shields.red,
    Color.shields.white
  );

  // Czechia
  shields["CZ:national"] = roundedRectShield(
    Color.shields.red,
    Color.shields.white,
    Color.shields.white,
    2,
    1,
    35
  );

  shields["cz:national"] = roundedRectShield(
    Color.shields.blue,
    Color.shields.white,
    Color.shields.white,
    2,
    1,
    35
  );

  // Denmark
  shields["dk:national"] = roundedRectShield(
    Color.shields.yellow,
    Color.shields.black,
    Color.shields.black,
    2,
    1,
    35
  );

  // Estonia
  shields["ee:national"] = roundedRectShield(
    Color.shields.red,
    Color.shields.white
  );

  // Spain
  shields["ES:A-road"] = roundedRectShield(
    Color.shields.blue,
    Color.shields.white
  );

  // Finland
  shields["fi:national"] = roundedRectShield(
    Color.shields.red,
    Color.shields.white
  );

  // France
  shields["FR:A-road"] = roundedRectShield(
    Color.shields.red,
    Color.shields.white
  );

  // Greece
  shields["GR:national"] = wideHexagonGreenShield;
  shields["GR:motorway"] = shields["GR:national"];

  // Hungary
  shields["HU:national"] = {
    ...homeDownBlueWhiteShield,
    backgroundImage: shieldImages.shield40_home_down_blue_3,
  };

  // Italy
  shields["IT:A-road"] = {
    backgroundImage: [
      shieldImages.shield40_it_2,
      shieldImages.shield40_it_3,
      shieldImages.shield40_it_4,
    ],
    textColor: Color.shields.white,
    padding: {
      left: 3,
      right: 3,
      top: 5,
      bottom: 5,
    },
  };

  // Lithuania
  shields["lt:national"] = roundedRectShield(
    Color.shields.red,
    Color.shields.white
  );

  // Latvia
  shields["lv:national"] = roundedRectShield(
    Color.shields.red,
    Color.shields.white
  );
  shields["lv:regional"] = roundedRectShield(
    Color.shields.red,
    Color.shields.white
  );

  // Moldova
  shields["md:national"] = {
    backgroundImage: shieldImages.shield40_ro_trunk_2,
    textColor: Color.shields.white,
    padding: {
      left: 4,
      right: 4,
      top: 4,
      bottom: 4,
    },
  };

  // Montenegro
  shields["ME:Magistralni putevi"] = roundedRectShield(
    Color.shields.blue,
    Color.shields.white,
    Color.shields.white,
    2,
    1,
    35
  );

  // North Macedonia
  shields["mk:national"] = wideHexagonGreenShield;

  // Netherlands
  // https://wiki.openstreetmap.org/wiki/The_Netherlands_road_network
  shields["NL:A"] = roundedRectShield(Color.shields.red, Color.shields.white);
  shields["NL:N"] = roundedRectShield(
    Color.shields.yellow,
    Color.shields.black
  );
  let nlCityRoute = {
    backgroundImage: shieldImages.shield40_nl_city,
    textColor: Color.shields.black,
    padding: {
      left: 3,
      right: 3,
      top: 3,
      bottom: 3,
    },
  };
  [
    "Amsterdam",
    "Den Haag",
    "Nijmegen",
    "Parkstad",
    "Rotterdam",
    "Zaanstad",
  ].forEach((city) => (shields[`NL:S:${city}`] = nlCityRoute));
  shields["NL:binnenstedelijke_ring"] = nlCityRoute; // for both Netherlands and Curacao
  [
    "Ommen",
    "Schouwen",
    "Sluis",
    "Spaarnwoude",
    "Voorthuizen",
    "IJmuiden",
  ].forEach(
    (place) =>
      (shields[`NL:R:${place}`] = roundedRectShield(
        Color.shields.brown,
        Color.shields.white
      ))
  );

  // Poland
  shields["pl:motorways"] = roundedRectShield(
    Color.shields.red,
    Color.shields.white,
    Color.shields.white,
    2,
    1,
    35
  );
  shields["pl:expressways"] = shields["pl:motorways"];
  shields["pl:national"] = roundedRectShield(
    Color.shields.red,
    Color.shields.white
  );

  // Portugal
  shields["PT:national"] = roundedRectShield(
    Color.shields.blue,
    Color.shields.white
  );
  shields["PT:regional"] = shields["PT:national"];

  // Romania
  shields["RO:A"] = roundedRectShield(
    Color.shields.green,
    Color.shields.white,
    Color.shields.white,
    2,
    1,
    35
  );

  // Serbia
  shields["RS:national"] = wideHexagonGreenShield;

  // Russia
  shields["ru:national"] = roundedRectShield(
    Color.shields.blue,
    Color.shields.white
  );

  // Slovenia
  shields["SI:AC"] = wideHexagonGreenShield;

  // Slovakia
  shields["sk:national"] = roundedRectShield(
    Color.shields.red,
    Color.shields.white,
    Color.shields.white,
    2,
    1,
    35
  );

  // Ukraine
  shields["ua:international"] = roundedRectShield(
    Color.shields.blue,
    Color.shields.white
  );

  // Kosovo
  shields["XK:motorway"] = wideHexagonGreenShield;

  // Sweden
  [
    "RV", // Riksväg - national road
    "LV", // Länsväg - primary county road
    "AB", // Individual counties
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "K",
    "M",
    "N",
    "O",
    "S",
    "T",
    "U",
    "W",
    "X",
    "Y",
    "Z",
    "AC",
    "BD",
  ].forEach(
    (county_letter) =>
      (shields[`SE:${county_letter}`] = roundedRectShield(
        Color.shields.blue,
        Color.shields.white,
        Color.shields.white,
        2,
        1,
        null
      ))
  );
  // Lokal slinga - Local loops
  shields["SE:LS"] = roundedRectShield(
    Color.shields.white,
    Color.shields.black,
    Color.shields.black,
    2,
    1,
    null
  );

  //Ref-specific cases. Additional entries should be documented in CONTRIBUTE.md

  shields["CA:ON:primary"].overrideByRef = {
    QEW: {
      backgroundImage: shieldImages.shield40_ca_on_primary_qew,
      textColor: Color.shields.blue,
    },
  };

  shields["CA:YT"].overrideByRef = {
    2: roundedRectShield(Color.shields.white, "#ce9d00"),
    3: roundedRectShield(Color.shields.white, "#ce9d00"),
    5: roundedRectShield(Color.shields.white, Color.shields.blue),
    6: roundedRectShield(Color.shields.white, Color.shields.green),
    11: roundedRectShield(Color.shields.white, Color.shields.blue),
  };

  shields["US:AR"].overrideByRef = {
    980: {
      backgroundImage: shieldImages.shield40_us_ar_980,
      textColor: Color.shields.white,
    },
  };

  shields["US:GA"].overrideByRef = {
    515: {
      colorLighten: Color.shields.blue,
    },
    520: {
      colorLighten: Color.shields.green,
    },
  };

  shields["US:PA:Allegheny:Belt"] = {
    notext: true,
    overrideByRef: {
      "Red Belt": {
        backgroundDraw: (ref) =>
          ShieldDraw.paBelt(Color.shields.red, Color.shields.black),
      },
      "Orange Belt": {
        backgroundDraw: (ref) =>
          ShieldDraw.paBelt(Color.shields.orange, Color.shields.black),
      },
      "Yellow Belt": {
        backgroundDraw: (ref) =>
          ShieldDraw.paBelt(Color.shields.yellow, Color.shields.black),
      },
      "Green Belt": {
        backgroundDraw: (ref) =>
          ShieldDraw.paBelt(Color.shields.green, Color.shields.white),
      },
      "Blue Belt": {
        backgroundDraw: (ref) =>
          ShieldDraw.paBelt(Color.shields.blue, Color.shields.white),
      },
      "Purple Belt": {
        backgroundDraw: (ref) =>
          ShieldDraw.paBelt(Color.shields.purple, Color.shields.white),
      },
    },
  };

  return shields;
}

/**
 * Determines whether there is a raster shield background for a particular network
 *
 * @param {*} network - Route network
 * @returns true if a raster shield is available
 */
export function hasShieldArtwork(network) {
  return (
    shields[network] != null &&
    typeof shields[network].backgroundImage !== "undefined"
  );
}

/**
 * Get the number of banner placards associated with this shield
 *
 * @param {*} shield - Shield definition
 * @returns the number of banner placards that need to be drawn
 */
export function getBannerCount(shield) {
  if (shield == null || typeof shield.modifiers == "undefined") {
    return 0; //Unadorned shield
  }
  return shield.modifiers.length;
}
