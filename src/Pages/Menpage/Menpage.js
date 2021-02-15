import react from 'react';
import imagemen from './imagemen.jpg'
import Itemsmen from '../../Components/Items/Itemsmen'



function Menpage () {
    return(
        <div>
            <h1 style={{padding:'3%'}}> Men Clothing </h1>
            <img src={imagemen}  width="40%"/>
            <br/>
            <hr/>
            <Itemsmen/>
            <Itemsmen/>


        </div>
    );
}
export default Menpage;