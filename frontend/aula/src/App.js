import './App.css';
import {useEffect, useState, useRef} from 'react';

function Cadastrar(event) {
  event.preventDefault();
  const requestOptions = {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({"nome": document.getElementById("name").value}),
    mode: 'cors'
  };
  
  const [list, setList] = useState([]);
  useEffect(()=>{
    fetch('http://127.0.0.1:9000/v1/aula/cadastrar', requestOptions)
      .then(response => response.json())
      .then(setList);
  }, []);

  
}

function App() {
  const [list, setList] = useState([]);
    useEffect(()=>{
        fetch('http://127.0.0.1:9000/v1/aula/listar')
            .then(response => response.json())
            .then(setList);
    }, []);

  return (
    <div>
      <h1>Anna Carolina Pereira Jeunon</h1>
      <form>
        <input type="text" id="name" /><br />
        <button onClick={Cadastrar}>Salvar</button><br />
        
      </form>
      {list.map((aula, index) => (
        <div key={index}>{aula.nome}</div>
      ))}
    </div>
  );
}

export default App;
