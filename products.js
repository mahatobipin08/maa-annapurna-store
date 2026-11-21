const STORE_CONFIG = {
  whatsappNumber: "917478145664",
  storeName: "Maa Annapurna Kirana & General Store",
  locationSubtitle: "Ward 9, Ramnagar Bankat • +91 7478145664"
};

// ADD, EDIT, OR REMOVE PRODUCTS, SIZES, CATEGORIES, AND PRICES HERE
const PRODUCTS = [
  // --- PACKED STAPLES ---
  {
    name: "Sona Masoori Rice",
    category: "Packed Staples",
    image: "images/sona-rice.jpg",
    variants: [
      { size: "1 kg", price: 65 },
      { size: "5 kg", price: 310 },
      { size: "25 kg Bag", price: 1450 }
    ]
  },
  {
    name: "Arhar / Toor Dal",
    category: "Packed Staples",
    image: "images/toor-dal.jpg",
    variants: [
      { size: "500 g", price: 85 },
      { size: "1 kg", price: 165 },
      { size: "5 kg", price: 800 }
    ]
  },

  // --- OIL & GHEE ---
  {
    name: "Mustard Oil (Kachi Ghani)",
    category: "Oil & Ghee",
    image: "images/mustard-oil.jpg",
    variants: [
      { size: "500 ml", price: 80 },
      { size: "1 L", price: 155 },
      { size: "5 L Jar", price: 750 }
    ]
  },

  // --- LOOSE ITEMS (Two-Way Grams <-> ₹ Calculator) ---
  {
    name: "Sooji / Rava (Loose)",
    category: "Loose Items",
    loose: true,
    pricePerKg: 50,
    image: "images/sooji.jpg"
  },
  {
    name: "Maida (Loose)",
    category: "Loose Items",
    loose: true,
    pricePerKg: 42,
    image: "images/maida.jpg"
  },

  // --- PACKAGED FOODS ---
  {
    name: "Parle-G / Glucose Biscuit",
    category: "Packaged Foods",
    image: "images/biscuit.jpg",
    variants: [
      { size: "Small Pack", price: 10 },
      { size: "Family Pack (250 g)", price: 30 },
      { size: "Mega Pack (800 g)", price: 85 }
    ]
  },
  {
    name: '<span class="notranslate" translate="no">2 in 1</span>',
    category: "Packaged Foods",
    image: "images/2in1.jpeg",
    variants: [
      { size: "Small Pack", price: 10 }
    ]
  },
  {
    name: "Cream / Marie Biscuit",
    category: "Packaged Foods",
    image: "images/cream-biscuit.jpg",
    variants: [
      { size: "Single Pack", price: 10 },
      { size: "Medium Pack", price: 35 },
      { size: "Family Pack", price: 60 }
    ]
  },

  // --- HOME & PERSONAL CARE ---
  {
    name: "Toothpaste (Colgate / Pepsodent)",
    category: "Home & Personal Care",
    image: "images/toothpaste.jpg",
    variants: [
      { size: "50 g", price: 30 },
      { size: "100 g", price: 62 },
      { size: "200 g Saver", price: 115 }
    ]
  },
  {
    name: "Bath Soap (Lux / Lifebuoy / Dettol)",
    category: "Home & Personal Care",
    image: "images/bath-soap.jpg",
    variants: [
      { size: "1 Piece (100 g)", price: 36 },
      { size: "Value Pack (4 × 100 g)", price: 135 }
    ]
  },
  {
    name: "Detergent Powder (Surf / Ghadi / Tide)",
    category: "Home & Personal Care",
    image: "images/detergent.jpg",
    variants: [
      { size: "500 g", price: 45 },
      { size: "1 kg", price: 88 },
      { size: "4 kg Bucket/Bag", price: 340 }
    ]
  }
];

