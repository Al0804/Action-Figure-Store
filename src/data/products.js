// ===========================================
// DATA PRODUK ACTION FIGURE
// ===========================================


import { akarenger, antman, aquaman, batman, bouken, buster, captainmarvel, cyborg, cyclops, deadpool, decade, deka, doctor, double, drive, edward, eren, exaid, flash, gaim, gavv, goku, greenlantern, harley, hulk, ichigo, ironman, joker, kyoryu, light, luffy, magi, mjolnir, momotaro, naruto, newdeno, nightcrawler, onisister, ooo, phoenix, redgokaiger, robin, saitama, shield, shinken, spiderman, storm, superman, tanjiro, vegeta, widow, wizard, wolverine, wonderwoman, zenkaiger, zeroone } from './imageImports';


export const actionFigureData = {
  marvel: [
    { id: 'marvel-1', name: 'Iron Man Mark 85', price: 850000, image: ironman, category: 'Marvel', rating: 5, stock: 15, description: 'Highly detailed Iron Man figure with LED features' },
    { id: 'marvel-2', name: 'Captain America Shield', price: 650000, image: shield, category: 'Marvel', rating: 4.8, stock: 20, description: 'Premium Captain America action figure with shield' },
    { id: 'marvel-3', name: 'Spider-Man Web Slinger', price: 750000, image: spiderman, category: 'Marvel', rating: 4.9, stock: 12, description: 'Amazing Spider-Man with web accessories' },
    { id: 'marvel-4', name: 'Thor Mjolnir', price: 900000, image: mjolnir, category: 'Marvel', rating: 5, stock: 8, description: 'God of Thunder Mjolnir hammer' },
    { id: 'marvel-5', name: 'Hulk Smash', price: 800000, image: hulk, category: 'Marvel', rating: 4.7, stock: 10, description: 'Incredible Hulk action figure' },
    { id: 'marvel-6', name: 'Black Widow', price: 720000, image: widow, category: 'Marvel', rating: 4.6, stock: 18, description: 'Black Widow with stealth accessories' },
    { id: 'marvel-7', name: 'Doctor Strange', price: 820000, image: doctor, category: 'Marvel', rating: 4.8, stock: 14, description: 'Doctor Strange with agamoto eye' },
    { id: 'marvel-8', name: 'Ant-Man', price: 680000, image: antman, category: 'Marvel', rating: 4.5, stock: 22, description: 'Ant-Man with tiny version' },
    { id: 'marvel-9', name: 'Captain Marvel', price: 880000, image: captainmarvel, category: 'Marvel', rating: 4.9, stock: 11, description: 'Captain Marvel in endgame costume' },
    { id: 'marvel-10', name: 'Deadpool Maximum Effort', price: 750000, image: deadpool, category: 'Marvel', rating: 4.7, stock: 16, description: 'Deadpool with maximum effort pose' },
    // Tambahkan 40 produk Marvel lainnya dengan pola yang sama...
    { id: 'marvel-11', name: 'Wolverine Adamantium', price: 920000, image: wolverine, category: 'Marvel', rating: 4.9, stock: 9, description: 'Wolverine with adamantium claws' },
    { id: 'marvel-12', name: 'Storm Weather Goddess', price: 780000, image: storm, category: 'Marvel', rating: 4.6, stock: 13, description: 'Storm with white costume' },
    { id: 'marvel-13', name: 'Cyclops Optic Blast', price: 690000, image: cyclops, category: 'Marvel', rating: 4.4, stock: 19, description: 'Cyclops mini figure' },
    { id: 'marvel-14', name: 'Jean Grey Phoenix', price: 950000, image: phoenix, category: 'Marvel', rating: 5, stock: 7, description: 'Jean Grey as Phoenix' },
    { id: 'marvel-15', name: 'Nightcrawler', price: 720000, image: nightcrawler, category: 'Marvel', rating: 4.5, stock: 15, description: 'Nightcrawler with sword' },
    // ... Continue pattern untuk total 50 produk Marvel
  ],
  
  dc: [
    { id: 'dc-1', name: 'Batman Dark Knight', price: 950000, image: batman, category: 'DC', rating: 5, stock: 18, description: 'The Dark Knight version' },
    { id: 'dc-2', name: 'Superman Man of Steel', price: 880000, image: superman, category: 'DC', rating: 4.9, stock: 15, description: 'Last Son of Krypton action figure' },
    { id: 'dc-3', name: 'Wonder Woman Warrior', price: 820000, image: wonderwoman, category: 'DC', rating: 4.8, stock: 22, description: 'Amazon Princess with shield and sword' },
    { id: 'dc-4', name: 'The Flash Speed Force', price: 780000, image: flash, category: 'DC', rating: 4.7, stock: 14, description: 'Fastest man alive with lightning effects' },
    { id: 'dc-5', name: 'Green Lantern Corps', price: 860000, image: greenlantern, category: 'DC', rating: 4.6, stock: 11, description: 'Green Lantern with power ring' },
    { id: 'dc-6', name: 'Aquaman Ocean Master', price: 790000, image: aquaman, category: 'DC', rating: 4.5, stock: 17, description: 'Aquaman with trident' },
    { id: 'dc-7', name: 'Cyborg Tech Armor', price: 850000, image: cyborg, category: 'DC', rating: 4.7, stock: 13, description: 'Cyborg with tech armor' },
    { id: 'dc-8', name: 'Joker Chaos Agent', price: 720000, image: joker, category: 'DC', rating: 4.8, stock: 20, description: 'The Joker with chaos accessories' },
    { id: 'dc-9', name: 'Harley Quinn Mad Love', price: 680000, image: harley, category: 'DC', rating: 4.6, stock: 24, description: 'Harley Quinn with baseball bat' },
    { id: 'dc-10', name: 'Robin Teen Titans', price: 650000, image: robin, category: 'DC', rating: 4.4, stock: 26, description: 'Robin mini version' },
    // ... Continue pattern untuk total 50 produk DC
  ],
  
  anime: [
    { id: 'anime-1', name: 'Goku Ultra Instinct', price: 1200000, image: goku, category: 'Anime', rating: 5, stock: 25, description: 'Dragon Ball Z Goku in Ultra Instinct form' },
    { id: 'anime-2', name: 'Naruto Uzumaki', price: 950000, image: naruto, category: 'Anime', rating: 4.9, stock: 30, description: 'Naruto mode rikudou' },
    { id: 'anime-3', name: 'Luffy Gear 5', price: 1100000, image: luffy, category: 'Anime', rating: 4.8, stock: 20, description: 'One Piece Monkey D. Luffy Gear 5' },
    { id: 'anime-4', name: 'Tanjiro Demon Slayer', price: 850000, image: tanjiro, category: 'Anime', rating: 4.9, stock: 28, description: 'Demon Slayer Tanjiro with Nichirin sword' },
    { id: 'anime-5', name: 'Saitama One Punch', price: 750000, image: saitama, category: 'Anime', rating: 4.7, stock: 35, description: 'One Punch Man Saitama figure' },
    { id: 'anime-6', name: 'Ichigo Bankai', price: 980000, image: ichigo, category: 'Anime', rating: 4.8, stock: 22, description: 'Bleach Ichigo in Bankai form' },
    { id: 'anime-7', name: 'Edward Elric Alchemist', price: 820000, image: edward, category: 'Anime', rating: 4.6, stock: 18, description: 'Fullmetal Alchemist Edward Elric' },
    { id: 'anime-8', name: 'Light Yagami Death Note', price: 690000, image: light, category: 'Anime', rating: 4.5, stock: 32, description: 'Death Note Light with Death Note' },
    { id: 'anime-9', name: 'Eren Titan Form', price: 1050000, image: eren, category: 'Anime', rating: 4.9, stock: 15, description: 'Attack on Titan Eren in Titan form' },
    { id: 'anime-10', name: 'Vegeta Prince Saiyan', price: 920000, image: vegeta, category: 'Anime', rating: 4.7, stock: 24, description: 'Dragon Ball Z Prince Vegeta' },
    // ... Continue pattern untuk total 50 produk Anime
  ],
  
  kamenRider: [
    { id: 'kr-1', name: 'Kamen Rider Zero-One', price: 680000, image: zeroone, category: 'Kamen Rider', rating: 4.8, stock: 16, description: 'Rising Hopper form with accessories' },
    { id: 'kr-2', name: 'Kamen Rider Gavv', price: 720000, image: gavv, category: 'Kamen Rider', rating: 4.7, stock: 18, description: 'Popping Gummy form with Gavv Driver' },
    { id: 'kr-3', name: 'Kamen Rider Ex-Aid', price: 650000, image: exaid, category: 'Kamen Rider', rating: 4.6, stock: 20, description: 'Action Gamer Level 2 form' },
    { id: 'kr-4', name: 'Kamen Rider Decade', price: 800000, image: decade, category: 'Kamen Rider', rating: 4.9, stock: 12, description: 'Destroyer of Worlds with cards' },
    { id: 'kr-5', name: 'Kamen Rider W', price: 750000, image: double, category: 'Kamen Rider', rating: 4.8, stock: 14, description: 'CycloneJoker form double rider' },
    { id: 'kr-6', name: 'Kamen Rider OOO', price: 710000, image: ooo, category: 'Kamen Rider', rating: 4.5, stock: 19, description: 'TaToBa Combo with Core Medals' },
    { id: 'kr-7', name: 'Kamen Rider New Den-o', price: 680000, image: newdeno, category: 'Kamen Rider', rating: 4.4, stock: 21, description: 'Base States' },
    { id: 'kr-8', name: 'Kamen Rider Wizard', price: 730000, image: wizard, category: 'Kamen Rider', rating: 4.6, stock: 17, description: 'Flame Style with WizarDriver' },
    { id: 'kr-9', name: 'Kamen Rider Gaim', price: 760000, image: gaim, category: 'Kamen Rider', rating: 4.7, stock: 15, description: 'Orange Arms with Musou Saber' },
    { id: 'kr-10', name: 'Kamen Rider Drive', price: 740000, image: drive, category: 'Kamen Rider', rating: 4.5, stock: 18, description: 'Type Speed with Door Gun' },
    // ... Continue pattern untuk total 50 produk Kamen Rider
  ],
  
  superSentai: [
    { id: 'ss-1', name: 'Red Ranger Gokaiger', price: 580000, image: redgokaiger, category: 'Super Sentai', rating: 4.7, stock: 22, description: 'Gokai Red with sword and gun' },
    { id: 'ss-2', name: 'Shinken Red Samurai', price: 620000, image: shinken, category: 'Super Sentai', rating: 4.6, stock: 19, description: 'Shinkenger Red with Super Form' },
    { id: 'ss-3', name: 'Kyoryu Red Brave', price: 650000, image: kyoryu, category: 'Super Sentai', rating: 4.8, stock: 17, description: 'Kyoryuger Red with sword' },
    { id: 'ss-4', name: 'Go-Busters ', price: 560000, image: buster, category: 'Super Sentai', rating: 4.5, stock: 24, description: 'Red Buster' },
    { id: 'ss-5', name: 'Donbrothers', price: 590000, image: momotaro, category: 'Super Sentai', rating: 4.7, stock: 21, description: 'Momotaro with gun' },
    { id: 'ss-6', name: 'Magi Red Magic', price: 600000, image: magi, category: 'Super Sentai', rating: 4.4, stock: 20, description: 'Magiranger Red with MagiStick' },
    { id: 'ss-7', name: 'Deka Red Police', price: 570000, image: deka, category: 'Super Sentai', rating: 4.6, stock: 23, description: 'Dekaranger Red with D-Magnum' },
    { id: 'ss-8', name: 'Zenkaiger', price: 610000, image: zenkaiger, category: 'Super Sentai', rating: 4.5, stock: 18, description: 'Zenkaiger' },
    { id: 'ss-9', name: 'Donbrothers', price: 580000, image: onisister, category: 'Super Sentai', rating: 4.3, stock: 25, description: 'Oni Sister' },
    { id: 'ss-10', name: 'Go Ranger Akaranger', price: 590000, image: akarenger, category: 'Super Sentai', rating: 4.7, stock: 22, description: 'Red Akaranger' },
    // ... Continue pattern untuk total 50 produk Super Sentai
  ]
};

// Fungsi untuk mendapatkan semua produk
export const getAllProducts = () => {
  return [
    ...actionFigureData.marvel,
    ...actionFigureData.dc,
    ...actionFigureData.anime,
    ...actionFigureData.kamenRider,
    ...actionFigureData.superSentai
  ];
};

// Fungsi untuk mendapatkan produk berdasarkan kategori
export const getProductsByCategory = (category) => {
  if (category === 'all') return getAllProducts();
  
  const categoryMap = {
    'marvel': actionFigureData.marvel,
    'dc': actionFigureData.dc,
    'anime': actionFigureData.anime,
    'kamen rider': actionFigureData.kamenRider,
    'super sentai': actionFigureData.superSentai
  };
  
  return categoryMap[category.toLowerCase()] || [];
};

// Fungsi untuk mencari produk
export const searchProducts = (query, category = 'all') => {
  const products = getProductsByCategory(category);
  
  if (!query) return products;
  
  return products.filter(product =>
    product.name.toLowerCase().includes(query.toLowerCase()) ||
    product.category.toLowerCase().includes(query.toLowerCase()) ||
    product.description.toLowerCase().includes(query.toLowerCase())
  );
};