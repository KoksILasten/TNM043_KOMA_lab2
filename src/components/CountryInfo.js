import React, { useState } from "react";
import "../App.css";

const CountryInfo = ({ data, details }) => {
  return (
    <div className="CountryInfo">
      <div className="top">
        <p className="name">{data.name.common}</p>
        <p className="area">
          {(data.area / Math.pow(10, 6)).toFixed(1)} million km<sup>2</sup>
        </p>
      </div>
      <div className="bar">
        <div
          className="bar-fill"
          style={{ width: `${(data.area / 17098242) * 100}%` }}
        />
      </div>
      {details && (
        <div className="bottom">
          <p className="capital">Capital: {data.capital}</p>
          <p className="region">Region: {data.subregion}</p>
        </div>
      )}
    </div>
  );
};

export default CountryInfo;
