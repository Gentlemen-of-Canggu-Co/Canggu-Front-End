import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function AddToplist() {
   
const [title, setTitle] = useState("")
const [introText, setIntroText] = useState("")
const [firstPlaceSpotId, setFirstPlaceSpotId] = useState("")
const [firstPlaceConsumableId, setFirstPlaceConsumableId] = useState("")
const [firstPlaceText, setFirstPlaceText] = useState("")
const [secondPlaceSpotId, setSecondPlaceSpotId] = useState("")
const [secondPlaceConsumableId, setSecondPlaceConsumableId] = useState("")
const [secondPlaceText, setSecondPlaceText] = useState("")
const [thirdPlaceSpotId, setThirdPlaceSpotId] = useState("")
const [thirdPlaceConsumableId, setThirdPlaceConsumableId] = useState("")
const [thirdPlaceText, setThirdPlaceText] = useState("")
const [fourthPlaceSpotId, setFourthPlaceSpotId] = useState("")
const [fourthPlaceConsumableId, setFourthPlaceConsumableId] = useState("")
const [fourthPlaceText, setFourthPlaceText] = useState("")
const [fifthPlaceSpotId, setFifthPlaceSpotId] = useState("")
const [fifthPlaceConsumableId, setFifthPlaceConsumableId] = useState("")
const [fifthPlaceText, setFifthPlaceText] = useState("")
const [sixthPlaceSpotId, setSixthPlaceSpotId] = useState("")
const [sixthPlaceConsumableId, setSixthPlaceConsumableId] = useState("")
const [sixthPlaceText, setSixthPlaceText] = useState("")
const [seventhPlaceSpotId, setSeventhPlaceSpotId] = useState("")
const [seventhPlaceConsumableId, setSeventhPlaceConsumableId] = useState("")
const [seventhPlaceText, setSeventhPlaceText] = useState("")
const [eigthPlaceSpotId, setEigthPlaceSpotId] = useState("")
const [eigthPlaceConsumableId, setEigthPlaceConsumableId] = useState("")
const [eigthPlaceText, setEigthPlaceText] = useState("")
const [ninthPlaceSpotId, setNinthPlaceSpotId] = useState("")
const [ninthPlaceConsumableId, setNinthPlaceConsumableId] = useState("")
const [ninthPlaceText, setNinthPlaceText] = useState("")
const [tenthPlaceSpotId, setTenthPlaceSpotId] = useState("")
const [tenthPlaceConsumableId, setTenthPlaceConsumableId] = useState("")
const [tenthPlaceText, setTenthPlaceText] = useState("")

const navigate = useNavigate();
  const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5005"

const handleSubmit = (e) => {
    e.preventDefault()

    const newToplist = {
        title,
        introText,
        firstPlaceSpotId,
        firstPlaceConsumableId,
        firstPlaceText,
        secondPlaceSpotId,
        secondPlaceConsumableId,
        secondPlaceText,
        thirdPlaceSpotId,
        thirdPlaceConsumableId,
        thirdPlaceText,
        fourthPlaceSpotId,
        fourthPlaceConsumableId,
        fourthPlaceText,
        fifthPlaceSpotId,
        fifthPlaceConsumableId,
        fifthPlaceText,
        sixthPlaceSpotId,
        sixthPlaceConsumableId,
        sixthPlaceText,
        seventhPlaceSpotId,
        seventhPlaceConsumableId,
        seventhPlaceText,
        eigthPlaceSpotId,
        eigthPlaceConsumableId,
        eigthPlaceText,
        ninthPlaceSpotId,
        ninthPlaceConsumableId,
        ninthPlaceText,
        tenthPlaceSpotId,
        tenthPlaceConsumableId,
        tenthPlaceText
    }

    axios.post(`${API_URL}/api/toplists`, newToplist).then((response) => {
        console.log(response.data)
        navigate(`/toplists/${response.data._id}`)
    })
}

return (
    <div>
        <div>
            <h3>Add new Toplist</h3>

            <form onSubmit={handleSubmit}>
                <label>Title</label>
                <input  
                    type="text"
                    name="title"
                    value={title}
                    onChange={(event) => setTitle(event.target.value)}
            />
             <br />
             <label>Intro Text</label>
                <input  
                    type="text"
                    name="introText"
                    value={introText}
                    onChange={(event) => setIntroText(event.target.value)}
            />
             <br />
             <label>firstPlaceSpotId</label>
                <input  
                    type="text"
                    name="firstPlaceSpotId"
                    value={firstPlaceSpotId}
                    onChange={(event) => setFirstPlaceSpotId(event.target.value)}
            />
             <br />
             <label>firstPlaceConsumableId</label>
                <input  
                    type="text"
                    name="firstPlaceConsumableId"
                    value={firstPlaceConsumableId}
                    onChange={(event) => setFirstPlaceConsumableId(event.target.value)}
            />
             <br />
             <label>firstPlaceText</label>
                <input  
                    type="text"
                    name="firstPlaceText"
                    value={firstPlaceText}
                    onChange={(event) => setFirstPlaceText(event.target.value)}
            />
             <br />
             <label>secondPlaceSpotId</label>
                <input  
                    type="text"
                    name="secondPlaceSpotId"
                    value={secondPlaceSpotId}
                    onChange={(event) => setSecondPlaceSpotId(event.target.value)}
            />
             <br />
             <label>secondPlaceConsumableId</label>
                <input  
                    type="text"
                    name="secondPlaceConsumableId"
                    value={secondPlaceConsumableId}
                    onChange={(event) => setSecondPlaceConsumableId(event.target.value)}
            />
             <br />
             <label>secondPlaceText</label>
                <input  
                    type="text"
                    name="secondPlaceText"
                    value={secondPlaceText}
                    onChange={(event) => setSecondPlaceText(event.target.value)}
            />
             <br />
             <label>thirdPlaceSpotId</label>
                <input  
                    type="text"
                    name="thirdPlaceSpotId"
                    value={thirdPlaceSpotId}
                    onChange={(event) => setThirdPlaceSpotId(event.target.value)}
            />
             <br />
             <label>thirdPlaceConsumableId</label>
                <input  
                    type="text"
                    name="thirdPlaceConsumableId"
                    value={thirdPlaceConsumableId}
                    onChange={(event) => setThirdPlaceConsumableId(event.target.value)}
            />
             <br />
             <label>thirdPlaceText</label>
                <input  
                    type="text"
                    name="thirdPlaceText"
                    value={thirdPlaceText}
                    onChange={(event) => setThirdPlaceText(event.target.value)}
            />
             <br />
             <label>fourthPlaceSpotId</label>
                <input  
                    type="text"
                    name="fourthPlaceSpotId"
                    value={fourthPlaceSpotId}
                    onChange={(event) => setFourthPlaceSpotId(event.target.value)}
            />
             <br />
             <label>fourthPlaceConsumableId</label>
                <input  
                    type="text"
                    name="fourthPlaceConsumableId"
                    value={fourthPlaceConsumableId}
                    onChange={(event) => setFourthPlaceConsumableId(event.target.value)}
            />
             <br />
             <label>fourthPlaceText</label>
                <input  
                    type="text"
                    name="fourthPlaceText"
                    value={fourthPlaceText}
                    onChange={(event) => setFourthPlaceText(event.target.value)}
            />
             <br />
             <label>fifthPlaceSpotId</label>
                <input  
                    type="text"
                    name="fifthPlaceSpotId"
                    value={fifthPlaceSpotId}
                    onChange={(event) => setFifthPlaceSpotId(event.target.value)}
            />
             <br />
             <label>fifthPlaceConsumableId</label>
                <input  
                    type="text"
                    name="fifthPlaceConsumableId"
                    value={fifthPlaceConsumableId}
                    onChange={(event) => setFifthPlaceConsumableId(event.target.value)}
            />
             <br />
             <label>fifthPlaceText</label>
                <input  
                    type="text"
                    name="fifthPlaceText"
                    value={fifthPlaceText}
                    onChange={(event) => setFifthPlaceText(event.target.value)}
            />
             <br />
             <label>sixthPlaceSpotId</label>
                <input  
                    type="text"
                    name="sixthPlaceSpotId"
                    value={sixthPlaceSpotId}
                    onChange={(event) => setSixthPlaceSpotId(event.target.value)}
            />
             <br />
             <label>sixthPlaceConsumableId</label>
                <input  
                    type="text"
                    name="sixthPlaceConsumableId"
                    value={sixthPlaceConsumableId}
                    onChange={(event) => setSixthPlaceConsumableId(event.target.value)}
            />
             <br />
             <label>sixthPlaceText</label>
                <input  
                    type="text"
                    name="sixthPlaceText"
                    value={sixthPlaceText}
                    onChange={(event) => setSixthPlaceText(event.target.value)}
            />
             <br />
             <label>seventhPlaceSpotId</label>
                <input  
                    type="text"
                    name="seventhPlaceSpotId"
                    value={seventhPlaceSpotId}
                    onChange={(event) => setSeventhPlaceSpotId(event.target.value)}
            />
             <br />
             <label>seventhPlaceConsumableId</label>
                <input  
                    type="text"
                    name="seventhPlaceConsumableId"
                    value={seventhPlaceConsumableId}
                    onChange={(event) => setSeventhPlaceConsumableId(event.target.value)}
            />
             <br />
             <label>seventhPlaceText</label>
                <input  
                    type="text"
                    name="seventhPlaceText"
                    value={seventhPlaceText}
                    onChange={(event) => setSeventhPlaceText(event.target.value)}
            />
             <br />
             <label>eigthPlaceSpotId</label>
                <input  
                    type="text"
                    name="eigthPlaceSpotId"
                    value={eigthPlaceSpotId}
                    onChange={(event) => setEigthPlaceSpotId(event.target.value)}
            />
             <br />
             <label>eigthPlaceConsumableId</label>
                <input  
                    type="text"
                    name="eigthPlaceConsumableId"
                    value={eigthPlaceConsumableId}
                    onChange={(event) => setEigthPlaceConsumableId(event.target.value)}
            />
             <br />
             <label>eigthPlaceText</label>
                <input  
                    type="text"
                    name="eigthPlaceText"
                    value={eigthPlaceText}
                    onChange={(event) => setEigthPlaceText(event.target.value)}
            />
             <br />
             <label>ninthPlaceSpotId</label>
                <input  
                    type="text"
                    name="ninthPlaceSpotId"
                    value={ninthPlaceSpotId}
                    onChange={(event) => setNinthPlaceSpotId(event.target.value)}
            />
             <br />
             <label>ninthPlaceConsumableId</label>
                <input  
                    type="text"
                    name="ninthPlaceConsumableId"
                    value={ninthPlaceConsumableId}
                    onChange={(event) => setNinthPlaceConsumableId(event.target.value)}
            />
             <br />
             <label>ninthPlaceText</label>
                <input  
                    type="text"
                    name="ninthPlaceText"
                    value={ninthPlaceText}
                    onChange={(event) => setNinthPlaceText(event.target.value)}
            />
             <br />
             <label>tenthPlaceSpotId</label>
                <input  
                    type="text"
                    name="tenthPlaceSpotId"
                    value={tenthPlaceSpotId}
                    onChange={(event) => setTenthPlaceSpotId(event.target.value)}
            />
             <br />
             <label>tenthPlaceConsumableId</label>
                <input  
                    type="text"
                    name="tenthPlaceConsumableId"
                    value={tenthPlaceConsumableId}
                    onChange={(event) => setTenthPlaceConsumableId(event.target.value)}
            />
             <br />
             <label>tenthPlaceText</label>
                <input  
                    type="text"
                    name="tenthPlaceText"
                    value={tenthPlaceText}
                    onChange={(event) => setTenthPlaceText(event.target.value)}
            />
             <br />
             <button type="submit" className="btn btn-success">Add new Spot</button>

            </form>
        </div>
    </div>
)

}

export default AddToplist;
