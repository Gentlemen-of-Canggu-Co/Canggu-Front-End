import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { Typography } from '@mui/material';

function Breadcrumbs(props){

  const {event, events, spots, spot, toplist} = props
    return (

   <div>
 { events && <Breadcrumb>
      <Breadcrumb.Item href="/">Home</Breadcrumb.Item>

      <Breadcrumb.Item active>Events</Breadcrumb.Item>
    </Breadcrumb>}

    { event && <Breadcrumb>
      <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
      <Breadcrumb.Item href="/events">
        Events
      </Breadcrumb.Item>
      <Breadcrumb.Item active>{event.name}</Breadcrumb.Item>
    </Breadcrumb>}

     { spots && <Breadcrumb>
      <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
      <Breadcrumb.Item active>Spots</Breadcrumb.Item>
    </Breadcrumb>}

     { spot && <Breadcrumb style={{marginTop:"16px", marginLeft: "16px"}}>
      <Breadcrumb.Item style={{fontFamily:"Teko", fontSize:"20px"}} href="/">Home</Breadcrumb.Item>
      <Breadcrumb.Item style={{fontFamily:"Teko", fontSize:"20px"}} href="/spots">
        Spots
      </Breadcrumb.Item>
      <Breadcrumb.Item active style={{fontFamily:"Teko", fontSize:"20px"}}>{spot.name}</Breadcrumb.Item>
    </Breadcrumb>}  

    { toplist && <Breadcrumb className="toplistBreadcrumbMargin" style={{marginTop:"16px"}}>
      <Breadcrumb.Item style={{fontFamily:"Teko", fontSize:"20px"}} href="/">Home</Breadcrumb.Item>
      <Breadcrumb.Item style={{fontFamily:"Teko", fontSize:"20px"}} href="/toplists">Toplists</Breadcrumb.Item>
      <Breadcrumb.Item style={{fontFamily:"Teko", fontSize:"20px"}} active>{toplist.title}</Breadcrumb.Item></Breadcrumb>}  
    </div>
    )
}

export default Breadcrumbs