import { useContext, useState } from "react";
import "./Home.css";
import { ProductContext } from "../../Contexts/ProductContext";
import { Footer } from "../../Components/Footer/Footer";
import { useNavigate } from "react-router";
import Backdrop from "@mui/material/Backdrop";
import { CartContext } from "../../Contexts/CartContext";
import { TailSpin } from "react-loader-spinner";
export const Home = () => {
  const { categories } = useContext(ProductContext);
  const [isLoaded, setIsLoaded] = useState(false);
  const { addFilterCategory, clearCategory } = useContext(CartContext);
  const navigate = useNavigate();
  const categoryHandler = (category) => {
    clearCategory();
    addFilterCategory(category);
    navigate("/products");
  };
  return !isLoaded && categories.length === 0 
  ? (
    <Backdrop
      sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={true}
    >
      <TailSpin
        height="80"
        width="100%"
        color="#4fa94d"
        ariaLabel="tail-spin-loading"
        radius="1"
        wrapperStyle={{ margin: "8rem auto" }}
        wrapperClass=""
        visible={true}
      />
    </Backdrop>
  ) :
  // return !isLoaded && categories.length === 0
   (
    <>
      <div className="landing-image-container">
        <img
          className="landing-image"
          alt="landing"
          src="	https://cdn.fcglcdn.com/brainbees/banners/desktop_hp_default_summer_break_030620231685973865704.jpg"
          onClick={() => navigate("/products")}
          onLoad={() => setIsLoaded(true)}
        />
      </div>
      
      <section className="category">
        <h2>SHOP BY CATEGORIES</h2>
        <ul className="landing-ul">
          {categories.map(
            ({ _id, categoryName, description, categoryImage }) => (
              <div>
              <li
                onClick={() => categoryHandler(categoryName)}
                key={_id}
                style={{ backgroundImage: `url(${categoryImage})` }}
              >
              </li>
               <p className="category-text">{description}</p>
               </div>
            )
          )}
        </ul>
      </section>
      <Footer />
    </>
  );
};