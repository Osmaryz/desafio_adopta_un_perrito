import Badge from 'react-bootstrap/Badge';

function TagCard({color, raza}) {
    return (
        <Badge bg={color}>{raza}</Badge>
        
    );
  }
  
  export default TagCard;