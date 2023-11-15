import Collaborator from '../Collaborator';
import './Team.css';

export const Team = (props) => {
  const css = {backgroundColor: props.corSecundaria};
  return (
    props.collaborators.length > 0 && <section className="team" style={css}>
      <h3 style={{ borderColor: props.corPrimaria }}>{props.nome}</h3>
      <div className='collaborators'>
        {props.collaborators.map( collaborator => <Collaborator key={collaborator.nome} nome={collaborator.nome} cargo={collaborator.cargo} corFundo={props.corPrimaria} imagem={collaborator.imagem}></Collaborator>)}
      </div>
    </section>
  )
}
