import '../styles/footer.css';

export default function Footer() {
  return (
    <div className='containerFooter'>
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
              <p> Lunes a Domingo de 8 PM a 1 AM.</p>
            </div>
            <div className='elementsContainerTopFooter'>
              <span>Contacto</span>
              <p>0263 442-0151</p>
            </div>
            <div className='elementsContainerTopFooter'>
              <a href='#'>Inicio</a>
            </div>
            <div className='elementsContainerTopFooter'>
              <a href='#'>Sobre Nosotros</a>
            </div>
          </div>
        </div>
      </div>
      <div className='bottomFooter'></div>
    </div>
  );
}
