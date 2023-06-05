import { useContext } from "react";
import "./Filter.css";
import { CartContext } from "../../Contexts/CartContext";
// import Slider from "@mui/material/Slider";
export const Filter = () => {
  const {
    addFilterCategory,
    addFilterRange,
    range,
    addFilterRating,
    addFilterSortby,
    clearFilter,
    filter,
  } = useContext(CartContext);
  return (
    <>
      <form className="filter-form">
        <header className="filter-header">
          <h3>Filters</h3>
          <button onClick={(e) => clearFilter(e)}>Clear</button>
        </header>
        <h3>Price</h3>
        <datalist className="filter-datalist" id="range">
          <option value="0">0</option>
          <option value="1000">1000</option>
          <option value="2000">2000</option>
        </datalist>
        <h3>Category</h3>
        <label>
          <input
            type="checkbox"
            value="Boy's"
            name="category"
            onChange={(e) => addFilterCategory(e.target.value)}
            checked={filter.category.includes("Boy's")}
          />
          Boy's
        </label>
        <label>
          <input
            type="checkbox"
            value="Girl's"
            name="category"
            onChange={(e) => addFilterCategory(e.target.value)}
            checked={filter.category.includes("Girl's")}
          />
          Girl's
        </label>
        <label>
          <input
            type="checkbox"
            value="Infants"
            name="category"
            onChange={(e) => addFilterCategory(e.target.value)}
            checked={filter.category.includes("Infants")}
          />
          Infants
        </label>
        <h3>Rating</h3>
        <label>
          <input
            type="radio"
            value="4"
            name="rating"
            onChange={(e) => addFilterRating(e)}
            checked={filter?.userRating === 4}
          />
          4 Stars & above
        </label>
        <label>
          <input
            type="radio"
            value="3"
            name="rating"
            onChange={(e) => addFilterRating(e)}
            checked={filter?.userRating === 3}
          />
          3 Stars & above
        </label>
        <label>
          <input
            type="radio"
            value="2"
            name="rating"
            onChange={(e) => addFilterRating(e)}
            checked={filter?.userRating === 2}
          />
          2 Stars & above
        </label>
        <label>
          <input
            type="radio"
            value="1"
            name="rating"
            onChange={(e) => addFilterRating(e)}
            checked={filter?.userRating === 1}
          />
          1 Stars & above
        </label>
        <h3>Sort by</h3>
        <label>
          <input
            type="radio"
            name="sortby"
            value="LTH"
            onChange={(e) => addFilterSortby(e)}
            checked={filter.sortby === "LTH"}
          />{" "}
          Price-Low to High
        </label>
        <label>
          <input
            type="radio"
            name="sortby"
            value="HTL"
            onChange={(e) => addFilterSortby(e)}
            checked={filter.sortby === "HTL"}
          />{" "}
          Price-High to Low
        </label>
      </form>
    </>
  );
};