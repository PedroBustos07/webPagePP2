import './cartPage.css';
import { useContext } from 'react';
import { CarritoContext } from '../../context/CarritoContext';
import Navbar from '../../components/navbar/Navbar';

export const CartPage = () => {
  const { listShopping, disminuirCantidad, aumentarCantidad, eliminarCompra } =
    useContext(CarritoContext);
  const calcularTotal = () => {
    return listShopping
      .reduce(
        (total, item) =>
          total + item.precio.toLocaleString('es-AR') * item.cantidad,
        0
      )
      .toFixed(3);
  };
  const handleImpresion = () => {
    print();
  };
  return (
    <>
      <Navbar showCart={true}></Navbar>
      <div className='containerCartPage'>
        <table border='1' cellSpacing='0' cellPadding='10' className='table'>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Precio</th>
              <th>Cantidad</th>
              <th>Eliminar</th>
            </tr>
          </thead>
          <tbody>
            {listShopping.map((item) => (
              <tr key={item.id}>
                <th>{item.nombre}</th>
                <td>{item.precio.toLocaleString('es-AR')}</td>
                <td>
                  <button
                    className='buttonCantidad'
                    onClick={() => disminuirCantidad(item.id)}
                  >
                    -
                  </button>
                  <button className='buttoCantidadn'>{item.cantidad}</button>
                  <button
                    className='buttonCantidad'
                    onClick={() => aumentarCantidad(item.id)}
                  >
                    +
                  </button>
                </td>
                <td>
                  <button
                    type='button'
                    className='buttonDeleteTable'
                    onClick={() => eliminarCompra(item.id)}
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
            <th>
              <b>TOTAL: </b>
            </th>
            <td></td>
            <td>{calcularTotal()}</td>
            <td></td>
          </tbody>
        </table>
        <button
          className='buttonTableBuy'
          onClick={handleImpresion}
          disabled={listShopping < 1}
        >
          COMPRAR
        </button>
      </div>
    </>
  );
};
