import React, { useState, useEffect } from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";


export default function Card(props) {
  let navigate = useNavigate();
  const { id, name,Address,pincode } = props;
  return (
    <div className="Card-Cont">
      <span className="Card-Name">Name:    {name}</span>
      <span className="Card-Address">Address:   {Address}</span>
      <span className="Card-Pincode">Pincode:  {pincode}</span>
    </div>
  );
}
