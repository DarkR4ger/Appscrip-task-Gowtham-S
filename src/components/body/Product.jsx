"use client";
import { Suspense, useEffect, useState } from "react";
import Arrow from "../../../public/icons/left-arrow-logo.svg";
import Tick from "../../../public/icons/tick.svg";
import "./product.css";

import Image from "next/image";
import FilterDropdown from "./Filter";
const Product = ({ data }) => {
  const [products, setProducts] = useState();

  useEffect(() => {
    setProducts(data);
  }, []);
  const list = [
    "RECOMMENDED",
    "NEWEST FIRST",
    "POPULAR",
    "PRICE: HIGH TO LOW",
    "PRICE: LOW TO HIGH",
  ];

  const filterTitles = [
    "IDEAL FOR",
    "OCCASION",
    "WORK",
    "FABRIC",
    "SEGMENT",
    "SUITABLE FOR",
    "RAW MATERIALS",
    "PATTERN",
  ];

  const [showFilter, setShowFilter] = useState(true);

  return (
    <main id="product-main">
      <section className="product-top-section ">
        <div className="product-top-left-section ">
          <p className="total-items mobile-none">3425 ITEMS</p>
          <div
            onClick={() => setShowFilter(!showFilter)}
            role="button"
            className="show-hide-filter-btn"
          >
            <p className="filters-mobile">FILTERS</p>
            <Image
              style={{
                rotate: `${showFilter ? "90deg" : "270deg"}`,
                transition: "rotate 0.15s ease-in-out",
              }}
              src={Arrow}
              className="mobile-none"
              alt="arrow"
              height={16}
              width={16}
            />
            <p
              className="mobile-none"
              style={{ textDecoration: "underline", opacity: "30%" }}
            >
              {showFilter ? "HIDE FILTER" : "SHOW FILTER"}
            </p>
          </div>
        </div>
        <div className="product-top-right-section">
          <DropDownMenu options={list} defaultOption={list[0]} />
        </div>
      </section>
      <section className="product-main-section">
        {showFilter && (
          <section className="product-filter">
            {filterTitles.map((title, index) => {
              return <FilterDropdown key={index} FilterTitle={title} />;
            })}
          </section>
        )}
        <section className="products-list">
          <Suspense fallback={<div>Loadin....</div>}></Suspense>
        </section>
      </section>
    </main>
  );
};

const ProductContiner = ({ id, title, price, count, image }) => {
  return (
    <section>
      <p>products</p>
    </section>
  );
};

export const DropDownMenu = ({ options, defaultOption }) => {
  const [selectedOption, setSelectedOption] = useState(defaultOption);
  const [click, setClick] = useState(false);

  const handleOptionsSelect = (option) => {
    setSelectedOption(option);
    setClick(false);
  };
  return (
    <div className="dropdown">
      <div className="sorting-btn" onClick={() => setClick(!click)}>
        <p>{selectedOption}</p>
        <Image
          style={{
            rotate: `${click ? "180deg" : "0deg"}`,
            transition: "rotate 0.15s ease-in-out",
          }}
          src={Arrow}
          alt="arrow"
          height={16}
          width={16}
        />
      </div>
      {click && (
        <ul className="options">
          {options.map((option, index) => {
            return (
              <li
                onClick={() => handleOptionsSelect(option)}
                className="each-option"
                key={index}
              >
                {option == selectedOption && (
                  <Image src={Tick} height={26} width={26} alt="tick-logo" />
                )}
                <p
                  style={{
                    fontWeight: `${
                      option == selectedOption ? "800" : "normal"
                    }`,
                  }}
                >
                  {option}
                </p>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default Product;
