import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import Description from "../components/SpotDetailsPage/Description";
import EventCard from "../components/SpotDetailsPage/EventCard";
import SpotCard from "../components/SpotList/SpotCard";
import ConsumableCard from "../components/SpotDetailsPage/ConsumableCard";
import Loading from "../components/Loading/Loading";
import { AuthContext } from "../context/auth.context";
import "../components/SpotList/spotlist.css"
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import ProgressBar from "react-bootstrap/ProgressBar";
import "../components/SpotList/spotlist.css"

function TopListDetailsPage() {

    const { isLoggedIn } = useContext(AuthContext);
    const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5005";
    const { toplistId } = useParams();
    const [toplist, setToplist] = useState({});
    const [tenthPlaceSpotId, setTenthPlaceSpotId] = useState("")
    const [isLoading, setIsLoading] = useState(true)

    const getToplist = () => {
        setIsLoading(true)
        axios
          .get(`${API_URL}/api/toplists/${toplistId}`)
          .then((response) => {
            setToplist(response.data);
            setIsLoading(false)});
      }

    
      useEffect(() => {
        getToplist()
      }, [toplistId]);
    
      if(isLoading){
        return <Loading/>
      }

    return(
        <div>
        <img src={toplist.heroImage} alt={toplist.title} style={{width: "100vw"}}/>
<h1>{toplist.title}</h1>
<p>{toplist.introText}</p>

{toplist.tenthPlaceName && <div>
<h2>10. {toplist.tenthPlaceName}</h2>

<Link to={`/spots/${toplist.tenthPlaceId}`}>
                <Card className="cardSize" >
                  <Box sx={{ position: "relative" }}>
                    <CardMedia
                      sx={{ height: 200 }}
                      component = "img"
                      loading="lazy"
                      image={toplist.tenthPlaceImage}
                      title={toplist.tenthPlaceName}
                    />

                    <Box
                      sx={{
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        bgcolor: "rgba(0, 0, 0, 0.14)",
                        color: "white",
                        padding: "10px",
                      }}
                    >
                      <div>
                        <Typography component={"div"} variant="h2" sx={{ fontFamily: 'Teko', fontSize: "30px" }}>
                         {toplist.tenthPlaceName}
                        </Typography>
                        <Typography component={"div"} variant="body2" sx={{ fontFamily: 'Montserrat', fontSize: "15px" }}>
                          <i>{toplist.tenthPlaceTagline}</i>
                          <span className="badge bg-success" style={{margin: '5px'}}>{toplist.tenthPlacePriceLevel}</span>
                          <span>
                          <CardContent>
                    <Typography
                      component={"div"}
                      variant="body2"
                      color="text.secondary"
                    >
                      
                    </Typography>
                  </CardContent>
                          </span>
                        </Typography>
                        
                      </div>
                    </Box>
                  </Box>
                </Card>
                <div style={{ display: "flex" }}>
                        <div style={{ display: "flex", width: "24vw" }}>
                          <div
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              justifyContent: "space-evenly",
                              paddingLeft: "0",
                            }}
                          >
                            <ProgressBar
                              className="bg-secondary progressBarSize"
                              animated={true}
                              now={toplist.tenthPlaceCoffeeRating}
                              label={`Coffee`}
                            />
                            <ProgressBar
                              className="bg-secondary progressBarSize"
                              animated={true}
                              now={toplist.tenthPlaceFoodRating}
                              label={`Food`}
                            />
                            <ProgressBar
                              className="bg-secondary progressBarSize"
                              animated={true}
                              now={toplist.tenthPlaceAmbienceRating}
                              label={`Ambience`}
                            />
                          </div>
                        </div>
                      </div>
              </Link>
              <p>{toplist.tenthPlaceDescription}</p>

              <Card className="cardSize">
                      <Box sx={{ position: "relative" }}>
                        <CardMedia
                          sx={{ height: 220 }}
                          image={toplist.tenthPlaceConsumableImage}
                          title={toplist.tenthPlaceConsumableTitle}
                        />

                        <Box
                          sx={{
                            position: "absolute",
                            bottom: 0,
                            left: 0,
                            width: "100%",
                            bgcolor: "rgba(0, 0, 0, 0.54)",
                            color: "white",
                            padding: "10px",
                          }}
                        >
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                              alignItems: "center",
                            }}
                          >
                            <div>
                              <Typography component={'div'} variant="h5">
                                {toplist.tenthPlaceConsumableTitle}
                              </Typography>
                              <Typography component={'div'} variant="body2">
                                {toplist.tenthPlaceConsumableTagline}
                              </Typography>
                            </div>
                            <Typography component={'div'} className="badge bg-secondary" style={{margin: '5px'}}>Price<br></br>{toplist.tenthPlaceConsumablePrice}k</Typography>                            
                            
                           {toplist.tenthPlaceConsumableRating > 79 && <Typography className="badge bg-success">
                            Score <br></br>
                              {toplist.tenthPlaceConsumableRating}
                              </Typography>}

                              {toplist.tenthPlaceConsumableRating > 59 && toplist.tenthPlaceConsumableRating< 80 && <Typography className="badge bg-warning">
                            Score <br></br>
                              {toplist.tenthPlaceConsumableRating}
                              </Typography>}

                              {toplist.tenthPlaceConsumableRating< 60 && <Typography className="badge bg-danger">
                            Score <br></br>
                              {toplist.tenthPlaceConsumableRating}
                              </Typography>}

                          </div>
                        </Box>
                      </Box>

                    </Card>
</div>}

{toplist.ninthPlaceName && <div>
<h2>9. {toplist.ninthPlaceName}</h2>

<Link to={`/spots/${toplist.ninthPlaceId}`}>
                <Card className="cardSize" >
                  <Box sx={{ position: "relative" }}>
                    <CardMedia
                      sx={{ height: 200 }}
                      component = "img"
                      loading="lazy"
                      image={toplist.ninthPlaceImage}
                      title={toplist.ninthPlaceName}
                    />

                    <Box
                      sx={{
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        bgcolor: "rgba(0, 0, 0, 0.14)",
                        color: "white",
                        padding: "10px",
                      }}
                    >
                      <div>
                        <Typography component={"div"} variant="h2" sx={{ fontFamily: 'Teko', fontSize: "30px" }}>
                         {toplist.ninthPlaceName}
                        </Typography>
                        <Typography component={"div"} variant="body2" sx={{ fontFamily: 'Montserrat', fontSize: "15px" }}>
                          <i>{toplist.ninthPlaceTagline}</i>
                          <span className="badge bg-success" style={{margin: '5px'}}>{toplist.ninthPlacePriceLevel}</span>
                          <span>
                          <CardContent>
                    <Typography
                      component={"div"}
                      variant="body2"
                      color="text.secondary"
                    >
                      
                    </Typography>
                  </CardContent>
                          </span>
                        </Typography>
                        
                      </div>
                    </Box>
                  </Box>
                </Card>
                <div style={{ display: "flex" }}>
                        <div style={{ display: "flex", width: "24vw" }}>
                          <div
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              justifyContent: "space-evenly",
                              paddingLeft: "0",
                            }}
                          >
                            <ProgressBar
                              className="bg-secondary progressBarSize"
                              animated={true}
                              now={toplist.ninthPlaceCoffeeRating}
                              label={`Coffee`}
                            />
                            <ProgressBar
                              className="bg-secondary progressBarSize"
                              animated={true}
                              now={toplist.ninthPlaceFoodRating}
                              label={`Food`}
                            />
                            <ProgressBar
                              className="bg-secondary progressBarSize"
                              animated={true}
                              now={toplist.ninthPlaceAmbienceRating}
                              label={`Ambience`}
                            />
                          </div>
                        </div>
                      </div>
              </Link>
              <p>{toplist.ninthPlaceDescription}</p>

              <Card className="cardSize">
                      <Box sx={{ position: "relative" }}>
                        <CardMedia
                          sx={{ height: 220 }}
                          image={toplist.ninthPlaceConsumableImage}
                          title={toplist.ninthPlaceConsumableTitle}
                        />

                        <Box
                          sx={{
                            position: "absolute",
                            bottom: 0,
                            left: 0,
                            width: "100%",
                            bgcolor: "rgba(0, 0, 0, 0.54)",
                            color: "white",
                            padding: "10px",
                          }}
                        >
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                              alignItems: "center",
                            }}
                          >
                            <div>
                              <Typography component={'div'} variant="h5">
                                {toplist.ninthPlaceConsumableTitle}
                              </Typography>
                              <Typography component={'div'} variant="body2">
                                {toplist.ninthPlaceConsumableTagline}
                              </Typography>
                            </div>
                            <Typography component={'div'} className="badge bg-secondary" style={{margin: '5px'}}>Price<br></br>{toplist.ninthPlaceConsumablePrice}k</Typography>                            
                            
                           {toplist.ninthPlaceConsumableRating > 79 && <Typography className="badge bg-success">
                            Score <br></br>
                              {toplist.ninthPlaceConsumableRating}
                              </Typography>}

                              {toplist.ninthPlaceConsumableRating > 59 && toplist.ninthPlaceConsumableRating< 80 && <Typography className="badge bg-warning">
                            Score <br></br>
                              {toplist.ninthPlaceConsumableRating}
                              </Typography>}

                              {toplist.ninthPlaceConsumableRating< 60 && <Typography className="badge bg-danger">
                            Score <br></br>
                              {toplist.ninthPlaceConsumableRating}
                              </Typography>}

                          </div>
                        </Box>
                      </Box>

                    </Card>
</div>}

{toplist.eigthPlaceName && <div>
<h2>8. {toplist.eigthPlaceName}</h2>

<Link to={`/spots/${toplist.eigthPlaceId}`}>
                <Card className="cardSize" >
                  <Box sx={{ position: "relative" }}>
                    <CardMedia
                      sx={{ height: 200 }}
                      component = "img"
                      loading="lazy"
                      image={toplist.eigthPlaceImage}
                      title={toplist.eigthPlaceName}
                    />

                    <Box
                      sx={{
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        bgcolor: "rgba(0, 0, 0, 0.14)",
                        color: "white",
                        padding: "10px",
                      }}
                    >
                      <div>
                        <Typography component={"div"} variant="h2" sx={{ fontFamily: 'Teko', fontSize: "30px" }}>
                         {toplist.eigthPlaceName}
                        </Typography>
                        <Typography component={"div"} variant="body2" sx={{ fontFamily: 'Montserrat', fontSize: "15px" }}>
                          <i>{toplist.eigthPlaceTagline}</i>
                          <span className="badge bg-success" style={{margin: '5px'}}>{toplist.eigthPlacePriceLevel}</span>
                          <span>
                          <CardContent>
                    <Typography
                      component={"div"}
                      variant="body2"
                      color="text.secondary"
                    >
                      
                    </Typography>
                  </CardContent>
                          </span>
                        </Typography>
                        
                      </div>
                    </Box>
                  </Box>
                </Card>
                <div style={{ display: "flex" }}>
                        <div style={{ display: "flex", width: "24vw" }}>
                          <div
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              justifyContent: "space-evenly",
                              paddingLeft: "0",
                            }}
                          >
                            <ProgressBar
                              className="bg-secondary progressBarSize"
                              animated={true}
                              now={toplist.eigthPlaceCoffeeRating}
                              label={`Coffee`}
                            />
                            <ProgressBar
                              className="bg-secondary progressBarSize"
                              animated={true}
                              now={toplist.eigthPlaceFoodRating}
                              label={`Food`}
                            />
                            <ProgressBar
                              className="bg-secondary progressBarSize"
                              animated={true}
                              now={toplist.eigthPlaceAmbienceRating}
                              label={`Ambience`}
                            />
                          </div>
                        </div>
                      </div>
              </Link>
              <p>{toplist.eigthPlaceDescription}</p>

              <Card className="cardSize">
                      <Box sx={{ position: "relative" }}>
                        <CardMedia
                          sx={{ height: 220 }}
                          image={toplist.eigthPlaceConsumableImage}
                          title={toplist.eigthPlaceConsumableTitle}
                        />

                        <Box
                          sx={{
                            position: "absolute",
                            bottom: 0,
                            left: 0,
                            width: "100%",
                            bgcolor: "rgba(0, 0, 0, 0.54)",
                            color: "white",
                            padding: "10px",
                          }}
                        >
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                              alignItems: "center",
                            }}
                          >
                            <div>
                              <Typography component={'div'} variant="h5">
                                {toplist.eigthPlaceConsumableTitle}
                              </Typography>
                              <Typography component={'div'} variant="body2">
                                {toplist.eigthPlaceConsumableTagline}
                              </Typography>
                            </div>
                            <Typography component={'div'} className="badge bg-secondary" style={{margin: '5px'}}>Price<br></br>{toplist.eigthPlaceConsumablePrice}k</Typography>                            
                            
                           {toplist.eigthPlaceConsumableRating > 79 && <Typography className="badge bg-success">
                            Score <br></br>
                              {toplist.eigthPlaceConsumableRating}
                              </Typography>}

                              {toplist.eigthPlaceConsumableRating > 59 && toplist.eigthPlaceConsumableRating< 80 && <Typography className="badge bg-warning">
                            Score <br></br>
                              {toplist.eigthPlaceConsumableRating}
                              </Typography>}

                              {toplist.eigthPlaceConsumableRating< 60 && <Typography className="badge bg-danger">
                            Score <br></br>
                              {toplist.eigthPlaceConsumableRating}
                              </Typography>}

                          </div>
                        </Box>
                      </Box>

                    </Card>
</div>}

{toplist.seventhPlaceName && <div>
<h2>7. {toplist.seventhPlaceName}</h2>

<Link to={`/spots/${toplist.seventhPlaceId}`}>
                <Card className="cardSize" >
                  <Box sx={{ position: "relative" }}>
                    <CardMedia
                      sx={{ height: 200 }}
                      component = "img"
                      loading="lazy"
                      image={toplist.seventhPlaceImage}
                      title={toplist.seventhPlaceName}
                    />

                    <Box
                      sx={{
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        bgcolor: "rgba(0, 0, 0, 0.14)",
                        color: "white",
                        padding: "10px",
                      }}
                    >
                      <div>
                        <Typography component={"div"} variant="h2" sx={{ fontFamily: 'Teko', fontSize: "30px" }}>
                         {toplist.seventhPlaceName}
                        </Typography>
                        <Typography component={"div"} variant="body2" sx={{ fontFamily: 'Montserrat', fontSize: "15px" }}>
                          <i>{toplist.seventhPlaceTagline}</i>
                          <span className="badge bg-success" style={{margin: '5px'}}>{toplist.seventhPlacePriceLevel}</span>
                          <span>
                          <CardContent>
                    <Typography
                      component={"div"}
                      variant="body2"
                      color="text.secondary"
                    >
                      
                    </Typography>
                  </CardContent>
                          </span>
                        </Typography>
                        
                      </div>
                    </Box>
                  </Box>
                </Card>
                <div style={{ display: "flex" }}>
                        <div style={{ display: "flex", width: "24vw" }}>
                          <div
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              justifyContent: "space-evenly",
                              paddingLeft: "0",
                            }}
                          >
                            <ProgressBar
                              className="bg-secondary progressBarSize"
                              animated={true}
                              now={toplist.seventhPlaceCoffeeRating}
                              label={`Coffee`}
                            />
                            <ProgressBar
                              className="bg-secondary progressBarSize"
                              animated={true}
                              now={toplist.seventhPlaceFoodRating}
                              label={`Food`}
                            />
                            <ProgressBar
                              className="bg-secondary progressBarSize"
                              animated={true}
                              now={toplist.seventhPlaceAmbienceRating}
                              label={`Ambience`}
                            />
                          </div>
                        </div>
                      </div>
              </Link>
              <p>{toplist.seventhPlaceDescription}</p>

              <Card className="cardSize">
                      <Box sx={{ position: "relative" }}>
                        <CardMedia
                          sx={{ height: 220 }}
                          image={toplist.seventhPlaceConsumableImage}
                          title={toplist.seventhPlaceConsumableTitle}
                        />

                        <Box
                          sx={{
                            position: "absolute",
                            bottom: 0,
                            left: 0,
                            width: "100%",
                            bgcolor: "rgba(0, 0, 0, 0.54)",
                            color: "white",
                            padding: "10px",
                          }}
                        >
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                              alignItems: "center",
                            }}
                          >
                            <div>
                              <Typography component={'div'} variant="h5">
                                {toplist.seventhPlaceConsumableTitle}
                              </Typography>
                              <Typography component={'div'} variant="body2">
                                {toplist.seventhPlaceConsumableTagline}
                              </Typography>
                            </div>
                            <Typography component={'div'} className="badge bg-secondary" style={{margin: '5px'}}>Price<br></br>{toplist.seventhPlaceConsumablePrice}k</Typography>                            
                            
                           {toplist.seventhPlaceConsumableRating > 79 && <Typography className="badge bg-success">
                            Score <br></br>
                              {toplist.seventhPlaceConsumableRating}
                              </Typography>}

                              {toplist.seventhPlaceConsumableRating > 59 && toplist.seventhPlaceConsumableRating< 80 && <Typography className="badge bg-warning">
                            Score <br></br>
                              {toplist.seventhPlaceConsumableRating}
                              </Typography>}

                              {toplist.seventhPlaceConsumableRating< 60 && <Typography className="badge bg-danger">
                            Score <br></br>
                              {toplist.seventhPlaceConsumableRating}
                              </Typography>}

                          </div>
                        </Box>
                      </Box>

                    </Card>
</div>}

{toplist.sixthPlaceName && <div>
<h2>6. {toplist.sixthPlaceName}</h2>

<Link to={`/spots/${toplist.sixthPlaceId}`}>
                <Card className="cardSize" >
                  <Box sx={{ position: "relative" }}>
                    <CardMedia
                      sx={{ height: 200 }}
                      component = "img"
                      loading="lazy"
                      image={toplist.sixthPlaceImage}
                      title={toplist.sixthPlaceName}
                    />

                    <Box
                      sx={{
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        bgcolor: "rgba(0, 0, 0, 0.14)",
                        color: "white",
                        padding: "10px",
                      }}
                    >
                      <div>
                        <Typography component={"div"} variant="h2" sx={{ fontFamily: 'Teko', fontSize: "30px" }}>
                         {toplist.sixthPlaceName}
                        </Typography>
                        <Typography component={"div"} variant="body2" sx={{ fontFamily: 'Montserrat', fontSize: "15px" }}>
                          <i>{toplist.sixthPlaceTagline}</i>
                          <span className="badge bg-success" style={{margin: '5px'}}>{toplist.sixthPlacePriceLevel}</span>
                          <span>
                          <CardContent>
                    <Typography
                      component={"div"}
                      variant="body2"
                      color="text.secondary"
                    >
                      
                    </Typography>
                  </CardContent>
                          </span>
                        </Typography>
                        
                      </div>
                    </Box>
                  </Box>
                </Card>
                <div style={{ display: "flex" }}>
                        <div style={{ display: "flex", width: "24vw" }}>
                          <div
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              justifyContent: "space-evenly",
                              paddingLeft: "0",
                            }}
                          >
                            <ProgressBar
                              className="bg-secondary progressBarSize"
                              animated={true}
                              now={toplist.sixthPlaceCoffeeRating}
                              label={`Coffee`}
                            />
                            <ProgressBar
                              className="bg-secondary progressBarSize"
                              animated={true}
                              now={toplist.sixthPlaceFoodRating}
                              label={`Food`}
                            />
                            <ProgressBar
                              className="bg-secondary progressBarSize"
                              animated={true}
                              now={toplist.sixthPlaceAmbienceRating}
                              label={`Ambience`}
                            />
                          </div>
                        </div>
                      </div>
              </Link>
              <p>{toplist.sixthPlaceDescription}</p>

              <Card className="cardSize">
                      <Box sx={{ position: "relative" }}>
                        <CardMedia
                          sx={{ height: 220 }}
                          image={toplist.sixthPlaceConsumableImage}
                          title={toplist.sixthPlaceConsumableTitle}
                        />

                        <Box
                          sx={{
                            position: "absolute",
                            bottom: 0,
                            left: 0,
                            width: "100%",
                            bgcolor: "rgba(0, 0, 0, 0.54)",
                            color: "white",
                            padding: "10px",
                          }}
                        >
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                              alignItems: "center",
                            }}
                          >
                            <div>
                              <Typography component={'div'} variant="h5">
                                {toplist.sixthPlaceConsumableTitle}
                              </Typography>
                              <Typography component={'div'} variant="body2">
                                {toplist.sixthPlaceConsumableTagline}
                              </Typography>
                            </div>
                            <Typography component={'div'} className="badge bg-secondary" style={{margin: '5px'}}>Price<br></br>{toplist.sixthPlaceConsumablePrice}k</Typography>                            
                            
                           {toplist.sixthPlaceConsumableRating > 79 && <Typography className="badge bg-success">
                            Score <br></br>
                              {toplist.sixthPlaceConsumableRating}
                              </Typography>}

                              {toplist.sixthPlaceConsumableRating > 59 && toplist.sixthPlaceConsumableRating< 80 && <Typography className="badge bg-warning">
                            Score <br></br>
                              {toplist.sixthPlaceConsumableRating}
                              </Typography>}

                              {toplist.sixthPlaceConsumableRating< 60 && <Typography className="badge bg-danger">
                            Score <br></br>
                              {toplist.sixthPlaceConsumableRating}
                              </Typography>}

                          </div>
                        </Box>
                      </Box>

                    </Card>
</div>}

{toplist.fifthPlaceName && <div>
<h2>5. {toplist.fifthPlaceName}</h2>

<Link to={`/spots/${toplist.fifthPlaceId}`}>
                <Card className="cardSize" >
                  <Box sx={{ position: "relative" }}>
                    <CardMedia
                      sx={{ height: 200 }}
                      component = "img"
                      loading="lazy"
                      image={toplist.fifthPlaceImage}
                      title={toplist.fifthPlaceName}
                    />

                    <Box
                      sx={{
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        bgcolor: "rgba(0, 0, 0, 0.14)",
                        color: "white",
                        padding: "10px",
                      }}
                    >
                      <div>
                        <Typography component={"div"} variant="h2" sx={{ fontFamily: 'Teko', fontSize: "30px" }}>
                         {toplist.fifthPlaceName}
                        </Typography>
                        <Typography component={"div"} variant="body2" sx={{ fontFamily: 'Montserrat', fontSize: "15px" }}>
                          <i>{toplist.fifthPlaceTagline}</i>
                          <span className="badge bg-success" style={{margin: '5px'}}>{toplist.fifthPlacePriceLevel}</span>
                          <span>
                          <CardContent>
                    <Typography
                      component={"div"}
                      variant="body2"
                      color="text.secondary"
                    >
                      
                    </Typography>
                  </CardContent>
                          </span>
                        </Typography>
                        
                      </div>
                    </Box>
                  </Box>
                </Card>
                <div style={{ display: "flex" }}>
                        <div style={{ display: "flex", width: "24vw" }}>
                          <div
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              justifyContent: "space-evenly",
                              paddingLeft: "0",
                            }}
                          >
                            <ProgressBar
                              className="bg-secondary progressBarSize"
                              animated={true}
                              now={toplist.fifthPlaceCoffeeRating}
                              label={`Coffee`}
                            />
                            <ProgressBar
                              className="bg-secondary progressBarSize"
                              animated={true}
                              now={toplist.fifthPlaceFoodRating}
                              label={`Food`}
                            />
                            <ProgressBar
                              className="bg-secondary progressBarSize"
                              animated={true}
                              now={toplist.fifthPlaceAmbienceRating}
                              label={`Ambience`}
                            />
                          </div>
                        </div>
                      </div>
              </Link>
              <p>{toplist.fifthPlaceDescription}</p>

              <Card className="cardSize">
                      <Box sx={{ position: "relative" }}>
                        <CardMedia
                          sx={{ height: 220 }}
                          image={toplist.fifthPlaceConsumableImage}
                          title={toplist.fifthPlaceConsumableTitle}
                        />

                        <Box
                          sx={{
                            position: "absolute",
                            bottom: 0,
                            left: 0,
                            width: "100%",
                            bgcolor: "rgba(0, 0, 0, 0.54)",
                            color: "white",
                            padding: "10px",
                          }}
                        >
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                              alignItems: "center",
                            }}
                          >
                            <div>
                              <Typography component={'div'} variant="h5">
                                {toplist.fifthPlaceConsumableTitle}
                              </Typography>
                              <Typography component={'div'} variant="body2">
                                {toplist.fifthPlaceConsumableTagline}
                              </Typography>
                            </div>
                            <Typography component={'div'} className="badge bg-secondary" style={{margin: '5px'}}>Price<br></br>{toplist.fifthPlaceConsumablePrice}k</Typography>                            
                            
                           {toplist.fifthPlaceConsumableRating > 79 && <Typography className="badge bg-success">
                            Score <br></br>
                              {toplist.fifthPlaceConsumableRating}
                              </Typography>}

                              {toplist.fifthPlaceConsumableRating > 59 && toplist.fifthPlaceConsumableRating< 80 && <Typography className="badge bg-warning">
                            Score <br></br>
                              {toplist.fifthPlaceConsumableRating}
                              </Typography>}

                              {toplist.fifthPlaceConsumableRating< 60 && <Typography className="badge bg-danger">
                            Score <br></br>
                              {toplist.fifthPlaceConsumableRating}
                              </Typography>}

                          </div>
                        </Box>
                      </Box>

                    </Card>
</div>}

{toplist.fourthPlaceName && <div>
<h2>4. {toplist.fourthPlaceName}</h2>

<Link to={`/spots/${toplist.fourthPlaceId}`}>
                <Card className="cardSize" >
                  <Box sx={{ position: "relative" }}>
                    <CardMedia
                      sx={{ height: 200 }}
                      component = "img"
                      loading="lazy"
                      image={toplist.fourthPlaceImage}
                      title={toplist.fourthPlaceName}
                    />

                    <Box
                      sx={{
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        bgcolor: "rgba(0, 0, 0, 0.14)",
                        color: "white",
                        padding: "10px",
                      }}
                    >
                      <div>
                        <Typography component={"div"} variant="h2" sx={{ fontFamily: 'Teko', fontSize: "30px" }}>
                         {toplist.fourthPlaceName}
                        </Typography>
                        <Typography component={"div"} variant="body2" sx={{ fontFamily: 'Montserrat', fontSize: "15px" }}>
                          <i>{toplist.fourthPlaceTagline}</i>
                          <span className="badge bg-success" style={{margin: '5px'}}>{toplist.fourthPlacePriceLevel}</span>
                          <span>
                          <CardContent>
                    <Typography
                      component={"div"}
                      variant="body2"
                      color="text.secondary"
                    >
                      
                    </Typography>
                  </CardContent>
                          </span>
                        </Typography>
                        
                      </div>
                    </Box>
                  </Box>
                </Card>
                <div style={{ display: "flex" }}>
                        <div style={{ display: "flex", width: "24vw" }}>
                          <div
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              justifyContent: "space-evenly",
                              paddingLeft: "0",
                            }}
                          >
                            <ProgressBar
                              className="bg-secondary progressBarSize"
                              animated={true}
                              now={toplist.fourthPlaceCoffeeRating}
                              label={`Coffee`}
                            />
                            <ProgressBar
                              className="bg-secondary progressBarSize"
                              animated={true}
                              now={toplist.fourthPlaceFoodRating}
                              label={`Food`}
                            />
                            <ProgressBar
                              className="bg-secondary progressBarSize"
                              animated={true}
                              now={toplist.fourthPlaceAmbienceRating}
                              label={`Ambience`}
                            />
                          </div>
                        </div>
                      </div>
              </Link>
              <p>{toplist.fourthPlaceDescription}</p>

              <Card className="cardSize">
                      <Box sx={{ position: "relative" }}>
                        <CardMedia
                          sx={{ height: 220 }}
                          image={toplist.fourthPlaceConsumableImage}
                          title={toplist.fourthPlaceConsumableTitle}
                        />

                        <Box
                          sx={{
                            position: "absolute",
                            bottom: 0,
                            left: 0,
                            width: "100%",
                            bgcolor: "rgba(0, 0, 0, 0.54)",
                            color: "white",
                            padding: "10px",
                          }}
                        >
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                              alignItems: "center",
                            }}
                          >
                            <div>
                              <Typography component={'div'} variant="h5">
                                {toplist.fourthPlaceConsumableTitle}
                              </Typography>
                              <Typography component={'div'} variant="body2">
                                {toplist.fourthPlaceConsumableTagline}
                              </Typography>
                            </div>
                            <Typography component={'div'} className="badge bg-secondary" style={{margin: '5px'}}>Price<br></br>{toplist.fourthPlaceConsumablePrice}k</Typography>                            
                            
                           {toplist.fourthPlaceConsumableRating > 79 && <Typography className="badge bg-success">
                            Score <br></br>
                              {toplist.fourthPlaceConsumableRating}
                              </Typography>}

                              {toplist.fourthPlaceConsumableRating > 59 && toplist.fourthPlaceConsumableRating< 80 && <Typography className="badge bg-warning">
                            Score <br></br>
                              {toplist.fourthPlaceConsumableRating}
                              </Typography>}

                              {toplist.fourthPlaceConsumableRating< 60 && <Typography className="badge bg-danger">
                            Score <br></br>
                              {toplist.fourthPlaceConsumableRating}
                              </Typography>}

                          </div>
                        </Box>
                      </Box>

                    </Card>
</div>}

{toplist.thirdPlaceName && <div>
<h2>3. {toplist.thirdPlaceName}</h2>

<Link to={`/spots/${toplist.thirdPlaceId}`}>
                <Card className="cardSize" >
                  <Box sx={{ position: "relative" }}>
                    <CardMedia
                      sx={{ height: 200 }}
                      component = "img"
                      loading="lazy"
                      image={toplist.thirdPlaceImage}
                      title={toplist.thirdPlaceName}
                    />

                    <Box
                      sx={{
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        bgcolor: "rgba(0, 0, 0, 0.14)",
                        color: "white",
                        padding: "10px",
                      }}
                    >
                      <div>
                        <Typography component={"div"} variant="h2" sx={{ fontFamily: 'Teko', fontSize: "30px" }}>
                         {toplist.thirdPlaceName}
                        </Typography>
                        <Typography component={"div"} variant="body2" sx={{ fontFamily: 'Montserrat', fontSize: "15px" }}>
                          <i>{toplist.thirdPlaceTagline}</i>
                          <span className="badge bg-success" style={{margin: '5px'}}>{toplist.thirdPlacePriceLevel}</span>
                          <span>
                          <CardContent>
                    <Typography
                      component={"div"}
                      variant="body2"
                      color="text.secondary"
                    >
                      
                    </Typography>
                  </CardContent>
                          </span>
                        </Typography>
                        
                      </div>
                    </Box>
                  </Box>
                </Card>
                <div style={{ display: "flex" }}>
                        <div style={{ display: "flex", width: "24vw" }}>
                          <div
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              justifyContent: "space-evenly",
                              paddingLeft: "0",
                            }}
                          >
                            <ProgressBar
                              className="bg-secondary progressBarSize"
                              animated={true}
                              now={toplist.thirdPlaceCoffeeRating}
                              label={`Coffee`}
                            />
                            <ProgressBar
                              className="bg-secondary progressBarSize"
                              animated={true}
                              now={toplist.thirdPlaceFoodRating}
                              label={`Food`}
                            />
                            <ProgressBar
                              className="bg-secondary progressBarSize"
                              animated={true}
                              now={toplist.thirdPlaceAmbienceRating}
                              label={`Ambience`}
                            />
                          </div>
                        </div>
                      </div>
              </Link>
              <p>{toplist.thirdPlaceDescription}</p>

              <Card className="cardSize">
                      <Box sx={{ position: "relative" }}>
                        <CardMedia
                          sx={{ height: 220 }}
                          image={toplist.thirdPlaceConsumableImage}
                          title={toplist.thirdPlaceConsumableTitle}
                        />

                        <Box
                          sx={{
                            position: "absolute",
                            bottom: 0,
                            left: 0,
                            width: "100%",
                            bgcolor: "rgba(0, 0, 0, 0.54)",
                            color: "white",
                            padding: "10px",
                          }}
                        >
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                              alignItems: "center",
                            }}
                          >
                            <div>
                              <Typography component={'div'} variant="h5">
                                {toplist.thirdPlaceConsumableTitle}
                              </Typography>
                              <Typography component={'div'} variant="body2">
                                {toplist.thirdPlaceConsumableTagline}
                              </Typography>
                            </div>
                            <Typography component={'div'} className="badge bg-secondary" style={{margin: '5px'}}>Price<br></br>{toplist.thirdPlaceConsumablePrice}k</Typography>                            
                            
                           {toplist.thirdPlaceConsumableRating > 79 && <Typography className="badge bg-success">
                            Score <br></br>
                              {toplist.thirdPlaceConsumableRating}
                              </Typography>}

                              {toplist.thirdPlaceConsumableRating > 59 && toplist.thirdPlaceConsumableRating< 80 && <Typography className="badge bg-warning">
                            Score <br></br>
                              {toplist.thirdPlaceConsumableRating}
                              </Typography>}

                              {toplist.thirdPlaceConsumableRating< 60 && <Typography className="badge bg-danger">
                            Score <br></br>
                              {toplist.thirdPlaceConsumableRating}
                              </Typography>}

                          </div>
                        </Box>
                      </Box>

                    </Card>
</div>}

{toplist.secondPlaceName && <div>
<h2>2. {toplist.secondPlaceName}</h2>

<Link to={`/spots/${toplist.secondPlaceId}`}>
                <Card className="cardSize" >
                  <Box sx={{ position: "relative" }}>
                    <CardMedia
                      sx={{ height: 200 }}
                      component = "img"
                      loading="lazy"
                      image={toplist.secondPlaceImage}
                      title={toplist.secondPlaceName}
                    />

                    <Box
                      sx={{
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        bgcolor: "rgba(0, 0, 0, 0.14)",
                        color: "white",
                        padding: "10px",
                      }}
                    >
                      <div>
                        <Typography component={"div"} variant="h2" sx={{ fontFamily: 'Teko', fontSize: "30px" }}>
                         {toplist.secondPlaceName}
                        </Typography>
                        <Typography component={"div"} variant="body2" sx={{ fontFamily: 'Montserrat', fontSize: "15px" }}>
                          <i>{toplist.secondPlaceTagline}</i>
                          <span className="badge bg-success" style={{margin: '5px'}}>{toplist.secondPlacePriceLevel}</span>
                          <span>
                          <CardContent>
                    <Typography
                      component={"div"}
                      variant="body2"
                      color="text.secondary"
                    >
                      
                    </Typography>
                  </CardContent>
                          </span>
                        </Typography>
                        
                      </div>
                    </Box>
                  </Box>
                </Card>
                <div style={{ display: "flex" }}>
                        <div style={{ display: "flex", width: "24vw" }}>
                          <div
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              justifyContent: "space-evenly",
                              paddingLeft: "0",
                            }}
                          >
                            <ProgressBar
                              className="bg-secondary progressBarSize"
                              animated={true}
                              now={toplist.secondPlaceCoffeeRating}
                              label={`Coffee`}
                            />
                            <ProgressBar
                              className="bg-secondary progressBarSize"
                              animated={true}
                              now={toplist.secondPlaceFoodRating}
                              label={`Food`}
                            />
                            <ProgressBar
                              className="bg-secondary progressBarSize"
                              animated={true}
                              now={toplist.secondPlaceAmbienceRating}
                              label={`Ambience`}
                            />
                          </div>
                        </div>
                      </div>
              </Link>
              <p>{toplist.secondPlaceDescription}</p>

              <Card className="cardSize">
                      <Box sx={{ position: "relative" }}>
                        <CardMedia
                          sx={{ height: 220 }}
                          image={toplist.secondPlaceConsumableImage}
                          title={toplist.secondPlaceConsumableTitle}
                        />

                        <Box
                          sx={{
                            position: "absolute",
                            bottom: 0,
                            left: 0,
                            width: "100%",
                            bgcolor: "rgba(0, 0, 0, 0.54)",
                            color: "white",
                            padding: "10px",
                          }}
                        >
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                              alignItems: "center",
                            }}
                          >
                            <div>
                              <Typography component={'div'} variant="h5">
                                {toplist.secondPlaceConsumableTitle}
                              </Typography>
                              <Typography component={'div'} variant="body2">
                                {toplist.secondPlaceConsumableTagline}
                              </Typography>
                            </div>
                            <Typography component={'div'} className="badge bg-secondary" style={{margin: '5px'}}>Price<br></br>{toplist.secondPlaceConsumablePrice}k</Typography>                            
                            
                           {toplist.secondPlaceConsumableRating > 79 && <Typography className="badge bg-success">
                            Score <br></br>
                              {toplist.secondPlaceConsumableRating}
                              </Typography>}

                              {toplist.secondPlaceConsumableRating > 59 && toplist.secondPlaceConsumableRating< 80 && <Typography className="badge bg-warning">
                            Score <br></br>
                              {toplist.secondPlaceConsumableRating}
                              </Typography>}

                              {toplist.secondPlaceConsumableRating< 60 && <Typography className="badge bg-danger">
                            Score <br></br>
                              {toplist.secondPlaceConsumableRating}
                              </Typography>}

                          </div>
                        </Box>
                      </Box>

                    </Card>
</div>}

{toplist.firstPlaceName && <div>
<h2>1. {toplist.firstPlaceName}</h2>

<Link to={`/spots/${toplist.firstPlaceId}`}>
                <Card className="cardSize" >
                  <Box sx={{ position: "relative" }}>
                    <CardMedia
                      sx={{ height: 200 }}
                      component = "img"
                      loading="lazy"
                      image={toplist.firstPlaceImage}
                      title={toplist.firstPlaceName}
                    />

                    <Box
                      sx={{
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        bgcolor: "rgba(0, 0, 0, 0.14)",
                        color: "white",
                        padding: "10px",
                      }}
                    >
                      <div>
                        <Typography component={"div"} variant="h2" sx={{ fontFamily: 'Teko', fontSize: "30px" }}>
                         {toplist.firstPlaceName}
                        </Typography>
                        <Typography component={"div"} variant="body2" sx={{ fontFamily: 'Montserrat', fontSize: "15px" }}>
                          <i>{toplist.firstPlaceTagline}</i>
                          <span className="badge bg-success" style={{margin: '5px'}}>{toplist.firstPlacePriceLevel}</span>
                          <span>
                          <CardContent>
                    <Typography
                      component={"div"}
                      variant="body2"
                      color="text.secondary"
                    >
                      
                    </Typography>
                  </CardContent>
                          </span>
                        </Typography>
                        
                      </div>
                    </Box>
                  </Box>
                </Card>
                <div style={{ display: "flex" }}>
                        <div style={{ display: "flex", width: "24vw" }}>
                          <div
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              justifyContent: "space-evenly",
                              paddingLeft: "0",
                            }}
                          >
                            <ProgressBar
                              className="bg-secondary progressBarSize"
                              animated={true}
                              now={toplist.firstPlaceCoffeeRating}
                              label={`Coffee`}
                            />
                            <ProgressBar
                              className="bg-secondary progressBarSize"
                              animated={true}
                              now={toplist.firstPlaceFoodRating}
                              label={`Food`}
                            />
                            <ProgressBar
                              className="bg-secondary progressBarSize"
                              animated={true}
                              now={toplist.firstPlaceAmbienceRating}
                              label={`Ambience`}
                            />
                          </div>
                        </div>
                      </div>
              </Link>
              <p>{toplist.firstPlaceDescription}</p>

              <Card className="cardSize">
                      <Box sx={{ position: "relative" }}>
                        <CardMedia
                          sx={{ height: 220 }}
                          image={toplist.firstPlaceConsumableImage}
                          title={toplist.firstPlaceConsumableTitle}
                        />

                        <Box
                          sx={{
                            position: "absolute",
                            bottom: 0,
                            left: 0,
                            width: "100%",
                            bgcolor: "rgba(0, 0, 0, 0.54)",
                            color: "white",
                            padding: "10px",
                          }}
                        >
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                              alignItems: "center",
                            }}
                          >
                            <div>
                              <Typography component={'div'} variant="h5">
                                {toplist.firstPlaceConsumableTitle}
                              </Typography>
                              <Typography component={'div'} variant="body2">
                                {toplist.firstPlaceConsumableTagline}
                              </Typography>
                            </div>
                            <Typography component={'div'} className="badge bg-secondary" style={{margin: '5px'}}>Price<br></br>{toplist.firstPlaceConsumablePrice}k</Typography>                            
                            
                           {toplist.firstPlaceConsumableRating > 79 && <Typography className="badge bg-success">
                            Score <br></br>
                              {toplist.firstPlaceConsumableRating}
                              </Typography>}

                              {toplist.firstPlaceConsumableRating > 59 && toplist.firstPlaceConsumableRating< 80 && <Typography className="badge bg-warning">
                            Score <br></br>
                              {toplist.firstPlaceConsumableRating}
                              </Typography>}

                              {toplist.firstPlaceConsumableRating< 60 && <Typography className="badge bg-danger">
                            Score <br></br>
                              {toplist.firstPlaceConsumableRating}
                              </Typography>}

                          </div>
                        </Box>
                      </Box>

                    </Card>
</div>}


        </div>
    )
}

export default TopListDetailsPage