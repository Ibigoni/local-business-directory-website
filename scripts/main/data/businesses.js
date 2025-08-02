//An array of objects that stores the data of each business
export const businesses = [
  {
    id: "2a50bc06-45e1-4b1b-ba8f-73ccf0721125",
    name: "Computer Greeks",
    category: "Tech",
    description: {
      brief: "Your favorite tech in town. Get your devices fixed for a low price.",
      detail: "Computer Greeks has been proudly serving the community since 1996, with a mission to provide reliable, affordable, and high-quality tech services for everyone — from first-time users to experienced professionals. With over 28 years of experience, we’ve built a reputation for delivering personalized support, honest advice, and dependable repairs at competitive prices. Our team is passionate about technology and dedicated to continuous improvement, always striving to make Computer Greeks even better tomorrow than it is today. Whether you need your device fixed, are looking for quality tech products, or simply want trustworthy guidance, Computer Greeks remains your favorite local destination for all things tech."
    },
    hours: {
      monday: "10:00 AM - 6:00 PM",
      tuesday: "10:00 AM - 6:00 PM",
      wednesday: "10:00 AM - 6:00 PM",
      thursday: "10:00 AM - 6:00 PM",
      friday: "10:00 AM - 6:00 PM",
      saturday: "10:00 AM - 6:00 PM",
      sunday: "closed"
    },
    contact: {
      phone : "708-636-3473",
      email: "info@computergreeks.com",
      address: "12222 S Harlem Ave, Palos Heights, IL"
    },
    image: {
      logo: "images/business-listings/computer-greeks.png",
      moreImages : [
        "images/business-detail-images/computer-greeks/computer-greeks1.webp",
        "images/business-detail-images/computer-greeks/computer-greeks2.webp",
        "images/business-detail-images/computer-greeks/computer-greeks3.webp"
      ],
      rating: {
        one: 4.7,
        two: 4.1,
        three: 4.5
      }
    },
    rating: 4.5,
    comments: {
      "Tara Ross": {
        rating: "⭐⭐⭐⭐",
        text: "Toby is excellent. So knowledgeable and passionate about his work. Highly recommend! Shop local!"
      },
      "Jacob Brown": {
        rating: "⭐⭐⭐⭐⭐",
        text: "The people here are very nice. They even fixed up my pc in two businesses days. Very fast and great customer service. Thanks for fixing my pc. Highly recommend going here for any PC issues."
      },
      "Basil Toures": {
        rating: "⭐⭐⭐⭐⭐",
        text: "They were able to extract the data out of my broken desktop and I also purchased a new mini desktop from them . Great personal service. I highly recommend them."
      }  
    }   
  },
  {
    id: "a52d1662-5787-4973-bcc9-5f0a45206cb0",
    name: "K&G Fashion Superstore",
    category: "Clothing",
    description: {
      brief: "Best, affordable clothing in your local area.",
      detail: "K&G Fashion Superstore is your trusted destination for stylish, affordable clothing right in your neighborhood. Known for combining quality with unbeatable value, we offer a wide selection of fashion for men, women, and children — all at prices that make it easy to look your best without breaking the bank. Whether you're shopping for business attire, casual wear, or a standout outfit for a special occasion, K&G delivers the latest trends and timeless classics in one convenient place. Our commitment to affordability, variety, and customer satisfaction has made us a go-to fashion hub for the local community."
    },
    hours: {
      monday: "10:00 AM - 9:00 PM",
      tuesday: "10:00 AM - 9:00 PM",
      wednesday: "10:00 AM - 9:00 PM",
      thursday: "10:00 AM - 9:00 PM",
      friday: "10:00 AM - 9:00 PM",
      saturday: "10:00 AM - 9:00 PM",
      sunday: "11:00 AM - 7:00 PM"
    },
    contact: {
      phone : "708-418-5707",
      email: "customerservice@kgstores.com",
      address: "17149 Torrence Ave, Lansing, IL"
    },
    image: {
      logo: "images/business-listings/k-g-logo-png-transparent.png",
      moreImages : [
        "images/business-detail-images/k&G-fashion/k-g-store1.webp",
        "images/business-detail-images/k&G-fashion/k-g-store3.webp",
        "images/business-detail-images/k&G-fashion/k-g-store4.webp"
      ],
      rating: {
        one: 4.6,
        two: 4.0,
        three: 4.3
      }
    },
    rating: 4.0,
    comments: {
      "Juanita Buie": {
        rating: "⭐⭐⭐⭐⭐",
        text: "I absolutely love K&G for our family casual & dressy fashion needs! I just purchased these shoes for my son! Very Nice!"
      },
      "Ro mell": {
        rating: "⭐⭐⭐⭐",
        text: "This place has a really good selection of men's suits. Make sure you try on before you buy. Suits are made to look and feel good on you."
      },
      "Edward Lewis": {
        rating: "⭐⭐⭐⭐⭐",
        text: "K&G has all the fashion for men. No matter your size. I love their suits, hats, and very stylish shoes."
      }  
    }   
  },
  {
    id: "62c0ca28-98bf-4ea3-8e58-74327a63b198",
    name: "Just Be Coffee Roasters",
    category: "Food",
    description: {
      brief : "Best coffee in town. Locally roasted and ethically sourced.",
      detail : "Just Be Coffee Roasters is a specialty coffee roastery based in Munster, Indiana, committed to community, sustainability, and high-quality coffee. They source 100% Arabica, specialty grade beans from around the world including Brazil, Kenya, Colombia, and Honduras and roast them locally. Their offerings include unique single-origin coffees and signature blends, available for retail and wholesale partners. With a focus on ethical sourcing and a zero waste refill and reuse program, Just Be Coffee Roasters aims to make a positive environmental and community impact one cup at a time."
    },  
    hours: {
      monday: "7:00 AM - 3:00 PM",
      tuesday: "7:00 AM - 3:00 PM",
      wednesday: "7:00 AM - 3:00 PM",
      thursday: "7:00 AM - 3:00 PM",
      friday: "7:00 AM - 3:00 PM",
      saturday: "8:00 AM - 12:00 PM",
      sunday: "8:00 AM - 12:00 PM"
    },
    contact: {
      phone : "219-789-8354",
      email: "sales@justbe.coffee",
      address: "400 Fisher St unit e, Munster, IN"
    },
    image: {
      logo: "images/business-listings/just-be-coffe-roasters.png",
      moreImages : [
        "images/business-detail-images/just-be-coffee/just-be-coffe.jpg",
        "images/business-detail-images/just-be-coffee/just-be-coffee-2.jpg",
        "images/business-detail-images/just-be-coffee/just-be-coffee-3.webp"
      ],
      rating: {
        one: 4.3,
        two: 4.2,
        three: 4.4
      }
    },
    rating: 4.9,
    comments: {
      "Carina Crisan": {
        rating: "⭐⭐⭐⭐⭐",
        text: "This has become my favorite coffee shop in the area. I have no good reason to choose a coffee selling chain on Calumet over this. The service is relatively quick, the baristas/owners are always very nice, and the coffee is great quality fosr a great price."
      },
      "Jeffrey Blueblaze Yoga": {
        rating: "⭐⭐⭐",
        text: "If you are riding the Penske bike trail this is a very good place to stop for coffee. The atmosphere is funky and friendly. They roast their own coffee here."
      },
      "Adam White": {
        rating: "⭐⭐⭐⭐⭐",
        text: "I love having a local coffee shop to visit. The staff members are patient, courteous, and attentive.They have a well stocked storefront and a good area of chairs and seating."
      }  
    }    
  },
  {
  id: "1fbdcb6b-728a-4a88-8a1d-4e10bc53fcb0",
  name: "NextGen Tech Repair",
  category: "Tech",
  description: {
    brief: "Fast and affordable tech repair for all your devices.",
    detail: "NextGen Tech Repair is your neighborhood solution for quick, reliable, and affordable tech services. Specializing in phone, tablet, and computer repair, our certified technicians are equipped with the tools and knowledge to get your devices back in top shape. We pride ourselves on transparency, offering clear pricing, free diagnostics, and same-day service for most repairs. Our customer-first philosophy ensures you leave with not just a fixed device, but peace of mind."
  },
  hours: {
    monday: "9:00 AM - 6:00 PM",
    tuesday: "9:00 AM - 6:00 PM",
    wednesday: "9:00 AM - 6:00 PM",
    thursday: "9:00 AM - 6:00 PM",
    friday: "9:00 AM - 6:00 PM",
    saturday: "10:00 AM - 4:00 PM",
    sunday: "closed"
  },
  contact: {
    phone: "219-555-0456",
    email: "support@nextgentech.com",
    address: "9020 Indianapolis Blvd, Highland, IN"
  },
  image: {
    logo: "images/business-listings/nextgen-tech-repair.webp",
    moreImages : [
      "images/business-detail-images/nextgen-tech-repai/nextgen-tech-repair1.webp",
      "images/business-detail-images/nextgen-tech-repai/nextgen-tech-repair2.webp",
      "images/business-detail-images/nextgen-tech-repai/nextgen-texh-repair3.webp"
    ],
    rating: {
      one: 4.2,
      two: 4.8,
      three: 4.9 
    }
  },
  rating: 4.8,
  comments: {
    "Rachel N.": {
      rating: "⭐⭐⭐⭐⭐",
      text: "Cracked my iPhone screen and they had it fixed in 30 minutes. Fair pricing too!"
    },
    "Darnell M.": {
      rating: "⭐⭐⭐⭐⭐",
      text: "Great customer service. They even helped me set up my laptop after fixing it."
    },
    "Linda V.": {
      rating: "⭐⭐⭐⭐",
      text: "Quick turnaround, honest workers. Will come back if I need more help."
    }
    }
  },
  {
    id: "ac234be3-315c-4ab2-b1d2-2a35a3fd02fc",
    name: "Tandoori House Indian Cuisine",
    category: "Food",
    description: {
      brief: "Authentic Indian cuisine with a modern twist.",
      detail: "Tandoori Twist offers a vibrant dining experience where tradition meets innovation. From buttery naan to sizzling tandoori chicken, every dish is prepared using fresh ingredients and a blend of bold Indian spices. Our chefs craft a rotating menu of regional specials and modern fusion items that delight both purists and adventurous eaters alike. Vegetarian, vegan, and gluten-free options are available to ensure every guest feels at home."
    },
    hours: {
      monday: "Closed",
      tuesday: "11:30 AM - 3:00 PM, 5:00 PM - 9:00 PM",
      wednesday: "11:30 AM - 3:00 PM, 5:00 PM - 9:00 PM",
      thursday: "11:30 AM - 3:00 PM, 5:00 PM - 9:00 PM",
      friday: "11:30 AM - 3:00 PM, 5:00 PM - 9:00 PM",
      saturday: "11:30 AM - 3:00 PM, 5:00 PM - 9:00 PM",
      sunday: "11:30 AM - 3:00 PM, 5:00 PM - 9:00 PM"
    },
    contact: {
      phone: "(708) 620-8720",
      email: "info@tandoorihouserestaurant.com",
      address: "7982 167th St, Tinley Park, IL"
    },
    image: {
      logo: "images/business-listings/tandoori-house-indian-cuisine.webp",
      moreImages : [
        "images/business-detail-images/tandoori-house-indian-cuisine/tandoori-house1.webp",
        "images/business-detail-images/tandoori-house-indian-cuisine/tandoori-house2.webp",
        "images/business-detail-images/tandoori-house-indian-cuisine/tandoori-house3.webp"
      ],
      rating: {
        one: 4.9,
        two: 4.5,
        three: 4.7
      }
    },
    rating: 4.6,
    comments: {
      "Anita P.": {
        rating: "⭐⭐⭐⭐⭐",
        text: "The butter chicken and garlic naan are to die for!"
      },
      "George K.": {
        rating: "⭐⭐⭐⭐",
        text: "Good portions and quick service. Solid spot for lunch."
      },
      "Sahana R.": {
        rating: "⭐⭐⭐⭐⭐",
        text: "Great chicken biryani, tandoori fish and chicken makhni, yummy flavorful food"
      }
    }
  },
  {
    id: "f0b7b1fa-cbcf-4f58-b7cb-d8a221e813c1",
    name: "Urban Threadz",
    category: "Clothing",
    description: {
      brief: "Trendy urban fashion for all ages.",
      detail: "Urban Threadz is the local hub for streetwear and urban fashion, catering to both the fashion-forward and everyday trendsetters. Our inventory features carefully curated pieces from emerging designers, classic staples, and exclusive drops you won’t find in big-box stores. Whether you're dressing up for a night out or keeping it casual with flair, Urban Threadz offers style, comfort, and confidence in every thread."
    },
    hours: {
      monday: "10:00 AM - 8:00 PM",
      tuesday: "10:00 AM - 8:00 PM",
      wednesday: "10:00 AM - 8:00 PM",
      thursday: "10:00 AM - 8:00 PM",
      friday: "10:00 AM - 9:00 PM",
      saturday: "10:00 AM - 9:00 PM",
      sunday: "11:00 AM - 6:00 PM"
    },
    contact: {
      phone: "708-555-7777",
      email: "contact@urbanthreadz.com",
      address: "2333 Sibley Blvd, Dolton, IL"
    },
    image: {
      logo: "images/business-listings/urban-threadz.webp",
      moreImages : [
        "images/business-detail-images/urban-threadz/urban-threadz1.webp",
        "images/business-detail-images/urban-threadz/urban-threadz2.webp",
        "images/business-detail-images/urban-threadz/urban-threadz3.webp"
      ],
      rating: {
        one: 4.0,
        two: 4.1,
        three: 4.5
      }
    },
    rating: 4.4,
    comments: {
      "Devin L.": {
        rating: "⭐⭐⭐⭐⭐",
        text: "This place has heat! Found some limited Nike and Jordan gear here."
      },
      "Lexi G.": {
        rating: "⭐⭐⭐⭐",
        text: "Love their vibe and selection. Prices are fair too."
      },
      "Marcus B.": {
        rating: "⭐⭐⭐⭐⭐",
        text: "Friendly staff, great brands, and a chill atmosphere. I'll be back!"
      }
    }
  },
  {
    id: "cb7aa394-1f01-4ab0-84bb-4c6bde19870e",
    name: "BitFix Solutions",
    category: "Tech",
    description: {
      brief: "Your local solution for computer and mobile device repair.",
      detail: "BitFix Solutions is dedicated to providing high-quality, budget-friendly repair services for laptops, smartphones, and other digital devices. Our team of skilled technicians takes pride in quick diagnostics, precise fixes, and transparent communication. We offer both walk-in service and scheduled appointments, ensuring flexible support for home users, students, and small businesses alike."
    },
    hours: {
      monday: "10:00 AM - 6:00 PM",
      tuesday: "10:00 AM - 6:00 PM",
      wednesday: "10:00 AM - 6:00 PM",
      thursday: "10:00 AM - 6:00 PM",
      friday: "10:00 AM - 6:00 PM",
      saturday: "11:00 AM - 4:00 PM",
      sunday: "closed"
    },
    contact: {
      phone: "219-440-8855",
      email: "service@bitfixsolutions.com",
      address: "7813 Kennedy Ave, Hammond, IN"
    },
    image: {
      logo: "images/business-listings/bitfix-solutions.webp",
      moreImages : [
        "images/business-detail-images/byte-me-tech-lounge/byte-me-tech1.jpg",
        "images/business-detail-images/byte-me-tech-lounge/byte-me-tech2.jpg",
        "images/business-detail-images/byte-me-tech-lounge/byte-me-tech3.jpg"
      ],
      rating: {
        one: 5.0,
        two: 4.8,
        three: 4.8
      }
    },
    rating: 4.7,
    comments: {
      "Emily Tran": {
        rating: "⭐⭐⭐⭐⭐",
        text: "My laptop was dead — they brought it back to life and saved my semester!"
      },
      "Andre Vega": {
        rating: "⭐⭐⭐⭐",
        text: "Quick and affordable. Parking was a little tricky, but the service made up for it."
      },
      "Jasmine K.": {
        rating: "⭐⭐⭐⭐⭐",
        text: "They were very honest about my options. Didn’t try to upsell. Respect!"
      }
    }
  },
  {
    id: "b4f93f99-45a1-4b27-a9c0-f01ed45b7ec7",
    name: "The Snack Stop",
    category: "Food",
    description: {
      brief: "Grab-and-go snacks and drinks for everyone.",
      detail: "The Snack Stop is your go-to neighborhood pitstop for tasty bites, fresh smoothies, and energizing snacks. Whether you're looking for something healthy or a guilty pleasure, we’ve got you covered with a diverse selection including wraps, acai bowls, pastries, protein bars, and more. With a cozy interior and friendly staff, it’s a perfect place to chill or fuel up on the go."
    },
    hours: {
      monday: "8:00 AM - 6:00 PM",
      tuesday: "8:00 AM - 6:00 PM",
      wednesday: "8:00 AM - 6:00 PM",
      thursday: "8:00 AM - 6:00 PM",
      friday: "8:00 AM - 6:00 PM",
      saturday: "9:00 AM - 4:00 PM",
      sunday: "closed"
    },
    contact: {
      phone: "708-985-1023",
      email: "orders@snackstop.com",
      address: "5201 Hohman Ave, Hammond, IN"
    },
    image: {
      logo: "images/business-listings/the-snack-stop.webp",
      moreImages : [
        "images/business-detail-images/the-snack-stop/the-snack-stop1.webp",
        "images/business-detail-images/the-snack-stop/the-snack-stop2.webp",
        "images/business-detail-images/the-snack-stop/the-snack-stop3.webp"
      ],
      rating: {
        one: 4.5,
        two: 4.7,
        three: 4.9
      }
    },
    rating: 4.6,
    comments: {
      "Tyler M.": {
        rating: "⭐⭐⭐⭐",
        text: "Their wraps are great and the staff is super friendly. Would return."
      },
      "Chelsea N.": {
        rating: "⭐⭐⭐⭐⭐",
        text: "Healthy options at fair prices. I love their peanut butter banana smoothie!"
      },
      "Luis A.": {
        rating: "⭐⭐⭐⭐⭐",
        text: "I stop here before work every morning. Quick, fresh, and affordable."
      }
    }
  },
  {
    id: "de55b3e4-2eeb-4d97-a45e-5c8786f3600f",
    name: "Couture Vault",
    category: "Clothing",
    description: {
      brief: "Designer fashion at consignment prices.",
      detail: "Couture Vault is a hidden gem for fashion lovers seeking high-end clothing at affordable prices. We specialize in gently used and new designer items for men and women, carefully curated to offer both quality and value. With new arrivals weekly, you'll always find something stylish, unique, and affordable. Our mission is to make luxury fashion accessible to the local community without compromising on class or authenticity."
    },
    hours: {
      monday: "11:00 AM - 6:00 PM",
      tuesday: "11:00 AM - 6:00 PM",
      wednesday: "11:00 AM - 6:00 PM",
      thursday: "11:00 AM - 6:00 PM",
      friday: "11:00 AM - 7:00 PM",
      saturday: "10:00 AM - 7:00 PM",
      sunday: "12:00 PM - 5:00 PM"
    },
    contact: {
      phone: "312-555-4499",
      email: "info@couturevault.com",
      address: "213 W 162nd St, South Holland, IL"
    },
    image: {
      logo: "images/business-listings/couture-vault.jpg",
      moreImages : [
        "images/business-detail-images/couture vault/couture-valut2.webp",
        "images/business-detail-images/couture vault/couture-vault1.webp",
        "images/business-detail-images/couture vault/couture-vault3.webp"
      ],
      rating: {
        one: 4.8,
        two: 4.3,
        three: 4.6 
      }
    },
    rating: 4.9,
    comments: {
      "Maya E.": {
        rating: "⭐⭐⭐⭐⭐",
        text: "Found a Gucci purse in excellent condition for under $300. I'm obsessed!"
      },
      "Sheri D.": {
        rating: "⭐⭐⭐⭐",
        text: "Great collection. Some items are priced a little high, but quality is top-notch."
      },
      "Brittney Cole": {
        rating: "⭐⭐⭐⭐⭐",
        text: "If you like fashion, you’ll love this place. Way better than chain thrift stores."
      }
    }
  },
  {
    id: "3871c85f-5fd2-4f3b-8703-1d1f2486d114",
    name: "Slice of Heaven Pizza",
    category: "Food",
    description: {
      brief: "Fresh ingredients. Crispy crust. Always made with love.",
      detail: "Slice of Heaven Pizza is your neighborhood destination for handcrafted, delicious pizza made with fresh, locally-sourced ingredients. Our dough is made in-house daily, and every pie is baked to perfection in our stone ovens. We offer traditional favorites, gourmet specialties, and create-your-own options. With dine-in, takeout, and delivery available, it’s always a good time for a slice — or a whole pie."
    },
    hours: {
      monday: "11:00 AM - 9:00 PM",
      tuesday: "11:00 AM - 9:00 PM",
      wednesday: "11:00 AM - 9:00 PM",
      thursday: "11:00 AM - 9:00 PM",
      friday: "11:00 AM - 10:00 PM",
      saturday: "11:00 AM - 10:00 PM",
      sunday: "12:00 PM - 8:00 PM"
    },
    contact: {
      phone: "219-555-9888",
      email: "orders@sliceofheavenpizza.com",
      address: "1505 US-41, Schererville, IN"
    },
    image: {
      logo: "images/business-listings/slice-of-heaven-pizza.webp",
      moreImages : [
        "images/business-detail-images/slice-of-heaven pizza/slice-of-heaven-pizza1.webp",
        "images/business-detail-images/slice-of-heaven pizza/slice-of-heaven-pizza2.webp",
        "images/business-detail-images/slice-of-heaven pizza/slice-of-heaven-pizza3.webp"
      ],
      rating: {
        one: 4.5,
        two: 4.3,
        three: 4.4
      }
    },
    rating: 4.7,
    comments: {
      "Brian F.": {
        rating: "⭐⭐⭐⭐⭐",
        text: "The crust is crispy, the sauce is flavorful, and they don’t skimp on cheese!"
      },
      "Nina H.": {
        rating: "⭐⭐⭐⭐",
        text: "Delicious pizza and friendly staff. I just wish they delivered a little faster."
      },
      "Roberto C.": {
        rating: "⭐⭐⭐⭐⭐",
        text: "The meat lovers pizza is worth every penny. Best pizza in town hands down."
      }
    }
  },
  {
    id: "591e1727-90f3-4a20-9b3b-998671cf0fc0",
    name: "Byte Me Tech Lounge",
    category: "Tech",
    description: {
      brief: "Tech repair meets café lounge vibes.",
      detail: "Byte Me Tech Lounge is a one-of-a-kind space combining expert repair services with a relaxed café environment. Whether your laptop needs a new battery or your phone screen is shattered, we’ve got the tools to help. While you wait, enjoy free Wi-Fi, coffee, and a cozy atmosphere designed for studying, working, or just chilling out. We believe tech support doesn’t have to be stressful — it should be smooth and social."
    },
    hours: {
      monday: "9:00 AM - 7:00 PM",
      tuesday: "9:00 AM - 7:00 PM",
      wednesday: "9:00 AM - 7:00 PM",
      thursday: "9:00 AM - 7:00 PM",
      friday: "9:00 AM - 7:00 PM",
      saturday: "10:00 AM - 6:00 PM",
      sunday: "closed"
    },
    contact: {
      phone: "708-556-3012",
      email: "hello@bytemetech.com",
      address: "9130 Calumet Ave, Munster, IN"
    },
    image: {
      logo: "images/business-listings/byte-me-tech.jpg",
      moreImages : [
        "images/business-detail-images/byte-me-tech-lounge/byte-me-tech1.jpg",
        "images/business-detail-images/byte-me-tech-lounge/byte-me-tech2.jpg",
        "images/business-detail-images/byte-me-tech-lounge/byte-me-tech3.jpg"
      ],
      rating: {
        one: 4.4,
        two: 4.7,
        three: 4.9
      }
    },
    rating: 4.9,
    comments: {
      "Tina Morris": {
        rating: "⭐⭐⭐⭐⭐",
        text: "Got my iPad fixed while sipping on iced coffee. Best repair experience ever!"
      },
      "Josh M.": {
        rating: "⭐⭐⭐⭐⭐",
        text: "Cool spot! Tech repair plus café vibes is genius. My go-to place now."
      },
      "Alyssa V.": {
        rating: "⭐⭐⭐⭐⭐",
        text: "Staff was patient and explained everything clearly. Very refreshing service!"
      }
    }
  },
  {
    id: "5e029bde-5e99-4e96-90f4-91c2632ac9ba",
    name: "Midwest Threads",
    category: "Clothing",
    description: {
      brief: "Midwest comfort meets timeless fashion.",
      detail: "Midwest Threads offers clothing that combines the charm of Midwestern lifestyle with modern style. Our collections include seasonal staples, cozy flannels, denim, outerwear, and accessories. Whether you’re shopping for work, a casual weekend, or a local festival, Midwest Threads delivers pieces that are comfortable, durable, and effortlessly stylish. We pride ourselves on supporting local brands and sustainable fashion practices."
    },
    hours: {
      monday: "10:00 AM - 7:00 PM",
      tuesday: "10:00 AM - 7:00 PM",
      wednesday: "10:00 AM - 7:00 PM",
      thursday: "10:00 AM - 7:00 PM",
      friday: "10:00 AM - 8:00 PM",
      saturday: "10:00 AM - 8:00 PM",
      sunday: "11:00 AM - 5:00 PM"
    },
    contact: {
      phone: "708-330-5112",
      email: "shop@midwestthreads.com",
      address: "388 Ridge Rd, Munster, IN"
    },
    image: {
      logo: "images/business-listings/midwest-threads.jpg",
      moreImages : [
        "images/business-detail-images/midwest-threads/midwest-threads1.webp",
        "images/business-detail-images/midwest-threads/midwest-threads2.webp",
        "images/business-detail-images/midwest-threads/midwest-threads3.jpeg"
      ],
      rating: {
        one: 4.7,
        two: 4.5,
        three: 4.9
      }
    },
    rating: 4.5,
    comments: {
      "Hannah G.": {
        rating: "⭐⭐⭐⭐⭐",
        text: "Love their flannels and jeans. Very well made and stylish!"
      },
      "Kyle J.": {
        rating: "⭐⭐⭐⭐",
        text: "Affordable and high quality. Great Midwest vibe!"
      },
      "Stephanie R.": {
        rating: "⭐⭐⭐⭐⭐",
        text: "The store smells amazing and is beautifully set up. Great gift ideas too!"
      }
    }
  },
];
