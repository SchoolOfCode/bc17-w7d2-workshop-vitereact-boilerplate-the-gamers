import "./App.css";
import Header from "./components/header";
import Main from "./components/main";
import Footer from "./components/footer";

function App() {
  return (
    <>
      <body className="wrapper grid">
        <Header />
        <Main />
        // Process //Title // Item1 // Item2 // Item3
        <Footer />
      </body>
    </>
  );
}

export default App;
