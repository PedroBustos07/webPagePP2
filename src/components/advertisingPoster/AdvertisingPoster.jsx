import './advertisingPoster.css';
import post1 from '../../assets/post1.png';
import post2 from '../../assets/post2.png';
import post3 from '../../assets/post3.png';

export default function AdvertisingPoster() {
  return (
    <div className='containerPost'>
      <img src={post1} alt='' />
      <img src={post2} alt='' />
      <img src={post3} alt='' />
    </div>
  );
}
