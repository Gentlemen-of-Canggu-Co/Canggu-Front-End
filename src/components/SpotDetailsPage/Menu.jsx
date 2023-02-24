import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Typography from "@mui/material/Typography";

function Menu(props) {
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
          <Typography component={'div'} sx={{ fontFamily: 'Teko', fontSize: "40px" }}>
            <h2>Menu</h2>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography component={'div'}>
            {spot.menuImage && (
              <img
                style={{ width: "25vw" }}
                src={spot.menuImage}
                alt="pictogram"
              />
            )}
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default Menu;
