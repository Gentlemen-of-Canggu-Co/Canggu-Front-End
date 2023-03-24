import Typography from "@mui/material/Typography";


function ToplistSpotDescription (props){
const {spotDescription} = props
    return <div>
                  <Typography className="toplistTexts"
            component={"div"}
            style={{ textAlign: "justify" }}
            sx={{ fontFamily: "Teko", fontSize: "20px" }}
          >
            {spotDescription}
          </Typography>
    </div>
}

export default ToplistSpotDescription