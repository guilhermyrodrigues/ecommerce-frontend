import { useEffect } from 'react'
import { productService } from './services/productService';
import './App.css'


function App() {
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const products = await productService.getAll();
        console.log('Produtos recebidos:', products);
      } catch (error) {
        console.error('Erro ao buscar produtos:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <>
      <h1>Verifique o console do navegador para ver os produtos.</h1>
    </>
  )
}

export default App
