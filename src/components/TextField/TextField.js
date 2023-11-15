import './TextField.css';
import {useState} from 'react';

export const TextField = (props) => {
  const placeholderMod = `${props.placeholder}...`;

  // let valor = 'Ari';

  /*const [valor, setValor] = useState('Arielle Lucca');

  const onDigit = (evento) => {
    setValor(evento.target.value);
    console.log(valor);
  }*/

  const onDigit = (evento) => {
    props.onModified(evento.target.value)
  }
  
  return (
    <div className="text-field">
      <label>{props.label}</label>
      <input value={props.valor} onChange={onDigit} required={props.req} placeholder={placeholderMod}/>
    </div>
  )
}