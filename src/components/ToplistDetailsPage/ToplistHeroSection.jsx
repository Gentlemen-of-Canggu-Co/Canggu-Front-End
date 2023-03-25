import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import "../SpotList/spotlist.css"

function ToplistHeroSection(props){
const {toplistHeroImage, toplistTitle} = props

    return <div className="heroImage">
              <Card>
        <Box sx={{ position: "relative" }}>
          <CardMedia 
            sx={{ height: 220 }}
            image={toplistHeroImage}
            title={toplistTitle}
          />

          <Box
            sx={{
              position: "absolute",
              bottom: 70,
              left: 0,
              width: "100%",
              bgcolor: "rgba(0, 0, 0, 0.54)",
              color: "white",
              padding: "10px",
            }}
          >

              <Typography component={"div"} variant="h1" style={{fontSize: "50px", fontFamily: "Teko"}}>
                {toplistTitle}
              </Typography>

          </Box>
        </Box>
      </Card>
    </div>
}

export default ToplistHeroSection