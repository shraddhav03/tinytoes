import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  // {
  //   _id: uuid(),
  //     name: "Colorful WMN 01",
  //     img: "https://live.staticflickr.com/65535/52900844018_4f5fccef4a_h.jpg",
  //     price: 100,
  //     details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  //     category: "Girl's_dress",
  //     rating: 4.5,
  //     gender: "women"
  // },
  // {
  
  //     _id: uuid(),
  //     name: "Colorful WMN 01",
  //     img: "https://live.staticflickr.com/65535/52900844018_4f5fccef4a_h.jpg",
  //     price: 100,
  //     details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  //     category: "Girl's_dress",
  //     rating: 4.5,
  //     gender: "women"
    
  // },
  // {
  //   _id: uuid(),
  //   name: "Colorful WMN 01",
  //   img: "https://live.staticflickr.com/65535/52900844018_4f5fccef4a_h.jpg",
  //   price: 100,
  //   details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  //   category: "Boy's_dress",
  //   rating: 4.5,
  //   gender: "women"
  // },
  {
    _id: uuid(),
    title: "My House",
    description: "My House Teacher Fun Sticking Activity Kit - Multicolour",
    image:
    "https://cdn.fcglcdn.com/brainbees/images/products/219x265/11505806a.jpg",  
    price: "399",
    discounted_price: "219",
    category_name: "Toys",
    availability: true,
    delivery_time: "6",
    rating: "4.2",
  },
  {
    _id: uuid(),
    title: "Ratnas ",
    description: "Ratnas Junior Magic Pegs - Multicolor",
    image:
    "https://cdn.fcglcdn.com/brainbees/images/products/219x265/9994426a.jpg", 
    price: "299",
    discounted_price: "175",
    category_name: "Toys",
    availability: true,
    delivery_time: "8",
    rating: "3.5",
  },
  {
    _id: uuid(),
    title: "Funskool ",
    description: "Funskool Pot Decoration Kit with Acrylic Colors - Multicolor",
    image:
     "	https://cdn.fcglcdn.com/brainbees/images/products/219x265/3368991a.jpg",
      price: "999",
    discounted_price: "399",
    category_name: "Toys",
    size: "L",
    availability: false,
    delivery_time: "7",
    rating: "4.5",
  },
  {
    _id: uuid(),
    title: "Funskool",
    description: "Funskool Pot Decoration Kit with Acrylic Colors - Multicolor",
    image:
     "	https://cdn.fcglcdn.com/brainbees/images/products/219x265/3368991a.jpg",
    price: "309",
    discounted_price: "299",
    category_name: "Toys",
    availability: true,
    delivery_time: "2",
    rating: "2.0",
  },
  {
    _id: uuid(),
    title: "Ratnas",
    description: "Ratnas Junior Magic Pegs - Multicolor",
    image:
    "https://cdn.fcglcdn.com/brainbees/images/products/219x265/9994426a.jpg", 
    price: "2299",
    discounted_price: "1379",
    category_name: "Toys",
    availability: true,
    delivery_time: "5",
    rating: "1.0",
  },
  {
    _id: uuid(),
    title: "My House",
    description: "My House Teacher Fun Sticking Activity Kit - Multicolour",
    image:
    "https://cdn.fcglcdn.com/brainbees/images/products/219x265/11505806a.jpg",
    price: "439",
    discounted_price: "239",
    category_name: "Toys",
    availability: true,
    delivery_time: "4",
    rating: "4.7",
  },
  {
    _id: uuid(),
    title: "Babyhug",
    description: "Babyhug Stainless Steel Insulated Sipper Bottle Blue - 350 ml",
    image:
    "https://cdn.fcglcdn.com/brainbees/images/products/219x265/3553726a.jpg",
       price: "645",
    discounted_price: "550",
    category_name: "Stationary",
    availability: true,
    delivery_time: "7",
    rating: "4.1",
  },
  {
    _id: uuid(),
    title: "Syga",
    description:
     "Syga Pro Artists Drawing Sketching and Colouring Set 145 Pieces - Pink",
    image:
    "https://cdn.fcglcdn.com/brainbees/images/products/438x531/10540317a.jpg",
     price: "6499",
    discounted_price: "1999",
    category_name: "Stationary",
    availability: true,
    delivery_time: "10",
    rating: "5.0",
  },
  {
    _id: uuid(),
    title: "Babyhug",
    description: "Babyhug School Backpack Space Print - 15 Inches",
    image:
      "https://cdn.fcglcdn.com/brainbees/images/products/438x531/10691122a.jpg",
       price: "4199",
    discounted_price: "545",
    category_name: "Stationary",
    availability: true,
    delivery_time: "6",
    rating: "1.5",
  },
  {
    _id: uuid(),
    title: "Babyhug",
    description: "Babyhug Stainless Steel Insulated Sipper Bottle Blue - 350 ml",
    image:
    "https://cdn.fcglcdn.com/brainbees/images/products/219x265/3553726a.jpg",
       price: "645",
    discounted_price: "550",
    category_name: "Stationary",
    availability: true,
    delivery_time: "7",
    rating: "4.1",
  },
  {
    _id: uuid(),
    title: "Syga",
    description:
     "Syga Pro Artists Drawing Sketching and Colouring Set 145 Pieces - Pink",
    image:
    "https://cdn.fcglcdn.com/brainbees/images/products/438x531/10540317a.jpg",
     price: "6499",
    discounted_price: "1999",
    category_name: "Stationary",
    availability: true,
    delivery_time: "10",
    rating: "5.0",
  },
  {
    _id: uuid(),
    title: "Babyhug",
    description: "Babyhug School Backpack Space Print - 15 Inches",
    image:
      "https://cdn.fcglcdn.com/brainbees/images/products/438x531/10691122a.jpg",
       price: "4199",
    discounted_price: "545",
    category_name: "Stationary",
    availability: true,
    delivery_time: "6",
    rating: "1.5",
  }, 

  {
    _id: uuid(),
    title: "HELLCAT",
    description: "Boys Pack Of 5 Typography Printed Bio Finish T-shirt",
    image:
      "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/17137550/2022/2/11/b124b0f4-830d-44ed-a669-e8585d66cf4f1644579708683HellcatBoysRoundNeckBlendedCottonTshirt-ComboPackof51.jpg",
    price: "4999",
    discounted_price: "699",
    category_name: "C",
    size: "S",
    availability: true,
    delivery_time: "5",
    rating: "4.3",
  },
  {
    _id: uuid(),
    title: "H&M",
    description: "Boys White Pure Cotton Slim Fit T-shirt",
    image:
      "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/19283072/2022/7/28/f1c134f7-4f4b-42ad-8d49-f03042ed8bf21659002013493CottonT-shirt1.jpg",
    price: "499",
    discounted_price: "399",
    category_name: "Clothing",
    size: "S",
    availability: true,
    delivery_time: "5",
    rating: "4.1",
  },
  {
    _id: uuid(),
    title: "H&M",
    description: "Boys 5-pack Cotton T-shirts",
    image:
      "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/16929800/2022/1/25/c9670d8c-fc30-4182-a59a-b5789b9899e116431006892315-packcottonT-shirts1.jpg",
    price: "5999",
    discounted_price: "1999",
    category_name: "Clothing",
    size: "S",
    availability: true,
    delivery_time: "5",
    rating: "4.8",
  },
  {
    _id: uuid(),
    title: "CUCUMBER",
    description:
      "CUCUMBER Cotton Knit Half Sleeves Tee",
    image:
      "https://cdn.fcglcdn.com/brainbees/images/products/438x531/13616879a.jpg", 
    price: "400",
    discounted_price: "350",
    category_name: "Clothing",
    availability: true,
    delivery_time: "5",
    rating: "4.2",
  },
  {
    _id: uuid(),
    title: "Ollington",
    description: "Ollington St. Half Sleeves Cotton Hooded T-shirt",
    image:
    "https://cdn.fcglcdn.com/brainbees/images/products/438x531/12103800a.jpg",  
    price: "1700",
    discounted_price: "1200",
    category_name: "Clothing",
    availability: true,
    delivery_time: "5",
    rating: "2.5",
  },
  {
    _id: uuid(),
    title: "Mark & Mia",
    description: "Party Dress - Maroon",
    image:
    "https://cdn.fcglcdn.com/brainbees/images/products/300x364/12629870a.jpg", 
    price: "2799",
    discounted_price: "1119",
    category_name: "Clothing",
    availability: true,
    delivery_time: "5",
    rating: "1.5",
  },
];
