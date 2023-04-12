import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

function EditToplist() {
  const navigate = useNavigate();
  const { toplistId } = useParams();
  const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5005";

const [title, setTitle] = useState("")
const [heroImage, setHeroImage] = useState("")
const [introText, setIntroText] = useState("")
const [firstPlaceId, setFirstPlaceId] = useState("")
const [firstPlaceImage, setFirstPlaceImage] = useState("")
const [firstPlaceName, setFirstPlaceName] = useState("")
const [firstPlaceTagline, setFirstPlaceTagline] = useState("")
const [firstPlaceDescription, setFirstPlaceDescription] = useState("")
const [firstPlacePriceLevel, setFirstPlacePriceLevel] = useState("")
const [firstPlaceCoffeeRating, setFirstPlaceCoffeeRating] = useState("")
const [firstPlaceFoodRating, setFirstPlaceFoodRating] = useState("")
const [firstPlaceAmbienceRating, setFirstPlaceAmbienceRating] = useState("")
const [firstPlaceConsumableTitle, setFirstPlaceConsumableTitle] = useState("")
const [firstPlaceConsumableTagline, setFirstPlaceConsumableTagline] = useState("")
const [firstPlaceConsumablePrice, setFirstPlaceConsumablePrice] = useState("")
const [firstPlaceConsumableRating, setFirstPlaceConsumableRating] = useState("")
const [firstPlaceConsumableImage, setFirstPlaceConsumableImage] = useState("")
const [secondPlaceId, setSecondPlaceId] = useState("")
const [secondPlaceImage, setSecondPlaceImage] = useState("")
const [secondPlaceName, setSecondPlaceName] = useState("")
const [secondPlaceTagline, setSecondPlaceTagline] = useState("")
const [secondPlaceDescription, setSecondPlaceDescription] = useState("")
const [secondPlacePriceLevel, setSecondPlacePriceLevel] = useState("")
const [secondPlaceCoffeeRating, setSecondPlaceCoffeeRating] = useState("")
const [secondPlaceFoodRating, setSecondPlaceFoodRating] = useState("")
const [secondPlaceAmbienceRating, setSecondPlaceAmbienceRating] = useState("")
const [secondPlaceConsumableTitle, setSecondPlaceConsumableTitle] = useState("")
const [secondPlaceConsumableTagline, setSecondPlaceConsumableTagline] = useState("")
const [secondPlaceConsumablePrice, setSecondPlaceConsumablePrice] = useState("")
const [secondPlaceConsumableRating, setSecondPlaceConsumableRating] = useState("")
const [secondPlaceConsumableImage, setSecondPlaceConsumableImage] = useState("")
const [thirdPlaceId, setThirdPlaceId] = useState("")
const [thirdPlaceImage, setThirdPlaceImage] = useState("")
const [thirdPlaceName, setThirdPlaceName] = useState("")
const [thirdPlaceTagline, setThirdPlaceTagline] = useState("")
const [thirdPlaceDescription, setThirdPlaceDescription] = useState("")
const [thirdPlacePriceLevel, setThirdPlacePriceLevel] = useState("")
const [thirdPlaceCoffeeRating, setThirdPlaceCoffeeRating] = useState("")
const [thirdPlaceFoodRating, setThirdPlaceFoodRating] = useState("")
const [thirdPlaceAmbienceRating, setThirdPlaceAmbienceRating] = useState("")
const [thirdPlaceConsumableTitle, setThirdPlaceConsumableTitle] = useState("")
const [thirdPlaceConsumableTagline, setThirdPlaceConsumableTagline] = useState("")
const [thirdPlaceConsumablePrice, setThirdPlaceConsumablePrice] = useState("")
const [thirdPlaceConsumableRating, setThirdPlaceConsumableRating] = useState("")
const [thirdPlaceConsumableImage, setThirdPlaceConsumableImage] = useState("")
const [fourthPlaceId, setFourthPlaceId] = useState("")
const [fourthPlaceImage, setFourthPlaceImage] = useState("")
const [fourthPlaceName, setFourthPlaceName] = useState("")
const [fourthPlaceTagline, setFourthPlaceTagline] = useState("")
const [fourthPlaceDescription, setFourthPlaceDescription] = useState("")
const [fourthPlacePriceLevel, setFourthPlacePriceLevel] = useState("")
const [fourthPlaceCoffeeRating, setFourthPlaceCoffeeRating] = useState("")
const [fourthPlaceFoodRating, setFourthPlaceFoodRating] = useState("")
const [fourthPlaceAmbienceRating, setFourthPlaceAmbienceRating] = useState("")
const [fourthPlaceConsumableTitle, setFourthPlaceConsumableTitle] = useState("")
const [fourthPlaceConsumableTagline, setFourthPlaceConsumableTagline] = useState("")
const [fourthPlaceConsumablePrice, setFourthPlaceConsumablePrice] = useState("")
const [fourthPlaceConsumableRating, setFourthPlaceConsumableRating] = useState("")
const [fourthPlaceConsumableImage, setFourthPlaceConsumableImage] = useState("")
const [fifthPlaceId, setFifthPlaceId] = useState("")
const [fifthPlaceImage, setFifthPlaceImage] = useState("")
const [fifthPlaceName, setFifthPlaceName] = useState("")
const [fifthPlaceTagline, setFifthPlaceTagline] = useState("")
const [fifthPlaceDescription, setFifthPlaceDescription] = useState("")
const [fifthPlacePriceLevel, setFifthPlacePriceLevel] = useState("")
const [fifthPlaceCoffeeRating, setFifthPlaceCoffeeRating] = useState("")
const [fifthPlaceFoodRating, setFifthPlaceFoodRating] = useState("")
const [fifthPlaceAmbienceRating, setFifthPlaceAmbienceRating] = useState("")
const [fifthPlaceConsumableTitle, setFifthPlaceConsumableTitle] = useState("")
const [fifthPlaceConsumableTagline, setFifthPlaceConsumableTagline] = useState("")
const [fifthPlaceConsumablePrice, setFifthPlaceConsumablePrice] = useState("")
const [fifthPlaceConsumableRating, setFifthPlaceConsumableRating] = useState("")
const [fifthPlaceConsumableImage, setFifthPlaceConsumableImage] = useState("")
const [sixthPlaceId, setSixthPlaceId] = useState("")
const [sixthPlaceImage, setSixthPlaceImage] = useState("")
const [sixthPlaceName, setSixthPlaceName] = useState("")
const [sixthPlaceTagline, setSixthPlaceTagline] = useState("")
const [sixthPlaceDescription, setSixthPlaceDescription] = useState("")
const [sixthPlacePriceLevel, setSixthPlacePriceLevel] = useState("")
const [sixthPlaceCoffeeRating, setSixthPlaceCoffeeRating] = useState("")
const [sixthPlaceFoodRating, setSixthPlaceFoodRating] = useState("")
const [sixthPlaceAmbienceRating, setSixthPlaceAmbienceRating] = useState("")
const [sixthPlaceConsumableTitle, setSixthPlaceConsumableTitle] = useState("")
const [sixthPlaceConsumableTagline, setSixthPlaceConsumableTagline] = useState("")
const [sixthPlaceConsumablePrice, setSixthPlaceConsumablePrice] = useState("")
const [sixthPlaceConsumableRating, setSixthPlaceConsumableRating] = useState("")
const [sixthPlaceConsumableImage, setSixthPlaceConsumableImage] = useState("")
const [seventhPlaceId, setSeventhPlaceId] = useState("")
const [seventhPlaceImage, setSeventhPlaceImage] = useState("")
const [seventhPlaceName, setSeventhPlaceName] = useState("")
const [seventhPlaceTagline, setSeventhPlaceTagline] = useState("")
const [seventhPlaceDescription, setSeventhPlaceDescription] = useState("")
const [seventhPlacePriceLevel, setSeventhPlacePriceLevel] = useState("")
const [seventhPlaceCoffeeRating, setSeventhPlaceCoffeeRating] = useState("")
const [seventhPlaceFoodRating, setSeventhPlaceFoodRating] = useState("")
const [seventhPlaceAmbienceRating, setSeventhPlaceAmbienceRating] = useState("")
const [seventhPlaceConsumableTitle, setSeventhPlaceConsumableTitle] = useState("")
const [seventhPlaceConsumableTagline, setSeventhPlaceConsumableTagline] = useState("")
const [seventhPlaceConsumablePrice, setSeventhPlaceConsumablePrice] = useState("")
const [seventhPlaceConsumableRating, setSeventhPlaceConsumableRating] = useState("")
const [seventhPlaceConsumableImage, setSeventhPlaceConsumableImage] = useState("")
const [eigthPlaceId, setEigthPlaceId] = useState("")
const [eigthPlaceImage, setEigthPlaceImage] = useState("")
const [eigthPlaceName, setEigthPlaceName] = useState("")
const [eigthPlaceTagline, setEigthPlaceTagline] = useState("")
const [eigthPlaceDescription, setEigthPlaceDescription] = useState("")
const [eigthPlacePriceLevel, setEigthPlacePriceLevel] = useState("")
const [eigthPlaceCoffeeRating, setEigthPlaceCoffeeRating] = useState("")
const [eigthPlaceFoodRating, setEigthPlaceFoodRating] = useState("")
const [eigthPlaceAmbienceRating, setEigthPlaceAmbienceRating] = useState("")
const [eigthPlaceConsumableTitle, setEigthPlaceConsumableTitle] = useState("")
const [eigthPlaceConsumableTagline, setEigthPlaceConsumableTagline] = useState("")
const [eigthPlaceConsumablePrice, setEigthPlaceConsumablePrice] = useState("")
const [eigthPlaceConsumableRating, setEigthPlaceConsumableRating] = useState("")
const [eigthPlaceConsumableImage, setEigthPlaceConsumableImage] = useState("")
const [ninthPlaceId, setNinthPlaceId] = useState("")
const [ninthPlaceImage, setNinthPlaceImage] = useState("")
const [ninthPlaceName, setNinthPlaceName] = useState("")
const [ninthPlaceTagline, setNinthPlaceTagline] = useState("")
const [ninthPlaceDescription, setNinthPlaceDescription] = useState("")
const [ninthPlacePriceLevel, setNinthPlacePriceLevel] = useState("")
const [ninthPlaceCoffeeRating, setNinthPlaceCoffeeRating] = useState("")
const [ninthPlaceFoodRating, setNinthPlaceFoodRating] = useState("")
const [ninthPlaceAmbienceRating, setNinthPlaceAmbienceRating] = useState("")
const [ninthPlaceConsumableTitle, setNinthPlaceConsumableTitle] = useState("")
const [ninthPlaceConsumableTagline, setNinthPlaceConsumableTagline] = useState("")
const [ninthPlaceConsumablePrice, setNinthPlaceConsumablePrice] = useState("")
const [ninthPlaceConsumableRating, setNinthPlaceConsumableRating] = useState("")
const [ninthPlaceConsumableImage, setNinthPlaceConsumableImage] = useState("")
const [tenthPlaceId, setTenthPlaceId] = useState("")
const [tenthPlaceImage, setTenthPlaceImage] = useState("")
const [tenthPlaceName, setTenthPlaceName] = useState("")
const [tenthPlaceTagline, setTenthPlaceTagline] = useState("")
const [tenthPlaceDescription, setTenthPlaceDescription] = useState("")
const [tenthPlacePriceLevel, setTenthPlacePriceLevel] = useState("")
const [tenthPlaceCoffeeRating, setTenthPlaceCoffeeRating] = useState("")
const [tenthPlaceFoodRating, setTenthPlaceFoodRating] = useState("")
const [tenthPlaceAmbienceRating, setTenthPlaceAmbienceRating] = useState("")
const [tenthPlaceConsumableTitle, setTenthPlaceConsumableTitle] = useState("")
const [tenthPlaceConsumableTagline, setTenthPlaceConsumableTagline] = useState("")
const [tenthPlaceConsumablePrice, setTenthPlaceConsumablePrice] = useState("")
const [tenthPlaceConsumableRating, setTenthPlaceConsumableRating] = useState("")
const [tenthPlaceConsumableImage, setTenthPlaceConsumableImage] = useState("")


 

  const handleSubmit = (e) => {
    e.preventDefault();

    const editedToplist = {
        title,
        heroImage,
        introText,
        firstPlaceId,
        firstPlaceImage,
        firstPlaceName,
        firstPlaceTagline,
        firstPlaceDescription,
        firstPlacePriceLevel,
        firstPlaceCoffeeRating,
        firstPlaceFoodRating,
        firstPlaceAmbienceRating,
        firstPlaceConsumableTitle,
        firstPlaceConsumableTagline,
        firstPlaceConsumablePrice,
        firstPlaceConsumableRating,
        firstPlaceConsumableImage,
        secondPlaceId,
        secondPlaceImage,
        secondPlaceName,
        secondPlaceTagline,
        secondPlaceDescription,
        secondPlacePriceLevel,
        secondPlaceCoffeeRating,
        secondPlaceFoodRating,
        secondPlaceAmbienceRating,
        secondPlaceConsumableTitle,
        secondPlaceConsumableTagline,
        secondPlaceConsumablePrice,
        secondPlaceConsumableRating,
        secondPlaceConsumableImage,
        thirdPlaceId,
        thirdPlaceImage,
        thirdPlaceName,
        thirdPlaceTagline,
        thirdPlaceDescription,
        thirdPlacePriceLevel,
        thirdPlaceCoffeeRating,
        thirdPlaceFoodRating,
        thirdPlaceAmbienceRating,
        thirdPlaceConsumableTitle,
        thirdPlaceConsumableTagline,
        thirdPlaceConsumablePrice,
        thirdPlaceConsumableRating,
        thirdPlaceConsumableImage,
        fourthPlaceId,
        fourthPlaceImage,
        fourthPlaceName,
        fourthPlaceTagline,
        fourthPlaceDescription,
        fourthPlacePriceLevel,
        fourthPlaceCoffeeRating,
        fourthPlaceFoodRating,
        fourthPlaceAmbienceRating,
        fourthPlaceConsumableTitle,
        fourthPlaceConsumableTagline,
        fourthPlaceConsumablePrice,
        fourthPlaceConsumableRating,
        fourthPlaceConsumableImage,
        fifthPlaceId,
        fifthPlaceImage,
        fifthPlaceName,
        fifthPlaceTagline,
        fifthPlaceDescription,
        fifthPlacePriceLevel,
        fifthPlaceCoffeeRating,
        fifthPlaceFoodRating,
        fifthPlaceAmbienceRating,
        fifthPlaceConsumableTitle,
        fifthPlaceConsumableTagline,
        fifthPlaceConsumablePrice,
        fifthPlaceConsumableRating,
        fifthPlaceConsumableImage,
        sixthPlaceId,
        sixthPlaceImage,
        sixthPlaceName,
        sixthPlaceTagline,
        sixthPlaceDescription,
        sixthPlacePriceLevel,
        sixthPlaceCoffeeRating,
        sixthPlaceFoodRating,
        sixthPlaceAmbienceRating,
        sixthPlaceConsumableTitle,
        sixthPlaceConsumableTagline,
        sixthPlaceConsumablePrice,
        sixthPlaceConsumableRating,
        sixthPlaceConsumableImage,
        seventhPlaceId,
        seventhPlaceImage,
        seventhPlaceName,
        seventhPlaceTagline,
        seventhPlaceDescription,
        seventhPlacePriceLevel,
        seventhPlaceCoffeeRating,
        seventhPlaceFoodRating,
        seventhPlaceAmbienceRating,
        seventhPlaceConsumableTitle,
        seventhPlaceConsumableTagline,
        seventhPlaceConsumablePrice,
        seventhPlaceConsumableRating,
        seventhPlaceConsumableImage,
        eigthPlaceId,
        eigthPlaceImage,
        eigthPlaceName,
        eigthPlaceTagline,
        eigthPlaceDescription,
        eigthPlacePriceLevel,
        eigthPlaceCoffeeRating,
        eigthPlaceFoodRating,
        eigthPlaceAmbienceRating,
        eigthPlaceConsumableTitle,
        eigthPlaceConsumableTagline,
        eigthPlaceConsumablePrice,
        eigthPlaceConsumableRating,
        eigthPlaceConsumableImage,
        ninthPlaceId,
        ninthPlaceImage,
        ninthPlaceName,
        ninthPlaceTagline,
        ninthPlaceDescription,
        ninthPlacePriceLevel,
        ninthPlaceCoffeeRating,
        ninthPlaceFoodRating,
        ninthPlaceAmbienceRating,
        ninthPlaceConsumableTitle,
        ninthPlaceConsumableTagline,
        ninthPlaceConsumablePrice,
        ninthPlaceConsumableRating,
        ninthPlaceConsumableImage,
        tenthPlaceId,
        tenthPlaceImage,
        tenthPlaceName,
        tenthPlaceTagline,
        tenthPlaceDescription,
        tenthPlacePriceLevel,
        tenthPlaceCoffeeRating,
        tenthPlaceFoodRating,
        tenthPlaceAmbienceRating,
        tenthPlaceConsumableTitle,
        tenthPlaceConsumableTagline,
        tenthPlaceConsumablePrice,
        tenthPlaceConsumableRating,
        tenthPlaceConsumableImage
    };

    axios.put(`${API_URL}/api/toplists/${toplistId}`, editedToplist).then(() => {
      navigate(`/toplists/${toplistId}`);
    });
  };

  useEffect(() => {
    axios.get(`${API_URL}/api/toplists/${toplistId}`).then((response) => {
      setTitle(response.data.title);
      setHeroImage(response.data.heroImage)
      setIntroText(response.data.introText)
      setFirstPlaceId(response.data.firstPlaceId)
      setFirstPlaceImage(response.data.firstPlaceImage)
      setFirstPlaceName(response.data.firstPlaceName)
      setFirstPlaceTagline(response.data.firstPlaceTagline)
      setFirstPlaceDescription(response.data.firstPlaceDescription)
      setFirstPlacePriceLevel(response.data.setFirstPlacePriceLevel)
      setFirstPlaceCoffeeRating(response.data.firstPlaceCoffeeRating)
      setFirstPlaceFoodRating(response.data.firstPlaceFoodRating)
      setFirstPlaceAmbienceRating(response.data.firstPlaceAmbienceRating)
      setFirstPlaceConsumableTitle(response.data.firstPlaceConsumableTitle)
      setFirstPlaceConsumableTagline(response.data.firstPlaceConsumableTagline)
      setFirstPlaceConsumablePrice(response.data.firstPlaceConsumablePrice)
      setFirstPlaceConsumableRating(response.data.firstPlaceConsumableRating)
      setFirstPlaceConsumableImage(response.data.firstPlaceConsumableImage)
      setSecondPlaceId(response.data.secondPlaceId)
      setSecondPlaceImage(response.data.secondPlaceImage)
      setSecondPlaceName(response.data.secondPlaceName)
      setSecondPlaceTagline(response.data.secondPlaceTagline)
      setSecondPlaceDescription(response.data.secondPlaceDescription)
      setSecondPlacePriceLevel(response.data.secondPlacePriceLevel)
      setSecondPlaceCoffeeRating(response.data.secondPlaceCoffeeRating)
      setSecondPlaceFoodRating(response.data.secondPlaceFoodRating)
      setSecondPlaceAmbienceRating(response.data.secondPlaceAmbienceRating)
      setSecondPlaceConsumableTitle(response.data.secondPlaceConsumableTitle)
      setSecondPlaceConsumableTagline(response.data.secondPlaceConsumableTagline)
      setSecondPlaceConsumablePrice(response.data.secondPlaceConsumablePrice)
      setSecondPlaceConsumableRating(response.data.secondPlaceConsumableRating)
      setSecondPlaceConsumableImage(response.data.secondPlaceConsumableImage)
      setThirdPlaceId(response.data.thirdPlaceId)
      setThirdPlaceImage(response.data.thirdPlaceImage)
      setThirdPlaceName(response.data.thirdPlaceName)
      setThirdPlaceTagline(response.data.thirdPlaceTagline)
      setThirdPlaceDescription(response.data.thirdPlaceDescription)
      setThirdPlacePriceLevel(response.data.thirdPlacePriceLevel)
      setThirdPlaceCoffeeRating(response.data.thirdPlaceCoffeeRating)
      setThirdPlaceFoodRating(response.data.thirdPlaceFoodRating)
      setThirdPlaceAmbienceRating(response.data.thirdPlaceAmbienceRating)
      setThirdPlaceConsumableTitle(response.data.thirdPlaceConsumableTitle)
      setThirdPlaceConsumableTagline(response.data.thirdPlaceConsumableTagline)
      setThirdPlaceConsumablePrice(response.data.thirdPlaceConsumablePrice)
      setThirdPlaceConsumableRating(response.data.thirdPlaceConsumableRating)
      setThirdPlaceConsumableImage(response.data.thirdPlaceConsumableImage)
      setFourthPlaceId(response.data.fourthPlaceId)
      setFourthPlaceImage(response.data.fourthPlaceImage)
      setFourthPlaceName(response.data.fourthPlaceName)
      setFourthPlaceTagline(response.data.fourthPlaceTagline)
      setFourthPlaceDescription(response.data.fourthPlaceDescription)
      setFourthPlacePriceLevel(response.data.fourthPlacePriceLevel)
      setFourthPlaceCoffeeRating(response.data.fourthPlaceCoffeeRating)
      setFourthPlaceFoodRating(response.data.fourthPlaceFoodRating)
      setFourthPlaceAmbienceRating(response.data.fourthPlaceAmbienceRating)
      setFourthPlaceConsumableTitle(response.data.fourthPlaceConsumableTitle)
      setFourthPlaceConsumableTagline(response.data.fourthPlaceConsumableTagline)
      setFourthPlaceConsumablePrice(response.data.fourthPlaceConsumablePrice)
      setFourthPlaceConsumableRating(response.data.fourthPlaceConsumableRating)
      setFourthPlaceConsumableImage(response.data.fourthPlaceConsumableImage)
      setFifthPlaceId(response.data.fifthPlaceId)
      setFifthPlaceImage(response.data.fifthPlaceImage)
      setFifthPlaceName(response.data.fifthPlaceName)
      setFifthPlaceTagline(response.data.fifthPlaceTagline)
      setFifthPlaceDescription(response.data.fifthPlaceDescription)
      setFifthPlacePriceLevel(response.data.fifthPlacePriceLevel)
      setFifthPlaceCoffeeRating(response.data.fifthPlaceCoffeeRating)
      setFifthPlaceFoodRating(response.data.fifthPlaceFoodRating)
      setFifthPlaceAmbienceRating(response.data.fifthPlaceAmbienceRating)
      setFifthPlaceConsumableTitle(response.data.fifthPlaceConsumableTitle)
      setFifthPlaceConsumableTagline(response.data.fifthPlaceConsumableTagline)
      setFifthPlaceConsumablePrice(response.data.fifthPlaceConsumablePrice)
      setFifthPlaceConsumableRating(response.data.fifthPlaceConsumableRating)
      setFifthPlaceConsumableImage(response.data.fifthPlaceConsumableImage)
      setSixthPlaceId(response.data.sixthPlaceId)
      setSixthPlaceImage(response.data.sixthPlaceImage)
      setSixthPlaceName(response.data.sixthPlaceName)
      setSixthPlaceTagline(response.data.sixthPlaceTagline)
      setSixthPlaceDescription(response.data.sixthPlaceDescription)
      setSixthPlacePriceLevel(response.data.sixthPlacePriceLevel)
      setSixthPlaceCoffeeRating(response.data.sixthPlaceCoffeeRating)
      setSixthPlaceFoodRating(response.data.sixthPlaceFoodRating)
      setSixthPlaceAmbienceRating(response.data.sixthPlaceAmbienceRating)
      setSixthPlaceConsumableTitle(response.data.sixthPlaceConsumableTitle)
      setSixthPlaceConsumableTagline(response.data.sixthPlaceConsumableTagline)
      setSixthPlaceConsumablePrice(response.data.sixthPlaceConsumablePrice)
      setSixthPlaceConsumableRating(response.data.sixthPlaceConsumableRating)
      setSixthPlaceConsumableImage(response.data.sixthPlaceConsumableImage)
      setSeventhPlaceId(response.data.seventhPlaceId)
      setSeventhPlaceImage(response.data.seventhPlaceImage)
      setSeventhPlaceName(response.data.seventhPlaceName)
      setSeventhPlaceTagline(response.data.seventhPlaceTagline)
      setSeventhPlaceDescription(response.data.seventhPlaceDescription)
      setSeventhPlacePriceLevel(response.data.seventhPlacePriceLevel)
      setSeventhPlaceCoffeeRating(response.data.seventhPlaceCoffeeRating)
      setSeventhPlaceFoodRating(response.data.seventhPlaceFoodRating)
      setSeventhPlaceAmbienceRating(response.data.seventhPlaceAmbienceRating)
      setSeventhPlaceConsumableTitle(response.data.seventhPlaceConsumableTitle)
      setSeventhPlaceConsumableTagline(response.data.seventhPlaceConsumableTagline)
      setSeventhPlaceConsumablePrice(response.data.seventhPlaceConsumablePrice)
      setSeventhPlaceConsumableRating(response.data.seventhPlaceConsumableRating)
      setSeventhPlaceConsumableImage(response.data.seventhPlaceConsumableImage)
      setEigthPlaceId(response.data.eigthPlaceId)
      setEigthPlaceImage(response.data.eigthPlaceImage)
      setEigthPlaceName(response.data.eigthPlaceName)
      setEigthPlaceTagline(response.data.eigthPlaceTagline)
      setEigthPlaceDescription(response.data.eigthPlaceDescription)
      setEigthPlacePriceLevel(response.data.eigthPlacePriceLevel)
      setEigthPlaceCoffeeRating(response.data.eigthPlaceCoffeeRating)
      setEigthPlaceFoodRating(response.data.eigthPlaceFoodRating)
      setEigthPlaceAmbienceRating(response.data.eigthPlaceAmbienceRating)
      setEigthPlaceConsumableTitle(response.data.eigthPlaceConsumableTitle)
      setEigthPlaceConsumableTagline(response.data.eigthPlaceConsumableTagline)
      setEigthPlaceConsumablePrice(response.data.eigthPlaceConsumablePrice)
      setEigthPlaceConsumableRating(response.data.eigthPlaceConsumableRating)
      setEigthPlaceConsumableImage(response.data.eigthPlaceConsumableImage)
      setNinthPlaceId(response.data.ninthPlaceId)
      setNinthPlaceImage(response.data.ninthPlaceImage)
      setNinthPlaceName(response.data.ninthPlaceName)
      setNinthPlaceTagline(response.data.ninthPlaceTagline)
      setNinthPlaceDescription(response.data.ninthPlaceDescription)
      setNinthPlacePriceLevel(response.data.ninthPlacePriceLevel)
      setNinthPlaceCoffeeRating(response.data.ninthPlaceCoffeeRating)
      setNinthPlaceFoodRating(response.data.ninthPlaceFoodRating)
      setNinthPlaceAmbienceRating(response.data.ninthPlaceAmbienceRating)
      setNinthPlaceConsumableTitle(response.data.ninthPlaceConsumableTitle)
      setNinthPlaceConsumableTagline(response.data.ninthPlaceConsumableTagline)
      setNinthPlaceConsumablePrice(response.data.ninthPlaceConsumablePrice)
      setNinthPlaceConsumableRating(response.data.ninthPlaceConsumableRating)
      setNinthPlaceConsumableImage(response.data.ninthPlaceConsumableImage)
      setTenthPlaceId(response.data.tenthPlaceId)
      setTenthPlaceImage(response.data.tenthPlaceImage)
      setTenthPlaceName(response.data.tenthPlaceName)
      setTenthPlaceTagline(response.data.tenthPlaceTagline)
      setTenthPlaceDescription(response.data.tenthPlaceDescription)
      setTenthPlacePriceLevel(response.data.tenthPlacePriceLevel)
      setTenthPlaceCoffeeRating(response.data.tenthPlaceCoffeeRating)
      setTenthPlaceFoodRating(response.data.tenthPlaceFoodRating)
      setTenthPlaceAmbienceRating(response.data.tenthPlaceAmbienceRating)
      setTenthPlaceConsumableTitle(response.data.tenthPlaceConsumableTitle)
      setTenthPlaceConsumableTagline(response.data.tenthPlaceConsumableTagline)
      setTenthPlaceConsumablePrice(response.data.tenthPlaceConsumablePrice)
      setTenthPlaceConsumableRating(response.data.tenthPlaceConsumableRating)
      setTenthPlaceConsumableImage(response.data.tenthPlaceConsumableImage)
      
      
    });
  }, [toplistId]);

  return (
    <div>
      <div>
        <h3>Edit Toplist</h3>
        <form onSubmit={handleSubmit}>
        <label>Toplist Title</label>
          <input
            type="text"
            name="title"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
          <br />
          <label>Title Image</label>
          <input
            type="text"
            name="heroImage"
            value={heroImage}
            onChange={(event) => setHeroImage(event.target.value)}
          />
          <br />
          <label>Introtext</label>
          <input
            type="text"
            name="introText"
            value={introText}
            onChange={(event) => setIntroText(event.target.value)}
          />
          <br />
<div style={{display: "flex"}}>

        <div>

          <label>First Place Id</label>
          <input
            type="text"
            name="firstPlaceId"
            value={firstPlaceId}
            onChange={(event) => setFirstPlaceId(event.target.value)}
          />
          <br />
          <label>1st Place Spotimage</label>
          <input
            type="text"
            name="firstPlaceImage"
            value={firstPlaceImage}
            onChange={(event) => setFirstPlaceImage(event.target.value)}
          />
          <br />
          <label>1st Place Name</label>
          <input
            type="text"
            name="firstPlaceName"
            value={firstPlaceName}
            onChange={(event) => setFirstPlaceName(event.target.value)}
          />
          <br />
          <label>1st Place Tagline</label>
          <input
            type="text"
            name="firstPlaceTagline"
            value={firstPlaceTagline}
            onChange={(event) => setFirstPlaceTagline(event.target.value)}
          />
          <br />
          <label>1st Place Description</label>
          <input
            type="text"
            name="firstPlaceDescription"
            value={firstPlaceDescription}
            onChange={(event) => setFirstPlaceDescription(event.target.value)}
          />
          <br />
          <label>1st Place Price Level</label>
          <input
            type="text"
            name="firstPlacePriceLevel"
            value={firstPlacePriceLevel}
            onChange={(event) => setFirstPlacePriceLevel(event.target.value)}
          />
          <br />
          <label>1st Place Coffee Rating</label>
          <input
            type="number"
            name="firstPlaceCoffeeRating"
            value={firstPlaceCoffeeRating}
            onChange={(event) => setFirstPlaceCoffeeRating(Number(event.target.value))}
          />
          <br />
          <label>1st Place Food Rating</label>
          <input
            type="number"
            name="firstPlaceFoodRating"
            value={firstPlaceFoodRating}
            onChange={(event) => setFirstPlaceFoodRating(Number(event.target.value))}
          />
          <br />
          <label>1st Place Ambience Rating</label>
          <input
            type="number"
            name="firstPlaceAmbienceRating"
            value={firstPlaceAmbienceRating}
            onChange={(event) => setFirstPlaceAmbienceRating(Number(event.target.value))}
          />
          <br />
          <label>1st Place Consumable Title</label>
          <input
            type="text"
            name="firstPlaceConsumableTitle"
            value={firstPlaceConsumableTitle}
            onChange={(event) => setFirstPlaceConsumableTitle(event.target.value)}
          />
          <br />
          <label>1st Place Consumable Tagline</label>
          <input
            type="text"
            name="firstPlaceConsumableTagline"
            value={firstPlaceConsumableTagline}
            onChange={(event) => setFirstPlaceConsumableTagline(event.target.value)}
          />
          <br />
          <label>1st Place Consumable Price</label>
          <input
            type="text"
            name="firstPlaceConsumablePrice"
            value={firstPlaceConsumablePrice}
            onChange={(event) => setFirstPlaceConsumablePrice(event.target.value)}
          />
          <br />
          <label>1st Place Consumable Rating</label>
          <input
            type="text"
            name="firstPlaceConsumableRating"
            value={firstPlaceConsumableRating}
            onChange={(event) => setFirstPlaceConsumableRating(event.target.value)}
          />
          <br />
          <label>1st Place Consumable Image</label>
          <input
            type="text"
            name="firstPlaceConsumableImage"
            value={firstPlaceConsumableImage}
            onChange={(event) => setFirstPlaceConsumableImage(event.target.value)}
          />
          <br />
          </div>

          <div>

          <label>2nd Place Id</label>
          <input
            type="text"
            name="secondPlaceId"
            value={secondPlaceId}
            onChange={(event) => setSecondPlaceId(event.target.value)}
          />
          <br />
          <label>2nd Place Spotimage</label>
          <input
            type="text"
            name="secondPlaceImage"
            value={secondPlaceImage}
            onChange={(event) => setSecondPlaceImage(event.target.value)}
          />
          <br />
          <label>2nd Place Name</label>
          <input
            type="text"
            name="secondPlaceName"
            value={secondPlaceName}
            onChange={(event) => setSecondPlaceName(event.target.value)}
          />
          <br />
          <label>2nd Place Tagline</label>
          <input
            type="text"
            name="secondPlaceTagline"
            value={secondPlaceTagline}
            onChange={(event) => setSecondPlaceTagline(event.target.value)}
          />
          <br />
          <label>2nd Place Description</label>
          <input
            type="text"
            name="secondPlaceDescription"
            value={secondPlaceDescription}
            onChange={(event) => setSecondPlaceDescription(event.target.value)}
          />
          <br />
          <label>2nd Place Price Level</label>
          <input
            type="text"
            name="secondPlacePriceLevel"
            value={secondPlacePriceLevel}
            onChange={(event) => setSecondPlacePriceLevel(event.target.value)}
          />
          <br />
          <label>2nd Place Coffee Rating</label>
          <input
            type="number"
            name="secondPlaceCoffeeRating"
            value={secondPlaceCoffeeRating}
            onChange={(event) => setSecondPlaceCoffeeRating(Number(event.target.value))}
          />
          <br />
          <label>2nd Place Food Rating</label>
          <input
            type="number"
            name="secondPlaceFoodRating"
            value={secondPlaceFoodRating}
            onChange={(event) => setSecondPlaceFoodRating(Number(event.target.value))}
          />
          <br />
          <label>2nd Place Ambience Rating</label>
          <input
            type="number"
            name="secondPlaceAmbienceRating"
            value={secondPlaceAmbienceRating}
            onChange={(event) => setSecondPlaceAmbienceRating(Number(event.target.value))}
          />
          <br />
          <label>2nd Place Consumable Title</label>
          <input
            type="text"
            name="secondPlaceConsumableTitle"
            value={secondPlaceConsumableTitle}
            onChange={(event) => setSecondPlaceConsumableTitle(event.target.value)}
          />
          <br />
          <label>2nd Place Consumable Tagline</label>
          <input
            type="text"
            name="secondPlaceConsumableTagline"
            value={secondPlaceConsumableTagline}
            onChange={(event) => setSecondPlaceConsumableTagline(event.target.value)}
          />
          <br />
          <label>2nd Place Consumable Price</label>
          <input
            type="text"
            name="secondPlaceConsumablePrice"
            value={secondPlaceConsumablePrice}
            onChange={(event) => setSecondPlaceConsumablePrice(event.target.value)}
          />
          <br />
          <label>2nd Place Consumable Rating</label>
          <input
            type="text"
            name="secondPlaceConsumableRating"
            value={secondPlaceConsumableRating}
            onChange={(event) => setSecondPlaceConsumableRating(event.target.value)}
          />
          <br />
          <label>2nd Place Consumable Image</label>
          <input
            type="text"
            name="secondPlaceConsumableImage"
            value={secondPlaceConsumableImage}
            onChange={(event) => setSecondPlaceConsumableImage(event.target.value)}
          />
          <br />
          </div>

          <div>

          <label>3rd Place Id</label>
          <input
            type="text"
            name="thirdPlaceId"
            value={thirdPlaceId}
            onChange={(event) => setThirdPlaceId(event.target.value)}
          />
          <br />
          <label>3rd Place Spotimage</label>
          <input
            type="text"
            name="thirdPlaceImage"
            value={thirdPlaceImage}
            onChange={(event) => setThirdPlaceImage(event.target.value)}
          />
          <br />
          <label>3rd Place Name</label>
          <input
            type="text"
            name="thirdPlaceName"
            value={thirdPlaceName}
            onChange={(event) => setThirdPlaceName(event.target.value)}
          />
          <br />
          <label>3rd Place Tagline</label>
          <input
            type="text"
            name="thirdPlaceTagline"
            value={thirdPlaceTagline}
            onChange={(event) => setThirdPlaceTagline(event.target.value)}
          />
          <br />
          <label>3rd Place Description</label>
          <input
            type="text"
            name="thirdPlaceDescription"
            value={thirdPlaceDescription}
            onChange={(event) => setThirdPlaceDescription(event.target.value)}
          />
          <br />
          <label>3rd Place Price Level</label>
          <input
            type="text"
            name="thirdPlacePriceLevel"
            value={thirdPlacePriceLevel}
            onChange={(event) => setThirdPlacePriceLevel(event.target.value)}
          />
          <br />
          <label>3rd Place Coffee Rating</label>
          <input
            type="number"
            name="thirdPlaceCoffeeRating"
            value={thirdPlaceCoffeeRating}
            onChange={(event) => setThirdPlaceCoffeeRating(Number(event.target.value))}
          />
          <br />
          <label>3rd Place Food Rating</label>
          <input
            type="number"
            name="thirdPlaceFoodRating"
            value={thirdPlaceFoodRating}
            onChange={(event) => setThirdPlaceFoodRating(Number(event.target.value))}
          />
          <br />
          <label>3rd Place Ambience Rating</label>
          <input
            type="number"
            name="thirdPlaceAmbienceRating"
            value={thirdPlaceAmbienceRating}
            onChange={(event) => setThirdPlaceAmbienceRating(Number(event.target.value))}
          />
          <br />
          <label>3rd Place Consumable Title</label>
          <input
            type="text"
            name="thirdPlaceConsumableTitle"
            value={thirdPlaceConsumableTitle}
            onChange={(event) => setThirdPlaceConsumableTitle(event.target.value)}
          />
          <br />
          <label>3rd Place Consumable Tagline</label>
          <input
            type="text"
            name="thirdPlaceConsumableTagline"
            value={thirdPlaceConsumableTagline}
            onChange={(event) => setThirdPlaceConsumableTagline(event.target.value)}
          />
          <br />
          <label>3rd Place Consumable Price</label>
          <input
            type="text"
            name="thirdPlaceConsumablePrice"
            value={thirdPlaceConsumablePrice}
            onChange={(event) => setThirdPlaceConsumablePrice(event.target.value)}
          />
          <br />
          <label>3rd Place Consumable Rating</label>
          <input
            type="text"
            name="thirdPlaceConsumableRating"
            value={thirdPlaceConsumableRating}
            onChange={(event) => setThirdPlaceConsumableRating(event.target.value)}
          />
          <br />
          <label>3rd Place Consumable Image</label>
          <input
            type="text"
            name="thirdPlaceConsumableImage"
            value={thirdPlaceConsumableImage}
            onChange={(event) => setThirdPlaceConsumableImage(event.target.value)}
          />
          <br />
          </div>

          <div>

<label>4th Place Id</label>
<input
  type="text"
  name="fourthPlaceId"
  value={fourthPlaceId}
  onChange={(event) => setFourthPlaceId(event.target.value)}
/>
<br />
<label>4th Place Spotimage</label>
<input
  type="text"
  name="fourthPlaceImage"
  value={fourthPlaceImage}
  onChange={(event) => setFourthPlaceImage(event.target.value)}
/>
<br />
<label>4th Place Name</label>
<input
  type="text"
  name="fourthPlaceName"
  value={fourthPlaceName}
  onChange={(event) => setFourthPlaceName(event.target.value)}
/>
<br />
<label>4th Place Tagline</label>
<input
  type="text"
  name="fourthPlaceTagline"
  value={fourthPlaceTagline}
  onChange={(event) => setFourthPlaceTagline(event.target.value)}
/>
<br />
<label>4th Place Description</label>
<input
  type="text"
  name="fourthPlaceDescription"
  value={fourthPlaceDescription}
  onChange={(event) => setFourthPlaceDescription(event.target.value)}
/>
<br />
<label>4th Place Price Level</label>
<input
  type="text"
  name="fourthPlacePriceLevel"
  value={fourthPlacePriceLevel}
  onChange={(event) => setFourthPlacePriceLevel(event.target.value)}
/>
<br />
<label>4th Place Coffee Rating</label>
<input
  type="number"
  name="fourthPlaceCoffeeRating"
  value={fourthPlaceCoffeeRating}
  onChange={(event) => setFourthPlaceCoffeeRating(Number(event.target.value))}
/>
<br />
<label>4th Place Food Rating</label>
<input
  type="number"
  name="fourthPlaceFoodRating"
  value={fourthPlaceFoodRating}
  onChange={(event) => setFourthPlaceFoodRating(Number(event.target.value))}
/>
<br />
<label>4th Place Ambience Rating</label>
<input
  type="number"
  name="fourthPlaceAmbienceRating"
  value={fourthPlaceAmbienceRating}
  onChange={(event) => setFourthPlaceAmbienceRating(Number(event.target.value))}
/>
<br />
<label>4th Place Consumable Title</label>
<input
  type="text"
  name="fourthPlaceConsumableTitle"
  value={fourthPlaceConsumableTitle}
  onChange={(event) => setFourthPlaceConsumableTitle(event.target.value)}
/>
<br />
<label>4th Place Consumable Tagline</label>
<input
  type="text"
  name="fourthPlaceConsumableTagline"
  value={fourthPlaceConsumableTagline}
  onChange={(event) => setFourthPlaceConsumableTagline(event.target.value)}
/>
<br />
<label>4th Place Consumable Price</label>
<input
  type="text"
  name="fourthPlaceConsumablePrice"
  value={fourthPlaceConsumablePrice}
  onChange={(event) => setFourthPlaceConsumablePrice(event.target.value)}
/>
<br />
<label>4th Place Consumable Rating</label>
<input
  type="text"
  name="fourthPlaceConsumableRating"
  value={fourthPlaceConsumableRating}
  onChange={(event) => setFourthPlaceConsumableRating(event.target.value)}
/>
<br />
<label>4th Place Consumable Image</label>
<input
  type="text"
  name="fourthPlaceConsumableImage"
  value={fourthPlaceConsumableImage}
  onChange={(event) => setFourthPlaceConsumableImage(event.target.value)}
/>
<br />
</div>

<div>
<label>5th Place Id</label>
<input
type="text"
name="fifthPlaceId"
value={fifthPlaceId}
onChange={(event) => setFifthPlaceId(event.target.value)}
/>
<br />
<label>5th Place Spotimage</label>
<input
type="text"
name="fifthPlaceImage"
value={fifthPlaceImage}
onChange={(event) => setFifthPlaceImage(event.target.value)}
/>
<br />
<label>5th Place Name</label>
<input
type="text"
name="fifthPlaceName"
value={fifthPlaceName}
onChange={(event) => setFifthPlaceName(event.target.value)}
/>
<br />
<label>5th Place Tagline</label>
<input
type="text"
name="fifthPlaceTagline"
value={fifthPlaceTagline}
onChange={(event) => setFifthPlaceTagline(event.target.value)}
/>
<br />
<label>5th Place Description</label>
<input
type="text"
name="fifthPlaceDescription"
value={fifthPlaceDescription}
onChange={(event) => setFifthPlaceDescription(event.target.value)}
/>
<br />
<label>5th Place Price Level</label>
<input
type="text"
name="fifthPlacePriceLevel"
value={fifthPlacePriceLevel}
onChange={(event) => setFifthPlacePriceLevel(event.target.value)}
/>
<br />
<label>5th Place Coffee Rating</label>
<input
type="number"
name="fifthPlaceCoffeeRating"
value={fifthPlaceCoffeeRating}
onChange={(event) => setFifthPlaceCoffeeRating(Number(event.target.value))}
/>
<br />
<label>5th Place Food Rating</label>
<input
type="number"
name="fifthPlaceFoodRating"
value={fifthPlaceFoodRating}
onChange={(event) => setFifthPlaceFoodRating(Number(event.target.value))}
/>
<br />
<label>5th Place Ambience Rating</label>
<input
type="number"
name="fifthPlaceAmbienceRating"
value={fifthPlaceAmbienceRating}
onChange={(event) => setFifthPlaceAmbienceRating(Number(event.target.value))}
/>
<br />
<label>5th Place Consumable Title</label>
<input
type="text"
name="fifthPlaceConsumableTitle"
value={fifthPlaceConsumableTitle}
onChange={(event) => setFifthPlaceConsumableTitle(event.target.value)}
/>
<br />
<label>5th Place Consumable Tagline</label>
<input
type="text"
name="fifthPlaceConsumableTagline"
value={fifthPlaceConsumableTagline}
onChange={(event) => setFifthPlaceConsumableTagline(event.target.value)}
/>
<br />
<label>5th Place Consumable Price</label>
<input
type="text"
name="fifthPlaceConsumablePrice"
value={fifthPlaceConsumablePrice}
onChange={(event) => setFifthPlaceConsumablePrice(event.target.value)}
/>
<br />
<label>5th Place Consumable Rating</label>
<input
type="text"
name="fifthPlaceConsumableRating"
value={fifthPlaceConsumableRating}
onChange={(event) => setFifthPlaceConsumableRating(event.target.value)}
/>
<br />
<label>5th Place Consumable Image</label>
<input
type="text"
name="fifthPlaceConsumableImage"
value={fifthPlaceConsumableImage}
onChange={(event) => setFifthPlaceConsumableImage(event.target.value)}
/>
<br />
</div>

<div>
<label>6th Place Id</label>
<input
type="text"
name="sixthPlaceId"
value={sixthPlaceId}
onChange={(event) => setSixthPlaceId(event.target.value)}
/>
<br />
<label>6th Place Spotimage</label>
<input
type="text"
name="sixthPlaceImage"
value={sixthPlaceImage}
onChange={(event) => setSixthPlaceImage(event.target.value)}
/>
<br />
<label>6th Place Name</label>
<input
type="text"
name="sixthPlaceName"
value={sixthPlaceName}
onChange={(event) => setSixthPlaceName(event.target.value)}
/>
<br />
<label>6th Place Tagline</label>
<input
type="text"
name="sixthPlaceTagline"
value={sixthPlaceTagline}
onChange={(event) => setSixthPlaceTagline(event.target.value)}
/>
<br />
<label>6th Place Description</label>
<input
type="text"
name="sixthPlaceDescription"
value={sixthPlaceDescription}
onChange={(event) => setSixthPlaceDescription(event.target.value)}
/>
<br />
<label>6th Place Price Level</label>
<input
type="text"
name="sixthPlacePriceLevel"
value={sixthPlacePriceLevel}
onChange={(event) => setSixthPlacePriceLevel(event.target.value)}
/>
<br />
<label>6th Place Coffee Rating</label>
<input
type="number"
name="sixthPlaceCoffeeRating"
value={sixthPlaceCoffeeRating}
onChange={(event) => setSixthPlaceCoffeeRating(Number(event.target.value))}
/>
<br />
<label>6th Place Food Rating</label>
<input
type="number"
name="sixthPlaceFoodRating"
value={sixthPlaceFoodRating}
onChange={(event) => setSixthPlaceFoodRating(Number(event.target.value))}
/>
<br />
<label>6th Place Ambience Rating</label>
<input
type="number"
name="sixthPlaceAmbienceRating"
value={sixthPlaceAmbienceRating}
onChange={(event) => setSixthPlaceAmbienceRating(Number(event.target.value))}
/>
<br />
<label>6th Place Consumable Title</label>
<input
type="text"
name="sixthPlaceConsumableTitle"
value={sixthPlaceConsumableTitle}
onChange={(event) => setSixthPlaceConsumableTitle(event.target.value)}
/>
<br />
<label>6th Place Consumable Tagline</label>
<input
type="text"
name="sixthPlaceConsumableTagline"
value={sixthPlaceConsumableTagline}
onChange={(event) => setSixthPlaceConsumableTagline(event.target.value)}
/>
<br />
<label>6th Place Consumable Price</label>
<input
type="text"
name="sixthPlaceConsumablePrice"
value={sixthPlaceConsumablePrice}
onChange={(event) => setSixthPlaceConsumablePrice(event.target.value)}
/>
<br />
<label>6th Place Consumable Rating</label>
<input
type="text"
name="sixthPlaceConsumableRating"
value={sixthPlaceConsumableRating}
onChange={(event) => setSixthPlaceConsumableRating(event.target.value)}
/>
<br />
<label>6th Place Consumable Image</label>
<input
type="text"
name="sixthPlaceConsumableImage"
value={sixthPlaceConsumableImage}
onChange={(event) => setSixthPlaceConsumableImage(event.target.value)}
/>
</div>


<div>
  <label>7th Place Id</label>
  <input
    type="text"
    name="seventhPlaceId"
    value={seventhPlaceId}
    onChange={(event) => setSeventhPlaceId(event.target.value)}
  />
  <br />
  <label>7th Place Spotimage</label>
  <input
    type="text"
    name="seventhPlaceImage"
    value={seventhPlaceImage}
    onChange={(event) => setSeventhPlaceImage(event.target.value)}
  />
  <br />
  <label>7th Place Name</label>
  <input
    type="text"
    name="seventhPlaceName"
    value={seventhPlaceName}
    onChange={(event) => setSeventhPlaceName(event.target.value)}
  />
  <br />
  <label>7th Place Tagline</label>
  <input
    type="text"
    name="seventhPlaceTagline"
    value={seventhPlaceTagline}
    onChange={(event) => setSeventhPlaceTagline(event.target.value)}
  />
  <br />
  <label>7th Place Description</label>
  <input
    type="text"
    name="seventhPlaceDescription"
    value={seventhPlaceDescription}
    onChange={(event) => setSeventhPlaceDescription(event.target.value)}
  />
  <br />
  <label>7th Place Price Level</label>
  <input
    type="text"
    name="seventhPlacePriceLevel"
    value={seventhPlacePriceLevel}
    onChange={(event) => setSeventhPlacePriceLevel(event.target.value)}
  />
  <br />
  <label>7th Place Coffee Rating</label>
  <input
    type="number"
    name="seventhPlaceCoffeeRating"
    value={seventhPlaceCoffeeRating}
    onChange={(event) => setSeventhPlaceCoffeeRating(Number(event.target.value))}
  />
  <br />
  <label>7th Place Food Rating</label>
  <input
    type="number"
    name="seventhPlaceFoodRating"
    value={seventhPlaceFoodRating}
    onChange={(event) => setSeventhPlaceFoodRating(Number(event.target.value))}
  />
  <br />
  <label>7th Place Ambience Rating</label>
  <input
    type="number"
    name="seventhPlaceAmbienceRating"
    value={seventhPlaceAmbienceRating}
    onChange={(event) => setSeventhPlaceAmbienceRating(Number(event.target.value))}
  />
  <br />
  <label>7th Place Consumable Title</label>
  <input
    type="text"
    name="seventhPlaceConsumableTitle"
    value={seventhPlaceConsumableTitle}
    onChange={(event) => setSeventhPlaceConsumableTitle(event.target.value)}
  />
  <br />
  <label>7th Place Consumable Tagline</label>
  <input
    type="text"
    name="seventhPlaceConsumableTagline"
    value={seventhPlaceConsumableTagline}
    onChange={(event) => setSeventhPlaceConsumableTagline(event.target.value)}
  />
  <br />
  <label>7th Place Consumable Price</label>
  <input
    type="text"
    name="seventhPlaceConsumablePrice"
    value={seventhPlaceConsumablePrice}
    onChange={(event) => setSeventhPlaceConsumablePrice(event.target.value)}
  />
  <br />
  <label>7th Place Consumable Rating</label>
<input
type="text"
name="seventhPlaceConsumableRating"
value={seventhPlaceConsumableRating}
onChange={(event) => setSeventhPlaceConsumableRating(event.target.value)}
/>
<br />
<label>7th Place Consumable Image</label>
<input
type="text"
name="seventhPlaceConsumableImage"
value={seventhPlaceConsumableImage}
onChange={(event) => setSeventhPlaceConsumableImage(event.target.value)}
/>

</div>

<div>
  <label>8th Place Id</label>
  <input
    type="text"
    name="eigthPlaceId"
    value={eigthPlaceId}
    onChange={(event) => setEigthPlaceId(event.target.value)}
  />
  <br />
  <label>8th Place Spotimage</label>
  <input
    type="text"
    name="eigthPlaceImage"
    value={eigthPlaceImage}
    onChange={(event) => setEigthPlaceImage(event.target.value)}
  />
  <br />
  <label>8th Place Name</label>
  <input
    type="text"
    name="eigthPlaceName"
    value={eigthPlaceName}
    onChange={(event) => setEigthPlaceName(event.target.value)}
  />
  <br />
  <label>8th Place Tagline</label>
  <input
    type="text"
    name="eigthPlaceTagline"
    value={eigthPlaceTagline}
    onChange={(event) => setEigthPlaceTagline(event.target.value)}
  />
  <br />
  <label>8th Place Description</label>
  <input
    type="text"
    name="eigthPlaceDescription"
    value={eigthPlaceDescription}
    onChange={(event) => setEigthPlaceDescription(event.target.value)}
  />
  <br />
  <label>8th Place Price Level</label>
  <input
    type="text"
    name="eigthPlacePriceLevel"
    value={eigthPlacePriceLevel}
    onChange={(event) => setEigthPlacePriceLevel(event.target.value)}
  />
  <br />
  <label>8th Place Coffee Rating</label>
  <input
    type="number"
    name="eigthPlaceCoffeeRating"
    value={eigthPlaceCoffeeRating}
    onChange={(event) => setEigthPlaceCoffeeRating(Number(event.target.value))}
  />
  <br />
  <label>8th Place Food Rating</label>
  <input
    type="number"
    name="eigthPlaceFoodRating"
    value={eigthPlaceFoodRating}
    onChange={(event) => setEigthPlaceFoodRating(Number(event.target.value))}
  />
  <br />
  <label>8th Place Ambience Rating</label>
  <input
    type="number"
    name="eigthPlaceAmbienceRating"
    value={eigthPlaceAmbienceRating}
    onChange={(event) => setEigthPlaceAmbienceRating(Number(event.target.value))}
  />
  <br />
  <label>8th Place Consumable Title</label>
  <input
    type="text"
    name="eigthPlaceConsumableTitle"
    value={eigthPlaceConsumableTitle}
    onChange={(event) => setEigthPlaceConsumableTitle(event.target.value)}
  />
  <br />
  <label>8th Place Consumable Tagline</label>
  <input
    type="text"
    name="eigthPlaceConsumableTagline"
    value={eigthPlaceConsumableTagline}
    onChange={(event) => setEigthPlaceConsumableTagline(event.target.value)}
  />
  <br />
  <label>8th Place Consumable Price</label>
  <input
    type="text"
    name="eigthPlaceConsumablePrice"
    value={eigthPlaceConsumablePrice}
    onChange={(event) => setEigthPlaceConsumablePrice(event.target.value)}
  />
  <br />
  <label>8th Place Consumable Rating</label>
<input
type="text"
name="eigthPlaceConsumableRating"
value={eigthPlaceConsumableRating}
onChange={(event) => setEigthPlaceConsumableRating(event.target.value)}
/>
<br />
<label>8th Place Consumable Image</label>
<input
type="text"
name="eigthPlaceConsumableImage"
value={eigthPlaceConsumableImage}
onChange={(event) => setEigthPlaceConsumableImage(event.target.value)}
/>

</div>

<div>
  <label>9th Place Id</label>
  <input
    type="text"
    name="ninthPlaceId"
    value={ninthPlaceId}
    onChange={(event) => setNinthPlaceId(event.target.value)}
  />
  <br />
  <label>9th Place Spotimage</label>
  <input
    type="text"
    name="ninthPlaceImage"
    value={ninthPlaceImage}
    onChange={(event) => setNinthPlaceImage(event.target.value)}
  />
  <br />
  <label>9th Place Name</label>
  <input
    type="text"
    name="ninthPlaceName"
    value={ninthPlaceName}
    onChange={(event) => setNinthPlaceName(event.target.value)}
  />
  <br />
  <label>9th Place Tagline</label>
  <input
    type="text"
    name="ninthPlaceTagline"
    value={ninthPlaceTagline}
    onChange={(event) => setNinthPlaceTagline(event.target.value)}
  />
  <br />
  <label>9th Place Description</label>
  <input
    type="text"
    name="ninthPlaceDescription"
    value={ninthPlaceDescription}
    onChange={(event) => setNinthPlaceDescription(event.target.value)}
  />
  <br />
  <label>9th Place Price Level</label>
  <input
    type="text"
    name="ninthPlacePriceLevel"
    value={ninthPlacePriceLevel}
    onChange={(event) => setNinthPlacePriceLevel(event.target.value)}
  />
  <br />
  <label>9th Place Coffee Rating</label>
  <input
    type="number"
    name="ninthPlaceCoffeeRating"
    value={ninthPlaceCoffeeRating}
    onChange={(event) => setNinthPlaceCoffeeRating(Number(event.target.value))}
  />
  <br />
  <label>9th Place Food Rating</label>
  <input
    type="number"
    name="ninthPlaceFoodRating"
    value={ninthPlaceFoodRating}
    onChange={(event) => setNinthPlaceFoodRating(Number(event.target.value))}
  />
  <br />
  <label>9th Place Ambience Rating</label>
  <input
    type="number"
    name="ninthPlaceAmbienceRating"
    value={ninthPlaceAmbienceRating}
    onChange={(event) => setNinthPlaceAmbienceRating(Number(event.target.value))}
  />
  <br />
  <label>9th Place Consumable Title</label>
  <input
    type="text"
    name="ninthPlaceConsumableTitle"
    value={ninthPlaceConsumableTitle}
    onChange={(event) => setNinthPlaceConsumableTitle(event.target.value)}
  />
  <br />
  <label>9th Place Consumable Tagline</label>
  <input
    type="text"
    name="ninthPlaceConsumableTagline"
    value={ninthPlaceConsumableTagline}
    onChange={(event) => setNinthPlaceConsumableTagline(event.target.value)}
  />
  <br />
  <label>9th Place Consumable Price</label>
  <input
    type="text"
    name="ninthPlaceConsumablePrice"
    value={ninthPlaceConsumablePrice}
    onChange={(event) => setNinthPlaceConsumablePrice(event.target.value)}
  />
  <br />
  <label>9th Place Consumable Rating</label>
<input
type="text"
name="ninthPlaceConsumableRating"
value={ninthPlaceConsumableRating}
onChange={(event) => setNinthPlaceConsumableRating(event.target.value)}
/>
<br />
<label>9th Place Consumable Image</label>
<input
type="text"
name="ninthPlaceConsumableImage"
value={ninthPlaceConsumableImage}
onChange={(event) => setNinthPlaceConsumableImage(event.target.value)}
/>

</div>

<div>
  <label>10th Place Id</label>
  <input
    type="text"
    name="tenthPlaceId"
    value={tenthPlaceId}
    onChange={(event) => setTenthPlaceId(event.target.value)}
  />
  <br />
  <label>10th Place Spotimage</label>
  <input
    type="text"
    name="tenthPlaceImage"
    value={tenthPlaceImage}
    onChange={(event) => setTenthPlaceImage(event.target.value)}
  />
  <br />
  <label>10th Place Name</label>
  <input
    type="text"
    name="tenthPlaceName"
    value={tenthPlaceName}
    onChange={(event) => setTenthPlaceName(event.target.value)}
  />
  <br />
  <label>10th Place Tagline</label>
  <input
    type="text"
    name="tenthPlaceTagline"
    value={tenthPlaceTagline}
    onChange={(event) => setTenthPlaceTagline(event.target.value)}
  />
  <br />
  <label>10th Place Description</label>
  <input
    type="text"
    name="tenthPlaceDescription"
    value={tenthPlaceDescription}
    onChange={(event) => setTenthPlaceDescription(event.target.value)}
  />
  <br />
  <label>10th Place Price Level</label>
  <input
    type="text"
    name="tenthPlacePriceLevel"
    value={tenthPlacePriceLevel}
    onChange={(event) => setTenthPlacePriceLevel(event.target.value)}
  />
  <br />
  <label>10th Place Coffee Rating</label>
  <input
    type="number"
    name="tenthPlaceCoffeeRating"
    value={tenthPlaceCoffeeRating}
    onChange={(event) => setTenthPlaceCoffeeRating(Number(event.target.value))}
  />
  <br />
  <label>10th Place Food Rating</label>
  <input
    type="number"
    name="tenthPlaceFoodRating"
    value={tenthPlaceFoodRating}
    onChange={(event) => setTenthPlaceFoodRating(Number(event.target.value))}
  />
  <br />
  <label>10th Place Ambience Rating</label>
  <input
    type="number"
    name="tenthPlaceAmbienceRating"
    value={tenthPlaceAmbienceRating}
    onChange={(event) => setTenthPlaceAmbienceRating(Number(event.target.value))}
  />
  <br />
  <label>10th Place Consumable Title</label>
  <input
    type="text"
    name="tenthPlaceConsumableTitle"
    value={tenthPlaceConsumableTitle}
    onChange={(event) => setTenthPlaceConsumableTitle(event.target.value)}
  />
  <br />
  <label>10th Place Consumable Tagline</label>
  <input
    type="text"
    name="tenthPlaceConsumableTagline"
    value={tenthPlaceConsumableTagline}
    onChange={(event) => setTenthPlaceConsumableTagline(event.target.value)}
  />
  <br />
  <label>10th Place Consumable Price</label>
  <input
    type="text"
    name="tenthPlaceConsumablePrice"
    value={tenthPlaceConsumablePrice}
    onChange={(event) => setTenthPlaceConsumablePrice(event.target.value)}
  />
  <br />
  <label>10th Place Consumable Rating</label>
<input
type="text"
name="tenthPlaceConsumableRating"
value={tenthPlaceConsumableRating}
onChange={(event) => setTenthPlaceConsumableRating(event.target.value)}
/>
<br />
<label>10th Place Consumable Image</label>
<input
type="text"
name="tenthPlaceConsumableImage"
value={tenthPlaceConsumableImage}
onChange={(event) => setTenthPlaceConsumableImage(event.target.value)}
/>

</div>
          

</div>
          <button type="submit" class="btn btn-success">Edit Toplist</button>
        </form>
      </div>
    </div>
  );
}

export default EditToplist;
