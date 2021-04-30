import Random from './components/Random';
import './App.css';
import React, { useState } from 'react';
import uniqid from 'uniqid';

function App() {
  // Estados que contienen la frase y el autor que se mostrará en pantalla.
  const [frase, setFrase] = useState('');
  const [autor, setAutor] = useState('');
  // ID que permitirá que la frase en pantalla no se repita al presionar siguiente.
  const [id, setId] = useState('');
  //Lista es el estado que contiene un objeto con las frases a usar.
  const [lista, setLista] = useState([
    {
      frase: 'A lo hecho, pecho',
      autor: 'Homer j. Simpsons',
      id: uniqid()
    },
    {
      frase: 'Gilda petera',
      autor: 'Dania',
      id: uniqid()
    },
    {
      frase: 'Claudia puta petera',
      autor: 'Teresa',
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
      frase: 'Bart nooo',
      autor: 'Homero',
      id: uniqid()
    },
  ]
  );

  //Función que permite mostrar las frases en pantalla de manera aleatoria.
  const handleNext = () => {
    //aleatorio es un variable que guarda un numero entre 0 y 5.
    var aleatorio = Math.floor((Math.random() * (5 - 0 + 1)) + 0);
    //Condición que impide que la frase se repita por medio de la id. Si se repite, ejecuta de nuevo la función.  
      if(id !== aleatorio){
        //Set que establecen el id, la frase y el autor a los estados.
        setId(aleatorio);
        setFrase(lista[aleatorio].frase);
        setAutor(lista[aleatorio].autor);
      }else{
        handleNext()
      }
    


  return (
    <div 
    className="d-flex flex-column bg-warning h-100 
    justify-content-center">

      <div className="bg-success w-50 mx-auto rounded">
        <section className="bg-dark text-white rounded my-3 mx-3">
          //Estados usados para mostrar la frase y autor.
          <p>{frase}</p>
          <p>{autor}</p>
        </section>
      </div>

      <div className="col2 bg-dark w-50 mx-auto d-flex rounded">
        <button className="btn btn-success ml-auto" onClick={handleNext}>Siguiente</button>
      </div>

    </div>
  );
}

export default App;
