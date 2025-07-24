import "./App.scss";
import Navbar from "./components/navbar/Navbar";
import Test from "./components/test/Test";

function App() {
  return (
    <>
      <div>
        <section>
          <Navbar />
          <a href="">Hero</a>
        </section>
        <section>Parallax</section>
        <section>Services</section>
        <section>Portfolio1</section>
        <section>Portfolio2</section>
        <section>Portfolio3</section>
        <section>Contact</section>
      </div>
    </>
  );
}

export default App;
