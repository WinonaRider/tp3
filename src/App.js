import logo from './logo.svg';
import './App.css';

function App(){

  return (
    <div>
      <form onSubmit={presion}>
        <p>Escriba:
          <input type="letter" name="valor1" />
        </p>
        <p>
          <input type="submit" value="igresar" />
        </p>
      </form>
    </div>
  );

  function presion(e) {
    e.preventDefault();
   let palabra=(e.target.valor1.value);
   
   let vocales = ['a','e','i','o','u'];
   let contador = 0;
   
   for(let i = 0; i < palabra.length; i++){
       for(let l = 0; l < vocales.length; l++){
          
       if(palabra[i] == vocales[l]){contador++;}
   
       }
   }
   alert('Vocales en la oracion: ' +contador);
   }
}
  
export default App;