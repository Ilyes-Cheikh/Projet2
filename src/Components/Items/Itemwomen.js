import react from 'react';
import { Button, Card } from 'react-bootstrap';
import imagemodel2 from '../Items/imagemodel2.jpg';
import './Items_style.css';

function Itemswomen() {
    return (
        <div className='countainer'>
            <Card style={{ width: '15rem' }}>
                <Card.Img variant="top" src={imagemodel2} />
                <Card.Body>
                    <Card.Title> Women dress </Card.Title>
                    <Card.Text> Women dress for all size </Card.Text>
                    <Button variant="primary"> Buy </Button>
                </Card.Body>
            </Card>


            <Card style={{ width: '15rem' }}>
                <Card.Img variant="top" src={imagemodel2} />
                <Card.Body>
                    <Card.Title> Women dress </Card.Title>
                    <Card.Text> Women dress for all size </Card.Text>
                    <Button variant="primary"> Buy </Button>
                </Card.Body>
            </Card>

            
            <Card style={{ width: '15rem' }}>
                <Card.Img variant="top" src={imagemodel2} />
                <Card.Body>
                    <Card.Title> Women dress </Card.Title>
                    <Card.Text> Women dress for all size </Card.Text>
                    <Button variant="primary"> Buy </Button>
                </Card.Body>
            </Card>
        </div>
    );
}
export default Itemswomen