import Header from "./components/Header";
import UserProfile from "./components/UserProfile";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";

function App() {
  return (
    <div>

      <Header />

      <UserProfile name="Ann Chinonso" age={25} bio="Aspiring Frontend Engineer & Fashion Designer" />


      <MainContent />

      <Footer />
    </div>
  );
}

export default App;
