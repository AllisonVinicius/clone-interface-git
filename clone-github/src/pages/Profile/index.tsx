import React from 'react';

 import { Container, Main, LeftSide, RightSide } from './styles';
import ProfileData from '../../components/ProfileData';


const Profile: React.FC = () => {
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
        <RightSide></RightSide>
      </Main>
    </Container>

  );
};

export default Profile;