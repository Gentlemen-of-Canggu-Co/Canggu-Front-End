import { useState, useEffect, useContext } from "react";
import axios from "axios";
import ToplistCard from "../components/ToplistList/ToplistCard"
import { AuthContext } from "../context/auth.context";
import "../App.css"
import Footer from "./Footer";
import "../components/SpotList/spotlist.css"
import { Typography } from "@mui/material";

function ToplistList() {
    const [toplists, setToplists] = useState([])
    const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5005";
    const { isLoggedIn } = useContext(AuthContext)

    useEffect(() => {
        axios.get(`${API_URL}/api/toplists`)
            .then((response) => {
                setToplists(response.data)
            })
    }, [])

    return(
       
       <div className="footerWrap">
       <div>
            <h1 style={{fontFamily: "Teko", fontSize: "50px", paddingLeft: "5vw", paddingRight: "5vw", marginTop: "10px", marginBottom: "0"}}>The Canggu Toplists</h1>
            <Typography
        component={"div"}
        sx={{ fontFamily: "Teko", fontSize: "25px" }}
        style={{ paddingLeft: "5vw", paddingRight: "5vw", display: "flex", justifyContent:"center"}}
      >
        Find your next Café or restaurant by browsing through these carefully hand-picked selections of amazing spots.
      </Typography>            <ToplistCard toplists={toplists} />
        </div>

        <div><Footer /></div>
</div>
    )

}

export default ToplistList