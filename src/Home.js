import "bootstrap/dist/css/bootstrap.css";
import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";
import Image from "./Assets/images/vette.png";
import slider1 from "./Assets/slider1.jpg";
import slider2 from "./Assets/slider2.jpg";
import slider3 from "./Assets/slider3.jpg";
import slider4 from "./Assets/slider4.jpg";
import slider5 from "./Assets/slider5.jpg";
class Home extends Component {
  render() {
    return (
      <div className="top">
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
        <div className="buttons"></div>
        <div className="mid">
          <h2>Who We Are</h2>
          <p>
            We make cars. Simple as that. <br /> We build modern electric cars
            based on the best American muscle. Classic Cool with Modern
            Features.
          </p>
        </div>
        <div className="corvette">
          <img src={Image} alt="" />
        </div>
      </div>
    );
  }
}
export default Home;
