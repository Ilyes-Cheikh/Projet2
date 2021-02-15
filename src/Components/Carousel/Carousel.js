import react from 'react';
import Carousel from 'react-bootstrap/Carousel';
import image1 from './image1.jpg'
import image2 from './image2.jpg'
import image3 from './image3.jpg'



function ControlledCarousel() { 
    return (
        
        <Carousel style={{backgroundColor:'#f2f2f2'}}>
  <Carousel.Item interval={500} >
    <img
      className="img1"
      src={image1}
      alt="First slide"
      width='60%'
    />
    <Carousel.Caption style={{backgroundColor:'grey', width:'60%',marginLeft:'75px'}} >
      <h3>Welcome To Our Clothes Store</h3>
      <p>We provide the top clothing quality out there</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={500}>
    <img
      className="img2"
      src={image2}
      alt="Third slide"
      width="60%"
    />
    <Carousel.Caption style={{backgroundColor:'grey', width:'60%',marginLeft:'75px'}}>
      <h3>Here we Have clothes for Men</h3>
      <p>All Men wear are available in our store and you can shippable them everywhere</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="img3"
      src={image3}
      alt="Third slide"
      width="60%"
    />
    <Carousel.Caption style={{backgroundColor:'grey', width:'60%',marginLeft:'75px'}}>
      <h3>As well for Women</h3>
      <p>Find your unique style</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>

    );
}
  
export default ControlledCarousel;