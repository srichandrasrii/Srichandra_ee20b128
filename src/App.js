import './App.css';
import Home from'./components/title/title.jsx';
import Navbar from './components/navbar/navbar.jsx';
import Products from './components/Products/products.jsx'
import Footer from './components/footer/footer.jsx'

function App() {
  return (
    <div>
      <Navbar/>
      <Home/>
      <Products/>
      <Footer/> 
    </div>
  );
}

export default App;
