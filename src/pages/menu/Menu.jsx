import './menu.css';
import Navbar from '../../components/navbar/Navbar';
import CardShopping from '../../componentsShoppingCard/cardShopping/CardShopping';
import { useContext } from 'react';
import { ProductosContext } from '../../context/ProductosContext';
import { CarritoContext } from '../../context/CarritoContext';

export default function Menu() {
  const { products } = useContext(ProductosContext);
  const {
    listShopping,
    agregarCompra,
    disminuirCantidad,
    aumentarCantidad,
    eliminarCompra,
  } = useContext(CarritoContext);

  const handleAgregar = (compra) => {
    agregarCompra(compra);
  };
  const handleQuitar = (id) => {
    eliminarCompra(id);
  };

  console.log(products);
  return (
    <>
      <Navbar showCart={true}></Navbar>
      <div className='containerMenu'>
        {products.map((product) => (
          <CardShopping
            key={product.id}
            title={product.nombre}
            description={product.descripcion}
            price={product.precio.toLocaleString('es-AR')}
            image={product.images_url}
            handleAgregar={() => handleAgregar(product)}
            handleQuitar={() => handleQuitar(product.id)}
          />
        ))}
      </div>
    </>
  );
}
