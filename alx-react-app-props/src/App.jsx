import React from "react";
import Header from "./components/Header.jsx";
import WelcomeMessage from "./components/WelcomeMessage.jsx";
import MainContent from "./components/MainContent.jsx";
import Footer from "./components/Footer.jsx";
import ProfilePage from "./ProfilePage.jsx";
import { UserProvider } from "./UserContext.jsx"; 

function App() {
  return (
    <UserProvider>
      <div>
        <Header />
        <WelcomeMessage />
        <MainContent />
        <ProfilePage />
        <Footer />
      </div>
    </UserProvider>
  );
}

export default App;