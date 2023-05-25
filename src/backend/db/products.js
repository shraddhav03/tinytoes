import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
      name: "Colorful WMN 01",
      img: "https://live.staticflickr.com/65535/52900844018_4f5fccef4a_h.jpg",
      price: 100,
      details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      category: "Girl's_dress",
      rating: 4.5,
      gender: "women"
  },
  {
  
      _id: uuid(),
      name: "Colorful WMN 01",
      img: "https://live.staticflickr.com/65535/52900844018_4f5fccef4a_h.jpg",
      price: 100,
      details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      category: "Girl's_dress",
      rating: 4.5,
      gender: "women"
    
  },
  {
    _id: uuid(),
    name: "Colorful WMN 01",
    img: "https://live.staticflickr.com/65535/52900844018_4f5fccef4a_h.jpg",
    price: 100,
    details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    category: "Boy's_dress",
    rating: 4.5,
    gender: "women"
  },
];
