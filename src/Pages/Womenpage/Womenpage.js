import react from 'react';
import imagewomen from '../Womenpage/imagewomen.jpg'
import Itemswomen from '../../Components/Items/Itemwomen'


function Womenpage() {
        return(
            <div>
                <h1 style={{padding:'3%'}}> Women Clothing </h1>
                <img src={imagewomen} width="40%"/>
                
                <br/> 
                <hr/>
            
                <Itemswomen/>
                <Itemswomen/>
            </div>
        );
    }
    export default Womenpage;
