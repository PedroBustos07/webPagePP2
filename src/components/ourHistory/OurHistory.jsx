import './ourHistory.css';
import PropTypes from 'prop-types';
export default function OurHistory({
  image,
  imageClass,
  title,
  titleSpan,
  textInfo,
}) {
  return (
    <div className='containerOurHistory'>
      <div className='firstSectionOurHistory'>
        <img src={image} className={imageClass} alt='' />
      </div>
      <div className='secondSectionOurHistory'>
        <div className='infoSecondSectionOurHistory'>
          <h3 className='titleSectionAboutUs'>
            {title} <p className='spanTitleSectionAboutUs'> {titleSpan}</p>{' '}
          </h3>
          <p className='textSectionAboutUs'>{textInfo}</p>
        </div>
      </div>
    </div>
  );
}

OurHistory.propTypes = {
  image: PropTypes.string.isRequired,
  imageClass: PropTypes.string,
  title: PropTypes.string.isRequired,
  titleSpan: PropTypes.string,
  textInfo: PropTypes.string.isRequired,
};
