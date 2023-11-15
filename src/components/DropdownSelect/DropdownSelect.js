import './DropdownSelect.css';

export const DropdownSelect = (props) => {
  return (
    <div className="dropdown-select">
      <label>{props.label}</label>
      <select onChange={evento => props.onModified(evento.target.value)} required={props.req} value={props.valor}>
        <option value=''></option>
        {props.itens.map(item => <option key={item}>{item}</option>)}
      </select>
    </div>
  )
}
