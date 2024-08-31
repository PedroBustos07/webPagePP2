import '../styles/previewAboutUs.css';
import chefPreviewAboutUs from '../assets/cheftPreviewAboutUs.png';
export default function PreviewAboutUs() {
  return (
    <div className='containerPreviewAboutUs'>
      <div className='childrenContainerPreviewAboutUs'>
        <div className='imagePreviewAboutUs'>
          <img src={chefPreviewAboutUs} alt='' />
        </div>
        <div className='textPreviewAboutUs'>
          <h3 className='titleTextPreview'>
            <span className='titleTextColor1'>Descubre</span> el{' '}
            <span className='titleTextColor1'>Sabor</span> de{' '}
            <span className='titleTextColor2'>Boulevard</span> lomos
          </h3>
          <p className='descriptionTextPreview'>
            En Boulevard Lomos, te invitamos a vivir una experiencia culinaria
            llena de sabor y calidez. Somos más que un simple restaurante; somos
            un lugar donde cada plato está hecho con pasión y dedicación, para
            que cada visita sea inolvidable. ¡Explora nuestras delicias y siente
            la bienvenida en cada bocado!
          </p>
          <button className='buttonMostReq'>Sobre Nosotros</button>
        </div>
      </div>
      <svg
        className='svgPreviewAboutUs'
        width='1440'
        height='121'
        viewBox='0 0 1440 121'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <g clipPath='url(#clip0_206_41)'>
          <path
            opacity='0.25'
            d='M1452 120.74V74.4609C1394.17 52.2662 1326.66 42.2986 1260.82 46.4676C1175.68 51.8363 1095.86 79.7696 1010.59 83.9586C921.246 88.3176 832.069 67.0827 746.57 48.7071C662.753 30.7114 579.227 23.8331 493.196 35.6302C449.454 41.6288 408.677 53.466 366.812 64.9632C254.717 95.7458 105.27 135.026 0 68.2824V120.74L1452 120.74Z'
            fill='white'
          />
          <path
            opacity='0.5'
            d='M1452 120.74V104.934C1436.27 83.8286 1418.56 63.8934 1394.3 48.7071C1331.71 9.49654 1252.35 9.76648 1180.26 29.1818C1142.57 39.3294 1107.55 55.2455 1071.76 68.9722C1022.24 87.9676 969.234 114.961 913.453 118.63C869.579 121.48 827.664 109.213 794.147 87.0779C755.706 61.694 718.74 25.0928 668.755 14.0954C619.822 3.30804 570.321 20.7838 524.608 38.3696C478.894 55.9554 433.664 77.3602 383.134 81.4092C310.861 87.2578 246.066 58.5347 178.765 42.5786C142.223 33.9207 107.375 36.4101 73.3865 50.0768C46.2462 60.9641 15.3064 77.0003 0 99.3049V120.74L1452 120.74Z'
            fill='white'
          />
          <path
            d='M1452 120.74V115.111C1270.58 61.754 1071.95 49.4369 876.246 78.18C824.216 85.8182 774.327 98.2952 721.838 104.634C650.448 113.262 585.737 92.3966 521.51 69.2422C450.205 43.5383 379.94 25.5227 301.048 30.7614C196.347 37.7597 92.3713 76.4604 0 115.551V120.74L1452 120.74Z'
            fill='white'
          />
        </g>
        <defs>
          <clipPath id='clip0_206_41'>
            <rect
              width='1452'
              height='119.971'
              fill='white'
              transform='matrix(-1 0 0 -1 1452 120.74)'
            />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}
