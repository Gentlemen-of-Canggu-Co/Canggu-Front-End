import Bali1 from '../assets/images/Bali1.jpg';
import Bali2 from '../assets/images/Bali2.jpg';
import Bali3 from '../assets/images/Bali3.jpg';


function HomePageCarousel() {
  return (
    <div>
    <div id="carouselExampleIndicators" class="carousel slide my-carousel my-carousel" data-ride="carousel">
      <ol class="carousel-indicators">
        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
      </ol>
      <div class="carousel-inner" role="listbox">
        <div class="carousel-item active" style={{backgroundImage: `url(${Bali1})`}}>

        </div>
          <div class="carousel-item " style={{backgroundImage: `url(${Bali2})`}}>

        </div>
        <div class="carousel-item " style={{backgroundImage: `url(${Bali3})`}}>

        </div>
      </div>
      <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
    </div>
  );
}

export default HomePageCarousel;