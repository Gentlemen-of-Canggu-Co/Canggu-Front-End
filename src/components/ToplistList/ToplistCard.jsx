import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import "../SpotList/spotlist.css";

function TopListCard(props) {
  const { toplists } = props;

  return (
    <div className="responsiveToplistTiling">
      {toplists.map((toplist) => {
        return (
          <div key={toplist._id} >

              <Card className="responsiveToplistListSizing">
                <Box sx={{ position: "relative" }}>
                  <CardMedia
                    sx={{ height: 200 }}
                    component="img"
                    loading="lazy"
                    image={toplist.heroImage}
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
                    <div
                      style={{
                        marginTop: "60px",
                        backgroundColor: "rgba(0, 0, 0, 0.54)",
                      }}
                    >
                      <Typography
                        component={"div"}
                        variant="h2"
                        sx={{ fontFamily: "Teko", fontSize: "50px" }}
                      >
                        {toplist.title}
                      </Typography>
                    </div>
                  </Box>
                </Box>
                <Typography style={{textAlign: "justify", padding: "10px 10px 0 10px"}}
                  component={"div"}
                  variant="body1"
                  sx={{ fontFamily: "Teko", fontSize: "20px" }}
                >
                  <i>{toplist.introText}</i>
                </Typography>

                <a style={{marginBottom: "10px"}} href={`/toplists/${toplist._id}`} className="btn btn-primary">Read more</a>
              </Card>
            {/* </Link> */}
          </div>
        );
      })}
    </div>
  );
}

export default TopListCard;