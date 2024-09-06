import './aboutUsPage.css';
import Navbar from '../../components/navbar/Navbar';
import OurHistory from '../../components/ourHistory/OurHistory';
import OurSpecialty from '../../components/ourSpecialty/OurSpecialty';

export default function AboutUsPage() {
  return (
    <>
      <Navbar></Navbar>
      <div className='wrapper' style={{ height: '90px' }}></div>
      <OurHistory></OurHistory>
      <OurSpecialty></OurSpecialty>
    </>
  );
}
