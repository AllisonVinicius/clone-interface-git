import 'react-calendar-heatmap/dist/styles.css';
import React,{useState} from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {ThemeProvider} from 'styled-components';



import GlobalStyles from './styles/GlobalStyles'; 
import Header from './components/Header';
import Profile from  './pages/Profile';
import Repo from './pages/Profile';
import Footer from './components/Footer';
import {ThemeName,themes} from './styles/themes';

function App() {
  const [ThemeName,setThemeName] = useState<ThemeName>('dark');
  const currentTheme = themes[ThemeName];

  return (
    <ThemeProvider theme={currentTheme}>    
        <BrowserRouter>
        <Header  />
        
          <Routes>
            <Route path="/" element ={ <Profile /> } />
            <Route path="/:username" element ={ <Profile /> } />
            <Route path="/:username/:reponame" element = {<Repo />} />

          </Routes>
          <Footer />
          <GlobalStyles />
        </BrowserRouter>
    </ThemeProvider>    
)}

export default App;
