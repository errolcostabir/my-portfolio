import React from 'react';
import p1 from './resources/p1.jpg';
import p2 from './resources/p2.jpg';
import p3 from './resources/p3.jpg';
import { Carousel } from 'react-bootstrap';

function Slider() {
    return (
        <div className="card mx-auto" style={{"width": "50vw", "height": "auto"}}>
            <Carousel fade>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={p1}
                        alt="First slide"
                        style={{"objectFit": "scale-down"}}
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={p2}
                        alt="Second slide"
                        style={{"objectFit": "scale-down"}}
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={p3}
                        alt="Third slide"
                        style={{"objectFit": "scale-down"}}
                    />
                </Carousel.Item>
            </Carousel>
        </div>
    );
}

export default Slider;