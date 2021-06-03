import React from 'react';

import { Container, GithubLogo, SearchForm} from './styles';

const Header: React.FC = () => {
  return (
      <Container>
        <GithubLogo />
        <SearchForm>
          <input  placeholder="Entre com o nome usuario ou email"/>
        </SearchForm>
      </Container>


  );

};

export default Header;