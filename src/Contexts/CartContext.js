import { createContext, useEffect, useReducer } from "react";
import { cartReducer } from "../Reducer/Cart_Reducer";
import { productReducer } from "../Reducer/Product_Reducer";
export const CartContext = createContext();

export const CartProvider = ({children})=>{

    const [cartData, dispatch] = useReducer(cartReducer, {
        cart: [],
        filter: {
          category: [],
          userRating: null,
          sortby: null,
          searchQuery: "",
          price: 2000,
        },
      });

      const getCartData = async()=>{
        try{
            const token = localStorage.getItem("token");
            const auth = {
              authorization: token,
            };
            const responseCart = await (
                await fetch("/api/user/cart", {
                  method: "GET",
                  headers: auth,
                })
              ).json();
              if (responseCart.status === 200) {
                dispatch({
                  type: "ADD_TO_CART",
                  payload: responseCart.cart,
                });
              }
        }catch(e){
            console.error(e)
        }

        const getCartCount = () =>{
            return cartData.cart.length;
        }

        const getTotalPrice = () =>{
            return cartData.cart.reduce(
                (acc, { discounted_price, qty }) => acc + Number(discounted_price) * qty,
                0
              );
        }

        const getTotalDiscount = () => {
            return (
              cartData.cart.reduce(
                (acc, { price, qty }) => acc + Number(price) * qty,
                0
              ) - getTotalPrice()
            );
          };

        const isCartEmpty = (productId) => {
            return cartData.cart.find(({ _id }) => _id === productId);
          };
          const addFilterCategory = (category) => {
            dispatch({ type: "FILTER_CATEGORY", payload: category });
          };
        
          const addFilterByRange = (e) => {
            dispatch({ type: "FILTER_PRICE", payload: Number(e.target.value) });
          };
        
          const addFilterByRating = (e) => {
            if (e.target.checked) {
              dispatch({ type: "FILTER_RATING", payload: Number(e.target.value) });
            }
          };
        
          const addFilterSortby = (e) => {
            if (e.target.checked) {
              dispatch({ type: "FILTER_SORTBY", payload: e.target.value });
            }
          };
        
          const addFilterQuery = (e) => {
            dispatch({ type: "FILTER_QUERY", payload: e.target.value });
          };
        
          const clearFilter = (e) => {
            dispatch({ type: "CLEAR_FILTER", payload: {} });
            e.preventDefault();
          };
          const clearCategory = () => {
            dispatch({ type: "CLEAR_CATEGORY", payload: [] });
          };
          const resetCartContext = () => {
            dispatch({ type: "RESET_CART_WISHLIST", payload: [] });
          };
          const clearCart = () => {
            dispatch({ type: "CLEAR_CART", payload: [] });
          };
          useEffect(() => {
            getCartData();
          }, []);
        
      }
    return(
        <CartContext.Provider>{children}</CartContext.Provider>
    )
}

