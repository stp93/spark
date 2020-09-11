import "bootstrap/dist/css/bootstrap.css";
import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";
import slider1 from "./Assets/slider_1.jpg";
import slider2 from "./Assets/slider_2.jpg";
import slider3 from "./Assets/slider_3.jpg";
import slider4 from "./Assets/slider_4.jpg";
import slider5 from "./Assets/slider_5.jpg";
import Cars from "./Cars";

class Stuff extends Component {
  render() {
    return (
      <div>
        <div>
          <div>
            <Carousel>
              <Carousel.Item>
                <img className=" w-100" src={slider1} alt="First slide" />
                <Carousel.Caption></Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={slider2}
                  alt="Third slide"
                />

                <Carousel.Caption></Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img className=" w-100" src={slider3} alt="First slide" />
                <Carousel.Caption></Carousel.Caption>
              </Carousel.Item>

              <Carousel.Item>
                <img className=" w-100" src={slider4} alt="First slide" />
                <Carousel.Caption></Carousel.Caption>
              </Carousel.Item>

              <Carousel.Item>
                <img className=" w-100" src={slider5} alt="First slide" />
                <Carousel.Caption></Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
            necessitatibus unde cumque commodi ea at est a dolore accusamus
            earum. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Iusto eius maxime aliquam explicabo libero corporis iste ex magni
            facere ut!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam,
            quisquam.
          </p>
        </div>
        <div className="mid">
          <h2>Who We Are</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
            velit cumque et, dolorem necessitatibus quam aperiam iure placeat.
            Labore, non! Quasi veritatis perferendis deserunt assumenda! Ullam
            laudantium quisquam illum libero incidunt consectetur ipsa maxime
            magnam rem deserunt, deleniti iure! Quae nisi quisquam doloremque
            perspiciatis exercitationem error veniam! Quam quo recusandae
            reprehenderit iste omnis laudantium nobis, ratione velit
            exercitationem obcaecati expedita, quibusdam magnam aut sint
            perspiciatis mollitia amet natus, iure ex. Quos repudiandae incidunt
            non atque quas fugit eum sequi! Dicta, dolores? Aliquam accusantium
            assumenda sapiente laboriosam iusto iure ut nesciunt odit unde
            numquam, illum ad hic quidem illo? Mollitia, rerum.
          </p>
        </div>
        <div className="mid">
          <div className="camaro">
            <Cars />
          </div>
          <h2>Who We Are</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
            velit cumque et, dolorem necessitatibus quam aperiam iure placeat.
            Labore, non! Quasi veritatis perferendis deserunt assumenda! Ullam
            laudantium quisquam illum libero incidunt consectetur ipsa maxime
            magnam rem deserunt, deleniti iure! Quae nisi quisquam doloremque
            perspiciatis exercitationem error veniam! Quam quo recusandae
            reprehenderit iste omnis laudantium nobis, ratione velit
            exercitationem obcaecati expedita, quibusdam magnam aut sint
            perspiciatis mollitia amet natus, iure ex. Quos repudiandae incidunt
            non atque quas fugit eum sequi! Dicta, dolores? Aliquam accusantium
            assumenda sapiente laboriosam iusto iure ut nesciunt odit unde
            numquam, illum ad hic quidem illo? Mollitia, rerum.
          </p>
        </div>
      </div>
    );
  }
}
export default Stuff;
