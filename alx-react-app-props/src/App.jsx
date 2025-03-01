import React from 'react';
import Header from './components/Header';
import WelcomeMessage from './components/WelcomeMessage';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import ProfilePage from './ProfilePage';  
import UserContext from './UserContext';  

function App() {
    const userData = { name: "Jane Doe", email: "jane.doe@example.com" };

    return (
        <UserContext.Provider value={userData}>  
            <div>
                <Header />
                <WelcomeMessage />
                <MainContent />
                <ProfilePage />  
                <Footer />
            </div>
        </UserContext.Provider>
    );
}

export default App;
