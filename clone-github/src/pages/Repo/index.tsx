import React from 'react';

import {Link} from 'react-router-dom';
import { RepoIcon } from '../Profile/styles';

 import {
    Container,
    Breakcrumb,
    Stats,
    StarIcon, 
    ForkIcon,
    LinkButton,
    GithubIcon

  } from './styles';

const Repo: React.FC = () => {
  return(
    <Container>
      <Breakcrumb>
        <RepoIcon />
        <Link className={"username"} to={'/AllisonVinicius'} >
          AllisonVinicius

        </Link>
        <span>/</span>
        <Link className={"reponame"} to={'/AllisonVinicius'}>
          github clone - ui clone

        </Link>
      </Breakcrumb>
      <p>clone para teste front-end github</p>
      <Stats>
        <li>
          <StarIcon />

          <b>8</b>
          <span>stars</span>
        </li>
        <li>
          <ForkIcon />
          <b>0</b>  
          <span>Forks</span>
        
        </li>
      </Stats>
      <LinkButton href={'https://github.com/AllisonVinicius'}>
        <GithubIcon />
        <span>Ver no github</span>
      </LinkButton>
    </Container>
  );
};



export default Repo;