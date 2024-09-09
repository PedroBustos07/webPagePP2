import './ourSpecialty.css';
import chefPreviewAboutUs from '../../assets/cheftPreviewAboutUs.png';
export default function OurSpecialty() {
  return (
    <div className='containerOurSpecialty'>
      <div className='leftSectionContainerSpecialty'>
        <div className='infoLeftSectionContainerSpecialty'>
          <h3 className='titleSectionAboutUs'>
            Nuestra{' '}
            <span className='spanTitleSectionAboutUs'>Especialidad</span>
          </h3>
          <p className='textSectionAboutUs'>
            El corazón de nuestro menú son los lomos. Desde el clásico lomo que
            todos aman hasta nuestras innovadores lomos boulevares, del tamaño
            de una pizza, ofrecemos una variedad que sorprende y deleita a cada
            paladar. Nuestra pasión por los lomos nos impulsa a crear
            combinaciones deliciosas que te dejarán con ganas de volver por más.
          </p>
        </div>
      </div>
      <div className='rightSectionContainerSpecialty'>
        <img src={chefPreviewAboutUs} alt='' />
      </div>
    </div>
  );
}
