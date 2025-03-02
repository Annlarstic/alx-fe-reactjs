import React from "react";
import { UserProvider } from "./UserContext";  // Import UserProvider
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
      </div>
    </UserProvider>
  );
}

export default App;
