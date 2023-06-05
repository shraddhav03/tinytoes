import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

 export const categories = [
  {
    _id: uuid(),
    categoryName: "Girl Fashion",
    description:
      "Girl's collection",
      
  },
  {
    _id: uuid(),
    categoryName: "Boy Fashion",
    description:
    "Boy's collection",
     
  },
  {
    _id: uuid(),
    categoryName: "Infants",
    description:
    "Infant's collection",
    
  },
  {
    _id: uuid(),
    categoryName: "Others",
    description:
      "Other Collection",
    
  },
  // {
  //   _id: uuid(),
  //   categoryName: "Toys",
  //   description:
  //     "Meant to cause discomfort and fear for both the character and readers, horror writers often make use of supernatural and paranormal elements in morbid stories that are sometimes a little too realistic.",
  // },
  // {
  //   _id: uuid(),
  //   categoryName: "Stationary",
  //   description:
  //     "Meant to cause discomfort and fear for both the character and readers, horror writers often make use of supernatural and paranormal elements in morbid stories that are sometimes a little too realistic.",
  // },
];
