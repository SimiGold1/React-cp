import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function CardComponent() {
  return (
    <div style={{ display: 'flex' , justifyContent: 'space-around'}}>
    <Card style={{ width: '18rem', margin: '1rem 0', border: '3px solid black' }}>
    <Card.Header style={{color: 'black' }}>RECENTLY ADDED</Card.Header> 
      <Card.Img variant="top" src="Card1.jpg "/>
      <Card.Body>
        <Card.Title>THE BLACK BOOK</Card.Title>
        <Card.Text>
        After his son is framed for a kidnapping, a bereaved deacon takes justice into his own hands and fights a corrupt police gang to absolve him.
        </Card.Text>
        <Button variant="primary">Watch</Button>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem', margin: '1rem 0', border: '3px solid black'}}> 
    <Card.Header style={{color: 'white'  ,backgroundColor: 'black'}} >TOP RATED</Card.Header>
      <Card.Img variant="top" src="Card2.jpg "/>
      <Card.Body>
        <Card.Title>AFTER EVERYTHING</Card.Title>
        <Card.Text>
        After breaking up with his true love, best-selling author Hardin Scott travels to Portugal in an attempt to make amends for his past behavior. 
        </Card.Text>
        <Button variant="primary">Watch</Button>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem', margin: '1rem 0' ,  border: '3px solid black'}}>
    <Card.Header style={{color: 'white'  ,backgroundColor: 'black'}}>THRILLING THRILLER!!</Card.Header>
      <Card.Img variant="top" src="ThirdCard.jpg"/>
      <Card.Body>
        <Card.Title>BLOOD SISTERS</Card.Title>
        <Card.Text>
        Bound by a dangerous secret, best friends Sarah and Kemi are forced to go on the run after a wealthy groom disappears during his engagement party.
        </Card.Text>
        <Button variant="primary">Watch</Button>
      </Card.Body>
    </Card>

    </div>
  );
}


export default CardComponent;