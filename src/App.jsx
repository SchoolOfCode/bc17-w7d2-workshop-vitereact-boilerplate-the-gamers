import "./App.css";
import Header from "./components/header/header";
import Main from "./components/main/main";
import Footer from "./components/footer/footer";

function App() {
  return (
    <section className="wrapper grid">
      <Header />
      <Main />
        // Process //Title // Item1 // Item2 // Item3
      <Footer />
    </section>
  );
}

export default App;
