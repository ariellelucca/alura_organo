import { useState } from 'react';
import Banner from './components/Banner';
import Form from './components/Form';
import Team from './components/Team';
import Footer from './components/Footer';

function App() {

  const teams = [
    { 
      nome:'Programação',
      corPrimaria: '#57C278',
      corSecundaria: '#D9F7E9'
    },
    { 
      nome:'Front-End',
      corPrimaria: '#82CFFA',
      corSecundaria: '#E8F8FF'
    },
    { 
      nome:'Data Science',
      corPrimaria: '#A6D157',
      corSecundaria: '#F0F8E2'
    },
    { 
      nome:'DevOps',
      corPrimaria: '#E06B69',
      corSecundaria: '#FDE7E8'
    },
    { 
      nome:'UX e Design',
      corPrimaria: '#DB6EBF',
      corSecundaria: '#FAE9F5'
    },
    { 
      nome:'Mobile',
      corPrimaria: '#FFBA05',
      corSecundaria: '#FFF5D9'
    },
    { 
      nome:'Inovação e Gestão',
      corPrimaria: '#FF8A29',
      corSecundaria: '#FFEEDF'
    }
  ];

  const [collaborators, setCollaborator] = useState([]);

  const onNewInsertedCollaborator = (collaborator) => {
    setCollaborator([...collaborators, collaborator])
  }
  
  return (
    <div className="App">
      <Banner></Banner>
      <Form teams={teams.map(time => time.nome)} onInsertCollaborator = {collaborator => onNewInsertedCollaborator(collaborator)}></Form>

      {teams.map(team => <Team 
        key={team.nome} 
        nome={team.nome} 
        corPrimaria={team.corPrimaria} 
        corSecundaria={team.corSecundaria}
        collaborators={collaborators.filter(collaborator => collaborator.time === team.nome)}></Team>)}
      
      <Footer></Footer>
    </div>
  );
}

export default App;


