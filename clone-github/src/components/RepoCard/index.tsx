import React from 'react';
import { 
    Container,
    RepoIcon,
    Topside,
    Botside,
    StarIcon,
    ForkIcon
} from './styles';

import {Link} from 'react-router-dom';


interface IRepoProps{
    username: string;
    reponame: string;
    description?: string;
    language?: string;
    stars: number;
    forks: number;

}
const RepoCard: React.FC<IRepoProps> = ({ 
    username,
    reponame,
    description,
    language,
    stars,
    forks
}) => {

    const languageClass = language ? language.toLowerCase() : 'other';
  
  
    return (
        <Container>
            <Topside>
                <header>
                    <RepoIcon />
                    <Link to={`/${username}/${reponame}`} >{reponame}</Link>
                </header>
                <p>Descricao </p>
            </Topside>
            <Botside>
                <ul>
                    <li>
                        <div className={`language ${languageClass}`}/>
                        <span>{language}</span>
                    </li>
                    <li>
                        <StarIcon />
                        <span>{stars}</span>
                    </li>
                    <li>
                        <ForkIcon />

                    </li>
                </ul>
            </Botside>
        </Container>
    );
};

export default RepoCard;