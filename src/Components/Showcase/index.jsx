import React from "react";
import "./style.scss";
import Button from "../button/button";

export default function Showcase() {
  return (
    <div className="showcase">
      <div className="banner">
        <div className="showcase_info">
          <div className="showcase_flex">
            <div className="showcase_text">
              <h4>BEST SELLER</h4>
              <h1>BEST DISPENSARY TO BUY WEED ONLINE </h1>
              <h4>Vitamins & Supplements</h4>
            </div>
            <div className="showcase_btn">
              <h4>Get 25% off</h4>
              <h4>Free Shipping</h4>
            </div>
            <div>
              <Button
                br={"10"}
                text={"Shop All"}
                color={"inherit"}
                textTransform={"lowerCase"}
                fsize={18}
              >
                Shop All
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
