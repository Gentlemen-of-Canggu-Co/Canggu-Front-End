import Typography from "@mui/material/Typography";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

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
            <h2>Description</h2>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <p>{spot.description}</p>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default Description;
