import React, { useState, useEffect } from "react";
import Card from "../../components/custom/Card";
import { getDetailApiCall, SerachAPIcall } from "./api";
import { useNavigate } from "react-router-dom";
import "./style.css";

export default function DetailScreen(props) {
  let navigate = useNavigate();
  const [Data, setData] = useState([]);
  async function DetailUser() {
    let res = await getDetailApiCall();
    console.log("ok")
    console.log(res);
    if (res.state) {
      setData(res.data.data);
    } else {
      console.log("error")
    }
  }
  useEffect(() => {
    DetailUser();
  }, []);

const [DataSearch, setDataSearch] = useState({
  entry: "",
});
  const [DataRet, setDataRet] = useState([]);
async function SearchUser() {
  let res = await SerachAPIcall(DataSearch);
  if (res.state) {
    setDataRet(res.data.data)
    setDataSearch({ entry: "" });
  } else {
    console.log("error")
  }
}


  return (
    <div className="Detail-Comp">
      <button
        type="button"
        onClick={() => {
          navigate("/");
        }}
      >
        Insert New User
      </button>
      <span>
        <span>Display User</span>
        <input
          type="text"
          onChange={(e) =>
            setDataSearch({ ...DataSearch, entry: e.target.value })
          }
        />
        <button
          type="button"
          onClick={() => {
            SearchUser();
            // window.location.reload(false);
          }}
        >
          Search
        </button>
      </span>
      {DataRet.length === 0
        ? Data.map((item) => {
            return (
              <Card
                name={item.name}
                user_id={item.user_id}
                Address={item.Address}
                pincode={item.pincode}
              />
            );
          })
        : DataRet.map((item) => {
            return (
              <Card
                name={item.name}
                user_id={item.user_id}
                Address={item.Address}
                pincode={item.pincode}
              />
            );
          })}
    </div>
  );
}
