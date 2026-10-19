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
    "id": "pb_twisted_xs",
    "slug": "twisted-handle-kraft-bag-xs",
    "name": "Twisted Handle Kraft Bag — XS (6\" × 3\" × 8\")",
    "tagline": "Jewelry, Cosmetics & Counter Gift Bag · 120 GSM Natural Kraft",
    "story": "Engineered from premium 120 GSM unbleached virgin kraft paper, this extra-small twisted handle bag is the benchmark luxury packaging solution for jewelry boutiques, cosmetics, artisanal soaps, and luxury gift counters.\nFeatures reinforced twisted paper cord handles and a solid bottom fold capable of carrying up to 2.5 kg with complete confidence.",
    "function": "Commercial retail packaging for compact luxury items. Compatible with 1 to 4-color flexo and offset custom logo printing, hot foil stamping, and Pantone color matching.",
    "pricePaise": 0,
    "printMinutes": 0,
    "weightGrams": 22,
    "dimensionsMm": {
      "d": 80,
      "h": 200,
      "w": 150
    },
    "edition": null,
    "status": "in_stock",
    "category": "twisted-handle",
    "ageGroup": "all-ages",
    "themes": [
      "Retail",
      "Jewelry",
      "Boutique",
      "Cosmetics"
    ],
    "colorways": [
      "Natural Brown Kraft",
      "Bleached White Kraft"
    ],
    "imageGradient": [
      "#8B5A2B",
      "#D2B48C"
    ],
    "imageUrl": "/paperbags/twisted-handle-kraft-bag.jpg",
    "localImageUrl": "/paperbags/twisted-handle-kraft-bag.jpg",
    "gallery": [
      "/paperbags/twisted-handle-kraft-bag.jpg"
    ],
    "localGallery": [
      "/paperbags/twisted-handle-kraft-bag.jpg"
    ],
    "rating": 5,
    "reviews": 14,
    "createdAt": "2026-10-19",
    "updatedAt": "2026-10-19",
    "freeShipping": true,
    "isPreorder": false,
    "preorderShipBy": null,
    "preorderDaysMin": null,
    "preorderDaysMax": null,
    "customFields": [],
    "seoTitle": "Twisted Handle Kraft Bag XS (6x3x8 in) · QADRI Paper Bags",
    "seoDescription": "Wholesale extra-small twisted handle kraft bags. 120 GSM natural kraft paper for jewelry and cosmetics. Custom logo printing available.",
    "faq": null,
    "categoryType": "frames"
  },
  {
    "id": "pb_twisted_s",
    "slug": "twisted-handle-kraft-bag-s",
    "name": "Twisted Handle Kraft Bag — Small (8\" × 4\" × 11\")",
    "tagline": "Cafe, Books & Boutique Apparel Size · 140 GSM High-Tensile Kraft",
    "story": "The essential small retail bag for boutique apparel, bookstores, gourmet bakeries, and lifestyle concept stores. Crafted with 140 GSM high-tensile kraft paper that resists tearing under load.\nFinished with durable twisted rope handles anchored with internal patch reinforcement.",
    "function": "Standard small retail and takeaway bag. Offers crisp fold lines, high dimensional stability, and dependable load-bearing up to 4 kg.",
    "pricePaise": 0,
    "printMinutes": 0,
    "weightGrams": 34,
    "dimensionsMm": {
      "d": 100,
      "h": 280,
      "w": 200
    },
    "edition": null,
    "status": "in_stock",
    "category": "twisted-handle",
    "ageGroup": "all-ages",
    "themes": [
      "Retail",
      "Apparel",
      "Bakery",
      "Gifts"
    ],
    "colorways": [
      "Natural Brown Kraft",
      "Bleached White Kraft"
    ],
    "imageGradient": [
      "#8B5A2B",
      "#D2B48C"
    ],
    "imageUrl": "/paperbags/twisted-handle-kraft-bag.jpg",
    "localImageUrl": "/paperbags/twisted-handle-kraft-bag.jpg",
    "gallery": [
      "/paperbags/twisted-handle-kraft-bag.jpg"
    ],
    "localGallery": [
      "/paperbags/twisted-handle-kraft-bag.jpg"
    ],
    "rating": 5,
    "reviews": 22,
    "createdAt": "2026-10-19",
    "updatedAt": "2026-10-19",
    "freeShipping": true,
    "isPreorder": false,
    "preorderShipBy": null,
    "preorderDaysMin": null,
    "preorderDaysMax": null,
    "customFields": [],
    "seoTitle": "Twisted Handle Kraft Bag Small (8x4x11 in) · QADRI Paper Bags",
    "seoDescription": "Small twisted handle kraft paper bags for retail boutiques and cafes. 140 GSM virgin kraft with custom branding.",
    "faq": null,
    "categoryType": "frames"
  },
  {
    "id": "pb_twisted_m",
    "slug": "twisted-handle-kraft-bag-m",
    "name": "Twisted Handle Kraft Bag — Medium (10\" × 5\" × 13\")",
    "tagline": "Standard Apparel & Lifestyle Size · 160 GSM Reinforced Kraft",
    "story": "Our most popular multi-purpose retail bag. With a generous 5-inch gusset, this medium carrier comfortably accommodates folded shirts, footwear boxes, lifestyle homeware, and medium gift merchandise.\nManufactured with 160 GSM kraft paper and heavy-gauge twisted cords for a luxurious tactile in-hand experience.",
    "function": "Versatile retail and commercial carrier. Tested for repeated handling and maximum load-bearing up to 6 kg.",
    "pricePaise": 0,
    "printMinutes": 0,
    "weightGrams": 48,
    "dimensionsMm": {
      "d": 120,
      "h": 320,
      "w": 250
    },
    "edition": null,
    "status": "in_stock",
    "category": "twisted-handle",
    "ageGroup": "all-ages",
    "themes": [
      "Fashion",
      "Retail",
      "Lifestyle",
      "Footwear"
    ],
    "colorways": [
      "Natural Brown Kraft",
      "Bleached White Kraft"
    ],
    "imageGradient": [
      "#8B5A2B",
      "#D2B48C"
    ],
    "imageUrl": "/paperbags/twisted-handle-kraft-bag.jpg",
    "localImageUrl": "/paperbags/twisted-handle-kraft-bag.jpg",
    "gallery": [
      "/paperbags/twisted-handle-kraft-bag.jpg"
    ],
    "localGallery": [
      "/paperbags/twisted-handle-kraft-bag.jpg"
    ],
    "rating": 5,
    "reviews": 47,
    "createdAt": "2026-10-19",
    "updatedAt": "2026-10-19",
    "freeShipping": true,
    "isPreorder": false,
    "preorderShipBy": null,
    "preorderDaysMin": null,
    "preorderDaysMax": null,
    "customFields": [],
    "seoTitle": "Twisted Handle Kraft Bag Medium (10x5x13 in) · QADRI Paper Bags",
    "seoDescription": "Medium 160 GSM twisted handle kraft shopping bags. The gold standard for fashion retail and apparel brands.",
    "faq": null,
    "categoryType": "frames"
  },
  {
    "id": "pb_twisted_l",
    "slug": "twisted-handle-kraft-bag-l",
    "name": "Twisted Handle Kraft Bag — Large (12\" × 6\" × 16\")",
    "tagline": "Spacious Department Store Carrier · 180 GSM Heavy Kraft",
    "story": "Designed for substantial volume retail, winter apparel, shoe packaging, and department store transactions. Features an expanded 6-inch gusset and 180 GSM virgin pulp construction.\nReinforced base fold ensures the bag stands upright independently on retail countertops for fast packing.",
    "function": "High-capacity retail packaging with reinforced base and heavy load capacity up to 8 kg.",
    "pricePaise": 0,
    "printMinutes": 0,
    "weightGrams": 68,
    "dimensionsMm": {
      "d": 150,
      "h": 400,
      "w": 300
    },
    "edition": null,
    "status": "in_stock",
    "category": "twisted-handle",
    "ageGroup": "all-ages",
    "themes": [
      "Department Store",
      "Winterwear",
      "Bulk Retail"
    ],
    "colorways": [
      "Natural Brown Kraft",
      "Bleached White Kraft"
    ],
    "imageGradient": [
      "#8B5A2B",
      "#D2B48C"
    ],
    "imageUrl": "/paperbags/twisted-handle-kraft-bag.jpg",
    "localImageUrl": "/paperbags/twisted-handle-kraft-bag.jpg",
    "gallery": [
      "/paperbags/twisted-handle-kraft-bag.jpg"
    ],
    "localGallery": [
      "/paperbags/twisted-handle-kraft-bag.jpg"
    ],
    "rating": 5,
    "reviews": 31,
    "createdAt": "2026-10-19",
    "updatedAt": "2026-10-19",
    "freeShipping": true,
    "isPreorder": false,
    "preorderShipBy": null,
    "preorderDaysMin": null,
    "preorderDaysMax": null,
    "customFields": [],
    "seoTitle": "Twisted Handle Kraft Bag Large (12x6x16 in) · QADRI Paper Bags",
    "seoDescription": "Large 180 GSM heavy-duty kraft shopping bags with twisted handles. Ideal for department stores and winter apparel.",
    "faq": null,
    "categoryType": "frames"
  },
  {
    "id": "pb_twisted_xl",
    "slug": "twisted-handle-kraft-bag-xl",
    "name": "Twisted Handle Kraft Bag — XL (14\" × 7\" × 18\")",
    "tagline": "Outerwear & Multi-Item Retail Bag · 200 GSM Heavy-Duty Kraft",
    "story": "Our heavy-duty extra-large format carrier. Built with premium 200 GSM kraft paper to support multiple outerwear garments, large gift sets, and bulky merchandise.\nComfort-grip twisted paper handles with triple-bonded glue lines ensure total reliability.",
    "function": "Heavyweight commercial packaging for jackets, corporate gift hampers, and bulky retail merchandise up to 10 kg.",
    "pricePaise": 0,
    "printMinutes": 0,
    "weightGrams": 92,
    "dimensionsMm": {
      "d": 180,
      "h": 450,
      "w": 350
    },
    "edition": null,
    "status": "in_stock",
    "category": "twisted-handle",
    "ageGroup": "all-ages",
    "themes": [
      "Outerwear",
      "Hampers",
      "Large Format",
      "Luxury"
    ],
    "colorways": [
      "Natural Brown Kraft",
      "Bleached White Kraft"
    ],
    "imageGradient": [
      "#8B5A2B",
      "#D2B48C"
    ],
    "imageUrl": "/paperbags/twisted-handle-kraft-bag.jpg",
    "localImageUrl": "/paperbags/twisted-handle-kraft-bag.jpg",
    "gallery": [
      "/paperbags/twisted-handle-kraft-bag.jpg"
    ],
    "localGallery": [
      "/paperbags/twisted-handle-kraft-bag.jpg"
    ],
    "rating": 5,
    "reviews": 19,
    "createdAt": "2026-10-19",
    "updatedAt": "2026-10-19",
    "freeShipping": true,
    "isPreorder": false,
    "preorderShipBy": null,
    "preorderDaysMin": null,
    "preorderDaysMax": null,
    "customFields": [],
    "seoTitle": "Twisted Handle Kraft Bag XL (14x7x18 in) · QADRI Paper Bags",
    "seoDescription": "Extra large 200 GSM kraft carrier bags with reinforced twisted handles for luxury hampers and coats.",
    "faq": null,
    "categoryType": "frames"
  },
  {
    "id": "pb_twisted_bottle",
    "slug": "twisted-handle-kraft-bag-bottle",
    "name": "Twisted Handle Kraft Bag — Wine & Bottle (5.5\" × 3.5\" × 15\")",
    "tagline": "Slim Reinforced Bottle & Tall Gift Bag · 180 GSM Rigid Kraft",
    "story": "An elongated vertical silhouette designed specifically for wine bottles, champagne, cold-pressed artisanal oils, and tall vertical gift sets.\nReinforced with a thick base card insert to prevent tilting and ensure stability during transport.",
    "function": "Specialty vertical packaging with rigid bottom reinforcement for bottles and slender luxury gifts.",
    "pricePaise": 0,
    "printMinutes": 0,
    "weightGrams": 38,
    "dimensionsMm": {
      "d": 90,
      "h": 380,
      "w": 140
    },
    "edition": null,
    "status": "in_stock",
    "category": "twisted-handle",
    "ageGroup": "all-ages",
    "themes": [
      "Wine",
      "Beverage",
      "Gourmet",
      "Gifting"
    ],
    "colorways": [
      "Natural Brown Kraft",
      "Bleached White Kraft"
    ],
    "imageGradient": [
      "#8B5A2B",
      "#D2B48C"
    ],
    "imageUrl": "/paperbags/twisted-handle-kraft-bag.jpg",
    "localImageUrl": "/paperbags/twisted-handle-kraft-bag.jpg",
    "gallery": [
      "/paperbags/twisted-handle-kraft-bag.jpg"
    ],
    "localGallery": [
      "/paperbags/twisted-handle-kraft-bag.jpg"
    ],
    "rating": 5,
    "reviews": 26,
    "createdAt": "2026-10-19",
    "updatedAt": "2026-10-19",
    "freeShipping": true,
    "isPreorder": false,
    "preorderShipBy": null,
    "preorderDaysMin": null,
    "preorderDaysMax": null,
    "customFields": [],
    "seoTitle": "Wine & Bottle Twisted Handle Kraft Bag · QADRI Paper Bags",
    "seoDescription": "Custom printed wine bottle kraft paper bags. 180 GSM rigid construction with base reinforcement.",
    "faq": null,
    "categoryType": "frames"
  },
  {
    "id": "pb_flat_xs",
    "slug": "flat-handle-kraft-bag-xs",
    "name": "Flat Handle Kraft Bag — Compact F&B (7\" × 4\" × 9\")",
    "tagline": "Cafe Takeaway & Pastry Size · 100 GSM Grease-Resistant Kraft",
    "story": "Lightweight and eco-friendly flat handle bag tailored for cafes, pastry shops, sandwich kiosks, and single takeaway items.\nFolded flat paper tape handles lay flush inside delivery bags, reducing storage volume and streamlining packing operations.",
    "function": "Foodservice and cafe packaging. Biodegradable, grease-resistant, and 100% recyclable.",
    "pricePaise": 0,
    "printMinutes": 0,
    "weightGrams": 20,
    "dimensionsMm": {
      "d": 100,
      "h": 230,
      "w": 180
    },
    "edition": null,
    "status": "in_stock",
    "category": "flat-handle",
    "ageGroup": "all-ages",
    "themes": [
      "Food & Beverage",
      "Cafe",
      "Bakery",
      "Takeaway"
    ],
    "colorways": [
      "Natural Brown Kraft",
      "Bleached White Kraft"
    ],
    "imageGradient": [
      "#8B5A2B",
      "#D2B48C"
    ],
    "imageUrl": "/paperbags/flat-handle-kraft-bag.jpg",
    "localImageUrl": "/paperbags/flat-handle-kraft-bag.jpg",
    "gallery": [
      "/paperbags/flat-handle-kraft-bag.jpg"
    ],
    "localGallery": [
      "/paperbags/flat-handle-kraft-bag.jpg"
    ],
    "rating": 5,
    "reviews": 18,
    "createdAt": "2026-10-19",
    "updatedAt": "2026-10-19",
    "freeShipping": true,
    "isPreorder": false,
    "preorderShipBy": null,
    "preorderDaysMin": null,
    "preorderDaysMax": null,
    "customFields": [],
    "seoTitle": "Flat Handle Kraft Bag Compact (7x4x9 in) · QADRI Paper Bags",
    "seoDescription": "Compact flat tape handle kraft bags for cafes and takeaways. 100 GSM eco-friendly food packaging.",
    "faq": null,
    "categoryType": "frames"
  },
  {
    "id": "pb_flat_s",
    "slug": "flat-handle-kraft-bag-s",
    "name": "Flat Handle Kraft Bag — Medium Delivery (8.5\" × 4.5\" × 11\")",
    "tagline": "QSR Delivery & Deli Carrier · 120 GSM High-Tensile Kraft",
    "story": "The industry standard for cloud kitchens, delis, and quick-service restaurant delivery orders. Internal flat tape handles are machine-glued with food-safe water-based adhesive for maximum reliability under warm food container loads.",
    "function": "Food delivery and retail carrier. Flat handle design stacks compactly for delivery drivers.",
    "pricePaise": 0,
    "printMinutes": 0,
    "weightGrams": 30,
    "dimensionsMm": {
      "d": 115,
      "h": 280,
      "w": 220
    },
    "edition": null,
    "status": "in_stock",
    "category": "flat-handle",
    "ageGroup": "all-ages",
    "themes": [
      "Delivery",
      "Restaurant",
      "Cloud Kitchen",
      "QSR"
    ],
    "colorways": [
      "Natural Brown Kraft",
      "Bleached White Kraft"
    ],
    "imageGradient": [
      "#8B5A2B",
      "#D2B48C"
    ],
    "imageUrl": "/paperbags/flat-handle-kraft-bag.jpg",
    "localImageUrl": "/paperbags/flat-handle-kraft-bag.jpg",
    "gallery": [
      "/paperbags/flat-handle-kraft-bag.jpg"
    ],
    "localGallery": [
      "/paperbags/flat-handle-kraft-bag.jpg"
    ],
    "rating": 5,
    "reviews": 35,
    "createdAt": "2026-10-19",
    "updatedAt": "2026-10-19",
    "freeShipping": true,
    "isPreorder": false,
    "preorderShipBy": null,
    "preorderDaysMin": null,
    "preorderDaysMax": null,
    "customFields": [],
    "seoTitle": "Flat Handle Kraft Bag Medium (8.5x4.5x11 in) · QADRI Paper Bags",
    "seoDescription": "Food delivery kraft paper bags with internal flat handles. 120 GSM high tensile strength for restaurants.",
    "faq": null,
    "categoryType": "frames"
  },
  {
    "id": "pb_flat_m",
    "slug": "flat-handle-kraft-bag-m",
    "name": "Flat Handle Kraft Bag — Standard Grocery (10\" × 6\" × 12\")",
    "tagline": "Wide-Base Food & Grocery Carrier · 140 GSM Reinforced Kraft",
    "story": "Featuring an expanded 6-inch gusset, this bag allows square food containers and meal trays to sit flat at the bottom without tilting. Ideal for gourmet markets, burger joints, and meal kit services.",
    "function": "Wide-gusset meal container and grocery carrier supporting up to 5 kg.",
    "pricePaise": 0,
    "printMinutes": 0,
    "weightGrams": 44,
    "dimensionsMm": {
      "d": 150,
      "h": 310,
      "w": 260
    },
    "edition": null,
    "status": "in_stock",
    "category": "flat-handle",
    "ageGroup": "all-ages",
    "themes": [
      "Grocery",
      "Meal Kit",
      "Wide Base",
      "Takeaway"
    ],
    "colorways": [
      "Natural Brown Kraft",
      "Bleached White Kraft"
    ],
    "imageGradient": [
      "#8B5A2B",
      "#D2B48C"
    ],
    "imageUrl": "/paperbags/flat-handle-kraft-bag.jpg",
    "localImageUrl": "/paperbags/flat-handle-kraft-bag.jpg",
    "gallery": [
      "/paperbags/flat-handle-kraft-bag.jpg"
    ],
    "localGallery": [
      "/paperbags/flat-handle-kraft-bag.jpg"
    ],
    "rating": 5,
    "reviews": 42,
    "createdAt": "2026-10-19",
    "updatedAt": "2026-10-19",
    "freeShipping": true,
    "isPreorder": false,
    "preorderShipBy": null,
    "preorderDaysMin": null,
    "preorderDaysMax": null,
    "customFields": [],
    "seoTitle": "Flat Handle Kraft Bag Standard (10x6x12 in) · QADRI Paper Bags",
    "seoDescription": "Wide-base flat handle kraft grocery bags. 140 GSM reinforced paper for spill-free food transport.",
    "faq": null,
    "categoryType": "frames"
  },
  {
    "id": "pb_flat_l",
    "slug": "flat-handle-kraft-bag-l",
    "name": "Flat Handle Kraft Bag — Large Catering (12\" × 7\" × 15\")",
    "tagline": "Family Meal & Catering Carrier · 160 GSM Heavy-Duty Kraft",
    "story": "Spacious catering carrier built to hold multiple stacked bento boxes, family meal packages, or gourmet market groceries. Dual reinforced flat paper tape handles provide high carrying comfort.",
    "function": "Catering and bulk F&B carrier engineered for multi-container meal transport up to 7 kg.",
    "pricePaise": 0,
    "printMinutes": 0,
    "weightGrams": 62,
    "dimensionsMm": {
      "d": 175,
      "h": 380,
      "w": 300
    },
    "edition": null,
    "status": "in_stock",
    "category": "flat-handle",
    "ageGroup": "all-ages",
    "themes": [
      "Catering",
      "Family Meals",
      "Bulk F&B"
    ],
    "colorways": [
      "Natural Brown Kraft",
      "Bleached White Kraft"
    ],
    "imageGradient": [
      "#8B5A2B",
      "#D2B48C"
    ],
    "imageUrl": "/paperbags/flat-handle-kraft-bag.jpg",
    "localImageUrl": "/paperbags/flat-handle-kraft-bag.jpg",
    "gallery": [
      "/paperbags/flat-handle-kraft-bag.jpg"
    ],
    "localGallery": [
      "/paperbags/flat-handle-kraft-bag.jpg"
    ],
    "rating": 5,
    "reviews": 29,
    "createdAt": "2026-10-19",
    "updatedAt": "2026-10-19",
    "freeShipping": true,
    "isPreorder": false,
    "preorderShipBy": null,
    "preorderDaysMin": null,
    "preorderDaysMax": null,
    "customFields": [],
    "seoTitle": "Flat Handle Kraft Bag Large (12x7x15 in) · QADRI Paper Bags",
    "seoDescription": "Large catering kraft bags with flat handles. 160 GSM strength for commercial food deliveries.",
    "faq": null,
    "categoryType": "frames"
  },
  {
    "id": "pb_flat_xl",
    "slug": "flat-handle-kraft-bag-xl",
    "name": "Flat Handle Kraft Bag — Jumbo Catering (14\" × 8.5\" × 17\")",
    "tagline": "Heavyweight Multi-Pack Carrier · 180 GSM Kraft",
    "story": "Super jumbo carrier with heavy-duty flat handles and an expansive 8.5-inch flat bottom. Engineered for bulk food delivery, catering platters, and wholesale market supplies.",
    "function": "Extra-capacity F&B carrier for bulk wholesale orders and large catering trays.",
    "pricePaise": 0,
    "printMinutes": 0,
    "weightGrams": 84,
    "dimensionsMm": {
      "d": 215,
      "h": 430,
      "w": 350
    },
    "edition": null,
    "status": "in_stock",
    "category": "flat-handle",
    "ageGroup": "all-ages",
    "themes": [
      "Jumbo",
      "Wholesale",
      "Platter",
      "Heavyweight"
    ],
    "colorways": [
      "Natural Brown Kraft",
      "Bleached White Kraft"
    ],
    "imageGradient": [
      "#8B5A2B",
      "#D2B48C"
    ],
    "imageUrl": "/paperbags/flat-handle-kraft-bag.jpg",
    "localImageUrl": "/paperbags/flat-handle-kraft-bag.jpg",
    "gallery": [
      "/paperbags/flat-handle-kraft-bag.jpg"
    ],
    "localGallery": [
      "/paperbags/flat-handle-kraft-bag.jpg"
    ],
    "rating": 5,
    "reviews": 15,
    "createdAt": "2026-10-19",
    "updatedAt": "2026-10-19",
    "freeShipping": true,
    "isPreorder": false,
    "preorderShipBy": null,
    "preorderDaysMin": null,
    "preorderDaysMax": null,
    "customFields": [],
    "seoTitle": "Flat Handle Kraft Bag Jumbo (14x8.5x17 in) · QADRI Paper Bags",
    "seoDescription": "Super jumbo flat handle kraft bags for catering platters and wholesale deliveries. 180 GSM kraft.",
    "faq": null,
    "categoryType": "frames"
  },
  {
    "id": "pb_flat_square",
    "slug": "flat-handle-kraft-bag-square-cake",
    "name": "Flat Handle Kraft Bag — Square Cake & Platter (11\" × 11\" × 11\")",
    "tagline": "1:1 Square Base Cake Box Carrier · 150 GSM Rigid Kraft",
    "story": "A dedicated square-bottom profile designed specifically for pastry platters, cake boxes, pizza boxes, and circular containers requiring a completely flat base during delivery.",
    "function": "Specialty bakery and cake box carrier preventing box tilt or icing damage.",
    "pricePaise": 0,
    "printMinutes": 0,
    "weightGrams": 58,
    "dimensionsMm": {
      "d": 280,
      "h": 280,
      "w": 280
    },
    "edition": null,
    "status": "in_stock",
    "category": "flat-handle",
    "ageGroup": "all-ages",
    "themes": [
      "Bakery",
      "Cake Box",
      "Square Base",
      "Pastry"
    ],
    "colorways": [
      "Natural Brown Kraft",
      "Bleached White Kraft"
    ],
    "imageGradient": [
      "#8B5A2B",
      "#D2B48C"
    ],
    "imageUrl": "/paperbags/flat-handle-kraft-bag.jpg",
    "localImageUrl": "/paperbags/flat-handle-kraft-bag.jpg",
    "gallery": [
      "/paperbags/flat-handle-kraft-bag.jpg"
    ],
    "localGallery": [
      "/paperbags/flat-handle-kraft-bag.jpg"
    ],
    "rating": 5,
    "reviews": 28,
    "createdAt": "2026-10-19",
    "updatedAt": "2026-10-19",
    "freeShipping": true,
    "isPreorder": false,
    "preorderShipBy": null,
    "preorderDaysMin": null,
    "preorderDaysMax": null,
    "customFields": [],
    "seoTitle": "Square Cake Box Flat Handle Kraft Bag (11x11x11 in) · QADRI",
    "seoDescription": "Square flat-bottom kraft paper bags for 8-inch and 10-inch cake boxes. Prevents tilting during bakery transit.",
    "faq": null,
    "categoryType": "frames"
  },
  {
    "id": "pb_block_05kg",
    "slug": "handleless-block-bottom-bag-05kg",
    "name": "Handleless Block Bottom Bag — 0.5 kg (4\" × 2.5\" × 8\")",
    "tagline": "Apothecary, Tea & Spice Size · 70 GSM Food-Safe Virgin Kraft",
    "story": "Compact block bottom grocery bag designed for tea leaves, freshly roasted coffee beans, dry spices, confectionery, and small pharmacy dispensaries. Self-standing block bottom ensures rapid counter packing.",
    "function": "Counter-service food-grade pouch. Top folds down easily for clip, tape, or sticker sealing.",
    "pricePaise": 0,
    "printMinutes": 0,
    "weightGrams": 8,
    "dimensionsMm": {
      "d": 60,
      "h": 200,
      "w": 100
    },
    "edition": null,
    "status": "in_stock",
    "category": "handleless",
    "ageGroup": "all-ages",
    "themes": [
      "Apothecary",
      "Coffee",
      "Tea",
      "Spices"
    ],
    "colorways": [
      "Natural Brown Kraft",
      "Bleached White Kraft"
    ],
    "imageGradient": [
      "#8B5A2B",
      "#D2B48C"
    ],
    "imageUrl": "/paperbags/handleless-block-bottom-bag.jpg",
    "localImageUrl": "/paperbags/handleless-block-bottom-bag.jpg",
    "gallery": [
      "/paperbags/handleless-block-bottom-bag.jpg"
    ],
    "localGallery": [
      "/paperbags/handleless-block-bottom-bag.jpg"
    ],
    "rating": 5,
    "reviews": 21,
    "createdAt": "2026-10-19",
    "updatedAt": "2026-10-19",
    "freeShipping": true,
    "isPreorder": false,
    "preorderShipBy": null,
    "preorderDaysMin": null,
    "preorderDaysMax": null,
    "customFields": [],
    "seoTitle": "Handleless Block Bottom Bag 0.5kg (4x2.5x8 in) · QADRI Paper Bags",
    "seoDescription": "Small block bottom kraft paper bags for dry coffee, tea, and confectionery. Food-grade virgin kraft paper.",
    "faq": null,
    "categoryType": "frames"
  },
  {
    "id": "pb_block_1kg",
    "slug": "handleless-block-bottom-bag-1kg",
    "name": "Handleless Block Bottom Bag — 1 kg (5\" × 3.5\" × 10\")",
    "tagline": "Artisan Bakery Loaf & Coffee Pouch · 80 GSM Breathable Kraft",
    "story": "The classic bakery counter bag. Breathable natural virgin kraft maintains bread crust crispness and freshness while offering an authentic rustic look for artisan sourdoughs, cookies, and dry beans.",
    "function": "Bakery and dry food packing sack with high burst resistance.",
    "pricePaise": 0,
    "printMinutes": 0,
    "weightGrams": 14,
    "dimensionsMm": {
      "d": 90,
      "h": 250,
      "w": 130
    },
    "edition": null,
    "status": "in_stock",
    "category": "handleless",
    "ageGroup": "all-ages",
    "themes": [
      "Bakery",
      "Sourdough",
      "Cookies",
      "Dry Beans"
    ],
    "colorways": [
      "Natural Brown Kraft",
      "Bleached White Kraft"
    ],
    "imageGradient": [
      "#8B5A2B",
      "#D2B48C"
    ],
    "imageUrl": "/paperbags/handleless-block-bottom-bag.jpg",
    "localImageUrl": "/paperbags/handleless-block-bottom-bag.jpg",
    "gallery": [
      "/paperbags/handleless-block-bottom-bag.jpg"
    ],
    "localGallery": [
      "/paperbags/handleless-block-bottom-bag.jpg"
    ],
    "rating": 5,
    "reviews": 38,
    "createdAt": "2026-10-19",
    "updatedAt": "2026-10-19",
    "freeShipping": true,
    "isPreorder": false,
    "preorderShipBy": null,
    "preorderDaysMin": null,
    "preorderDaysMax": null,
    "customFields": [],
    "seoTitle": "Handleless Block Bottom Bag 1kg (5x3.5x10 in) · QADRI Paper Bags",
    "seoDescription": "1 kg block bottom kraft bags for artisan bakeries and coffee roasters. Breathable natural virgin kraft.",
    "faq": null,
    "categoryType": "frames"
  },
  {
    "id": "pb_block_2kg",
    "slug": "handleless-block-bottom-bag-2kg",
    "name": "Handleless Block Bottom Bag — 2 kg (6\" × 4\" × 12\")",
    "tagline": "Classic Grocery & Produce Sack · 90 GSM Tear-Resistant Kraft",
    "story": "Traditional grocery counter sack with flat standing base for fast packing of pulses, organic grains, dry groceries, and farm-fresh produce. Automatic self-opening sack (SOS) design pop-opens in one hand.",
    "function": "Eco-safe grocery and farm produce sack replacing single-use plastic bags.",
    "pricePaise": 0,
    "printMinutes": 0,
    "weightGrams": 22,
    "dimensionsMm": {
      "d": 100,
      "h": 300,
      "w": 150
    },
    "edition": null,
    "status": "in_stock",
    "category": "handleless",
    "ageGroup": "all-ages",
    "themes": [
      "Grocery",
      "Organic Grain",
      "Farm Produce"
    ],
    "colorways": [
      "Natural Brown Kraft",
      "Bleached White Kraft"
    ],
    "imageGradient": [
      "#8B5A2B",
      "#D2B48C"
    ],
    "imageUrl": "/paperbags/handleless-block-bottom-bag.jpg",
    "localImageUrl": "/paperbags/handleless-block-bottom-bag.jpg",
    "gallery": [
      "/paperbags/handleless-block-bottom-bag.jpg"
    ],
    "localGallery": [
      "/paperbags/handleless-block-bottom-bag.jpg"
    ],
    "rating": 5,
    "reviews": 44,
    "createdAt": "2026-10-19",
    "updatedAt": "2026-10-19",
    "freeShipping": true,
    "isPreorder": false,
    "preorderShipBy": null,
    "preorderDaysMin": null,
    "preorderDaysMax": null,
    "customFields": [],
    "seoTitle": "Handleless Block Bottom Bag 2kg (6x4x12 in) · QADRI Paper Bags",
    "seoDescription": "2 kg self-opening block bottom grocery bags. 90 GSM tear-resistant unbleached kraft paper.",
    "faq": null,
    "categoryType": "frames"
  },
  {
    "id": "pb_block_35kg",
    "slug": "handleless-block-bottom-bag-35kg",
    "name": "Handleless Block Bottom Bag — 3.5 kg (8\" × 5\" × 14\")",
    "tagline": "Fast Food Combo & Dry Provisions · 110 GSM Heavyweight Kraft",
    "story": "High-capacity SOS grocery sack built for burger combos, fries, takeaway meal packaging, and bulk dry provisions. Stands upright automatically for streamlined kitchen assembly lines.",
    "function": "Heavyweight food delivery combo bag and grocery dry goods carrier.",
    "pricePaise": 0,
    "printMinutes": 0,
    "weightGrams": 36,
    "dimensionsMm": {
      "d": 125,
      "h": 360,
      "w": 200
    },
    "edition": null,
    "status": "in_stock",
    "category": "handleless",
    "ageGroup": "all-ages",
    "themes": [
      "Fast Food",
      "Takeaway",
      "Meal Combo",
      "Dry Provisions"
    ],
    "colorways": [
      "Natural Brown Kraft",
      "Bleached White Kraft"
    ],
    "imageGradient": [
      "#8B5A2B",
      "#D2B48C"
    ],
    "imageUrl": "/paperbags/handleless-block-bottom-bag.jpg",
    "localImageUrl": "/paperbags/handleless-block-bottom-bag.jpg",
    "gallery": [
      "/paperbags/handleless-block-bottom-bag.jpg"
    ],
    "localGallery": [
      "/paperbags/handleless-block-bottom-bag.jpg"
    ],
    "rating": 5,
    "reviews": 27,
    "createdAt": "2026-10-19",
    "updatedAt": "2026-10-19",
    "freeShipping": true,
    "isPreorder": false,
    "preorderShipBy": null,
    "preorderDaysMin": null,
    "preorderDaysMax": null,
    "customFields": [],
    "seoTitle": "Handleless Block Bottom Bag 3.5kg (8x5x14 in) · QADRI Paper Bags",
    "seoDescription": "Heavy-duty 110 GSM SOS paper bags for fast-food meal combos and gourmet dry provisions.",
    "faq": null,
    "categoryType": "frames"
  },
  {
    "id": "pb_block_5kg",
    "slug": "handleless-block-bottom-bag-5kg",
    "name": "Handleless Block Bottom Bag — 5 kg (10\" × 6\" × 16\")",
    "tagline": "Supermarket Bulk Packing Sack · 130 GSM Industrial Kraft",
    "story": "Sturdy 5 kg grocery sack with reinforced bottom fold. Engineered for heavy organic flour, pet supplies, bulk farm-to-table groceries, and hardware parts.",
    "function": "Industrial-grade grocery sack supporting heavy granular dry goods up to 5 kg.",
    "pricePaise": 0,
    "printMinutes": 0,
    "weightGrams": 52,
    "dimensionsMm": {
      "d": 150,
      "h": 410,
      "w": 250
    },
    "edition": null,
    "status": "in_stock",
    "category": "handleless",
    "ageGroup": "all-ages",
    "themes": [
      "Supermarket",
      "Heavy Duty",
      "Industrial",
      "Bulk Grocery"
    ],
    "colorways": [
      "Natural Brown Kraft",
      "Bleached White Kraft"
    ],
    "imageGradient": [
      "#8B5A2B",
      "#D2B48C"
    ],
    "imageUrl": "/paperbags/handleless-block-bottom-bag.jpg",
    "localImageUrl": "/paperbags/handleless-block-bottom-bag.jpg",
    "gallery": [
      "/paperbags/handleless-block-bottom-bag.jpg"
    ],
    "localGallery": [
      "/paperbags/handleless-block-bottom-bag.jpg"
    ],
    "rating": 5,
    "reviews": 19,
    "createdAt": "2026-10-19",
    "updatedAt": "2026-10-19",
    "freeShipping": true,
    "isPreorder": false,
    "preorderShipBy": null,
    "preorderDaysMin": null,
    "preorderDaysMax": null,
    "customFields": [],
    "seoTitle": "Handleless Block Bottom Bag 5kg (10x6x16 in) · QADRI Paper Bags",
    "seoDescription": "Supermarket 5 kg block bottom kraft sacks. 130 GSM industrial kraft for grains, flour, and bulk retail.",
    "faq": null,
    "categoryType": "frames"
  },
  {
    "id": "pb_block_baguette",
    "slug": "handleless-block-bottom-bag-baguette",
    "name": "Handleless Block Bottom Bag — Baguette & Scroll (4.5\" × 2\" × 18\")",
    "tagline": "Long French Bread & Art Print Sack · 80 GSM Kraft",
    "story": "An extended slim profile specifically sized for artisan French baguettes, long bakery breads, blueprints, and architectural scroll protection.",
    "function": "Specialty elongated protective sack for baguettes and rolled documents.",
    "pricePaise": 0,
    "printMinutes": 0,
    "weightGrams": 18,
    "dimensionsMm": {
      "d": 50,
      "h": 460,
      "w": 115
    },
    "edition": null,
    "status": "in_stock",
    "category": "handleless",
    "ageGroup": "all-ages",
    "themes": [
      "Bakery",
      "Baguette",
      "Bread",
      "Prints"
    ],
    "colorways": [
      "Natural Brown Kraft",
      "Bleached White Kraft"
    ],
    "imageGradient": [
      "#8B5A2B",
      "#D2B48C"
    ],
    "imageUrl": "/paperbags/handleless-block-bottom-bag.jpg",
    "localImageUrl": "/paperbags/handleless-block-bottom-bag.jpg",
    "gallery": [
      "/paperbags/handleless-block-bottom-bag.jpg"
    ],
    "localGallery": [
      "/paperbags/handleless-block-bottom-bag.jpg"
    ],
    "rating": 5,
    "reviews": 16,
    "createdAt": "2026-10-19",
    "updatedAt": "2026-10-19",
    "freeShipping": true,
    "isPreorder": false,
    "preorderShipBy": null,
    "preorderDaysMin": null,
    "preorderDaysMax": null,
    "customFields": [],
    "seoTitle": "Baguette & Scroll Block Bottom Paper Bag · QADRI Paper Bags",
    "seoDescription": "Slim elongated kraft paper bags for French baguettes, bread rolls, and architectural drawings.",
    "faq": null,
    "categoryType": "frames"
  },
  {
    "id": "pb_custom_bespoke",
    "slug": "customise-your-bag-completely",
    "name": "Customise Your Bag Completely (Bespoke Sizing & Print)",
    "tagline": "Any Custom Size · 100–350 GSM · Twisted, Flat, Ribbon or Die-Cut Handles · Full Pantone Branding",
    "story": "Total packaging freedom for enterprise retail chains, corporate gifting, and luxury fashion brands.\nSpecify your exact width, gusset, and height dimensions down to the millimeter. Choose from unbleached virgin brown kraft, bleached white kraft, or luxury coated art board (100–350 GSM). Select from twisted paper cord, flat tape, woven cotton herringbone tape, satin ribbon, or die-cut handles.\nAdd spot UV, gold/silver foil deboss, matte/gloss lamination, and full-coverage 6-color flexographic or offset Pantone printing.",
    "function": "Bespoke enterprise paper packaging program. Digital proofs provided within 24 hours, physical pre-production samples available for large corporate contracts.",
    "pricePaise": 0,
    "printMinutes": 0,
    "weightGrams": 60,
    "dimensionsMm": {
      "d": 120,
      "h": 350,
      "w": 250
    },
    "edition": null,
    "status": "in_stock",
    "category": "customise-completely",
    "ageGroup": "all-ages",
    "themes": [
      "Custom Packaging",
      "Bespoke Branding",
      "Enterprise",
      "Pantone"
    ],
    "colorways": [
      "Custom Virgin Kraft",
      "Bleached White Kraft",
      "Custom Coated Art Board"
    ],
    "imageGradient": [
      "#8B5A2B",
      "#D2B48C"
    ],
    "imageUrl": "/paperbags/twisted-handle-kraft-bag.jpg",
    "localImageUrl": "/paperbags/twisted-handle-kraft-bag.jpg",
    "gallery": [
      "/paperbags/twisted-handle-kraft-bag.jpg",
      "/paperbags/flat-handle-kraft-bag.jpg",
      "/paperbags/handleless-block-bottom-bag.jpg"
    ],
    "localGallery": [
      "/paperbags/twisted-handle-kraft-bag.jpg",
      "/paperbags/flat-handle-kraft-bag.jpg",
      "/paperbags/handleless-block-bottom-bag.jpg"
    ],
    "rating": 5,
    "reviews": 50,
    "createdAt": "2026-10-19",
    "updatedAt": "2026-10-19",
    "freeShipping": true,
    "isPreorder": false,
    "preorderShipBy": null,
    "preorderDaysMin": null,
    "preorderDaysMax": null,
    "customFields": [],
    "seoTitle": "Customise Your Bag Completely · Bespoke B2B Paper Bags · QADRI",
    "seoDescription": "Custom manufactured paper bags to your exact dimensions, paper GSM, handle style, and multi-color logo printing. Direct factory pricing.",
    "faq": null,
    "categoryType": "frames"
  },
  {
    "id": "p_rug_001",
    "slug": "kanagawa-swell-wool-area-rug",
    "name": "The Kanagawa Swell Wool Area Rug",
    "tagline": "Tidal Grandeur Captured in Sculpted Wool",
    "story": "Inspired by classical ukiyo-e marine woodblocks, The Kanagawa Swell translates the raw dynamic power of oceanic crests into an opulent textile canvas. Swirling ribbons of deep indigo, sapphire, and cerulean surge beneath hand-carved frothing crests of pure unbleached wool. This commanding piece infuses executive living spaces and modern coastal retreats with poetic movement and elemental drama.",
    "function": "Hand-tufted using 100% fine New Zealand virgin wool with multi-level loop and cut pile carving (16–22mm pile depth) to create tactile wave crests. Backed with heavy vulcanized organic latex and double-weave cotton canvas for slip-resistant dimensional stability. Perfectly curated for luxury seaside villas, penthouse salons, and executive lounge suites.",
    "pricePaise": 0,
    "compareAtPaise": 0,
    "printMinutes": 0,
    "weightGrams": 8500,
    "dimensionsMm": {
      "w": 1800,
      "h": 2400,
      "d": 22
    },
    "edition": "Artisan Handcrafted",
    "status": "active",
    "category": "deskmate",
    "ageGroup": "All interiors",
    "themes": [
      "Oceanic",
      "Japanese Minimalist",
      "Ukiyo-e",
      "Nautical Luxury",
      "Artisan Carved"
    ],
    "colorways": [
      "Ocean Indigo",
      "Cerulean Blue",
      "Seafoam White",
      "Cobalt"
    ],
    "imageGradient": [
      "#1E293B",
      "#0F172A"
    ],
    "imageUrl": "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.55.54%20AM%20(1).jpeg",
    "localImageUrl": "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.55.54%20AM%20(1).jpeg",
    "gallery": [
      "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.55.54%20AM%20(1).jpeg"
    ],
    "localGallery": [
      "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.55.54%20AM%20(1).jpeg"
    ],
    "rating": 5,
    "reviews": 8,
    "createdAt": "2026-10-17",
    "updatedAt": "2026-10-19",
    "freeShipping": true,
    "isPreorder": false,
    "preorderShipBy": null,
    "preorderDaysMin": null,
    "preorderDaysMax": null,
    "customFields": [],
    "seoTitle": "The Kanagawa Swell Wool Area Rug · QADRI Rugs",
    "seoDescription": "Inspired by classical ukiyo-e marine woodblocks, The Kanagawa Swell translates the raw dynamic power of oceanic crests into an opulent textile canvas. Swirling ",
    "faq": null,
    "categoryType": "shop"
  },
  {
    "id": "p_rug_002",
    "slug": "solara-seventies-floral-bloom-rug",
    "name": "Solara Seventies Floral Bloom Rug",
    "tagline": "Mid-Century Nostalgia in Radiating Botanicals",
    "story": "Solara captures the exuberant spirit of the 1970s aesthetic movement with an intricate silhouette of radiating petals and hypnotic spiral filigree. Rich terracotta and burnt orange tones harmonize with espresso and cream accents to form a magnetic central mandala. It brings a warm, bohemian gravitas to design-forward sitting rooms and eclectic boutique hotels.",
    "function": "Expertly custom-tufted with high-density semi-worsted wool yarn featuring precision bevelled contours that define each swirling petal. Pile depth of 18mm provides luxurious underfoot cushioning, secured with an anti-fray woven secondary scrim and natural rubber backing. Ideal for mid-century modern reading nooks, salon foyers, and bespoke hotel lobbies.",
    "pricePaise": 0,
    "compareAtPaise": 0,
    "printMinutes": 0,
    "weightGrams": 7200,
    "dimensionsMm": {
      "w": 1800,
      "h": 1800,
      "d": 20
    },
    "edition": "Artisan Handcrafted",
    "status": "active",
    "category": "cafe",
    "ageGroup": "All interiors",
    "themes": [
      "Retro 70s",
      "Bohemian Luxury",
      "Mandala",
      "Botanical Art",
      "Sculpted Floral"
    ],
    "colorways": [
      "Burnt Terracotta",
      "Warm Ochre",
      "Mocha Espresso",
      "Ivory Cream",
      "Midnight"
    ],
    "imageGradient": [
      "#1E293B",
      "#0F172A"
    ],
    "imageUrl": "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.55.54%20AM%20(2).jpeg",
    "localImageUrl": "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.55.54%20AM%20(2).jpeg",
    "gallery": [
      "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.55.54%20AM%20(2).jpeg"
    ],
    "localGallery": [
      "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.55.54%20AM%20(2).jpeg"
    ],
    "rating": 5,
    "reviews": 9,
    "createdAt": "2026-10-17",
    "updatedAt": "2026-10-19",
    "freeShipping": true,
    "isPreorder": false,
    "preorderShipBy": null,
    "preorderDaysMin": null,
    "preorderDaysMax": null,
    "customFields": [],
    "seoTitle": "Solara Seventies Floral Bloom Rug · QADRI Rugs",
    "seoDescription": "Solara captures the exuberant spirit of the 1970s aesthetic movement with an intricate silhouette of radiating petals and hypnotic spiral filigree. Rich terraco",
    "faq": null,
    "categoryType": "shop"
  },
  {
    "id": "p_rug_003",
    "slug": "loiseau-celeste-swallow-statement-rug",
    "name": "L'Oiseau Céleste Swallow Statement Rug",
    "tagline": "Graceful Flight Across Tactile Azure Skies",
    "story": "Embodying freedom, aspiration, and timeless elegance, L'Oiseau Céleste depicts a magnificent swallow gliding effortlessly amidst soft billowy cloud formations. Crafted in a bespoke sculpted silhouette, nuanced shades of cornflower, lapis, and slate blue are articulated through meticulous directional tufting. This poetic statement piece transforms floors and gallery walls alike into an ethereal avian sanctuary.",
    "function": "Handcrafted with premium flat-tufted wool blend combined with raised 18mm cut-pile cloud accents for tactile dimension. Finished with reinforced hand-serged borders following the custom bird perimeter, mounted on non-slip cotton duck backing. Suited for master suites, luxury nursery sanctuaries, and private design studios.",
    "pricePaise": 0,
    "compareAtPaise": 0,
    "printMinutes": 0,
    "weightGrams": 6400,
    "dimensionsMm": {
      "w": 1500,
      "h": 1900,
      "d": 18
    },
    "edition": "Artisan Handcrafted",
    "status": "active",
    "category": "cafe",
    "ageGroup": "All interiors",
    "themes": [
      "Avian",
      "Sky & Clouds",
      "Sculpted Silhouette",
      "Poetic Minimalist",
      "Artistic Tufted"
    ],
    "colorways": [
      "Azure Blue",
      "Cornflower",
      "Navy Blue",
      "Cloud White"
    ],
    "imageGradient": [
      "#1E293B",
      "#0F172A"
    ],
    "imageUrl": "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.55.54%20AM.jpeg",
    "localImageUrl": "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.55.54%20AM.jpeg",
    "gallery": [
      "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.55.54%20AM.jpeg"
    ],
    "localGallery": [
      "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.55.54%20AM.jpeg"
    ],
    "rating": 5,
    "reviews": 10,
    "createdAt": "2026-10-17",
    "updatedAt": "2026-10-19",
    "freeShipping": true,
    "isPreorder": false,
    "preorderShipBy": null,
    "preorderDaysMin": null,
    "preorderDaysMax": null,
    "customFields": [],
    "seoTitle": "L'Oiseau Céleste Swallow Statement Rug · QADRI Rugs",
    "seoDescription": "Embodying freedom, aspiration, and timeless elegance, L'Oiseau Céleste depicts a magnificent swallow gliding effortlessly amidst soft billowy cloud formations. ",
    "faq": null,
    "categoryType": "shop"
  },
  {
    "id": "p_rug_004",
    "slug": "le-grand-panda-monolith-tapestry",
    "name": "Le Grand Panda Monolith Wall & Floor Tapestry",
    "tagline": "Monumental Playfulness Reimagined with Modern Soul",
    "story": "Le Grand Panda bridges contemporary surrealism and heartwarming character design through a monumental, wall-spanning silhouette. Alternating undulating ribbons of velvet black and alabaster fleece contour across the torso, evoking op-art sensibilities within an adorable animal form. Conceived as both a tactile floor statement and an avant-garde wall installation for curated interiors.",
    "function": "Tufted with ultra-dense micro-spun wool and bamboo silk highlights (22mm plush pile), delivering an irresistibly soft, cloud-like hand. Supported by an integrated reinforced hanging-loop border and flexible dual-layer non-marking backing suitable for vertical exhibition or floor lounging. Tailored for penthouse play suites, contemporary art collectors, and luxury family lounges.",
    "pricePaise": 0,
    "compareAtPaise": 0,
    "printMinutes": 0,
    "weightGrams": 8900,
    "dimensionsMm": {
      "w": 1800,
      "h": 2300,
      "d": 24
    },
    "edition": "Artisan Handcrafted",
    "status": "active",
    "category": "cafe",
    "ageGroup": "All interiors",
    "themes": [
      "Contemporary Pop",
      "Wildlife Modern",
      "Sculptural Silhouette",
      "Op-Art",
      "Playful Luxury"
    ],
    "colorways": [
      "Obsidian Black",
      "Alabaster White",
      "Charcoal Grey"
    ],
    "imageGradient": [
      "#1E293B",
      "#0F172A"
    ],
    "imageUrl": "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.55.55%20AM%20(1).jpeg",
    "localImageUrl": "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.55.55%20AM%20(1).jpeg",
    "gallery": [
      "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.55.55%20AM%20(1).jpeg"
    ],
    "localGallery": [
      "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.55.55%20AM%20(1).jpeg"
    ],
    "rating": 5,
    "reviews": 11,
    "createdAt": "2026-10-17",
    "updatedAt": "2026-10-19",
    "freeShipping": true,
    "isPreorder": false,
    "preorderShipBy": null,
    "preorderDaysMin": null,
    "preorderDaysMax": null,
    "customFields": [],
    "seoTitle": "Le Grand Panda Monolith Wall & Floor Tapestry · QADRI Rugs",
    "seoDescription": "Le Grand Panda bridges contemporary surrealism and heartwarming character design through a monumental, wall-spanning silhouette. Alternating undulating ribbons ",
    "faq": null,
    "categoryType": "shop"
  },
  {
    "id": "p_rug_005",
    "slug": "melancholia-psyche-optical-portrait-rug",
    "name": "Melancholia Psyche Optical Portrait Rug",
    "tagline": "Dramatically Hypnotic Emotion Rendered in Op-Art",
    "story": "Melancholia Psyche explores the emotional resonance of modern figurative art through an electrifying op-art aesthetic. Concentric ripples of ink-black and pearl-cream ripple outward from closed weeping eyes and dripping lips, creating a mesmerizing optical illusion. It serves as an unforgettable, theatrical conversation piece for collectors of bold contemporary pop and surrealism.",
    "function": "Precision hand-tufted with high-twist New Zealand wool utilizing knife-edge hand carving between every contrasting contour line. Features a substantial 20mm uniform pile height that dampens acoustic reverberation while providing decadent footfeel. Complete with anti-skid latex backing and bespoke perimeter binding. Ideal for high-end boutique dressing rooms, creative agency lounges, and modern art salons.",
    "pricePaise": 0,
    "compareAtPaise": 0,
    "printMinutes": 0,
    "weightGrams": 6800,
    "dimensionsMm": {
      "w": 1700,
      "h": 1700,
      "d": 20
    },
    "edition": "Artisan Handcrafted",
    "status": "active",
    "category": "cafe",
    "ageGroup": "All interiors",
    "themes": [
      "Pop Art",
      "Surrealism",
      "Op-Art",
      "Figurative Art",
      "Monochrome Statement"
    ],
    "colorways": [
      "Obsidian Black",
      "Cream Pearl",
      "Ivory"
    ],
    "imageGradient": [
      "#1E293B",
      "#0F172A"
    ],
    "imageUrl": "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.55.55%20AM%20(2).jpeg",
    "localImageUrl": "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.55.55%20AM%20(2).jpeg",
    "gallery": [
      "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.55.55%20AM%20(2).jpeg"
    ],
    "localGallery": [
      "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.55.55%20AM%20(2).jpeg"
    ],
    "rating": 5,
    "reviews": 12,
    "createdAt": "2026-10-17",
    "updatedAt": "2026-10-19",
    "freeShipping": true,
    "isPreorder": false,
    "preorderShipBy": null,
    "preorderDaysMin": null,
    "preorderDaysMax": null,
    "customFields": [],
    "seoTitle": "Melancholia Psyche Optical Portrait Rug · QADRI Rugs",
    "seoDescription": "Melancholia Psyche explores the emotional resonance of modern figurative art through an electrifying op-art aesthetic. Concentric ripples of ink-black and pearl",
    "faq": null,
    "categoryType": "shop"
  },
  {
    "id": "p_rug_006",
    "slug": "cirrus-frame-sculpted-cloud-mirror-tapestry",
    "name": "Cirrus Frame Sculpted Cloud Mirror Tapestry",
    "tagline": "Floating Architecture for Curated Wall Sanctuaries",
    "story": "Borrowing from atmospheric cloudscapes, Cirrus frames reflection in an embrace of sumptuous tufted monochrome wool. The dual-tiered cloud silhouette features a velvety black outer rim enclosing an ivory bouclé perimeter that hugs custom mirrored contours. It redefines traditional wall décor into a tactile sculptural focal point that brings celestial serenity indoors.",
    "function": "Crafted with hand-tufted dual-density wool bouclé and velvety cut-pile borders (24mm thickness) engineered to encase bespoke glass installations or mount flush. Backed with rigid acoustic backing board and reinforced wall-anchor fastenings, adaptable as a standalone floor cloud accent. Perfect for luxury boutique hotel bedrooms, bridal dressing suites, and high-fashion ateliers.",
    "pricePaise": 0,
    "compareAtPaise": 0,
    "printMinutes": 0,
    "weightGrams": 7800,
    "dimensionsMm": {
      "w": 1900,
      "h": 1200,
      "d": 26
    },
    "edition": "Artisan Handcrafted",
    "status": "active",
    "category": "cafe",
    "ageGroup": "All interiors",
    "themes": [
      "Celestial",
      "Sculptural Mirror Frame",
      "Monochrome Chic",
      "Organic Cloud",
      "Bespoke Wall Art"
    ],
    "colorways": [
      "Onyx Black",
      "Ivory Bouclé",
      "Warm Linen"
    ],
    "imageGradient": [
      "#1E293B",
      "#0F172A"
    ],
    "imageUrl": "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.55.55%20AM.jpeg",
    "localImageUrl": "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.55.55%20AM.jpeg",
    "gallery": [
      "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.55.55%20AM.jpeg"
    ],
    "localGallery": [
      "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.55.55%20AM.jpeg"
    ],
    "rating": 5,
    "reviews": 13,
    "createdAt": "2026-10-17",
    "updatedAt": "2026-10-19",
    "freeShipping": true,
    "isPreorder": false,
    "preorderShipBy": null,
    "preorderDaysMin": null,
    "preorderDaysMax": null,
    "customFields": [],
    "seoTitle": "Cirrus Frame Sculpted Cloud Mirror Tapestry · QADRI Rugs",
    "seoDescription": "Borrowing from atmospheric cloudscapes, Cirrus frames reflection in an embrace of sumptuous tufted monochrome wool. The dual-tiered cloud silhouette features a ",
    "faq": null,
    "categoryType": "shop"
  },
  {
    "id": "p_rug_007",
    "slug": "english-alba-blooming-rose-silhouette-rug",
    "name": "English Alba Blooming Rose Silhouette Rug",
    "tagline": "Grand Botanical Splendor in Sculpted Petals",
    "story": "English Alba honors the timeless romance of classical English garden heritage with an oversized blossoming rose silhouette. Concentric ruffled petals in cream-white velvet wool are defined by hand-beveled mustard and ochre shadows that lend lifelike three-dimensional depth. This statement rug transforms any master salon into a tranquil botanical sanctuary.",
    "function": "Sculpted by master artisans using premium 100% semi-worsted wool featuring high-low relief tufting (16mm to 22mm variations). Finished with delicate hand-carved petal incisions and organic non-toxic latex backing reinforced with woven cotton canvas. Perfect for luxury master bedrooms, sun-drenched garden conservatories, and bridal salon lounges.",
    "pricePaise": 0,
    "compareAtPaise": 0,
    "printMinutes": 0,
    "weightGrams": 7600,
    "dimensionsMm": {
      "w": 1800,
      "h": 1800,
      "d": 22
    },
    "edition": "Artisan Handcrafted",
    "status": "active",
    "category": "deskmate",
    "ageGroup": "All interiors",
    "themes": [
      "Botanical Grandeur",
      "English Garden",
      "Sculpted Floral",
      "Organic Silhouette",
      "Romantic Luxury"
    ],
    "colorways": [
      "Alba Cream",
      "Warm Ochre",
      "Caramel Beige",
      "Soft Biscuit"
    ],
    "imageGradient": [
      "#1E293B",
      "#0F172A"
    ],
    "imageUrl": "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.55.56%20AM%20(1).jpeg",
    "localImageUrl": "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.55.56%20AM%20(1).jpeg",
    "gallery": [
      "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.55.56%20AM%20(1).jpeg"
    ],
    "localGallery": [
      "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.55.56%20AM%20(1).jpeg"
    ],
    "rating": 5,
    "reviews": 14,
    "createdAt": "2026-10-17",
    "updatedAt": "2026-10-19",
    "freeShipping": true,
    "isPreorder": false,
    "preorderShipBy": null,
    "preorderDaysMin": null,
    "preorderDaysMax": null,
    "customFields": [],
    "seoTitle": "English Alba Blooming Rose Silhouette Rug · QADRI Rugs",
    "seoDescription": "English Alba honors the timeless romance of classical English garden heritage with an oversized blossoming rose silhouette. Concentric ruffled petals in cream-w",
    "faq": null,
    "categoryType": "shop"
  },
  {
    "id": "p_rug_008",
    "slug": "starlight-reverie-cosmic-hearts-rug",
    "name": "Starlight Reverie Cosmic Hearts Rug",
    "tagline": "Galactic Romance Captured in Luminous Tufting",
    "story": "Starlight Reverie channels the playful opulence of celestial fantasy and neo-romanticism across a pitch-black midnight cosmos. Whimsical ribbons of pastel bubblegum pink drift among glowing hearts, multifaceted stars, and constellations of pearl stardust. It infuses youthful vivacity, contemporary charm, and high fashion into creative luxury spaces.",
    "function": "Tufted with lustrous New Zealand wool and silky bamboo viscose in deep 20mm cut pile, creating shimmer across the pink celestial bodies. Backed by durable recycled natural cotton canvas with non-slip organic latex coating for longevity and grip. Perfectly suited for high-fashion dressing salons, teenage suites, and vibrant contemporary studios.",
    "pricePaise": 0,
    "compareAtPaise": 0,
    "printMinutes": 0,
    "weightGrams": 6900,
    "dimensionsMm": {
      "w": 1750,
      "h": 1650,
      "d": 20
    },
    "edition": "Artisan Handcrafted",
    "status": "active",
    "category": "cafe",
    "ageGroup": "All interiors",
    "themes": [
      "Cosmic Romance",
      "Y2K Glamour",
      "Celestial",
      "Contemporary Pop",
      "Playful Chic"
    ],
    "colorways": [
      "Midnight Black",
      "Bubblegum Pink",
      "Soft Blush",
      "Pearl White"
    ],
    "imageGradient": [
      "#1E293B",
      "#0F172A"
    ],
    "imageUrl": "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.55.56%20AM%20(2).jpeg",
    "localImageUrl": "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.55.56%20AM%20(2).jpeg",
    "gallery": [
      "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.55.56%20AM%20(2).jpeg"
    ],
    "localGallery": [
      "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.55.56%20AM%20(2).jpeg"
    ],
    "rating": 5,
    "reviews": 15,
    "createdAt": "2026-10-17",
    "updatedAt": "2026-10-19",
    "freeShipping": true,
    "isPreorder": false,
    "preorderShipBy": null,
    "preorderDaysMin": null,
    "preorderDaysMax": null,
    "customFields": [],
    "seoTitle": "Starlight Reverie Cosmic Hearts Rug · QADRI Rugs",
    "seoDescription": "Starlight Reverie channels the playful opulence of celestial fantasy and neo-romanticism across a pitch-black midnight cosmos. Whimsical ribbons of pastel bubbl",
    "faq": null,
    "categoryType": "shop"
  },
  {
    "id": "p_rug_009",
    "slug": "coeur-baroque-fuchsia-filigree-rug",
    "name": "Coeur Baroque Fuchsia & Filigree Rug",
    "tagline": "Passionate Baroque Flourishes in Vivid Magenta",
    "story": "A dramatic ode to romantic grandeur, Coeur Baroque fuses opulent royal ornamentation with contemporary electric color. Striking ebony arabesques and Rococo flourishes coil rhythmically across a vibrant fuchsia wool field, cradling floating ivory hearts. This sculptural heart brings passionate theatrical energy to luxury dressing suites and romantic retreats.",
    "function": "Artisanal tufted construction utilizing lustrous high-twist spun wool with 18mm pile depth and deep hand-sheared contour carving along every black tendril. Backed by heavy woven jute-cotton secondary backing with anti-skid grip. Crafted for luxury walk-in dressing boudoirs, boutique hotel suites, and executive private lounges.",
    "pricePaise": 0,
    "compareAtPaise": 0,
    "printMinutes": 0,
    "weightGrams": 7100,
    "dimensionsMm": {
      "w": 1800,
      "h": 1700,
      "d": 18
    },
    "edition": "Artisan Handcrafted",
    "status": "active",
    "category": "cafe",
    "ageGroup": "All interiors",
    "themes": [
      "Baroque Romance",
      "Rococo Filigree",
      "Heart Silhouette",
      "Vibrant Luxury",
      "Theatrical Glamour"
    ],
    "colorways": [
      "Electric Fuchsia",
      "Obsidian Black",
      "Pearl Ivory"
    ],
    "imageGradient": [
      "#1E293B",
      "#0F172A"
    ],
    "imageUrl": "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.55.56%20AM.jpeg",
    "localImageUrl": "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.55.56%20AM.jpeg",
    "gallery": [
      "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.55.56%20AM.jpeg"
    ],
    "localGallery": [
      "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.55.56%20AM.jpeg"
    ],
    "rating": 5,
    "reviews": 16,
    "createdAt": "2026-10-17",
    "updatedAt": "2026-10-19",
    "freeShipping": true,
    "isPreorder": false,
    "preorderShipBy": null,
    "preorderDaysMin": null,
    "preorderDaysMax": null,
    "customFields": [],
    "seoTitle": "Coeur Baroque Fuchsia & Filigree Rug · QADRI Rugs",
    "seoDescription": "A dramatic ode to romantic grandeur, Coeur Baroque fuses opulent royal ornamentation with contemporary electric color. Striking ebony arabesques and Rococo flou",
    "faq": null,
    "categoryType": "shop"
  },
  {
    "id": "p_rug_010",
    "slug": "nocturne-petite-pastel-owl-rug",
    "name": "Nocturne Petite Pastel Owl Silhouette Rug",
    "tagline": "Gentle Nighttime Whimsy in Velvety Wool",
    "story": "Designed to evoke tender nighttime lullabies and gentle forest tales, Nocturne Petite portrays an enchanting baby owl in serene silhouette. A palette of powdery rose pink, alabaster white, and amber gold creates a soothing, comforting nursery centerpiece. Its generous, pillow-soft texture welcomes gentle morning steps and quiet moments of childhood wonder.",
    "function": "Crafted with cloud-soft micro-tufted wool blend in an ultra-plush dense pile with sculpted micro-grooving along the wings and facial features. Features hypoallergenic, eco-certified dyes and reinforced soft-felt backing safe for hardwood floors. An exquisite addition to heirloom nurseries, children's reading nooks, and cozy luxury family dens.",
    "pricePaise": 0,
    "compareAtPaise": 0,
    "printMinutes": 0,
    "weightGrams": 6100,
    "dimensionsMm": {
      "w": 1400,
      "h": 1600,
      "d": 24
    },
    "edition": "Artisan Handcrafted",
    "status": "active",
    "category": "cafe",
    "ageGroup": "All interiors",
    "themes": [
      "Children's Luxury",
      "Nocturnal Whimsy",
      "Wildlife",
      "Sculpted Silhouette",
      "Pastel Warmth"
    ],
    "colorways": [
      "Powder Rose",
      "Alabaster White",
      "Amber Gold",
      "Charcoal"
    ],
    "imageGradient": [
      "#1E293B",
      "#0F172A"
    ],
    "imageUrl": "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.55.57%20AM%20(1).jpeg",
    "localImageUrl": "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.55.57%20AM%20(1).jpeg",
    "gallery": [
      "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.55.57%20AM%20(1).jpeg"
    ],
    "localGallery": [
      "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.55.57%20AM%20(1).jpeg"
    ],
    "rating": 5,
    "reviews": 17,
    "createdAt": "2026-10-17",
    "updatedAt": "2026-10-19",
    "freeShipping": true,
    "isPreorder": false,
    "preorderShipBy": null,
    "preorderDaysMin": null,
    "preorderDaysMax": null,
    "customFields": [],
    "seoTitle": "Nocturne Petite Pastel Owl Silhouette Rug · QADRI Rugs",
    "seoDescription": "Designed to evoke tender nighttime lullabies and gentle forest tales, Nocturne Petite portrays an enchanting baby owl in serene silhouette. A palette of powdery",
    "faq": null,
    "categoryType": "shop"
  },
  {
    "id": "p_rug_011",
    "slug": "crimson-nocturne-rose-garden-area-rug",
    "name": "Crimson Nocturne Rose Garden Area Rug",
    "tagline": "Gothic Botanical Poetry in Scarlet and Noir",
    "story": "Crimson Nocturne captures the timeless drama of nocturnal blooms, scattering rich scarlet roses across an immaculate ivory wool meadow. Midnight-black botanic scrollwork and thorny arabesques weave among the blossoms, evoking classical English folklore and high-romance grandeur. It lends unmistakable gothic elegance and warmth to formal dining halls and refined living chambers.",
    "function": "Meticulously hand-tufted in 100% fine worsted wool with an exquisite 18mm pile height, featuring cut-pile florals set against a dense sheared field for luminous visual contrast. Reinforced with double-layer organic cotton backing and edge-serged border finishing. Designed for grand dining salons, heritage drawing rooms, and boutique hospitality lounges.",
    "pricePaise": 0,
    "compareAtPaise": 0,
    "printMinutes": 0,
    "weightGrams": 8200,
    "dimensionsMm": {
      "w": 1600,
      "h": 2300,
      "d": 18
    },
    "edition": "Artisan Handcrafted",
    "status": "active",
    "category": "deskmate",
    "ageGroup": "All interiors",
    "themes": [
      "Gothic Romance",
      "Classic Floral",
      "Botanical Arabesque",
      "Heirloom Elegance",
      "Luxe Monochromatic Accent"
    ],
    "colorways": [
      "Crimson Red",
      "Midnight Noir",
      "Porcelain Ivory",
      "Burgundy"
    ],
    "imageGradient": [
      "#1E293B",
      "#0F172A"
    ],
    "imageUrl": "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.55.57%20AM%20(2).jpeg",
    "localImageUrl": "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.55.57%20AM%20(2).jpeg",
    "gallery": [
      "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.55.57%20AM%20(2).jpeg"
    ],
    "localGallery": [
      "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.55.57%20AM%20(2).jpeg"
    ],
    "rating": 5,
    "reviews": 18,
    "createdAt": "2026-10-17",
    "updatedAt": "2026-10-19",
    "freeShipping": true,
    "isPreorder": false,
    "preorderShipBy": null,
    "preorderDaysMin": null,
    "preorderDaysMax": null,
    "customFields": [],
    "seoTitle": "Crimson Nocturne Rose Garden Area Rug · QADRI Rugs",
    "seoDescription": "Crimson Nocturne captures the timeless drama of nocturnal blooms, scattering rich scarlet roses across an immaculate ivory wool meadow. Midnight-black botanic s",
    "faq": null,
    "categoryType": "shop"
  },
  {
    "id": "p_rug_012",
    "slug": "monstera-olea-minimalist-botanical-rug",
    "name": "Monstera Olea Minimalist Botanical Rug",
    "tagline": "Japandi Botanical Harmony in Fine Line Wool",
    "story": "Uniting the iconic split-leaf monstera form with the serene symbolism of olive boughs, Monstera Olea represents nature refined to its purest artistic essence. Deep ivory plush wool forms the organic leaf canvas, traced with delicate hand-carved black line-art stems and ripe olive berries. It brings understated Mediterranean warmth and Japandi tranquility to sunlit architectural spaces.",
    "function": "Hand-tufted with unbleached organic virgin wool at 20mm pile height, featuring precision-sheared recessed line carving for tactile graphic clarity. Finished with an organic cotton canvas backing and non-toxic natural latex bonding. Suited for modern minimalist living spaces, luxury bathroom retreats, and serene wellness studios.",
    "pricePaise": 0,
    "compareAtPaise": 0,
    "printMinutes": 0,
    "weightGrams": 6600,
    "dimensionsMm": {
      "w": 1600,
      "h": 1800,
      "d": 20
    },
    "edition": "Artisan Handcrafted",
    "status": "active",
    "category": "deskmate",
    "ageGroup": "All interiors",
    "themes": [
      "Japandi",
      "Botanical Art",
      "Sculptural Leaf",
      "Mediterranean Minimalist",
      "Organic Modern"
    ],
    "colorways": [
      "Ecru Ivory",
      "Graphite Black",
      "Warm Cream"
    ],
    "imageGradient": [
      "#1E293B",
      "#0F172A"
    ],
    "imageUrl": "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.55.57%20AM.jpeg",
    "localImageUrl": "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.55.57%20AM.jpeg",
    "gallery": [
      "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.55.57%20AM.jpeg"
    ],
    "localGallery": [
      "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.55.57%20AM.jpeg"
    ],
    "rating": 5,
    "reviews": 19,
    "createdAt": "2026-10-17",
    "updatedAt": "2026-10-19",
    "freeShipping": true,
    "isPreorder": false,
    "preorderShipBy": null,
    "preorderDaysMin": null,
    "preorderDaysMax": null,
    "customFields": [],
    "seoTitle": "Monstera Olea Minimalist Botanical Rug · QADRI Rugs",
    "seoDescription": "Uniting the iconic split-leaf monstera form with the serene symbolism of olive boughs, Monstera Olea represents nature refined to its purest artistic essence. D",
    "faq": null,
    "categoryType": "shop"
  },
  {
    "id": "p_rug_013",
    "slug": "lapin-etoile-sparkling-bunny-rug",
    "name": "Lapin Étoile Sparkling Bunny Rug",
    "tagline": "Anime Radiance Meets Joyful Textile Artistry",
    "story": "Lapin Étoile radiates playful charm with its charming rabbit silhouette adorned in rhythmic wave stripes of cerise and fairy-floss pink. Star-reflecting anime eyes and sculpted paw pads capture an infectious sense of whimsy and warmth. This bespoke piece serves as a delightful statement for design-conscious playrooms and eclectic pop interiors.",
    "function": "Crafted with resilient, ultra-soft semi-worsted New Zealand wool tufted at 18mm pile height with bevelled borders distinguishing the wavy stripes. Backed by non-allergenic organic cotton twill and slip-resistant grip treatment. Ideally placed in luxury nursery spaces, creative studios, and contemporary play sanctuaries.",
    "pricePaise": 0,
    "compareAtPaise": 0,
    "printMinutes": 0,
    "weightGrams": 7000,
    "dimensionsMm": {
      "w": 1500,
      "h": 2100,
      "d": 18
    },
    "edition": "Artisan Handcrafted",
    "status": "active",
    "category": "cafe",
    "ageGroup": "All interiors",
    "themes": [
      "Anime Aesthetic",
      "Whimsical Animal",
      "Pastel Pop",
      "Sculptural Silhouette",
      "Playful Contemporary"
    ],
    "colorways": [
      "Cerise Pink",
      "Baby Pink",
      "Milk White",
      "Jet Black"
    ],
    "imageGradient": [
      "#1E293B",
      "#0F172A"
    ],
    "imageUrl": "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.55.58%20AM%20(1).jpeg",
    "localImageUrl": "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.55.58%20AM%20(1).jpeg",
    "gallery": [
      "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.55.58%20AM%20(1).jpeg"
    ],
    "localGallery": [
      "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.55.58%20AM%20(1).jpeg"
    ],
    "rating": 5,
    "reviews": 20,
    "createdAt": "2026-10-17",
    "updatedAt": "2026-10-19",
    "freeShipping": true,
    "isPreorder": false,
    "preorderShipBy": null,
    "preorderDaysMin": null,
    "preorderDaysMax": null,
    "customFields": [],
    "seoTitle": "Lapin Étoile Sparkling Bunny Rug · QADRI Rugs",
    "seoDescription": "Lapin Étoile radiates playful charm with its charming rabbit silhouette adorned in rhythmic wave stripes of cerise and fairy-floss pink. Star-reflecting anime e",
    "faq": null,
    "categoryType": "shop"
  },
  {
    "id": "p_rug_014",
    "slug": "nordic-pisces-geometric-marine-rug",
    "name": "Nordic Pisces Geometric Marine Rug",
    "tagline": "Mid-Century Marine Geometry in Earthen Tones",
    "story": "Nordic Pisces celebrates Scandinavian mid-century modernism through an abstract, clean-lined piscine silhouette. Harmonious color-blocked segments of petroleum blue, rust terracotta, and warm sand evoke coastal mid-century tapestries of the 1960s. It imparts refined organic warmth and artistic geometry to hardwood floors and minimalist interiors.",
    "function": "Tufted in dense 100% pure wool with flat-sheared finish (16mm pile depth) delivering crisp graphic delineation and exceptional durability. Supported by double-weight woven cotton scrim backing with water-based natural latex adhesive. Exceptional for seaside retreats, Scandinavian living rooms, and contemporary office lounges.",
    "pricePaise": 0,
    "compareAtPaise": 0,
    "printMinutes": 0,
    "weightGrams": 6500,
    "dimensionsMm": {
      "w": 2000,
      "h": 1400,
      "d": 16
    },
    "edition": "Artisan Handcrafted",
    "status": "active",
    "category": "cafe",
    "ageGroup": "All interiors",
    "themes": [
      "Mid-Century Modern",
      "Scandinavian Design",
      "Marine Fauna",
      "Color-Blocking",
      "Organic Geometry"
    ],
    "colorways": [
      "Petroleum Blue",
      "Rust Terracotta",
      "Dusty Teal",
      "Sand Beige"
    ],
    "imageGradient": [
      "#1E293B",
      "#0F172A"
    ],
    "imageUrl": "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.55.58%20AM%20(2).jpeg",
    "localImageUrl": "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.55.58%20AM%20(2).jpeg",
    "gallery": [
      "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.55.58%20AM%20(2).jpeg"
    ],
    "localGallery": [
      "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.55.58%20AM%20(2).jpeg"
    ],
    "rating": 5,
    "reviews": 21,
    "createdAt": "2026-10-17",
    "updatedAt": "2026-10-19",
    "freeShipping": true,
    "isPreorder": false,
    "preorderShipBy": null,
    "preorderDaysMin": null,
    "preorderDaysMax": null,
    "customFields": [],
    "seoTitle": "Nordic Pisces Geometric Marine Rug · QADRI Rugs",
    "seoDescription": "Nordic Pisces celebrates Scandinavian mid-century modernism through an abstract, clean-lined piscine silhouette. Harmonious color-blocked segments of petroleum ",
    "faq": null,
    "categoryType": "shop"
  },
  {
    "id": "p_rug_015",
    "slug": "maternite-panda-embrace-statement-rug",
    "name": "Maternité Panda Embrace Statement Rug",
    "tagline": "Tender Protection and Cloud-Soft Wool Comfort",
    "story": "Capturing a heartwarming vignette of maternal protection, Maternité Panda illustrates an affectionate mother bear cradling her sleepy cub. High-contrast monochromatic wool brings crisp definition to their cozy embrace, accented by soft blushing cheeks and tranquil expressions. An enduring tribute to unconditional tenderness, this bespoke piece anchors spaces in peaceful harmony.",
    "function": "Artisanally hand-tufted from ethically sourced virgin fleece wool with a plush 22mm cut pile that feels exceptionally velvety beneath bare feet. Equipped with an odorless non-toxic latex backing and soft woven perimeter hem. Perfect for luxury children's bedrooms, primary family lounges, and heirloom nursery retreats.",
    "pricePaise": 0,
    "compareAtPaise": 0,
    "printMinutes": 0,
    "weightGrams": 7400,
    "dimensionsMm": {
      "w": 1700,
      "h": 1900,
      "d": 22
    },
    "edition": "Artisan Handcrafted",
    "status": "active",
    "category": "cafe",
    "ageGroup": "All interiors",
    "themes": [
      "Maternal Warmth",
      "Wildlife Love",
      "Sculptured Silhouette",
      "Monochrome Warmth",
      "Plush Comfort"
    ],
    "colorways": [
      "Ivory White",
      "Charcoal Black",
      "Blush Pink"
    ],
    "imageGradient": [
      "#1E293B",
      "#0F172A"
    ],
    "imageUrl": "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.55.58%20AM.jpeg",
    "localImageUrl": "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.55.58%20AM.jpeg",
    "gallery": [
      "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.55.58%20AM.jpeg"
    ],
    "localGallery": [
      "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.55.58%20AM.jpeg"
    ],
    "rating": 5,
    "reviews": 22,
    "createdAt": "2026-10-17",
    "updatedAt": "2026-10-19",
    "freeShipping": true,
    "isPreorder": false,
    "preorderShipBy": null,
    "preorderDaysMin": null,
    "preorderDaysMax": null,
    "customFields": [],
    "seoTitle": "Maternité Panda Embrace Statement Rug · QADRI Rugs",
    "seoDescription": "Capturing a heartwarming vignette of maternal protection, Maternité Panda illustrates an affectionate mother bear cradling her sleepy cub. High-contrast monochr",
    "faq": null,
    "categoryType": "shop"
  },
  {
    "id": "p_rug_016",
    "slug": "suminagashi-vortex-marble-area-rug",
    "name": "Suminagashi Vortex Marble Area Rug",
    "tagline": "Liquid Japanese Marbling in Dynamic Wool Waves",
    "story": "Taking cues from ancient Japanese ink marbling (suminagashi), this commanding area rug captures the kinetic majesty of fluids colliding in suspension. High-velocity ribbons of obsidian black sweep across a pearl-white field toward a hypnotic central vortex. Its sweeping monochromatic rhythm anchors contemporary architectural spaces with museum-caliber intensity.",
    "function": "Hand-tufted using dense worsted New Zealand wool with precision relief shearing (18mm cut pile) to accentuate the flow of every individual current. Reinforced with heavy-duty action cotton backing for superior dimensional stability under heavy luxury furniture. Best suited for modern penthouses, executive boardrooms, and minimalist living galleries.",
    "pricePaise": 0,
    "compareAtPaise": 0,
    "printMinutes": 0,
    "weightGrams": 10200,
    "dimensionsMm": {
      "w": 2000,
      "h": 2600,
      "d": 18
    },
    "edition": "Artisan Handcrafted",
    "status": "active",
    "category": "deskmate",
    "ageGroup": "All interiors",
    "themes": [
      "Suminagashi Marbling",
      "Abstract Kinetic",
      "Monochrome Modernism",
      "Architectural Luxury",
      "Fluid Art"
    ],
    "colorways": [
      "Obsidian Black",
      "Pearl White",
      "Slate Grey"
    ],
    "imageGradient": [
      "#1E293B",
      "#0F172A"
    ],
    "imageUrl": "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.55.59%20AM%20(1).jpeg",
    "localImageUrl": "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.55.59%20AM%20(1).jpeg",
    "gallery": [
      "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.55.59%20AM%20(1).jpeg"
    ],
    "localGallery": [
      "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.55.59%20AM%20(1).jpeg"
    ],
    "rating": 5,
    "reviews": 23,
    "createdAt": "2026-10-17",
    "updatedAt": "2026-10-19",
    "freeShipping": true,
    "isPreorder": false,
    "preorderShipBy": null,
    "preorderDaysMin": null,
    "preorderDaysMax": null,
    "customFields": [],
    "seoTitle": "Suminagashi Vortex Marble Area Rug · QADRI Rugs",
    "seoDescription": "Taking cues from ancient Japanese ink marbling (suminagashi), this commanding area rug captures the kinetic majesty of fluids colliding in suspension. High-velo",
    "faq": null,
    "categoryType": "shop"
  },
  {
    "id": "p_rug_017",
    "slug": "belle-epoque-rose-arabesque-area-rug",
    "name": "Belle Époque Rose Arabesque Area Rug",
    "tagline": "Art Nouveau Romance in Swirling Pastel Florals",
    "story": "Drawing inspiration from early 20th-century Parisian salons, Belle Époque fuses Art Nouveau organic curves with romantic floral splendor. Whimsical blossoms in soft dusty rose unfurl alongside undulating ribbons of ebony and champagne on an ivory tufted expanse. It imparts an air of aristocratic softness and graceful timelessness to classically appointed suites.",
    "function": "Hand-tufted with high-count wool and silky art-silk accents with hand-carved petal definition across a 20mm high-pile field. Built with dual-action cotton canvas backing and hand-bound perimeter edges. Perfectly scaled for master suites, formal drawing rooms, and boutique hospitality boudoirs.",
    "pricePaise": 0,
    "compareAtPaise": 0,
    "printMinutes": 0,
    "weightGrams": 8800,
    "dimensionsMm": {
      "w": 1800,
      "h": 2400,
      "d": 20
    },
    "edition": "Artisan Handcrafted",
    "status": "active",
    "category": "deskmate",
    "ageGroup": "All interiors",
    "themes": [
      "Art Nouveau",
      "French Rococo",
      "Botanical Arabesque",
      "Pastel Sophistication",
      "Classic Romance"
    ],
    "colorways": [
      "Dusty Rose",
      "Ivory Cream",
      "Midnight Black",
      "Champagne Gold"
    ],
    "imageGradient": [
      "#1E293B",
      "#0F172A"
    ],
    "imageUrl": "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.55.59%20AM%20(2).jpeg",
    "localImageUrl": "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.55.59%20AM%20(2).jpeg",
    "gallery": [
      "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.55.59%20AM%20(2).jpeg"
    ],
    "localGallery": [
      "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.55.59%20AM%20(2).jpeg"
    ],
    "rating": 5,
    "reviews": 24,
    "createdAt": "2026-10-17",
    "updatedAt": "2026-10-19",
    "freeShipping": true,
    "isPreorder": false,
    "preorderShipBy": null,
    "preorderDaysMin": null,
    "preorderDaysMax": null,
    "customFields": [],
    "seoTitle": "Belle Époque Rose Arabesque Area Rug · QADRI Rugs",
    "seoDescription": "Drawing inspiration from early 20th-century Parisian salons, Belle Époque fuses Art Nouveau organic curves with romantic floral splendor. Whimsical blossoms in ",
    "faq": null,
    "categoryType": "shop"
  },
  {
    "id": "p_rug_018",
    "slug": "sculptura-etheree-bas-relief-profile-rug",
    "name": "Sculptura Éthérée Bas-Relief Profile Rug",
    "tagline": "Classical Bas-Relief Sculpture Transmuted to Wool",
    "story": "Sculptura Éthérée pushes the frontier of textile artistry, rendering a tranquil feminine profile into a multi-dimensional bas-relief sculpture. Flowing waves of contrasting black and ivory locks cascade around serene closed eyes and sculpted lips, mimicking polished marble reliefs. This transcendent textile work blurs the boundary between gallery sculpture and tactile home couture.",
    "function": "Constructed with multi-tiered sculpted tufting ranging from 12mm loop pile for delicate facial planes to 28mm high-density shag for billowing tresses. Backed by custom-cut canvas backing with integrated dual-mount hardware for floor placement or vertical wall hanging. Perfect for luxury dressing rooms, art collector residences, and haute-couture show galleries.",
    "pricePaise": 0,
    "compareAtPaise": 0,
    "printMinutes": 0,
    "weightGrams": 8200,
    "dimensionsMm": {
      "w": 1600,
      "h": 2200,
      "d": 28
    },
    "edition": "Artisan Handcrafted",
    "status": "active",
    "category": "cafe",
    "ageGroup": "All interiors",
    "themes": [
      "Sculptural Relief",
      "Classical Renaissance",
      "Figurative Modernism",
      "Bas-Relief Textile",
      "Haute Couture"
    ],
    "colorways": [
      "Marble White",
      "Onyx Black",
      "Alabaster Cream"
    ],
    "imageGradient": [
      "#1E293B",
      "#0F172A"
    ],
    "imageUrl": "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.55.59%20AM.jpeg",
    "localImageUrl": "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.55.59%20AM.jpeg",
    "gallery": [
      "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.55.59%20AM.jpeg"
    ],
    "localGallery": [
      "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.55.59%20AM.jpeg"
    ],
    "rating": 5,
    "reviews": 25,
    "createdAt": "2026-10-17",
    "updatedAt": "2026-10-19",
    "freeShipping": true,
    "isPreorder": false,
    "preorderShipBy": null,
    "preorderDaysMin": null,
    "preorderDaysMax": null,
    "customFields": [],
    "seoTitle": "Sculptura Éthérée Bas-Relief Profile Rug · QADRI Rugs",
    "seoDescription": "Sculptura Éthérée pushes the frontier of textile artistry, rendering a tranquil feminine profile into a multi-dimensional bas-relief sculpture. Flowing waves of",
    "faq": null,
    "categoryType": "shop"
  },
  {
    "id": "p_rug_019",
    "slug": "loeil-surrealiste-weeping-eye-rug",
    "name": "L'Oeil Surréaliste Weeping Eye Statement Rug",
    "tagline": "Surrealist Visionary Gaze in Dripping Cerulean",
    "story": "Paying homage to Surrealist masters and modernist pop iconography, L'Oeil Surréaliste commands attention with an all-seeing ocular silhouette. A vivid cobalt blue iris is crowned by dramatic feathered lashes, while liquefied drips of cerulean, blush, and black stream downward. It serves as an electrifying focal statement for daring interior curators and contemporary collectors.",
    "function": "Custom-tufted with dense virgin wool and high-sheen botanic silk in the iris, featuring varying 18–22mm pile heights with bevelled drip tips. Features anti-skid vulcanized backing and tailored serged border following the undulating drip contours. Superb for avant-garde entryways, contemporary art galleries, and stylish fashion showrooms.",
    "pricePaise": 0,
    "compareAtPaise": 0,
    "printMinutes": 0,
    "weightGrams": 7200,
    "dimensionsMm": {
      "w": 2200,
      "h": 1400,
      "d": 20
    },
    "edition": "Artisan Handcrafted",
    "status": "active",
    "category": "cafe",
    "ageGroup": "All interiors",
    "themes": [
      "Surrealism",
      "Pop Art Ocular",
      "Avant-Garde Statement",
      "Dripping Liquidity",
      "Modern Collector"
    ],
    "colorways": [
      "Cobalt Blue",
      "Cerulean Blue",
      "Blush Pink",
      "Obsidian Black",
      "Chalk White"
    ],
    "imageGradient": [
      "#1E293B",
      "#0F172A"
    ],
    "imageUrl": "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.56.00%20AM%20(1).jpeg",
    "localImageUrl": "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.56.00%20AM%20(1).jpeg",
    "gallery": [
      "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.56.00%20AM%20(1).jpeg"
    ],
    "localGallery": [
      "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.56.00%20AM%20(1).jpeg"
    ],
    "rating": 5,
    "reviews": 8,
    "createdAt": "2026-10-17",
    "updatedAt": "2026-10-19",
    "freeShipping": true,
    "isPreorder": false,
    "preorderShipBy": null,
    "preorderDaysMin": null,
    "preorderDaysMax": null,
    "customFields": [],
    "seoTitle": "L'Oeil Surréaliste Weeping Eye Statement Rug · QADRI Rugs",
    "seoDescription": "Paying homage to Surrealist masters and modernist pop iconography, L'Oeil Surréaliste commands attention with an all-seeing ocular silhouette. A vivid cobalt bl",
    "faq": null,
    "categoryType": "shop"
  },
  {
    "id": "p_rug_020",
    "slug": "neo-tokyo-hypebeast-statement-rug",
    "name": "Neo-Tokyo Hypebeast Streetwear Statement Rug",
    "tagline": "Harajuku Street Culture Tufted in Vibrant Wool",
    "story": "Embodying the pulse of modern sneaker culture and Tokyo street aesthetics, Neo-Tokyo Hypebeast depicts a stylish anime protagonist in full streetwear regalia. Layered with a bold crimson hoodie, sculpted gold star chain, cargo trousers, and classic canvas kicks, this figure radiates urban cool. It brings infectious energy and contemporary youth culture to streetwear boutiques and game lounges.",
    "function": "Tufted with ultra-durable resilient New Zealand wool yarns at 18mm pile depth with micro-carved linework defining the sneaker laces, chain links, and phone. Finished with reinforced heavy-duty non-slip backing engineered to withstand spirited indoor foot traffic. Ideal for flagship streetwear boutiques, sneaker vaults, and gaming lounge sanctuaries.",
    "pricePaise": 0,
    "compareAtPaise": 0,
    "printMinutes": 0,
    "weightGrams": 7500,
    "dimensionsMm": {
      "w": 1400,
      "h": 2200,
      "d": 18
    },
    "edition": "Artisan Handcrafted",
    "status": "active",
    "category": "keychains",
    "ageGroup": "All interiors",
    "themes": [
      "Streetwear",
      "Anime & Manga",
      "Urban Culture",
      "Hypebeast Aesthetic",
      "Pop Art Character"
    ],
    "colorways": [
      "Crimson Red",
      "Jet Black",
      "Goldenrod Yellow",
      "Chalk White",
      "Peach Skin"
    ],
    "imageGradient": [
      "#1E293B",
      "#0F172A"
    ],
    "imageUrl": "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.56.00%20AM.jpeg",
    "localImageUrl": "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.56.00%20AM.jpeg",
    "gallery": [
      "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.56.00%20AM.jpeg"
    ],
    "localGallery": [
      "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.56.00%20AM.jpeg"
    ],
    "rating": 5,
    "reviews": 9,
    "createdAt": "2026-10-17",
    "updatedAt": "2026-10-19",
    "freeShipping": true,
    "isPreorder": false,
    "preorderShipBy": null,
    "preorderDaysMin": null,
    "preorderDaysMax": null,
    "customFields": [],
    "seoTitle": "Neo-Tokyo Hypebeast Streetwear Statement Rug · QADRI Rugs",
    "seoDescription": "Embodying the pulse of modern sneaker culture and Tokyo street aesthetics, Neo-Tokyo Hypebeast depicts a stylish anime protagonist in full streetwear regalia. L",
    "faq": null,
    "categoryType": "shop"
  },
  {
    "id": "p_rug_021",
    "slug": "pinguin-mignon-circular-nursery-rug",
    "name": "Pinguin Mignon Circular Nursery Rug",
    "tagline": "Antarctic Sweetness in Plush Circular Wool",
    "story": "Pinguin Mignon captures the heartwarming gentleness of the polar tundra through a beautifully balanced circular medallion. Enclosed in a deep midnight-black frame, a smiling baby penguin with star-kissed eyes, rosy cheeks, and golden beak brings instant joy. It provides an inviting, cozy island of warmth for nurseries and cozy play sanctuaries.",
    "function": "Hand-tufted in ultra-fine, hypoallergenic New Zealand wool with an inviting 22mm plush cut pile designed for bare-feet comfort. Reinforced with natural rubber non-skid backing and circular bound hem to prevent curling. Tailored for heirloom nurseries, children's study zones, and modern family morning spaces.",
    "pricePaise": 0,
    "compareAtPaise": 0,
    "printMinutes": 0,
    "weightGrams": 6800,
    "dimensionsMm": {
      "w": 1600,
      "h": 1600,
      "d": 22
    },
    "edition": "Artisan Handcrafted",
    "status": "active",
    "category": "cafe",
    "ageGroup": "All interiors",
    "themes": [
      "Polar Wildlife",
      "Nursery Luxury",
      "Circular Medallion",
      "Playful Comfort",
      "Sweet Character"
    ],
    "colorways": [
      "Midnight Black",
      "Snow White",
      "Blush Pink",
      "Marigold Yellow"
    ],
    "imageGradient": [
      "#1E293B",
      "#0F172A"
    ],
    "imageUrl": "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.56.01%20AM%20(1).jpeg",
    "localImageUrl": "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.56.01%20AM%20(1).jpeg",
    "gallery": [
      "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.56.01%20AM%20(1).jpeg"
    ],
    "localGallery": [
      "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.56.01%20AM%20(1).jpeg"
    ],
    "rating": 5,
    "reviews": 10,
    "createdAt": "2026-10-17",
    "updatedAt": "2026-10-19",
    "freeShipping": true,
    "isPreorder": false,
    "preorderShipBy": null,
    "preorderDaysMin": null,
    "preorderDaysMax": null,
    "customFields": [],
    "seoTitle": "Pinguin Mignon Circular Nursery Rug · QADRI Rugs",
    "seoDescription": "Pinguin Mignon captures the heartwarming gentleness of the polar tundra through a beautifully balanced circular medallion. Enclosed in a deep midnight-black fra",
    "faq": null,
    "categoryType": "shop"
  },
  {
    "id": "p_rug_022",
    "slug": "liquid-dissolution-melting-checkerboard-rug",
    "name": "Liquid Dissolution Melting Checkerboard Rug",
    "tagline": "Classic Checkerboard Warped into Liquid Surrealism",
    "story": "Liquid Dissolution reimagines timeless ska and racing checkerboard geometry by subverting its structured grid into cascading, liquefied drips. Pristine black and ivory squares dissolve gracefully into psychedelic, dripping ripples with an organic silhouette edge. This showstopping piece is celebrated in contemporary fashion showrooms, creative agency studios, and avant-garde residences.",
    "function": "Hand-tufted using dense, high-twist semi-worsted wool (18mm pile height) with razor-sharp beveled carving separating each checker and wave crest. Mounted onto a rugged dual-weave cotton canvas backing with non-marking grip for commercial longevity. Tailored for design showrooms, streetwear flagships, executive creative studios, and modern penthouses.",
    "pricePaise": 0,
    "compareAtPaise": 0,
    "printMinutes": 0,
    "weightGrams": 8100,
    "dimensionsMm": {
      "w": 1800,
      "h": 2200,
      "d": 18
    },
    "edition": "Artisan Handcrafted",
    "status": "active",
    "category": "keychains",
    "ageGroup": "All interiors",
    "themes": [
      "Melting Checkerboard",
      "Surrealist Optical",
      "Modern Statement",
      "Contemporary Streetwear",
      "Avant-Garde Graphic"
    ],
    "colorways": [
      "Obsidian Black",
      "Linen Ivory"
    ],
    "imageGradient": [
      "#1E293B",
      "#0F172A"
    ],
    "imageUrl": "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.56.01%20AM%20(2).jpeg",
    "localImageUrl": "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.56.01%20AM%20(2).jpeg",
    "gallery": [
      "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.56.01%20AM%20(2).jpeg"
    ],
    "localGallery": [
      "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.56.01%20AM%20(2).jpeg"
    ],
    "rating": 5,
    "reviews": 11,
    "createdAt": "2026-10-17",
    "updatedAt": "2026-10-19",
    "freeShipping": true,
    "isPreorder": false,
    "preorderShipBy": null,
    "preorderDaysMin": null,
    "preorderDaysMax": null,
    "customFields": [],
    "seoTitle": "Liquid Dissolution Melting Checkerboard Rug · QADRI Rugs",
    "seoDescription": "Liquid Dissolution reimagines timeless ska and racing checkerboard geometry by subverting its structured grid into cascading, liquefied drips. Pristine black an",
    "faq": null,
    "categoryType": "shop"
  },
  {
    "id": "p_rug_023",
    "slug": "le-crocodile-vert-safari-rug",
    "name": "Le Crocodile Vert Safari Silhouette Rug",
    "tagline": "Gentle Reptilian Charm in Lush Botanical Greens",
    "story": "Transforming the formidable swamp predator into an endearing, smiling companion, Le Crocodile Vert sprawls playfully across the room. Rendered in a soothing gradient of sage, moss, and forest green with creamy ventral scales, its undulating tail brings dynamic energy. A whimsical conversation starter designed to delight both adventurous children and discerning modern collectors.",
    "function": "Meticulously hand-tufted from 100% fine wool with multi-level sculpting (16–20mm pile height) that defines individual back ridges and friendly facial contours. Finished with a heavy flexible cotton canvas back and anti-slip edge treatment. Specially crafted for playrooms, luxury children's bedroom suites, and quirky boutique lounge spaces.",
    "pricePaise": 0,
    "compareAtPaise": 0,
    "printMinutes": 0,
    "weightGrams": 7900,
    "dimensionsMm": {
      "w": 1600,
      "h": 2400,
      "d": 20
    },
    "edition": "Artisan Handcrafted",
    "status": "active",
    "category": "cafe",
    "ageGroup": "All interiors",
    "themes": [
      "Reptilian Whimsy",
      "Safari Nature",
      "Sculptural Silhouette",
      "Playful Greenery",
      "Children's Luxury"
    ],
    "colorways": [
      "Sage Green",
      "Forest Olive",
      "Cream Scale",
      "Deep Moss"
    ],
    "imageGradient": [
      "#1E293B",
      "#0F172A"
    ],
    "imageUrl": "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.56.01%20AM.jpeg",
    "localImageUrl": "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.56.01%20AM.jpeg",
    "gallery": [
      "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.56.01%20AM.jpeg"
    ],
    "localGallery": [
      "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.56.01%20AM.jpeg"
    ],
    "rating": 5,
    "reviews": 12,
    "createdAt": "2026-10-17",
    "updatedAt": "2026-10-19",
    "freeShipping": true,
    "isPreorder": false,
    "preorderShipBy": null,
    "preorderDaysMin": null,
    "preorderDaysMax": null,
    "customFields": [],
    "seoTitle": "Le Crocodile Vert Safari Silhouette Rug · QADRI Rugs",
    "seoDescription": "Transforming the formidable swamp predator into an endearing, smiling companion, Le Crocodile Vert sprawls playfully across the room. Rendered in a soothing gra",
    "faq": null,
    "categoryType": "shop"
  },
  {
    "id": "p_rug_024",
    "slug": "letreinte-infinite-two-faces-rug",
    "name": "L'Étreinte Infinite Two Faces Ripple Rug",
    "tagline": "Topographic Resonance of Intimacy and Form",
    "story": "L'Étreinte Infinite depicts the sublime moment of an impending embrace through hypnotic, topographic contour lines. Two human profiles converge across a tactile expanse of raised ivory ridges and midnight grooves, symbolizing human connection and energetic harmony. Complete with artisanal fringed tassels, this monumental rug commands quiet reverence in refined contemporary settings.",
    "function": "Woven with high-low loop and cut wool tufting (16mm grooves to 24mm raised crests) that delivers dramatic tactile shadowplay under architectural lighting. Finished with hand-tied natural linen fringes on both ends and backed with non-slip organic latex-dipped canvas. Suited for primary master suites, fine art galleries, and serene executive drawing rooms.",
    "pricePaise": 0,
    "compareAtPaise": 0,
    "printMinutes": 0,
    "weightGrams": 9200,
    "dimensionsMm": {
      "w": 1800,
      "h": 2500,
      "d": 24
    },
    "edition": "Artisan Handcrafted",
    "status": "active",
    "category": "deskmate",
    "ageGroup": "All interiors",
    "themes": [
      "Topographic Art",
      "Figurative Modernism",
      "Optical Intimacy",
      "Sculptural Textile",
      "Artisan Fringed"
    ],
    "colorways": [
      "Ivory Cream",
      "Midnight Noir",
      "Champagne Fringes"
    ],
    "imageGradient": [
      "#1E293B",
      "#0F172A"
    ],
    "imageUrl": "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.56.02%20AM%20(1).jpeg",
    "localImageUrl": "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.56.02%20AM%20(1).jpeg",
    "gallery": [
      "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.56.02%20AM%20(1).jpeg"
    ],
    "localGallery": [
      "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.56.02%20AM%20(1).jpeg"
    ],
    "rating": 5,
    "reviews": 13,
    "createdAt": "2026-10-17",
    "updatedAt": "2026-10-19",
    "freeShipping": true,
    "isPreorder": false,
    "preorderShipBy": null,
    "preorderDaysMin": null,
    "preorderDaysMax": null,
    "customFields": [],
    "seoTitle": "L'Étreinte Infinite Two Faces Ripple Rug · QADRI Rugs",
    "seoDescription": "L'Étreinte Infinite depicts the sublime moment of an impending embrace through hypnotic, topographic contour lines. Two human profiles converge across a tactile",
    "faq": null,
    "categoryType": "shop"
  },
  {
    "id": "p_rug_025",
    "slug": "monstera-cognac-sculpted-foliage-rug",
    "name": "Monstera Cognac Sculpted Foliage Rug",
    "tagline": "Tropical Architectural Grandeur in Cream & Cognac",
    "story": "Inspired by the lush tropical leaves of Monstera deliciosa, this sculpted rug brings organic warmth and botanical architecture into luxury spaces. Deeply debossed, caramel-cognac veins slice through an ultra-dense ivory wool pile, replicating the dramatic fenestrations of nature. It anchors interiors with earth-toned serenity and tactile opulence.",
    "function": "Artisanal hand-tufted high-pile New Zealand wool (22mm pile depth) with precision hand-beveled cognac recesses (12mm) creating striking three-dimensional relief. Features heavy cotton-linen composite backing with edge-curling protection. Perfectly suited for sunlit solariums, mid-century modern living salons, and serene master suites.",
    "pricePaise": 0,
    "compareAtPaise": 0,
    "printMinutes": 0,
    "weightGrams": 7000,
    "dimensionsMm": {
      "w": 1700,
      "h": 1800,
      "d": 22
    },
    "edition": "Artisan Handcrafted",
    "status": "active",
    "category": "deskmate",
    "ageGroup": "All interiors",
    "themes": [
      "Botanical Foliage",
      "Monstera Silhouette",
      "Biophilic Luxury",
      "Earthy Warmth",
      "Sculpted Relief"
    ],
    "colorways": [
      "Ivory Cream",
      "Cognac Caramel",
      "Warm Sand"
    ],
    "imageGradient": [
      "#1E293B",
      "#0F172A"
    ],
    "imageUrl": "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.56.02%20AM%20(2).jpeg",
    "localImageUrl": "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.56.02%20AM%20(2).jpeg",
    "gallery": [
      "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.56.02%20AM%20(2).jpeg"
    ],
    "localGallery": [
      "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.56.02%20AM%20(2).jpeg"
    ],
    "rating": 5,
    "reviews": 14,
    "createdAt": "2026-10-17",
    "updatedAt": "2026-10-19",
    "freeShipping": true,
    "isPreorder": false,
    "preorderShipBy": null,
    "preorderDaysMin": null,
    "preorderDaysMax": null,
    "customFields": [],
    "seoTitle": "Monstera Cognac Sculpted Foliage Rug · QADRI Rugs",
    "seoDescription": "Inspired by the lush tropical leaves of Monstera deliciosa, this sculpted rug brings organic warmth and botanical architecture into luxury spaces. Deeply deboss",
    "faq": null,
    "categoryType": "shop"
  },
  {
    "id": "p_rug_026",
    "slug": "crema-splash-artisan-latte-rug",
    "name": "Crema Splash Artisan Latte Rug",
    "tagline": "The Poetry of Espresso Captured in Wool",
    "story": "Inspired by the ephemeral perfection of an artisan barista's rosetta pour, this round statement rug captures creamy microfoam blooming through rich golden crema. The undulating perimeter radiates outward in stylized liquid droplets, evoking the lively warmth and aroma of luxury cafe culture. A sculptural focal point crafted to awaken curated living spaces with organic comfort and sensory indulgence.",
    "function": "Hand-tufted with ultra-fine New Zealand wool and luster-washed bamboo silk highlights, featuring variable cut pile depths from 14mm to 20mm with hand-carved crema grooves. Finished with a non-slip natural latex cotton canvas backing for flawless floor grip. Tailored for luxury breakfast atriums, boutique hospitality suites, gourmet cafe lounges, and contemporary residential spaces.",
    "pricePaise": 0,
    "compareAtPaise": 0,
    "printMinutes": 0,
    "weightGrams": 6800,
    "dimensionsMm": {
      "w": 1800,
      "h": 1800,
      "d": 20
    },
    "edition": "Artisan Handcrafted",
    "status": "active",
    "category": "cafe",
    "ageGroup": "All interiors",
    "themes": [
      "Coffee Culture",
      "Artisanal Gastronomy",
      "Fluid Contour",
      "Biophilic Design"
    ],
    "colorways": [
      "Espresso Brown",
      "Caramel Macchiato",
      "Warm Cream",
      "Ivory Froth"
    ],
    "imageGradient": [
      "#1E293B",
      "#0F172A"
    ],
    "imageUrl": "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.56.02%20AM%20(3).jpeg",
    "localImageUrl": "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.56.02%20AM%20(3).jpeg",
    "gallery": [
      "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.56.02%20AM%20(3).jpeg"
    ],
    "localGallery": [
      "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.56.02%20AM%20(3).jpeg"
    ],
    "rating": 5,
    "reviews": 15,
    "createdAt": "2026-10-17",
    "updatedAt": "2026-10-19",
    "freeShipping": true,
    "isPreorder": false,
    "preorderShipBy": null,
    "preorderDaysMin": null,
    "preorderDaysMax": null,
    "customFields": [],
    "seoTitle": "Crema Splash Artisan Latte Rug · QADRI Rugs",
    "seoDescription": "Inspired by the ephemeral perfection of an artisan barista's rosetta pour, this round statement rug captures creamy microfoam blooming through rich golden crema",
    "faq": null,
    "categoryType": "shop"
  },
  {
    "id": "p_rug_027",
    "slug": "mocha-vortex-swirl-area-rug",
    "name": "Mocha Vortex Swirl Area Rug",
    "tagline": "Dynamic Fluidity in Rich Cocoa Nuances",
    "story": "Depicting the hypnotic convergence of dark roasted espresso and whipped sweet cream, the Mocha Vortex rug translates centrifugal fluid motion into tactile luxury. Deep cocoa contours spiral into velvety beige eddies, framed by energetic foam splash dynamics that feel alive underfoot. It transforms grand entertaining spaces into an inviting haven of warmth and contemporary flair.",
    "function": "Masterfully hand-tufted in dense 100% semi-worsted wool with high-definition shearing and relief contouring at an 18mm pile depth. Reinforced with heavy woven cotton backing and bound selvedge edges for enduring resilience in high-traffic settings. Ideal for executive creative lounges, luxury residential living rooms, and upscale cafe seating areas.",
    "pricePaise": 0,
    "compareAtPaise": 0,
    "printMinutes": 0,
    "weightGrams": 9200,
    "dimensionsMm": {
      "w": 1600,
      "h": 2400,
      "d": 18
    },
    "edition": "Artisan Handcrafted",
    "status": "active",
    "category": "cafe",
    "ageGroup": "All interiors",
    "themes": [
      "Vortex Abstract",
      "Gourmet Fluidity",
      "Warm Modernism",
      "Bold Statement"
    ],
    "colorways": [
      "Dark Cocoa",
      "Espresso",
      "Whipped Ivory",
      "Caramel Sand"
    ],
    "imageGradient": [
      "#1E293B",
      "#0F172A"
    ],
    "imageUrl": "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.56.02%20AM.jpeg",
    "localImageUrl": "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.56.02%20AM.jpeg",
    "gallery": [
      "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.56.02%20AM.jpeg"
    ],
    "localGallery": [
      "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.56.02%20AM.jpeg"
    ],
    "rating": 5,
    "reviews": 16,
    "createdAt": "2026-10-17",
    "updatedAt": "2026-10-19",
    "freeShipping": true,
    "isPreorder": false,
    "preorderShipBy": null,
    "preorderDaysMin": null,
    "preorderDaysMax": null,
    "customFields": [],
    "seoTitle": "Mocha Vortex Swirl Area Rug · QADRI Rugs",
    "seoDescription": "Depicting the hypnotic convergence of dark roasted espresso and whipped sweet cream, the Mocha Vortex rug translates centrifugal fluid motion into tactile luxur",
    "faq": null,
    "categoryType": "shop"
  },
  {
    "id": "p_rug_028",
    "slug": "azure-kingfisher-avian-silhouette-rug",
    "name": "Azure Kingfisher Avian Silhouette Rug",
    "tagline": "Vivid Riverbank Radiance Captured in Motion",
    "story": "Celebrating the darting grace and electric plumage of the wild kingfisher, this shaped statement rug brings riparian vibrancy into elevated interiors. Brilliant aquatic turquoise and cerulean wing layers contrast against a rich terracotta-amber breast, outlined with sculptural precision. An enchanting art piece that infuses rooms with natural vitality and bespoke character.",
    "function": "Precision hand-tufted using resilient botanical-dyed wool with silky viscose accents for radiant feather sheen. Features a 16mm contoured cut pile with hand-beveled plumage edges and reinforced anti-skid cotton twill backing. Perfectly suited for curated nurseries, eclectic private salons, luxury children's suites, and design galleries.",
    "pricePaise": 0,
    "compareAtPaise": 0,
    "printMinutes": 0,
    "weightGrams": 4200,
    "dimensionsMm": {
      "w": 1500,
      "h": 1200,
      "d": 16
    },
    "edition": "Artisan Handcrafted",
    "status": "active",
    "category": "cafe",
    "ageGroup": "All interiors",
    "themes": [
      "Avian Wildlife",
      "Botanical Nature",
      "Vibrant Statement",
      "Handcrafted Art"
    ],
    "colorways": [
      "Electric Turquoise",
      "Cerulean Blue",
      "Burnt Orange",
      "Alabaster White"
    ],
    "imageGradient": [
      "#1E293B",
      "#0F172A"
    ],
    "imageUrl": "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.56.03%20AM%20(1).jpeg",
    "localImageUrl": "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.56.03%20AM%20(1).jpeg",
    "gallery": [
      "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.56.03%20AM%20(1).jpeg"
    ],
    "localGallery": [
      "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.56.03%20AM%20(1).jpeg"
    ],
    "rating": 5,
    "reviews": 17,
    "createdAt": "2026-10-17",
    "updatedAt": "2026-10-19",
    "freeShipping": true,
    "isPreorder": false,
    "preorderShipBy": null,
    "preorderDaysMin": null,
    "preorderDaysMax": null,
    "customFields": [],
    "seoTitle": "Azure Kingfisher Avian Silhouette Rug · QADRI Rugs",
    "seoDescription": "Celebrating the darting grace and electric plumage of the wild kingfisher, this shaped statement rug brings riparian vibrancy into elevated interiors. Brilliant",
    "faq": null,
    "categoryType": "shop"
  },
  {
    "id": "p_rug_029",
    "slug": "cascading-shoreline-3d-topography-rug",
    "name": "Cascading Shoreline 3D Topography Rug",
    "tagline": "Sculptural Gradients of Earth and Tide",
    "story": "Embodying the gentle rhythm where coastal dunes meet rolling ocean swells, this tactile masterpiece translates topographical strata into an immersive sensory landscape. Each gradient wave and river-stone cluster is carved at alternating elevations, casting delicate shadows that evolve with natural daylight. An ethereal sanctuary for the feet that radiates grounding coastal tranquility.",
    "function": "Artisanal multi-level hand-tufting utilizing plush New Zealand wool and ultra-soft microfiber boucle, yielding dramatic variable pile heights from 15mm to 35mm. High-density tufted construction backed by breathable action-bac canvas. Designed for luxury primary suites, wellness pavilions, minimalist penthouse lounges, and high-end residential living rooms.",
    "pricePaise": 0,
    "compareAtPaise": 0,
    "printMinutes": 0,
    "weightGrams": 8900,
    "dimensionsMm": {
      "w": 1600,
      "h": 2200,
      "d": 35
    },
    "edition": "Artisan Handcrafted",
    "status": "active",
    "category": "deskmate",
    "ageGroup": "All interiors",
    "themes": [
      "Topography",
      "Oceanic Biophilia",
      "Sculptural 3D",
      "Organic Modernism"
    ],
    "colorways": [
      "Ocean Slate",
      "Sage Green",
      "Warm Sand",
      "Oatmeal Beige"
    ],
    "imageGradient": [
      "#1E293B",
      "#0F172A"
    ],
    "imageUrl": "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.56.03%20AM%20(2).jpeg",
    "localImageUrl": "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.56.03%20AM%20(2).jpeg",
    "gallery": [
      "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.56.03%20AM%20(2).jpeg"
    ],
    "localGallery": [
      "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.56.03%20AM%20(2).jpeg"
    ],
    "rating": 5,
    "reviews": 18,
    "createdAt": "2026-10-17",
    "updatedAt": "2026-10-19",
    "freeShipping": true,
    "isPreorder": false,
    "preorderShipBy": null,
    "preorderDaysMin": null,
    "preorderDaysMax": null,
    "customFields": [],
    "seoTitle": "Cascading Shoreline 3D Topography Rug · QADRI Rugs",
    "seoDescription": "Embodying the gentle rhythm where coastal dunes meet rolling ocean swells, this tactile masterpiece translates topographical strata into an immersive sensory la",
    "faq": null,
    "categoryType": "shop"
  },
  {
    "id": "p_rug_030",
    "slug": "nocturne-owlet-cozy-round-rug",
    "name": "Nocturne Owlet Cozy Round Rug",
    "tagline": "Gentle Forest Wisdom in Tender Wool",
    "story": "Capturing the endearing charm of a young owl unfurling its wings beneath starlit canopies, this circular silhouette rug radiates warmth and quiet wonder. Earthy shades of toasted biscuit, cocoa, and cream blend across multi-textured plumage, punctuated by luminous, gentle eyes. It introduces a whimsical yet refined guardian spirit to intimate personal spaces.",
    "function": "Tufted from ultra-soft cloud-spun wool and hypoallergenic organic acrylic yarns, featuring a plush 18mm cut pile with delicate hand-carved feather ribbing. Equipped with durable flex-canvas backing and child-safe non-slip latex coating. Ideal for heirloom nurseries, cozy library nooks, pediatric luxury clinics, and boutique playrooms.",
    "pricePaise": 0,
    "compareAtPaise": 0,
    "printMinutes": 0,
    "weightGrams": 4600,
    "dimensionsMm": {
      "w": 1400,
      "h": 1400,
      "d": 18
    },
    "edition": "Artisan Handcrafted",
    "status": "active",
    "category": "cafe",
    "ageGroup": "All interiors",
    "themes": [
      "Woodland Creatures",
      "Whimsical Nursery",
      "Sculpted Feathers",
      "Earth Tones"
    ],
    "colorways": [
      "Biscuit Cream",
      "Milk Chocolate",
      "Toasted Ochre",
      "Espresso"
    ],
    "imageGradient": [
      "#1E293B",
      "#0F172A"
    ],
    "imageUrl": "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.56.03%20AM.jpeg",
    "localImageUrl": "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.56.03%20AM.jpeg",
    "gallery": [
      "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.56.03%20AM.jpeg"
    ],
    "localGallery": [
      "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.56.03%20AM.jpeg"
    ],
    "rating": 5,
    "reviews": 19,
    "createdAt": "2026-10-17",
    "updatedAt": "2026-10-19",
    "freeShipping": true,
    "isPreorder": false,
    "preorderShipBy": null,
    "preorderDaysMin": null,
    "preorderDaysMax": null,
    "customFields": [],
    "seoTitle": "Nocturne Owlet Cozy Round Rug · QADRI Rugs",
    "seoDescription": "Capturing the endearing charm of a young owl unfurling its wings beneath starlit canopies, this circular silhouette rug radiates warmth and quiet wonder. Earthy",
    "faq": null,
    "categoryType": "shop"
  },
  {
    "id": "p_rug_031",
    "slug": "maternal-embrace-panda-nursery-round-rug",
    "name": "Maternal Embrace Panda Nursery Round Rug",
    "tagline": "Tender Protection Wrapped in Cloud-Soft Shag",
    "story": "An affectionate tribute to unconditional maternal warmth, this circular nursery rug depicts a mother panda lovingly cradling her slumbering cub. The tender central tableau is framed by a plush dual-tone patchwork shag border in soothing blush and charcoal, accented with playful footprints and delicate blossoms. A calming centerpiece designed to foster sweet dreams and comforting floor play.",
    "function": "Dual-texture craftsmanship pairing an ultra-dense 16mm carved cut-pile center with a luxurious 45mm high-shag outer border. Hand-tufted with hypoallergenic baby-grade bamboo silk and virgin wool, backed by soft non-abrasive cotton backing. Perfectly suited for designer nurseries, luxury children's suites, and peaceful maternal sanctums.",
    "pricePaise": 0,
    "compareAtPaise": 0,
    "printMinutes": 0,
    "weightGrams": 7200,
    "dimensionsMm": {
      "w": 1600,
      "h": 1600,
      "d": 45
    },
    "edition": "Artisan Handcrafted",
    "status": "active",
    "category": "cafe",
    "ageGroup": "All interiors",
    "themes": [
      "Motherhood",
      "Panda Haven",
      "Pastel Nursery",
      "High-Low Texture"
    ],
    "colorways": [
      "Blossom Pink",
      "Charcoal Heather",
      "Cloud White",
      "Pewter Grey"
    ],
    "imageGradient": [
      "#1E293B",
      "#0F172A"
    ],
    "imageUrl": "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.56.04%20AM%20(1).jpeg",
    "localImageUrl": "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.56.04%20AM%20(1).jpeg",
    "gallery": [
      "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.56.04%20AM%20(1).jpeg"
    ],
    "localGallery": [
      "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.56.04%20AM%20(1).jpeg"
    ],
    "rating": 5,
    "reviews": 20,
    "createdAt": "2026-10-17",
    "updatedAt": "2026-10-19",
    "freeShipping": true,
    "isPreorder": false,
    "preorderShipBy": null,
    "preorderDaysMin": null,
    "preorderDaysMax": null,
    "customFields": [],
    "seoTitle": "Maternal Embrace Panda Nursery Round Rug · QADRI Rugs",
    "seoDescription": "An affectionate tribute to unconditional maternal warmth, this circular nursery rug depicts a mother panda lovingly cradling her slumbering cub. The tender cent",
    "faq": null,
    "categoryType": "shop"
  },
  {
    "id": "p_rug_032",
    "slug": "tropics-macaw-flight-silhouette-rug",
    "name": "Tropics Macaw Flight Silhouette Rug",
    "tagline": "Exotic Canopy Brilliance in Radiant Fiber",
    "story": "Channeling the sun-drenched euphoria of tropical rainforests, this vibrant macaw silhouette spreads its plumage across the floor in a burst of joyful movement. Deep azure wings are balanced by a radiant sun-yellow chest and dramatic scarlet tail plumes, bringing infectious vitality and exotic optimism indoors. A striking artistic centerpiece that turns playful energy into bespoke interior art.",
    "function": "Crafted with vibrant color-fast dyed wool fibers using precision hand-tufting at a 15mm dense pile depth. Features meticulous grooved carving between feather segments and an anti-fray hand-serged perimeter over a non-skid rubberized cotton backing. Suitable for luxury play suites, tropical boutique cabanas, creative design studios, and eclectic living rooms.",
    "pricePaise": 0,
    "compareAtPaise": 0,
    "printMinutes": 0,
    "weightGrams": 4400,
    "dimensionsMm": {
      "w": 1500,
      "h": 1350,
      "d": 15
    },
    "edition": "Artisan Handcrafted",
    "status": "active",
    "category": "cafe",
    "ageGroup": "All interiors",
    "themes": [
      "Tropical Fauna",
      "Exotic Birds",
      "Vibrant Primary Colors",
      "Die-Cut Silhouette"
    ],
    "colorways": [
      "Azure Blue",
      "Canary Yellow",
      "Scarlet Red",
      "Pure White"
    ],
    "imageGradient": [
      "#1E293B",
      "#0F172A"
    ],
    "imageUrl": "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.56.04%20AM%20(2).jpeg",
    "localImageUrl": "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.56.04%20AM%20(2).jpeg",
    "gallery": [
      "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.56.04%20AM%20(2).jpeg"
    ],
    "localGallery": [
      "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.56.04%20AM%20(2).jpeg"
    ],
    "rating": 5,
    "reviews": 21,
    "createdAt": "2026-10-17",
    "updatedAt": "2026-10-19",
    "freeShipping": true,
    "isPreorder": false,
    "preorderShipBy": null,
    "preorderDaysMin": null,
    "preorderDaysMax": null,
    "customFields": [],
    "seoTitle": "Tropics Macaw Flight Silhouette Rug · QADRI Rugs",
    "seoDescription": "Channeling the sun-drenched euphoria of tropical rainforests, this vibrant macaw silhouette spreads its plumage across the floor in a burst of joyful movement. ",
    "faq": null,
    "categoryType": "shop"
  },
  {
    "id": "p_rug_033",
    "slug": "imperial-swan-sovereign-round-rug",
    "name": "Imperial Swan Sovereign Round Rug",
    "tagline": "Regal Serenity Crowned in Pure Ivory",
    "story": "Evoking timeless fairy tales and the serene poise of royal palace lakes, the Imperial Swan rug showcases an elegant crowned cygnet unfurling magnificent feathered wings. Rendered in monochromatic tones of ivory and warm parchment, the composition is crowned with antique gold leaf accents, celebrating dignity, purity, and quiet grandeur. A poetic accent that elevates any refined interior with understated majesty.",
    "function": "Custom hand-tufted using fine semi-worsted wool blended with subtle metallic-sheen botanical viscose on the golden coronet. Exhibits hand-chiseled 16mm wing feather reliefs against a 12mm velvety cream ground with premium suede backing. Crafted for luxury nurseries, bridal dressing rooms, boutique hotel suites, and elegant reading corners.",
    "pricePaise": 0,
    "compareAtPaise": 0,
    "printMinutes": 0,
    "weightGrams": 5400,
    "dimensionsMm": {
      "w": 1600,
      "h": 1400,
      "d": 16
    },
    "edition": "Artisan Handcrafted",
    "status": "active",
    "category": "deskmate",
    "ageGroup": "All interiors",
    "themes": [
      "Royalty",
      "Swan Elegance",
      "Monochrome Ivory",
      "Regal Fairy Tale"
    ],
    "colorways": [
      "Pristine White",
      "Warm Ivory",
      "Antique Gold",
      "Midnight Jet"
    ],
    "imageGradient": [
      "#1E293B",
      "#0F172A"
    ],
    "imageUrl": "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.56.04%20AM.jpeg",
    "localImageUrl": "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.56.04%20AM.jpeg",
    "gallery": [
      "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.56.04%20AM.jpeg"
    ],
    "localGallery": [
      "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.56.04%20AM.jpeg"
    ],
    "rating": 5,
    "reviews": 22,
    "createdAt": "2026-10-17",
    "updatedAt": "2026-10-19",
    "freeShipping": true,
    "isPreorder": false,
    "preorderShipBy": null,
    "preorderDaysMin": null,
    "preorderDaysMax": null,
    "customFields": [],
    "seoTitle": "Imperial Swan Sovereign Round Rug · QADRI Rugs",
    "seoDescription": "Evoking timeless fairy tales and the serene poise of royal palace lakes, the Imperial Swan rug showcases an elegant crowned cygnet unfurling magnificent feather",
    "faq": null,
    "categoryType": "shop"
  },
  {
    "id": "p_rug_034",
    "slug": "cookies-and-cream-swirl-silhouette-rug",
    "name": "Cookies & Cream Swirl Silhouette Rug",
    "tagline": "A Decadent Whim of Monochrome Delight",
    "story": "Capturing the playful luxury of culinary nostalgia, this cloud-scalloped silhouette rug reimagines crushed chocolate biscuits swirling in rich sweet cream. Bold black contours interweave with luscious milk-white ripples, punctuated by dimensional cookie rounds and scattered cocoa speckles. It strikes a sophisticated balance between high-contrast graphic art and lighthearted indulgence.",
    "function": "Expertly hand-tufted in premium high-twist wool and silky plush fibers with 18mm pile height and 3D embossed cookie medallions. Finished with hand-bound contour edges and a non-slip cotton canvas foundation. Ideal for trendy boutique cafes, contemporary game rooms, media dens, and youth luxury bedrooms.",
    "pricePaise": 0,
    "compareAtPaise": 0,
    "printMinutes": 0,
    "weightGrams": 5800,
    "dimensionsMm": {
      "w": 1600,
      "h": 1500,
      "d": 18
    },
    "edition": "Artisan Handcrafted",
    "status": "active",
    "category": "cafe",
    "ageGroup": "All interiors",
    "themes": [
      "Gourmet Confection",
      "Pop Art",
      "Monochrome Swirl",
      "Custom Silhouette"
    ],
    "colorways": [
      "Onyx Black",
      "Sweet Cream",
      "Cocoa Crumb",
      "Alabaster"
    ],
    "imageGradient": [
      "#1E293B",
      "#0F172A"
    ],
    "imageUrl": "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.56.05%20AM%20(1).jpeg",
    "localImageUrl": "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.56.05%20AM%20(1).jpeg",
    "gallery": [
      "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.56.05%20AM%20(1).jpeg"
    ],
    "localGallery": [
      "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.56.05%20AM%20(1).jpeg"
    ],
    "rating": 5,
    "reviews": 23,
    "createdAt": "2026-10-17",
    "updatedAt": "2026-10-19",
    "freeShipping": true,
    "isPreorder": false,
    "preorderShipBy": null,
    "preorderDaysMin": null,
    "preorderDaysMax": null,
    "customFields": [],
    "seoTitle": "Cookies & Cream Swirl Silhouette Rug · QADRI Rugs",
    "seoDescription": "Capturing the playful luxury of culinary nostalgia, this cloud-scalloped silhouette rug reimagines crushed chocolate biscuits swirling in rich sweet cream. Bold",
    "faq": null,
    "categoryType": "shop"
  },
  {
    "id": "p_rug_035",
    "slug": "dual-soul-contour-area-rug",
    "name": "Dual Soul Contour Area Rug",
    "tagline": "Intimacy Traced in Hypnotic Optical Contours",
    "story": "A dramatic homage to human connection and optical art, this monochrome area rug reveals two profiles converging in an eternal embrace formed by undulating topographic waves. The rhythmic black and ivory ripples create an illusion of depth, shifting subtly as viewers move through the space. A provocative conversation piece that anchors contemporary rooms with intellectual passion and graphic majesty.",
    "function": "Dense flat-and-cut combination hand-tufted in 100% fine wool with hand-knotted fringe ends. Features 14mm precision-carved black line work raised above an ivory recessed ground, bonded to heavy woven jute backing for dimensional stability. Tailored for art gallery reception spaces, modern penthouses, luxury master bedrooms, and design-led executive offices.",
    "pricePaise": 0,
    "compareAtPaise": 0,
    "printMinutes": 0,
    "weightGrams": 10500,
    "dimensionsMm": {
      "w": 1800,
      "h": 2600,
      "d": 14
    },
    "edition": "Artisan Handcrafted",
    "status": "active",
    "category": "deskmate",
    "ageGroup": "All interiors",
    "themes": [
      "Optical Art",
      "Romantic Minimalism",
      "Human Silhouette",
      "Topographic Lines"
    ],
    "colorways": [
      "Velvet Black",
      "Ivory White",
      "Graphite Shadow"
    ],
    "imageGradient": [
      "#1E293B",
      "#0F172A"
    ],
    "imageUrl": "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.56.05%20AM%20(2).jpeg",
    "localImageUrl": "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.56.05%20AM%20(2).jpeg",
    "gallery": [
      "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.56.05%20AM%20(2).jpeg"
    ],
    "localGallery": [
      "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.56.05%20AM%20(2).jpeg"
    ],
    "rating": 5,
    "reviews": 24,
    "createdAt": "2026-10-17",
    "updatedAt": "2026-10-19",
    "freeShipping": true,
    "isPreorder": false,
    "preorderShipBy": null,
    "preorderDaysMin": null,
    "preorderDaysMax": null,
    "customFields": [],
    "seoTitle": "Dual Soul Contour Area Rug · QADRI Rugs",
    "seoDescription": "A dramatic homage to human connection and optical art, this monochrome area rug reveals two profiles converging in an eternal embrace formed by undulating topog",
    "faq": null,
    "categoryType": "shop"
  },
  {
    "id": "p_rug_036",
    "slug": "sweetheart-oreo-swirl-tufted-rug",
    "name": "Sweetheart Oreo Swirl Tufted Rug",
    "tagline": "Affection Infused with Decadent Cocoa Swirls",
    "story": "Reimagining romantic iconography through a witty, contemporary lens, this heart-shaped rug swirls with rich chocolate cream and decadent cookie motifs. Velvety ripples of dark cocoa embrace fluffy vanilla loops, adorned with dimensional cookie medallions that celebrate pure pleasure. It brings spontaneous warmth, humor, and chic graphic power to modern residential spaces.",
    "function": "Hand-tufted using ultra-soft microfiber plush and resilient spun wool at a lofty 20mm pile height, with raised 3D biscuit relief accents. Fitted with custom shaped edging and reinforced eco-latex non-slip backing. Suitable for luxury walk-in wardrobes, romantic master boudoirs, boutique dessert parlors, and modern lounge spaces.",
    "pricePaise": 0,
    "compareAtPaise": 0,
    "printMinutes": 0,
    "weightGrams": 4900,
    "dimensionsMm": {
      "w": 1500,
      "h": 1400,
      "d": 20
    },
    "edition": "Artisan Handcrafted",
    "status": "active",
    "category": "cafe",
    "ageGroup": "All interiors",
    "themes": [
      "Heart Silhouette",
      "Culinary Pop Art",
      "Monochrome Swirl",
      "Tactile Indulgence"
    ],
    "colorways": [
      "Dark Cocoa",
      "Creamy Vanilla",
      "Espresso Spot"
    ],
    "imageGradient": [
      "#1E293B",
      "#0F172A"
    ],
    "imageUrl": "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.56.05%20AM.jpeg",
    "localImageUrl": "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.56.05%20AM.jpeg",
    "gallery": [
      "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.56.05%20AM.jpeg"
    ],
    "localGallery": [
      "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.56.05%20AM.jpeg"
    ],
    "rating": 5,
    "reviews": 25,
    "createdAt": "2026-10-17",
    "updatedAt": "2026-10-19",
    "freeShipping": true,
    "isPreorder": false,
    "preorderShipBy": null,
    "preorderDaysMin": null,
    "preorderDaysMax": null,
    "customFields": [],
    "seoTitle": "Sweetheart Oreo Swirl Tufted Rug · QADRI Rugs",
    "seoDescription": "Reimagining romantic iconography through a witty, contemporary lens, this heart-shaped rug swirls with rich chocolate cream and decadent cookie motifs. Velvety ",
    "faq": null,
    "categoryType": "shop"
  },
  {
    "id": "p_rug_037",
    "slug": "matcha-latte-rosette-statement-rug",
    "name": "Matcha Latte Rosette Statement Rug",
    "tagline": "Botanical Infusion in Silken Barista Foam",
    "story": "Capturing the harmonious fusion of ceremonial matcha and golden espresso foam, this irregular splash rug transforms latte art into fine floor sculpture. Delicate heart-shaped petals in soft sage green and warm hazelnut unfurl within ripples of frothy cream, framed by an energetic spatter perimeter. A sensory celebration of slow mornings and elevated culinary rituals.",
    "function": "Meticulously tufted with New Zealand wool and luster-treated botanical viscose yarns, featuring multi-depth cut pile from 14mm to 18mm with crisp hand-carved separation grooves. Supported by moisture-resistant non-slip canvas backing. Perfectly suited for artisanal tasting rooms, luxury kitchen nooks, modern cafes, and boutique concept stores.",
    "pricePaise": 0,
    "compareAtPaise": 0,
    "printMinutes": 0,
    "weightGrams": 4800,
    "dimensionsMm": {
      "w": 1600,
      "h": 1300,
      "d": 18
    },
    "edition": "Artisan Handcrafted",
    "status": "active",
    "category": "cafe",
    "ageGroup": "All interiors",
    "themes": [
      "Latte Art",
      "Matcha Infusion",
      "Splash Form",
      "Cafe Culture"
    ],
    "colorways": [
      "Hazelnut Espresso",
      "Sage Matcha",
      "Warm Caramel",
      "Silken Foam"
    ],
    "imageGradient": [
      "#1E293B",
      "#0F172A"
    ],
    "imageUrl": "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.56.06%20AM%20(1).jpeg",
    "localImageUrl": "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.56.06%20AM%20(1).jpeg",
    "gallery": [
      "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.56.06%20AM%20(1).jpeg"
    ],
    "localGallery": [
      "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.56.06%20AM%20(1).jpeg"
    ],
    "rating": 5,
    "reviews": 8,
    "createdAt": "2026-10-17",
    "updatedAt": "2026-10-19",
    "freeShipping": true,
    "isPreorder": false,
    "preorderShipBy": null,
    "preorderDaysMin": null,
    "preorderDaysMax": null,
    "customFields": [],
    "seoTitle": "Matcha Latte Rosette Statement Rug · QADRI Rugs",
    "seoDescription": "Capturing the harmonious fusion of ceremonial matcha and golden espresso foam, this irregular splash rug transforms latte art into fine floor sculpture. Delicat",
    "faq": null,
    "categoryType": "shop"
  },
  {
    "id": "p_rug_038",
    "slug": "slumbering-hound-blush-pet-rug",
    "name": "Slumbering Hound Blush Pet Rug",
    "tagline": "Unconditional Comfort in a Peaceful Dream",
    "story": "Capturing the serene bliss of a faithful puppy curled in deep slumber, this bespoke silhouette rug radiates unconditional warmth and comfort. Styled in a tranquil dusty-rose palette with gentle cream muzzle markings and a fresh sage collar, it embodies peaceful loyalty. A tender visual anchor that brings soothing domestic calm to any sanctuary.",
    "function": "Tufted in ultra-plush hypoallergenic cloud wool at an indulgent 18mm pile depth, featuring soft beveled contouring around the curled paws and floppy ears. Backed by durable anti-skid cotton backing with water-resistant inner barrier. Designed for luxury pet lounges, serene nurseries, children's reading dens, and primary bedside suites.",
    "pricePaise": 0,
    "compareAtPaise": 0,
    "printMinutes": 0,
    "weightGrams": 4300,
    "dimensionsMm": {
      "w": 1600,
      "h": 1100,
      "d": 18
    },
    "edition": "Artisan Handcrafted",
    "status": "active",
    "category": "cafe",
    "ageGroup": "All interiors",
    "themes": [
      "Canine Companion",
      "Curled Silhouette",
      "Pastel Sanctuary",
      "Gentle Nursery"
    ],
    "colorways": [
      "Dusty Blush",
      "Warm Cream",
      "Sage Green",
      "Chestnut Brown"
    ],
    "imageGradient": [
      "#1E293B",
      "#0F172A"
    ],
    "imageUrl": "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.56.06%20AM%20(2).jpeg",
    "localImageUrl": "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.56.06%20AM%20(2).jpeg",
    "gallery": [
      "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.56.06%20AM%20(2).jpeg"
    ],
    "localGallery": [
      "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.56.06%20AM%20(2).jpeg"
    ],
    "rating": 5,
    "reviews": 9,
    "createdAt": "2026-10-17",
    "updatedAt": "2026-10-19",
    "freeShipping": true,
    "isPreorder": false,
    "preorderShipBy": null,
    "preorderDaysMin": null,
    "preorderDaysMax": null,
    "customFields": [],
    "seoTitle": "Slumbering Hound Blush Pet Rug · QADRI Rugs",
    "seoDescription": "Capturing the serene bliss of a faithful puppy curled in deep slumber, this bespoke silhouette rug radiates unconditional warmth and comfort. Styled in a tranqu",
    "faq": null,
    "categoryType": "shop"
  },
  {
    "id": "p_rug_039",
    "slug": "jardin-asymetrique-botanical-wave-rug",
    "name": "Jardin Asymétrique Botanical Wave Rug",
    "tagline": "A Duality of Flora and Architectural Modernism",
    "story": "Conceived as an avant-garde dialogue between classical botany and modern geometric abstraction, this asymmetric wave rug unites deep forest emerald with soft alabaster ivory. A sculptural lavender bloom with golden pistils bursts across an azure circle, countered by an embossed pleated fan and climbing foliage. An exquisite tapestry for the floor that breathes living art into curated spaces.",
    "function": "Master-tufted using a rich blend of fine Australian wool and organic bamboo silk, showcasing intricate multi-level carving from 12mm ground to 22mm floral high relief. Finished with hand-bound undulating perimeter and heavyweight cotton-canvas backing. Ideal for grand entrance foyers, art collector salons, luxury design showrooms, and master dressing suites.",
    "pricePaise": 0,
    "compareAtPaise": 0,
    "printMinutes": 0,
    "weightGrams": 7400,
    "dimensionsMm": {
      "w": 1700,
      "h": 1700,
      "d": 22
    },
    "edition": "Artisan Handcrafted",
    "status": "active",
    "category": "deskmate",
    "ageGroup": "All interiors",
    "themes": [
      "Botanical Abstraction",
      "Art Deco Fusion",
      "Sculptural Floral",
      "Organic Waves"
    ],
    "colorways": [
      "Forest Emerald",
      "Lavender Mauve",
      "Alabaster Cream",
      "Sky Cerulean",
      "Marigold"
    ],
    "imageGradient": [
      "#1E293B",
      "#0F172A"
    ],
    "imageUrl": "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.56.06%20AM%20(3).jpeg",
    "localImageUrl": "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.56.06%20AM%20(3).jpeg",
    "gallery": [
      "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.56.06%20AM%20(3).jpeg"
    ],
    "localGallery": [
      "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.56.06%20AM%20(3).jpeg"
    ],
    "rating": 5,
    "reviews": 10,
    "createdAt": "2026-10-17",
    "updatedAt": "2026-10-19",
    "freeShipping": true,
    "isPreorder": false,
    "preorderShipBy": null,
    "preorderDaysMin": null,
    "preorderDaysMax": null,
    "customFields": [],
    "seoTitle": "Jardin Asymétrique Botanical Wave Rug · QADRI Rugs",
    "seoDescription": "Conceived as an avant-garde dialogue between classical botany and modern geometric abstraction, this asymmetric wave rug unites deep forest emerald with soft al",
    "faq": null,
    "categoryType": "shop"
  },
  {
    "id": "p_rug_040",
    "slug": "cosmic-vision-spiral-eye-rug",
    "name": "Cosmic Vision Spiral Eye Rug",
    "tagline": "Psychedelic Awakening in High-Contrast Monolith",
    "story": "Channeling retro-surrealism and optical mysticism, the Cosmic Vision rug centers on a hypnotic spiral eye framed by radiant flame lashes. Dripping tear contours cascade downwards to form melting heart talismans, creating an arresting symbol of emotional perception and visionary insight. A daring statement piece that asserts bold individuality in contemporary interiors.",
    "function": "Hand-tufted in premium high-twist matte black and pure optical white wool, with sharp hand-carved separation lines at a uniform 16mm dense cut pile. Backed with reinforced canvas and anti-slip edge trim for intricate silhouette stability. Designed for creative executive suites, modern entertainment lounges, music rooms, and contemporary art galleries.",
    "pricePaise": 0,
    "compareAtPaise": 0,
    "printMinutes": 0,
    "weightGrams": 4600,
    "dimensionsMm": {
      "w": 1500,
      "h": 1400,
      "d": 16
    },
    "edition": "Artisan Handcrafted",
    "status": "active",
    "category": "keychains",
    "ageGroup": "All interiors",
    "themes": [
      "Mystic Eye",
      "Psychedelic Pop",
      "Optical Art",
      "Melting Silhouette"
    ],
    "colorways": [
      "Onyx Black",
      "Optical White"
    ],
    "imageGradient": [
      "#1E293B",
      "#0F172A"
    ],
    "imageUrl": "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.56.06%20AM.jpeg",
    "localImageUrl": "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.56.06%20AM.jpeg",
    "gallery": [
      "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.56.06%20AM.jpeg"
    ],
    "localGallery": [
      "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.56.06%20AM.jpeg"
    ],
    "rating": 5,
    "reviews": 11,
    "createdAt": "2026-10-17",
    "updatedAt": "2026-10-19",
    "freeShipping": true,
    "isPreorder": false,
    "preorderShipBy": null,
    "preorderDaysMin": null,
    "preorderDaysMax": null,
    "customFields": [],
    "seoTitle": "Cosmic Vision Spiral Eye Rug · QADRI Rugs",
    "seoDescription": "Channeling retro-surrealism and optical mysticism, the Cosmic Vision rug centers on a hypnotic spiral eye framed by radiant flame lashes. Dripping tear contours",
    "faq": null,
    "categoryType": "shop"
  },
  {
    "id": "p_rug_041",
    "slug": "nebula-splatter-contour-art-rug",
    "name": "Nebula Splatter Contour Art Rug",
    "tagline": "Galactic Fluidity Cast in Monochromatic Rhythm",
    "story": "Capturing the violent beauty of a celestial explosion frozen in time, this amoebic statement rug ripples with rhythmic black and ivory gravitational waves. A starry central void sprinkled with stardust-like flecks stretches outward into organic fluid lobes, defying conventional geometric boundaries. It energizes floors with dynamic cosmic balance and avant-garde confidence.",
    "function": "Hand-tufted using dense, resilient New Zealand wool with hand-beveled concentric ripples at an 18mm pile depth. Completed with precision contour binding and non-slip vulcanized cotton backing. Perfectly suited for minimalist lofts, avant-garde office reception lobbies, modern media rooms, and designer living spaces.",
    "pricePaise": 0,
    "compareAtPaise": 0,
    "printMinutes": 0,
    "weightGrams": 5200,
    "dimensionsMm": {
      "w": 1600,
      "h": 1500,
      "d": 18
    },
    "edition": "Artisan Handcrafted",
    "status": "active",
    "category": "cafe",
    "ageGroup": "All interiors",
    "themes": [
      "Cosmic Fluidity",
      "Amoeba Silhouette",
      "Op-Art Splatter",
      "Monochrome Modernism"
    ],
    "colorways": [
      "Deep Space Black",
      "Ivory Starlight",
      "Charcoal Mist"
    ],
    "imageGradient": [
      "#1E293B",
      "#0F172A"
    ],
    "imageUrl": "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.56.07%20AM.jpeg",
    "localImageUrl": "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.56.07%20AM.jpeg",
    "gallery": [
      "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.56.07%20AM.jpeg"
    ],
    "localGallery": [
      "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.56.07%20AM.jpeg"
    ],
    "rating": 5,
    "reviews": 12,
    "createdAt": "2026-10-17",
    "updatedAt": "2026-10-19",
    "freeShipping": true,
    "isPreorder": false,
    "preorderShipBy": null,
    "preorderDaysMin": null,
    "preorderDaysMax": null,
    "customFields": [],
    "seoTitle": "Nebula Splatter Contour Art Rug · QADRI Rugs",
    "seoDescription": "Capturing the violent beauty of a celestial explosion frozen in time, this amoebic statement rug ripples with rhythmic black and ivory gravitational waves. A st",
    "faq": null,
    "categoryType": "shop"
  },
  {
    "id": "p_rug_042",
    "slug": "snow-flamingo-sculptural-silhouette-rug",
    "name": "Snow Flamingo Sculptural Silhouette Rug",
    "tagline": "Quiet Elegance Poised in Feathery Ivory",
    "story": "Reinterpreting the iconic flamingo through a serene, ethereal white silhouette, this rug captures the bird resting with folded angular limbs and an arched neck. Hand-chiseled feather contours provide subtle architectural texture, punctuated by an exquisite blush-peach and onyx beak. A rare, minimalist wildlife statement that adds quiet sophistication and grace to light-filled interiors.",
    "function": "Precision hand-tufted in 100% fine wool with silk-blend accents on the sculpted wing tiers, offering a 16mm high-definition cut pile. Bound with meticulous concealed edge stitching and backed by heavy anti-slip woven cotton. Ideal for coastal luxury villas, Scandinavian sunrooms, modern master suites, and chic boutique lounges.",
    "pricePaise": 0,
    "compareAtPaise": 0,
    "printMinutes": 0,
    "weightGrams": 4900,
    "dimensionsMm": {
      "w": 1600,
      "h": 1400,
      "d": 16
    },
    "edition": "Artisan Handcrafted",
    "status": "active",
    "category": "cafe",
    "ageGroup": "All interiors",
    "themes": [
      "Fauna Silhouette",
      "Avian Minimalism",
      "Ivory Texture",
      "Organic Poise"
    ],
    "colorways": [
      "Pure Alabaster",
      "Parchment Cream",
      "Blush Peach",
      "Jet Black"
    ],
    "imageGradient": [
      "#1E293B",
      "#0F172A"
    ],
    "imageUrl": "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.56.08%20AM%20(1).jpeg",
    "localImageUrl": "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.56.08%20AM%20(1).jpeg",
    "gallery": [
      "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.56.08%20AM%20(1).jpeg"
    ],
    "localGallery": [
      "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.56.08%20AM%20(1).jpeg"
    ],
    "rating": 5,
    "reviews": 13,
    "createdAt": "2026-10-17",
    "updatedAt": "2026-10-19",
    "freeShipping": true,
    "isPreorder": false,
    "preorderShipBy": null,
    "preorderDaysMin": null,
    "preorderDaysMax": null,
    "customFields": [],
    "seoTitle": "Snow Flamingo Sculptural Silhouette Rug · QADRI Rugs",
    "seoDescription": "Reinterpreting the iconic flamingo through a serene, ethereal white silhouette, this rug captures the bird resting with folded angular limbs and an arched neck.",
    "faq": null,
    "categoryType": "shop"
  },
  {
    "id": "p_rug_043",
    "slug": "kaleidoscope-monolith-round-medallion-rug",
    "name": "Kaleidoscope Monolith Round Medallion Rug",
    "tagline": "Centrifugal Geometry and Tribal Modernism Unified",
    "story": "A hypnotic convergence of modern tribalism and optical abstraction, this round medallion rug radiates centrifugal energy from an explosive center. Concentric rings of scalloped ribbons, raised bead-like spheres, and alternating radial spokes form an imposing visual rhythm. It anchors contemporary living spaces with commanding architectural presence and timeless optical intrigue.",
    "function": "Artisanal hand-tufted construction combining dense 16mm cut pile with raised 22mm hand-sculpted relief beading in premium semi-worsted wool. Fitted with heavy woven twill backing for flat lay and exceptional durability. Suited for grand circular foyers, executive boardroom seating areas, luxury dining spaces, and modernist penthouses.",
    "pricePaise": 0,
    "compareAtPaise": 0,
    "printMinutes": 0,
    "weightGrams": 7900,
    "dimensionsMm": {
      "w": 1800,
      "h": 1800,
      "d": 22
    },
    "edition": "Artisan Handcrafted",
    "status": "active",
    "category": "deskmate",
    "ageGroup": "All interiors",
    "themes": [
      "Modern Medallion",
      "Optical Geometry",
      "Radial Rhythm",
      "Architectural Statement"
    ],
    "colorways": [
      "Velvet Black",
      "Ivory White",
      "Oatmeal Beige"
    ],
    "imageGradient": [
      "#1E293B",
      "#0F172A"
    ],
    "imageUrl": "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.56.08%20AM.jpeg",
    "localImageUrl": "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.56.08%20AM.jpeg",
    "gallery": [
      "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.56.08%20AM.jpeg"
    ],
    "localGallery": [
      "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.56.08%20AM.jpeg"
    ],
    "rating": 5,
    "reviews": 14,
    "createdAt": "2026-10-17",
    "updatedAt": "2026-10-19",
    "freeShipping": true,
    "isPreorder": false,
    "preorderShipBy": null,
    "preorderDaysMin": null,
    "preorderDaysMax": null,
    "customFields": [],
    "seoTitle": "Kaleidoscope Monolith Round Medallion Rug · QADRI Rugs",
    "seoDescription": "A hypnotic convergence of modern tribalism and optical abstraction, this round medallion rug radiates centrifugal energy from an explosive center. Concentric ri",
    "faq": null,
    "categoryType": "shop"
  },
  {
    "id": "p_rug_044",
    "slug": "cascade-caramel-melt-grand-runner-rug",
    "name": "Cascade Caramel Melt Grand Runner Rug",
    "tagline": "An Immersive River of Sweet Decadence",
    "story": "Blurring the line between functional floor covering and immersive installation art, this grand spilling runner simulates melted caramel and milk chocolate cascading into an expansive puddle. The fluid contours and frothy micro-droplets create a striking architectural illusion that stretches across hallways and living rooms. A masterwork of bespoke textile design engineered for show-stopping environments.",
    "function": "Monumental hand-tufted wool rug crafted in an elongated custom organic silhouette, featuring 18mm plush pile with beveled droplet carvings. Reinforced with flex-mesh canvas backing and anti-slip perimeter treatment to maintain its sweeping organic shape in high-traffic zones. Ideal for luxury residential corridors, open-concept lofts, boutique hotel lobbies, and flagship retail showrooms.",
    "pricePaise": 0,
    "compareAtPaise": 0,
    "printMinutes": 0,
    "weightGrams": 14500,
    "dimensionsMm": {
      "w": 1800,
      "h": 4000,
      "d": 18
    },
    "edition": "Artisan Handcrafted",
    "status": "active",
    "category": "keychains",
    "ageGroup": "All interiors",
    "themes": [
      "Fluid Spillage",
      "Installation Art",
      "Gourmet Runner",
      "Architectural Organic"
    ],
    "colorways": [
      "Mocha Brown",
      "Warm Toffee",
      "Frothy Cream",
      "Caramel Tan"
    ],
    "imageGradient": [
      "#1E293B",
      "#0F172A"
    ],
    "imageUrl": "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.56.09%20AM%20(1).jpeg",
    "localImageUrl": "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.56.09%20AM%20(1).jpeg",
    "gallery": [
      "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.56.09%20AM%20(1).jpeg"
    ],
    "localGallery": [
      "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.56.09%20AM%20(1).jpeg"
    ],
    "rating": 5,
    "reviews": 15,
    "createdAt": "2026-10-17",
    "updatedAt": "2026-10-19",
    "freeShipping": true,
    "isPreorder": false,
    "preorderShipBy": null,
    "preorderDaysMin": null,
    "preorderDaysMax": null,
    "customFields": [],
    "seoTitle": "Cascade Caramel Melt Grand Runner Rug · QADRI Rugs",
    "seoDescription": "Blurring the line between functional floor covering and immersive installation art, this grand spilling runner simulates melted caramel and milk chocolate casca",
    "faq": null,
    "categoryType": "shop"
  },
  {
    "id": "p_rug_045",
    "slug": "coralie-kawaii-octopus-play-rug",
    "name": "Coralie Kawaii Octopus Play Rug",
    "tagline": "Charming Ocean Wonder for Joyful Spaces",
    "story": "Bringing the playful mystery of underwater worlds into bright living spaces, this enchanting baby octopus rug spreads eight curling tentacles across the room. Sculpted in pastel rose with endearing starry anime eyes, rosy blush spots, and raised suction cups, it invites imaginative play and cozy comfort. A cherished heirloom piece that turns child spaces into gentle aquatic wonderlands.",
    "function": "Hand-tufted in ultra-soft cloud fleece wool and hypoallergenic microfiber yarns with a velvety 16mm cut pile and embossed suction-cup relief work. Backed with an odorless, non-toxic anti-skid rubberized cotton backing. Suitable for luxury nurseries, whimsical playrooms, pediatric waiting salons, and coastal holiday homes.",
    "pricePaise": 0,
    "compareAtPaise": 0,
    "printMinutes": 0,
    "weightGrams": 4700,
    "dimensionsMm": {
      "w": 1600,
      "h": 1500,
      "d": 16
    },
    "edition": "Artisan Handcrafted",
    "status": "active",
    "category": "cafe",
    "ageGroup": "All interiors",
    "themes": [
      "Marine Life",
      "Kawaii Aesthetic",
      "Pastel Nursery",
      "Curved Tentacles"
    ],
    "colorways": [
      "Coral Blush",
      "Petal Pink",
      "Tender Rose",
      "Charcoal Black"
    ],
    "imageGradient": [
      "#1E293B",
      "#0F172A"
    ],
    "imageUrl": "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.56.09%20AM%20(2).jpeg",
    "localImageUrl": "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.56.09%20AM%20(2).jpeg",
    "gallery": [
      "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.56.09%20AM%20(2).jpeg"
    ],
    "localGallery": [
      "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.56.09%20AM%20(2).jpeg"
    ],
    "rating": 5,
    "reviews": 16,
    "createdAt": "2026-10-17",
    "updatedAt": "2026-10-19",
    "freeShipping": true,
    "isPreorder": false,
    "preorderShipBy": null,
    "preorderDaysMin": null,
    "preorderDaysMax": null,
    "customFields": [],
    "seoTitle": "Coralie Kawaii Octopus Play Rug · QADRI Rugs",
    "seoDescription": "Bringing the playful mystery of underwater worlds into bright living spaces, this enchanting baby octopus rug spreads eight curling tentacles across the room. S",
    "faq": null,
    "categoryType": "shop"
  },
  {
    "id": "p_rug_046",
    "slug": "barista-solstice-crema-rosette-rug",
    "name": "Barista Solstice Crema Rosette Rug",
    "tagline": "Radiant Morning Warmth Rendered in Wool",
    "story": "Emulating the sunburst symmetry of a freshly poured latte rosetta expanding across velvety crema, this round statement rug warms interiors with rich aromatic hues. Radiating ripples of milk foam and toffee-roasted coffee crest into playful splash edges, honoring the meticulous craft of specialty espresso. A welcoming centerpiece that radiates sensory indulgence and morning optimism.",
    "function": "Expertly hand-tufted in New Zealand worsted wool with luster-wash bamboo silk highlights across the foam rosetta. Features multi-depth cut pile varying from 14mm to 19mm with hand-carved crema grooves and natural latex anti-skid canvas backing. Perfect for luxury breakfast nooks, sunroom lounges, artisan cafes, and boutique hotel lobbies.",
    "pricePaise": 0,
    "compareAtPaise": 0,
    "printMinutes": 0,
    "weightGrams": 6400,
    "dimensionsMm": {
      "w": 1700,
      "h": 1700,
      "d": 19
    },
    "edition": "Artisan Handcrafted",
    "status": "active",
    "category": "cafe",
    "ageGroup": "All interiors",
    "themes": [
      "Espresso Art",
      "Sunburst Splash",
      "Gourmet Comfort",
      "Organic Symmetry"
    ],
    "colorways": [
      "Espresso Brown",
      "Golden Crema",
      "Toffee Caramel",
      "Milk Froth"
    ],
    "imageGradient": [
      "#1E293B",
      "#0F172A"
    ],
    "imageUrl": "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.56.09%20AM.jpeg",
    "localImageUrl": "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.56.09%20AM.jpeg",
    "gallery": [
      "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.56.09%20AM.jpeg"
    ],
    "localGallery": [
      "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.56.09%20AM.jpeg"
    ],
    "rating": 5,
    "reviews": 17,
    "createdAt": "2026-10-17",
    "updatedAt": "2026-10-19",
    "freeShipping": true,
    "isPreorder": false,
    "preorderShipBy": null,
    "preorderDaysMin": null,
    "preorderDaysMax": null,
    "customFields": [],
    "seoTitle": "Barista Solstice Crema Rosette Rug · QADRI Rugs",
    "seoDescription": "Emulating the sunburst symmetry of a freshly poured latte rosetta expanding across velvety crema, this round statement rug warms interiors with rich aromatic hu",
    "faq": null,
    "categoryType": "shop"
  },
  {
    "id": "p_rug_047",
    "slug": "sonoran-saguaro-retro-silhouette-rug",
    "name": "Sonoran Saguaro Retro Silhouette Rug",
    "tagline": "Mid-Century Desert Modernism in Lush Greens",
    "story": "Drawing inspiration from the iconic silhouetted flora of the American Southwest and mid-century modern aesthetic, this saguaro cactus rug adds striking sculptural presence. Linear ribbed bands in olive, moss, and forest green capture the enduring strength and graphic serenity of desert life, outlined with clean ivory borders. A timeless botanical statement that bridges retro chic and contemporary organic luxury.",
    "function": "Crafted with high-resilience semi-worsted wool using dense hand-tufting at 16mm pile height, with distinct beveled relief between color ribs. Backed with heavy duty action-bac canvas and durable edge-serging for enduring resilience. Well-suited for mid-century modern living rooms, sun-drenched verandas, boutique desert retreats, and creative studios.",
    "pricePaise": 0,
    "compareAtPaise": 0,
    "printMinutes": 0,
    "weightGrams": 6900,
    "dimensionsMm": {
      "w": 1600,
      "h": 2200,
      "d": 16
    },
    "edition": "Artisan Handcrafted",
    "status": "active",
    "category": "cafe",
    "ageGroup": "All interiors",
    "themes": [
      "Desert Modernism",
      "Cactus Botanical",
      "Mid-Century Modern",
      "Striped Contour"
    ],
    "colorways": [
      "Forest Green",
      "Olive Moss",
      "Sage Green",
      "Desert Cream"
    ],
    "imageGradient": [
      "#1E293B",
      "#0F172A"
    ],
    "imageUrl": "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.56.10%20AM%20(1).jpeg",
    "localImageUrl": "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.56.10%20AM%20(1).jpeg",
    "gallery": [
      "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.56.10%20AM%20(1).jpeg"
    ],
    "localGallery": [
      "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.56.10%20AM%20(1).jpeg"
    ],
    "rating": 5,
    "reviews": 18,
    "createdAt": "2026-10-17",
    "updatedAt": "2026-10-19",
    "freeShipping": true,
    "isPreorder": false,
    "preorderShipBy": null,
    "preorderDaysMin": null,
    "preorderDaysMax": null,
    "customFields": [],
    "seoTitle": "Sonoran Saguaro Retro Silhouette Rug · QADRI Rugs",
    "seoDescription": "Drawing inspiration from the iconic silhouetted flora of the American Southwest and mid-century modern aesthetic, this saguaro cactus rug adds striking sculptur",
    "faq": null,
    "categoryType": "shop"
  },
  {
    "id": "p_rug_048",
    "slug": "serene-meadow-pebble-topography-rug",
    "name": "Serene Meadow Pebble Topography Rug",
    "tagline": "Tranquil Contours and River-Stone Textures",
    "story": "Evoking the soothing serenity of a mossy riverbank dotted with smooth water-worn pebbles, this organic cloud rug introduces meditative tactility to refined spaces. Flowing sage green streams meander past dunes of sand and cream, punctuated by clusters of embossed river-stone spheres that massage the feet. A biophilic oasis that nurtures calm contemplation and connection with nature.",
    "function": "Artisanal hand-tufted construction combining silky low cut-pile ground (14mm) with sculpted 3D pebble mounds reaching up to 30mm for rich sensory depth. Finished with premium cotton canvas backing and hand-sheared contour curves. Perfect for luxury wellness suites, master bath retreats, peaceful reading sanctuaries, and modern Scandinavian salons.",
    "pricePaise": 0,
    "compareAtPaise": 0,
    "printMinutes": 0,
    "weightGrams": 6200,
    "dimensionsMm": {
      "w": 1600,
      "h": 1400,
      "d": 30
    },
    "edition": "Artisan Handcrafted",
    "status": "active",
    "category": "deskmate",
    "ageGroup": "All interiors",
    "themes": [
      "Biophilic Design",
      "Pebble Relief",
      "Sage Tranquility",
      "Organic Topography"
    ],
    "colorways": [
      "Sage Green",
      "Sand Dune",
      "Pearl Ivory",
      "Soft Taupe"
    ],
    "imageGradient": [
      "#1E293B",
      "#0F172A"
    ],
    "imageUrl": "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.56.10%20AM%20(2).jpeg",
    "localImageUrl": "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.56.10%20AM%20(2).jpeg",
    "gallery": [
      "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.56.10%20AM%20(2).jpeg"
    ],
    "localGallery": [
      "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.56.10%20AM%20(2).jpeg"
    ],
    "rating": 5,
    "reviews": 19,
    "createdAt": "2026-10-17",
    "updatedAt": "2026-10-19",
    "freeShipping": true,
    "isPreorder": false,
    "preorderShipBy": null,
    "preorderDaysMin": null,
    "preorderDaysMax": null,
    "customFields": [],
    "seoTitle": "Serene Meadow Pebble Topography Rug · QADRI Rugs",
    "seoDescription": "Evoking the soothing serenity of a mossy riverbank dotted with smooth water-worn pebbles, this organic cloud rug introduces meditative tactility to refined spac",
    "faq": null,
    "categoryType": "shop"
  },
  {
    "id": "p_rug_049",
    "slug": "royal-violet-splatter-statement-rug",
    "name": "Royal Violet Splatter Statement Rug",
    "tagline": "Regal Audacity Cast in Fluid Splendor",
    "story": "A dramatic surge of uninhibited creative energy, this fluid splatter rug electrifies interiors with saturated royal violet and creamy fluid drips. The expressive organic perimeter mimics an artist's spontaneous splash of liquid pigment, framed by tactile multi-level ripples that pull the gaze inward. An unapologetic burst of regal luxury designed for spaces that celebrate artistic audacity.",
    "function": "Tufted with high-luster botanical viscose and premium wool to achieve deep color saturation and a silky velvet sheen at an 18mm cut pile. Features hand-sculpted contours along every drip edge, stabilized with heavy latex-free cotton twill backing. Suited for modern art galleries, luxury boutique dressing rooms, executive creative suites, and fashion showrooms.",
    "pricePaise": 0,
    "compareAtPaise": 0,
    "printMinutes": 0,
    "weightGrams": 4900,
    "dimensionsMm": {
      "w": 1600,
      "h": 1300,
      "d": 18
    },
    "edition": "Artisan Handcrafted",
    "status": "active",
    "category": "cafe",
    "ageGroup": "All interiors",
    "themes": [
      "Liquid Splatter",
      "Royal Violet",
      "Contemporary Expressionism",
      "Fluid Contour"
    ],
    "colorways": [
      "Royal Violet",
      "Electric Purple",
      "Milk Ivory",
      "Black Rim"
    ],
    "imageGradient": [
      "#1E293B",
      "#0F172A"
    ],
    "imageUrl": "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.56.10%20AM%20(3).jpeg",
    "localImageUrl": "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.56.10%20AM%20(3).jpeg",
    "gallery": [
      "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.56.10%20AM%20(3).jpeg"
    ],
    "localGallery": [
      "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.56.10%20AM%20(3).jpeg"
    ],
    "rating": 5,
    "reviews": 20,
    "createdAt": "2026-10-17",
    "updatedAt": "2026-10-19",
    "freeShipping": true,
    "isPreorder": false,
    "preorderShipBy": null,
    "preorderDaysMin": null,
    "preorderDaysMax": null,
    "customFields": [],
    "seoTitle": "Royal Violet Splatter Statement Rug · QADRI Rugs",
    "seoDescription": "A dramatic surge of uninhibited creative energy, this fluid splatter rug electrifies interiors with saturated royal violet and creamy fluid drips. The expressiv",
    "faq": null,
    "categoryType": "shop"
  },
  {
    "id": "p_rug_050",
    "slug": "lovers-convergence-optical-relief-rug",
    "name": "Lovers' Convergence Optical Relief Rug",
    "tagline": "Sculpted Passion in Hypnotic Monochromatic Relief",
    "story": "An intimate tour-de-force of contemporary textile art, this monumental area rug renders two lovers in profile leaning toward each other until their silhouettes unite into a heart. Radiating out from their embrace are undulating 3D optical waves that ripple across the room in stark black and ivory. A mesmerizing celebration of unity and deep emotional resonance crafted for landmark interior spaces.",
    "function": "Masterpiece multi-texture hand-tufting utilizing ultra-dense semi-worsted wool and plush microfiber shag, delivering high-relief carved depths from 16mm to 35mm. Backed with heavyweight woven cotton duck canvas and hand-finished reinforced edges for superior longevity. Ideal for luxury master bedroom suites, private art collector residences, high-end design showrooms, and executive lounges.",
    "pricePaise": 0,
    "compareAtPaise": 0,
    "printMinutes": 0,
    "weightGrams": 11200,
    "dimensionsMm": {
      "w": 1800,
      "h": 2600,
      "d": 35
    },
    "edition": "Artisan Handcrafted",
    "status": "active",
    "category": "keychains",
    "ageGroup": "All interiors",
    "themes": [
      "Romantic Unity",
      "3D Optical Relief",
      "Lovers Silhouette",
      "High-Contrast Monochrome"
    ],
    "colorways": [
      "Onyx Black",
      "Alabaster White",
      "Shadow Graphite"
    ],
    "imageGradient": [
      "#1E293B",
      "#0F172A"
    ],
    "imageUrl": "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.56.10%20AM.jpeg",
    "localImageUrl": "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.56.10%20AM.jpeg",
    "gallery": [
      "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.56.10%20AM.jpeg"
    ],
    "localGallery": [
      "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.56.10%20AM.jpeg"
    ],
    "rating": 5,
    "reviews": 21,
    "createdAt": "2026-10-17",
    "updatedAt": "2026-10-19",
    "freeShipping": true,
    "isPreorder": false,
    "preorderShipBy": null,
    "preorderDaysMin": null,
    "preorderDaysMax": null,
    "customFields": [],
    "seoTitle": "Lovers' Convergence Optical Relief Rug · QADRI Rugs",
    "seoDescription": "An intimate tour-de-force of contemporary textile art, this monumental area rug renders two lovers in profile leaning toward each other until their silhouettes ",
    "faq": null,
    "categoryType": "shop"
  },
  {
    "id": "p_rug_051",
    "slug": "monochrome-drip-halftone-area-rug",
    "name": "Monochrome Cascade Halftone Rug",
    "tagline": "Bold Contrast in Fluid Liquid Motion",
    "story": "Capturing the raw energy of urban drip aesthetics through high-contrast monochrome design, this rug merges flowing liquid forms with precision stippled halftones. Its dramatic black spills against pure chalk white evoke the avant-garde spirit of modern pop-art galleries. A striking visual anchor that electrifies minimalist and monochromatic contemporary interiors.",
    "function": "Hand-tufted from premium New Zealand wool and silky art viscose with a dense 18mm cut pile. Features precise micro-carving along the droplet contours and an anti-slip natural cotton-latex backing. Ideal for modern luxury penthouses, creative studios, and high-fashion boutique showrooms.",
    "pricePaise": 0,
    "compareAtPaise": 0,
    "printMinutes": 0,
    "weightGrams": 8500,
    "dimensionsMm": {
      "w": 1800,
      "h": 2400,
      "d": 18
    },
    "edition": "Artisan Handcrafted",
    "status": "active",
    "category": "keychains",
    "ageGroup": "All interiors",
    "themes": [
      "Monochrome",
      "Street Art",
      "Abstract",
      "Contemporary Minimalist",
      "Halftone"
    ],
    "colorways": [
      "Jet Black",
      "Chalk White",
      "Slate Grey"
    ],
    "imageGradient": [
      "#1E293B",
      "#0F172A"
    ],
    "imageUrl": "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.56.11%20AM%20(1).jpeg",
    "localImageUrl": "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.56.11%20AM%20(1).jpeg",
    "gallery": [
      "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.56.11%20AM%20(1).jpeg"
    ],
    "localGallery": [
      "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.56.11%20AM%20(1).jpeg"
    ],
    "rating": 5,
    "reviews": 22,
    "createdAt": "2026-10-17",
    "updatedAt": "2026-10-19",
    "freeShipping": true,
    "isPreorder": false,
    "preorderShipBy": null,
    "preorderDaysMin": null,
    "preorderDaysMax": null,
    "customFields": [],
    "seoTitle": "Monochrome Cascade Halftone Rug · QADRI Rugs",
    "seoDescription": "Capturing the raw energy of urban drip aesthetics through high-contrast monochrome design, this rug merges flowing liquid forms with precision stippled halftone",
    "faq": null,
    "categoryType": "shop"
  },
  {
    "id": "p_rug_052",
    "slug": "sakura-sanctuary-zen-garden-rug",
    "name": "Sakura Sanctuary Zen Garden Rug",
    "tagline": "Sculpted Blossoms in Meditative Japanese Elegance",
    "story": "Inspired by the tranquil serenity of Kyoto's imperial zen gardens during springtime cherry bloom, this bespoke textile masterpiece portrays blooming sakura boughs above raked stone pebble paths. High-relief 3D sculpted pink canopies rise gracefully above carved stream beds, imparting an aura of contemplative calm and organic grandeur. A harmonious focal point celebrating natural renewal and architectural tranquility.",
    "function": "Multi-level tufted with varying pile heights from 12mm to 24mm, utilizing plush botanical silk and fine lustrous wool for a tactile 3D relief effect. Finished with organic pebble loop tufting, hand-bound fringed borders, and premium heavy cotton backing. Tailored for grand living salons, tranquil spa retreats, and five-star luxury suites.",
    "pricePaise": 0,
    "compareAtPaise": 0,
    "printMinutes": 0,
    "weightGrams": 13500,
    "dimensionsMm": {
      "w": 2400,
      "h": 3200,
      "d": 24
    },
    "edition": "Artisan Handcrafted",
    "status": "active",
    "category": "deskmate",
    "ageGroup": "All interiors",
    "themes": [
      "Japanese Zen",
      "Botanical Floral",
      "Sculptural 3D",
      "Organic Luxury",
      "Spring Bloom"
    ],
    "colorways": [
      "Sakura Blossom Pink",
      "Alabaster Cream",
      "Pebble Stone Grey",
      "Bark Umber"
    ],
    "imageGradient": [
      "#1E293B",
      "#0F172A"
    ],
    "imageUrl": "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.56.11%20AM%20(2).jpeg",
    "localImageUrl": "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.56.11%20AM%20(2).jpeg",
    "gallery": [
      "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.56.11%20AM%20(2).jpeg"
    ],
    "localGallery": [
      "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.56.11%20AM%20(2).jpeg"
    ],
    "rating": 5,
    "reviews": 23,
    "createdAt": "2026-10-17",
    "updatedAt": "2026-10-19",
    "freeShipping": true,
    "isPreorder": false,
    "preorderShipBy": null,
    "preorderDaysMin": null,
    "preorderDaysMax": null,
    "customFields": [],
    "seoTitle": "Sakura Sanctuary Zen Garden Rug · QADRI Rugs",
    "seoDescription": "Inspired by the tranquil serenity of Kyoto's imperial zen gardens during springtime cherry bloom, this bespoke textile masterpiece portrays blooming sakura boug",
    "faq": null,
    "categoryType": "shop"
  },
  {
    "id": "p_rug_053",
    "slug": "toco-toucan-tropical-silhouette-rug",
    "name": "Toco Toucan Tropical Statement Rug",
    "tagline": "Vibrant Avian Spirit in Exotic Radiance",
    "story": "Celebrating the vibrant exuberance of tropical rainforests, this bespoke silhouette rug portrays the charismatic toucan with its iconic radiant bill. Rendered in vivid gradients of sunbeam yellow, marigold, and fiery tangerine against rich raven plumage, it brings playful energy and joyful warmth to any bespoke interior. A custom cut-out centerpiece designed to inspire optimism and botanical whimsy.",
    "function": "Precision hand-tufted in custom die-cut silhouette using resilient plush acrylic and soft wool blend with a 16mm uniform pile. Hand-sheared beveled contour carving defines every feather segment, supported by a heavy-duty non-slip woven backing. Perfect for luxury children's suites, sun-drenched sunrooms, and playful modern lounges.",
    "pricePaise": 0,
    "compareAtPaise": 0,
    "printMinutes": 0,
    "weightGrams": 6200,
    "dimensionsMm": {
      "w": 1400,
      "h": 1700,
      "d": 16
    },
    "edition": "Artisan Handcrafted",
    "status": "active",
    "category": "cafe",
    "ageGroup": "All interiors",
    "themes": [
      "Tropical Wildlife",
      "Avian Fauna",
      "Playful Statement",
      "Botanical Exotic",
      "Novelty Art"
    ],
    "colorways": [
      "Sunburst Yellow",
      "Marigold Orange",
      "Raven Black",
      "Cream Linen"
    ],
    "imageGradient": [
      "#1E293B",
      "#0F172A"
    ],
    "imageUrl": "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.56.11%20AM.jpeg",
    "localImageUrl": "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.56.11%20AM.jpeg",
    "gallery": [
      "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.56.11%20AM.jpeg"
    ],
    "localGallery": [
      "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.56.11%20AM.jpeg"
    ],
    "rating": 5,
    "reviews": 24,
    "createdAt": "2026-10-17",
    "updatedAt": "2026-10-19",
    "freeShipping": true,
    "isPreorder": false,
    "preorderShipBy": null,
    "preorderDaysMin": null,
    "preorderDaysMax": null,
    "customFields": [],
    "seoTitle": "Toco Toucan Tropical Statement Rug · QADRI Rugs",
    "seoDescription": "Celebrating the vibrant exuberance of tropical rainforests, this bespoke silhouette rug portrays the charismatic toucan with its iconic radiant bill. Rendered i",
    "faq": null,
    "categoryType": "shop"
  },
  {
    "id": "p_rug_054",
    "slug": "neo-baroque-blossom-arabesque-rug",
    "name": "Neo-Baroque Blossom Arabesque Rug",
    "tagline": "Romantic Swirls and Timeless Floral Grandeur",
    "story": "Merging classical Rococo arabesques with contemporary graphic line work, this rug unfolds into a tapestry of swirling scrolls and blooming peony blossoms. The interplay of soft petal pink, warm champagne beige, and bold ebony linework creates a captivating sense of graceful movement across the floor. Designed to bestow timeless romantic allure upon refined residential quarters.",
    "function": "Expertly crafted with a hand-carved cut pile of 18mm density, blending hypoallergenic soft-touch microfibers and natural wool. Features deep grooved line detailing for rich dimensional shadow and non-slip cotton twill backing. Ideal for primary bedrooms, feminine dressing suites, and boutique bridal salons.",
    "pricePaise": 0,
    "compareAtPaise": 0,
    "printMinutes": 0,
    "weightGrams": 7600,
    "dimensionsMm": {
      "w": 1600,
      "h": 2300,
      "d": 18
    },
    "edition": "Artisan Handcrafted",
    "status": "active",
    "category": "deskmate",
    "ageGroup": "All interiors",
    "themes": [
      "Floral Arabesque",
      "Neo-Baroque",
      "Romantic Elegance",
      "Swirls & Petals",
      "Classic Modern"
    ],
    "colorways": [
      "Blush Pink",
      "Ebony Black",
      "Champagne Beige",
      "Ivory Cream"
    ],
    "imageGradient": [
      "#1E293B",
      "#0F172A"
    ],
    "imageUrl": "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.56.12%20AM%20(1).jpeg",
    "localImageUrl": "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.56.12%20AM%20(1).jpeg",
    "gallery": [
      "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.56.12%20AM%20(1).jpeg"
    ],
    "localGallery": [
      "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.56.12%20AM%20(1).jpeg"
    ],
    "rating": 5,
    "reviews": 25,
    "createdAt": "2026-10-17",
    "updatedAt": "2026-10-19",
    "freeShipping": true,
    "isPreorder": false,
    "preorderShipBy": null,
    "preorderDaysMin": null,
    "preorderDaysMax": null,
    "customFields": [],
    "seoTitle": "Neo-Baroque Blossom Arabesque Rug · QADRI Rugs",
    "seoDescription": "Merging classical Rococo arabesques with contemporary graphic line work, this rug unfolds into a tapestry of swirling scrolls and blooming peony blossoms. The i",
    "faq": null,
    "categoryType": "shop"
  },
  {
    "id": "p_rug_055",
    "slug": "emerald-luna-moth-statement-rug",
    "name": "Emerald Luna Moth Statement Rug",
    "tagline": "Mystical Nocturnal Winged Elegance Hand-Sculpted",
    "story": "Inspired by the celestial beauty of the nocturnal Actias luna, this silhouetted textile work celebrates the delicate majesty of the green giant silk moth. Featuring lush jade-green wing expanses, feather-plumed golden antennae, and hypnotic concentric eyespots, it brings the ethereal mystery of primeval woodlands indoors. A breathtaking sculptural centerpiece for curated, nature-inspired luxury environments.",
    "function": "Sculpted with multi-textural tufting combining high-pile fuzzy sheared wool on the thorax (22mm), feathered cut loops on antennae, and velvety 16mm wing surfaces. Tailored in a bespoke die-cut contour with reinforced canvas backing. Excellent for botanical conservatories, bohemian reading corners, and boutique hotel lobbies.",
    "pricePaise": 0,
    "compareAtPaise": 0,
    "printMinutes": 0,
    "weightGrams": 7200,
    "dimensionsMm": {
      "w": 1500,
      "h": 2100,
      "d": 22
    },
    "edition": "Artisan Handcrafted",
    "status": "active",
    "category": "cafe",
    "ageGroup": "All interiors",
    "themes": [
      "Entomology",
      "Nocturnal Nature",
      "Woodland Wonder",
      "Sculptural Silhouette",
      "Mystic Organic"
    ],
    "colorways": [
      "Emerald Green",
      "Forest Pine",
      "Golden Mustard",
      "Thorax Cream",
      "Obsidian"
    ],
    "imageGradient": [
      "#1E293B",
      "#0F172A"
    ],
    "imageUrl": "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.56.12%20AM%20(2).jpeg",
    "localImageUrl": "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.56.12%20AM%20(2).jpeg",
    "gallery": [
      "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.56.12%20AM%20(2).jpeg"
    ],
    "localGallery": [
      "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.56.12%20AM%20(2).jpeg"
    ],
    "rating": 5,
    "reviews": 8,
    "createdAt": "2026-10-17",
    "updatedAt": "2026-10-19",
    "freeShipping": true,
    "isPreorder": false,
    "preorderShipBy": null,
    "preorderDaysMin": null,
    "preorderDaysMax": null,
    "customFields": [],
    "seoTitle": "Emerald Luna Moth Statement Rug · QADRI Rugs",
    "seoDescription": "Inspired by the celestial beauty of the nocturnal Actias luna, this silhouetted textile work celebrates the delicate majesty of the green giant silk moth. Featu",
    "faq": null,
    "categoryType": "shop"
  },
  {
    "id": "p_rug_056",
    "slug": "op-art-topographic-serenity-rug",
    "name": "Topographic Mind Op-Art Rug",
    "tagline": "Surrealist Optical Contour and Kinetic Fluidity",
    "story": "Bridging dimensional op-art illusion with meditative figurative sculpture, this visionary rug displays a serene face emerging from undulating hypnotic contour lines. The fluid monochromatic ribbons flow outward like ripples in water, warping reality into an introspective dreamscape. A daring design that challenges conventional flooring, transforming interior spaces into modern art sanctuaries.",
    "function": "Executed with ultra-precise cut-pile tufting at 18mm depth, juxtaposing matte carbon black wool and high-luster white bamboo silk for optimal visual contrast. Layered over an organic silhouette contour with braided edge binding and anti-shift latex underlay. Perfect for avant-garde galleries, creative agency boardrooms, and luxury architectural residences.",
    "pricePaise": 0,
    "compareAtPaise": 0,
    "printMinutes": 0,
    "weightGrams": 8600,
    "dimensionsMm": {
      "w": 1800,
      "h": 2400,
      "d": 18
    },
    "edition": "Artisan Handcrafted",
    "status": "active",
    "category": "keychains",
    "ageGroup": "All interiors",
    "themes": [
      "Op-Art",
      "Surrealism",
      "Topography",
      "Monochrome Statement",
      "Optical Illusion"
    ],
    "colorways": [
      "Carbon Black",
      "Milk White",
      "Ecru"
    ],
    "imageGradient": [
      "#1E293B",
      "#0F172A"
    ],
    "imageUrl": "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.56.12%20AM.jpeg",
    "localImageUrl": "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.56.12%20AM.jpeg",
    "gallery": [
      "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.56.12%20AM.jpeg"
    ],
    "localGallery": [
      "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.56.12%20AM.jpeg"
    ],
    "rating": 5,
    "reviews": 9,
    "createdAt": "2026-10-17",
    "updatedAt": "2026-10-19",
    "freeShipping": true,
    "isPreorder": false,
    "preorderShipBy": null,
    "preorderDaysMin": null,
    "preorderDaysMax": null,
    "customFields": [],
    "seoTitle": "Topographic Mind Op-Art Rug · QADRI Rugs",
    "seoDescription": "Bridging dimensional op-art illusion with meditative figurative sculpture, this visionary rug displays a serene face emerging from undulating hypnotic contour l",
    "faq": null,
    "categoryType": "shop"
  },
  {
    "id": "p_rug_057",
    "slug": "kanagawa-crest-ocean-wave-rug",
    "name": "The Great Crest Wave Statement Rug",
    "tagline": "Dynamic Oceanic Surge in Tactile Splendor",
    "story": "Paying homage to the timeless dynamism of classical Japanese marine woodblock prints, this sculpted organic rug captures the dramatic moment a cresting tidal wave crashes into frothing sea foam. Concentric gradations of cyan, marine cobalt, and cerulean surge toward a textured splash of white spray bubbles. A kinetic and refreshing statement that imbues rooms with invigorating marine power.",
    "function": "Custom hand-tufted using variable-height cut and loop techniques, featuring 20mm sculpted froth clusters and 14mm smooth water currents. Crafted from moisture-resistant premium wool-blend yarns with hand-beveled splash contours and slip-resistant backing. Suitable for coastal luxury villas, wellness suites, and creative executive spaces.",
    "pricePaise": 0,
    "compareAtPaise": 0,
    "printMinutes": 0,
    "weightGrams": 7400,
    "dimensionsMm": {
      "w": 1800,
      "h": 1600,
      "d": 20
    },
    "edition": "Artisan Handcrafted",
    "status": "active",
    "category": "cafe",
    "ageGroup": "All interiors",
    "themes": [
      "Oceanic",
      "Japanese Ukiyo-e",
      "Wave Crest",
      "Kinetic Coastal",
      "Organic Contour"
    ],
    "colorways": [
      "Marine Cobalt",
      "Cerulean Blue",
      "Seafoam Cyan",
      "Froth White"
    ],
    "imageGradient": [
      "#1E293B",
      "#0F172A"
    ],
    "imageUrl": "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.56.13%20AM%20(1).jpeg",
    "localImageUrl": "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.56.13%20AM%20(1).jpeg",
    "gallery": [
      "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.56.13%20AM%20(1).jpeg"
    ],
    "localGallery": [
      "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.56.13%20AM%20(1).jpeg"
    ],
    "rating": 5,
    "reviews": 10,
    "createdAt": "2026-10-17",
    "updatedAt": "2026-10-19",
    "freeShipping": true,
    "isPreorder": false,
    "preorderShipBy": null,
    "preorderDaysMin": null,
    "preorderDaysMax": null,
    "customFields": [],
    "seoTitle": "The Great Crest Wave Statement Rug · QADRI Rugs",
    "seoDescription": "Paying homage to the timeless dynamism of classical Japanese marine woodblock prints, this sculpted organic rug captures the dramatic moment a cresting tidal wa",
    "faq": null,
    "categoryType": "shop"
  },
  {
    "id": "p_rug_058",
    "slug": "phantom-drip-gengar-statement-rug",
    "name": "Gengar Phantom Drip Statement Rug",
    "tagline": "Mischievous Shadow Spirit in Dripping Streetwear Luxe",
    "story": "Channeling urban streetwear culture and beloved anime mythology, this bespoke rug captures the notorious shadow phantom with piercing crimson gaze and iconic jagged grin. Melting drips of rich orchid magenta flow from its spectral claws and silhouette, creating an unmistakable dripping pop-art aesthetic. An electrifying centerpiece designed for high-end pop-culture connoisseurs and game room lounges.",
    "function": "Hand-tufted with dense 18mm high-density yarn, featuring razor-sharp carved boundary lines that accentuate the iconic facial features and ooze droplets. Finished with premium felt backing and reinforced edge binding. Perfect for private gaming retreats, modern hypebeast lofts, and collector galleries.",
    "pricePaise": 0,
    "compareAtPaise": 0,
    "printMinutes": 0,
    "weightGrams": 6800,
    "dimensionsMm": {
      "w": 1600,
      "h": 1500,
      "d": 18
    },
    "edition": "Artisan Handcrafted",
    "status": "active",
    "category": "cafe",
    "ageGroup": "All interiors",
    "themes": [
      "Anime Pop-Art",
      "Streetwear Drip",
      "Gaming Culture",
      "Mischief & Shadow",
      "Novelty Statement"
    ],
    "colorways": [
      "Abyssal Violet",
      "Orchid Magenta",
      "Crimson Red",
      "Porcelain White"
    ],
    "imageGradient": [
      "#1E293B",
      "#0F172A"
    ],
    "imageUrl": "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.56.13%20AM%20(2).jpeg",
    "localImageUrl": "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.56.13%20AM%20(2).jpeg",
    "gallery": [
      "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.56.13%20AM%20(2).jpeg"
    ],
    "localGallery": [
      "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.56.13%20AM%20(2).jpeg"
    ],
    "rating": 5,
    "reviews": 11,
    "createdAt": "2026-10-17",
    "updatedAt": "2026-10-19",
    "freeShipping": true,
    "isPreorder": false,
    "preorderShipBy": null,
    "preorderDaysMin": null,
    "preorderDaysMax": null,
    "customFields": [],
    "seoTitle": "Gengar Phantom Drip Statement Rug · QADRI Rugs",
    "seoDescription": "Channeling urban streetwear culture and beloved anime mythology, this bespoke rug captures the notorious shadow phantom with piercing crimson gaze and iconic ja",
    "faq": null,
    "categoryType": "shop"
  },
  {
    "id": "p_rug_059",
    "slug": "urban-graffiti-heart-splash-rug",
    "name": "Urban Rebel Heart Splash Rug",
    "tagline": "Wildstyle Graffiti and Romantic Street Expression",
    "story": "A bold collision of underground street graffiti and raw romantic symbolism, this scalloped rug bursts with expressive energy. Dynamic hot-pink spray strokes, dynamic black wildstyle lettering, and crisp ivory hearts scatter across a nocturnal black canvas like midnight street tags. It brings an authentic rebellious edge and artistic attitude to curated contemporary spaces.",
    "function": "Custom tufted with plush 16mm cut pile using premium color-fast synthetic wool and soft microfiber for intense visual saturation. Backed with heavy natural canvas and anti-skid ribbed latex. Ideal for urban penthouses, youth lounges, boutique record shops, and creative studios.",
    "pricePaise": 0,
    "compareAtPaise": 0,
    "printMinutes": 0,
    "weightGrams": 5900,
    "dimensionsMm": {
      "w": 1700,
      "h": 1200,
      "d": 16
    },
    "edition": "Artisan Handcrafted",
    "status": "active",
    "category": "cafe",
    "ageGroup": "All interiors",
    "themes": [
      "Street Art",
      "Graffiti Wildstyle",
      "Romantic Punk",
      "Urban Culture",
      "Pop Expression"
    ],
    "colorways": [
      "Bubblegum Pink",
      "Midnight Black",
      "Pure Chalk White",
      "Magenta Splatter"
    ],
    "imageGradient": [
      "#1E293B",
      "#0F172A"
    ],
    "imageUrl": "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.56.13%20AM.jpeg",
    "localImageUrl": "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.56.13%20AM.jpeg",
    "gallery": [
      "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.56.13%20AM.jpeg"
    ],
    "localGallery": [
      "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.56.13%20AM.jpeg"
    ],
    "rating": 5,
    "reviews": 12,
    "createdAt": "2026-10-17",
    "updatedAt": "2026-10-19",
    "freeShipping": true,
    "isPreorder": false,
    "preorderShipBy": null,
    "preorderDaysMin": null,
    "preorderDaysMax": null,
    "customFields": [],
    "seoTitle": "Urban Rebel Heart Splash Rug · QADRI Rugs",
    "seoDescription": "A bold collision of underground street graffiti and raw romantic symbolism, this scalloped rug bursts with expressive energy. Dynamic hot-pink spray strokes, dy",
    "faq": null,
    "categoryType": "shop"
  },
  {
    "id": "p_rug_060",
    "slug": "zen-slumber-white-tiger-rug",
    "name": "Zen Slumber White Tiger Rug",
    "tagline": "Serene Majesty in Minimalist Monochrome Harmony",
    "story": "Depicting the legendary white tiger resting in peaceful contemplation, this organic cloud-contoured rug exudes calm strength and gentle grace. Minimalist sumi-e brush-inspired black stripes ripple across an unbroken field of snow-white wool, celebrating innocence and quiet dignity. A soothing, protective presence designed to cultivate serenity in modern sanctuaries.",
    "function": "Tufted from ultra-soft cloud-touch microfibers and fine wool with a 20mm plush pile that offers exceptional underfoot softness. Hand-sculpted contours accentuate the curled tail, paws, and sleepy face, mounted on a breathable cotton-latex backing. Ideal for luxury nurseries, tranquil bedrooms, and minimalist meditation spaces.",
    "pricePaise": 0,
    "compareAtPaise": 0,
    "printMinutes": 0,
    "weightGrams": 5800,
    "dimensionsMm": {
      "w": 1600,
      "h": 1200,
      "d": 20
    },
    "edition": "Artisan Handcrafted",
    "status": "active",
    "category": "cafe",
    "ageGroup": "All interiors",
    "themes": [
      "White Tiger",
      "Minimalist Animal",
      "Zen Slumber",
      "Nursery Luxury",
      "Monochrome Calming"
    ],
    "colorways": [
      "Snow White",
      "Ink Black",
      "Silver Mist Grey"
    ],
    "imageGradient": [
      "#1E293B",
      "#0F172A"
    ],
    "imageUrl": "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.56.14%20AM%20(1).jpeg",
    "localImageUrl": "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.56.14%20AM%20(1).jpeg",
    "gallery": [
      "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.56.14%20AM%20(1).jpeg"
    ],
    "localGallery": [
      "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.56.14%20AM%20(1).jpeg"
    ],
    "rating": 5,
    "reviews": 13,
    "createdAt": "2026-10-17",
    "updatedAt": "2026-10-19",
    "freeShipping": true,
    "isPreorder": false,
    "preorderShipBy": null,
    "preorderDaysMin": null,
    "preorderDaysMax": null,
    "customFields": [],
    "seoTitle": "Zen Slumber White Tiger Rug · QADRI Rugs",
    "seoDescription": "Depicting the legendary white tiger resting in peaceful contemplation, this organic cloud-contoured rug exudes calm strength and gentle grace. Minimalist sumi-e",
    "faq": null,
    "categoryType": "shop"
  },
  {
    "id": "p_rug_061",
    "slug": "streetwear-dreadlock-reaper-rug",
    "name": "Grimlock Hooded Reaper Rug",
    "tagline": "Urban Nocturne Skeleton with Fierce Street Presence",
    "story": "Born from dark streetwear folklore and contemporary graphic illustration, this rug reimagines the classic reaper motif with wild tufted dreadlocks and an ominous black hoodie. Piercing amber eyes glare from beneath the shadowy hood while bony hands frame the menacing skull in a defiant stance. A standout statement piece for interiors that celebrate boldness, counterculture, and gothic streetwear.",
    "function": "Crafted using high-density loop and cut-pile tufting at 18mm depth with textured high-pile dreadlock tendrils (22mm). Sculpted channel carving outlines the hood and boney skeletal structure, underpinned by an anti-slip woven backing. Built for streetwear display rooms, boutique recording studios, and modern bachelor lounges.",
    "pricePaise": 0,
    "compareAtPaise": 0,
    "printMinutes": 0,
    "weightGrams": 6600,
    "dimensionsMm": {
      "w": 1500,
      "h": 1500,
      "d": 20
    },
    "edition": "Artisan Handcrafted",
    "status": "active",
    "category": "cafe",
    "ageGroup": "All interiors",
    "themes": [
      "Streetwear Gothic",
      "Grim Reaper",
      "Skull Art",
      "Dark Fantasy",
      "Bold Graphic"
    ],
    "colorways": [
      "Hood Black",
      "Bone Ivory",
      "Amber Gold",
      "Charcoal Shadow"
    ],
    "imageGradient": [
      "#1E293B",
      "#0F172A"
    ],
    "imageUrl": "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.56.14%20AM%20(2).jpeg",
    "localImageUrl": "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.56.14%20AM%20(2).jpeg",
    "gallery": [
      "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.56.14%20AM%20(2).jpeg"
    ],
    "localGallery": [
      "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.56.14%20AM%20(2).jpeg"
    ],
    "rating": 5,
    "reviews": 14,
    "createdAt": "2026-10-17",
    "updatedAt": "2026-10-19",
    "freeShipping": true,
    "isPreorder": false,
    "preorderShipBy": null,
    "preorderDaysMin": null,
    "preorderDaysMax": null,
    "customFields": [],
    "seoTitle": "Grimlock Hooded Reaper Rug · QADRI Rugs",
    "seoDescription": "Born from dark streetwear folklore and contemporary graphic illustration, this rug reimagines the classic reaper motif with wild tufted dreadlocks and an ominou",
    "faq": null,
    "categoryType": "shop"
  },
  {
    "id": "p_rug_062",
    "slug": "championship-nfl-gridiron-area-rug",
    "name": "Championship Gridiron Turf Rug",
    "tagline": "Authentic Football Stadium Field Luxury",
    "story": "Bringing the roaring excitement of gameday into the home, this luxury sports area rug recreates the iconic NFL football gridiron with remarkable precision. Lush emerald turf green is marked with crisp white yard markers, hash intervals, and bold collegiate gold typography flanking navy blue endzones. A sophisticated homage to athletic excellence tailored for discerning sports enthusiasts.",
    "function": "Dense commercial-grade cut pile hand-tufted at 16mm thickness with resilient high-durability wool and spun nylon, ensuring superior resistance to heavy traffic. Bound with double-stitched perimeter edging and reinforced non-marking latex backing. Tailored for luxury sports lounges, executive entertainment suites, private home theaters, and clubhouse lobbies.",
    "pricePaise": 0,
    "compareAtPaise": 0,
    "printMinutes": 0,
    "weightGrams": 9800,
    "dimensionsMm": {
      "w": 1800,
      "h": 2600,
      "d": 16
    },
    "edition": "Artisan Handcrafted",
    "status": "active",
    "category": "keychains",
    "ageGroup": "All interiors",
    "themes": [
      "NFL Sports",
      "Gridiron Football",
      "Athletic Statement",
      "Man Cave Luxury",
      "Geometric Turf"
    ],
    "colorways": [
      "Stadium Turf Green",
      "Endzone Navy",
      "Championship Gold",
      "Yardline White"
    ],
    "imageGradient": [
      "#1E293B",
      "#0F172A"
    ],
    "imageUrl": "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.56.14%20AM.jpeg",
    "localImageUrl": "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.56.14%20AM.jpeg",
    "gallery": [
      "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.56.14%20AM.jpeg"
    ],
    "localGallery": [
      "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.56.14%20AM.jpeg"
    ],
    "rating": 5,
    "reviews": 15,
    "createdAt": "2026-10-17",
    "updatedAt": "2026-10-19",
    "freeShipping": true,
    "isPreorder": false,
    "preorderShipBy": null,
    "preorderDaysMin": null,
    "preorderDaysMax": null,
    "customFields": [],
    "seoTitle": "Championship Gridiron Turf Rug · QADRI Rugs",
    "seoDescription": "Bringing the roaring excitement of gameday into the home, this luxury sports area rug recreates the iconic NFL football gridiron with remarkable precision. Lush",
    "faq": null,
    "categoryType": "shop"
  },
  {
    "id": "p_rug_063",
    "slug": "yin-yang-celestial-dragon-koi-rug",
    "name": "Yin-Yang Celestial Koi Pond Rug",
    "tagline": "Dual Balance in Flowing Mythical Waters",
    "story": "Embodying the ancient philosophical harmony of light and shadow, this circular rug depicts two mythical dragon-koi circling in an eternal aquatic dance. The ebony dragon with crimson-tipped fins mirrors the celestial white dragon with golden whiskers amidst swirling azure ripples and cresting seafoam. A serene, balanced artistic statement that infuses living quarters with equilibrium and good fortune.",
    "function": "Precision circular hand-tufted with 18mm pile height in high-grade New Zealand wool and soft viscose highlights on dragon horns and ripples. Hand-carved grooved relief separates the circling currents, completed with a premium circular bound edge and heavy anti-slip backing. Superb for tea rooms, zen dining spaces, executive offices, and luxury entry rotundas.",
    "pricePaise": 0,
    "compareAtPaise": 0,
    "printMinutes": 0,
    "weightGrams": 8100,
    "dimensionsMm": {
      "w": 1800,
      "h": 1800,
      "d": 18
    },
    "edition": "Artisan Handcrafted",
    "status": "active",
    "category": "cafe",
    "ageGroup": "All interiors",
    "themes": [
      "Yin-Yang",
      "Japanese Koi",
      "Mythical Dragons",
      "Zen Harmony",
      "Circular Pond"
    ],
    "colorways": [
      "Azure Sea Blue",
      "Celestial White",
      "Obsidian Black",
      "Gold Ochre",
      "Blush Pink"
    ],
    "imageGradient": [
      "#1E293B",
      "#0F172A"
    ],
    "imageUrl": "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.56.15%20AM%20(1).jpeg",
    "localImageUrl": "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.56.15%20AM%20(1).jpeg",
    "gallery": [
      "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.56.15%20AM%20(1).jpeg"
    ],
    "localGallery": [
      "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.56.15%20AM%20(1).jpeg"
    ],
    "rating": 5,
    "reviews": 16,
    "createdAt": "2026-10-17",
    "updatedAt": "2026-10-19",
    "freeShipping": true,
    "isPreorder": false,
    "preorderShipBy": null,
    "preorderDaysMin": null,
    "preorderDaysMax": null,
    "customFields": [],
    "seoTitle": "Yin-Yang Celestial Koi Pond Rug · QADRI Rugs",
    "seoDescription": "Embodying the ancient philosophical harmony of light and shadow, this circular rug depicts two mythical dragon-koi circling in an eternal aquatic dance. The ebo",
    "faq": null,
    "categoryType": "shop"
  },
  {
    "id": "p_rug_064",
    "slug": "melting-persian-medallion-statement-rug",
    "name": "Liquid Heritage Melting Medallion Rug",
    "tagline": "Classical Persian Opulence Meets Surrealist Melting Form",
    "story": "An audacious deconstruction of antique carpet artistry, this rug showcases an intricately detailed Persian floral medallion that warps into psychedelic dripping ripples and trailing fringe-like tendrils. The monochrome black and ivory palette highlights the juxtaposition between age-old traditional craftsmanship and surrealist modern distortion. A centerpiece of dramatic visual intrigue that commands attention in any architectural interior.",
    "function": "Crafted with ultra-dense multi-level tufting (16mm-20mm) using lustrous wool and mercerized cotton, featuring intricate micro-tufted central floral filigree and hand-cut elongated drip tassels. Finished with custom organic perimeter binding and heavy-duty natural latex backing. Ideal for high-end designer living rooms, luxury fashion retail spaces, and boutique hotel lounges.",
    "pricePaise": 0,
    "compareAtPaise": 0,
    "printMinutes": 0,
    "weightGrams": 9500,
    "dimensionsMm": {
      "w": 2000,
      "h": 2400,
      "d": 18
    },
    "edition": "Artisan Handcrafted",
    "status": "active",
    "category": "deskmate",
    "ageGroup": "All interiors",
    "themes": [
      "Melting Surrealism",
      "Persian Medallion",
      "Deconstructed Classic",
      "Monochrome Psychedelic",
      "High-Concept Design"
    ],
    "colorways": [
      "Onyx Black",
      "Ivory Cream",
      "Antique Ecru"
    ],
    "imageGradient": [
      "#1E293B",
      "#0F172A"
    ],
    "imageUrl": "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.56.15%20AM%20(2).jpeg",
    "localImageUrl": "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.56.15%20AM%20(2).jpeg",
    "gallery": [
      "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.56.15%20AM%20(2).jpeg"
    ],
    "localGallery": [
      "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.56.15%20AM%20(2).jpeg"
    ],
    "rating": 5,
    "reviews": 17,
    "createdAt": "2026-10-17",
    "updatedAt": "2026-10-19",
    "freeShipping": true,
    "isPreorder": false,
    "preorderShipBy": null,
    "preorderDaysMin": null,
    "preorderDaysMax": null,
    "customFields": [],
    "seoTitle": "Liquid Heritage Melting Medallion Rug · QADRI Rugs",
    "seoDescription": "An audacious deconstruction of antique carpet artistry, this rug showcases an intricately detailed Persian floral medallion that warps into psychedelic dripping",
    "faq": null,
    "categoryType": "shop"
  },
  {
    "id": "p_rug_065",
    "slug": "cactus-jack-streetwear-character-rug",
    "name": "Cactus Jack Desert Statement Rug",
    "tagline": "Iconic Saguaro Charm with Streetwear Pedigree",
    "story": "Infusing desert nostalgia with contemporary hip-hop and streetwear culture, this custom silhouette rug depicts a cheerful saguaro cactus perched upon an embossed 'CACTUS JACK' banner. Soft sage and cactus green ribbing are framed in rich earth brown and fluffy cloud fleece, radiating welcoming desert warmth. An energetic, iconic piece that pays tribute to modern music and fashion culture.",
    "function": "Tufted with ultra-soft 18mm high-density yarn with vertical channel carving that accents the ribbed cactus spines and custom lettering. Backed with an ultra-durable non-slip woven substrate and hand-bound perimeter edging. Perfect for youth suites, music studios, creative streetwear showrooms, and relaxed living lounges.",
    "pricePaise": 0,
    "compareAtPaise": 0,
    "printMinutes": 0,
    "weightGrams": 5600,
    "dimensionsMm": {
      "w": 1200,
      "h": 1800,
      "d": 18
    },
    "edition": "Artisan Handcrafted",
    "status": "active",
    "category": "cafe",
    "ageGroup": "All interiors",
    "themes": [
      "Streetwear Culture",
      "Cactus Jack",
      "Desert Botanical",
      "Playful Character",
      "Pop Culture"
    ],
    "colorways": [
      "Sage Green",
      "Desert Olive",
      "Earthy Clay Brown",
      "Cream Linen"
    ],
    "imageGradient": [
      "#1E293B",
      "#0F172A"
    ],
    "imageUrl": "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.56.15%20AM%20(3).jpeg",
    "localImageUrl": "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.56.15%20AM%20(3).jpeg",
    "gallery": [
      "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.56.15%20AM%20(3).jpeg"
    ],
    "localGallery": [
      "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.56.15%20AM%20(3).jpeg"
    ],
    "rating": 5,
    "reviews": 18,
    "createdAt": "2026-10-17",
    "updatedAt": "2026-10-19",
    "freeShipping": true,
    "isPreorder": false,
    "preorderShipBy": null,
    "preorderDaysMin": null,
    "preorderDaysMax": null,
    "customFields": [],
    "seoTitle": "Cactus Jack Desert Statement Rug · QADRI Rugs",
    "seoDescription": "Infusing desert nostalgia with contemporary hip-hop and streetwear culture, this custom silhouette rug depicts a cheerful saguaro cactus perched upon an embosse",
    "faq": null,
    "categoryType": "shop"
  },
  {
    "id": "p_rug_066",
    "slug": "barista-bear-latte-art-splash-rug",
    "name": "Barista Bear Latte Art Splash Rug",
    "tagline": "Warm Cafe Comfort in Creamy Mocha Swirls",
    "story": "Drawing warm inspiration from artisanal coffee culture, this comforting splash rug illustrates a sweet teddy bear face nestled within a heart-shaped latte pour. Concentric ripples of steamed milk cream, warm caramel, and rich espresso mocha splash outwards in an organic fluid droplet silhouette. A cozy, comforting accent that surrounds its environment with comforting cafe warmth.",
    "function": "Hand-tufted with an ultra-silky 16mm velvet-touch microfiber pile that is hypoallergenic and stain-resistant. Features curved embossed beveling separating the coffee ripple contours and a slip-resistant silicone dot backing. Perfect for cozy nursery nooks, artisanal breakfast rooms, luxury cafes, and cozy family reading spaces.",
    "pricePaise": 0,
    "compareAtPaise": 0,
    "printMinutes": 0,
    "weightGrams": 5700,
    "dimensionsMm": {
      "w": 1500,
      "h": 1500,
      "d": 16
    },
    "edition": "Artisan Handcrafted",
    "status": "active",
    "category": "cafe",
    "ageGroup": "All interiors",
    "themes": [
      "Cafe Culture",
      "Latte Art",
      "Teddy Bear",
      "Nursery Comfort",
      "Mocha Tones"
    ],
    "colorways": [
      "Espresso Brown",
      "Caramel Latte",
      "Steamed Milk Cream",
      "Warm Sand"
    ],
    "imageGradient": [
      "#1E293B",
      "#0F172A"
    ],
    "imageUrl": "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.56.15%20AM.jpeg",
    "localImageUrl": "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.56.15%20AM.jpeg",
    "gallery": [
      "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.56.15%20AM.jpeg"
    ],
    "localGallery": [
      "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.56.15%20AM.jpeg"
    ],
    "rating": 5,
    "reviews": 19,
    "createdAt": "2026-10-17",
    "updatedAt": "2026-10-19",
    "freeShipping": true,
    "isPreorder": false,
    "preorderShipBy": null,
    "preorderDaysMin": null,
    "preorderDaysMax": null,
    "customFields": [],
    "seoTitle": "Barista Bear Latte Art Splash Rug · QADRI Rugs",
    "seoDescription": "Drawing warm inspiration from artisanal coffee culture, this comforting splash rug illustrates a sweet teddy bear face nestled within a heart-shaped latte pour.",
    "faq": null,
    "categoryType": "shop"
  },
  {
    "id": "p_rug_067",
    "slug": "shoujo-starburst-anime-chibi-rug",
    "name": "Starlight Twinkle Anime Chibi Rug",
    "tagline": "Kawaii Anime Innocence in Sparkling Berry Hues",
    "story": "Capturing the exuberant wonder of classic magical girl and shoujo anime aesthetics, this die-cut character rug radiates undeniable charm. Twin raspberry-pink pigtails frame a sweet blushing face with enormous starry sparkle eyes and an adorable cat-like smile. An enchanting celebration of modern Japanese kawaii culture designed to spark instant joy and playful nostalgia.",
    "function": "Hand-tufted with plush 18mm high-density yarn, featuring sculpted recessed eye details and hand-beveled pigtail curls with crisp black boundary lines. Reinforced with heavy-duty anti-slip canvas backing. Ideal for anime collector spaces, creative gaming suites, and pastel aesthetic bedrooms.",
    "pricePaise": 0,
    "compareAtPaise": 0,
    "printMinutes": 0,
    "weightGrams": 5800,
    "dimensionsMm": {
      "w": 1600,
      "h": 1200,
      "d": 18
    },
    "edition": "Artisan Handcrafted",
    "status": "active",
    "category": "cafe",
    "ageGroup": "All interiors",
    "themes": [
      "Kawaii Anime",
      "Shoujo Manga",
      "Magical Girl",
      "Playful Whimsy",
      "Chibi Character"
    ],
    "colorways": [
      "Raspberry Pink",
      "Blush Rose",
      "Porcelain Cream",
      "Ink Black"
    ],
    "imageGradient": [
      "#1E293B",
      "#0F172A"
    ],
    "imageUrl": "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.56.16%20AM%20(1).jpeg",
    "localImageUrl": "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.56.16%20AM%20(1).jpeg",
    "gallery": [
      "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.56.16%20AM%20(1).jpeg"
    ],
    "localGallery": [
      "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.56.16%20AM%20(1).jpeg"
    ],
    "rating": 5,
    "reviews": 20,
    "createdAt": "2026-10-17",
    "updatedAt": "2026-10-19",
    "freeShipping": true,
    "isPreorder": false,
    "preorderShipBy": null,
    "preorderDaysMin": null,
    "preorderDaysMax": null,
    "customFields": [],
    "seoTitle": "Starlight Twinkle Anime Chibi Rug · QADRI Rugs",
    "seoDescription": "Capturing the exuberant wonder of classic magical girl and shoujo anime aesthetics, this die-cut character rug radiates undeniable charm. Twin raspberry-pink pi",
    "faq": null,
    "categoryType": "shop"
  },
  {
    "id": "p_rug_068",
    "slug": "hypebeast-cross-eyed-companion-pink-rug",
    "name": "Rose Companion Hypebeast Statement Rug",
    "tagline": "Iconic Street Art Character in Blush Velvet",
    "story": "Infusing contemporary collectible hypebeast sculpture into plush textile art, this rug depicts the world-famous skull companion with crossed X-eyes and crossed-bone ears. Rendered in a soothing palette of dusty rose and petal pink, the figure rests its gloved hands forward in contemplative repose. A quintessential status symbol that bridges pop-art gallery prestige with modern home comfort.",
    "function": "Tufted with a dense 20mm premium plush acrylic-wool blend with hand-carved dimensional shadows and distinct black outline embossing. Complete with double-bound die-cut edges and high-friction non-slip backing. Tailored for hypebeast bedrooms, designer dressing spaces, and modern art galleries.",
    "pricePaise": 0,
    "compareAtPaise": 0,
    "printMinutes": 0,
    "weightGrams": 6900,
    "dimensionsMm": {
      "w": 1500,
      "h": 1700,
      "d": 20
    },
    "edition": "Artisan Handcrafted",
    "status": "active",
    "category": "cafe",
    "ageGroup": "All interiors",
    "themes": [
      "Pop Art",
      "Hypebeast Collectible",
      "Streetwear Icon",
      "Contemporary Art",
      "Blush Aesthetic"
    ],
    "colorways": [
      "Dusty Rose Pink",
      "Blush Coral",
      "Muted Taupe",
      "Espresso Black"
    ],
    "imageGradient": [
      "#1E293B",
      "#0F172A"
    ],
    "imageUrl": "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.56.16%20AM%20(2).jpeg",
    "localImageUrl": "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.56.16%20AM%20(2).jpeg",
    "gallery": [
      "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.56.16%20AM%20(2).jpeg"
    ],
    "localGallery": [
      "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.56.16%20AM%20(2).jpeg"
    ],
    "rating": 5,
    "reviews": 21,
    "createdAt": "2026-10-17",
    "updatedAt": "2026-10-19",
    "freeShipping": true,
    "isPreorder": false,
    "preorderShipBy": null,
    "preorderDaysMin": null,
    "preorderDaysMax": null,
    "customFields": [],
    "seoTitle": "Rose Companion Hypebeast Statement Rug · QADRI Rugs",
    "seoDescription": "Infusing contemporary collectible hypebeast sculpture into plush textile art, this rug depicts the world-famous skull companion with crossed X-eyes and crossed-",
    "faq": null,
    "categoryType": "shop"
  },
  {
    "id": "p_rug_069",
    "slug": "nocturnal-owl-sweet-dreams-nursery-rug",
    "name": "Nocturnal Sweet Dreams Owl Rug",
    "tagline": "Gentle Guardian of Childhood Slumber",
    "story": "Designed with tender whimsy for tranquil nursery environments, this circular-silhouette rug portrays a gentle pink woodland owl guardian. Featuring wide starry eyes, sweet folded wings, and delicate chest scallop feathers in dusty rose and cream, it radiates peaceful bedtime comfort. A nurturing decor element that brings warmth and quiet wonder to tender family spaces.",
    "function": "Custom hand-tufted using ultra-fine, hypoallergenic 18mm pile micro-plush fibers that provide a cloud-like tactile surface for young children. Finished with rounded border contouring and non-toxic, non-slip latex backing. Perfect for luxury baby nurseries, children's playrooms, and gentle master suites.",
    "pricePaise": 0,
    "compareAtPaise": 0,
    "printMinutes": 0,
    "weightGrams": 6100,
    "dimensionsMm": {
      "w": 1600,
      "h": 1400,
      "d": 18
    },
    "edition": "Artisan Handcrafted",
    "status": "active",
    "category": "cafe",
    "ageGroup": "All interiors",
    "themes": [
      "Woodland Nursery",
      "Sweet Owl",
      "Pastel Comfort",
      "Childhood Wonder",
      "Gentle Slumber"
    ],
    "colorways": [
      "Baby Pink",
      "Dusty Mauve",
      "Pure Milk White",
      "Honey Gold"
    ],
    "imageGradient": [
      "#1E293B",
      "#0F172A"
    ],
    "imageUrl": "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.56.16%20AM.jpeg",
    "localImageUrl": "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.56.16%20AM.jpeg",
    "gallery": [
      "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.56.16%20AM.jpeg"
    ],
    "localGallery": [
      "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.56.16%20AM.jpeg"
    ],
    "rating": 5,
    "reviews": 22,
    "createdAt": "2026-10-17",
    "updatedAt": "2026-10-19",
    "freeShipping": true,
    "isPreorder": false,
    "preorderShipBy": null,
    "preorderDaysMin": null,
    "preorderDaysMax": null,
    "customFields": [],
    "seoTitle": "Nocturnal Sweet Dreams Owl Rug · QADRI Rugs",
    "seoDescription": "Designed with tender whimsy for tranquil nursery environments, this circular-silhouette rug portrays a gentle pink woodland owl guardian. Featuring wide starry ",
    "faq": null,
    "categoryType": "shop"
  },
  {
    "id": "p_rug_070",
    "slug": "kawaii-wavy-striped-bunny-rug",
    "name": "Cotton Tail Wavy Striped Bunny Rug",
    "tagline": "Playful Floppy-Eared Joy in Pastel Waves",
    "story": "Celebrating innocence and whimsical play, this oversized bunny silhouette rug features delightful rippling horizontal stripes of marshmallow white and sweet blossom pink. With outstretched paws revealing pink pads, an endearing flopped ear, and sparkling anime eyes, it transforms the floor into an invitation for joyful relaxation. A heartwarming statement piece that elevates children's suites and cheerful eclectic living areas.",
    "function": "Crafted with 22mm deep-pile cloud fleece yarn delivering extraordinary tactile softness and cushioned bounce. Each wavy stripe and paw detail is hand-sheared for crisp definition, mounted on an odorless non-slip felt-latex backing. Ideal for luxury playrooms, children's bedrooms, and whimsical reading snugs.",
    "pricePaise": 0,
    "compareAtPaise": 0,
    "printMinutes": 0,
    "weightGrams": 7400,
    "dimensionsMm": {
      "w": 1400,
      "h": 2000,
      "d": 22
    },
    "edition": "Artisan Handcrafted",
    "status": "active",
    "category": "cafe",
    "ageGroup": "All interiors",
    "themes": [
      "Kawaii Bunny",
      "Playful Nursery",
      "Pastel Waves",
      "Tactile Cloud Fleece",
      "Whimsical Animal"
    ],
    "colorways": [
      "Blossom Pink",
      "Marshmallow White",
      "Rosewood Pink",
      "Charcoal Black"
    ],
    "imageGradient": [
      "#1E293B",
      "#0F172A"
    ],
    "imageUrl": "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.56.17%20AM%20(1).jpeg",
    "localImageUrl": "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.56.17%20AM%20(1).jpeg",
    "gallery": [
      "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.56.17%20AM%20(1).jpeg"
    ],
    "localGallery": [
      "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.56.17%20AM%20(1).jpeg"
    ],
    "rating": 5,
    "reviews": 23,
    "createdAt": "2026-10-17",
    "updatedAt": "2026-10-19",
    "freeShipping": true,
    "isPreorder": false,
    "preorderShipBy": null,
    "preorderDaysMin": null,
    "preorderDaysMax": null,
    "customFields": [],
    "seoTitle": "Cotton Tail Wavy Striped Bunny Rug · QADRI Rugs",
    "seoDescription": "Celebrating innocence and whimsical play, this oversized bunny silhouette rug features delightful rippling horizontal stripes of marshmallow white and sweet blo",
    "faq": null,
    "categoryType": "shop"
  },
  {
    "id": "p_rug_071",
    "slug": "golden-rose-mandala-circular-rug",
    "name": "Gilded Rose Botanical Mandala Rug",
    "tagline": "Refined Golden Filigree in Symmetrical Bloom",
    "story": "A breathtaking expression of botanical symmetry and classical geometry, this circular luxury rug highlights an English rose blooming from its heart, surrounded by a delicate beaded web mandala. The golden ochre embossed linework glimmers softly against a field of pristine ivory velvet, evoking the serene elegance of royal glasshouses and celestial architecture. A dignified, luminous statement that enriches formal reception salons and dining atriums.",
    "function": "Expertly hand-tufted in 18mm high-density New Zealand wool with metallic-sheen botanical silk relief carvings that catch natural daylight. Finished with an immaculate circular bound perimeter and heavy multi-layer cotton backing. Exemplary for grand circular foyers, luxury dining rooms, and executive boutique suites.",
    "pricePaise": 0,
    "compareAtPaise": 0,
    "printMinutes": 0,
    "weightGrams": 9400,
    "dimensionsMm": {
      "w": 2000,
      "h": 2000,
      "d": 18
    },
    "edition": "Artisan Handcrafted",
    "status": "active",
    "category": "deskmate",
    "ageGroup": "All interiors",
    "themes": [
      "Botanical Rose",
      "Golden Mandala",
      "Symmetrical Luxury",
      "Circular Medallion",
      "Refined Classic"
    ],
    "colorways": [
      "Antique Gold Ochre",
      "Pristine Ivory",
      "Warm Alabaster"
    ],
    "imageGradient": [
      "#1E293B",
      "#0F172A"
    ],
    "imageUrl": "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.56.17%20AM%20(2).jpeg",
    "localImageUrl": "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.56.17%20AM%20(2).jpeg",
    "gallery": [
      "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.56.17%20AM%20(2).jpeg"
    ],
    "localGallery": [
      "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.56.17%20AM%20(2).jpeg"
    ],
    "rating": 5,
    "reviews": 24,
    "createdAt": "2026-10-17",
    "updatedAt": "2026-10-19",
    "freeShipping": true,
    "isPreorder": false,
    "preorderShipBy": null,
    "preorderDaysMin": null,
    "preorderDaysMax": null,
    "customFields": [],
    "seoTitle": "Gilded Rose Botanical Mandala Rug · QADRI Rugs",
    "seoDescription": "A breathtaking expression of botanical symmetry and classical geometry, this circular luxury rug highlights an English rose blooming from its heart, surrounded ",
    "faq": null,
    "categoryType": "shop"
  },
  {
    "id": "p_rug_072",
    "slug": "uchiha-shuriken-sasuke-anime-rug",
    "name": "Sasuke Avenger Sharingan Statement Rug",
    "tagline": "Fierce Shinobi Power in Violet Aura",
    "story": "Paying tribute to one of anime's most legendary prodigies, this sculpted character rug portrays Sasuke Uchiha with his piercing crimson Mangekyo Sharingan eyes. Outlined against a jagged lavender lightning aura and framed by his iconic twisted purple shimenawa rope belt, the composition captures resolute focus and dark shinobi mastery. An exceptional collectible centerpiece for anime enthusiasts and modern game room curators.",
    "function": "Hand-tufted with dense 18mm cut-pile yarn, featuring intricate multi-color carving defining every spiky raven hair tuft, the eyes' detailed tomoe patterns, and the tactile braided texture of the purple rope. Mounted on a heavy-duty reinforced non-slip canvas backing. Suitable for luxury anime pavilions, private streaming dens, and collector showcases.",
    "pricePaise": 0,
    "compareAtPaise": 0,
    "printMinutes": 0,
    "weightGrams": 6900,
    "dimensionsMm": {
      "w": 1500,
      "h": 1600,
      "d": 18
    },
    "edition": "Artisan Handcrafted",
    "status": "active",
    "category": "cafe",
    "ageGroup": "All interiors",
    "themes": [
      "Anime Shinobi",
      "Sasuke Uchiha",
      "Sharingan",
      "Streetwear Anime",
      "Pop Culture Art"
    ],
    "colorways": [
      "Raven Black",
      "Lilac Purple",
      "Slate Grey",
      "Crimson Red",
      "Skin Cream"
    ],
    "imageGradient": [
      "#1E293B",
      "#0F172A"
    ],
    "imageUrl": "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.56.17%20AM.jpeg",
    "localImageUrl": "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.56.17%20AM.jpeg",
    "gallery": [
      "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.56.17%20AM.jpeg"
    ],
    "localGallery": [
      "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.56.17%20AM.jpeg"
    ],
    "rating": 5,
    "reviews": 25,
    "createdAt": "2026-10-17",
    "updatedAt": "2026-10-19",
    "freeShipping": true,
    "isPreorder": false,
    "preorderShipBy": null,
    "preorderDaysMin": null,
    "preorderDaysMax": null,
    "customFields": [],
    "seoTitle": "Sasuke Avenger Sharingan Statement Rug · QADRI Rugs",
    "seoDescription": "Paying tribute to one of anime's most legendary prodigies, this sculpted character rug portrays Sasuke Uchiha with his piercing crimson Mangekyo Sharingan eyes.",
    "faq": null,
    "categoryType": "shop"
  },
  {
    "id": "p_rug_073",
    "slug": "woodland-hedgehog-sprawl-rug",
    "name": "Woodland Bramble Hedgehog Sprawl Rug",
    "tagline": "Earthy Forest Charm in Sprawling Relief",
    "story": "Invoking the peaceful solace of autumn woodlands, this expansive animal silhouette rug portrays a contented hedgehog lounging across the floor. Warm acorn brown quills with layered hand-carved feathering drape over a soft fawn belly, complete with dainty paws and a playful button nose. A cozy, grounded piece that harmonizes effortlessly with organic wood furniture and Scandinavian modern decor.",
    "function": "Tufted with variable-depth cut pile ranging from 16mm on the fawn body to 20mm textured pile on the quill mantle. Hand-beveled spine indentations create lifelike tactile depth, backed with thick breathable jute-latex canvas. Perfect for boho-chic family living rooms, cozy reading snugs, and organic children's suites.",
    "pricePaise": 0,
    "compareAtPaise": 0,
    "printMinutes": 0,
    "weightGrams": 7600,
    "dimensionsMm": {
      "w": 2000,
      "h": 1400,
      "d": 20
    },
    "edition": "Artisan Handcrafted",
    "status": "active",
    "category": "cafe",
    "ageGroup": "All interiors",
    "themes": [
      "Woodland Fauna",
      "Hedgehog",
      "Earthy Boho",
      "Rustic Comfort",
      "Animal Silhouette"
    ],
    "colorways": [
      "Acorn Brown",
      "Warm Fawn Tan",
      "Espresso Black",
      "Cream Wool"
    ],
    "imageGradient": [
      "#1E293B",
      "#0F172A"
    ],
    "imageUrl": "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.56.18%20AM%20(1).jpeg",
    "localImageUrl": "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.56.18%20AM%20(1).jpeg",
    "gallery": [
      "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.56.18%20AM%20(1).jpeg"
    ],
    "localGallery": [
      "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.56.18%20AM%20(1).jpeg"
    ],
    "rating": 5,
    "reviews": 8,
    "createdAt": "2026-10-17",
    "updatedAt": "2026-10-19",
    "freeShipping": true,
    "isPreorder": false,
    "preorderShipBy": null,
    "preorderDaysMin": null,
    "preorderDaysMax": null,
    "customFields": [],
    "seoTitle": "Woodland Bramble Hedgehog Sprawl Rug · QADRI Rugs",
    "seoDescription": "Invoking the peaceful solace of autumn woodlands, this expansive animal silhouette rug portrays a contented hedgehog lounging across the floor. Warm acorn brown",
    "faq": null,
    "categoryType": "shop"
  },
  {
    "id": "p_rug_074",
    "slug": "kraken-op-art-octopus-statement-rug",
    "name": "Monochrome Kraken Octopus Statement Rug",
    "tagline": "Mesmerizing Cephalopod Splendor in Kinetic Stripes",
    "story": "A masterstroke of graphic textile design, this awe-inspiring octopus rug stretches eight undulating tentacles across the floor in sweeping, spiral symmetry. Bold alternating zebra stripes of jet black and crisp ivory wrap around each curling arm, creating a kinetic optical illusion that mimics underwater propulsion. An extraordinary conversation piece that transforms any vast floor into a dynamic contemporary gallery.",
    "function": "Custom hand-tufted in complex multi-segment die-cut silhouette with 18mm plush wool-blend pile. Each tentacle swirl and curved suction contour is meticulously hand-sheared and bordered with reinforced edge-binding, anchored by a high-grip anti-slip backing. Tailored for spacious modern entry rotundas, luxury oceanfront villas, creative design studios, and high-profile commercial spaces.",
    "pricePaise": 0,
    "compareAtPaise": 0,
    "printMinutes": 0,
    "weightGrams": 11500,
    "dimensionsMm": {
      "w": 2400,
      "h": 2200,
      "d": 18
    },
    "edition": "Artisan Handcrafted",
    "status": "active",
    "category": "cafe",
    "ageGroup": "All interiors",
    "themes": [
      "Cephalopod",
      "Monochrome Op-Art",
      "Deep Sea Kraken",
      "Statement Sculpture",
      "Kinetic Graphic"
    ],
    "colorways": [
      "Pitch Black",
      "Pure Chalk White"
    ],
    "imageGradient": [
      "#1E293B",
      "#0F172A"
    ],
    "imageUrl": "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.56.18%20AM.jpeg",
    "localImageUrl": "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.56.18%20AM.jpeg",
    "gallery": [
      "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.56.18%20AM.jpeg"
    ],
    "localGallery": [
      "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.56.18%20AM.jpeg"
    ],
    "rating": 5,
    "reviews": 9,
    "createdAt": "2026-10-17",
    "updatedAt": "2026-10-19",
    "freeShipping": true,
    "isPreorder": false,
    "preorderShipBy": null,
    "preorderDaysMin": null,
    "preorderDaysMax": null,
    "customFields": [],
    "seoTitle": "Monochrome Kraken Octopus Statement Rug · QADRI Rugs",
    "seoDescription": "A masterstroke of graphic textile design, this awe-inspiring octopus rug stretches eight undulating tentacles across the floor in sweeping, spiral symmetry. Bol",
    "faq": null,
    "categoryType": "shop"
  },
  {
    "id": "p_rug_075",
    "slug": "blush-accomplice-companion-rug",
    "name": "The Blush Accomplice Collector's Rug",
    "tagline": "Iconic Urban Pop Surrealism Underfoot",
    "story": "Drawing inspiration from vanguard street art collectibles and iconic gallery vinyl figures, this sculpted silhouette rug captures playful subversion in delicate blush tones. Cream ivory contours and signature cross-stitched eyes lend a striking contrast to modern minimalist interiors. The piece radiates youthful creative energy while maintaining an elevated collector aesthetic.",
    "function": "Artisanal hand-tufted construction utilizing high-density Japanese acrylic and virgin wool yarns, featuring hand-carved dimensional relief along every contour (16mm cut pile). Finished with reinforced anti-skid cotton canvas backing, perfectly engineered for luxury penthouse lounges, creative studio salons, and gallery-level entertainment suites.",
    "pricePaise": 0,
    "compareAtPaise": 0,
    "printMinutes": 0,
    "weightGrams": 6200,
    "dimensionsMm": {
      "w": 1200,
      "h": 2000,
      "d": 16
    },
    "edition": "Artisan Handcrafted",
    "status": "active",
    "category": "cafe",
    "ageGroup": "All interiors",
    "themes": [
      "Pop Art",
      "Urban Collector",
      "Streetwear Culture",
      "Contemporary Sculpture"
    ],
    "colorways": [
      "Blush Pink",
      "Alabaster Cream",
      "Matte Black"
    ],
    "imageGradient": [
      "#1E293B",
      "#0F172A"
    ],
    "imageUrl": "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.56.19%20AM%20(1).jpeg",
    "localImageUrl": "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.56.19%20AM%20(1).jpeg",
    "gallery": [
      "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.56.19%20AM%20(1).jpeg"
    ],
    "localGallery": [
      "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.56.19%20AM%20(1).jpeg"
    ],
    "rating": 5,
    "reviews": 10,
    "createdAt": "2026-10-17",
    "updatedAt": "2026-10-19",
    "freeShipping": true,
    "isPreorder": false,
    "preorderShipBy": null,
    "preorderDaysMin": null,
    "preorderDaysMax": null,
    "customFields": [],
    "seoTitle": "The Blush Accomplice Collector's Rug · QADRI Rugs",
    "seoDescription": "Drawing inspiration from vanguard street art collectibles and iconic gallery vinyl figures, this sculpted silhouette rug captures playful subversion in delicate",
    "faq": null,
    "categoryType": "shop"
  },
  {
    "id": "p_rug_076",
    "slug": "melting-joy-heart-icon-rug",
    "name": "Melting Joy Heart Icon Rug",
    "tagline": "Ecstatic Street Nostalgia Meets Warm Affection",
    "story": "A psychedelic reinterpretation of counter-culture smileys, this melting statement rug fuses dripping liquid outlines with an affectionate hand-heart silhouette. Contrasting fluffy shearling textures on the cream bucket hat against radiant golden fleece infuse the floor with sunny optimism. It serves as an uninhibited celebration of contemporary pop joy and lighthearted luxury.",
    "function": "Multi-textured hand-tufted craftsmanship pairing bouclé loop shearling pile with plush cut-pile New Zealand wool (18mm dimensional relief). Backed with non-slip natural latex for enhanced floor adhesion, making it ideal for avant-garde concept cafes, fashion boutiques, and modern residence dressing suites.",
    "pricePaise": 0,
    "compareAtPaise": 0,
    "printMinutes": 0,
    "weightGrams": 4800,
    "dimensionsMm": {
      "w": 1100,
      "h": 1300,
      "d": 18
    },
    "edition": "Artisan Handcrafted",
    "status": "active",
    "category": "cafe",
    "ageGroup": "All interiors",
    "themes": [
      "Y2K Streetwear",
      "Pop Art",
      "Emotional Expression",
      "Avant-Garde Living"
    ],
    "colorways": [
      "Sunflower Yellow",
      "Off-White Cream",
      "Charcoal Black"
    ],
    "imageGradient": [
      "#1E293B",
      "#0F172A"
    ],
    "imageUrl": "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.56.19%20AM%20(2).jpeg",
    "localImageUrl": "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.56.19%20AM%20(2).jpeg",
    "gallery": [
      "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.56.19%20AM%20(2).jpeg"
    ],
    "localGallery": [
      "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.56.19%20AM%20(2).jpeg"
    ],
    "rating": 5,
    "reviews": 11,
    "createdAt": "2026-10-17",
    "updatedAt": "2026-10-19",
    "freeShipping": true,
    "isPreorder": false,
    "preorderShipBy": null,
    "preorderDaysMin": null,
    "preorderDaysMax": null,
    "customFields": [],
    "seoTitle": "Melting Joy Heart Icon Rug · QADRI Rugs",
    "seoDescription": "A psychedelic reinterpretation of counter-culture smileys, this melting statement rug fuses dripping liquid outlines with an affectionate hand-heart silhouette.",
    "faq": null,
    "categoryType": "shop"
  },
  {
    "id": "p_rug_077",
    "slug": "imperial-kraken-octopus-rug",
    "name": "The Imperial Kraken Statement Rug",
    "tagline": "Majestic Deep Ocean Splendor Unleashed",
    "story": "Embodying the untamed allure of oceanic depths, this monumental cephalopod rug sprawls across the floor with organically curling tentacles. Deep royal violet and lilac gradients highlight multi-tiered suction cups hand-carved in three dimensions. The theatrical silhouette transforms expansive spaces into cinematic marine wonderlands.",
    "function": "Masterfully sculpted hand-tufted New Zealand wool with hand-beveled 3D carving highlighting each suction cup and tentacle ridge (18mm high-density cut pile). Reinforced with durable vulcanized natural latex backing, bespoke for coastal villas, boutique hotel grand foyers, and executive entertainment galleries.",
    "pricePaise": 0,
    "compareAtPaise": 0,
    "printMinutes": 0,
    "weightGrams": 8500,
    "dimensionsMm": {
      "w": 2000,
      "h": 2000,
      "d": 18
    },
    "edition": "Artisan Handcrafted",
    "status": "active",
    "category": "cafe",
    "ageGroup": "All interiors",
    "themes": [
      "Marine Fauna",
      "Oceanic Surrealism",
      "Sculptural Silhouette",
      "Coastal Luxury"
    ],
    "colorways": [
      "Imperial Purple",
      "Deep Violet",
      "Lilac Slate"
    ],
    "imageGradient": [
      "#1E293B",
      "#0F172A"
    ],
    "imageUrl": "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.56.19%20AM%20(3).jpeg",
    "localImageUrl": "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.56.19%20AM%20(3).jpeg",
    "gallery": [
      "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.56.19%20AM%20(3).jpeg"
    ],
    "localGallery": [
      "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.56.19%20AM%20(3).jpeg"
    ],
    "rating": 5,
    "reviews": 12,
    "createdAt": "2026-10-17",
    "updatedAt": "2026-10-19",
    "freeShipping": true,
    "isPreorder": false,
    "preorderShipBy": null,
    "preorderDaysMin": null,
    "preorderDaysMax": null,
    "customFields": [],
    "seoTitle": "The Imperial Kraken Statement Rug · QADRI Rugs",
    "seoDescription": "Embodying the untamed allure of oceanic depths, this monumental cephalopod rug sprawls across the floor with organically curling tentacles. Deep royal violet an",
    "faq": null,
    "categoryType": "shop"
  },
  {
    "id": "p_rug_078",
    "slug": "yin-yang-koi-whirlpool-rug",
    "name": "Harmony Yin Yang Koi Medallion Rug",
    "tagline": "Eternal Fluidity and Harmonious Balance",
    "story": "Honoring timeless Eastern philosophies of balance and eternal flow, this circular medallion captures two koi fish gracefully navigating concentric azure currents. The contrasting black and white scales set against frothing sea foam evoke the peaceful cadence of an imperial zen garden pond. It brings a grounded, meditative rhythm to serene contemporary environments.",
    "function": "High-definition multi-level hand tufting with variable pile depths (14mm to 20mm) that produce an embossed, tactile ripple sensation underfoot. Crafted from premium silky bamboo viscose and resilient virgin wool over heavy cloth backing, suited for zen meditation salons, luxury spa retreats, and executive boardrooms.",
    "pricePaise": 0,
    "compareAtPaise": 0,
    "printMinutes": 0,
    "weightGrams": 8200,
    "dimensionsMm": {
      "w": 1800,
      "h": 1800,
      "d": 20
    },
    "edition": "Artisan Handcrafted",
    "status": "active",
    "category": "deskmate",
    "ageGroup": "All interiors",
    "themes": [
      "Zen & Feng Shui",
      "Aquatic Medallion",
      "Japanese Aesthetics",
      "Symbolic Balance"
    ],
    "colorways": [
      "Cerulean Blue",
      "Cobalt Indigo",
      "Pure White",
      "Ink Black"
    ],
    "imageGradient": [
      "#1E293B",
      "#0F172A"
    ],
    "imageUrl": "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.56.19%20AM.jpeg",
    "localImageUrl": "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.56.19%20AM.jpeg",
    "gallery": [
      "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.56.19%20AM.jpeg"
    ],
    "localGallery": [
      "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.56.19%20AM.jpeg"
    ],
    "rating": 5,
    "reviews": 13,
    "createdAt": "2026-10-17",
    "updatedAt": "2026-10-19",
    "freeShipping": true,
    "isPreorder": false,
    "preorderShipBy": null,
    "preorderDaysMin": null,
    "preorderDaysMax": null,
    "customFields": [],
    "seoTitle": "Harmony Yin Yang Koi Medallion Rug · QADRI Rugs",
    "seoDescription": "Honoring timeless Eastern philosophies of balance and eternal flow, this circular medallion captures two koi fish gracefully navigating concentric azure current",
    "faq": null,
    "categoryType": "shop"
  },
  {
    "id": "p_rug_079",
    "slug": "nocturne-koi-cresting-waves-rug",
    "name": "Nocturne Koi & Cresting Waves Rug",
    "tagline": "Zen Poetics in Midnight Contrast",
    "story": "Set upon a midnight noir scalloped silhouette, twin koi glide through stylized foaming crests inspired by classic Japanese woodblock prints. The stark interplay between pure ivory, vermilion highlights, and rich ebony creates an atmosphere of poised refinement. It offers a dramatic yet tranquil visual centerpiece for contemplative rooms.",
    "function": "Precision hand-tufted construction with micro-sheared plush wool and carved silk-blend wave crests (16mm pile thickness). Completed with a heavy non-slip woven cotton canvas backing, perfectly curated for luxury nursery suites, master bedrooms, executive tea rooms, or serene wellness lounges.",
    "pricePaise": 0,
    "compareAtPaise": 0,
    "printMinutes": 0,
    "weightGrams": 6800,
    "dimensionsMm": {
      "w": 1600,
      "h": 1600,
      "d": 16
    },
    "edition": "Artisan Handcrafted",
    "status": "active",
    "category": "deskmate",
    "ageGroup": "All interiors",
    "themes": [
      "Ukiyo-e Wave",
      "Koi Pond",
      "Zen Duality",
      "Scalloped Silhouette"
    ],
    "colorways": [
      "Midnight Black",
      "Porcelain White",
      "Vermilion Red"
    ],
    "imageGradient": [
      "#1E293B",
      "#0F172A"
    ],
    "imageUrl": "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.56.20%20AM%20(1).jpeg",
    "localImageUrl": "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.56.20%20AM%20(1).jpeg",
    "gallery": [
      "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.56.20%20AM%20(1).jpeg"
    ],
    "localGallery": [
      "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.56.20%20AM%20(1).jpeg"
    ],
    "rating": 5,
    "reviews": 14,
    "createdAt": "2026-10-17",
    "updatedAt": "2026-10-19",
    "freeShipping": true,
    "isPreorder": false,
    "preorderShipBy": null,
    "preorderDaysMin": null,
    "preorderDaysMax": null,
    "customFields": [],
    "seoTitle": "Nocturne Koi & Cresting Waves Rug · QADRI Rugs",
    "seoDescription": "Set upon a midnight noir scalloped silhouette, twin koi glide through stylized foaming crests inspired by classic Japanese woodblock prints. The stark interplay",
    "faq": null,
    "categoryType": "shop"
  },
  {
    "id": "p_rug_080",
    "slug": "liquid-zebra-drip-rug",
    "name": "Liquid Zebra Drip Statement Rug",
    "tagline": "Organic Safari Meets Avant-Garde Surrealism",
    "story": "Deconstructing classic safari opulence, this dramatic statement rug distorts traditional zebra hide into molten, flowing liquid splatters. Monochromatic waves and trailing droplet puddles dissolve boundaries between untamed wildlife and contemporary pop surrealism. The resulting piece commands attention as a fearless modern design manifesto.",
    "function": "Custom shaped hand-tufted craftsmanship with bevel-carved high-density wool (18mm pile) and precision-cut droplet accents. Anchored with high-grip natural latex backing, ideal for contemporary commercial galleries, flagship brand showrooms, architectural penthouses, and design-forward residential lounges.",
    "pricePaise": 0,
    "compareAtPaise": 0,
    "printMinutes": 0,
    "weightGrams": 8800,
    "dimensionsMm": {
      "w": 2200,
      "h": 2000,
      "d": 18
    },
    "edition": "Artisan Handcrafted",
    "status": "active",
    "category": "keychains",
    "ageGroup": "All interiors",
    "themes": [
      "Pop Surrealism",
      "Liquid Wildlife",
      "Monochrome Statement",
      "Avant-Garde Living"
    ],
    "colorways": [
      "Pitch Black",
      "Ivory Cream"
    ],
    "imageGradient": [
      "#1E293B",
      "#0F172A"
    ],
    "imageUrl": "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.56.20%20AM%20(2).jpeg",
    "localImageUrl": "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.56.20%20AM%20(2).jpeg",
    "gallery": [
      "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.56.20%20AM%20(2).jpeg"
    ],
    "localGallery": [
      "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.56.20%20AM%20(2).jpeg"
    ],
    "rating": 5,
    "reviews": 15,
    "createdAt": "2026-10-17",
    "updatedAt": "2026-10-19",
    "freeShipping": true,
    "isPreorder": false,
    "preorderShipBy": null,
    "preorderDaysMin": null,
    "preorderDaysMax": null,
    "customFields": [],
    "seoTitle": "Liquid Zebra Drip Statement Rug · QADRI Rugs",
    "seoDescription": "Deconstructing classic safari opulence, this dramatic statement rug distorts traditional zebra hide into molten, flowing liquid splatters. Monochromatic waves a",
    "faq": null,
    "categoryType": "shop"
  },
  {
    "id": "p_rug_081",
    "slug": "grand-voyage-straw-hat-rug",
    "name": "The Grand Voyage Straw Hat Rug",
    "tagline": "High-Spirited Adventure and Timeless Anime Nostalgia",
    "story": "Capturing the irrepressible courage and joyful spirit of manga legend, this silhouette rug translates iconic pirate adventures into luxury fiber art. From the warm golden tones of the woven straw hat to the spirited crimson vest, every line radiates wanderlust and camaraderie. It infuses gaming rooms and creative spaces with infectious vitality.",
    "function": "Ultra-dense hand-tufted acrylic and wool blend featuring contoured multi-depth carving across facial features, hat brim, and eyes (16mm plush pile). Backed with skid-resistant reinforced cotton canvas, designed for modern collector dens, luxury media rooms, and gaming suites.",
    "pricePaise": 0,
    "compareAtPaise": 0,
    "printMinutes": 0,
    "weightGrams": 5200,
    "dimensionsMm": {
      "w": 1400,
      "h": 1350,
      "d": 16
    },
    "edition": "Artisan Handcrafted",
    "status": "active",
    "category": "cafe",
    "ageGroup": "All interiors",
    "themes": [
      "Anime Culture",
      "Manga Legend",
      "Collector Suite",
      "Bold Pop Art"
    ],
    "colorways": [
      "Straw Ochre",
      "Scarlet Red",
      "Jet Black",
      "Warm Bisque"
    ],
    "imageGradient": [
      "#1E293B",
      "#0F172A"
    ],
    "imageUrl": "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.56.20%20AM.jpeg",
    "localImageUrl": "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.56.20%20AM.jpeg",
    "gallery": [
      "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.56.20%20AM.jpeg"
    ],
    "localGallery": [
      "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.56.20%20AM.jpeg"
    ],
    "rating": 5,
    "reviews": 16,
    "createdAt": "2026-10-17",
    "updatedAt": "2026-10-19",
    "freeShipping": true,
    "isPreorder": false,
    "preorderShipBy": null,
    "preorderDaysMin": null,
    "preorderDaysMax": null,
    "customFields": [],
    "seoTitle": "The Grand Voyage Straw Hat Rug · QADRI Rugs",
    "seoDescription": "Capturing the irrepressible courage and joyful spirit of manga legend, this silhouette rug translates iconic pirate adventures into luxury fiber art. From the w",
    "faq": null,
    "categoryType": "shop"
  },
  {
    "id": "p_rug_082",
    "slug": "nitro-blaze-retro-van-rug",
    "name": "Nitro Blaze Retro Van Rug",
    "tagline": "Mid-Century Custom Kulture and High-Octane Warmth",
    "story": "A spirited nod to vintage 1970s custom van culture and cafe street racers, this bold silhouette rug marries blazing hot-rod flames with rich espresso and cream tones. Multi-layered tufting gives the roaring fire tactile movement across the chassis of the retro truck profile. It injects nostalgic warmth and energetic craft into casual gathering spaces.",
    "function": "Sculptural multi-level hand-tufted pile with relief-beveled flame tongues and a textured radial wheel hub (18mm pile height). Supported by heavy-duty anti-slip cotton duck canvas backing, tailor-made for artisanal coffee lounges, custom automotive showrooms, creative agency offices, and urban lofts.",
    "pricePaise": 0,
    "compareAtPaise": 0,
    "printMinutes": 0,
    "weightGrams": 6400,
    "dimensionsMm": {
      "w": 1800,
      "h": 1400,
      "d": 18
    },
    "edition": "Artisan Handcrafted",
    "status": "active",
    "category": "cafe",
    "ageGroup": "All interiors",
    "themes": [
      "Kustom Kulture",
      "Retro Automotive",
      "Vintage Flames",
      "Cafe Lounge"
    ],
    "colorways": [
      "Roasted Espresso Brown",
      "Tangerine Orange",
      "Sunburst Amber",
      "Cream White"
    ],
    "imageGradient": [
      "#1E293B",
      "#0F172A"
    ],
    "imageUrl": "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.56.21%20AM%20(1).jpeg",
    "localImageUrl": "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.56.21%20AM%20(1).jpeg",
    "gallery": [
      "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.56.21%20AM%20(1).jpeg"
    ],
    "localGallery": [
      "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.56.21%20AM%20(1).jpeg"
    ],
    "rating": 5,
    "reviews": 17,
    "createdAt": "2026-10-17",
    "updatedAt": "2026-10-19",
    "freeShipping": true,
    "isPreorder": false,
    "preorderShipBy": null,
    "preorderDaysMin": null,
    "preorderDaysMax": null,
    "customFields": [],
    "seoTitle": "Nitro Blaze Retro Van Rug · QADRI Rugs",
    "seoDescription": "A spirited nod to vintage 1970s custom van culture and cafe street racers, this bold silhouette rug marries blazing hot-rod flames with rich espresso and cream ",
    "faq": null,
    "categoryType": "shop"
  },
  {
    "id": "p_rug_083",
    "slug": "sage-lime-wheel-cluster-rug",
    "name": "Sage Lime Wheel Cluster Rug",
    "tagline": "Crisp Botanical Geometry and Zesty Modernity",
    "story": "Inspired by sun-drenched Mediterranean citrus groves, this sculptural silhouette interlocks seven sliced lime wheels in a blooming organic constellation. Earthy sage green rinds frame creamy ivory segments, establishing an uplifting balance between botanical realism and geometric simplicity. It brings refreshing vitality to bright, light-filled rooms.",
    "function": "Hand-tufted using a blend of high-twist New Zealand wool and velvety loop fibers, accented with hand-carved radial segment dividers (16mm pile height). Backed with flexible organic latex, ideal for sunrooms, breakfast nooks, organic-luxe nurseries, and boutique dining terraces.",
    "pricePaise": 0,
    "compareAtPaise": 0,
    "printMinutes": 0,
    "weightGrams": 6000,
    "dimensionsMm": {
      "w": 1600,
      "h": 1400,
      "d": 16
    },
    "edition": "Artisan Handcrafted",
    "status": "active",
    "category": "cafe",
    "ageGroup": "All interiors",
    "themes": [
      "Botanical Geometry",
      "Mediterranean Living",
      "Citrus Whimsy",
      "Scandi Chic"
    ],
    "colorways": [
      "Sage Green",
      "Cream Ivory",
      "Olive Mist"
    ],
    "imageGradient": [
      "#1E293B",
      "#0F172A"
    ],
    "imageUrl": "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.56.21%20AM%20(2).jpeg",
    "localImageUrl": "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.56.21%20AM%20(2).jpeg",
    "gallery": [
      "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.56.21%20AM%20(2).jpeg"
    ],
    "localGallery": [
      "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.56.21%20AM%20(2).jpeg"
    ],
    "rating": 5,
    "reviews": 18,
    "createdAt": "2026-10-17",
    "updatedAt": "2026-10-19",
    "freeShipping": true,
    "isPreorder": false,
    "preorderShipBy": null,
    "preorderDaysMin": null,
    "preorderDaysMax": null,
    "customFields": [],
    "seoTitle": "Sage Lime Wheel Cluster Rug · QADRI Rugs",
    "seoDescription": "Inspired by sun-drenched Mediterranean citrus groves, this sculptural silhouette interlocks seven sliced lime wheels in a blooming organic constellation. Earthy",
    "faq": null,
    "categoryType": "shop"
  },
  {
    "id": "p_rug_084",
    "slug": "blush-flamingo-regal-medallion-rug",
    "name": "Blush Flamingo Regal Medallion Rug",
    "tagline": "Graceful Avian Elegance in Pastel Splendor",
    "story": "Evoking the refined serenity of royal aviaries and French salon courtyards, this scalloped medallion rug showcases a majestic flamingo amidst swirling blush plumage. The gentle curve of its neck and delicate feathered gradients introduce romantic sophistication into quiet sanctuaries. It stands as an exquisite fusion of classical ornamentation and poetic fauna.",
    "function": "Masterfully hand-tufted using fine lustrous virgin wool and bamboo silk for an iridescent plumage sheen, complemented by precision beveled outlines (18mm cut pile). Backed by heavy woven cotton canvas, suited for grand dressing suites, feminine boudoirs, luxury nurseries, and hotel salon rotundas.",
    "pricePaise": 0,
    "compareAtPaise": 0,
    "printMinutes": 0,
    "weightGrams": 7600,
    "dimensionsMm": {
      "w": 1800,
      "h": 1800,
      "d": 18
    },
    "edition": "Artisan Handcrafted",
    "status": "active",
    "category": "deskmate",
    "ageGroup": "All interiors",
    "themes": [
      "Avian Splendor",
      "Baroque Romance",
      "Scalloped Silhouette",
      "Pastel Luxe"
    ],
    "colorways": [
      "Rose Pink",
      "Blush Cream",
      "Porcelain Ivory",
      "Jet Black"
    ],
    "imageGradient": [
      "#1E293B",
      "#0F172A"
    ],
    "imageUrl": "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.56.21%20AM.jpeg",
    "localImageUrl": "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.56.21%20AM.jpeg",
    "gallery": [
      "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.56.21%20AM.jpeg"
    ],
    "localGallery": [
      "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.56.21%20AM.jpeg"
    ],
    "rating": 5,
    "reviews": 19,
    "createdAt": "2026-10-17",
    "updatedAt": "2026-10-19",
    "freeShipping": true,
    "isPreorder": false,
    "preorderShipBy": null,
    "preorderDaysMin": null,
    "preorderDaysMax": null,
    "customFields": [],
    "seoTitle": "Blush Flamingo Regal Medallion Rug · QADRI Rugs",
    "seoDescription": "Evoking the refined serenity of royal aviaries and French salon courtyards, this scalloped medallion rug showcases a majestic flamingo amidst swirling blush plu",
    "faq": null,
    "categoryType": "shop"
  },
  {
    "id": "p_rug_085",
    "slug": "mischief-cheese-kawaii-oval-rug",
    "name": "Mischief & Cheese Kawaii Oval Rug",
    "tagline": "Charming Feline Playfulness and Childhood Joy",
    "story": "A heartwarming tribute to vintage storybook camaraderie, this playful oval rug depicts an adorable ginger kitten chasing a friendly mouse carrying a wedge of Swiss cheese. Encircled by a pastel frame of flowers, hearts, and fish motifs, it radiates tender nostalgia and boundless warmth. It effortlessly brightens children's spaces with whimsical storytelling.",
    "function": "Crafted with ultra-soft high-density microfiber yarn, featuring a velvety 15mm pile height that provides gentle hypoallergenic cushioning under delicate feet. Equipped with a skid-resistant dotted TPR backing, tailor-made for children's nurseries, play suites, and cozy family reading areas.",
    "pricePaise": 0,
    "compareAtPaise": 0,
    "printMinutes": 0,
    "weightGrams": 4600,
    "dimensionsMm": {
      "w": 1600,
      "h": 1100,
      "d": 15
    },
    "edition": "Artisan Handcrafted",
    "status": "active",
    "category": "cafe",
    "ageGroup": "All interiors",
    "themes": [
      "Kawaii Anime",
      "Children's Storybook",
      "Whimsical Pets",
      "Playful Charm"
    ],
    "colorways": [
      "Pastel Cream",
      "Tangerine Orange",
      "Cornflower Blue",
      "Buttercup Yellow"
    ],
    "imageGradient": [
      "#1E293B",
      "#0F172A"
    ],
    "imageUrl": "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.56.22%20AM%20(1).jpeg",
    "localImageUrl": "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.56.22%20AM%20(1).jpeg",
    "gallery": [
      "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.56.22%20AM%20(1).jpeg"
    ],
    "localGallery": [
      "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.56.22%20AM%20(1).jpeg"
    ],
    "rating": 5,
    "reviews": 20,
    "createdAt": "2026-10-17",
    "updatedAt": "2026-10-19",
    "freeShipping": true,
    "isPreorder": false,
    "preorderShipBy": null,
    "preorderDaysMin": null,
    "preorderDaysMax": null,
    "customFields": [],
    "seoTitle": "Mischief & Cheese Kawaii Oval Rug · QADRI Rugs",
    "seoDescription": "A heartwarming tribute to vintage storybook camaraderie, this playful oval rug depicts an adorable ginger kitten chasing a friendly mouse carrying a wedge of Sw",
    "faq": null,
    "categoryType": "shop"
  },
  {
    "id": "p_rug_086",
    "slug": "intertwined-souls-sculptural-rug",
    "name": "Intertwined Souls Sculptural Area Rug",
    "tagline": "Poetic Intimacy Carved in Harmonious Flow",
    "story": "Inspired by modernist figurative sculpture and the tender gravity of human connection, this tactile masterpiece reveals two silhouettes emerging from hypnotic fluid currents. Alternating ridges of serene slate blue and warm sand beige converge towards an intimate kiss. It acts as an evocative, gallery-worthy foundation for sophisticated contemporary homes.",
    "function": "High-low multi-dimensional hand-carved relief tufting with ultra-plush high pile (22mm) pairing micro-denier fleece with dense virgin wool. Backed by double-layer woven cotton canvas, designed for minimalist living salons, high-end residential lofts, and boutique hotel penthouse bedrooms.",
    "pricePaise": 0,
    "compareAtPaise": 0,
    "printMinutes": 0,
    "weightGrams": 9200,
    "dimensionsMm": {
      "w": 1600,
      "h": 2300,
      "d": 22
    },
    "edition": "Artisan Handcrafted",
    "status": "active",
    "category": "deskmate",
    "ageGroup": "All interiors",
    "themes": [
      "Figurative Minimalism",
      "Sculptural 3D",
      "Abstract Romance",
      "Modernist Elegance"
    ],
    "colorways": [
      "Slate Sky Blue",
      "Warm Sand Beige",
      "Alabaster Cream"
    ],
    "imageGradient": [
      "#1E293B",
      "#0F172A"
    ],
    "imageUrl": "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.56.22%20AM%20(2).jpeg",
    "localImageUrl": "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.56.22%20AM%20(2).jpeg",
    "gallery": [
      "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.56.22%20AM%20(2).jpeg"
    ],
    "localGallery": [
      "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.56.22%20AM%20(2).jpeg"
    ],
    "rating": 5,
    "reviews": 21,
    "createdAt": "2026-10-17",
    "updatedAt": "2026-10-19",
    "freeShipping": true,
    "isPreorder": false,
    "preorderShipBy": null,
    "preorderDaysMin": null,
    "preorderDaysMax": null,
    "customFields": [],
    "seoTitle": "Intertwined Souls Sculptural Area Rug · QADRI Rugs",
    "seoDescription": "Inspired by modernist figurative sculpture and the tender gravity of human connection, this tactile masterpiece reveals two silhouettes emerging from hypnotic f",
    "faq": null,
    "categoryType": "shop"
  },
  {
    "id": "p_rug_087",
    "slug": "sunlit-toucan-tropical-rug",
    "name": "Sunlit Toucan Tropical Statement Rug",
    "tagline": "Vibrant Rainforest Charm and Playful Warmth",
    "story": "Channeling the exuberant biodiversity of Amazonian canopies, this shaped toucan rug celebrates exotic avian beauty with radiant enthusiasm. The oversized beak glows with sunny mango and citrus hues, offset by velvety ebony plumage and soft ivory borders. It creates an instantly uplifting presence in sunlit spaces.",
    "function": "Hand-tufted with high-resilience cut-pile New Zealand wool, featuring distinct pile texturing between plumage and beak (16mm pile height). Completed with edge-bound non-slip canvas backing, perfectly suited for sun-drenched garden rooms, children's creative suites, and coastal vacation homes.",
    "pricePaise": 0,
    "compareAtPaise": 0,
    "printMinutes": 0,
    "weightGrams": 4900,
    "dimensionsMm": {
      "w": 1500,
      "h": 1200,
      "d": 16
    },
    "edition": "Artisan Handcrafted",
    "status": "active",
    "category": "cafe",
    "ageGroup": "All interiors",
    "themes": [
      "Tropical Fauna",
      "Rainforest Whimsy",
      "Avian Silhouette",
      "Playful Statement"
    ],
    "colorways": [
      "Mango Orange",
      "Canary Yellow",
      "Midnight Black",
      "Ivory Border"
    ],
    "imageGradient": [
      "#1E293B",
      "#0F172A"
    ],
    "imageUrl": "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.56.22%20AM.jpeg",
    "localImageUrl": "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.56.22%20AM.jpeg",
    "gallery": [
      "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.56.22%20AM.jpeg"
    ],
    "localGallery": [
      "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.56.22%20AM.jpeg"
    ],
    "rating": 5,
    "reviews": 22,
    "createdAt": "2026-10-17",
    "updatedAt": "2026-10-19",
    "freeShipping": true,
    "isPreorder": false,
    "preorderShipBy": null,
    "preorderDaysMin": null,
    "preorderDaysMax": null,
    "customFields": [],
    "seoTitle": "Sunlit Toucan Tropical Statement Rug · QADRI Rugs",
    "seoDescription": "Channeling the exuberant biodiversity of Amazonian canopies, this shaped toucan rug celebrates exotic avian beauty with radiant enthusiasm. The oversized beak g",
    "faq": null,
    "categoryType": "shop"
  },
  {
    "id": "p_rug_088",
    "slug": "arctic-embrace-penguin-duo-rug",
    "name": "Arctic Embrace Penguin Duo Rug",
    "tagline": "Tender Polar Bonds and Comforting Warmth",
    "story": "Capturing an affectionate embrace between a mother penguin and her chick, this silhouette rug embodies pure familial devotion and arctic tranquility. Clean monochromatic contours paired with gentle tangerine accents bring soothing Nordic warmth to bedtime routines. It enriches the room with a tender narrative of maternal protection.",
    "function": "High-density micro-tufted plush acrylic-wool blend offering an ultra-soft cloud-like handfeel (18mm cut pile). Supported by an eco-friendly non-slip latex backing, engineered specifically for luxury nursery interiors, family reading corners, and cozy children's bedrooms.",
    "pricePaise": 0,
    "compareAtPaise": 0,
    "printMinutes": 0,
    "weightGrams": 5500,
    "dimensionsMm": {
      "w": 1300,
      "h": 1500,
      "d": 18
    },
    "edition": "Artisan Handcrafted",
    "status": "active",
    "category": "cafe",
    "ageGroup": "All interiors",
    "themes": [
      "Arctic Wildlife",
      "Nursery Luxury",
      "Maternal Bond",
      "Scandi Minimalism"
    ],
    "colorways": [
      "Jet Black",
      "Snow White",
      "Tangerine Orange"
    ],
    "imageGradient": [
      "#1E293B",
      "#0F172A"
    ],
    "imageUrl": "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.56.23%20AM%20(1).jpeg",
    "localImageUrl": "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.56.23%20AM%20(1).jpeg",
    "gallery": [
      "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.56.23%20AM%20(1).jpeg"
    ],
    "localGallery": [
      "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.56.23%20AM%20(1).jpeg"
    ],
    "rating": 5,
    "reviews": 23,
    "createdAt": "2026-10-17",
    "updatedAt": "2026-10-19",
    "freeShipping": true,
    "isPreorder": false,
    "preorderShipBy": null,
    "preorderDaysMin": null,
    "preorderDaysMax": null,
    "customFields": [],
    "seoTitle": "Arctic Embrace Penguin Duo Rug · QADRI Rugs",
    "seoDescription": "Capturing an affectionate embrace between a mother penguin and her chick, this silhouette rug embodies pure familial devotion and arctic tranquility. Clean mono",
    "faq": null,
    "categoryType": "shop"
  },
  {
    "id": "p_rug_089",
    "slug": "gilded-blossom-sculptural-rose-rug",
    "name": "Gilded Blossom Sculptural Rose Rug",
    "tagline": "Timeless Botanical Grandeur in Sculpted Bloom",
    "story": "Inspired by neoclassical Parisian salons and regal estate conservatories, this monumental blooming rose rug unfurls in lavish concentric petals. Deeply hand-carved golden ochre recesses define each ivory velvet petal, achieving breathtaking architectural depth. It establishes an atmosphere of stately romance and timeless luxury.",
    "function": "Masterfully sculpted multi-level hand-tufted New Zealand virgin wool infused with lustrous bamboo silk, featuring dramatic high-low pile depths (16mm to 22mm). Backed with heavy woven cotton canvas, an aristocratic centerpiece for grand drawing rooms, master salons, bridal suites, and luxury villas.",
    "pricePaise": 0,
    "compareAtPaise": 0,
    "printMinutes": 0,
    "weightGrams": 9500,
    "dimensionsMm": {
      "w": 2000,
      "h": 2000,
      "d": 22
    },
    "edition": "Artisan Handcrafted",
    "status": "active",
    "category": "deskmate",
    "ageGroup": "All interiors",
    "themes": [
      "Botanical Grandeur",
      "Sculptural Floral",
      "Parisian Opulence",
      "Haute Living"
    ],
    "colorways": [
      "Alabaster Ivory",
      "Gilded Ochre",
      "Warm Pearl"
    ],
    "imageGradient": [
      "#1E293B",
      "#0F172A"
    ],
    "imageUrl": "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.56.23%20AM%20(2).jpeg",
    "localImageUrl": "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.56.23%20AM%20(2).jpeg",
    "gallery": [
      "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.56.23%20AM%20(2).jpeg"
    ],
    "localGallery": [
      "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.56.23%20AM%20(2).jpeg"
    ],
    "rating": 5,
    "reviews": 24,
    "createdAt": "2026-10-17",
    "updatedAt": "2026-10-19",
    "freeShipping": true,
    "isPreorder": false,
    "preorderShipBy": null,
    "preorderDaysMin": null,
    "preorderDaysMax": null,
    "customFields": [],
    "seoTitle": "Gilded Blossom Sculptural Rose Rug · QADRI Rugs",
    "seoDescription": "Inspired by neoclassical Parisian salons and regal estate conservatories, this monumental blooming rose rug unfurls in lavish concentric petals. Deeply hand-car",
    "faq": null,
    "categoryType": "shop"
  },
  {
    "id": "p_rug_090",
    "slug": "celestial-tiger-dreamscape-rug",
    "name": "Celestial Tiger Dreamscape Rug",
    "tagline": "Dreamlike Serenity and Vibrant Mythic Slumber",
    "story": "Depicting a serene white Bengal tiger slumbering atop a joyful bed of psychedelic clouds, morning sunbeams, and sparkling stars. This enchanting piece marries revered Asian wildlife folklore with 1970s pop art optimism. Its kaleidoscopic palette creates an atmosphere of peaceful wonder and imaginative luxury.",
    "function": "Multi-textured hand-tufted wool and high-resilience acrylic blend with delicate line carving around the tiger's whiskers, stripes, and cloud billows (16mm pile height). Completed with a heavy non-skid woven canvas backing, wonderful for eclectic luxury lounges, art nurseries, and creative living spaces.",
    "pricePaise": 0,
    "compareAtPaise": 0,
    "printMinutes": 0,
    "weightGrams": 6700,
    "dimensionsMm": {
      "w": 1800,
      "h": 1300,
      "d": 16
    },
    "edition": "Artisan Handcrafted",
    "status": "active",
    "category": "cafe",
    "ageGroup": "All interiors",
    "themes": [
      "Pop Art Myth",
      "Celestial Fauna",
      "Psychedelic Dreamscape",
      "Whimsical Statement"
    ],
    "colorways": [
      "Ivory White",
      "Cerulean Blue",
      "Marigold Yellow",
      "Sunset Orange",
      "Lavender Violet",
      "Rose Pink"
    ],
    "imageGradient": [
      "#1E293B",
      "#0F172A"
    ],
    "imageUrl": "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.56.23%20AM.jpeg",
    "localImageUrl": "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.56.23%20AM.jpeg",
    "gallery": [
      "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.56.23%20AM.jpeg"
    ],
    "localGallery": [
      "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.56.23%20AM.jpeg"
    ],
    "rating": 5,
    "reviews": 25,
    "createdAt": "2026-10-17",
    "updatedAt": "2026-10-19",
    "freeShipping": true,
    "isPreorder": false,
    "preorderShipBy": null,
    "preorderDaysMin": null,
    "preorderDaysMax": null,
    "customFields": [],
    "seoTitle": "Celestial Tiger Dreamscape Rug · QADRI Rugs",
    "seoDescription": "Depicting a serene white Bengal tiger slumbering atop a joyful bed of psychedelic clouds, morning sunbeams, and sparkling stars. This enchanting piece marries r",
    "faq": null,
    "categoryType": "shop"
  },
  {
    "id": "p_rug_091",
    "slug": "sweet-tapioca-boba-cup-rug",
    "name": "Sweet Tapioca Boba Statement Rug",
    "tagline": "Playful Cafe Culture and Sweet Tactile Indulgence",
    "story": "Celebrating the global tea lounge renaissance, this shaped silhouette rug transforms an iced bubble tea cup into delightful fiber art. A rosy dome lid, charming doodle stars, and rich milk tea cream meet dark brown tapioca pearls. It delivers an irresistible infusion of sweet personality to boutique cafes and creative chambers.",
    "function": "Bespoke hand-tufted acrylic and wool construction featuring raised 3D dimensional boba pearls (20mm pile) against a smooth 15mm cut pile cup body. Backed with reinforced non-slip organic latex, curated for artisanal boba lounges, chic pastry boutiques, walk-in vanity suites, and teen bedrooms.",
    "pricePaise": 0,
    "compareAtPaise": 0,
    "printMinutes": 0,
    "weightGrams": 5000,
    "dimensionsMm": {
      "w": 1200,
      "h": 1600,
      "d": 20
    },
    "edition": "Artisan Handcrafted",
    "status": "active",
    "category": "cafe",
    "ageGroup": "All interiors",
    "themes": [
      "Cafe Culture",
      "Boba Whimsy",
      "Sweet Delights",
      "Pastel Pop"
    ],
    "colorways": [
      "Bubblegum Pink",
      "Milk Tea Cream",
      "Tapioca Espresso Brown"
    ],
    "imageGradient": [
      "#1E293B",
      "#0F172A"
    ],
    "imageUrl": "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.56.24%20AM%20(1).jpeg",
    "localImageUrl": "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.56.24%20AM%20(1).jpeg",
    "gallery": [
      "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.56.24%20AM%20(1).jpeg"
    ],
    "localGallery": [
      "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.56.24%20AM%20(1).jpeg"
    ],
    "rating": 5,
    "reviews": 8,
    "createdAt": "2026-10-17",
    "updatedAt": "2026-10-19",
    "freeShipping": true,
    "isPreorder": false,
    "preorderShipBy": null,
    "preorderDaysMin": null,
    "preorderDaysMax": null,
    "customFields": [],
    "seoTitle": "Sweet Tapioca Boba Statement Rug · QADRI Rugs",
    "seoDescription": "Celebrating the global tea lounge renaissance, this shaped silhouette rug transforms an iced bubble tea cup into delightful fiber art. A rosy dome lid, charming",
    "faq": null,
    "categoryType": "shop"
  },
  {
    "id": "p_rug_092",
    "slug": "royal-bengal-white-tiger-rug",
    "name": "The Royal Bengal White Tiger Rug",
    "tagline": "Regal Wilderness Elegance Without Compromise",
    "story": "Reimagining storied Tibetan tiger rugs through an ethical, cruelty-free perspective, this grand pelt silhouette captures the imposing grace of the White Bengal tiger. Dense ivory wool is intricately carved with dramatic jet striations and outstretched paws with sculpted claws. It grounds high-ceilinged hearths with aristocratic presence and refined ferocity.",
    "function": "Master-crafted with ultra-dense New Zealand virgin wool, hand-sheared contour relief along every stripe (18mm cut pile), and reinforced double-ply cotton backing. Destined for grand salon hearths, executive libraries, cigar lounges, and luxury mountain chalets.",
    "pricePaise": 0,
    "compareAtPaise": 0,
    "printMinutes": 0,
    "weightGrams": 8900,
    "dimensionsMm": {
      "w": 1800,
      "h": 2400,
      "d": 18
    },
    "edition": "Artisan Handcrafted",
    "status": "active",
    "category": "deskmate",
    "ageGroup": "All interiors",
    "themes": [
      "Tibetan Tiger",
      "Cruelty-Free Fur",
      "Regal Safari",
      "Aristocratic Heritage"
    ],
    "colorways": [
      "Ivory White",
      "Sable Black",
      "Champagne Undertone"
    ],
    "imageGradient": [
      "#1E293B",
      "#0F172A"
    ],
    "imageUrl": "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.56.24%20AM%20(2).jpeg",
    "localImageUrl": "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.56.24%20AM%20(2).jpeg",
    "gallery": [
      "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.56.24%20AM%20(2).jpeg"
    ],
    "localGallery": [
      "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.56.24%20AM%20(2).jpeg"
    ],
    "rating": 5,
    "reviews": 9,
    "createdAt": "2026-10-17",
    "updatedAt": "2026-10-19",
    "freeShipping": true,
    "isPreorder": false,
    "preorderShipBy": null,
    "preorderDaysMin": null,
    "preorderDaysMax": null,
    "customFields": [],
    "seoTitle": "The Royal Bengal White Tiger Rug · QADRI Rugs",
    "seoDescription": "Reimagining storied Tibetan tiger rugs through an ethical, cruelty-free perspective, this grand pelt silhouette captures the imposing grace of the White Bengal ",
    "faq": null,
    "categoryType": "shop"
  },
  {
    "id": "p_rug_093",
    "slug": "azure-ocean-surge-medallion-rug",
    "name": "Azure Ocean Surge Medallion Rug",
    "tagline": "Untamed Marine Power in Circular Harmony",
    "story": "Capturing the timeless kinetic energy of legendary ukiyo-e ocean masterpieces, this circular medallion weaves towering wave crests with foaming white sea surf. Cascading shades of indigo, cobalt, and teal swirl around sandy ribbons in dynamic vortex motion. It infuses contemporary coastal interiors with the deep, untamed spirit of the sea.",
    "function": "Multi-height tufting featuring sculpted cut and loop pile (15mm to 20mm) executed in lustrous New Zealand wool and water-resistant bamboo silk. Backed by non-slip vulcanized cotton canvas, designed for seaside penthouses, executive master suites, and coastal architectural sanctuaries.",
    "pricePaise": 0,
    "compareAtPaise": 0,
    "printMinutes": 0,
    "weightGrams": 8400,
    "dimensionsMm": {
      "w": 1800,
      "h": 1800,
      "d": 20
    },
    "edition": "Artisan Handcrafted",
    "status": "active",
    "category": "deskmate",
    "ageGroup": "All interiors",
    "themes": [
      "Oceanic Wave",
      "Ukiyo-e Kinetic",
      "Coastal Luxury",
      "Circular Medallion"
    ],
    "colorways": [
      "Deep Indigo",
      "Cobalt Ocean",
      "Teal Aqua",
      "Seafoam White",
      "Sand Beige"
    ],
    "imageGradient": [
      "#1E293B",
      "#0F172A"
    ],
    "imageUrl": "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.56.24%20AM%20(3).jpeg",
    "localImageUrl": "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.56.24%20AM%20(3).jpeg",
    "gallery": [
      "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.56.24%20AM%20(3).jpeg"
    ],
    "localGallery": [
      "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.56.24%20AM%20(3).jpeg"
    ],
    "rating": 5,
    "reviews": 10,
    "createdAt": "2026-10-17",
    "updatedAt": "2026-10-19",
    "freeShipping": true,
    "isPreorder": false,
    "preorderShipBy": null,
    "preorderDaysMin": null,
    "preorderDaysMax": null,
    "customFields": [],
    "seoTitle": "Azure Ocean Surge Medallion Rug · QADRI Rugs",
    "seoDescription": "Capturing the timeless kinetic energy of legendary ukiyo-e ocean masterpieces, this circular medallion weaves towering wave crests with foaming white sea surf. ",
    "faq": null,
    "categoryType": "shop"
  },
  {
    "id": "p_rug_094",
    "slug": "liquid-splatter-dual-tone-rug",
    "name": "Liquid Splatter Dual-Tone Rug",
    "tagline": "Fluid Pop Art Spilled Across Modern Spaces",
    "story": "Freezing spontaneous fluid motion in time, this avant-garde splash rug layers a crisp alabaster milk splatter over an expansive cerulean puddle. Organic fluid droplets disperse around the perimeter, transforming ordinary flooring into an active modern art installation. The piece radiates kinetic vitality and graphic minimalism.",
    "function": "Precision hand-tufted contour pile with beveled edge relief delineating the dual liquid layers (18mm pile height). Anchored by heavy organic latex non-skid backing, tailor-made for modern art galleries, creative agency lobbies, and high-fashion commercial showrooms.",
    "pricePaise": 0,
    "compareAtPaise": 0,
    "printMinutes": 0,
    "weightGrams": 7800,
    "dimensionsMm": {
      "w": 2000,
      "h": 1700,
      "d": 18
    },
    "edition": "Artisan Handcrafted",
    "status": "active",
    "category": "keychains",
    "ageGroup": "All interiors",
    "themes": [
      "Fluid Motion",
      "Pop Surrealism",
      "Liquid Silhouette",
      "Modern Gallery"
    ],
    "colorways": [
      "Cerulean Blue",
      "Pure Milk White"
    ],
    "imageGradient": [
      "#1E293B",
      "#0F172A"
    ],
    "imageUrl": "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.56.24%20AM.jpeg",
    "localImageUrl": "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.56.24%20AM.jpeg",
    "gallery": [
      "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.56.24%20AM.jpeg"
    ],
    "localGallery": [
      "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.56.24%20AM.jpeg"
    ],
    "rating": 5,
    "reviews": 11,
    "createdAt": "2026-10-17",
    "updatedAt": "2026-10-19",
    "freeShipping": true,
    "isPreorder": false,
    "preorderShipBy": null,
    "preorderDaysMin": null,
    "preorderDaysMax": null,
    "customFields": [],
    "seoTitle": "Liquid Splatter Dual-Tone Rug · QADRI Rugs",
    "seoDescription": "Freezing spontaneous fluid motion in time, this avant-garde splash rug layers a crisp alabaster milk splatter over an expansive cerulean puddle. Organic fluid d",
    "faq": null,
    "categoryType": "shop"
  },
  {
    "id": "p_rug_095",
    "slug": "ember-snow-fox-embrace-rug",
    "name": "Ember & Snow Fox Embrace Medallion Rug",
    "tagline": "Tender Woodland Slumber in Golden Warmth",
    "story": "Illustrating the quiet tenderness of maternal devotion, this circular medallion portrays a terracotta red fox sheltering her sleeping white cub within her bushy tail. The harmonious circle of warmth, soft white snow accents, and peaceful expressions bring restorative serenity to domestic spaces. It honors woodland wildlife with intimate gentleness.",
    "function": "High-definition hand-tufted virgin wool with sculpted high-low contour carving around the sleeping eyes and bushy tail layers (16mm pile height). Finished with heavy anti-slip cotton backing, ideal for warm Nordic nurseries, cozy woodland bedrooms, and fireside reading havens.",
    "pricePaise": 0,
    "compareAtPaise": 0,
    "printMinutes": 0,
    "weightGrams": 6800,
    "dimensionsMm": {
      "w": 1600,
      "h": 1600,
      "d": 16
    },
    "edition": "Artisan Handcrafted",
    "status": "active",
    "category": "deskmate",
    "ageGroup": "All interiors",
    "themes": [
      "Woodland Fauna",
      "Maternal Tenderness",
      "Nordic Cozy",
      "Circular Medallion"
    ],
    "colorways": [
      "Burnt Terracotta",
      "Frost White",
      "Earthy Chestnut"
    ],
    "imageGradient": [
      "#1E293B",
      "#0F172A"
    ],
    "imageUrl": "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.56.25%20AM%20(1).jpeg",
    "localImageUrl": "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.56.25%20AM%20(1).jpeg",
    "gallery": [
      "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.56.25%20AM%20(1).jpeg"
    ],
    "localGallery": [
      "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.56.25%20AM%20(1).jpeg"
    ],
    "rating": 5,
    "reviews": 12,
    "createdAt": "2026-10-17",
    "updatedAt": "2026-10-19",
    "freeShipping": true,
    "isPreorder": false,
    "preorderShipBy": null,
    "preorderDaysMin": null,
    "preorderDaysMax": null,
    "customFields": [],
    "seoTitle": "Ember & Snow Fox Embrace Medallion Rug · QADRI Rugs",
    "seoDescription": "Illustrating the quiet tenderness of maternal devotion, this circular medallion portrays a terracotta red fox sheltering her sleeping white cub within her bushy",
    "faq": null,
    "categoryType": "shop"
  },
  {
    "id": "p_rug_096",
    "slug": "blush-arabesque-flora-area-rug",
    "name": "Blush Arabesque Flora Area Rug",
    "tagline": "Art Nouveau Romance and Dynamic Floral Cadence",
    "story": "Drawing inspiration from Belle Époque decorative ironwork and botanical curves, this rectangular area rug interlaces undulating ebony tendrils with blooming blush blossoms. Rhythmic swirls and warm champagne accents imbue living areas with vintage glamour and lyrical elegance. It transforms floors into an opulent garden tapestry.",
    "function": "Hand-tufted using fine New Zealand wool and luster-washed bamboo silk, featuring a 16mm dense cut pile with hand-embossed floral outlines. Backed with a non-slip dual-layer canvas backing, exceptional for grand boudoirs, French-inspired salons, boutique hotel suites, and executive dining rooms.",
    "pricePaise": 0,
    "compareAtPaise": 0,
    "printMinutes": 0,
    "weightGrams": 8600,
    "dimensionsMm": {
      "w": 1600,
      "h": 2300,
      "d": 16
    },
    "edition": "Artisan Handcrafted",
    "status": "active",
    "category": "deskmate",
    "ageGroup": "All interiors",
    "themes": [
      "Art Nouveau",
      "Botanical Arabesque",
      "Floral Elegance",
      "Belle Époque"
    ],
    "colorways": [
      "Blush Pink",
      "Ebony Black",
      "Champagne Gold",
      "Ivory Cream"
    ],
    "imageGradient": [
      "#1E293B",
      "#0F172A"
    ],
    "imageUrl": "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.56.25%20AM%20(2).jpeg",
    "localImageUrl": "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.56.25%20AM%20(2).jpeg",
    "gallery": [
      "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.56.25%20AM%20(2).jpeg"
    ],
    "localGallery": [
      "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.56.25%20AM%20(2).jpeg"
    ],
    "rating": 5,
    "reviews": 13,
    "createdAt": "2026-10-17",
    "updatedAt": "2026-10-19",
    "freeShipping": true,
    "isPreorder": false,
    "preorderShipBy": null,
    "preorderDaysMin": null,
    "preorderDaysMax": null,
    "customFields": [],
    "seoTitle": "Blush Arabesque Flora Area Rug · QADRI Rugs",
    "seoDescription": "Drawing inspiration from Belle Époque decorative ironwork and botanical curves, this rectangular area rug interlaces undulating ebony tendrils with blooming blu",
    "faq": null,
    "categoryType": "shop"
  },
  {
    "id": "p_rug_097",
    "slug": "resting-companion-pop-art-rug",
    "name": "The Resting Companion Art Rug",
    "tagline": "Subversive Street Art and Cozy Creative Haven",
    "story": "Captured in a relaxed prone stance with iconic cross-bone ears and gloved hands cradling its head, this pastel pink statement rug redefines contemporary collector culture. Its irreverent pop silhouette provides the ultimate foundation for high-energy creative studios and luxury gaming suites. It merges street-smart irreverence with plush comfort.",
    "function": "Precision hand-tufted with dense ultra-soft acrylic yarn, carved relief along the cross-bone ears and hand knuckles (18mm cut pile). Supported by reinforced non-slip backing, tailored for creative media rooms, streamer lounges, gaming sanctuaries, and street art collections.",
    "pricePaise": 0,
    "compareAtPaise": 0,
    "printMinutes": 0,
    "weightGrams": 5200,
    "dimensionsMm": {
      "w": 1500,
      "h": 1100,
      "d": 18
    },
    "edition": "Artisan Handcrafted",
    "status": "active",
    "category": "cafe",
    "ageGroup": "All interiors",
    "themes": [
      "Urban Pop Art",
      "Gamer Haven",
      "Hypebeast Culture",
      "Collector Art"
    ],
    "colorways": [
      "Blush Pink",
      "Dusty Rose",
      "Bone White",
      "Matte Black"
    ],
    "imageGradient": [
      "#1E293B",
      "#0F172A"
    ],
    "imageUrl": "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.56.25%20AM.jpeg",
    "localImageUrl": "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.56.25%20AM.jpeg",
    "gallery": [
      "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.56.25%20AM.jpeg"
    ],
    "localGallery": [
      "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.56.25%20AM.jpeg"
    ],
    "rating": 5,
    "reviews": 14,
    "createdAt": "2026-10-17",
    "updatedAt": "2026-10-19",
    "freeShipping": true,
    "isPreorder": false,
    "preorderShipBy": null,
    "preorderDaysMin": null,
    "preorderDaysMax": null,
    "customFields": [],
    "seoTitle": "The Resting Companion Art Rug · QADRI Rugs",
    "seoDescription": "Captured in a relaxed prone stance with iconic cross-bone ears and gloved hands cradling its head, this pastel pink statement rug redefines contemporary collect",
    "faq": null,
    "categoryType": "shop"
  },
  {
    "id": "p_rug_098",
    "slug": "regent-cockatoo-statement-rug",
    "name": "The Regent Cockatoo Statement Rug",
    "tagline": "Exotic Avian Charm with Sun-Dappled Crest",
    "story": "Celebrating the captivating beauty of Australia's Major Mitchell cockatoo, this shaped silhouette rug flaunts an expressive crest of sunset coral and citron yellow plumes. Soft feathered texturing and gentle pink cheek blushing lend whimsical warmth and exotic personality to sophisticated spaces. It brings the cheerful spirit of native woodlands indoors.",
    "function": "Custom hand-tufted high-density wool blend with carved relief defining individual crest plumes and scalloped wing feathers (18mm plush pile). Backed by heavy-duty anti-slip canvas, ideal for sunlit garden rooms, luxury nurseries, creative salons, and eclectic collector foyers.",
    "pricePaise": 0,
    "compareAtPaise": 0,
    "printMinutes": 0,
    "weightGrams": 5600,
    "dimensionsMm": {
      "w": 1100,
      "h": 1700,
      "d": 18
    },
    "edition": "Artisan Handcrafted",
    "status": "active",
    "category": "cafe",
    "ageGroup": "All interiors",
    "themes": [
      "Exotic Avian",
      "Australian Fauna",
      "Botanical Whimsy",
      "Sculptural Silhouette"
    ],
    "colorways": [
      "Feather White",
      "Coral Pink",
      "Citron Yellow",
      "Slate Grey"
    ],
    "imageGradient": [
      "#1E293B",
      "#0F172A"
    ],
    "imageUrl": "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.56.26%20AM.jpeg",
    "localImageUrl": "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.56.26%20AM.jpeg",
    "gallery": [
      "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.56.26%20AM.jpeg"
    ],
    "localGallery": [
      "/rugsproductimage/WhatsApp%20Image%202026-10-17%20at%2010.56.26%20AM.jpeg"
    ],
    "rating": 5,
    "reviews": 15,
    "createdAt": "2026-10-17",
    "updatedAt": "2026-10-19",
    "freeShipping": true,
    "isPreorder": false,
    "preorderShipBy": null,
    "preorderDaysMin": null,
    "preorderDaysMax": null,
    "customFields": [],
    "seoTitle": "The Regent Cockatoo Statement Rug · QADRI Rugs",
    "seoDescription": "Celebrating the captivating beauty of Australia's Major Mitchell cockatoo, this shaped silhouette rug flaunts an expressive crest of sunset coral and citron yel",
    "faq": null,
    "categoryType": "shop"
  }
];

export const FRAMES = PRODUCTS.filter(p => p.categoryType === 'frames');
export const COLLECTIBLES = PRODUCTS.filter(p => p.categoryType === 'shop');

export function getProductBySlug(slug: string): Product | undefined {
  return PRODUCTS.find(p => p.slug === slug);
}
