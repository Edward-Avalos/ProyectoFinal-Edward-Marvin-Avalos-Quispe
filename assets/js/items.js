const items = [];

items.push(gorras1 = new ShoopItems("Gorra Roja Navidenia", "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates atque omnis dolorum placeat nam facilis maiores ipsam excepturi minima rerum aliquam, iste temporibus recusandae, esse praesentium. Iusto cumque pariatur placeat?" , "gorras", 1, 7, "Gorra Roja Navidenia"));
items.push(gorras2 = new ShoopItems("Gorra Verde Navidenia", "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates atque omnis dolorum placeat nam facilis maiores ipsam excepturi minima rerum aliquam, iste temporibus recusandae, esse praesentium. Iusto cumque pariatur placeat?" , "gorras", 2, 6, "Gorra Verde Navidenia"));
items.push(gorras3 = new ShoopItems("Gorra Blanca Navidenia", "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates atque omnis dolorum placeat nam facilis maiores ipsam excepturi minima rerum aliquam, iste temporibus recusandae, esse praesentium. Iusto cumque pariatur placeat?" , "gorras", 3, 8, "Gorra Blanca Navidenia"));
items.push(medias1 = new ShoopItems("Medias Blancas Navidenias", "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates atque omnis dolorum placeat nam facilis maiores ipsam excepturi minima rerum aliquam, iste temporibus recusandae, esse praesentium. Iusto cumque pariatur placeat?" , "medias", 1, 20, "Medias Blancas Navidenias"));
items.push(medias2 = new ShoopItems("Medias Rojas Navidenias", "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates atque omnis dolorum placeat nam facilis maiores ipsam excepturi minima rerum aliquam, iste temporibus recusandae, esse praesentium. Iusto cumque pariatur placeat?" , "medias", 2, 17, "Medias Rojas Navidenias"));
items.push(medias3 = new ShoopItems("Medias Verdes Navidenias", "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates atque omnis dolorum placeat nam facilis maiores ipsam excepturi minima rerum aliquam, iste temporibus recusandae, esse praesentium. Iusto cumque pariatur placeat?" , "medias", 3, 23, "Medias Verdes Navidenias"));
items.push(polos1 = new ShoopItems("Polo verde de Rodolfo el Reno", "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates atque omnis dolorum placeat nam facilis maiores ipsam excepturi minima rerum aliquam, iste temporibus recusandae, esse praesentium. Iusto cumque pariatur placeat?" , "polos", 1, 15, "Polo verde de Rodolfo el Reno"));
items.push(polos2 = new ShoopItems("Polo verde de Papanoel", "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates atque omnis dolorum placeat nam facilis maiores ipsam excepturi minima rerum aliquam, iste temporibus recusandae, esse praesentium. Iusto cumque pariatur placeat?" , "polos", 2, 17, "Polo verde de Papanoel"));
items.push(polos3 = new ShoopItems("Polo verde de el Grinch", "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates atque omnis dolorum placeat nam facilis maiores ipsam excepturi minima rerum aliquam, iste temporibus recusandae, esse praesentium. Iusto cumque pariatur placeat?" , "polos", 3, 12, "Polo verde de el Grinch"));
items.push(regalos1 = new ShoopItems("Caja sorpresa de regalo para niño con decoracion de MonstersInc", "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates atque omnis dolorum placeat nam facilis maiores ipsam excepturi minima rerum aliquam, iste temporibus recusandae, esse praesentium. Iusto cumque pariatur placeat?" , "regalos", 1, 26, "Caja sorpresa de regalo para niño con decoracion de MonstersInc"));
items.push(regalos2 = new ShoopItems("Caja sorpresa de regalo para madre", "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates atque omnis dolorum placeat nam facilis maiores ipsam excepturi minima rerum aliquam, iste temporibus recusandae, esse praesentium. Iusto cumque pariatur placeat?" , "regalos", 2, 34, "Caja sorpresa de regalo para madre"));
items.push(regalos3 = new ShoopItems("Caja sorpresa de regalo para padre", "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates atque omnis dolorum placeat nam facilis maiores ipsam excepturi minima rerum aliquam, iste temporibus recusandae, esse praesentium. Iusto cumque pariatur placeat?" , "regalos", 3, 48, "Caja sorpresa de regalo para padre"));

// itero para crear los productos
for (const ShoopItems of items){
    ShoopItems.createItem();
  };

// desestructuracion de array de productos
const [p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12, p13, p14, p15, p16, p17, p18, p19, p20, p21] = items;



