
import './App.css'

function App() {

  let today = new Date().toLocaleDateString();
  let time = new Date().toLocaleTimeString();


  const welcome = ["chao", "rat", "vui"];

  function ranDomTile() {
    return Math.floor(Math.random() * welcome.length);
  }

  function Header() {
    return (
      <>
        <h1>{welcome[ranDomTile()]}<del></del></h1>
        <p>Hom na la:  <strong>{today}</strong>. Thoi gian hien tai{""}
          <strong>{time}</strong> </p>
      </>
    )
  }
  return (
    <>
      <Header />
    </>
  );
}

export default App;
