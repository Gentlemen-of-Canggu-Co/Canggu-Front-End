import Bali1 from '../assets/images/Bali1.jpg';
// import Bali2 from '../assets/images/Bali2.jpg';
// import Bali4 from '../assets/images/Bali4.jpg';


function HomePageCarousel() {
  return (
    <div>
    <div id="carouselExampleIndicators" className="carousel slide my-carousel my-carousel" data-ride="carousel">
      <ol className="carousel-indicators">
        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
      </ol>
      <div className="carousel-inner" role="listbox">
        <div className="carousel-item active" style={{backgroundImage: `url(${Bali1})`}}>
        <div className="jumbotron">
  <h1 className="display-4">Chunks of Canggu</h1>
  <p className="lead">Canggus first Café and Restaurant Finder, based on what you like.</p>
  <button class="btn btn-primary">Browse Spots</button>
</div>
        </div>
          {/* <div className="carousel-item " style={{backgroundImage: `url(${Bali2})`}}>
          <div className="jumbotron">
  <h1 className="display-4">Explore the best Spots in town</h1>
  <p className="lead">Find the best coffee, the chillest vibes, and the tastiest meals around</p>
</div>
        </div> */}
        {/* <div className="carousel-item " style={{backgroundImage: `url(${Bali4})`}}>
        <div className="jumbotron">
  <h1 className="display-4">Explore local Events</h1>
  <p className="lead">From beach yoga to pub crawls, let Chunks of Canggu be your guide</p>
</div>
        </div> */}
      </div>
      {/* <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a> */}
    </div>
    </div>
  );
}

export default HomePageCarousel;