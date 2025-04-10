
import logo from './logo.svg';
import './App.css';

// #1 componentes son funciones que retornan HTML
// #2 recordar los parentesis
// #3 calse de css van con className
// #4 se pone () cuando se va a escribir html
// #5 {} son para referenciar algo que esta en JV
// #6 estas llaves sustitullen el v-bind o las {{}} de vue




function HelloWorld() {
  const nombre = 'Didier Bermudez';
  return (
    <div>
      <h1>Hello {nombre}</h1>
    </div>
  );
}

function App() {

  const logotipo = logo;

  const mostrarImagen = true;

  const contador = 4;

  const entrada = ['a', 'b', 'c'];

  const opcionesMenu = 
    [ { id: 1, texto: 'Inicio', ruta: '/', isselected : true },

       { id: 2, texto: 'Productos', ruta: '/productos' , isselected : false },

       { id: 3, texto: 'Servicios', ruta: '/servicios' ,  isselected : true },
  ]

  const actualizarSeleccion = (id = null) =>{
  console.log ('click en el elemento', id)
 };
    
   

  const menu = opcionesMenu.map(elemento => {
    return(
      
        <a href={elemento.link}
         key={elemento.id}
          style={{margin:'10px'}} 
            onClick={actualizarSeleccion.bind (this,elemento.id)} >
        {elemento.texto}
        {elemento.isselected && ( <b>*</b>)  }
        
      </a>
    );
  } );
  const parrafos = entrada.map(elemento => {
    return (
      <div>
         <pag>{elemento}</pag>
      </div>
    )
  })

  




  return (
    
    <div className="App">
      <header className="App-header">
        

        <img src={logotipo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.

        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"


          >
          Learn React
        </a>
      </header>
      <HelloWorld />
      <div>
      {/* react */}
      {mostrarImagen? <img src={logotipo} className="App-logo" alt="logo" /> : 'No hay imagen para mostrar'}

      {/* vue */}
      {/* <img v-if="mostrarImagen" src={logotipo} className="App-logo" alt="logo" />
      <span v-else>No hay imagen</span> */}

      {contador === 5 && 
     <p> El contador es igual a 5</p>  }

     {contador < 5 && 
    <p>El contador es menor a 5 </p>  }
    
    {contador > 5 && 
     <p>El contador es mayor a 5 </p>  }

      </div>
      <h1>Estos son los elementos:</h1>
      {parrafos}
      <h1>Este es el menu:</h1>
      {menu}
    </div>


   
  );
}





export default App;



