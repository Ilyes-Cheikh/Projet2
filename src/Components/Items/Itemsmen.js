import react from 'react';
import { Button, Card } from 'react-bootstrap';
import imagemodel from '../Items/imagemodel.jpg';
import './Items_style.css';

function Itemsmen() {
    return (
        <div className='countainer'>
            <Card style={{ width: '15rem' }}>
                <Card.Img variant="top" src={imagemodel} />
                <Card.Body>
                    <Card.Title> Men suit </Card.Title>
                    <Card.Text> Men suit for all size </Card.Text>
                    <Button variant="primary"> Buy </Button>
                </Card.Body>
            </Card>


            <Card style={{ width: '15rem' }}>
                <Card.Img variant="top" src={imagemodel} />
                <Card.Body>
                    <Card.Title> Men suit </Card.Title>
                    <Card.Text> Men suit for all size </Card.Text>
                    <Button variant="primary"> Buy </Button>
                </Card.Body>
            </Card>

            
            <Card style={{ width: '15rem' }}>
                <Card.Img variant="top" src={imagemodel} />
                <Card.Body>
                    <Card.Title> Men suit </Card.Title>
                    <Card.Text> Men suit for all size </Card.Text>
                    <Button variant="primary"> Buy </Button>
                </Card.Body>
            </Card>
        </div>
    );
}
export default Itemsmen 