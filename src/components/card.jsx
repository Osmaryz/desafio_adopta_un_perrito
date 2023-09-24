import Card from 'react-bootstrap/Card';
import TagCard from './tag';

function ImageAndTextExample({imagen,nombre,descripcion,raza,color}) {
  return (
    <>
      <Card className='tarjeta'>
        <Card.Img className='foto' variant="top"  src = {imagen} />
        <Card.Body>
        <Card.Title>
            {nombre}
          </Card.Title>
          <Card.Text>
            {descripcion}
          </Card.Text>
          <TagCard color ={color} raza = {raza}/>
        </Card.Body>
      </Card>
      <br />
    
    </>
  );
}

export default ImageAndTextExample;