import './locationRestaurant.css';
export default function LocationRestaurant() {
  return (
    <div className='containerLocationRestaurant'>
      <iframe
        src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3343.184066623463!2d-68.46460412344953!3d-33.07794177853357!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f17!3m3!1m2!1s0x967e430ed8928dcb%3A0xf63b5f556799f0d2!2sBoulevard%20Lomos!5e0!3m2!1ses-419!2sar!4v1725322512824!5m2!1ses-419!2sar'
        width='400'
        height='300'
        style={{ border: 0 }}
        allowFullScreen
        loading='lazy'
        referrerPolicy='no-referrer-when-downgrade'
      ></iframe>
    </div>
  );
}
