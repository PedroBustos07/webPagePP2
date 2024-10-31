import { useState } from 'react';
import './cardShopping.css';
import checkboxIcon from '../../assets/checkboxIcon.png';
import unCheckBoxIcon from '../../assets/uncheckboxIcon.png';
export default function CardShopping({
  image,
  title,
  description,
  price,
  handleAgregar,
  handleQuitar,
}) {
  const [added, setAdded] = useState(false);
  const [isSelected, setIsSelected] = useState(false);

  const clickAdd = () => {
    handleAgregar();
    setAdded(true);
    setIsSelected(true);
  };
  const clickRemove = () => {
    handleQuitar();
    setAdded(false);
    setIsSelected(false);
  };

  return (
    <div className='containerCard'>
      <div className='cardTop'>
        <img
          className='iconCheckBox'
          src={isSelected ? checkboxIcon : unCheckBoxIcon}
          alt='checkboxIcon'
        />
        <img
          className='cardImage'
          src={`../../../public/cartImages/${image}`}
          alt={title}
        />
      </div>
      <div className='cardMid'>
        <p className='cardTitle'>{title}</p>
        <p className='cardDescription'>{description}</p>
        <span className='cardPrice'>${price} </span>
      </div>
      <div className='cardBottom'>
        {added ? (
          <button
            className='cardButtonRemove'
            type='button'
            onClick={clickRemove}
          >
            quitar
          </button>
        ) : (
          <button className='cardButtonAdd' type='button' onClick={clickAdd}>
            Agregar
          </button>
        )}
      </div>
    </div>
  );
}
