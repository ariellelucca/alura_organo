import { useState } from 'react';
import Banner from './components/Banner';
import Form from './components/Form';
import Team from './components/Team';
import Footer from './components/Footer';
import { v4 as uuidv4 } from 'uuid';

function App() {

  const [teams, setTeams] = useState([
    { 
      id: uuidv4(),
      nome:'Programação',
      cor: '#57C278',
    },
    { 
      id: uuidv4(),
      nome:'Front-End',
      cor: '#82CFFA',
    },
    { 
      id: uuidv4(),
      nome:'Data Science',
      cor: '#A6D157',
    },
    { 
      id: uuidv4(),
      nome:'DevOps',
      cor: '#E06B69',
    },
    { 
      id: uuidv4(),
      nome:'UX e Design',
      cor: '#DB6EBF',
    },
    { 
      id: uuidv4(),
      nome:'Mobile',
      cor: '#FFBA05',
    },
    { 
      id: uuidv4(),
      nome:'Inovação e Gestão',
      cor: '#FF8A29',
    }
  ]);

  const inicial = [
    {
      id: uuidv4(),
      fav: false,
      nome: 'JULIANA AMOASEI',
      cargo: 'Desenvolvedora de software e instrutora',
      imagem: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
      time: teams[0].nome
    },
    {
      id: uuidv4(),
      fav: false,
      nome: 'DANIEL ARTINE',
      cargo: 'Engenheiro de Software na Stone Age',
      imagem: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
      time: teams[0].nome
    },
    {
      id: uuidv4(),
      fav: false,
      nome: 'GUILHERME LIMA',
      cargo: 'Desenvolvedor Python e JavaScript na Alura',
      imagem: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
      time: teams[0].nome
    },
    {
      id: uuidv4(),
      fav: false,
      nome: 'PAULO SILVEIRA',
      cargo: 'Hipster e CEO da Alura',
      imagem: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
      time: teams[0].nome
    },
    {
      id: uuidv4(),
      fav: false,
      nome: 'JULIANA AMOASEI',
      cargo: 'Desenvolvedora de software e instrutora',
      imagem: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
      time: teams[1].nome
    },
    {
      id: uuidv4(),
      fav: false,
      nome: 'DANIEL ARTINE',
      cargo: 'Engenheiro de Software na Stone Age',
      imagem: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
      time: teams[1].nome
    },
    {
      id: uuidv4(),
      fav: false,
      nome: 'GUILHERME LIMA',
      cargo: 'Desenvolvedor Python e JavaScript na Alura',
      imagem: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
      time: teams[1].nome
    },
    {
      id: uuidv4(),
      fav: false,
      nome: 'PAULO SILVEIRA',
      cargo: 'Hipster e CEO da Alura',
      imagem: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
      time: teams[1].nome
    },
    {
      id: uuidv4(),
      fav: false,
      nome: 'JULIANA AMOASEI',
      cargo: 'Desenvolvedora de software e instrutora',
      imagem: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
      time: teams[2].nome
    },
    {
      id: uuidv4(),
      fav: false,
      nome: 'DANIEL ARTINE',
      cargo: 'Engenheiro de Software na Stone Age',
      imagem: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
      time: teams[2].nome
    },
    {
      id: uuidv4(),
      fav: false,
      nome: 'GUILHERME LIMA',
      cargo: 'Desenvolvedor Python e JavaScript na Alura',
      imagem: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
      time: teams[2].nome
    },
    {
      id: uuidv4(),
      fav: false,
      nome: 'PAULO SILVEIRA',
      cargo: 'Hipster e CEO da Alura',
      imagem: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
      time: teams[2].nome
    },
    {
      id: uuidv4(),
      fav: false,
      nome: 'JULIANA AMOASEI',
      cargo: 'Desenvolvedora de software e instrutora',
      imagem: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
      time: teams[3].nome
    },
    {
      id: uuidv4(),
      fav: false,
      nome: 'DANIEL ARTINE',
      cargo: 'Engenheiro de Software na Stone Age',
      imagem: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
      time: teams[3].nome
    },
    {
      id: uuidv4(),
      fav: false,
      nome: 'GUILHERME LIMA',
      cargo: 'Desenvolvedor Python e JavaScript na Alura',
      imagem: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
      time: teams[3].nome
    },
    {
      id: uuidv4(),
      fav: false,
      nome: 'PAULO SILVEIRA',
      cargo: 'Hipster e CEO da Alura',
      imagem: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
      time: teams[3].nome
    },
    {
      id: uuidv4(),
      fav: false,
      nome: 'JULIANA AMOASEI',
      cargo: 'Desenvolvedora de software e instrutora',
      imagem: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
      time: teams[4].nome
    },
    {
      id: uuidv4(),
      fav: false,
      nome: 'DANIEL ARTINE',
      cargo: 'Engenheiro de Software na Stone Age',
      imagem: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
      time: teams[4].nome
    },
    {
      id: uuidv4(),
      fav: false,
      nome: 'GUILHERME LIMA',
      cargo: 'Desenvolvedor Python e JavaScript na Alura',
      imagem: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
      time: teams[4].nome
    },
    {
      id: uuidv4(),
      fav: false,
      nome: 'PAULO SILVEIRA',
      cargo: 'Hipster e CEO da Alura',
      imagem: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
      time: teams[4].nome
    },
    {
      id: uuidv4(),
      fav: false,
      nome: 'JULIANA AMOASEI',
      cargo: 'Desenvolvedora de software e instrutora',
      imagem: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
      time: teams[5].nome
    },
    {
      id: uuidv4(),
      fav: false,
      nome: 'DANIEL ARTINE',
      cargo: 'Engenheiro de Software na Stone Age',
      imagem: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
      time: teams[5].nome
    },
    {
      id: uuidv4(),
      fav: false,
      nome: 'GUILHERME LIMA',
      cargo: 'Desenvolvedor Python e JavaScript na Alura',
      imagem: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
      time: teams[5].nome
    },
    {
      id: uuidv4(),
      fav: false,
      nome: 'PAULO SILVEIRA',
      cargo: 'Hipster e CEO da Alura',
      imagem: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
      time: teams[5].nome
    },
  ]

  const [collaborators, setCollaborator] = useState(inicial);

  const onNewInsertedCollaborator = (collaborator) => {
    setCollaborator([...collaborators, collaborator])
  }

  function removeCollaborator(id) {
    setCollaborator(collaborators.filter(collaborator => collaborator.id !== id));
  }

  function toggleFavorite(id) {
    setCollaborator(collaborators.map(collaborator => {
      if(collaborator.id === id) {
        collaborator.fav = !collaborator.fav;
      }
      return collaborator;
    }));
  }

  function changeColor(color, id) {
    setTeams(teams.map(team => {
      if (team.id === id) {
        team.cor = color;
      }
      return team;
    }));
  }

  function insertTime(novoTime) {
    setTeams([...teams, {...novoTime, id: uuidv4} ])
  }
  
  return (
    <div className="App">
      <Banner></Banner>
      <Form 
        insertTime={insertTime}
        teams={teams.map(time => time.nome)} 
        onInsertCollaborator = {
          collaborator => onNewInsertedCollaborator(collaborator)
        }
      />

      {teams.map(team => <Team 
        id={team.id}
        key={team.nome} 
        nome={team.nome} 
        cor={team.cor}
        collaborators={collaborators.filter(collaborator => collaborator.time === team.nome)}
        onRemove={removeCollaborator}
        toggleFav={toggleFavorite}
        changeCardColor={changeColor}></Team>)}
      
      <Footer></Footer>
    </div>
  );
}

export default App;


