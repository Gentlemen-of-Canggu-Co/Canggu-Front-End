import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Typography from "@mui/material/Typography";

function Map(props) {
  const { spot } = props;

  return <Accordion>
  <AccordionSummary
    expandIcon={<ExpandMoreIcon />}
    aria-controls="panel1a-content"
    id="panel1a-header"
  >
    <Typography>
      <h2>Location</h2>
      </Typography>
</AccordionSummary>
        <AccordionDetails>
  <div dangerouslySetInnerHTML={{ __html: spot.location }} />;
  </AccordionDetails>
  </Accordion>

}

export default Map;
