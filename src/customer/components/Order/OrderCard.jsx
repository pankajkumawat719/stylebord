import { Grid } from "@mui/material";
import React from "react";
import Box from "@mui/material";
import { Button } from "@mui/material";
import AdjustIcon from "@mui/icons-material/Adjust";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import Order from "./Order";
import { useNavigate } from "react-router-dom";

const OrderCard = () => {
  const navigate = useNavigate();
  return (
    <div
      onclick={() => navigate(`/account/order/${5}`)}
      className="p-5 shadow-md hover:shadow-2xl border"
    >
      <Grid spacing={2} container sx={{ justifyContent: "space-between" }}>
        <Grid item xs={6}>
          <div className="flex cursor-pointer">
            <img
              className="w-[5rem] h-[5rem] object-cover object-top"
              src="https://rukminim1.flixcart.com/image/612/612/xif0q/kurta/y/c/x/xl-kast107hp-majestic-man-original-imafw49u5uty4agx-bb.jpeg?q=70"
              alt=""
            />
            <div className="ml-5">
              <p className="mb-2">title men slim kurta</p>
              <p className="opacity-50 text-xs font-semibold space-x-5">
                <span>Size: M</span>
              </p>
              <p>color black</p>
            </div>
          </div>
        </Grid>
        {/* secont grid */}

        <Grid item xs={2}>
          <p>₹1099</p>
        </Grid>
        {/* third grid */}
        <Grid item xs={4}>
          {true && (
            <div>
              <p className="space-y-2 font-semibold">
                <AdjustIcon
                  sx={{ width: "15px", height: "15px" }}
                  className="text-green-600 p-0 mr-2 text-sm"
                />
                <span> Delivery On Mar 03</span>
              </p>
              <p className="text-xs">Your Item Has Been Delivered</p>
            </div>
          )}
          {false && (
            <p>
              <span>Expected Delivery On Mar 03</span>
            </p>
          )}
        </Grid>
      </Grid>
    </div>
  );
};

export default OrderCard;
