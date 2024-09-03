
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import meter1 from "../assests/meter1.svg";
import meter2 from "../assests/meter2.svg";
import meter3 from "../assests/meter3.svg";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>My Skills</h2>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider" >
                <div className="item">
                  <img src={meter1} alt="meter 1" />
                  <h5> Web Design & Development</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="meter 3" />
                  <h5> Front End Development : HTML, CSS, React & JavaScript</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="meter 2" />
                  <h5>Back End Development : JQuery, Node, MySQL, Express, NOSQL, Web APIS, Third party APIS, ORM, MVC, PWA, MERN</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="meter 4" />
                  <h5>Graphic Design Software : Adobe Photoshop,
                    Illustrator </h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
