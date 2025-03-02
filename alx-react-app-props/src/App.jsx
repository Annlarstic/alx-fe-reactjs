import React from "react";
import { UserContext, UserProvider } from "./UserContext"; 
import Header from "./components/Header";
import WelcomeMessage from "./components/WelcomeMessage";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import ProfilePage from "./ProfilePage";

function App() {
  return (
    <UserProvider>  
      <div>
        <Header />
        <WelcomeMessage />
        <MainContent />
        <ProfilePage />  
        <Footer />
        <UserContext/>
      </div>
    </UserProvider>
  );
}

export default App;
