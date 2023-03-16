import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import ProgressBar from "react-bootstrap/ProgressBar";
import "../SpotList/spotlist.css"
import { LazyLoadImage } from "react-lazy-load-image-component";

function TopListCard(props) {
    const { toplists } = props

    return (

        <div>

{toplists.map((toplist) => {
    return (
        <div key={toplist._id} style={{padding:"5px 3px"}}>
        <Link key={toplist._id} to={`/toplists/${toplist._id}`}>
        <Card className="cardSize" >
                  <Box sx={{ position: "relative" }}>
                    <CardMedia
                      sx={{ height: 200 }}
                      component = "img"
                      loading="lazy"
                      image="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Eq_it-na_pizza-margherita_sep2005_sml.jpg/800px-Eq_it-na_pizza-margherita_sep2005_sml.jpg"
                      title={toplist.title}
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
                        <Typography component={"div"} variant="h5" sx={{ fontFamily: 'Teko', fontSize: "30px" }}>
                          {toplist.title}
                        </Typography>
                        <Typography component={"div"} variant="body2" sx={{ fontFamily: 'Montserrat', fontSize: "15px" }}>
                          <i>{toplist.introText}</i>
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
        </Link>

        </div>
    )
})}

        </div>
    )
}

export default TopListCard