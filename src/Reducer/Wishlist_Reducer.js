// export const wishlistReducer = (prevState, { type, payload }) => {
//     switch(type){
//         case "ADD_TO_WISHLIST":
//         return{
//             ...prevState,
//             cart: prevState.wishlist.find(({ _id }) => _id === payload._id)
//               ? prevState.wishlist.filter(({ _id }) => payload._id !== _id)
//               : [...prevState.wishlist, { ...payload, qty: 1 }],
//         };
//         case "RESET_WISHLIST":
//         return{
//             ...prevState,
//         wishlist: [],
//         filter: {
//           category: [],
//           userRating: null,
//           sortby: null,
//           searchQuery: "",
//           price: 2000,
//         },
//         };
//         case "CLEAR_WISHLIST":
//         return{...prevState, wishlist: []};
//         case "INCREMENT_WISHLIST":
//         return{...prevState,
//             cart: prevState.wishlist.map((product) =>
//               product._id === payload._id
//                 ? { ...product, qty: product.qty + 1 }
//                 : product
//             ),};
//         case "DECREMENT_WISHLIST":
//         return{...prevState,
//             cart: prevState.wishlist.map((product) =>
//               product._id === payload._id && product.qty !== 1
//                 ? { ...product, qty: product.qty - 1 }
//                 : product
//             ),};
//         default  :
//         return prevState;   
//         }
//     }
