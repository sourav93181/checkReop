import React from "react";
import { useState } from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";
import { sigupUserApiCall } from "./api";


export default function SingleScreen(props) {
  let navigate = useNavigate();
  const [data, setData] = useState({ name: "", Address: "", pincode: "", });
  
  async function signupUser() {
    let res = await sigupUserApiCall(data);
    if (res.state) {
      console.log(res);
      setData({ name: "", address: "", pincode: 0,
      });
    } else {
      console.log("error")
    }
  }

  return (
    <div className="form-cont">
      <input
        id="id-username"
        name="user-name"
        type="text"
        placeholder="name"
        className="input-box-text"
        required
        onChange={(e) => setData({ ...data, name: e.target.value })}
      />
      <input
        id="id-username"
        name="user-name"
        type="text"
        placeholder="address"
        className="input-box-text"
        required
        onChange={(e) => setData({ ...data, Address: e.target.value })}
      />
      <input
        id="id-username"
        name="user-name"
        type="text"
        placeholder="pincode"
        className="input-box-text"
        required
        onChange={(e) => setData({ ...data, pincode: e.target.value })}
      />
      <input
        type="submit"
        
        value="Submit"
        className="form-button"
        onClick={() => {
          signupUser();
          window.location.reload(false);
        }}
      />
      <button
        type="button"
        onClick={() => {
          navigate("/detail");
        }}
        className="form-button"
      >
        Alluser
      </button>
    </div>
  );
}
