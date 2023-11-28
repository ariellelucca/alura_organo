import './Collaborator.css'
import { IoMdCloseCircle  } from "react-icons/io";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";


export const Collaborator = ({ nome, id, fav, imagem, cargo, corFundo, onRemove, toggleFav }) => {
  console.log(fav);
  function togFav() {
    toggleFav(id);
  }
  return (<div className='collaborator'>
    <IoMdCloseCircle 
      size={25} 
      className='remove' 
      onClick={() => onRemove(id)}
    />
    <div className='header' style={{backgroundColor: corFundo}}>
      <img src={imagem} alt={nome}/>
    </div>
    <div className='footer'>
      <h4>{nome}</h4>
      <h5>{cargo}</h5>
      <div className='fav'>
        {fav ? <AiFillHeart size={25} onClick={togFav} /> : <AiOutlineHeart size={25} onClick={togFav} />}
      </div>
    </div>
  </div>)
}