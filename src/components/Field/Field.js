import './Field.css';

export const Field = ({ type = 'text', label, placeholder, valor, onModified, req = false }) => {
  const placeholderMod = `${placeholder}...`;

  // let valor = 'Ari';

  /*const [valor, setValor] = useState('Arielle Lucca');

  const onDigit = (evento) => {
    setValor(evento.target.value);
    console.log(valor);
  }*/

  const onDigit = (evento) => {
    onModified(evento.target.value)
  }
  
  return (
    <div className="text-field">
      <label>{label}</label>
      <input type={type} value={valor} onChange={onDigit} required={req} placeholder={placeholderMod}/>
    </div>
  )
}