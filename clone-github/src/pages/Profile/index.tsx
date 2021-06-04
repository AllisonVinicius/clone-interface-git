import React, {useEffect,useState} from 'react';
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
import { APIUser,APIRepo } from '../../@types';

interface Data {

  user?:APIUser;
  repos?: APIRepo[];
  error?: string;
}


const Profile: React.FC = () => {
  const {username = 'AllisonVinicius'} = useParams();
  const [data, setData] = useState<Data>();

  useEffect(() => {
    Promise.all([
      fetch(`https://api.github.com/users/${username}`), //consumindo api git
      fetch(`https://api.github.com/users/${username}/repos`),
,    ]).then(async response => {
        const [userResponse,reposResponse] = response;
      
        if(userResponse.status === 404){
          setData({ error: 'user not found'});
          return;
        }
        const user = await userResponse.json();
        const repos = await reposResponse.json();

        setData({
          user,
          repos,
        });
     });
  },[username]);

    if (data?.error){
      return <h1>{data.error}</h1>

    }

    if (!data?.user || !data?.repos){
      return <h1>Loading..</h1>
    }

  const TabContent = () => (
      <div className="content">
        <RepoIcon />
        <span className="label">Repositorios</span>
        <span className="number">{data.user?.public_repos}</span>

        {/* <span className="label">Oveview</span>
        
        <span className="label">Projects</span>
        
        <span className="label">Packges</span> */}
        

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
            username={data.user.login}
            name={data.user.name}
            avatarUrl={data.user.avatar_url}
            followers={data.user.followers}
            following={data.user.following}
            company={data.user.company}
            location={data.user.location}
            email={data.user.email}
            blog={data.user.blog}
          
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
              {data.repos.map((index) => (
                <RepoCard 
                  key={index.name}
                  username={index.owner.login}
                  reponame={index.name}
                  description={index.description}
                  language={index.language}
                  stars={index.stargazers_count}
                  forks={index.forks}
                
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