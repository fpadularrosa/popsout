import Head from 'next/head';
import Footer from '../components/Footer';
import AboutPopsOut from '../components/AboutPopsOut';
import GotAnIdea from '../components/GotAnIdea';
import MyImage from '../components/MyImage';
import Nav from '../components/Nav'
import Platforms from '../components/Platforms';
import Whypopsout from '../components/Whypopsout';
import sparklogo from '../public/sparkarlogo.jpg';
import clutchlogo from '../public/clutchlogo.jpg';
import forbeslogo from '../public/FORBES.jpg';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Pops Out</title>
      </Head>
          <Nav/>
          <div className='xl:h-[790px] xl:flex xl:flex-col xl:space-y-8 xl:items-center xl:justify-center bg-navbg'>
          <h1 className='text-white xl:text-7xl xl:text-center xl:w-[1100px] xl:font-bold'>WE LEAD BUSINESSES INTO</h1>
          <h1 className='text-white xl:text-7xl xl:text-center xl:w-[1100px] xl:font-bold'>IMMERSIVE REALITY</h1>
          </div>
          <div className='xl:justify-around xl:flex xl:mt-20 xl:items-center xl:mx-56'>
            <div className='xl:flex xl:flex-col'>
              <div className='xl:flex xl:justify-center xl:items-center'>
              <MyImage image={sparklogo} width={50} height={70} />
              <h1 className='xl:flex xl:items-center xl:justify-center xl:text-4xl xl:font-[450] xl:pl-4'>Spark AR</h1>
              </div>
              <p className='xl:text-[17px] xl:text-center xl:w-60 xl:mt-4'>SPARK AR Studio Experts. YORD Creates Unique AR Filters For Brands And NGOs</p>
            </div>
            <div className=''>
              <MyImage image={forbeslogo} width={240} height={65} />  
              <p className='xl:text-[17px] xl:text-center xl:w-60 xl:mt-4'>Global Leading Studio In Virtual And Augmented Reality</p>
            </div>
            <div>
              <MyImage image={clutchlogo} width={205} height={60} />  
              <p className='xl:text-[17px] xl:text-center xl:w-60 xl:mt-4'>Recognized As A Top B2B Development Studio In VR / AR</p>
            </div>
          </div>
          <AboutPopsOut/>
          <Platforms/>
          <Whypopsout/>
          <GotAnIdea/>
          <Footer/>
    </div>
  )
}
