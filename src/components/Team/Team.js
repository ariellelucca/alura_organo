import Collaborator from '../Collaborator';
import './Team.css';
import hexToRgba from 'hex-to-rgba';
 
export const Team = (props) => {
  const css = {backgroundColor: hexToRgba( props.cor, '0.5'), backgroundImage: 'url(/images/fundo.png)'};
  return (
    props.collaborators.length > 0 && <section className="team" style={css}>
      <input value={props.cor} type='color' className='input-card-cor' onChange={evento => props.changeCardColor(evento.target.value, props.id)} />
      <h3 style={{ borderColor: props.cor }}>{props.nome}</h3>
      <div className='collaborators'>
        {props.collaborators.map( collaborator => <Collaborator key={collaborator.nome} fav={collaborator.fav} id={collaborator.id} nome={collaborator.nome} cargo={collaborator.cargo} corFundo={props.cor} imagem={collaborator.imagem} onRemove={props.onRemove} toggleFav={props.toggleFav}></Collaborator>)}
      </div>
    </section>
  )
}
