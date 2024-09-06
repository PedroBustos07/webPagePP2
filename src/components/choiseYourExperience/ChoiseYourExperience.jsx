import './choiseYourExperience.css';
import greens from '../../assets/greens.png';
import plantLeaves from '../../assets/plantLeaves.png';
import tomato from '../../assets/tomato.png';
import takeAwayIcon from '../../assets/take-away-icon.png';
import creditCard from '../../assets/credit-card.png';
import localDinner from '../../assets/cenaLocal.png';

export default function ChoiseYourExperience() {
  return (
    <div className='containerChoiseExperience'>
      <div className='elementsTop'>
        <img src={tomato} alt='tomato' id='tomato' />
        <img src={plantLeaves} alt='plant leaves' id='plantLeaves' />
      </div>
      <div className='containerTextChoiseExp'>
        <h4>Elegí Tu Experiencia</h4>
        <div className='subContainerTextChoiseExp'>
          <div className='elementsSubContainer'>
            <div className='containerIcon'>
              <img src={takeAwayIcon} alt='' />
            </div>
            <p>
              <span>Take</span> Away
            </p>
          </div>
          <div className='elementsSubContainer' id='elementSubContainerMid'>
            <div className='containerIcon'>
              <img src={creditCard} alt='' />
            </div>
            <p>
              Multiples <span>Metodos</span> De <span>Pago</span>
            </p>
          </div>
          <div className='elementsSubContainer'>
            <div className='containerIcon'>
              <img src={localDinner} alt='' />
            </div>
            <p>
              <span>Cená</span> En El <span>Local</span>
            </p>
          </div>
        </div>
      </div>
      <div className='elementsBottom'>
        <img src={plantLeaves} alt='plant leaves' />
        <img src={greens} alt='greens' id='greens' />
      </div>
    </div>
  );
}
