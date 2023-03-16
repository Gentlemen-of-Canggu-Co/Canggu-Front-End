import { useState, useEffect, useContext } from "react";
import {Link} from 'react-router-dom';
import axios from "axios";
import ToplistCard from "../components/ToplistList/ToplistCard"
import { AuthContext } from "../context/auth.context";
import "../App.css"

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
        <div>
            <h1>The Canggu Toplists</h1>
            <ToplistCard toplists={toplists} />
        </div>
    )

}

export default ToplistList