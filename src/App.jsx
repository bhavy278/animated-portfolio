import "./App.scss";
import Navbar from "./components/navbar/Navbar";
import Test from "./components/test/Test";

function App() {
  return (
    <>
      <div>
        <section id="Home">
          <Navbar />
          <a href="">Hero</a>
        </section>
        <section id="Services">Services</section>
        <section id="Portfolio">Portfolio</section>
        <section id="Contact">Contact</section>
        <section id="About">About</section>
      </div>
    </>
  );
}

export default App;
