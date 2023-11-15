import Button from '../Button';
import DropdownSelect from '../DropdownSelect';
import TextField from '../TextField';
import './Form.css';
import {useState} from 'react';

export const Form = (props) => {
  const [nome, setNome] = useState('');
  const [cargo, setCargo] = useState('');
  const [imagem, setImagem] = useState('');
  const [time, setTime] = useState('');


  const onSave = (e) => {
    e.preventDefault();
    props.onInsertCollaborator({
      nome, 
      cargo,
      imagem,
      time
    })

    setNome('')
    setCargo('')
    setImagem('')
    setTime('')
  }

  return (
    <section className="form-wrapper">
      <form onSubmit={onSave}>
        <h2>Preencha os dados para criar o card do colaborador</h2>
        <TextField req={true} label="Nome" placeholder="Digite o seu nome" valor={nome} onModified={valor => setNome(valor)}></TextField>
        <TextField req={true} label="Cargo" placeholder="Digite o seu cargo" valor={cargo} onModified={valor => setCargo(valor)}></TextField>
        <TextField label="Imagem" placeholder="Informe o endereço da imagem" valor={imagem} onModified={valor => setImagem(valor)}></TextField>
        <DropdownSelect req={true} label="Time" itens={props.teams} valor={time} onModified={valor => setTime(valor)}></DropdownSelect>
        <Button>Criar Card</Button>
      </form>
    </section>
  )
}