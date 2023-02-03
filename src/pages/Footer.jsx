import {MDBFooter} from 'mdb-react-ui-kit';
import {Link} from 'react-router-dom';

function Footer(){

    return(
        <MDBFooter bgColor='light' className='text-center text-lg-left'>
        <div className='text-center p-1' style={{ backgroundColor: "black", color: "white" }}>
        <p>Made with ♡ by <a href="https://github.com/JohnDanaher">John</a> & <a href="https://github.com/StatueFilzball">Jan</a></p>
      </div>
      </MDBFooter>
    )
}

export default Footer