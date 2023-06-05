import { useContext } from "react";
import "./Home.css";
import { ProductContext } from "../../Contexts/ProductContext";
import { useNavigate } from "react-router";
// import Backdrop from "@mui/material/Backdrop";
import { CartContext } from "../../Contexts/CartContext";
// import { TailSpin } from "react-loader-spinner";
export const Home = () => {
  const { categories } = useContext(ProductContext);
  const { addFilterCategory, clearCategory } = useContext(CartContext);
  const navigate = useNavigate();
  const categoryHandler = (category) => {
    clearCategory();
    addFilterCategory(category);
    navigate("/products");
  };
//   return categories.length === 0 ? (
//      (
//     <Backdrop
//       sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
//       open={true}
//       // onClick={handleClose}
//     >
//       <TailSpin
//         height="80"
//         width="100%"
//         color="#4fa94d"
//         ariaLabel="tail-spin-loading"
//         radius="1"
//         wrapperStyle={{ margin: "8rem auto" }}
//         wrapperClass=""
//         visible={true}
//       />
//     </Backdrop>
//   ) : 
return (
    <>
      <section className="category">
      
        <h2>Shop By Category</h2>
        <ul className="landing-ul">
          {categories.map(
            ({ _id, categoryName, description, categoryImage }) => (
              <li
                onClick={() => categoryHandler(categoryName)}
                key={_id}
                
              >
                <h2 className="category-text">{categoryName}</h2>
                <p className="category-text">Check out our {description}</p>
              </li>
            )
          )}
        </ul>
        <div className="landing-image-container">
       <img className="landing-image"
          alt="landing" 
          src="https://cdn.fcglcdn.com/brainbees/banners/hp_mktg_p01_buy3_vacay_desktop1684219258601.jpg"/>
      </div>
      </section>
      
    </>
  );
};