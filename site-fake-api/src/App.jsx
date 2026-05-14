import { useEffect, useState } from "react";
import "./App.css"

function App(){
  const [cursos, setCursos] = useState([])

  const url = "https://my-json-server.typicode.com/aliciastefany/fake-api-BG/cursos"

  const carregarCursos = async ()=>{
    try{
      const resposta = await fetch(url)
      const dados = await resposta.json()
      setCursos(dados)
      console.log(cursos)
    } catch(erro){
      console.error("Erro ao carregar os dados:", erro)
    }
  }

  useEffect(()=>{carregarCursos()}, [])

  return(
    <div className="container">
      <h1>Lista de Cursos</h1>

      {cursos.map((curso)=>{
        return(
          <div className="card" key={curso.id}>
            <h2>{curso.nome}</h2>
            <p>Carga Horária: {curso["carga-horaria"]} h</p>

            <div className="disciplinas">
              {curso.disciplinas.map((disc, index)=>{
                <span className="disciplina" key={index}>{disc}</span>
              })}
            </div>
          </div>
        )
      })}

    </div>
  )
}

export default App