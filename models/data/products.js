import Product from "../Product.js"; // Asegúrate de importar el modelo de producto
import Category from "../Category.js"
import 'dotenv/config.js';
import '../../config/database.js';


const products = [ 

    ////////////////////////////////////////SAHUMERIOS

  {
    name:"Pack sahumerios",
    photo:["https://static.wixstatic.com/media/3a4048_fcfae6cf937a47a981d83c1a6ab9b4d6~mv2_d_2448_3264_s_4_2.jpg/v1/fill/w_281,h_375,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/3a4048_fcfae6cf937a47a981d83c1a6ab9b4d6~mv2_d_2448_3264_s_4_2.jpg","https://static.wixstatic.com/media/3a4048_a529b501244347c39df1d257691ffc44~mv2_d_3264_2448_s_4_2.jpg/v1/fill/w_424,h_318,al_c,q_85,usm_0.66_1.00_0.01/3a4048_a529b501244347c39df1d257691ffc44~mv2_d_3264_2448_s_4_2.jpg"],
    description:"Pack de 100 varillas.",
    price:80,
    category:"sahumerios",
    quanty: 1,
    stock:5
  },
  {
    name:"Sahumerio de Palo Santo - Sagrada Madre",
    photo:["https://static.wixstatic.com/media/3a4048_ec6ce55a8ec442d0a17a696e39aaa2a8~mv2_d_3264_2448_s_4_2.jpg/v1/fill/w_440,h_330,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/3a4048_ec6ce55a8ec442d0a17a696e39aaa2a8~mv2_d_3264_2448_s_4_2.jpg","https://static.wixstatic.com/media/3a4048_a8832226d46148608f3f8200d70ce3cb~mv2_d_3264_2448_s_4_2.jpg/v1/fill/w_440,h_330,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/3a4048_a8832226d46148608f3f8200d70ce3cb~mv2_d_3264_2448_s_4_2.jpg"],
    description:"Pack de 08 varillas.",
    price:80,
    category:"sahumerios",
    quanty: 1,
    stock:5
  },
  {
    name:"Sahumerios Premium - Nuevas Fragancias",
    photo:["https://static.wixstatic.com/media/3a4048_d712bcbc216147b68f895185e60fde0d~mv2_d_3264_2448_s_4_2.jpg/v1/fill/w_440,h_330,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/3a4048_d712bcbc216147b68f895185e60fde0d~mv2_d_3264_2448_s_4_2.jpg","https://static.wixstatic.com/media/3a4048_433ab313a02a4751a00bf6679ca2244d~mv2_d_3264_2448_s_4_2.jpg/v1/fill/w_440,h_330,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/3a4048_433ab313a02a4751a00bf6679ca2244d~mv2_d_3264_2448_s_4_2.jpg"],
    description:"Pack de 25 varillas.",
    price:80,
    category:"sahumerios",
    quanty: 1,
    stock:5
  },
  {
    name:"Espirales - Diferentes Fragancias",
    photo:["https://static.wixstatic.com/media/3a4048_631246d27d9c4fbc9505584e7baeb9d7~mv2_d_3000_2250_s_2.jpg/v1/fill/w_500,h_375,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/3a4048_631246d27d9c4fbc9505584e7baeb9d7~mv2_d_3000_2250_s_2.jpg"],
    description:"Pack de 08 varillas.",
    price:80,
    category:"sahumerios",
    quanty: 1,
    stock:5
  },
  {
    name:"Sahumerio Artesanal Doble Empaste",
    photo:["https://static.wixstatic.com/media/3a4048_11aa814502aa46dfb4273495be3f79d3~mv2_d_3264_2448_s_4_2.jpg/v1/fill/w_500,h_375,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/3a4048_11aa814502aa46dfb4273495be3f79d3~mv2_d_3264_2448_s_4_2.jpg"],
    description:"Pack de 50 varillas.",
    price:80,
    category:"sahumerios",
    quanty: 1,
    stock:5
  },
  ////////////////////////////////////////VELAS
  {
    name:"Velas Largas Lisas",
    photo:["https://static.wixstatic.com/media/3a4048_f186ec9d22574655b766f2527e52d77c~mv2.jpeg/v1/fill/w_500,h_375,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/3a4048_f186ec9d22574655b766f2527e52d77c~mv2.jpeg"],
    description:"Pack de 100 unidades.",
    price:80,
    category:"velas",
    quanty: 1,
    stock:5
  },
  {
    name:"Velas Largas Combinadas",
    photo:["https://static.wixstatic.com/media/3a4048_ce742bc675a54393a78724fb01238a55~mv2.jpeg/v1/fill/w_500,h_375,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/3a4048_ce742bc675a54393a78724fb01238a55~mv2.jpeg"],
    description:"Pack de 100 unidades.",
    price:80,
    category:"velas",
    quanty: 1,
    stock:5
  },

  {
    name:"Velas Largas Doradas / Plateadas",
    photo:["https://static.wixstatic.com/media/3a4048_3cb663af054341c0a81380439abd69c9~mv2.jpeg/v1/fill/w_490,h_368,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/3a4048_3cb663af054341c0a81380439abd69c9~mv2.jpeg"],
    description:"Pack de 100 unidades.",
    price:80,
    category:"velas",
    quanty: 1,
    stock:5
  },

  {
    name:"Velas Cortas Lisas",
    photo:["https://static.wixstatic.com/media/3a4048_7e2acbda244548aca92da1fe6f0820d5~mv2.jpeg/v1/fill/w_490,h_368,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/3a4048_7e2acbda244548aca92da1fe6f0820d5~mv2.jpeg"],
    description:"Pack de 100 unidades.",
    price:80,
    category:"velas",
    quanty: 1,
    stock:5
  },

  {
    name:"Velas Cortas Combinadas",
    photo:["https://static.wixstatic.com/media/3a4048_0dc844b694da43d18c85a0e3a8db8706~mv2.jpeg/v1/fill/w_490,h_368,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/3a4048_0dc844b694da43d18c85a0e3a8db8706~mv2.jpeg"],
    description:"Pack de 100 unidades.",
    price:80,
    category:"velas",
    quanty: 1,
    stock:5
  },
  {
    name:"Velas Cortas Doradas / Plateadas",
    photo:["https://static.wixstatic.com/media/3a4048_941fb8846fec48f7922647301cb876c9~mv2.jpeg/v1/fill/w_490,h_368,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/3a4048_941fb8846fec48f7922647301cb876c9~mv2.jpeg"],
    description:"Pack de 100 unidades.",
    price:80,
    category:"velas",
    quanty: 1,
    stock:5
  },
  
  {
    name:"Velas Largas Blancas",
    photo:["https://static.wixstatic.com/media/3a4048_1ce235d887414095930d073b8241e4d4~mv2.jpeg/v1/fill/w_490,h_327,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/3a4048_1ce235d887414095930d073b8241e4d4~mv2.jpeg"],
    description:"Pack de 4 unidades.",
    price:80,
    category:"velas",
    quanty: 1,
    stock:5
  },
  
  {
    name:"Velas Cortas Blancas",
    photo:["https://static.wixstatic.com/media/3a4048_9c562f7c5fcb4697bd6bdeb31fac5211~mv2.jpeg/v1/fill/w_500,h_375,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/3a4048_9c562f7c5fcb4697bd6bdeb31fac5211~mv2.jpeg"],
    description:"Pack de 4 unidades.",
    price:80,
    category:"velas",
    quanty: 1,
    stock:5
  },
  
  {
    name:"Velas Finitas Un Solo Color",
    photo:["https://static.wixstatic.com/media/3a4048_f0e425d0a61340ff8d023209b6830cc5~mv2.jpeg/v1/fill/w_490,h_368,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/3a4048_f0e425d0a61340ff8d023209b6830cc5~mv2.jpeg"],
    description:"Pack de 12 unidades.",
    price:80,
    category:"velas",
    quanty: 1,
    stock:5
  },
  
  {
    name:"Velas Mini 7 Colores",
    photo:["https://static.wixstatic.com/media/3a4048_c1754a8e163942ecbe0bcd003ab902da~mv2.jpg/v1/fill/w_499,h_333,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/3a4048_c1754a8e163942ecbe0bcd003ab902da~mv2.jpg"],
    description:"Pack de 7 unidades.",
    price:80,
    category:"velas",
    quanty: 1,
    stock:5
  },
  
  {
    name:"Velas Blancas Europeas",
    photo:["https://static.wixstatic.com/media/3a4048_be2db018e5a442d49537aba2791902c6~mv2.jpg/v1/fill/w_490,h_368,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/3a4048_be2db018e5a442d49537aba2791902c6~mv2.jpg"],
    description:"Pack de 50 unidades.",
    price:80,
    category:"velas",
    quanty: 1,
    stock:5
  },
    ////////////////////////////////////////REGALERIA
  {
    name:"Gatos Egipcios",
    photo:["https://static.wixstatic.com/media/3a4048_b4eed69d25cc441bab4adb5d350a8606~mv2.png/v1/fill/w_490,h_490,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/3a4048_b4eed69d25cc441bab4adb5d350a8606~mv2.png"],
    description:"Material yeso pintado color blanco / negro.",
    price:80,
    category:"regaleria",
    quanty: 1,
    stock:5
  },
  
  {
    name:"Lampara De Sal Buda",
    photo:["https://static.wixstatic.com/media/3a4048_d1deb0632e4143a094404de0567e83fd~mv2.png/v1/fill/w_490,h_490,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/3a4048_d1deb0632e4143a094404de0567e83fd~mv2.png"],
    description:"Lampara tamaño mediano con sales e iluminacion.",
    price:80,
    category:"regaleria",
    quanty: 1,
    stock:5
  },
  
  {
    name:"Lampara De Sal Esfera",
    photo:["https://static.wixstatic.com/media/3a4048_9c5d28de5def4b62bf7bd0dc467c0534~mv2.png/v1/fill/w_490,h_490,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/3a4048_9c5d28de5def4b62bf7bd0dc467c0534~mv2.png"],
    description:"Lampara tamaño mediano con sales e iluminacion.",
    price:80,
    category:"regaleria",
    quanty: 1,
    stock:5
  },
  {
    name:"Lampara De Sal Cilindrica",
    photo:["https://static.wixstatic.com/media/3a4048_857b3b04c712490ba7da79f2d5bc272c~mv2.png/v1/fill/w_490,h_490,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/3a4048_857b3b04c712490ba7da79f2d5bc272c~mv2.png"],
    description:"Lampara tamaño mediano con sales e iluminacion.",
    price:80,
    category:"regaleria",
    quanty: 1,
    stock:5
  },
  {
    name:"Lampara De Sal Luna",
    photo:["https://static.wixstatic.com/media/3a4048_21b5e5909ce04c74b81d22acdf3fc6e0~mv2.png/v1/fill/w_490,h_490,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/3a4048_21b5e5909ce04c74b81d22acdf3fc6e0~mv2.png"],
    description:"Lampara tamaño mediano con sales e iluminacion.",
    price:80,
    category:"regaleria",
    quanty: 1,
    stock:5
  },  
  {
    name:"Lampara De Sal Corazon",
    photo:["https://static.wixstatic.com/media/3a4048_7963caa53a044b279103dfbb167978c3~mv2.png/v1/fill/w_490,h_490,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/3a4048_7963caa53a044b279103dfbb167978c3~mv2.png"],
    description:"Lampara tamaño mediano con sales e iluminacion.",
    price:80,
    category:"regaleria",
    quanty: 1,
    stock:5
  },  
  {
    name:"Fuente De Buda",
    photo:["https://static.wixstatic.com/media/3a4048_ded6587139c34ddaaaa8a5faa7eb0001~mv2_d_3264_2448_s_4_2.jpg/v1/fill/w_490,h_368,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/3a4048_ded6587139c34ddaaaa8a5faa7eb0001~mv2_d_3264_2448_s_4_2.jpg"],
    description:"Fuente tamaño mediano.",
    price:80,
    category:"regaleria",
    quanty: 1,
    stock:5
  },
  {
    name:"Fuente Led Buda Loto",
    photo:["https://static.wixstatic.com/media/3a4048_03adb5a5b3e4433ab3ae0a97a4adde33~mv2_d_3264_2448_s_4_2.jpg/v1/fill/w_490,h_368,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/3a4048_03adb5a5b3e4433ab3ae0a97a4adde33~mv2_d_3264_2448_s_4_2.jpg"],
    description:"Lampara tamaño mediano con sales e iluminacion.",
    price:80,
    category:"regaleria",
    quanty: 1,
    stock:5
  },
  {
    name:"Fuente Noño Buda",
    photo:["https://static.wixstatic.com/media/3a4048_6418713be710493e82f2aa9af6e91917~mv2_d_2891_2250_s_2.jpg/v1/fill/w_490,h_381,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/3a4048_6418713be710493e82f2aa9af6e91917~mv2_d_2891_2250_s_2.jpg"],
    description:"Fuente tamaño mediano",
    price:80,
    category:"regaleria",
    quanty: 1,
    stock:5
  },
  {
    name:"  Fuente Con Led Ganesh",
    photo:["https://static.wixstatic.com/media/3a4048_01f16516089d430896cd34c5afac7b56~mv2_d_3264_2448_s_4_2.jpg/v1/fill/w_490,h_368,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/3a4048_01f16516089d430896cd34c5afac7b56~mv2_d_3264_2448_s_4_2.jpg"],
    description:"Fuente tamaño mediano con iluminacion.",
    price:80,
    category:"regaleria",
    quanty: 1,
    stock:5
  },
  

    ////////////////////////////////////////ESOTERICOS
  {
    name:"Tarot Zen",
    photo:["https://static.wixstatic.com/media/3a4048_3cb60e81bb3b4ec9b50e59bd7c64cf9f~mv2.png/v1/fill/w_490,h_490,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/3a4048_3cb60e81bb3b4ec9b50e59bd7c64cf9f~mv2.png"],
    description:"Cartas de tarot.",
    price:80,
    category:"esotericos",
    quanty: 1,
    stock:5
  },

  {
    name:"Tarot El Oraculo De Las Gemas",
    photo:["https://static.wixstatic.com/media/3a4048_fba75063ed674144930180585012038e~mv2.png/v1/fill/w_490,h_490,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/3a4048_fba75063ed674144930180585012038e~mv2.png"],
    description:"Cartas de tarot.",
    price:80,
    category:"esotericos",
    quanty: 1,
    stock:5
  },

  {
    name:"Tartot Baraja Española ",
    photo:["https://static.wixstatic.com/media/3a4048_2cd18ebf84cf40a9b19f0b4fe0d31f44~mv2.png/v1/fill/w_490,h_490,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/3a4048_2cd18ebf84cf40a9b19f0b4fe0d31f44~mv2.png"],
    description:"Cartas de tarot.",
    price:80,
    category:"esotericos",
    quanty: 1,
    stock:5
  },

  {
    name:"Cartas de Tarot 'El método de echar las cartas' ",
    photo:["https://static.wixstatic.com/media/3a4048_a46a6f8a110a4ffe9440f5f27e0be949~mv2_d_3264_2448_s_4_2.jpg/v1/fill/w_440,h_330,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/3a4048_a46a6f8a110a4ffe9440f5f27e0be949~mv2_d_3264_2448_s_4_2.jp", " https://static.wixstatic.com/media/3a4048_c85299855fcc408784fb163f54576187~mv2_d_3264_2448_s_4_2.jpg/v1/fill/w_440,h_330,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/3a4048_c85299855fcc408784fb163f54576187~mv2_d_3264_2448_s_4_2.jpg"],
    description:"78 cartas todo color mas folleto explicativo.",
    price:80,
    category:"esotericos",
    quanty: 1,
    stock:5
  },

  {
    name:"Cartas Tarot Marsella Con Cajón",
    photo:["https://static.wixstatic.com/media/3a4048_801a4d99c52844eba9f2209da9bbe1a7~mv2_d_3264_2448_s_4_2.jpg/v1/fill/w_500,h_375,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/3a4048_801a4d99c52844eba9f2209da9bbe1a7~mv2_d_3264_2448_s_4_2.jpg"],
    description:"Cartas de tarot mas cajon.",
    price:80,
    category:"esotericos",
    quanty: 1,
    stock:5
  },

  {
    name:"Cartas Tarot Marsella Circular",
    photo:["https://static.wixstatic.com/media/3a4048_5664282721c64cd99c1db71307d3df32~mv2_d_3264_2448_s_4_2.jpg/v1/fill/w_500,h_375,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/3a4048_5664282721c64cd99c1db71307d3df32~mv2_d_3264_2448_s_4_2.jpg"],
    description:"Cartas de tarot circulares.",
    price:80,
    category:"esotericos",
    quanty: 1,
    stock:5
  },

    ////////////////////////////////////////ACCESORIOS

  {
    name:"Cuenco Mediano Con Caja ",
    photo:["https://static.wixstatic.com/media/3a4048_791ca0e6b5a14ccc9e5ef17221249030~mv2_d_3264_2448_s_4_2.jpg/v1/fill/w_440,h_330,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/3a4048_791ca0e6b5a14ccc9e5ef17221249030~mv2_d_3264_2448_s_4_2.jpg", "https://static.wixstatic.com/media/3a4048_663bd138a3ca4fbeac0c4f8d5d2a91a2~mv2_d_3264_2448_s_4_2.jpg/v1/fill/w_440,h_330,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/3a4048_663bd138a3ca4fbeac0c4f8d5d2a91a2~mv2_d_3264_2448_s_4_2.jpg", "https://static.wixstatic.com/media/3a4048_f37e2a8782594229beb3e904d9cf429e~mv2_d_3264_2448_s_4_2.jpg/v1/fill/w_440,h_330,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/3a4048_f37e2a8782594229beb3e904d9cf429e~mv2_d_3264_2448_s_4_2.jpg", "https://static.wixstatic.com/media/3a4048_2a7b39529a4148ea9ce6803893c917de~mv2_d_3264_2448_s_4_2.jpg/v1/fill/w_440,h_330,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/3a4048_2a7b39529a4148ea9ce6803893c917de~mv2_d_3264_2448_s_4_2.jpg"],
    description:"Cuenco mediano con caja color rojo o negro.",
    price:80,
    category:"accesorios",
    quanty: 1,
    stock:5
  },

  {
    name:"Cuenco Chico Con Caja",
    photo:["https://static.wixstatic.com/media/3a4048_cfdd6c23caf346e3b8c7aee3ab15608b~mv2_d_3264_2448_s_4_2.jpg/v1/fill/w_440,h_330,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/3a4048_cfdd6c23caf346e3b8c7aee3ab15608b~mv2_d_3264_2448_s_4_2.jpg", "https://static.wixstatic.com/media/3a4048_a2289085c43a46e5ba99611acd3c03b0~mv2_d_3264_2448_s_4_2.jpg/v1/fill/w_440,h_330,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/3a4048_a2289085c43a46e5ba99611acd3c03b0~mv2_d_3264_2448_s_4_2.jpg", "https://static.wixstatic.com/media/3a4048_d1372078798d4131b45153719635f1cc~mv2_d_3264_2448_s_4_2.jpg/v1/fill/w_440,h_330,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/3a4048_d1372078798d4131b45153719635f1cc~mv2_d_3264_2448_s_4_2.jpg", "https://static.wixstatic.com/media/3a4048_7bddf299e2bb4ca886c709e2c5ccf4b1~mv2_d_3264_2448_s_4_2.jpg/v1/fill/w_440,h_330,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/3a4048_7bddf299e2bb4ca886c709e2c5ccf4b1~mv2_d_3264_2448_s_4_2.jpg"],
    description:"Cuenco chico con caja.",
    price:80,
    category:"accesorios",
    quanty: 1,
    stock:5
  },

  {
    name:"Incensario Con Cadena CHICO",
    photo:["https://static.wixstatic.com/media/3a4048_0f6ed00359ac4e4e8b07f3f196413ef3~mv2_d_3264_2448_s_4_2.jpg/v1/fill/w_440,h_330,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/3a4048_0f6ed00359ac4e4e8b07f3f196413ef3~mv2_d_3264_2448_s_4_2.jpg", "https://static.wixstatic.com/media/3a4048_0f6ed00359ac4e4e8b07f3f196413ef3~mv2_d_3264_2448_s_4_2.jpg/v1/fill/w_440,h_330,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/3a4048_0f6ed00359ac4e4e8b07f3f196413ef3~mv2_d_3264_2448_s_4_2.jpg", "https://static.wixstatic.com/media/3a4048_e1039f650023439b80dfb68c5e80ba11~mv2_d_3264_2448_s_4_2.jpg/v1/fill/w_440,h_330,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/3a4048_e1039f650023439b80dfb68c5e80ba11~mv2_d_3264_2448_s_4_2.jpg", "https://static.wixstatic.com/media/3a4048_f6f0f6e40ee54408981c46ed14240ef7~mv2_d_3264_2448_s_4_2.jpg/v1/fill/w_440,h_330,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/3a4048_f6f0f6e40ee54408981c46ed14240ef7~mv2_d_3264_2448_s_4_2.jpg"],
    description:"Incensario con cadena chico.",
    price:80,
    category:"accesorios",
    quanty: 1,
    stock:5
  },

  {
    name:"Incensario Con Cadena MEDIANO",
    photo:["https://static.wixstatic.com/media/3a4048_10ad60abaea2485f874b168f01962dbc~mv2_d_3264_2448_s_4_2.jpg/v1/fill/w_440,h_330,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/3a4048_10ad60abaea2485f874b168f01962dbc~mv2_d_3264_2448_s_4_2.jpg","https://static.wixstatic.com/media/3a4048_9d7aa27cfd044b239ecfa7551ddb1720~mv2_d_3264_2448_s_4_2.jpg/v1/fill/w_440,h_330,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/3a4048_9d7aa27cfd044b239ecfa7551ddb1720~mv2_d_3264_2448_s_4_2.jpg","https://static.wixstatic.com/media/3a4048_1e9af76eb9a44908a29ceebed4c5ecdd~mv2_d_3264_2448_s_4_2.jpg/v1/fill/w_440,h_330,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/3a4048_1e9af76eb9a44908a29ceebed4c5ecdd~mv2_d_3264_2448_s_4_2.jpg","https://static.wixstatic.com/media/3a4048_f6f0f6e40ee54408981c46ed14240ef7~mv2_d_3264_2448_s_4_2.jpg/v1/fill/w_440,h_330,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/3a4048_f6f0f6e40ee54408981c46ed14240ef7~mv2_d_3264_2448_s_4_2.jpg"],
    description:"Incensario con cadena mediano.",
    price:80,
    category:"accesorios",
    quanty: 1,
    stock:5
  },

  {
    name:"Incensario Con Cadena GRANDE",
    photo:["https://static.wixstatic.com/media/3a4048_fb9a7a7f3c8040d584ba0fab2cf40928~mv2_d_3264_2448_s_4_2.jpg/v1/fill/w_440,h_330,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/3a4048_fb9a7a7f3c8040d584ba0fab2cf40928~mv2_d_3264_2448_s_4_2.jpg","https://static.wixstatic.com/media/3a4048_835242d5b0e54c85976021c940d9fd5e~mv2_d_3264_2448_s_4_2.jpg/v1/fill/w_440,h_330,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/3a4048_835242d5b0e54c85976021c940d9fd5e~mv2_d_3264_2448_s_4_2.jpg","https://static.wixstatic.com/media/3a4048_f6f0f6e40ee54408981c46ed14240ef7~mv2_d_3264_2448_s_4_2.jpg/v1/fill/w_440,h_330,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/3a4048_f6f0f6e40ee54408981c46ed14240ef7~mv2_d_3264_2448_s_4_2.jpg"],
    description:"Incensario con cadena grande.",
    price:80,
    category:"accesorios",
    quanty: 1,
    stock:5
  },

  {
    name:" Sahumador Con Manija Chapa",
    photo:["https://static.wixstatic.com/media/3a4048_91a31d75321442c18678d514d1d91478~mv2_d_3264_2448_s_4_2.jpg/v1/fill/w_440,h_330,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/3a4048_91a31d75321442c18678d514d1d91478~mv2_d_3264_2448_s_4_2.jpg", "https://static.wixstatic.com/media/3a4048_37876e6504a743048e586e1a9f6959c7~mv2_d_3264_2448_s_4_2.jpg/v1/fill/w_440,h_330,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/3a4048_37876e6504a743048e586e1a9f6959c7~mv2_d_3264_2448_s_4_2.jpg"],
    description:"Sahumador de manija de chapa.",
    price:80,
    category:"accesorios",
    quanty: 1,
    stock:5
  },
  {
    name:" Sahumador Con Cadena Esmaltado",
    photo:["https://static.wixstatic.com/media/3a4048_362891f465b24f419ae5129cc21d9be1~mv2_d_3264_2448_s_4_2.jpg/v1/fill/w_440,h_330,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/3a4048_362891f465b24f419ae5129cc21d9be1~mv2_d_3264_2448_s_4_2.jpg", "https://static.wixstatic.com/media/3a4048_2fd03e7c9d154b739042aac9bd95b303~mv2_d_3264_2448_s_4_2.jpg/v1/fill/w_440,h_330,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/3a4048_2fd03e7c9d154b739042aac9bd95b303~mv2_d_3264_2448_s_4_2.jpg", "https://static.wixstatic.com/media/3a4048_b9a1914c93cb462d8933c589f1d109d9~mv2_d_3264_2448_s_4_2.jpg/v1/fill/w_440,h_330,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/3a4048_b9a1914c93cb462d8933c589f1d109d9~mv2_d_3264_2448_s_4_2.jpg", "https://static.wixstatic.com/media/3a4048_1ae37f5c01f94f30aa7aeb3e9f72f1ea~mv2_d_3264_2448_s_4_2.jpg/v1/fill/w_440,h_330,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/3a4048_1ae37f5c01f94f30aa7aeb3e9f72f1ea~mv2_d_3264_2448_s_4_2.jpg"],
    description:"Sahumador con cadena esmaltado.",
    price:80,
    category:"accesorios",
    quanty: 1,
    stock:5
  },

  {
    name:" Sahumador Mango Largo",
    photo:["https://static.wixstatic.com/media/3a4048_7a75f0cac8c34527a9c0ab3507be1657~mv2_d_3264_2448_s_4_2.jpg/v1/fill/w_440,h_330,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/3a4048_7a75f0cac8c34527a9c0ab3507be1657~mv2_d_3264_2448_s_4_2.jpg", "https://static.wixstatic.com/media/3a4048_0b45852ccad345f49f2d878f6b438943~mv2_d_3000_2250_s_2.jpg/v1/fill/w_440,h_330,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/3a4048_0b45852ccad345f49f2d878f6b438943~mv2_d_3000_2250_s_2.jpg"],
    description:"Sahumador con mango largo color negro.",
    price:80,
    category:"accesorios",
    quanty: 1,
    stock:5
  },

      ////////////////////////////////////////AROMATIZANTES
  {
    name:" Horno Rustico Barril Gordito",
    photo:["https://static.wixstatic.com/media/3a4048_35e83a0362244a1b90bb9a76b0acc789~mv2_d_3264_2448_s_4_2.jpg/v1/fill/w_490,h_368,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/3a4048_35e83a0362244a1b90bb9a76b0acc789~mv2_d_3264_2448_s_4_2.jpg", "https://static.wixstatic.com/media/3a4048_e52cd339147a44e99cd5e617b8e45e64~mv2_d_3264_2448_s_4_2.jpg/v1/fill/w_490,h_368,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/3a4048_e52cd339147a44e99cd5e617b8e45e64~mv2_d_3264_2448_s_4_2.jpg"],
    description:"Hornito a vela.",
    price:80,
    category:"aromatizantes",
    quanty: 1,
    stock:5
  },

  {
    name:"Repuesto Difusores",
    photo:["https://static.wixstatic.com/media/3a4048_de7810017c5745f8af8446d90f600745~mv2.png/v1/fill/w_490,h_490,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/3a4048_de7810017c5745f8af8446d90f600745~mv2.png"],
    description:"Repuesto difusores ambientales.",
    price:80,
    category:"aromatizantes",
    quanty: 1,
    stock:5
  },
  {
    name:"Esencias En Cajita",
    photo:["https://static.wixstatic.com/media/3a4048_961cb7764db3436183c823e1f60282dc~mv2_d_3264_2448_s_4_2.jpg/v1/fill/w_490,h_368,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/3a4048_961cb7764db3436183c823e1f60282dc~mv2_d_3264_2448_s_4_2.jpg"],
    description:"Esencias en cajita.",
    price:80,
    category:"aromatizantes",
    quanty: 1,
    stock:5
  },
  {
    name:"Difusor Con Base Madera Deco",
    photo:["https://static.wixstatic.com/media/3a4048_97cc42f8d0114c8490c22f069792d542~mv2_d_3264_2448_s_4_2.jpg/v1/fill/w_490,h_368,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/3a4048_97cc42f8d0114c8490c22f069792d542~mv2_d_3264_2448_s_4_2.jpg"],
    description:"Difusor con base madera decorativo.",
    price:80,
    category:"aromatizantes",
    quanty: 1,
    stock:5
  },
  {
    name:"Difusor Respuesto Esencia Bambu",
    photo:["https://static.wixstatic.com/media/3a4048_6ce32c2189dc4bb0a4f803fd6f4bacac~mv2_d_3264_2448_s_4_2.jpg/v1/fill/w_490,h_368,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/3a4048_6ce32c2189dc4bb0a4f803fd6f4bacac~mv2_d_3264_2448_s_4_2.jpg"],
    description:"Difusor respuesto esencia Bambu.",
    price:80,
    category:"aromatizantes",
    quanty: 1,
    stock:5
  },
  {
    name:"Difusor Redondo Led Electrico",
    photo:["https://static.wixstatic.com/media/3a4048_920469a752c247a5932ad83b0e273bab~mv2.jpg/v1/fill/w_490,h_368,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/3a4048_920469a752c247a5932ad83b0e273bab~mv2.jpg"],
    description:"Difusor redondo led.",
    price:80,
    category:"aromatizantes",
    quanty: 1,
    stock:5
  },
  {
    name:"Difusor Redondo Led Electrico Con Punta",
    photo:["https://static.wixstatic.com/media/3a4048_f9ef05c524a64f40bda20e9b10ce7853~mv2.jpg/v1/fill/w_490,h_398,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/3a4048_f9ef05c524a64f40bda20e9b10ce7853~mv2.jpg"],
    description:"Difusor redondo con pubta y led.",
    price:80,
    category:"aromatizantes",
    quanty: 1,
    stock:5
  },
  {
    name:"Difusor Redondo Alto Con Led Electrico",
    photo:["https://static.wixstatic.com/media/3a4048_3aa5df02a4014db78e8c4608075f3122~mv2.jpg/v1/fill/w_490,h_368,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/3a4048_3aa5df02a4014db78e8c4608075f3122~mv2.jpg"],
    description:"Difusor redondo alto con led.",
    price:80,
    category:"aromatizantes",
    quanty: 1,
    stock:5
  },
  {
    name:"Esencias De Horno",
    photo:["https://static.wixstatic.com/media/3a4048_2b1b64f5b8334aa6b4bf00d1aee4ba13~mv2.jpg/v1/fill/w_490,h_368,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/3a4048_2b1b64f5b8334aa6b4bf00d1aee4ba13~mv2.jpg"],
    description:"Esencias de horno.",
    price:80,
    category:"aromatizantes",
    quanty: 1,
    stock:5
  },
{
  name:"Cuadrado Vitrales",
  photo:["https://static.wixstatic.com/media/3a4048_dd6416e0b7d44046b5b7575425ae571f~mv2.jpg/v1/fill/w_490,h_368,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/3a4048_dd6416e0b7d44046b5b7575425ae571f~mv2.jpg"],
  description:"Esencias de horno.",
  price:80,
  category:"aromatizantes",
  quanty: 1,
  stock:5
},
{
  name:"Universo Rústico Eléctrico",
  photo:["https://static.wixstatic.com/media/3a4048_61bac37be78447459f7588bb7fa5e539~mv2.jpg/v1/fill/w_490,h_368,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/3a4048_61bac37be78447459f7588bb7fa5e539~mv2.jpg", "https://static.wixstatic.com/media/3a4048_2609dc506dcb4a0a955e588a5f300fa4~mv2.jpg/v1/fill/w_279,h_372,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/3a4048_2609dc506dcb4a0a955e588a5f300fa4~mv2.jpg"],
  description:"Hornito electrico .",
  price:80,
  category:"aromatizantes",
  quanty: 1,
  stock:5
},

{
  name:"Difusor Con Varillas De Bambú",
  photo:["https://static.wixstatic.com/media/3a4048_38d7b255ddf340a3b6de89bc5cd7523c~mv2.jpg/v1/fill/w_490,h_368,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/3a4048_38d7b255ddf340a3b6de89bc5cd7523c~mv2.jpg"],
  description:"Difusor aromatico.",
  price:80,
  category:"aromatizantes",
  quanty: 1,
  stock:5
},

{
  name:"Jarrón Eléctrico Decoupage",
  photo:["https://static.wixstatic.com/media/3a4048_4830d3e986af427b9e55c22d30859546~mv2.jpg/v1/fill/w_490,h_368,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/3a4048_4830d3e986af427b9e55c22d30859546~mv2.jpg", "https://static.wixstatic.com/media/3a4048_5da03bcc23414ab58d6dea6a27c40680~mv2.jpg/v1/fill/w_303,h_372,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/3a4048_5da03bcc23414ab58d6dea6a27c40680~mv2.jpg"],
  description:"Difusor aromatico.",
  price:80,
  category:"aromatizantes",
  quanty: 1,
  stock:5
},
{
  name:"Esencias Para Horno / Humificador",
  photo:["https://static.wixstatic.com/media/3a4048_137c75213b4241ffb1f258dda1b05a6f~mv2.jpg/v1/fill/w_490,h_368,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/3a4048_137c75213b4241ffb1f258dda1b05a6f~mv2.jpg"],
  description:"Esencias de horno / humificador.",
  price:80,
  category:"aromatizantes",
  quanty: 1,
  stock:5
},
{
  name:" Aromatizador Textil - Corona Bahia",
  photo:["https://static.wixstatic.com/media/3a4048_039e1fd9960a4262b18e3ae8e7d67ce7~mv2_d_3264_2448_s_4_2.jpg/v1/fill/w_490,h_368,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/3a4048_039e1fd9960a4262b18e3ae8e7d67ce7~mv2_d_3264_2448_s_4_2.jpg"],
  description:"Aromatizador textil.",
  price:80,
  category:"aromatizantes",
  quanty: 1,
  stock:5
},
]
async function loadProducts() {
  for (const productData of products) {
    try {
      // Buscar el ObjectId de la categoría correspondiente
      const category = await Category.findOne({ name: productData.category });

      if (category) {
        // Asignar el ObjectId de la categoría al producto
        productData.category = category._id;

        // Crear un nuevo producto y guardarlo en la base de datos
        const product = new Product(productData);
        await product.save();
        console.log(`Producto ${product.name} guardado en la base de datos`);
      } else {
        console.log(`La categoría '${productData.category}' no se encontró en la base de datos.`);
      }
    } catch (error) {
      console.log(`Error al intentar guardar el producto ${productData.name}: ${error}`);
    }
  }
}

// Llama a la función para cargar los productos
loadProducts();