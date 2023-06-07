import { Routes, Route, useLocation } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import  MockAPI  from './Mockman/Mockman';
import { Home } from "./Pages/Home/Home";
import { Productlisting } from "./Pages/Product/Productlisting";
import { Cart } from "./Pages/Cart/Cart";
import { Wishlist } from "./Pages/Wishlist/Wishlist";
import { Login } from "./Pages/Login/Login";
import { SignUp } from "./Pages/SignUp/SignUp";
import { CheckOut } from "./Pages/CheckOut/CheckOut";
import { Header } from "./Components/Header/Header";
import { Product } from "./Pages/Product/Product";
import { UserProfile } from "./Pages/User/UserProfile";
import { RequireAuth } from "./auth/RequiredAuth";
import { ToastContainer } from "react-toastify";
import { NotFound } from "./Pages/NotFound/NotFound";
import { useEffect } from "react";
import { Address } from "./Pages/User/Address";
import { FinalCheckout} from "./Components/Price/FinalCheckout"

function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <div className="App">
      <Header />
      <ToastContainer
        position="bottom-left"
        autoClose={1500}
        hideProgressBar
        newestOnTop={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Productlisting />} />
        <Route
          path="/cart"
          element={
            <RequireAuth>
              <Cart />
            </RequireAuth>
          }
        />
        <Route
          path="/wishlist"
          element={
            <RequireAuth>
              <Wishlist />
            </RequireAuth>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route
          path="/checkout"
          element={
            <RequireAuth>
              <CheckOut />
            </RequireAuth>
          }
        />
        <Route
          path="/finalcheckout"
          element= {<FinalCheckout />}
          
        />
        <Route
          path="/profile"
          element={
            <RequireAuth>
              <UserProfile />
            </RequireAuth>
          }
        />
        <Route path="/products/:productId" element={<Product />} />
        <Route path="/mockman" element={<MockAPI />} />
        <Route
          path="/address"
          element={
            <RequireAuth>
              <Address />
            </RequireAuth>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;