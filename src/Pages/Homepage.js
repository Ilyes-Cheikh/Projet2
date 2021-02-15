
import react from 'react';
import ControlledCarousel from '../Components/Carousel/Carousel';
import Itemsmen from '../Components/Items/Itemsmen';


function Homepage() {
    return (
        <div>

            <div style={{backgroundColor:'#e6e6e6',padding:'2%'}}>
                <h1> Clothes Store </h1>
                <h6>Welcome To the the #N°1 Selling Clothes store in Tunisia.</h6>
            </div>

            <ControlledCarousel />
            <br/>
            <hr/>
            <Itemsmen/>
            
        </div>
    );
}
export default Homepage;
