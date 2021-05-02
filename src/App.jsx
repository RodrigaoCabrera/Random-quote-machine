import './App.css';
import React, { useState, useEffect } from 'react';
import uniqid from 'uniqid';

function App() {
  //Estado que maneja el color de fondo de la app.
  const [color, setColor] = useState('');

   // Estados que contienen la frase y el autor que se mostrará en pantalla.
   const [frase, setFrase] = useState('');
   const [autor, setAutor] = useState('');
   const [idFrase, setIdFrase] = useState('');

   //Estados que contienen frases de usuarios
   const [fraseUser, setFraseUser] = useState('');
   const [autorUser, setAutorUser] = useState('');

    //Estado para habilitar el formulario que añade la frase y autor del usuarios.
    const [ add, setAdd ] = useState(false);

  // ID que permitirá que la frase en pantalla no se repita al presionar siguiente.
  const [id, setId] = useState('');

 //Lista es una constante que contiene un objeto con las frases a usar.
 const [lista, setLista] = useState([
    {
      frase: 'A lo hecho, pecho',
      autor: 'Homer j. Simpsons',
      id: uniqid()
    },
    {
      frase: 'Do what you can, where you are, with what you have.',
      autor: 'Teddy Roosevelt',
      id: uniqid()
    },
    {
      frase: 'When I let go of what I am, I become what I might be.',
      autor: 'Lao Tzu',
      id: uniqid()
    },
    {
      frase: 'Lisa necesita frenos',
      autor: 'Marge',
      id: uniqid()
    },
    {
      frase: 'A la grande le pus cuca',
      autor: 'Homero',
      id: uniqid()
    },
    {
      frase: 'Either you run the day, or the day runs you.',
      autor: 'Jim Rohn',
      id: uniqid()
    },
  ]);

//Función que permite mostrar las frases en pantalla de manera aleatoria.
  const handleNext = () => {
    //aleatorio es un variable que guarda un numero entre 0 y 5.
    var aleatorio = Math.floor((Math.random() * ((lista.length - 1) - 0 + 1)) + 0);
      
    //Condición que impide que la frase se repita por medio de la id. Si se repite, ejecuta de nuevo la función. 
      if(id !== aleatorio){
        //Set que establecen el id, la frase y el autor a los estados.
        setId(aleatorio);
        setFrase(lista[aleatorio].frase);
        setAutor(lista[aleatorio].autor);
        setIdFrase(lista[aleatorio].id)
      }else{
        handleNext()
      }
    //código para crear un color aleatorio para el background. El mismo cambiará cuando se ejecute handleNext.
    var clrAleatorio = '#';
    var hexadecimal = ["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"]
   for(let i=0; i<6; i++){
    var numero = Math.floor((Math.random() * (16 - 0)));
    var codigoHexa =  hexadecimal[numero];
    clrAleatorio += codigoHexa;
   }
   setColor(clrAleatorio)
  }

  
//funnción que habilita el formulario para agregar frase
  const handleAdd = () => {
    setAdd(true);
    setModoEdit(false)
  }
//función que envía la frase y autor escrita el formulario.
  const handleAñadir = () => {
    const newFrase = {frase:fraseUser, autor:autorUser, id:uniqid()};
    setLista([...lista, newFrase]);
    setFrase(fraseUser);
    setAutor(autorUser);
    setFraseUser('');
    setAutorUser('');
    setAdd(false)
    setIdFrase(newFrase.id)
  }

//Estado que permite cambiar el boton de añadir frase a editar frase y viceversa.
const [modoEdit, setModoEdit] = useState(false)
//función que habilita el formulario y envía la frase a editar a los input.
  const handleEdit = () => {
    setModoEdit(true)
    setAdd(!add);
    lista.filter(e => {
      if(idFrase === e.id){
        setFraseUser(e.frase);
        setAutorUser(e.autor);
      }
    })
  }
//Función que envía la frase editada y oculta el formulario.
  const handleEditar = () => {
    setModoEdit(false);
    const newArray = lista.map(value => value.id === idFrase ? {frase:fraseUser, autor:autorUser, id:uniqid()} : value)
    setLista(newArray);
    setFrase(fraseUser);
    setAutor(autorUser);
    setFraseUser('');
    setAutorUser('');
    setAdd(!add)
    console.log(newArray)
  }

//UseEffet y setTimeout para que cuando cargue se ejecute handleNext y muestre un frase.
  useEffect(() => {
    setTimeout(() => {
      handleNext()
    }, 2000)
    
  }, [])

  return (
    <div 
    className="d-flex flex-column h-100 
    justify-content-center"
    style={{backgroundColor:color}} 
    >

      <div className=" bg-dark mx-auto rounded border-white" style={{width:"80%"}}>
        <section className="text-white rounded my-3 mx-3">
        {/*Estados usados para mostrar la frase y autor*/}
          <p className="text-center font-italic font-weight-bold">{frase}</p>
          <p className="text-right">{autor}</p>
        </section>
      </div>

      <div className="bg-dark mx-auto d-flex rounded" style={{width:"80%"}}>
        <button className="btn btn-success ml-auto" onClick={handleEdit}>Editar frase</button>
        <button className="btn btn-secondary mx-3" onClick={handleAdd}>Añadir frase</button>
        <button className="btn btn-primary mr-3" onClick={handleNext}>Siguiente</button>
      </div>
      
      {/*Operación ternaria que habilita y deshabilita el formulario para agregar frases.*/}
      {
        add ?
          <form onSubmit={(e)=>{e.preventDefault()}} className="form-group text-center mt-3">
            <label for='frase'>
              <input 
                class="form-control"
                type='text' 
                placeholder='Escribe una frase'
                value={fraseUser}
                onChange={(e) => {setFraseUser(e.target.value)}}
              ></input>
            </label>
            <label for='autor'>
              <input 
                class="form-control"
                type='text' 
                placeholder='Escribe un autor/a'
                value={autorUser}
                onChange={(e) => {setAutorUser(e.target.value)}}
              ></input>
            </label>
            {/*Operación ternaria que cambia el boton de 'añadir frase' a 'editar frase'*/}
            { modoEdit ?
              <button className="btn btn-success" onClick={handleEditar}>Editar frase</button> 
              :
              <button className="btn btn-success" onClick={handleAñadir}>Añadir frase</button>
            }              
          </form>
        :
          <span></span>
        
      }

    </div>
  );
}

export default App;
 
  
  
  
    
    
     
     
        
        
          
         