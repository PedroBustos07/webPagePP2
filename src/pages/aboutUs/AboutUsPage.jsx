import './aboutUsPage.css';
import blob from '../../assets/blob 1.png';
import barMan from '../../assets/camarero1.png';
import Navbar from '../../components/navbar/Navbar';
import OurHistory from '../../components/ourHistory/OurHistory';
import OurSpecialty from '../../components/ourSpecialty/OurSpecialty';
import TheEnvironment from '../../components/theEnvironment/TheEnvironment';
import LocationRestaurant from '../../components/locationRestaurant/LocationRestaurant';
import Footer from '../../components/footer/Footer';
import chefEgg from '../../assets/chefEgg.png';

export default function AboutUsPage() {
  return (
    <>
      <Navbar></Navbar>
      <div className='wrapper' style={{ height: '90px' }}></div>
      <OurHistory
        image={blob}
        title='Nuestra'
        titleSpan='Historia'
        textInfo='En Boulevard Lomos, comenzamos con un sueño sencillo: crear un 
        lugar donde la buena comida y el ambiente acogedor se unan en perfecta armonía.
        Ubicados en el corazón de San Martín, Mendoza, hemos crecido gracias
        al amor por los sabores tradicionales y la dedicación 
        a ofrecer experiencias únicas. Desde nuestros humildes comienzos, nos hemos convertido en un destino favorito para los amantes de los lomos y otras delicias.'
      ></OurHistory>
      <OurSpecialty></OurSpecialty>
      <OurHistory
        image={barMan}
        imageClass='customImageClass1'
        title='Atencion'
        titleSpan='Personalizada'
        textInfo='En Boulevard Lomos, creemos que cada cliente merece un trato especial. Por eso, nuestra atención es completamente personalizada. Con un equipo de mozas dedicadas y amables, nos aseguramos de que disfrutes de una experiencia única y cómoda, donde no tendrás 
        que preocuparte por el autoservicio, solo por disfrutar.'
      ></OurHistory>
      <TheEnvironment></TheEnvironment>
      <OurHistory
        image={chefEgg}
        title='Nuestro'
        titleSpan='Compromiso'
        titleClass='colorRedTitle'
        textInfo='La calidad es nuestra prioridad. Nos aseguramos de que cada plato que servimos esté preparado con los mejores ingredientes,
         frescos y cuidadosamente seleccionados. Estamos comprometidos a ofrecer una experiencia gastronómica que va más allá de lo común, donde cada bocado es un
          reflejo de nuestro amor por la buena comida.'
        imageClass='customImageClass1'
      ></OurHistory>
      <LocationRestaurant></LocationRestaurant>
      <Footer></Footer>
    </>
  );
}

/**colorRedTitle  */
