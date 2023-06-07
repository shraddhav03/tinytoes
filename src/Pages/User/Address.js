import { useState } from "react";
import { AddressCard } from "../../Components/Address/AddressCard";
import { AiOutlinePlusCircle } from "react-icons/ai";
import "./Address.css";
import { AddAddress } from "../../Components/Address/AddAddress";
export const Address = () => {
  const [hideAddress, sethideAddress] = useState(true);
  return (
    <>
      <div
        style={{ display: hideAddress && "none" }}
        className="add-address-form-container"
      >
        <AddAddress sethideAddress={sethideAddress} />
      </div>
      <div className="address-container">
        <AddressCard />
        <button
          className="checkout-add-address"
          onClick={() => sethideAddress(false)}
        >
          <AiOutlinePlusCircle />
          Add new Address
        </button>
      </div>
    </>
  );
};