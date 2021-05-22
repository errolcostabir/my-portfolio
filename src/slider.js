import React from 'react';
import p1 from './resources/photos/p1.jpg';
import p3 from './resources/photos/p3.jpg';
import p4 from './resources/photos/p4.jpeg';
import p5 from './resources/photos/p5.jpeg';
import p6 from './resources/photos/p6.jpeg';
import p7 from './resources/photos/p7.jpeg';
import p8 from './resources/photos/p8.jpeg';
import p9 from './resources/photos/p9.jpg';
import p10 from './resources/photos/p10.jpeg';
import p11 from './resources/photos/p11.jpg';
import p13 from './resources/photos/p13.jpeg';
import p15 from './resources/photos/p15.jpeg';
import p16 from './resources/photos/p16.jpeg';
import { Carousel } from 'react-bootstrap';

function Slider() {
    return (
        <div className="card mx-auto" style={{ "width": "50vw", "height": "auto" }}>
            <Carousel fade>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={p1}
                        alt="First slide"
                        style={{ "objectFit": "scale-down" }}
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={p3}
                        alt="Second slide"
                        style={{ "objectFit": "scale-down" }}
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={p4}
                        alt="Third slide"
                        style={{ "objectFit": "scale-down" }}
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={p5}
                        alt="First slide"
                        style={{ "objectFit": "scale-down" }}
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={p6}
                        alt="First slide"
                        style={{ "objectFit": "scale-down" }}
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={p7}
                        alt="First slide"
                        style={{ "objectFit": "scale-down" }}
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={p8}
                        alt="First slide"
                        style={{ "objectFit": "scale-down" }}
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={p9}
                        alt="First slide"
                        style={{ "objectFit": "scale-down" }}
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={p10}
                        alt="First slide"
                        style={{ "objectFit": "scale-down" }}
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={p11}
                        alt="First slide"
                        style={{ "objectFit": "scale-down" }}
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={p13}
                        alt="First slide"
                        style={{ "objectFit": "scale-down" }}
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={p15}
                        alt="First slide"
                        style={{ "objectFit": "scale-down" }}
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={p16}
                        alt="First slide"
                        style={{ "objectFit": "scale-down" }}
                    />
                </Carousel.Item>
            </Carousel>
        </div>
    );
}

export default Slider;