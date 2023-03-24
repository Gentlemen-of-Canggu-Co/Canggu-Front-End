import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Loading from "../components/Loading/Loading";
import "../components/SpotList/spotlist.css";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import "../components/SpotList/spotlist.css";
import ToplistSpotCard from "../components/ToplistDetailsPage/ToplistSpotCard";
import ToplistConsumableCard from "../components/ToplistDetailsPage/ToplistConsumableCard";
import ToplistHeroSection from "../components/ToplistDetailsPage/ToplistHeroSection";
import ToplistSpotDescription from "../components/ToplistDetailsPage/ToplistSpotDescription"

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
    <ToplistHeroSection toplistHeroImage={toplist.heroImage} toplistTitle={toplist.title} />
 

      <Typography className="toplistTexts"
        component={"div"}
        style={{ textAlign: "justify" }}
        sx={{ fontFamily: "Teko", fontSize: "20px" }}
      >
        <i>{toplist.introText}</i>
      </Typography>

      {toplist.tenthPlaceName && (
        <div>
          <Typography
            variant="h2"
            sx={{ fontFamily: "Teko", fontSize: "30px" }}
          >
            10. {toplist.ninthPlaceName}
          </Typography>
          <Typography
            component={"div"}
            variant="body2"
            sx={{ fontFamily: "Montserrat", fontSize: "15px" }}
          >
            <i>{toplist.ninthPlaceTagline}</i>
          </Typography>

          <ToplistSpotCard
            spotId={toplist.tenthPlaceId}
            spotImage={toplist.tenthPlaceImage}
            spotName={toplist.tenthPlaceName}
            spotCoffeeRating={toplist.tenthPlaceCoffeeRating}
            spotFoodRating={toplist.tenthPlaceFoodRating}
            spotAmbienceRating={toplist.tenthPlaceAmbienceRating}
          />

<ToplistSpotDescription spotDescription={toplist.tenthPlaceDescription} />
          <ToplistConsumableCard
            consumableImage={toplist.tenthPlaceConsumableImage}
            consumableTitle={toplist.tenthPlaceConsumableTitle}
            consumableRating={toplist.tenthPlaceConsumableRating}
            consumablePrice={toplist.tenthPlaceConsumablePrice}
            consumableTagline={toplist.tenthPlaceConsumableTagline}
          />
        </div>
      )}

      {toplist.ninthPlaceName && (
        <div>
          <Typography
            variant="h2"
            sx={{ fontFamily: "Teko", fontSize: "30px" }}
          >
            9. {toplist.ninthPlaceName}
          </Typography>
          <Typography
            component={"div"}
            variant="body2"
            sx={{ fontFamily: "Montserrat", fontSize: "15px" }}
          >
            <i>{toplist.ninthPlaceTagline}</i>
          </Typography>

          <ToplistSpotCard
            spotId={toplist.ninthPlaceId}
            spotImage={toplist.ninthPlaceImage}
            spotName={toplist.ninthPlaceName}
            spotCoffeeRating={toplist.ninthPlaceCoffeeRating}
            spotFoodRating={toplist.ninthPlaceFoodRating}
            spotAmbienceRating={toplist.ninthPlaceAmbienceRating}
          />

          
          <ToplistSpotDescription spotDescription={toplist.ninthPlaceDescription} />

          <ToplistConsumableCard
            consumableImage={toplist.ninthPlaceConsumableImage}
            consumableTitle={toplist.ninthPlaceConsumableTitle}
            consumableRating={toplist.ninthPlaceConsumableRating}
            consumablePrice={toplist.ninthPlaceConsumablePrice}
            consumableTagline={toplist.ninthPlaceConsumableTagline}
          />
        </div>
      )}

      {toplist.eigthPlaceName && (
        <div>
          <Typography
            variant="h2"
            sx={{ fontFamily: "Teko", fontSize: "30px" }}
          >
            8. {toplist.eigthPlaceName}
          </Typography>
          <Typography
            component={"div"}
            variant="body2"
            sx={{ fontFamily: "Montserrat", fontSize: "15px" }}
          >
            <i>{toplist.eigthPlaceTagline}</i>
          </Typography>

          <ToplistSpotCard
            spotId={toplist.eigthPlaceId}
            spotImage={toplist.eigthPlaceImage}
            spotName={toplist.eigthPlaceName}
            spotCoffeeRating={toplist.eigthPlaceCoffeeRating}
            spotFoodRating={toplist.eigthPlaceFoodRating}
            spotAmbienceRating={toplist.eigthPlaceAmbienceRating}
          />

<ToplistSpotDescription spotDescription={toplist.eigthPlaceDescription} />


          <ToplistConsumableCard
            consumableImage={toplist.eigthPlaceConsumableImage}
            consumableTitle={toplist.eigthPlaceConsumableTitle}
            consumableRating={toplist.eigthPlaceConsumableRating}
            consumablePrice={toplist.eigthPlaceConsumablePrice}
            consumableTagline={toplist.eigthPlaceConsumableTagline}
          />
        </div>
      )}

      {toplist.seventhPlaceName && (
        <div>
          <Typography
            variant="h2"
            sx={{ fontFamily: "Teko", fontSize: "30px" }}
          >
            7. {toplist.seventhPlaceName}
          </Typography>
          <Typography
            component={"div"}
            variant="body2"
            sx={{ fontFamily: "Montserrat", fontSize: "15px" }}
          >
            <i>{toplist.seventhPlaceTagline}</i>
          </Typography>

          <ToplistSpotCard
            spotId={toplist.seventhPlaceId}
            spotImage={toplist.seventhPlaceImage}
            spotName={toplist.seventhPlaceName}
            spotCoffeeRating={toplist.seventhPlaceCoffeeRating}
            spotFoodRating={toplist.seventhPlaceFoodRating}
            spotAmbienceRating={toplist.seventhPlaceAmbienceRating}
          />

<ToplistSpotDescription spotDescription={toplist.seventhPlaceDescription} />

          <ToplistConsumableCard
            consumableImage={toplist.seventhPlaceConsumableImage}
            consumableTitle={toplist.seventhPlaceConsumableTitle}
            consumableRating={toplist.seventhPlaceConsumableRating}
            consumablePrice={toplist.seventhPlaceConsumablePrice}
            consumableTagline={toplist.seventhPlaceConsumableTagline}
          />
        </div>
      )}

      {toplist.sixthPlaceName && (
        <div>
          <Typography
            variant="h2"
            sx={{ fontFamily: "Teko", fontSize: "30px" }}
          >
            6. {toplist.sixthPlaceName}
          </Typography>
          <Typography
            component={"div"}
            variant="body2"
            sx={{ fontFamily: "Montserrat", fontSize: "15px" }}
          >
            <i>{toplist.sixthPlaceTagline}</i>
          </Typography>

          <ToplistSpotCard
            spotId={toplist.sixthPlaceId}
            spotImage={toplist.sixthPlaceImage}
            spotName={toplist.sixthPlaceName}
            spotCoffeeRating={toplist.sixthPlaceCoffeeRating}
            spotFoodRating={toplist.sixthPlaceFoodRating}
            spotAmbienceRating={toplist.sixthPlaceAmbienceRating}
          />

<ToplistSpotDescription spotDescription={toplist.sixthPlaceDescription} />

          <ToplistConsumableCard
            consumableImage={toplist.sixthPlaceConsumableImage}
            consumableTitle={toplist.sixthPlaceConsumableTitle}
            consumableRating={toplist.sixthPlaceConsumableRating}
            consumablePrice={toplist.sixthPlaceConsumablePrice}
            consumableTagline={toplist.sixthPlaceConsumableTagline}
          />
        </div>
      )}

      {toplist.fifthPlaceName && (
        <div>
          <Typography
            variant="h2"
            sx={{ fontFamily: "Teko", fontSize: "30px" }}
          >
            5. {toplist.fifthPlaceName}
          </Typography>
          <Typography
            component={"div"}
            variant="body2"
            sx={{ fontFamily: "Montserrat", fontSize: "15px" }}
          >
            <i>{toplist.fifthPlaceTagline}</i>
          </Typography>

          <ToplistSpotCard
            spotId={toplist.fifthPlaceId}
            spotImage={toplist.fifthPlaceImage}
            spotName={toplist.fifthPlaceName}
            spotCoffeeRating={toplist.fifthPlaceCoffeeRating}
            spotFoodRating={toplist.fifthPlaceFoodRating}
            spotAmbienceRating={toplist.fifthPlaceAmbienceRating}
          />

<ToplistSpotDescription spotDescription={toplist.fifthPlaceDescription} />

          <ToplistConsumableCard
            consumableImage={toplist.fifthPlaceConsumableImage}
            consumableTitle={toplist.fifthPlaceConsumableTitle}
            consumableRating={toplist.fifthPlaceConsumableRating}
            consumablePrice={toplist.fifthPlaceConsumablePrice}
            consumableTagline={toplist.fifthPlaceConsumableTagline}
          />
        </div>
      )}

      {toplist.fourthPlaceName && (
        <div>
          <Typography
            variant="h2"
            sx={{ fontFamily: "Teko", fontSize: "30px" }}
          >
            4. {toplist.fourthPlaceName}
          </Typography>
          <Typography
            component={"div"}
            variant="body2"
            sx={{ fontFamily: "Montserrat", fontSize: "15px" }}
          >
            <i>{toplist.fourthPlaceTagline}</i>
          </Typography>

          <ToplistSpotCard
            spotId={toplist.fourthPlaceId}
            spotImage={toplist.fourthPlaceImage}
            spotName={toplist.fourthPlaceName}
            spotCoffeeRating={toplist.fourthPlaceCoffeeRating}
            spotFoodRating={toplist.fourthPlaceFoodRating}
            spotAmbienceRating={toplist.fourthPlaceAmbienceRating}
          />

<ToplistSpotDescription spotDescription={toplist.fourthPlaceDescription} />

          <ToplistConsumableCard
            consumableImage={toplist.fourthPlaceConsumableImage}
            consumableTitle={toplist.fourthPlaceConsumableTitle}
            consumableRating={toplist.fourthPlaceConsumableRating}
            consumablePrice={toplist.fourthPlaceConsumablePrice}
            consumableTagline={toplist.fourthPlaceConsumableTagline}
          />
        </div>
      )}

      {toplist.thirdPlaceName && (
        <div>
          <Typography
            variant="h2"
            sx={{ fontFamily: "Teko", fontSize: "30px" }}
          >
            3. {toplist.thirdPlaceName}
          </Typography>
          <Typography
            component={"div"}
            variant="body2"
            sx={{ fontFamily: "Montserrat", fontSize: "15px" }}
          >
            <i>{toplist.thirdPlaceTagline}</i>
          </Typography>

          <ToplistSpotCard
            spotId={toplist.thirdPlaceId}
            spotImage={toplist.thirdPlaceImage}
            spotName={toplist.thirdPlaceName}
            spotCoffeeRating={toplist.thirdPlaceCoffeeRating}
            spotFoodRating={toplist.thirdPlaceFoodRating}
            spotAmbienceRating={toplist.thirdPlaceAmbienceRating}
          />

<ToplistSpotDescription spotDescription={toplist.thirdPlaceDescription} />

          <ToplistConsumableCard
            consumableImage={toplist.thirdPlaceConsumableImage}
            consumableTitle={toplist.thirdPlaceConsumableTitle}
            consumableRating={toplist.thirdPlaceConsumableRating}
            consumablePrice={toplist.thirdPlaceConsumablePrice}
            consumableTagline={toplist.thirdPlaceConsumableTagline}
          />
        </div>
      )}

      {toplist.secondPlaceName && (
        <div>
          <Typography
            variant="h2"
            sx={{ fontFamily: "Teko", fontSize: "30px" }}
          >
            2. {toplist.secondPlaceName}
          </Typography>
          <Typography
            component={"div"}
            variant="body2"
            sx={{ fontFamily: "Montserrat", fontSize: "15px" }}
          >
            <i>{toplist.secondPlaceTagline}</i>
          </Typography>

          <ToplistSpotCard
            spotId={toplist.secondPlaceId}
            spotImage={toplist.secondPlaceImage}
            spotName={toplist.secondPlaceName}
            spotCoffeeRating={toplist.secondPlaceCoffeeRating}
            spotFoodRating={toplist.secondPlaceFoodRating}
            spotAmbienceRating={toplist.secondPlaceAmbienceRating}
          />

<ToplistSpotDescription spotDescription={toplist.secondPlaceDescription} />

          <ToplistConsumableCard
            consumableImage={toplist.secondPlaceConsumableImage}
            consumableTitle={toplist.secondPlaceConsumableTitle}
            consumableRating={toplist.secondPlaceConsumableRating}
            consumablePrice={toplist.secondPlaceConsumablePrice}
            consumableTagline={toplist.secondPlaceConsumableTagline}
          />
        </div>
      )}

      {toplist.firstPlaceName && (
        <div>
          <Typography
            variant="h2"
            sx={{ fontFamily: "Teko", fontSize: "30px" }}
          >
            1. {toplist.firstPlaceName}
          </Typography>
          <Typography
            component={"div"}
            variant="body2"
            sx={{ fontFamily: "Montserrat", fontSize: "15px" }}
          >
            <i>{toplist.firstPlaceTagline}</i>
          </Typography>

          <ToplistSpotCard
            spotId={toplist.firstPlaceId}
            spotImage={toplist.firstPlaceImage}
            spotName={toplist.firstPlaceName}
            spotCoffeeRating={toplist.firstPlaceCoffeeRating}
            spotFoodRating={toplist.firstPlaceFoodRating}
            spotAmbienceRating={toplist.firstPlaceAmbienceRating}
          />

<ToplistSpotDescription spotDescription={toplist.firstPlaceDescription} />

          <ToplistConsumableCard
            consumableImage={toplist.firstPlaceConsumableImage}
            consumableTitle={toplist.firstPlaceConsumableTitle}
            consumableRating={toplist.firstPlaceConsumableRating}
            consumablePrice={toplist.firstPlaceConsumablePrice}
            consumableTagline={toplist.firstPlaceConsumableTagline}
          />
        </div>
      )}
    </div>
  );
}

export default TopListDetailsPage;
