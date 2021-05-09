import "./App.css"
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Nav from "./components/Nav"

function App() {
  const navLink =['Home','About','Contact']
  return (
    <div className="App">
      {/* <h1>App</h1> */}
      <Nav links= {navLink.map(link=>{
    return(
    <li key={link}><a href="#">{link}</a></li>
      )
        })} />

       <Hero /> 

       <Footer name="© 2021 LOGO Digital. All rights reserved Powered by: LOGO"/>
      
    </div>
  );
}

export default App;
