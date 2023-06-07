import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

 export const categories = [
  // {
  //   _id: uuid(),
  //   categoryName: "Girl Fashion",
  //   description:
  //     "Girl's collection",
      
  // },
  // {
  //   _id: uuid(),
  //   categoryName: "Boy Fashion",
  //   description:
  //   "Boy's collection",
     
  // },
  // {
  //   _id: uuid(),
  //   categoryName: "Infants",
  //   description:
  //   "Infant's collection",
    
  // },
  // {
  //   _id: uuid(),
  //   categoryName: "Others",
  //   description:
  //     "Other Collection",
    
  // },
  {
    _id: uuid(),
    categoryName: "Toys",
    description:
      "Toys"  ,
    categoryImage: 
      "	https://cdn.fcglcdn.com/brainbees/images/products/219x265/12170928a.jpg"
    },
  {
    _id: uuid(),
    categoryName: "Stationary",
    description:
      "Stationary Items",
    categoryImage:
      "https://cdn.fcglcdn.com/brainbees/images/products/219x265/8240955a.jpg"  
  },
  {
    _id: uuid(),
    categoryName: "Clothing",
    description: "kids collection",
    categoryImage:
    "https://cdn.fcglcdn.com/brainbees/images/boutique/670x670/29996.jpg"
   },
];
