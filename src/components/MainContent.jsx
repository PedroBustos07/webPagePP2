import '../styles/mainContent.css';
import portadaBoulevard from '../assets/portadaBoulevard.jpg';

export default function MainContent() {
  return (
    <div className='content'>
      <div className='mainContent'>
        <div className='leftText'>
          <h1>
            !Bienvenidos a <span>Boulevard</span> Lomos!
          </h1>
          <p>
            Donde cada <span>bocado</span> cuenta
          </p>
          <div className='buttonContent'>
            <button className='buttonsMain' id='buttonsMainColor1'>
              Ver El menu completo
            </button>
            <button className='buttonsMain' id='buttonsMainColor2'>
              Pedido Online
            </button>
          </div>
        </div>
        <div className='rigthPhoto'>
          <img src={portadaBoulevard} alt='' />
        </div>
      </div>
      <svg
        className='waves'
        data-name='Layer 1'
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 1200 120'
        preserveAspectRatio='none'
      >
        <path
          d='M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z'
          className='shape-fill' /* Aquí se cambia class por className */
          fill='#ffffff'
          fillOpacity='1'
        ></path>
      </svg>
    </div>
  );
}
