import React from "react";
import IconButton from "@mui/material/IconButton";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import { Button } from "@mui/material";

const CartItem = () => {
  return (
    <div className="p-5 shadow-lg border rounded-md">
      <div className="flex items-center">
        <div className="w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem] ">
          <img
            className="w-full h-full object-cover object-top"
            src="https://rukminim1.flixcart.com/image/612/612/xif0q/kurta/l/f/r/xl-k-spl668-yellow-sg-leman-original-imagznqcrahgq9rf.jpeg?q=70
            "
            alt=""
          />
        </div>
        <div className="ml-5 space-y-1">
          <p className="font-semibold">Men slim Rise black</p>
          <p className="opacity-70">Size: size l White</p>
          <p className="opacity-70 mt-2">Seller:</p>

          <div className="flex space-x-2 items-center pt-3">
            <p className="font-semibold text-lg">199</p>
            <p className="opacity-50 line-through">211</p>
            <p className="text-green-600 font-semibold">% 5 off</p>
          </div>
        </div>
        {/* ----------------------- */}
      </div>
      <div className="lg:flex items-center lg:space-x-10 pt-4">
        <div className="flex items-center space-x-2 ">
          <IconButton>
            <RemoveCircleOutlineIcon />
          </IconButton>
          <span className="py-1 px-7 border rounded-sm">3 </span>
          <IconButton sx={{ color: "RGB(145 85 253)" }}>
            <AddCircleOutlineIcon />
          </IconButton>
        </div>
        <div className="flex text-sm lg:text-base mt-5 lg:mt-0">
          <Button sx={{ color: "RGB(145 85 253)" }}>Remove</Button>
        </div>
      </div>
    </div>
  );
};
export default CartItem;