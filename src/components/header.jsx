import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function TextLinkExample({title = "Título por defecto"}) {
  return (
    <Navbar className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">{title}</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default TextLinkExample;