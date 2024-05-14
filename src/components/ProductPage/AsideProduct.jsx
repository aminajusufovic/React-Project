import React from "react";
import App from "../../App";
import productsData from "../../App";
import { useState, useEffect } from "react";

function AsideProduct({ productsData }) {
  const [searchTerm, setsearchTerm] = useState("");

  function searchIput() {
    productsData.filter((val) => {
      if (searchTerm == "") {
        return val;
      } else if (val.name.toLowerCase().includes(searchTerm.toLowerCase())) {
        return val;
      }
    });
  }
  useEffect(() => {
    searchIput();
  }, []);

  function CategoryAll() {
    productsData.filter((val) => {
      if (
        productsData.category.includes(
            "office"      ||
            "living room"   ||
            "kitchen"         ||
            "bedroom"           || 
            "dining"              ||
            "kids"                  ||
        ))
      {
        return val;
      }
    })
  }

  function CategoryOffice() {
    productsData.filter((val) => {cv 
      if (productsData.category.includes("office")) {
        return val;
      }
    });
  }

  function CategoryLivingRoom() {
    productsData.filter((val) => {
      if (productsData.category.includes("living room")) {
        return val;
      }
    });
  }

  function CategoryKitchen() {
    productsData.filter((val) => {
      if (productsData.category.includes("kitchen")) {
        return val;
      }
    });
  }


  function CategoryBedroom() {
    productsData.filter((val) => {
      if (productsData.category.includes("bedroom")) {
        return val;
      }
    });
  }
  function CategoryDinning() {
    productsData.filter((val) => {
      if (productsData.category.includes("dining")) {
        return val;
      }
    });
  }

  function CategoryKids() {
    productsData.filter((val) => {
      if (productsData.category.includes("kids")) {
        return val;
      }
    });
  }

  return (
    <div>
      <input
        type="text"
        placeholder="S e a r c h"
        className="input-aside"
        onChange={(e) => {
          setsearchTerm(e.target.value);
        }}
      />

      <p className="p-product">Category</p>
      <ul className="product-aside-list1">
        <li onClick={CategoryAll}>All</li>
        <li onClick={CategoryOffice}>Office</li>
        <li onClick={CategoryLivingRoom}>Living Room</li>
        <li onClick={CategoryKitchen}>Kitchen</li>
        <li onClick={CategoryBedroom}>Bedroom</li>
        <li onClick={CategoryDinning}>Dining</li>
        <li onClick={CategoryKids}>Kids</li>
      </ul>
      <div className="product-aside-company">
        <p>Company</p>
        <select name="company" id="">
          <option value="all">all</option>
          <option value="macros">macros</option>
          <option value="liddy">liddy</option>
          <option value="ikea">ikea</option>
          <option value="carresa">carresa</option>
        </select>
      </div>

      <div className="product-aside-color">
        <p>Color</p>
        <div className="aside-colors">
          <a href="">All</a>
          <button className="product-aside-color-btn"> A </button>
          <button className="product-aside-color-btn">b</button>
          <button className="product-aside-color-btn">c</button>
          <button className="product-aside-color-btn">d</button>
          <button className="product-aside-color-btn">e</button>
        </div>
      </div>
      <div className="aside-price">
        <p>Price</p>
        <p></p>
        <input type="range" min={0} max={99999} />
      </div>
      <div className="aside-freeshipping">
        <label htmlFor="shipping">Free Shipping</label>
        <input type="checkbox" name="shipping" />
      </div>
      <button className="clear-filters" type="submit">
        Clear Filters
      </button>
    </div>
  );
}

export default AsideProduct;
