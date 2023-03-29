import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Loading from "../components/Loading/Loading";
import "../components/SpotList/spotlist.css";
import Typography from "@mui/material/Typography";
import "../components/SpotList/spotlist.css";
import ToplistSpotCard from "../components/ToplistDetailsPage/ToplistSpotCard";
import ToplistConsumableCard from "../components/ToplistDetailsPage/ToplistConsumableCard";
import ToplistHeroSection from "../components/ToplistDetailsPage/ToplistHeroSection";
import ToplistSpotDescription from "../components/ToplistDetailsPage/ToplistSpotDescription"
import Footer from "./Footer";
import { Helmet } from 'react-helmet';


function TopListDetailsPage() {
  const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5005";
  const { toplistId } = useParams();
  const [toplist, setToplist] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const getToplist = () => {
    setIsLoading(true);
    axios.get(`${API_URL}/api/toplists/${toplistId}`).then((response) => {
      setToplist(response.data);
      setIsLoading(false);
    });
  };

  useEffect(() => {
    getToplist();
  }, [toplistId]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div>
            <Helmet>
        <title>{toplist.title} | Chunks of Canggu</title>
        <meta name="description" content="Images, Review, Menu & more: Find out everything you need to know about ${spot.name}" />
        <meta name="theme-color" content="#008f68" />
      </Helmet>
    <div>
    <ToplistHeroSection toplistHeroImage={toplist.heroImage} toplistTitle={toplist.title} />
 

      <Typography className="toplistIntroText"
        component={"div"}
        // style={{ textAlign: "justify" }}
        sx={{ fontFamily: "Teko", fontSize: "20px" }}
      >
        <i>{toplist.introText}</i>
      </Typography>

      {toplist.tenthPlaceName && (
        <div style={{paddingTop: "30px"}}>
          <Typography
            variant="h2"
            sx={{ fontFamily: "Teko", fontSize: "50px" }}
          >
            10. {toplist.tenthPlaceName}
          </Typography>
          <Typography
            component={"div"}
            variant="body2"
            sx={{ fontFamily: "Teko", fontSize: "25px" }}
          >
            <i>{toplist.tenthPlaceTagline}</i>
          </Typography>

<div className="desktopToplistView">
<div className="desktopSpotCardDescriptionFlex">


          <ToplistSpotCard
            spotId={toplist.tenthPlaceId}
            spotImage={toplist.tenthPlaceImage}
            spotName={toplist.tenthPlaceName}
            spotCoffeeRating={toplist.tenthPlaceCoffeeRating}
            spotFoodRating={toplist.tenthPlaceFoodRating}
            spotAmbienceRating={toplist.tenthPlaceAmbienceRating}
          />
<div className="mobileViewDescription">
<ToplistSpotDescription spotDescription={toplist.tenthPlaceDescription} />
</div>
</div>

<div className="desktopConsumableContainer">
          <ToplistConsumableCard
            consumableImage={toplist.tenthPlaceConsumableImage}
            consumableTitle={toplist.tenthPlaceConsumableTitle}
            consumableRating={toplist.tenthPlaceConsumableRating}
            consumablePrice={toplist.tenthPlaceConsumablePrice}
            consumableTagline={toplist.tenthPlaceConsumableTagline}
            spotName={toplist.tenthPlaceName}
          />

</div>

</div>
<div className="desktopViewDescription">
<ToplistSpotDescription  spotDescription={toplist.tenthPlaceDescription} />
        </div>
        </div>
        
      )}

      {toplist.ninthPlaceName && (
        <div style={{paddingTop: "30px"}}>
          <Typography
            variant="h2"
            sx={{ fontFamily: "Teko", fontSize: "50px" }}
          >
            9. {toplist.ninthPlaceName}
          </Typography>
          <Typography
            component={"div"}
            variant="body2"
            sx={{ fontFamily: "Teko", fontSize: "25px" }}
          >
            <i>{toplist.ninthPlaceTagline}</i>
          </Typography>

<div className="desktopToplistView">
<div className="desktopSpotCardDescriptionFlex">


          <ToplistSpotCard
            spotId={toplist.ninthPlaceId}
            spotImage={toplist.ninthPlaceImage}
            spotName={toplist.ninthPlaceName}
            spotCoffeeRating={toplist.ninthPlaceCoffeeRating}
            spotFoodRating={toplist.ninthPlaceFoodRating}
            spotAmbienceRating={toplist.ninthPlaceAmbienceRating}
          />
<div className="mobileViewDescription">
<ToplistSpotDescription spotDescription={toplist.ninthPlaceDescription} />
</div>
</div>

<div className="desktopConsumableContainer">
          <ToplistConsumableCard
            consumableImage={toplist.ninthPlaceConsumableImage}
            consumableTitle={toplist.ninthPlaceConsumableTitle}
            consumableRating={toplist.ninthPlaceConsumableRating}
            consumablePrice={toplist.ninthPlaceConsumablePrice}
            consumableTagline={toplist.ninthPlaceConsumableTagline}
            spotName={toplist.ninthPlaceName}
          />

</div>

</div>
<div className="desktopViewDescription">
<ToplistSpotDescription  spotDescription={toplist.ninthPlaceDescription} />
        </div>
        </div>
        
      )}

      {toplist.eigthPlaceName && (
        <div style={{paddingTop: "30px"}}>
          <Typography
            variant="h2"
            sx={{ fontFamily: "Teko", fontSize: "50px" }}
          >
            8. {toplist.eigthPlaceName}
          </Typography>
          <Typography
            component={"div"}
            variant="body2"
            sx={{ fontFamily: "Teko", fontSize: "25px" }}
          >
            <i>{toplist.eigthPlaceTagline}</i>
          </Typography>

<div className="desktopToplistView">
<div className="desktopSpotCardDescriptionFlex">


          <ToplistSpotCard
            spotId={toplist.eigthPlaceId}
            spotImage={toplist.eigthPlaceImage}
            spotName={toplist.eigthPlaceName}
            spotCoffeeRating={toplist.eigthPlaceCoffeeRating}
            spotFoodRating={toplist.eigthPlaceFoodRating}
            spotAmbienceRating={toplist.eigthPlaceAmbienceRating}
          />
<div className="mobileViewDescription">
<ToplistSpotDescription spotDescription={toplist.eigthPlaceDescription} />
</div>
</div>

<div className="desktopConsumableContainer">
          <ToplistConsumableCard
            consumableImage={toplist.eigthPlaceConsumableImage}
            consumableTitle={toplist.eigthPlaceConsumableTitle}
            consumableRating={toplist.eigthPlaceConsumableRating}
            consumablePrice={toplist.eigthPlaceConsumablePrice}
            consumableTagline={toplist.eigthPlaceConsumableTagline}
            spotName={toplist.eigthPlaceName}
          />

</div>

</div>
<div className="desktopViewDescription">
<ToplistSpotDescription  spotDescription={toplist.eigthPlaceDescription} />
        </div>
        </div>
        
      )}

      {toplist.seventhPlaceName && (
        <div style={{paddingTop: "30px"}}>
          <Typography
            variant="h2"
            sx={{ fontFamily: "Teko", fontSize: "50px" }}
          >
            7. {toplist.seventhPlaceName}
          </Typography>
          <Typography
            component={"div"}
            variant="body2"
            sx={{ fontFamily: "Teko", fontSize: "25px" }}
          >
            <i>{toplist.seventhPlaceTagline}</i>
          </Typography>

<div className="desktopToplistView">
<div className="desktopSpotCardDescriptionFlex">


          <ToplistSpotCard
            spotId={toplist.seventhPlaceId}
            spotImage={toplist.seventhPlaceImage}
            spotName={toplist.seventhPlaceName}
            spotCoffeeRating={toplist.seventhPlaceCoffeeRating}
            spotFoodRating={toplist.seventhPlaceFoodRating}
            spotAmbienceRating={toplist.seventhPlaceAmbienceRating}
          />
<div className="mobileViewDescription">
<ToplistSpotDescription spotDescription={toplist.seventhPlaceDescription} />
</div>
</div>

<div className="desktopConsumableContainer">
          <ToplistConsumableCard
            consumableImage={toplist.seventhPlaceConsumableImage}
            consumableTitle={toplist.seventhPlaceConsumableTitle}
            consumableRating={toplist.seventhPlaceConsumableRating}
            consumablePrice={toplist.seventhPlaceConsumablePrice}
            consumableTagline={toplist.seventhPlaceConsumableTagline}
            spotName={toplist.seventhPlaceName}
          />

</div>

</div>
<div className="desktopViewDescription">
<ToplistSpotDescription  spotDescription={toplist.seventhPlaceDescription} />
        </div>
        </div>
        
      )}

      {toplist.sixthPlaceName && (
        <div style={{paddingTop: "30px"}}>
          <Typography
            variant="h2"
            sx={{ fontFamily: "Teko", fontSize: "50px" }}
          >
            6. {toplist.sixthPlaceName}
          </Typography>
          <Typography
            component={"div"}
            variant="body2"
            sx={{ fontFamily: "Teko", fontSize: "25px" }}
          >
            <i>{toplist.sixthPlaceTagline}</i>
          </Typography>

<div className="desktopToplistView">
<div className="desktopSpotCardDescriptionFlex">


          <ToplistSpotCard
            spotId={toplist.sixthPlaceId}
            spotImage={toplist.sixthPlaceImage}
            spotName={toplist.sixthPlaceName}
            spotCoffeeRating={toplist.sixthPlaceCoffeeRating}
            spotFoodRating={toplist.sixthPlaceFoodRating}
            spotAmbienceRating={toplist.sixthPlaceAmbienceRating}
          />
<div className="mobileViewDescription">
<ToplistSpotDescription spotDescription={toplist.sixthPlaceDescription} />
</div>
</div>

<div className="desktopConsumableContainer">
          <ToplistConsumableCard
            consumableImage={toplist.sixthPlaceConsumableImage}
            consumableTitle={toplist.sixthPlaceConsumableTitle}
            consumableRating={toplist.sixthPlaceConsumableRating}
            consumablePrice={toplist.sixthPlaceConsumablePrice}
            consumableTagline={toplist.sixthPlaceConsumableTagline}
            spotName={toplist.sixthPlaceName}
          />

</div>

</div>
<div className="desktopViewDescription">
<ToplistSpotDescription  spotDescription={toplist.sixthPlaceDescription} />
        </div>
        </div>
        
      )}

      {toplist.fifthPlaceName && (
        <div style={{paddingTop: "30px"}}>
          <Typography
            variant="h2"
            sx={{ fontFamily: "Teko", fontSize: "50px" }}
          >
            5. {toplist.fifthPlaceName}
          </Typography>
          <Typography
            component={"div"}
            variant="body2"
            sx={{ fontFamily: "Teko", fontSize: "25px" }}
          >
            <i>{toplist.fifthPlaceTagline}</i>
          </Typography>

<div className="desktopToplistView">
<div className="desktopSpotCardDescriptionFlex">


          <ToplistSpotCard
            spotId={toplist.fifthPlaceId}
            spotImage={toplist.fifthPlaceImage}
            spotName={toplist.fifthPlaceName}
            spotCoffeeRating={toplist.fifthPlaceCoffeeRating}
            spotFoodRating={toplist.fifthPlaceFoodRating}
            spotAmbienceRating={toplist.fifthPlaceAmbienceRating}
          />
<div className="mobileViewDescription">
<ToplistSpotDescription spotDescription={toplist.fifthPlaceDescription} />
</div>
</div>

<div className="desktopConsumableContainer">
          <ToplistConsumableCard
            consumableImage={toplist.fifthPlaceConsumableImage}
            consumableTitle={toplist.fifthPlaceConsumableTitle}
            consumableRating={toplist.fifthPlaceConsumableRating}
            consumablePrice={toplist.fifthPlaceConsumablePrice}
            consumableTagline={toplist.fifthPlaceConsumableTagline}
            spotName={toplist.fifthPlaceName}
          />

</div>

</div>
<div className="desktopViewDescription">
<ToplistSpotDescription  spotDescription={toplist.fifthPlaceDescription} />
        </div>
        </div>
        
      )}

      {toplist.fourthPlaceName && (
        <div style={{paddingTop: "30px"}}>
          <Typography
            variant="h2"
            sx={{ fontFamily: "Teko", fontSize: "50px" }}
          >
            4. {toplist.fourthPlaceName}
          </Typography>
          <Typography
            component={"div"}
            variant="body2"
            sx={{ fontFamily: "Teko", fontSize: "25px" }}
          >
            <i>{toplist.fourthPlaceTagline}</i>
          </Typography>

<div className="desktopToplistView">
<div className="desktopSpotCardDescriptionFlex">


          <ToplistSpotCard
            spotId={toplist.fourthPlaceId}
            spotImage={toplist.fourthPlaceImage}
            spotName={toplist.fourthPlaceName}
            spotCoffeeRating={toplist.fourthPlaceCoffeeRating}
            spotFoodRating={toplist.fourthPlaceFoodRating}
            spotAmbienceRating={toplist.fourthPlaceAmbienceRating}
          />
<div className="mobileViewDescription">
<ToplistSpotDescription spotDescription={toplist.fourthPlaceDescription} />
</div>
</div>

<div className="desktopConsumableContainer">
          <ToplistConsumableCard
            consumableImage={toplist.fourthPlaceConsumableImage}
            consumableTitle={toplist.fourthPlaceConsumableTitle}
            consumableRating={toplist.fourthPlaceConsumableRating}
            consumablePrice={toplist.fourthPlaceConsumablePrice}
            consumableTagline={toplist.fourthPlaceConsumableTagline}
            spotName={toplist.fourthPlaceName}
          />

</div>

</div>
<div className="desktopViewDescription">
<ToplistSpotDescription  spotDescription={toplist.fourthPlaceDescription} />
        </div>
        </div>
        
      )}

      {toplist.thirdPlaceName && (
        <div style={{paddingTop: "30px"}}>
          <Typography
            variant="h2"
            sx={{ fontFamily: "Teko", fontSize: "50px" }}
          >
            3. {toplist.thirdPlaceName}
          </Typography>
          <Typography
            component={"div"}
            variant="body2"
            sx={{ fontFamily: "Teko", fontSize: "25px" }}
          >
            <i>{toplist.thirdPlaceTagline}</i>
          </Typography>

<div className="desktopToplistView">
<div className="desktopSpotCardDescriptionFlex">


          <ToplistSpotCard
            spotId={toplist.thirdPlaceId}
            spotImage={toplist.thirdPlaceImage}
            spotName={toplist.thirdPlaceName}
            spotCoffeeRating={toplist.thirdPlaceCoffeeRating}
            spotFoodRating={toplist.thirdPlaceFoodRating}
            spotAmbienceRating={toplist.thirdPlaceAmbienceRating}
          />
<div className="mobileViewDescription">
<ToplistSpotDescription spotDescription={toplist.thirdPlaceDescription} />
</div>
</div>

<div className="desktopConsumableContainer">
          <ToplistConsumableCard
            consumableImage={toplist.thirdPlaceConsumableImage}
            consumableTitle={toplist.thirdPlaceConsumableTitle}
            consumableRating={toplist.thirdPlaceConsumableRating}
            consumablePrice={toplist.thirdPlaceConsumablePrice}
            consumableTagline={toplist.thirdPlaceConsumableTagline}
            spotName={toplist.thirdPlaceName}
          />

</div>

</div>
<div className="desktopViewDescription">
<ToplistSpotDescription  spotDescription={toplist.thirdPlaceDescription} />
        </div>
        </div>
        
      )}

      {toplist.secondPlaceName && (
        <div style={{paddingTop: "30px"}}>
          <Typography
            variant="h2"
            sx={{ fontFamily: "Teko", fontSize: "50px" }}
          >
            2. {toplist.secondPlaceName}
          </Typography>
          <Typography
            component={"div"}
            variant="body2"
            sx={{ fontFamily: "Teko", fontSize: "25px" }}
          >
            <i>{toplist.secondPlaceTagline}</i>
          </Typography>

<div className="desktopToplistView">
<div className="desktopSpotCardDescriptionFlex">


          <ToplistSpotCard
            spotId={toplist.secondPlaceId}
            spotImage={toplist.secondPlaceImage}
            spotName={toplist.secondPlaceName}
            spotCoffeeRating={toplist.secondPlaceCoffeeRating}
            spotFoodRating={toplist.secondPlaceFoodRating}
            spotAmbienceRating={toplist.secondPlaceAmbienceRating}
          />
<div className="mobileViewDescription">
<ToplistSpotDescription spotDescription={toplist.secondPlaceDescription} />
</div>
</div>

<div className="desktopConsumableContainer">
          <ToplistConsumableCard
            consumableImage={toplist.secondPlaceConsumableImage}
            consumableTitle={toplist.secondPlaceConsumableTitle}
            consumableRating={toplist.secondPlaceConsumableRating}
            consumablePrice={toplist.secondPlaceConsumablePrice}
            consumableTagline={toplist.secondPlaceConsumableTagline}
            spotName={toplist.secondPlaceName}
          />

</div>

</div>
<div className="desktopViewDescription">
<ToplistSpotDescription  spotDescription={toplist.secondPlaceDescription} />
        </div>
        </div>
        
      )}

      {toplist.firstPlaceName && (
        <div style={{paddingTop: "30px"}}>
          <Typography
            variant="h2"
            sx={{ fontFamily: "Teko", fontSize: "50px" }}
          >
            1. {toplist.firstPlaceName}
          </Typography>
          <Typography
            component={"div"}
            variant="body2"
            sx={{ fontFamily: "Teko", fontSize: "25px" }}
          >
            <i>{toplist.firstPlaceTagline}</i>
          </Typography>

<div className="desktopToplistView">
<div className="desktopSpotCardDescriptionFlex">


          <ToplistSpotCard
            spotId={toplist.firstPlaceId}
            spotImage={toplist.firstPlaceImage}
            spotName={toplist.firstPlaceName}
            spotCoffeeRating={toplist.firstPlaceCoffeeRating}
            spotFoodRating={toplist.firstPlaceFoodRating}
            spotAmbienceRating={toplist.firstPlaceAmbienceRating}
          />
<div className="mobileViewDescription">
<ToplistSpotDescription spotDescription={toplist.firstPlaceDescription} />
</div>
</div>

<div className="desktopConsumableContainer">
          <ToplistConsumableCard
            consumableImage={toplist.firstPlaceConsumableImage}
            consumableTitle={toplist.firstPlaceConsumableTitle}
            consumableRating={toplist.firstPlaceConsumableRating}
            consumablePrice={toplist.firstPlaceConsumablePrice}
            consumableTagline={toplist.firstPlaceConsumableTagline}
            spotName={toplist.firstPlaceName}
          />

</div>

</div>
<div className="desktopViewDescription">
<ToplistSpotDescription  spotDescription={toplist.firstPlaceDescription} />
        </div>
        </div>
        
      )}
    </div>
    <div><Footer /></div>
    </div>
  );
}

export default TopListDetailsPage;
