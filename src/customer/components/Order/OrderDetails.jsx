import React from "react";
import AddressCard from "../AddressCard/AddressCard";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import Box from "@mui/material/Box";

import OrderTracker from "./OrderTracker";
import { Grid } from "@mui/material";
import { deepPurple } from "@mui/material/colors";
function OrderDetails() {
  return (
    <div className="px:5 lg:px-20 ">
      <div>
        <h1 className="font-bold text-xl py-7">Dilevery address</h1>
        <AddressCard />
      </div>
      <div className="py-20">
        <OrderTracker activeStep={3} />
      </div>
      <Grid container className="space-y-5">
        {[1, 1, 1, 1, 1].map((item) => (
          <Grid
            item
            container
            className="shadow-xl rounded-ms p-5 border"
            sx={{ alignItems: "center", justifyContent: "space-between" }}
          >
            <Grid item xs={6}>
              <div className="flex items-center space-x-4">
                <img
                  className="w-[5rem] h-[5rem] object-cover object-top"
                  src="https://rukminim1.flixcart.com/image/612/612/kpodocw0/t-shirt/x/o/4/xl-wr-64-wrodss-original-imag3upwgq9n9fbv.jpeg?q=70"
                  alt=""
                />
                <div className="ml-5 space-y-2">
                  <p className="fint-semibold">men slim mid </p>
                  <p className="opacity-50 text-xs font-semibold space-x-5">
                    <span>Color</span> <span>size</span>
                  </p>
                  <p>Seller: </p>
                  <p>₹1000 </p>
                </div>
              </div>
            </Grid>
            <Grid item>
              <Box
                sx={{ color: deepPurple }}
                className="flex items-center cursor-pointer"
              >
                <StarBorderIcon
                  sx={{ fontSize: "2rem" }}
                  className="px-2 text-5xl"
                />
                <span>Rate & Review Product</span>
              </Box>
            </Grid>
          </Grid>
        ))}
        <Grid
          item
          container
          className="shadow-xl rounded-ms p-5 border"
          sx={{ alignItems: "center", justifyContent: "space-between" }}
        >
          <Grid item xs={6}>
            <div className="flex items-center space-x-4">
              <img
                className="w-[5rem] h-[5rem] object-cover object-top"
                src="https://rukminim1.flixcart.com/image/612/612/kpodocw0/t-shirt/x/o/4/xl-wr-64-wrodss-original-imag3upwgq9n9fbv.jpeg?q=70"
                alt=""
              />
              <div className="ml-5 space-y-2">
                <p className="fint-semibold">men slim mid </p>
                <p className="opacity-50 text-xs font-semibold space-x-5">
                  <span>Color</span> <span>size</span>
                </p>
                <p>Seller: </p>
                <p>₹1000 </p>
              </div>
            </div>
          </Grid>
          <Grid item>
            <Box
              sx={{ color: deepPurple }}
              className="flex items-center cursor-pointer"
            >
              <StarBorderIcon
                sx={{ fontSize: "2rem" }}
                className="px-2 text-5xl"
              />
              <span>Rate & Review Product</span>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default OrderDetails;
