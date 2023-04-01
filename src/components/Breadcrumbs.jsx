import Breadcrumb from 'react-bootstrap/Breadcrumb';

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

     { spot && <Breadcrumb>
      <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
      <Breadcrumb.Item href="/spots">
        Spots
      </Breadcrumb.Item>
      <Breadcrumb.Item active>{spot.name}</Breadcrumb.Item>
    </Breadcrumb>}  

    { toplist && <Breadcrumb>
      <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
      <Breadcrumb.Item href="/toplists">
        Toplists
      </Breadcrumb.Item>
      <Breadcrumb.Item active>{toplist.title}</Breadcrumb.Item>
    </Breadcrumb>}  
    </div>
    )
}

export default Breadcrumbs