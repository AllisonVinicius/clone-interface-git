import React, {useEffect} from 'react';
import {useParams} from 'react-router-dom'



 import { 
   Container,
   Main,
   LeftSide, 
   RightSide,
   Repos,
   CalendarHeading,
   RepoIcon,
   Tab,
  } from './styles';

import ProfileData from '../../components/ProfileData';
import RepoCard from '../../components/RepoCard';
import RandomCalendar from '../../components/RandomCalendar';


const Profile: React.FC = () => {
  const {username = 'AllisonVinicius'} = useParams();

  useEffect(() => {
    Promise.all([
      fetch(`https://api.github.com/users/${username}`), //consumindo api git
      fetch(`https://api.github.com/users/${username}/repos`),
,    ]).then(async response => {
      console.log(response);
     })
  },[username]);


  const TabContent = () => (
      <div className="content">
        <RepoIcon />
        <span className="label">Repositorios</span>
        <span className="number">26</span>

        <span className="label">Oveview</span>
        
        <span className="label">Projects</span>
        
        <span className="label">Packges</span>
        

        <span></span>
      </div>
  );
  return (
    <Container>
      <Tab className="desktop">
        <div className="wrapper">
          <span className="offset" />
          <TabContent />
        </div>
        
        <span className="line" />
      </Tab>

      <Main>
        <LeftSide>
          <ProfileData 
            username={'AllisonVinicius'}
            name={'Allison Vinicius'}
            avatarUrl={'https://avatars.githubusercontent.com/u/39178001?v=4'}
            followers={887}
            following={4}
            company={'Nenhuma'}
            location={'Corumbá,Brazil'}
            email={'alllisonvinicius63@gmail.com'}
            blog={'https://www.linkedin.com/in/allison-vinicius-b73a9a147/'}
          
          />
        </LeftSide>
        <RightSide>
          <Tab className="mobile">
            <TabContent />
            <span className="line"/> 
          </Tab>
            
            <Repos>
            <h2>Repositorios Todos </h2>
            <div>
              {[1,2,3,4,5,6].map(index => (
                <RepoCard 
                  key={index}
                  username={'AllisonVinicius'}
                  reponame={'darhboard-react'}
                  description={'git clone'}
                  language={index % 3 ===  0 ?'JavaScript' : 'TypeScript'}
                  stars={5}
                  forks={4}
                
                />


              ))};
            </div>

          </Repos>
          <CalendarHeading>
                Calendario alearios
          </CalendarHeading>

          <RandomCalendar />
        </RightSide>
      </Main>
    </Container>

  );
};

export default Profile;