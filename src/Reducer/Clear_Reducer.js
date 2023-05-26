// export const clearReducer =(prevState,{type, payload})=>{
//     switch(type){
//     case "CLEAR_CATEGORY":
//       return { ...prevState, filter: { ...prevState.filter, category: [] } };
//     case "CLEAR_FILTER":
//       return {
//         ...prevState,
//         filter: {
//           ...prevState.filter,
//           category: [],
//           userRating: null,
//           sortby: null,
//           price: 2000,
//         },
//       };
//     default:
//       return prevState;
//     }
// }