import './Collaborator.css'

export const Collaborator = ({ nome, imagem, cargo, corFundo }) => {
  return (<div className='collaborator'>
    <div className='header' style={{backgroundColor: corFundo}}>
      <img src={imagem} alt={nome}/>
    </div>
    <div className='footer'>
      <h4>{nome}</h4>
      <h5>{cargo}</h5>
    </div>
  </div>)
}