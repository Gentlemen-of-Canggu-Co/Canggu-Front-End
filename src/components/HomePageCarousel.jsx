import Bali1 from '../assets/images/Bali1.jpg';
import Bali2 from '../assets/images/Bali2.jpg';
import Bali4 from '../assets/images/Bali4.jpg';


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
        <div class="jumbotron">
  <h1 class="display-4">Welcome to Chunks of Canggu</h1>
  <p class="lead">Let us show you around</p>
</div>
        </div>
          <div class="carousel-item " style={{backgroundImage: `url(${Bali2})`}}>
          <div class="jumbotron">
  <h1 class="display-4">Explore the best Spots in town</h1>
  <p class="lead">Find the best coffee, the chillest vibes, and the tastiest meals around</p>
</div>
        </div>
        <div class="carousel-item " style={{backgroundImage: `url(${Bali4})`}}>
        <div class="jumbotron">
  <h1 class="display-4">Explore local Events</h1>
  <p class="lead">From beach yoga to pub crawls, let Chunks of Canggu be your guide</p>
</div>
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