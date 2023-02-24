import Typography from "@mui/material/Typography";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Pictograms from "./Pictograms";

function Description(props) {
  const { spot } = props;

  return (
<div>


    <div className="accordionHider">
      {" "}
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography component={'div'} sx={{ fontFamily: 'Teko', fontSize: "40px" }}>
            <h2>Review</h2>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography component={'div'} style={{textAlign: "justify"}} sx={{ fontFamily: 'Teko', fontSize: "20px" }}>
            {spot.description}
            <Pictograms spot={spot} />
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>

<div className="desktopDescription">



  <Typography component={"div"} variant="h1" sx={{ fontFamily: 'Teko', fontSize: "60px" }}>
                          {spot.name}
                        </Typography>
                        <Typography component={"div"} variant="body2" sx={{ fontFamily: 'Teko', fontSize: "15px" }}>
                          <i>{spot.tagline}</i>
                          <span className="badge bg-success" style={{margin: '5px'}}>{spot.priceLevel}</span>
                        </Typography>
                        <Typography sx={{ fontFamily: 'Teko', fontSize: "20px", textAlign: "justify" }}>{spot.description}</Typography>

                        <Pictograms spot={spot} />




</div>


</div>
  );
}

export default Description;
