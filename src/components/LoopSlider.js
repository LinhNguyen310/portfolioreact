import trello from "../assets/img/trello.png";
import tf from "../assets/img/tf.png";
import sql from "../assets/img/sql.png";
import python from "../assets/img/python.png";
import opencv from "../assets/img/opencv.png";
import mongodb from "../assets/img/mongodb.png";
import js from "../assets/img/js.png";
import java from "../assets/img/java.png";
import html from "../assets/img/html.png";
import github from "../assets/img/github.png";
import flutter from "../assets/img/flutter.png";
import figma from "../assets/img/figma.png";
import dart from "../assets/img/dart.png";
import css from "../assets/img/css.png";
import c from "../assets/img/c.png";
import cpl from "../assets/img/c++.png";
import keras from "../assets/img/keras.png";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.png"

export const Sliders = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 10
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="slider" id="sliders" >
      <ul className="slider-bx wow zoomIn" >
          <Carousel responsive={responsive} infinite={true} arrows={false} className="left carousel-control slider-slider">
              <ul className="item" title ="trello">
                  <img src={trello}      

                  alt="Image" />
              </ul>
              <ul className="item"title ="Tensorflow">
                  <img src={tf} 

                  alt="Image" />
              </ul>
              <ul className="item"title ="SQL">
                  <img src={sql}
              
                   alt="Image" />
              </ul>
              <ul className="item"title ="Python">
                  <img src={python}

                   alt="Image" />
              </ul>
              <ul className="item"title ="OpenCV">
                  <img src={opencv}

                   alt="Image" />
              </ul>
              <ul className="item"title ="MongoDB">
                  <img src={mongodb}

                   alt="Image" />
              </ul>
              <ul className="item"title ="JavaScript">
                  <img src={js}

                   alt="Image" />
              </ul>
              <ul className="item"title ="Java">
                  <img src={java} 

                  alt="Image" />
              </ul>
              <ul className="item"title ="HTML">
                  <img src={html} 

                  alt="Image" />
              </ul>
              <ul className="item"title ="Github">
                  <img src={github} 

                  alt="Image" />
              </ul>
              <ul className="item"title ="Flutter">
                  <img src={flutter} 

                  alt="Image" />
              </ul>
              <ul className="item"title ="Figma">
                  <img src={figma} 

                  alt="Image" />
              </ul>
              <ul className="item"title ="Dart">
                  <img src={dart} 

                  alt="Image" />
              </ul>
              <ul className="item"title ="CSS">
                  <img src={css} 

                  alt="Image" />
              </ul>
              <ul className="item"title ="C">
                  <img src={c} 

                  alt="Image" />
              </ul>
              <ul className="item"title ="C++">
                  <img src={cpl} 

                  alt="Image" />
              </ul>
              <ul className="item"title ="Keras">
                  <img src={keras} 
                  alt="Image" />
              </ul>
          </Carousel>
      </ul>
    </section>
  )
}