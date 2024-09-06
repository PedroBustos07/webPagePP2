import './ourHistory.css';
import kitchen from '../../assets/blob 1.png';
export default function OurHistory() {
  return (
    <div className='containerOurHistory'>
      <div className='firstSectionOurHistory'>
        <img src={kitchen} alt='' />
      </div>
      <div className='secondSectionOurHistory'>
        <div className='infoSecondSectionOurHistory'>
          <h3 className='titleSectionAboutUs'>
            Nuestra <span className='spanTitleSectionAboutUs'>Historia</span>
          </h3>
          <p className='textSectionAboutUs'>
            En Boulevard Lomos, comenzamos con un sueño sencillo: crear un lugar
            donde la buena comida y el ambiente acogedor se unan en perfecta
            armonía. Ubicados en el corazón de San Martín, Mendoza, hemos
            crecido gracias al amor por los sabores tradicionales y la
            dedicación a ofrecer experiencias únicas. Desde nuestros humildes
            comienzos, nos hemos convertido en un destino favorito para los
            amantes de los lomos y otras delicias.
          </p>
        </div>
      </div>
    </div>
  );
}
