import MyComponent from "./MyComponent.jsx";

const TemplentExpresions = () => {
    
    let nome = "Meu nome"
    let aluno = {
        nome:"Lil peter",
        turma:"c",
        ano:"2"

    }
    
    return(
            <div>
                <h1>Olá {nome} </h1>
                <h2>O Aluno {aluno.nome} está no {aluno.ano}° ano, na turma {aluno.turma}</h2>
                <MyComponent/>
            </div>
    );
}

export default TemplentExpresions