import './footer.css';

export default function Footer() {
  return (
    <div className='containerFooter' id='footer'>
      <div className='topFooter'>
        <div className='containerTopFooter1'>
          <h4>Boulevard Lomos</h4>
          <p>
            Sabores que te acompañan en cada momento. ¡Gracias por elegir
            Boulevard Lomos!
          </p>
        </div>
        <div className='dividerLine'>
          <hr />
          <div className='containerTopFooter2'>
            <div className='elementsContainerTopFooter'>
              <span>Horarios</span>
              <p> Lunes a Domingo de 7:30 PM a 1 AM.</p>
            </div>
            <div className='elementsContainerTopFooter'>
              <span>Contacto</span>
              <p>0263 442-0151</p>
            </div>
            <div className='elementsContainerTopFooter'>
              <a href='#navBarId'>Inicio</a>
            </div>
            <div className='elementsContainerTopFooter'>
              <a href='#'>Sobre Nosotros</a>
            </div>
          </div>
        </div>
      </div>
      <div className='bottomFooter'>
        <hr />
        <div className='elementsContainerBottomFooter'>
          <div className='bottomFooterLeft'>
            <p>© 2024 Boulevard Lomos. Todos los derechos reservados.</p>
          </div>
          <div className='bottomFooterRight'>
            <a href=''>
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
                className='icon icon-tabler icons-tabler-outline icon-tabler-brand-instagram'
              >
                <path stroke='none' d='M0 0h24v24H0z' fill='none' />
                <path d='M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z' />
                <path d='M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0' />
                <path d='M16.5 7.5l0 .01' />
              </svg>
            </a>
            <a href=''>
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
                className='icon icon-tabler icons-tabler-outline icon-tabler-brand-facebook'
              >
                <path stroke='none' d='M0 0h24v24H0z' fill='none' />
                <path d='M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3' />
              </svg>
            </a>
            <a href=''>
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
                className='icon icon-tabler icons-tabler-outline icon-tabler-brand-x'
              >
                <path stroke='none' d='M0 0h24v24H0z' fill='none' />
                <path d='M4 4l11.733 16h4.267l-11.733 -16z' />
                <path d='M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772' />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
