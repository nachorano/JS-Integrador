const productsData = [
  {
    id: 1,
    name: "cherry quick",
    decription:
      "Quick Detail con aroma a cereza, formulado para otorgar un brillo único.",
    capacity: "600 ML",
    category: "quickDetail",
    productImg: "./assets/img/products/Cherru_Quick.png",
    price: 900,
  },
  {
    id: 2,
    name: "extreme detail",
    description:
      "Quick Detail con aroma a durazno, formulado para otorgar un brillo único. Puede ser utilizado en superficies húmedas y secas.",
    capacity: "600 ML",
    category: "quickDetail",
    productImg: "./assets/img/products/extreme_detail.png",
    price: 1170,
  },
  {
    id: 3,
    name: "american shine",
    description:
      "Ideal para remover fácilmente el polvillo diario, restos de cera y pulimiento. Otorga un excelente brillo sobre la pintura.",
    capacity: "600 ML",
    category: "quickDetail",
    productImg: "./assets/img/products/american_shine.png",
    price: 1250,
  },
  {
    id: 4,
    name: "waterless",
    description:
      "Limpiador en seco formulado para suspender la suciedad del vehículo y poder realizar una limpieza sin necesidad de utilizar agua. Contiene agentes lubricantes y ceras.",
    capacity: "600 ML",
    category: "quickDetail",
    productImg: "./assets/img/products/waterless.png",
    price: 890,
  },
  {
    id: 5,
    name: "ilussion wax",
    description:
      "Es un Quick Detail elaborado con un gran porcentaje de cera de carnauba, la cual otorga un excelente brillo con efecto húmedo y protege la superficie del vehículo.",
    capacity: "600 ML",
    category: "cera",
    productImg: "./assets/img/products/illusion_wax.png",
    price: 2090,
  },
  {
    id: 6,
    name: "CARNAUBA PURE WAX",
    description:
      "Cera en pasta no abrasiva compuesta por cera de carnauba y cera de abeja con aroma a ananá.",
    capacity: "90 GR",
    category: "cera",
    productImg: "./assets/img/products/cera_pure.png",
    price: 3150,
  },
  {
    id: 7,
    name: "THE BO$$ SHINE",
    description:
      "Sellador de pintura.             Su fórmula de polímeros siliconados, fluoro-polímeros y resinas nos aseguran el máximo brillo combinados con una repelencia al agua y suavidad al tacto.",
    capacity: "600 ML",
    category: "sellador",
    productImg: "./assets/img/products/boss.png",
    price: 1600,
  },
  {
    id: 8,
    name: "LAVA CRUSH",
    description:
      "Sellador diseñado para proteger la pintura del vehículo. Formula de polímeros siliconados y resinas que aseguran brillo.",
    capacity: "600 ML",
    category: "sellador",
    productImg: "./assets/img/products/crush.png",
    price: 1950,
  },
  {
    id: 9,
    name: "SEAL IT ALL",
    description:
      "Sellador de carácter polifuncional capaz de sellar cualquier tipo de superficie tales como pinturas, vidrios, llantas, plásticos y cromados.",
    capacity: "600 ML",
    category: "sellador",
    productImg: "./assets/img/products/seal_it_all.png",
    price: 2650,
  },
  {
    id: 10,
    name: "atomic",
    description:
      "Shampoo de PH ácido con agradable aroma a cítrico. Ideal para realizar lavados pre-tratamientos.",
    capacity: "600 ML",
    category: "shampoo",
    productImg: "./assets/img/products/atomic.png",
    price: 680,
  },
  {
    id: 11,
    name: "banana",
    description:
      "Shampoo con potenciador de brillo, PH neutro, alto poder espumógeno y de limpieza con aroma a banana.",
    capacity: "600 ML",
    category: "shampoo",
    productImg: "./assets/img/products/banana.png",
    price: 1280,
  },
  {
    id: 12,
    name: "wax",
    description:
      "Shampoo con PH neutro, alto poder espumógeno y de limpieza con aroma a cereza. Contiene carnauba y no barre ceras ni selladores siendo seguro para superficies con tratamientos.",
    capacity: "600 ML",
    category: "shampoo",
    productImg: "./assets/img/products/wax.png",
    price: 750,
  },
  {
    id: 13,
    name: "supreme",
    description:
      "Shampoo generador de espuma consistente con aroma a frutilla. Posee carnauba que otorga protección, tiene PH neutro y no barre ceras ni selladores.",
    capacity: "600 ML",
    category: "shampoo",
    productImg: "./assets/img/products/supreme.png",
    price: 1450,
  },
  {
    id: 14,
    name: "pure foam",
    description:
      "Shampoo diseñado para Foam Lance. Posee PH neutro, alto poder espumógeno y de limpieza. No barre ceras ni selladores.",
    capacity: "600 ML",
    category: "shampoo",
    productImg: "./assets/img/products/pure_foam.png",
    price: 1000,
  },
  {
    id: 15,
    name: "elite",
    description:
      "Shampoo que posee un mix de ceras de máxima calidad y potenciadores de brillo con aroma a coco y banana. PH neutro.",
    capacity: "600 ML",
    category: "shampoo",
    productImg: "./assets/img/products/elite_shampoo.png",
    price: 1170,
  },
  {
    id: 16,
    name: "dip club",
    description:
      "Shampoo revolucionario que en su composición posee un sellador ideal para vehículos con ploteo vinílico o líquido. Contiene PH neutro.",
    capacity: "600 ML",
    category: "shampoo",
    productImg: "./assets/img/products/dip_club.png",
    price: 1550,
  },
  {
    id: 17,
    name: "hyper black",
    description:
      "Producto estrella de la marca, posee un gran contenido de sílice que potencia el brillo y sella la superficie. PH neutro y alto poder espumógeno.",
    capacity: "600 ML",
    category: "shampoo",
    productImg: "./assets/img/products/hyper_black.png",
    price: 1100,
  },
  {
    id: 18,
    name: "INFERNO GEL",
    description:
      "APC Premium desarrollado para los más exigentes detailers del mercado.",
    capacity: "600 ML",
    category: "limpiadores",
    productImg: "./assets/img/products/inferno_gel.png",
    price: 1150,
  },
  {
    id: 19,
    name: "ALCALINE WHEELS",
    description:
      "Limpiador alcalino elaborado para limpiar múltiples superficies con gran poder de remoción de grasas. Fórmula concentrada.",
    capacity: "600 ML",
    category: "limpiadores",
    productImg: "./assets/img/products/alcaline.png",
    price: 1990,
  },
  {
    id: 20,
    name: "FORMULE CONQUEST",
    description:
      "Desengrasante con gran poder de limpieza, desarrollado para ser aplicado en llantas y motores. Fórmula concentrada.",
    capacity: "600 ML",
    category: "limpiadores",
    productImg: "./assets/img/products/formula_conquest.png",
    price: 1118,
  },
  {
    id: 21,
    name: "X TAR",
    description:
      "Removedor de brea con excelente poder de limpieza.",
    capacity: "600 ML",
    category: "limpiadores",
    productImg: "./assets/img/products/x_star.png",
    price: 1890,
  },
  {
    id: 22,
    name: "BUG REMOVER",
    description:
      "Limpiador exclusivo para remover insectos con gran precisión, fácil de usar y seguro para ser aplicado en todo tipo de superficies.",
    capacity: "600 ML",
    category: "limpiadores",
    productImg: "./assets/img/products/bug_remover.png",
    price: 1092,
  },
  {
    id: 23,
    name: "CLEAN VISION",
    description:
      "Limpiador con agentes anti-fog que previene el empañado de vidrios.",
    capacity: "600 ML",
    category: "limpiadores",
    productImg: "./assets/img/products/clean_vision.png",
    price: 1092,
  },
  {
    id: 24,
    name: "IRON WARNING",
    description:
      "Descontaminante férrico de llantas el cual actúa eficazmente sobre el polvo de las pastillas de freno.",
    capacity: "600 ML",
    category: "limpiadores",
    productImg: "./assets/img/products/iron.png",
  },
  {
    id: 25,
    name: "NTP",
    description:
      "Restaura y reacondiciona plásticos y gomas del exterior dejando una terminación satinada. No daña ni deteriora la superficie. Posee pigmentos negros con aroma a café.",
    capacity: "600 ML",
    category: "exterior",
    productImg: "./assets/img/products/ntp.png",
  },
  {
    id: 26,
    name: "blue magic",
    description:
      "Acondicionador de exterior a base de siliconas. Brinda un excepcional rendimiento y fácil de usar. Otorga una terminación brillante y restauradora.",
    capacity: "600 ML",
    category: "exterior",
    productImg: "./assets/img/products/blue_magic.png",
  },
  {
    id: 27,
    name: "GEL SHINE",
    description:
      "Acondicionador de cubiertas por excelencia. Producto elaborado a base de silicona de alta duración y rendimiento que otorga una terminación brillante en la superficie.",
    capacity: "600 ML",
    category: "exterior",
    productImg: "./assets/img/products/gel_shine.png",
  },
  {
    id: 27,
    name: "HITS BONES",
    description:
      "Protector de pasa ruedas y chasis, muy sencillo de utilizar. Restaura el color de la superficie y brinda protección contra el agua y el paso del tiempo.",
    capacity: "600 ML",
    category: "exterior",
    productImg: "./assets/img/products/hit_bones.png",
  },
  {
    id: 28,
    name: "BUBBLE GUM",
    description:
      "Acondicionador de plásticos interiores con terminación natural y aroma a chicle. Brinda protección contra Rayos UV y disminuye el deterioro de superficies.",
    capacity: "600 ML",
    category: "interior",
    productImg: "./assets/img/products/bubble_gum.png",
  },
  {
    id: 29,
    name: "vice trim",
    description:
      "Acondicionador de plásticos interiores con terminación natural y aroma a ananá. Brinda protección contra Rayos UV y disminuye el deterioro de superficies.",
    capacity: "600 ML",
    category: "interior",
    productImg: "./assets/img/products/vice_trim.png",
  },
  {
    id: 30,
    name: "TRIM LOOK CANDY",
    description:
      "Acondicionador líquido de plásticos interiores con terminación satinada y aroma a banana dulce. Brinda protección contra Rayos UV y disminuye el deterioro de superficies.",
    capacity: "600 ML",
    category: "interior",
    productImg: "./assets/img/products/trim_candy.png",
  },
  {
    id: 31,
    name: "HOLY GLOSS",
    description:
      "Acondicionador de plásticos interiores con terminación brillante y aroma a multifruta. Brinda protección contra Rayos UV y disminuye el deterioro de superficies",
    capacity: "600 ML",
    category: "interior",
    productImg: "./assets/img/products/holy_gloss.png",
  },
  {
    id: 32,
    name: "CANDY CREAM",
    description:
      "Acondicionador cremoso de plásticos interiores con terminación satinada y aroma a banana dulce. Brinda protección contra Rayos UV y disminuye el deterioro de superficies.",
    capacity: "600 ML",
    category: "interior",
    productImg: "./assets/img/products/candy_cream.png",
  },
  {
    id: 33,
    name: "UVA SHAKE",
    description:
      "Acondicionador de plásticos interiores con terminación satinada y aroma a uva. Brinda protección contra Rayos UV y disminuye el deterioro de superficies.",
    capacity: "600 ML",
    category: "interior",
    productImg: "./assets/img/products/uva_shake.png",
  },
  {
    id: 34,
    name: "MASH MELOn",
    description:
      "Acondicionador de plásticos interiores con terminación satinada y aroma a melón. Brinda protección contra Rayos UV y disminuye el deterioro de superficies.",
    capacity: "600 ML",
    category: "interior",
    productImg: "./assets/img/products/melon.png",
  },
  {
    id: 35,
    name: "FRUTY CREAM",
    description:
      "Acondicionador de plásticos interiores con terminación satinada y aroma a frutilla. Brinda protección contra Rayos UV y disminuye el deterioro de superficies.",
    capacity: "600 ML",
    category: "interior",
    productImg: "./assets/img/products/fruty.png",
  },
  {
    id: 36,
    name: "TRIM LEATHER",
    description:
      "Acondicionador de cueros de base acuosa. Nutre y restaura devolviendo flexibilidad y evitando el deterioro del paso del tiempo. Posee una excelente terminación con fragancia a cuero.",
    capacity: "600 ML",
    category: "interior",
    productImg: "./assets/img/products/leather.png",
  },
];
