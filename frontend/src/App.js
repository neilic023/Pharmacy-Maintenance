import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import ProductList from './components/ProductList';
import AddProduct from './components/AddProduct';
import EditProduct from './components/EditProduct';
import Charts from './components/Charts';
import AboutApp from './components/AboutApp';
function App() {
  return (
    <Router>
      <div className="flex h-screen">
        <Sidebar />
        <Route path="/products" exact component={ProductList} />
        <Route path="/products/edit/:id" exact component={EditProduct} />
        <Route path="/products/add" exact component={AddProduct} />
        <Route path="/statistics" exact component={Charts} />
        <Route path="/about" component={AboutApp} />
      </div>
    </Router>
  );
}

export default App;
