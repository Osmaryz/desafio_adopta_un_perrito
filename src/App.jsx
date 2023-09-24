import ImageAndTextExample from './components/card.jsx';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import TextLinkExample from '../src/components/header.jsx';
import PieDePagina from '../src/components/footer.jsx';

function App () {
return (<>
<div className='ContainerGaleria'>
<div>
  <TextLinkExample title = "Adopta un perrito"/>
</div>

<div className='galeria'>
<ImageAndTextExample 
imagen = "src/assets/img/dog_3.jpg"
nombre="Bosco"
descripcion="Todo una delicia"
raza = "Salchicha"
color = "warning"
/>
<ImageAndTextExample 
imagen = "src/assets/img/dog_1.jpg"
nombre="Picasso"
descripcion="Un artista"
raza = "Labrador"
color = "success"
/>
<ImageAndTextExample 
imagen = "src/assets/img/dog_4.jpg"
nombre="Da Vinci"
descripcion="La perfección canina"
raza = "Sabueso Afgano"
color = "info"
/>

<ImageAndTextExample 
imagen = "src/assets/img/dog_6.jpg"
nombre="Bethoveen"
descripcion="Una niñera low cost"
raza = "San Bernardo"
color = "warning"
/>

<ImageAndTextExample 
imagen = "src/assets/img/dog_7.jpg"
nombre="Giambellino"
descripcion="Le apodan el manchas"
raza = "Dálmata"
color = "primary"
/>

<ImageAndTextExample 
imagen = "src/assets/img/dog_5.jpg"
nombre="Vermeer"
descripcion="Un bravo guardián"
raza = "Bichón Maltés"
color = "dark"
/>
</div>

<div className='pieDePagina'>
  <PieDePagina/>
</div>
</div>
</>

)

}

export default App
