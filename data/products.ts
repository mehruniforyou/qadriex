export interface Product {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  story: string;
  function: string;
  pricePaise: number;
  compareAtPaise?: number;
  printMinutes: number;
  weightGrams: number;
  dimensionsMm: {
    d: number;
    h: number;
    w: number;
  };
  edition: string | null;
  status: string;
  category: string;
  ageGroup: string;
  themes: string[];
  colorways: string[];
  imageGradient: string[];
  imageUrl: string;
  localImageUrl: string;
  gallery: string[];
  localGallery: string[];
  rating: number;
  reviews: number;
  createdAt: string;
  updatedAt: string;
  freeShipping: boolean;
  isPreorder: boolean;
  preorderShipBy: string | null;
  preorderDaysMin: number | null;
  preorderDaysMax: number | null;
  customFields: any[];
  seoTitle: string | null;
  seoDescription: string | null;
  faq: any | null;
  categoryType: 'frames' | 'shop';
}

export const PRODUCTS: Product[] = [
  {
    "id": "p_tlzfmirmf",
    "slug": "grid-27",
    "name": "F1 Grid 2027",
    "tagline": "Every Circuit. One Frame.",
    "story": "From Bahrain to Abu Dhabi, Grid 27 brings the entire F1 2027 calendar together in one statement piece.\nEvery circuit. Every destination. Every race weekend — mapped out for the fans who know that the countdown to lights out never really stops.",
    "function": "Premium 3D-printed F1 2027 circuit calendar featuring individually raised circuit outlines, race locations and dates, finished with a bold F1-inspired layout. Designed as a collectible display piece for Formula 1 enthusiasts.",
    "pricePaise": 129900,
    "printMinutes": 200,
    "weightGrams": 120,
    "dimensionsMm": {
      "d": 8,
      "h": 230,
      "w": 230
    },
    "edition": null,
    "status": "in_stock",
    "category": "frames",
    "ageGroup": "adults-18+",
    "themes": [],
    "colorways": [
      "Black"
    ],
    "imageGradient": [
      "#1D1D1F",
      "#F5F5F7"
    ],
    "imageUrl": "https://h6smb4mhncfdx1rf.public.blob.vercel-storage.com/products/ChatGPT-Image-Sep-26--2026-at-10_48_58-PM-JezCUNr6EKuhuQUMqANFLa0311j5IH.png",
    "gallery": [
      "https://h6smb4mhncfdx1rf.public.blob.vercel-storage.com/products/IMG_7798-32OxLtHw9E3uVWPScabkABy6RzrtWx.jpg",
      "https://h6smb4mhncfdx1rf.public.blob.vercel-storage.com/products/ChatGPT-Image-Sep-26--2026-at-10_56_22-PM-nLYDKuoL4VooCE2oywuKIvGXrUBe3W.png",
      "https://h6smb4mhncfdx1rf.public.blob.vercel-storage.com/products/ChatGPT-Image-Sep-26--2026-at-11_04_26-PM-p0PrlOcdy6r6FU7xY74FDPAfCb9tlu.png",
      "https://h6smb4mhncfdx1rf.public.blob.vercel-storage.com/products/ChatGPT-Image-Sep-26--2026-at-11_06_48-PM-1v7KCb7K3KDhCOl52izgd2eREiCqBk.png"
    ],
    "rating": 5,
    "reviews": 0,
    "createdAt": "2026-09-26",
    "updatedAt": "2026-09-26",
    "compareAtPaise": 199900,
    "freeShipping": true,
    "isPreorder": true,
    "preorderShipBy": null,
    "preorderDaysMin": 4,
    "preorderDaysMax": 6,
    "customFields": [],
    "seoTitle": null,
    "seoDescription": null,
    "faq": null,
    "categoryType": "frames",
    "localImageUrl": "/images/ChatGPT-Image-Sep-26--2026-at-10_48_58-PM-JezCUNr6EKuhuQUMqANFLa0311j5IH.png",
    "localGallery": [
      "/images/IMG_7798-32OxLtHw9E3uVWPScabkABy6RzrtWx.jpg",
      "/images/ChatGPT-Image-Sep-26--2026-at-10_56_22-PM-nLYDKuoL4VooCE2oywuKIvGXrUBe3W.png",
      "/images/ChatGPT-Image-Sep-26--2026-at-11_04_26-PM-p0PrlOcdy6r6FU7xY74FDPAfCb9tlu.png",
      "/images/ChatGPT-Image-Sep-26--2026-at-11_06_48-PM-1v7KCb7K3KDhCOl52izgd2eREiCqBk.png"
    ]
  },
  {
    "id": "p_tl3uvdgex",
    "slug": "king-18",
    "name": "King 18",
    "tagline": "The Number That Became an Emotion.",
    "story": "Some numbers are worn. Some numbers become legends.\n\nKing 18 captures the aura of Indian cricket’s most iconic No. 18 — the intensity, the attitude, the hunger and the moments that made millions of fans believe.\n\nA statement piece for the fans who don't just watch cricket — they live it.",
    "function": "Premium luxury 3D cricket frame featuring Ultra HD Metal Print artwork, a physically extruded 3D cricket ball, and a deep black shadowbox frame for an ultra-realistic, collectible finish.",
    "pricePaise": 249900,
    "printMinutes": 120,
    "weightGrams": 200,
    "dimensionsMm": {
      "d": 24,
      "h": 330,
      "w": 240
    },
    "edition": null,
    "status": "made_to_order",
    "category": "frames",
    "ageGroup": "adults-18+",
    "themes": [],
    "colorways": [],
    "imageGradient": [
      "#1D1D1F",
      "#F5F5F7"
    ],
    "imageUrl": "https://h6smb4mhncfdx1rf.public.blob.vercel-storage.com/products/ChatGPT-Image-Sep-9--2026-at-09_09_28-PM-DzT5js4Yz4oPxg6F8eSyhe5XNSv737.png",
    "gallery": [
      "https://h6smb4mhncfdx1rf.public.blob.vercel-storage.com/products/ChatGPT-Image-Sep-9--2026-at-09_44_22-PM-uYi0w6a1bSaNJfffJIT81XP2DMBvfA.png",
      "https://h6smb4mhncfdx1rf.public.blob.vercel-storage.com/products/ChatGPT-Image-Sep-9--2026-at-09_10_23-PM-HjcAvQlBAoDHxnAG6yt9zpFuPpntEW.png"
    ],
    "rating": 5,
    "reviews": 0,
    "createdAt": "2026-09-09",
    "updatedAt": "2026-09-26",
    "compareAtPaise": 299900,
    "freeShipping": true,
    "isPreorder": false,
    "preorderShipBy": null,
    "preorderDaysMin": null,
    "preorderDaysMax": null,
    "customFields": [],
    "seoTitle": null,
    "seoDescription": null,
    "faq": null,
    "categoryType": "frames",
    "localImageUrl": "/images/ChatGPT-Image-Sep-9--2026-at-09_09_28-PM-DzT5js4Yz4oPxg6F8eSyhe5XNSv737.png",
    "localGallery": [
      "/images/ChatGPT-Image-Sep-9--2026-at-09_44_22-PM-uYi0w6a1bSaNJfffJIT81XP2DMBvfA.png",
      "/images/ChatGPT-Image-Sep-9--2026-at-09_10_23-PM-HjcAvQlBAoDHxnAG6yt9zpFuPpntEW.png"
    ]
  },
  {
    "id": "p_tl000or1h",
    "slug": "malibu-after-dark",
    "name": "Malibu After Dark",
    "tagline": "The Neon Side.",
    "story": "Neon skies. Wet streets. Fast cars. Late nights. Malibu After Dark captures the electric nightlife energy of the iconic Malibu Club — the kind of place where every night feels like the beginning of another story.\n\nA statement piece for gamers who remember the thrill of cruising through neon-lit streets and stepping into a world where the rules were optional and the nights were legendary.",
    "function": "A premium gaming wall frame featuring Ultra HD Metal Print with a physical 3D extruded GTA logo with a cinematic neon finish and a luxury deep black frame. Designed to bring the unmistakable Malibu Club atmosphere to gaming rooms, bedrooms, desks and entertainment spaces.",
    "pricePaise": 249900,
    "printMinutes": 140,
    "weightGrams": 200,
    "dimensionsMm": {
      "d": 10,
      "h": 330,
      "w": 240
    },
    "edition": null,
    "status": "made_to_order",
    "category": "frames",
    "ageGroup": "adults-18+",
    "themes": [],
    "colorways": [],
    "imageGradient": [
      "#1D1D1F",
      "#F5F5F7"
    ],
    "imageUrl": "https://h6smb4mhncfdx1rf.public.blob.vercel-storage.com/products/ChatGPT-Image-Sep-7--2026-at-07_46_03-PM-GYCsWxnxf8yLOzCIjJpciVRRp5Q3jf.png",
    "gallery": [
      "https://h6smb4mhncfdx1rf.public.blob.vercel-storage.com/products/ChatGPT-Image-Sep-7--2026-at-07_53_25-PM-A16rUo16grtmFH5YA3E5lETjWb2R9B.png",
      "https://h6smb4mhncfdx1rf.public.blob.vercel-storage.com/products/ChatGPT-Image-Sep-7--2026-at-07_53_08-PM-quaKNVBlvwUBQPi3xcBJUhSFaWx0sD.png",
      "https://h6smb4mhncfdx1rf.public.blob.vercel-storage.com/products/ChatGPT-Image-Sep-26--2026-at-11_04_26-PM-XufgBpmOd7INKxdqNJm5ly1ynywX3s.png"
    ],
    "rating": 5,
    "reviews": 0,
    "createdAt": "2026-09-07",
    "updatedAt": "2026-09-26",
    "compareAtPaise": 299900,
    "freeShipping": true,
    "isPreorder": false,
    "preorderShipBy": null,
    "preorderDaysMin": null,
    "preorderDaysMax": null,
    "customFields": [],
    "seoTitle": null,
    "seoDescription": null,
    "faq": null,
    "categoryType": "frames",
    "localImageUrl": "/images/ChatGPT-Image-Sep-7--2026-at-07_46_03-PM-GYCsWxnxf8yLOzCIjJpciVRRp5Q3jf.png",
    "localGallery": [
      "/images/ChatGPT-Image-Sep-7--2026-at-07_53_25-PM-A16rUo16grtmFH5YA3E5lETjWb2R9B.png",
      "/images/ChatGPT-Image-Sep-7--2026-at-07_53_08-PM-quaKNVBlvwUBQPi3xcBJUhSFaWx0sD.png",
      "/images/ChatGPT-Image-Sep-26--2026-at-11_04_26-PM-XufgBpmOd7INKxdqNJm5ly1ynywX3s.png"
    ]
  },
  {
    "id": "p_tl00lmmsm",
    "slug": "gta-rush",
    "name": "GTA Rush",
    "tagline": "Live the Chaos.",
    "story": "Fast cars. Neon nights. Unforgettable characters. GTA Rush brings the attitude and chaos of the Grand Theft Auto universe to your wall in one bold, cinematic piece.\n\nCreated for gamers who grew up exploring every street, chasing every mission and making their own stories along the way. This isn't just game artwork — it's a piece of the gaming world you never really left behind.",
    "function": "A premium gaming wall frame featuring Ultra HD Metal Poster artwork with vibrant cinematic details and a luxury deep black frame. Designed to elevate gaming setups, bedrooms, offices and entertainment spaces.",
    "pricePaise": 249900,
    "printMinutes": 140,
    "weightGrams": 200,
    "dimensionsMm": {
      "d": 25,
      "h": 330,
      "w": 240
    },
    "edition": null,
    "status": "made_to_order",
    "category": "frames",
    "ageGroup": "adults-18+",
    "themes": [],
    "colorways": [],
    "imageGradient": [
      "#1D1D1F",
      "#F5F5F7"
    ],
    "imageUrl": "https://h6smb4mhncfdx1rf.public.blob.vercel-storage.com/products/ChatGPT-Image-Sep-7--2026-at-07_44_59-PM-AnLPfoNQmsDwljQjgQObXJijtstCtf.png",
    "gallery": [
      "https://h6smb4mhncfdx1rf.public.blob.vercel-storage.com/products/ChatGPT-Image-Sep-7--2026-at-07_53_31-PM-toMCbLMWCYPdlzQIApDSZBZZVHwwL0.png",
      "https://h6smb4mhncfdx1rf.public.blob.vercel-storage.com/products/ChatGPT-Image-Sep-7--2026-at-07_53_00-PM-BYS4B2Lh1ty8kdKoClN7UbA8NYxEgG.png"
    ],
    "rating": 5,
    "reviews": 0,
    "createdAt": "2026-09-07",
    "updatedAt": "2026-09-26",
    "compareAtPaise": 299900,
    "freeShipping": true,
    "isPreorder": false,
    "preorderShipBy": null,
    "preorderDaysMin": null,
    "preorderDaysMax": null,
    "customFields": [],
    "seoTitle": null,
    "seoDescription": null,
    "faq": null,
    "categoryType": "frames",
    "localImageUrl": "/images/ChatGPT-Image-Sep-7--2026-at-07_44_59-PM-AnLPfoNQmsDwljQjgQObXJijtstCtf.png",
    "localGallery": [
      "/images/ChatGPT-Image-Sep-7--2026-at-07_53_31-PM-toMCbLMWCYPdlzQIApDSZBZZVHwwL0.png",
      "/images/ChatGPT-Image-Sep-7--2026-at-07_53_00-PM-BYS4B2Lh1ty8kdKoClN7UbA8NYxEgG.png"
    ]
  },
  {
    "id": "p_tjz1lbmll",
    "slug": "the-bicycle-king",
    "name": "The Bicycle King",
    "tagline": "Defying Gravity. Defining Greatness.",
    "story": "Some moments belong in football history. This is one of them. A tribute to Ronaldo’s gravity-defying bicycle kick — captured in a cinematic golden frame for fans who remember exactly where they were when football witnessed something extraordinary. Designed for Indian football lovers who don't just watch the game — they live it.",
    "function": "Luxury collectible football wall frame featuring an Ultra HD Metal Print with a physical 3D extruded football element mounted onto the artwork for a striking depth effect. Crafted exclusively by Oruky for fans who want their football obsession to become part of their space.",
    "pricePaise": 249900,
    "printMinutes": 120,
    "weightGrams": 200,
    "dimensionsMm": {
      "d": 25,
      "h": 330,
      "w": 240
    },
    "edition": null,
    "status": "made_to_order",
    "category": "frames",
    "ageGroup": "all-ages",
    "themes": [],
    "colorways": [],
    "imageGradient": [
      "#1D1D1F",
      "#F5F5F7"
    ],
    "imageUrl": "https://h6smb4mhncfdx1rf.public.blob.vercel-storage.com/products/ChatGPT-Image-Aug-18--2026-at-08_29_51-PM-IjjwMMqsFi8TEnvM2NsCkhTLo2b17u.png",
    "gallery": [
      "https://h6smb4mhncfdx1rf.public.blob.vercel-storage.com/products/ChatGPT-Image-Aug-25--2026-at-07_06_01-PM-lwA1Hf2BfF3XqKq33VvjUHSCkkQIjJ.png",
      "https://h6smb4mhncfdx1rf.public.blob.vercel-storage.com/products/ChatGPT-Image-Aug-18--2026-at-07_28_09-PM-4V76rQarDG8iYKbfQi8QieLQF3PObT.png",
      "https://h6smb4mhncfdx1rf.public.blob.vercel-storage.com/products/ChatGPT-Image-Aug-25--2026-at-06_59_58-PM-cMKCk7sl86mEKl3d7JO8wAwhNOWHrS.png",
      "https://h6smb4mhncfdx1rf.public.blob.vercel-storage.com/products/ChatGPT-Image-Sep-26--2026-at-11_04_26-PM-rYDfXd01Cv6R6zvxPKfX8t2Vdg2npg.png"
    ],
    "rating": 5,
    "reviews": 0,
    "createdAt": "2026-08-18",
    "updatedAt": "2026-09-26",
    "compareAtPaise": 299900,
    "freeShipping": true,
    "isPreorder": false,
    "preorderShipBy": null,
    "preorderDaysMin": null,
    "preorderDaysMax": null,
    "customFields": [],
    "seoTitle": null,
    "seoDescription": null,
    "faq": null,
    "categoryType": "frames",
    "localImageUrl": "/images/ChatGPT-Image-Aug-18--2026-at-08_29_51-PM-IjjwMMqsFi8TEnvM2NsCkhTLo2b17u.png",
    "localGallery": [
      "/images/ChatGPT-Image-Aug-25--2026-at-07_06_01-PM-lwA1Hf2BfF3XqKq33VvjUHSCkkQIjJ.png",
      "/images/ChatGPT-Image-Aug-18--2026-at-07_28_09-PM-4V76rQarDG8iYKbfQi8QieLQF3PObT.png",
      "/images/ChatGPT-Image-Aug-25--2026-at-06_59_58-PM-cMKCk7sl86mEKl3d7JO8wAwhNOWHrS.png",
      "/images/ChatGPT-Image-Sep-26--2026-at-11_04_26-PM-rYDfXd01Cv6R6zvxPKfX8t2Vdg2npg.png"
    ]
  },
  {
    "id": "p_tjz0x53zq",
    "slug": "the-golden-bolt",
    "name": "The Golden Bolt",
    "tagline": "Built for Speed. Made for Greatness.",
    "story": "Few players can change the game in a heartbeat. The Golden Bolt captures the explosive presence of Kylian Mbappé — the acceleration, confidence and fearless energy that have made him one of football’s most electrifying stars.\n\nMore than a poster, this is a premium 3D football collectible. The artwork is produced as an Ultra HD Metal Print, paired with a physically extruded 3D football mounted onto the artwork, creating real depth and an ultra-realistic finish.",
    "function": "A luxury framed football collectible crafted for Mbappé fans and football enthusiasts. Featuring an Ultra HD Metal Print, physical 3D football element and premium deep-frame construction, it transforms an iconic football moment into a statement piece for your space.\n\nEXCLUSIVELY BY ORUKY\nYou don't just watch the moment.\n\nYou put it on your wall.",
    "pricePaise": 249900,
    "printMinutes": 120,
    "weightGrams": 200,
    "dimensionsMm": {
      "d": 25,
      "h": 297,
      "w": 210
    },
    "edition": null,
    "status": "made_to_order",
    "category": "frames",
    "ageGroup": "all-ages",
    "themes": [
      "The Golden Shots"
    ],
    "colorways": [],
    "imageGradient": [
      "#1D1D1F",
      "#F5F5F7"
    ],
    "imageUrl": "https://h6smb4mhncfdx1rf.public.blob.vercel-storage.com/products/ChatGPT-Image-Aug-18--2026-at-08_12_38-PM-oRqvw2Ch4wWmDFamgZSErFfdNK9GCq.png",
    "gallery": [
      "https://h6smb4mhncfdx1rf.public.blob.vercel-storage.com/products/ChatGPT-Image-Aug-25--2026-at-07_05_10-PM-d4Q9ipbXKF0n4FV7rGJERyBr5vOgzT.png",
      "https://h6smb4mhncfdx1rf.public.blob.vercel-storage.com/products/ChatGPT-Image-Aug-18--2026-at-07_28_28-PM-vWCYzdPuLKbUb9DI8S8ZHPhZAs88KE.png",
      "https://h6smb4mhncfdx1rf.public.blob.vercel-storage.com/products/ChatGPT-Image-Aug-25--2026-at-07_03_22-PM-iZUJoGSjAYOrdVvWY3OOdX2JtbWjtC.png"
    ],
    "rating": 5,
    "reviews": 0,
    "createdAt": "2026-08-18",
    "updatedAt": "2026-09-26",
    "compareAtPaise": 299900,
    "freeShipping": true,
    "isPreorder": false,
    "preorderShipBy": null,
    "preorderDaysMin": null,
    "preorderDaysMax": null,
    "customFields": [],
    "seoTitle": null,
    "seoDescription": null,
    "faq": null,
    "categoryType": "frames",
    "localImageUrl": "/images/ChatGPT-Image-Aug-18--2026-at-08_12_38-PM-oRqvw2Ch4wWmDFamgZSErFfdNK9GCq.png",
    "localGallery": [
      "/images/ChatGPT-Image-Aug-25--2026-at-07_05_10-PM-d4Q9ipbXKF0n4FV7rGJERyBr5vOgzT.png",
      "/images/ChatGPT-Image-Aug-18--2026-at-07_28_28-PM-vWCYzdPuLKbUb9DI8S8ZHPhZAs88KE.png",
      "/images/ChatGPT-Image-Aug-25--2026-at-07_03_22-PM-iZUJoGSjAYOrdVvWY3OOdX2JtbWjtC.png"
    ]
  },
  {
    "id": "p_tjz17y16q",
    "slug": "neymar-jr-samba-showstopper",
    "name": "Neymar Jr.",
    "tagline": "The Samba Showstopper",
    "story": "For the football fan who believes the beautiful game should look as unforgettable as it feels. Inspired by Neymar Jr.’s flair, creativity and outrageous skill, this premium 3D frame turns a football moment into a statement piece. Crafted with an Ultra HD Metal Print and a physically extruded 3D football element, it brings Neymar’s magic to life with depth, detail and a luxury finish.",
    "function": "Luxury 3D football display frame featuring an Ultra HD Metal Print, premium deep black frame and a physically extruded 3D football element mounted onto the artwork for a striking realistic effect. Designed for football enthusiasts, collectors and premium sports-inspired spaces. \n\nExclusively available at Oruky.",
    "pricePaise": 249900,
    "printMinutes": 120,
    "weightGrams": 200,
    "dimensionsMm": {
      "d": 24,
      "h": 297,
      "w": 210
    },
    "edition": null,
    "status": "made_to_order",
    "category": "frames",
    "ageGroup": "all-ages",
    "themes": [
      "The Golden Shots",
      "Footballers"
    ],
    "colorways": [],
    "imageGradient": [
      "#1D1D1F",
      "#F5F5F7"
    ],
    "imageUrl": "https://h6smb4mhncfdx1rf.public.blob.vercel-storage.com/products/ChatGPT-Image-Aug-18--2026-at-08_15_00-PM-YlSvaAFFt7yuxCUCMLsIBwVlqNgD56.png",
    "gallery": [
      "https://h6smb4mhncfdx1rf.public.blob.vercel-storage.com/products/ChatGPT-Image-Aug-25--2026-at-07_11_07-PM-oyPX4U6FjkGAGfY2BtbqTKwA2cV9xj.png",
      "https://h6smb4mhncfdx1rf.public.blob.vercel-storage.com/products/ChatGPT-Image-Aug-18--2026-at-07_34_54-PM-19sBkTdHhbpAziozGTSE9JJmf1kVMt.png",
      "https://h6smb4mhncfdx1rf.public.blob.vercel-storage.com/products/ChatGPT-Image-Aug-25--2026-at-07_00_20-PM-9Y6v4Rb3R71INUuaQloGjW8o1PC7te.png"
    ],
    "rating": 5,
    "reviews": 0,
    "createdAt": "2026-08-18",
    "updatedAt": "2026-09-26",
    "compareAtPaise": 299900,
    "freeShipping": true,
    "isPreorder": false,
    "preorderShipBy": null,
    "preorderDaysMin": null,
    "preorderDaysMax": null,
    "customFields": [],
    "seoTitle": null,
    "seoDescription": null,
    "faq": null,
    "categoryType": "frames",
    "localImageUrl": "/images/ChatGPT-Image-Aug-18--2026-at-08_15_00-PM-YlSvaAFFt7yuxCUCMLsIBwVlqNgD56.png",
    "localGallery": [
      "/images/ChatGPT-Image-Aug-25--2026-at-07_11_07-PM-oyPX4U6FjkGAGfY2BtbqTKwA2cV9xj.png",
      "/images/ChatGPT-Image-Aug-18--2026-at-07_34_54-PM-19sBkTdHhbpAziozGTSE9JJmf1kVMt.png",
      "/images/ChatGPT-Image-Aug-25--2026-at-07_00_20-PM-9Y6v4Rb3R71INUuaQloGjW8o1PC7te.png"
    ]
  },
  {
    "id": "p_tjz0rs2oj",
    "slug": "messi-magic",
    "name": "Messi Magic",
    "tagline": "The Magic of No. 10. Made 3D.",
    "story": "Some football moments deserve more than a print. The Golden 10 brings the magic of Messi to life through an ultra-high-definition metal print, paired with a meticulously extruded 3D football physically mounted onto the artwork.\n\nThe result is a striking piece that goes beyond the wall — depth, detail and realism you can actually see and feel.",
    "function": "A premium 3D football collectible created for Messi fans and football enthusiasts. Featuring an Ultra HD Metal Print, a physical 3D-extruded football, and a premium deep-frame finish, every detail is designed to deliver an ultra-realistic display experience.\n\nEXCLUSIVELY BY ORUKY\n\nNot just a football poster. A moment, brought to life.",
    "pricePaise": 249900,
    "printMinutes": 120,
    "weightGrams": 200,
    "dimensionsMm": {
      "d": 25,
      "h": 297,
      "w": 210
    },
    "edition": null,
    "status": "made_to_order",
    "category": "frames",
    "ageGroup": "all-ages",
    "themes": [
      "The Golden Shots",
      "Footballers"
    ],
    "colorways": [],
    "imageGradient": [
      "#1D1D1F",
      "#F5F5F7"
    ],
    "imageUrl": "https://h6smb4mhncfdx1rf.public.blob.vercel-storage.com/products/Artboard-2-100-5xhQWDn2NTEOq16YKpWPMux7Q4YxhC.jpg",
    "gallery": [
      "https://h6smb4mhncfdx1rf.public.blob.vercel-storage.com/products/ChatGPT-Image-Aug-25--2026-at-07_07_14-PM-bt05MXj8RggtLmO3q5z6Fl9QPRZGfy.png",
      "https://h6smb4mhncfdx1rf.public.blob.vercel-storage.com/products/ChatGPT-Image-Aug-18--2026-at-07_28_25-PM-GvPs8fZomsqOToNyuxlG1JtFgp52GL.png",
      "https://h6smb4mhncfdx1rf.public.blob.vercel-storage.com/products/ChatGPT-Image-Aug-25--2026-at-07_01_27-PM-TO0YiHz8kUhJX9gKCSKNnYE1DjYLO7.png"
    ],
    "rating": 5,
    "reviews": 0,
    "createdAt": "2026-08-18",
    "updatedAt": "2026-09-26",
    "compareAtPaise": 299900,
    "freeShipping": true,
    "isPreorder": false,
    "preorderShipBy": null,
    "preorderDaysMin": null,
    "preorderDaysMax": null,
    "customFields": [],
    "seoTitle": null,
    "seoDescription": null,
    "faq": null,
    "categoryType": "frames",
    "localImageUrl": "/images/Artboard-2-100-5xhQWDn2NTEOq16YKpWPMux7Q4YxhC.jpg",
    "localGallery": [
      "/images/ChatGPT-Image-Aug-25--2026-at-07_07_14-PM-bt05MXj8RggtLmO3q5z6Fl9QPRZGfy.png",
      "/images/ChatGPT-Image-Aug-18--2026-at-07_28_25-PM-GvPs8fZomsqOToNyuxlG1JtFgp52GL.png",
      "/images/ChatGPT-Image-Aug-25--2026-at-07_01_27-PM-TO0YiHz8kUhJX9gKCSKNnYE1DjYLO7.png"
    ]
  },
  {
    "id": "p_tjz1vtku0",
    "slug": "the-aerial-king",
    "name": "Born to Rise",
    "tagline": "When Gravity Meets Greatness.",
    "story": "He doesn't just rise above the defence — he rises above expectations. The Aerial King captures Ronaldo at his most iconic: suspended in the air, eyes locked on the ball, and pure athleticism frozen in a golden moment. Made for the fans who know that some football moments deserve more than a poster — they deserve a place on the wall.",
    "function": "A premium luxury football collectible featuring an Ultra HD Metal Print and a physically mounted 3D extruded football, creating a dramatic real-world depth effect. Finished in a premium deep frame and crafted exclusively by Oruky — turning one of football's most iconic aerial moments into a statement piece.",
    "pricePaise": 249900,
    "printMinutes": 120,
    "weightGrams": 200,
    "dimensionsMm": {
      "d": 25,
      "h": 297,
      "w": 210
    },
    "edition": null,
    "status": "made_to_order",
    "category": "frames",
    "ageGroup": "all-ages",
    "themes": [],
    "colorways": [],
    "imageGradient": [
      "#1D1D1F",
      "#F5F5F7"
    ],
    "imageUrl": "https://h6smb4mhncfdx1rf.public.blob.vercel-storage.com/products/ChatGPT-Image-Aug-18--2026-at-09_10_21-PM-IaTFCFhqtHqogr4s7vHS6YGTEkRW4v.png",
    "gallery": [
      "https://h6smb4mhncfdx1rf.public.blob.vercel-storage.com/products/ChatGPT-Image-Aug-25--2026-at-07_04_30-PM-j1KWgtkfX3bjIpdP53r6vRQCTl7933.png",
      "https://h6smb4mhncfdx1rf.public.blob.vercel-storage.com/products/ChatGPT-Image-Aug-18--2026-at-07_49_15-PM-Jvu7x2Mxt6GN4D5EfbgVeChr5Uwfl6.png",
      "https://h6smb4mhncfdx1rf.public.blob.vercel-storage.com/products/ChatGPT-Image-Aug-25--2026-at-07_00_57-PM-p7Fym1O8zauLStEoersVTkjRemRRvd.png"
    ],
    "rating": 5,
    "reviews": 0,
    "createdAt": "2026-08-18",
    "updatedAt": "2026-09-26",
    "compareAtPaise": 299900,
    "freeShipping": true,
    "isPreorder": false,
    "preorderShipBy": null,
    "preorderDaysMin": null,
    "preorderDaysMax": null,
    "customFields": [],
    "seoTitle": null,
    "seoDescription": null,
    "faq": null,
    "categoryType": "frames",
    "localImageUrl": "/images/ChatGPT-Image-Aug-18--2026-at-09_10_21-PM-IaTFCFhqtHqogr4s7vHS6YGTEkRW4v.png",
    "localGallery": [
      "/images/ChatGPT-Image-Aug-25--2026-at-07_04_30-PM-j1KWgtkfX3bjIpdP53r6vRQCTl7933.png",
      "/images/ChatGPT-Image-Aug-18--2026-at-07_49_15-PM-Jvu7x2Mxt6GN4D5EfbgVeChr5Uwfl6.png",
      "/images/ChatGPT-Image-Aug-25--2026-at-07_00_57-PM-p7Fym1O8zauLStEoersVTkjRemRRvd.png"
    ]
  },
  {
    "id": "p_tf8ut49wz",
    "slug": "kedarpath-framed-journey",
    "name": "KedarPath",
    "tagline": "Carry the journey. Not just the destination",
    "story": "Not every memory is captured in photographs.\nSome live in exhausted footsteps, freezing mountain air, silent prayers, and the feeling of finally seeing Kedarnath after the long climb.\nKedarPath transforms that sacred journey into a physical keepsake — featuring the topographic terrain of the Himalayas and the iconic pilgrimage route leading to the temple. Designed for devotees, trekkers, and mountain lovers who wish to keep a piece of Kedarnath close to them forever.",
    "function": "A premium framed topographic artwork featuring the 3D terrain map and sacred Kedarnath trek route, designed as a spiritual memory piece, wall decor collectible, and meaningful keepsake for devotees and travelers.",
    "pricePaise": 199900,
    "printMinutes": 120,
    "weightGrams": 300,
    "dimensionsMm": {
      "d": 15,
      "h": 210,
      "w": 140
    },
    "edition": null,
    "status": "in_stock",
    "category": "frames",
    "ageGroup": "adults-18+",
    "themes": [],
    "colorways": [
      "White & Black"
    ],
    "imageGradient": [
      "#D214FF",
      "#DAFF02"
    ],
    "imageUrl": "https://h6smb4mhncfdx1rf.public.blob.vercel-storage.com/products/WhatsApp-Image-2026-05-18-at-7.45.28-PM-Be2p5NGeo9TjuBsniq7GbvAeti7vHH.jpeg",
    "gallery": [
      "https://h6smb4mhncfdx1rf.public.blob.vercel-storage.com/products/IMG_7925-G5EfNh7ZEwp0m2IQRvsfIkJ4U2QtBq.PNG",
      "https://h6smb4mhncfdx1rf.public.blob.vercel-storage.com/products/IMG_7924-zl3dzso3MehZhlLVBAT0KiSWGtWkeI.PNG",
      "https://h6smb4mhncfdx1rf.public.blob.vercel-storage.com/products/IMG_7926-85N7asBjotUBJLFRdzaWi3IwLLGgCN.PNG",
      "https://h6smb4mhncfdx1rf.public.blob.vercel-storage.com/products/IMG_7923-1BrjlNKR12N48cO0n5619e4A5WMs4n.PNG"
    ],
    "rating": 5,
    "reviews": 0,
    "createdAt": "2026-05-18",
    "updatedAt": "2026-09-03",
    "compareAtPaise": 249900,
    "freeShipping": true,
    "isPreorder": false,
    "preorderShipBy": null,
    "preorderDaysMin": null,
    "preorderDaysMax": null,
    "customFields": [],
    "seoTitle": "Kedarnath Trek 3D Map Frame — KedarPath Keepsake",
    "seoDescription": "A premium 3D topographic frame of the sacred Kedarnath trek route — a keepsake of your yatra. Handmade in India, hand-finished. ₹1,999. Made to order — 12–15 days for delivery.",
    "faq": [
      {
        "answer": "KedarPath is a premium 3D-printed topographic frame of the sacred Kedarnath trek route in Uttarakhand, India. It recreates the Himalayan terrain along the climb to the Kedarnath temple in a 140×210 mm wall frame — a keepsake of the yatra, hand-finished by Oruky in Pune & Gurgaon.",
        "question": "What is the KedarPath frame?"
      },
      {
        "answer": "Yes — it's made for exactly that. For a devotee, trekker, or family member who completed the Kedarnath yatra, KedarPath turns the journey into a lasting wall piece they'll see every day. It's made to order — 12–15 days for delivery from the date you order, anywhere in India.",
        "question": "Is KedarPath a good gift for someone who did the Kedarnath yatra?"
      },
      {
        "answer": "Yes. The terrain is modelled on the actual topography of the route up to Kedarnath, so the ridgelines, valleys, and the final climb read true to anyone who has walked it.",
        "question": "Does the frame show the real Kedarnath trek route?"
      },
      {
        "answer": "It's 140 × 210 mm (about A5), 15 mm deep, and around 300 g — sized for a study wall, pooja room, mantel, or office shelf. It arrives framed and ready to display.",
        "question": "How big is KedarPath and where can I place it?"
      },
      {
        "answer": "The terrain is 3D-printed in durable PLA on a Bambu Lab P2S and hand-finished in a white-and-black palette, then framed. Each piece is made to order — printed when you buy, so there's no warehouse stock.",
        "question": "What is KedarPath made of?"
      },
      {
        "answer": "KedarPath is our Kedarnath edition. For another route — Char Dham, Amarnath, Valley of Flowers, or Everest Base Camp — our bespoke service can model it from the route's terrain data. Email oruky@adalwin.com to commission one.",
        "question": "Can I get a custom trek — Char Dham, Amarnath, or Everest Base Camp?"
      }
    ],
    "categoryType": "frames",
    "localImageUrl": "/images/WhatsApp-Image-2026-05-18-at-7.45.28-PM-Be2p5NGeo9TjuBsniq7GbvAeti7vHH.jpeg",
    "localGallery": [
      "/images/IMG_7925-G5EfNh7ZEwp0m2IQRvsfIkJ4U2QtBq.PNG",
      "/images/IMG_7924-zl3dzso3MehZhlLVBAT0KiSWGtWkeI.PNG",
      "/images/IMG_7926-85N7asBjotUBJLFRdzaWi3IwLLGgCN.PNG",
      "/images/IMG_7923-1BrjlNKR12N48cO0n5619e4A5WMs4n.PNG"
    ]
  },
  {
    "id": "p_tmqwvpx4d",
    "slug": "nanovault2",
    "name": "NanoVault V2",
    "tagline": "POV: You finally organized your gadgets. Now in Bigger Size.",
    "story": "Now Bigger Size: Keep your tiny essentials organized with SnapVault. From adapters and memory cards to earbuds, trackers, cash, and more, everything stays securely in place with a satisfying strong magnetic close.",
    "function": "A compact magnetic box to keep your gadgets and everyday essentials organized and secure.",
    "pricePaise": 89900,
    "printMinutes": 402,
    "weightGrams": 185,
    "dimensionsMm": {
      "d": 30,
      "h": 120,
      "w": 150
    },
    "edition": null,
    "status": "in_stock",
    "category": "deskmate",
    "ageGroup": "all-ages",
    "themes": [],
    "colorways": [
      "Red",
      "Yellow",
      "SkyBlue",
      "Black"
    ],
    "imageGradient": [
      "#1D1D1F",
      "#F5F5F7"
    ],
    "imageUrl": "https://h6smb4mhncfdx1rf.public.blob.vercel-storage.com/products/D01681C9-701F-4111-A3F4-CCEF944C8EF3-epgPB5Uzy9TXBsE8yPRdMpfOq8R6gJ.PNG",
    "gallery": [
      "https://h6smb4mhncfdx1rf.public.blob.vercel-storage.com/products/0E4C8776-30DD-456C-A25E-22E92C32744D-yrvPF3gq0xr7i9CMNKvzg1MLYStFmf.PNG",
      "https://h6smb4mhncfdx1rf.public.blob.vercel-storage.com/products/48005972-7BAF-42EF-B669-6570838EC308-Hxpgdt2MLa7TrCQ5J5YX0oKcNp4zdr.PNG",
      "https://h6smb4mhncfdx1rf.public.blob.vercel-storage.com/products/DEDE9B78-50A5-42B8-92D7-F4F4F11C0E41-fAdjRxouiZG27gjghWe2olAPh6TqVF.PNG",
      "https://h6smb4mhncfdx1rf.public.blob.vercel-storage.com/products/C657B270-D9CA-45D9-9561-7B959356D61F-WEH0Vz1DuiyRz5sI8JuQROLF7BbFuD.PNG"
    ],
    "rating": 5,
    "reviews": 0,
    "createdAt": "2026-10-11",
    "updatedAt": "2026-10-16",
    "compareAtPaise": 109900,
    "freeShipping": true,
    "isPreorder": true,
    "preorderShipBy": null,
    "preorderDaysMin": 4,
    "preorderDaysMax": 6,
    "customFields": [],
    "seoTitle": null,
    "seoDescription": null,
    "faq": null,
    "categoryType": "shop",
    "localImageUrl": "/images/D01681C9-701F-4111-A3F4-CCEF944C8EF3-epgPB5Uzy9TXBsE8yPRdMpfOq8R6gJ.PNG",
    "localGallery": [
      "https://h6smb4mhncfdx1rf.public.blob.vercel-storage.com/products/0E4C8776-30DD-456C-A25E-22E92C32744D-yrvPF3gq0xr7i9CMNKvzg1MLYStFmf.PNG",
      "https://h6smb4mhncfdx1rf.public.blob.vercel-storage.com/products/48005972-7BAF-42EF-B669-6570838EC308-Hxpgdt2MLa7TrCQ5J5YX0oKcNp4zdr.PNG",
      "https://h6smb4mhncfdx1rf.public.blob.vercel-storage.com/products/DEDE9B78-50A5-42B8-92D7-F4F4F11C0E41-fAdjRxouiZG27gjghWe2olAPh6TqVF.PNG",
      "https://h6smb4mhncfdx1rf.public.blob.vercel-storage.com/products/C657B270-D9CA-45D9-9561-7B959356D61F-WEH0Vz1DuiyRz5sI8JuQROLF7BbFuD.PNG"
    ]
  },
  {
    "id": "p_thwrb9xbj",
    "slug": "lazypod-airpods-sofa-stand",
    "name": "LazyPod",
    "tagline": "Your AirPods just found their favorite seat.",
    "story": "Your AirPods work hard all day—meetings, music, workouts, and everything in between. When they're off duty, they deserve a cozy place to unwind.\n\nInspired by the comfort of a plush couch, LazyPod gives your earbuds their very own lounge. It's a playful desk companion that keeps your AirPods safe, easy to find, and always ready for your next adventure. ",
    "function": "A sofa-inspired holder designed to securely cradle your AirPods or wireless earbuds while adding a fun, cozy, and aesthetic touch to your desk, bedside table, or workspace.",
    "pricePaise": 54900,
    "printMinutes": 150,
    "weightGrams": 54,
    "dimensionsMm": {
      "d": 76,
      "h": 44,
      "w": 98
    },
    "edition": null,
    "status": "in_stock",
    "category": "keychains",
    "ageGroup": "adults-18+",
    "themes": [],
    "colorways": [
      "Yellow"
    ],
    "imageGradient": [
      "#0044FD",
      "#DAFF02"
    ],
    "imageUrl": "https://h6smb4mhncfdx1rf.public.blob.vercel-storage.com/products/72c3ea15-18d3-4443-9320-adb170169c9c-K5KYYcNcYj8TWv2m4RQEY7ytqpKtfv.png",
    "gallery": [
      "https://h6smb4mhncfdx1rf.public.blob.vercel-storage.com/products/fa0bf775-1f56-4c8c-9c05-ca1e53640edf-GmETznIcD3ZreZfV3dFeJajrN5E4k6.png",
      "https://h6smb4mhncfdx1rf.public.blob.vercel-storage.com/products/decd4f81-7385-4c44-8c9a-85393c8a3093-xvh4pOTKFKmk33l7gZ3uQXqi3eeMyl.png",
      "https://h6smb4mhncfdx1rf.public.blob.vercel-storage.com/products/c034c4e3-2294-4d28-85f2-5c90d917555a-8TwmIgxezDI2lSJmovIu4oB5FrOZa0.png"
    ],
    "rating": 5,
    "reviews": 0,
    "createdAt": "2026-07-09",
    "updatedAt": "2026-07-09",
    "compareAtPaise": 79900,
    "freeShipping": true,
    "isPreorder": false,
    "preorderShipBy": null,
    "preorderDaysMin": null,
    "preorderDaysMax": null,
    "customFields": [],
    "seoTitle": null,
    "seoDescription": null,
    "faq": null,
    "categoryType": "shop",
    "localImageUrl": "/images/72c3ea15-18d3-4443-9320-adb170169c9c-K5KYYcNcYj8TWv2m4RQEY7ytqpKtfv.png",
    "localGallery": [
      "/images/fa0bf775-1f56-4c8c-9c05-ca1e53640edf-GmETznIcD3ZreZfV3dFeJajrN5E4k6.png",
      "/images/decd4f81-7385-4c44-8c9a-85393c8a3093-xvh4pOTKFKmk33l7gZ3uQXqi3eeMyl.png",
      "/images/c034c4e3-2294-4d28-85f2-5c90d917555a-8TwmIgxezDI2lSJmovIu4oB5FrOZa0.png"
    ]
  },
  {
    "id": "p_tg0ck12sl",
    "slug": "kedar-display-collectible",
    "name": "Kedar",
    "tagline": "The Sacred Summit",
    "story": "High in the Himalayas stands Kedarnath, a symbol of faith, resilience, and spiritual awakening. Inspired by the sacred temple and the breathtaking mountain landscape that surrounds it, this collectible captures the essence of one of India's most revered destinations. Every contour reflects the journey, devotion, and timeless beauty that make Kedarnath unforgettable.",
    "function": "A premium Himalayan-inspired collectible designed for display on desks, shelves, coffee tables, offices, and living spaces. Perfect for devotees, travelers, mountain lovers, and anyone seeking a meaningful décor piece with a story.",
    "pricePaise": 89900,
    "printMinutes": 120,
    "weightGrams": 24,
    "dimensionsMm": {
      "d": 90,
      "h": 6,
      "w": 90
    },
    "edition": null,
    "status": "in_stock",
    "category": "deskmate",
    "ageGroup": "all-ages",
    "themes": [
      "Devotional",
      "Desk Accessories",
      "Collectibles"
    ],
    "colorways": [
      "Black"
    ],
    "imageGradient": [
      "#D214FF",
      "#DAFF02"
    ],
    "imageUrl": "https://h6smb4mhncfdx1rf.public.blob.vercel-storage.com/products/569086D2-A6FA-4F6D-A5B7-ACC2EB02F6E8-W2A6C17LWpZURBCCTOrNR0jrL6CFNN.PNG",
    "gallery": [
      "https://h6smb4mhncfdx1rf.public.blob.vercel-storage.com/products/2010EEBB-C895-4B62-9979-5A83EF3B5DC4-t55dvlK45x4Dk0vZBkbCzeYWqYHpxk.PNG",
      "https://h6smb4mhncfdx1rf.public.blob.vercel-storage.com/products/BC71A606-82C5-44CF-8CD6-80A0A156A2E8-ICNiLYbhryckmBMfudnAE0nRiMwdao.PNG",
      "https://h6smb4mhncfdx1rf.public.blob.vercel-storage.com/products/C2597FBD-5A25-418E-BEE0-E1BBCF7EB0B9-tRu5p6lK3xmemMaeH29R6T9aMzMc6U.PNG"
    ],
    "rating": 5,
    "reviews": 0,
    "createdAt": "2026-06-02",
    "updatedAt": "2026-06-02",
    "compareAtPaise": 111900,
    "freeShipping": true,
    "isPreorder": false,
    "preorderShipBy": null,
    "preorderDaysMin": null,
    "preorderDaysMax": null,
    "customFields": [],
    "seoTitle": null,
    "seoDescription": null,
    "faq": null,
    "categoryType": "shop",
    "localImageUrl": "/images/569086D2-A6FA-4F6D-A5B7-ACC2EB02F6E8-W2A6C17LWpZURBCCTOrNR0jrL6CFNN.PNG",
    "localGallery": [
      "/images/2010EEBB-C895-4B62-9979-5A83EF3B5DC4-t55dvlK45x4Dk0vZBkbCzeYWqYHpxk.PNG",
      "/images/BC71A606-82C5-44CF-8CD6-80A0A156A2E8-ICNiLYbhryckmBMfudnAE0nRiMwdao.PNG",
      "/images/C2597FBD-5A25-418E-BEE0-E1BBCF7EB0B9-tRu5p6lK3xmemMaeH29R6T9aMzMc6U.PNG"
    ]
  },
  {
    "id": "p_tfp06s3dh",
    "slug": "brakezilla-performance-desk-organizer",
    "name": "TurboGrip",
    "tagline": "The ultimate desk brake beast",
    "story": "Straight out of the garage and onto your desk, TurboGrip was built for people who live for speed, engines, and late-night drives. Inspired by high-performance brake calipers and drilled rotors, this beast brings race-day energy to your setup while keeping your essentials organized.\n\nAggressive styling. Motorsport vibes. Pure desk horsepower.",
    "function": "3D printed performance brake caliper desk organizer designed to hold pens, tools, desk accessories, remotes, or stationery while adding a premium automotive aesthetic to your workspace.",
    "pricePaise": 119900,
    "printMinutes": 360,
    "weightGrams": 350,
    "dimensionsMm": {
      "d": 90,
      "h": 70,
      "w": 180
    },
    "edition": null,
    "status": "in_stock",
    "category": "cafe",
    "ageGroup": "all-ages",
    "themes": [
      "Pen Holder",
      "Desk Organiser"
    ],
    "colorways": [
      "Red"
    ],
    "imageGradient": [
      "#D214FF",
      "#DAFF02"
    ],
    "imageUrl": "https://h6smb4mhncfdx1rf.public.blob.vercel-storage.com/products/bd32292b-cc58-4662-938d-8d821fc3b59c-SIxgxc2tnm0wLkbuo6osYiEmeJxCKH.png",
    "gallery": [],
    "rating": 5,
    "reviews": 0,
    "createdAt": "2026-05-27",
    "updatedAt": "2026-05-27",
    "compareAtPaise": 149900,
    "freeShipping": true,
    "isPreorder": false,
    "preorderShipBy": null,
    "preorderDaysMin": null,
    "preorderDaysMax": null,
    "customFields": [],
    "seoTitle": null,
    "seoDescription": null,
    "faq": null,
    "categoryType": "shop",
    "localImageUrl": "/images/bd32292b-cc58-4662-938d-8d821fc3b59c-SIxgxc2tnm0wLkbuo6osYiEmeJxCKH.png",
    "localGallery": []
  },
  {
    "id": "p_tfp0fxlq3",
    "slug": "datekeeper-perpetual-desk-calendar",
    "name": "DateKeeper",
    "tagline": "The desk calender without batteries",
    "story": "DateKeeper was built for people who love clean desks, timeless design, and satisfying little rituals. No charging, no notifications, no distractions — just a beautifully minimal perpetual calendar that keeps you grounded in the present moment.\nFlip the blocks, set the date, and let your desk feel organized again.",
    "function": "3D printed perpetual desk calendar designed for daily date tracking, workspace organization, aesthetic desk setups, and productivity-focused environments.",
    "pricePaise": 139900,
    "printMinutes": 540,
    "weightGrams": 350,
    "dimensionsMm": {
      "d": 90,
      "h": 110,
      "w": 90
    },
    "edition": null,
    "status": "in_stock",
    "category": "deskmate",
    "ageGroup": "all-ages",
    "themes": [],
    "colorways": [
      "Black"
    ],
    "imageGradient": [
      "#D214FF",
      "#DAFF02"
    ],
    "imageUrl": "https://h6smb4mhncfdx1rf.public.blob.vercel-storage.com/products/59d7400a-cec3-45b2-a124-701cb470fb3f-G6qUJjSQPl2LgA9JdmPqvhYkJaT9bM.png",
    "gallery": [],
    "rating": 5,
    "reviews": 0,
    "createdAt": "2026-05-27",
    "updatedAt": "2026-05-27",
    "compareAtPaise": 169900,
    "freeShipping": true,
    "isPreorder": false,
    "preorderShipBy": null,
    "preorderDaysMin": null,
    "preorderDaysMax": null,
    "customFields": [],
    "seoTitle": null,
    "seoDescription": null,
    "faq": null,
    "categoryType": "shop",
    "localImageUrl": "/images/59d7400a-cec3-45b2-a124-701cb470fb3f-G6qUJjSQPl2LgA9JdmPqvhYkJaT9bM.png",
    "localGallery": []
  },
  {
    "id": "p_tfox0m4ci",
    "slug": "shelldon-cup-guardian-coaster",
    "name": "ShellDon",
    "tagline": "The chill cup guardian",
    "story": "ShellDon takes his job very seriously — protecting your desk from hot mugs, coffee rings, and accidental spills. Always calm, always smiling, this little turtle quietly carries your favorite cup while adding cozy café vibes to your workspace.\nWhether it’s your late-night coffee, gaming fuel, or morning chai, ShellDon is always ready to hold it down.",
    "function": "3D printed turtle coaster and cup holder designed to support mugs, protect surfaces from heat marks, and add playful desk aesthetics to your setup.",
    "pricePaise": 94900,
    "printMinutes": 540,
    "weightGrams": 180,
    "dimensionsMm": {
      "d": 120,
      "h": 60,
      "w": 150
    },
    "edition": null,
    "status": "in_stock",
    "category": "deskmate",
    "ageGroup": "adults-18+",
    "themes": [
      "Coasters",
      "Desk Accessories"
    ],
    "colorways": [
      "Green"
    ],
    "imageGradient": [
      "#D214FF",
      "#DAFF02"
    ],
    "imageUrl": "https://h6smb4mhncfdx1rf.public.blob.vercel-storage.com/products/c6561f01-fcd2-41f9-b79a-6a457a81eca4-NvnnxmXufMIfVsewZYYCMxwBghOHgj.png",
    "gallery": [],
    "rating": 5,
    "reviews": 0,
    "createdAt": "2026-05-27",
    "updatedAt": "2026-05-27",
    "compareAtPaise": 119000,
    "freeShipping": true,
    "isPreorder": false,
    "preorderShipBy": null,
    "preorderDaysMin": null,
    "preorderDaysMax": null,
    "customFields": [],
    "seoTitle": null,
    "seoDescription": null,
    "faq": null,
    "categoryType": "shop",
    "localImageUrl": "/images/c6561f01-fcd2-41f9-b79a-6a457a81eca4-NvnnxmXufMIfVsewZYYCMxwBghOHgj.png",
    "localGallery": []
  },
  {
    "id": "p_tevtnqmn0",
    "slug": "nanovault",
    "name": "NanoVault",
    "tagline": "POV: You finally organized your tiny gadgets",
    "story": "Keep your tiny essentials organized with SnapVault. From small adapters and memory cards to earbuds, trackers, penny cash, and more, everything stays securely in place with a satisfying magnetic close.",
    "function": "A compact magnetic box to keep your gadgets, memory, etc and everyday essentials organized and secure.",
    "pricePaise": 64900,
    "printMinutes": 228,
    "weightGrams": 70,
    "dimensionsMm": {
      "d": 30,
      "h": 79,
      "w": 100
    },
    "edition": {
      "total": 100,
      "current": 58
    },
    "status": "in_stock",
    "category": "deskmate",
    "ageGroup": "adults-18+",
    "themes": [
      "Folder Gadget Box"
    ],
    "colorways": [
      "Yellow",
      "Red",
      "Black",
      "Sky Blue"
    ],
    "imageGradient": [
      "#D214FF",
      "#DAFF02"
    ],
    "imageUrl": "https://h6smb4mhncfdx1rf.public.blob.vercel-storage.com/products/36bed064-d65e-483b-9c38-858102fc458d-tdMDtzuTTs7Ozk9vVhR771oiZ6E3Sa.png",
    "gallery": [
      "https://h6smb4mhncfdx1rf.public.blob.vercel-storage.com/products/ChatGPT-Image-Jul-10--2026-at-07_28_03-PM-0IP75dfR6oOeqU4Ft1Xt4fvyvNcgi4.png",
      "https://h6smb4mhncfdx1rf.public.blob.vercel-storage.com/products/38f44880-972d-4663-b8c7-bd4efef87c6f-yBL9PD4NRtJ7DNZV0CUlfijqGlLVo8.png",
      "https://h6smb4mhncfdx1rf.public.blob.vercel-storage.com/products/47392D93-E07F-492D-913C-29DBBC327093-OwMWNOibAoNTpf49TbunIm47sJOzSx.PNG",
      "https://h6smb4mhncfdx1rf.public.blob.vercel-storage.com/products/ChatGPT-Image-Jul-10--2026-at-06_53_15-PM-9M4Q2wHHfLVniyNR2OCAUykQC0d8S0.png",
      "https://h6smb4mhncfdx1rf.public.blob.vercel-storage.com/products/ChatGPT-Image-Jul-10--2026-at-07_46_24-PM-Zjt4eLPJ6YTKgQkskOeGW48uiBJOX2.png"
    ],
    "rating": 5,
    "reviews": 0,
    "createdAt": "2026-05-11",
    "updatedAt": "2026-10-16",
    "compareAtPaise": 89900,
    "freeShipping": true,
    "isPreorder": true,
    "preorderShipBy": null,
    "preorderDaysMin": 4,
    "preorderDaysMax": 6,
    "customFields": [],
    "seoTitle": null,
    "seoDescription": null,
    "faq": null,
    "categoryType": "shop",
    "localImageUrl": "/images/36bed064-d65e-483b-9c38-858102fc458d-tdMDtzuTTs7Ozk9vVhR771oiZ6E3Sa.png",
    "localGallery": [
      "/images/ChatGPT-Image-Jul-10--2026-at-07_28_03-PM-0IP75dfR6oOeqU4Ft1Xt4fvyvNcgi4.png",
      "/images/38f44880-972d-4663-b8c7-bd4efef87c6f-yBL9PD4NRtJ7DNZV0CUlfijqGlLVo8.png",
      "/images/47392D93-E07F-492D-913C-29DBBC327093-OwMWNOibAoNTpf49TbunIm47sJOzSx.PNG",
      "/images/ChatGPT-Image-Jul-10--2026-at-06_53_15-PM-9M4Q2wHHfLVniyNR2OCAUykQC0d8S0.png",
      "/images/ChatGPT-Image-Jul-10--2026-at-07_46_24-PM-Zjt4eLPJ6YTKgQkskOeGW48uiBJOX2.png"
    ]
  },
  {
    "id": "p_tevr0aha4",
    "slug": "cookieloop-cable-winder",
    "name": "CookieLoop",
    "tagline": "Untangle your setup, one cookie at a time",
    "story": "Inspired by everyone’s favorite cream-filled snack, CookieLoop turns messy charging cables into something oddly satisfying and fun. Designed for aesthetic desks and everyday convenience, it’s the tiny desk companion that instantly makes your setup feel cleaner, cuter, and way more organized.",
    "function": "A cookie-inspired cable winding organizer designed to neatly manage charging cables, earphones, and desk wires while adding a playful aesthetic touch to your setup.",
    "pricePaise": 89900,
    "printMinutes": 360,
    "weightGrams": 141,
    "dimensionsMm": {
      "d": 6,
      "h": 6,
      "w": 12
    },
    "edition": null,
    "status": "in_stock",
    "category": "keychains",
    "ageGroup": "adults-18+",
    "themes": [
      "Cable Winder",
      "Oreo"
    ],
    "colorways": [
      "Black & White"
    ],
    "imageGradient": [
      "#D214FF",
      "#DAFF02"
    ],
    "imageUrl": "https://h6smb4mhncfdx1rf.public.blob.vercel-storage.com/products/3c533167-24de-42fd-bd2d-35dd0790f676-3ieXBM8OeHIEhcn9PinDIXA7mt3Tp1.png",
    "gallery": [
      "https://h6smb4mhncfdx1rf.public.blob.vercel-storage.com/products/7659f74a-6024-460a-b7e1-13be49421413-oxYJHlGCtcG6wA1rkMuGK9TcSKGEeb.png"
    ],
    "rating": 5,
    "reviews": 0,
    "createdAt": "2026-05-11",
    "updatedAt": "2026-05-11",
    "compareAtPaise": 109900,
    "freeShipping": true,
    "isPreorder": false,
    "preorderShipBy": null,
    "preorderDaysMin": null,
    "preorderDaysMax": null,
    "customFields": [],
    "seoTitle": null,
    "seoDescription": null,
    "faq": null,
    "categoryType": "shop",
    "localImageUrl": "/images/3c533167-24de-42fd-bd2d-35dd0790f676-3ieXBM8OeHIEhcn9PinDIXA7mt3Tp1.png",
    "localGallery": [
      "/images/7659f74a-6024-460a-b7e1-13be49421413-oxYJHlGCtcG6wA1rkMuGK9TcSKGEeb.png"
    ]
  },
  {
    "id": "p_teqhcdve7",
    "slug": "shockvault-penholder",
    "name": "TorqueShock",
    "tagline": "Suspension vibes. Desk edition",
    "story": "Inspired by high-performance suspension systems and garage-built machines, ShockVault brings raw automotive energy straight to your setup. Designed for riders, creators, and petrolheads who believe even desk accessories should have attitude.",
    "function": "A shock-absorber-inspired desk organizer designed to hold pens, markers, tools, and accessories while adding a bold mechanical aesthetic to your workspace.",
    "pricePaise": 99900,
    "printMinutes": 346,
    "weightGrams": 149,
    "dimensionsMm": {
      "d": 100,
      "h": 85,
      "w": 100
    },
    "edition": null,
    "status": "in_stock",
    "category": "cafe",
    "ageGroup": "adults-18+",
    "themes": [
      "Pen Holder",
      "Car Lovers"
    ],
    "colorways": [
      "Matt Black",
      "Yellow",
      "Red"
    ],
    "imageGradient": [
      "#D214FF",
      "#DAFF02"
    ],
    "imageUrl": "https://h6smb4mhncfdx1rf.public.blob.vercel-storage.com/products/6a0ffc64-48e4-4279-8723-5bdcdade98e4-pWCsDqshi8pfgd8zpvamW1NqVr83qL.png",
    "gallery": [
      "https://h6smb4mhncfdx1rf.public.blob.vercel-storage.com/products/aab50dca-e626-4452-b676-d081ebb0ebd3-kjg59WYlfn2xzvYmZliD0FT01vyesd.png"
    ],
    "rating": 5,
    "reviews": 0,
    "createdAt": "2026-05-08",
    "updatedAt": "2026-05-11",
    "compareAtPaise": 129900,
    "freeShipping": true,
    "isPreorder": false,
    "preorderShipBy": null,
    "preorderDaysMin": null,
    "preorderDaysMax": null,
    "customFields": [],
    "seoTitle": null,
    "seoDescription": null,
    "faq": null,
    "categoryType": "shop",
    "localImageUrl": "/images/6a0ffc64-48e4-4279-8723-5bdcdade98e4-pWCsDqshi8pfgd8zpvamW1NqVr83qL.png",
    "localGallery": [
      "/images/aab50dca-e626-4452-b676-d081ebb0ebd3-kjg59WYlfn2xzvYmZliD0FT01vyesd.png"
    ]
  },
  {
    "id": "p_teqbydpjy",
    "slug": "wizardhold",
    "name": "WizardHold",
    "tagline": "A little magic for your desk",
    "story": "Meet WizardHold — the tiny castle where creativity and imagination come to life.\nInspired by magical kingdoms, ancient towers, and fantasy adventures, WizardHold transforms your desk into a world filled with wonder. Every staircase, tower, and hidden detail is designed to feel like a miniature fortress straight out of a wizard’s tale.\nWhether it’s holding your pens, brushes, or tiny essentials, WizardHold brings a touch of fantasy magic to your everyday setup.\nBecause every creator deserves a little magic on their desk.",
    "function": "A fantasy-inspired desk organizer designed to hold your everyday essentials while adding a magical and collectible aesthetic to your space.\nSpacious top compartment for pens, brushes, or tools\nDetailed castle-inspired architectural design\nStable and compact display structure\nDurable 3D printed PLA\nPerfect for fantasy lovers, desk setups, or gifting",
    "pricePaise": 59900,
    "printMinutes": 180,
    "weightGrams": 60,
    "dimensionsMm": {
      "d": 93,
      "h": 125,
      "w": 91
    },
    "edition": null,
    "status": "in_stock",
    "category": "deskmate",
    "ageGroup": "adults-18+",
    "themes": [
      "Pen Holder",
      "Wizard"
    ],
    "colorways": [
      "Gradient Green & Blue"
    ],
    "imageGradient": [
      "#D214FF",
      "#DAFF02"
    ],
    "imageUrl": "https://h6smb4mhncfdx1rf.public.blob.vercel-storage.com/products/cb46c3e9-fa05-486a-abf9-e9380c18e04a-UMx37GR8GgwuIRpRoNQSdDJM9nSHjH.png",
    "gallery": [
      "https://h6smb4mhncfdx1rf.public.blob.vercel-storage.com/products/2ef9264e-0182-46c7-94d1-b882cd2e29d5-XEs4xa91NZi5denJb4iedjuCVZuD31.png"
    ],
    "rating": 5,
    "reviews": 0,
    "createdAt": "2026-05-08",
    "updatedAt": "2026-05-17",
    "compareAtPaise": 79900,
    "freeShipping": false,
    "isPreorder": false,
    "preorderShipBy": null,
    "preorderDaysMin": null,
    "preorderDaysMax": null,
    "customFields": [],
    "seoTitle": null,
    "seoDescription": null,
    "faq": null,
    "categoryType": "shop",
    "localImageUrl": "/images/cb46c3e9-fa05-486a-abf9-e9380c18e04a-UMx37GR8GgwuIRpRoNQSdDJM9nSHjH.png",
    "localGallery": [
      "/images/2ef9264e-0182-46c7-94d1-b882cd2e29d5-XEs4xa91NZi5denJb4iedjuCVZuD31.png"
    ]
  },
  {
    "id": "p_teivl8th7",
    "slug": "drift-coasters",
    "name": "DriftCoasters",
    "tagline": "For those who notice the rims first",
    "story": "Meet DriftCoasters— inspired by the obsession every car lover understands.\nIt’s never just about the car… it’s about the details — the rims, the stance, the finish. This coaster set brings that same passion to your desk or table.\nBecause real enthusiasts don’t leave their style in the garage.",
    "function": "A premium wheel-inspired coaster set designed to protect your surfaces while adding a bold automotive aesthetic to your space.\nSet of 3 alloy wheel-style coasters \nProtective base for heat & moisture\nTire-inspired holder for easy storage\nDurable multi-color 3D printed PLA\nPerfect for desks, coffee tables, and car lovers",
    "pricePaise": 159900,
    "printMinutes": 450,
    "weightGrams": 218,
    "dimensionsMm": {
      "d": 100,
      "h": 40,
      "w": 100
    },
    "edition": null,
    "status": "in_stock",
    "category": "cafe",
    "ageGroup": "adults-18+",
    "themes": [
      "Cafe Racer",
      "Car Lovers",
      "Coasters"
    ],
    "colorways": [
      "Matt Black",
      "Red",
      "Grey"
    ],
    "imageGradient": [
      "#D214FF",
      "#DAFF02"
    ],
    "imageUrl": "https://h6smb4mhncfdx1rf.public.blob.vercel-storage.com/products/dcdb3537-d10e-420b-b464-1ed99f94ff7a-oeaiL7k56Sb4VWq6PgpoJho520qncU.png",
    "gallery": [
      "https://h6smb4mhncfdx1rf.public.blob.vercel-storage.com/products/beec4feb-ea27-4330-9243-b47587015f80-jZThuHjnk6wLhlyHA9tuqplS4utAx8.png",
      "https://h6smb4mhncfdx1rf.public.blob.vercel-storage.com/products/beec4feb-ea27-4330-9243-b47587015f80-xREw3KBGcXofXbFStLwj5enDRNdcQ2.png"
    ],
    "rating": 5,
    "reviews": 0,
    "createdAt": "2026-05-04",
    "updatedAt": "2026-05-11",
    "compareAtPaise": 189900,
    "freeShipping": true,
    "isPreorder": false,
    "preorderShipBy": null,
    "preorderDaysMin": null,
    "preorderDaysMax": null,
    "customFields": [],
    "seoTitle": null,
    "seoDescription": null,
    "faq": null,
    "categoryType": "shop",
    "localImageUrl": "/images/dcdb3537-d10e-420b-b464-1ed99f94ff7a-oeaiL7k56Sb4VWq6PgpoJho520qncU.png",
    "localGallery": [
      "/images/beec4feb-ea27-4330-9243-b47587015f80-jZThuHjnk6wLhlyHA9tuqplS4utAx8.png",
      "/images/beec4feb-ea27-4330-9243-b47587015f80-xREw3KBGcXofXbFStLwj5enDRNdcQ2.png"
    ]
  },
  {
    "id": "p_tefm4o0ru",
    "slug": "zipbuddy-pen-holder",
    "name": "ZipBuddy",
    "tagline": "Your desk just got winter drip",
    "story": "Meet ZipBuddy — the chillest guy on your desk.\nInspired by those cozy winter jackets we never want to take off, ZipBuddy brings that same vibe to your workspace. No more boring pen holders sitting there doing nothing — this one actually has personality.\nZip it up, stuff your pens in, and suddenly your desk feels less like work… and more like your space.",
    "function": "A compact and aesthetic pen holder designed to organize your everyday desk essentials while adding a unique, premium visual appeal.\nHolds pens, markers, small tools\nStable base for daily use\nDurable 3D printed PLA build\nDesigned to stand out, not blend in",
    "pricePaise": 74900,
    "printMinutes": 300,
    "weightGrams": 150,
    "dimensionsMm": {
      "d": 100,
      "h": 100,
      "w": 120
    },
    "edition": null,
    "status": "in_stock",
    "category": "deskmate",
    "ageGroup": "adults-18+",
    "themes": [
      "Desk Organiser",
      "Pen Holder"
    ],
    "colorways": [
      "Matt Green",
      "Yellow"
    ],
    "imageGradient": [
      "#FF5A5F",
      "#FFD93D"
    ],
    "imageUrl": "https://h6smb4mhncfdx1rf.public.blob.vercel-storage.com/products/ChatGPT-Image-May-3--2026-at-04_25_49-AM-PWyfgD68IFRwEdyhnCEAutuFTuhPOl.png",
    "gallery": [
      "https://h6smb4mhncfdx1rf.public.blob.vercel-storage.com/products/ChatGPT-Image-May-3--2026-at-01_01_06-AM-MwmfqfrJkXuteyBsBvfs2GO5TsxqUe.png",
      "https://h6smb4mhncfdx1rf.public.blob.vercel-storage.com/products/ChatGPT-Image-May-3--2026-at-01_43_53-AM-qt2clCcTSY6PbdVdlHFilKN7HeuHTS.png",
      "https://h6smb4mhncfdx1rf.public.blob.vercel-storage.com/products/ChatGPT-Image-May-3--2026-at-12_34_43-AM-8eazirsfSxtTpXyr0lky9RzNrTq8EA.png",
      "https://h6smb4mhncfdx1rf.public.blob.vercel-storage.com/products/ChatGPT-Image-May-3--2026-at-12_34_59-AM-sPP8Uil6g1UUK05IVXt0KmORmqzw26.png",
      "https://h6smb4mhncfdx1rf.public.blob.vercel-storage.com/products/ChatGPT-Image-May-3--2026-at-12_35_01-AM-u0tsVfntOvUnQPVOjgbEUxk1AQJTKV.png"
    ],
    "rating": 5,
    "reviews": 0,
    "createdAt": "2026-05-02",
    "updatedAt": "2026-05-22",
    "compareAtPaise": 99900,
    "freeShipping": true,
    "isPreorder": false,
    "preorderShipBy": null,
    "preorderDaysMin": null,
    "preorderDaysMax": null,
    "customFields": [],
    "seoTitle": null,
    "seoDescription": null,
    "faq": null,
    "categoryType": "shop",
    "localImageUrl": "/images/ChatGPT-Image-May-3--2026-at-04_25_49-AM-PWyfgD68IFRwEdyhnCEAutuFTuhPOl.png",
    "localGallery": [
      "/images/ChatGPT-Image-May-3--2026-at-01_01_06-AM-MwmfqfrJkXuteyBsBvfs2GO5TsxqUe.png",
      "/images/ChatGPT-Image-May-3--2026-at-01_43_53-AM-qt2clCcTSY6PbdVdlHFilKN7HeuHTS.png",
      "/images/ChatGPT-Image-May-3--2026-at-12_34_43-AM-8eazirsfSxtTpXyr0lky9RzNrTq8EA.png",
      "/images/ChatGPT-Image-May-3--2026-at-12_34_59-AM-sPP8Uil6g1UUK05IVXt0KmORmqzw26.png",
      "/images/ChatGPT-Image-May-3--2026-at-12_35_01-AM-u0tsVfntOvUnQPVOjgbEUxk1AQJTKV.png"
    ]
  },
  {
    "id": "p_ti4kpshnr",
    "slug": "pitstop-clock",
    "name": "PitStop Clock",
    "tagline": "Time never stops. Neither does passion.",
    "story": "Inspired by performance. Built for enthusiasts.\n\nThe PitStop Clock transforms an iconic performance wheel into a functional desk clock, bringing motorsport-inspired design to your workspace.\n",
    "function": "Inspired by performance. Built for enthusiasts.\n\nThe PitStop Clock™ transforms an iconic performance wheel into a functional desk clock, bringing motorsport-inspired design to your workspace.\n\nWhether you're a biker, car lover, or Formula 1 fan, this clock adds the perfect finishing touch to your desk, gaming setup, office, or garage.",
    "pricePaise": 139900,
    "printMinutes": 500,
    "weightGrams": 300,
    "dimensionsMm": {
      "d": 150,
      "h": 150,
      "w": 150
    },
    "edition": null,
    "status": "in_stock",
    "category": "deskmate",
    "ageGroup": "adults-18+",
    "themes": [],
    "colorways": [
      "Black",
      "Yellow",
      "Red"
    ],
    "imageGradient": [
      "#0044FD",
      "#DAFF02"
    ],
    "imageUrl": "https://h6smb4mhncfdx1rf.public.blob.vercel-storage.com/products/d21c2250-afa4-4f9a-bb27-aa50c95f391a-EHF7rGUWpVplK2sHCCwGl0WxLmvYqB.png",
    "gallery": [
      "https://h6smb4mhncfdx1rf.public.blob.vercel-storage.com/products/8cf1ca7b-00b7-456f-922a-0c70baa72990-A5I7vKKFwqaPMqViKarkitnZ81mejB.png"
    ],
    "rating": 5,
    "reviews": 0,
    "createdAt": "2026-07-13",
    "updatedAt": "2026-07-13",
    "compareAtPaise": 169900,
    "freeShipping": true,
    "isPreorder": false,
    "preorderShipBy": null,
    "preorderDaysMin": null,
    "preorderDaysMax": null,
    "customFields": [],
    "seoTitle": null,
    "seoDescription": null,
    "faq": null,
    "categoryType": "shop",
    "localImageUrl": "/images/d21c2250-afa4-4f9a-bb27-aa50c95f391a-EHF7rGUWpVplK2sHCCwGl0WxLmvYqB.png",
    "localGallery": [
      "/images/8cf1ca7b-00b7-456f-922a-0c70baa72990-A5I7vKKFwqaPMqViKarkitnZ81mejB.png"
    ]
  }
];

export const FRAMES = PRODUCTS.filter(p => p.categoryType === 'frames');
export const COLLECTIBLES = PRODUCTS.filter(p => p.categoryType === 'shop');

export function getProductBySlug(slug: string): Product | undefined {
  return PRODUCTS.find(p => p.slug === slug);
}
