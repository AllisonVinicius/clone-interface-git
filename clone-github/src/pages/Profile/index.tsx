import React from 'react';

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

  const TabContent = () => {
      <div className="content">
        <RepoIcon />
        <span className="label">Repositorios</span>
        <span className="number">26</span>
        <span></span>
      </div>
  }
  return (
    <Container>
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