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
      {" "}
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>
            <h2>Review</h2>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography style={{textAlign: "justify"}}>
            {spot.description}
            <Pictograms spot={spot} />
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default Description;
