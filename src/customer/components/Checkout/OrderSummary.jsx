import React from "react";
import CartItem from "../Cart/Cartitem";
import AddressCard from "../AddressCard/AddressCard";
import { Button } from "@mui/material";

function OrderSummary() {
  return (
    <div>
      <div className="p-5 shadow-lg rounded-md border ">
        <AddressCard />
      </div>
      <div className="">
        <div className="lg:grid grid-cols-3  relative">
          <div className="lg:col-span-2 lg:px-5 bg-white">
            {[1, 1, 1, 1].map((item) => (
              <CartItem />
            ))}
          </div>
          <div className="px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0 ">
            <div className="border">
              {" "}
              <p className="font-bold opacity-60 pb-4">PRICE DETAILS</p>
              <hr />
              {/* ----- proce details------- */}
              <div className="space-y-3 font-semibold">
                <div className="flex justify-between pt-3 text-black ">
                  <span>Price item</span>
                  <span>₹4585</span>
                </div>
                <div className="flex justify-between">
                  <span>Discount</span>
                  <span className="text-green-700">-₹discounte</span>
                </div>
                <div className="flex justify-between">
                  <span>Delivery Charges</span>
                  <span className="text-green-700">Free</span>
                </div>
                <hr />
                <div className="flex justify-between font-bold text-lg">
                  <span>Total Amount</span>
                  <span className="text-green-700">₹45644</span>
                </div>
              </div>
              {/* button  */}
              <Button
                variant="contained"
                type="submit"
                sx={{ padding: ".8rem 2rem", marginTop: "2rem", width: "100%" }}
              >
                Check Out
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderSummary;
