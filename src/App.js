import Header from './containers/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ProductList from './containers/ProductList';
import ProductDetail from './containers/ProductDetail';
import './index.css';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" exact element={<ProductList />} />
        <Route path="/product/:id" exact element={<ProductDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
