import Button from '../Button';
import DropdownSelect from '../DropdownSelect';
import Field from '../Field';
import './Form.css';
import {useState} from 'react';

export const Form = (props) => {
  const [nome, setNome] = useState('');
  const [cargo, setCargo] = useState('');
  const [imagem, setImagem] = useState('');
  const [time, setTime] = useState('');
  const [nomeTime, setNomeTime] = useState('');
  const [corTime, setCorTime] = useState('');


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
        <Field req={true} label="Nome" placeholder="Digite o seu nome" valor={nome} onModified={valor => setNome(valor)}></Field>
        <Field req={true} label="Cargo" placeholder="Digite o seu cargo" valor={cargo} onModified={valor => setCargo(valor)}></Field>
        <Field label="Imagem" placeholder="Informe o endereço da imagem" valor={imagem} onModified={valor => setImagem(valor)}></Field>
        <DropdownSelect req={true} label="Time" itens={props.teams} valor={time} onModified={valor => setTime(valor)}></DropdownSelect>
        <Button>Criar Card</Button>
      </form>
      <form 
        onSubmit={(evento) => {
          evento.preventDefault();
          props.insertTime({
            nome: nomeTime,
            cor: corTime
          });
        }}>
        <h2>Preencha os dados para criar novo time</h2>
        <Field req label="Nome" placeholder="Digite o nome do time" valor={nomeTime} onModified={valor => setNomeTime(valor)} />
        <Field req type="color" label="Cor" placeholder="Selecione a cor do time" valor={corTime} onModified={valor => setCorTime(valor)} />
       <Button>Criar Time</Button>
      </form>
    </section>
  )
}