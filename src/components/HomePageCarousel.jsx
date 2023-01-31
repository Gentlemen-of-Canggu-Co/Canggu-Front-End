import Carousel from 'react-bootstrap/Carousel';
import Bali1 from '../assets/images/Bali1.jpg';
import Bali2 from '../assets/images/Bali2.jpg';
import Bali3 from '../assets/images/Bali3.jpg';
function HomePageCarousel() {
  return (
    <Carousel className="carousel" fade>
      <Carousel.Item interval={5000}>
        <img
          className="d-block w-100"
          src={Bali1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>We don't offer a lot</h3>
          <p>But what we do offer...</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={5000}>
        <img
          className="d-block w-100"
          src={Bali2}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Is a guided tour of Canggu</h3>
          <p>And a chance to discover it's best bars, restaurants, and cafes...</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={5000}>
        <img
          className="d-block w-100"
          src={Bali3}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>So join us at our table, by the pool, or at the bar</h3>
          <p>
            And let's chow down in Canggu!
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
export default HomePageCarousel;