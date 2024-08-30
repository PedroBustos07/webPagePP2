import '../styles/mostRequested.css';
import hamburguesaPng from '../assets/hamburguesa2png.png';
export default function MostRequested() {
  return (
    <div className='containerMostReq'>
      <h2>
        Lo mas <span className='leftSpan'>pedido</span> de la{' '}
        <span className='rigthSpan'>carta</span>
      </h2>
      <div className='shoppingCartContainer'>
        <div className='elementsShoppingCart'>
          <div className='containerHeart'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='currentColor'
              className='icon icon-tabler icons-tabler-filled icon-tabler-heart'
            >
              <path stroke='none' d='M0 0h24v24H0z' fill='none' />
              <path d='M6.979 3.074a6 6 0 0 1 4.988 1.425l.037 .033l.034 -.03a6 6 0 0 1 4.733 -1.44l.246 .036a6 6 0 0 1 3.364 10.008l-.18 .185l-.048 .041l-7.45 7.379a1 1 0 0 1 -1.313 .082l-.094 -.082l-7.493 -7.422a6 6 0 0 1 3.176 -10.215z' />
            </svg>
          </div>
          <img src={hamburguesaPng} alt='' />
          <p>Hamburguesa Especial</p>
          <span id='descriptionFood'>
            Carne angus, pan tostado, lechuga, tomate, cebolla caramelizada,
            mayonesa y salsa especial.
          </span>
          <button className='buttonShoppingCartContainer'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
              className='icon icon-tabler icon-tabler-shopping-cart'
            >
              <path stroke='none' d='M0 0h24v24H0z' fill='none' />
              <path d='M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0' />
              <path d='M17 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0' />
              <path d='M17 17h-11v-14h-2' />
              <path d='M6 5l14 1l-1 7h-13' />
            </svg>
            <span>Agregar al carrito</span>
          </button>
        </div>
        <div className='elementsShoppingCart'>s</div>
        <div className='elementsShoppingCart'>e</div>
        <div className='elementsShoppingCart'>r</div>
        <div className='elementsShoppingCart'>o</div>
        <div className='elementsShoppingCart'>b</div>
      </div>
      <button className='buttonMostReq'>Ver Mas</button>
      <div className='flayerContainer'></div>
    </div>
  );
}
