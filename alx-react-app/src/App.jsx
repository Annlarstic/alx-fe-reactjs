import React from 'react';
import WelcomeMessage from './components/WelcomeMessage';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import UserProfile from './components/UserProfile';

function App() {
    return (
    <div>
      <WelcomeMessage />
       <Header />
        <MainContent />
        <Footer />
        <UserProfile name="Ann Chinonso Ezeakunne" age="25" bio="Loves coding and fashion" />

      </div>
    );
}

export default App;