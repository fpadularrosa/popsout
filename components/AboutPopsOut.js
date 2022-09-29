import MyImage from "./MyImage";
import spiral from '../public/spiralLogo.jpg';
const AboutPopsOut = () => {

    return(
        <div className="items-center xl:flex xl:justify-center xl:mt-32">
            <div>
                <MyImage image={spiral} width={482} height={482} />
            </div>
            <div className="xl:ml-16">
                <h1 className="text-black xl:text-4xl xl:font-extrabold xl:mb-[16px]">ABOUT POSPOUT STUDIO</h1>
                <p className="xl:w-[470px] xl:text-[18px] xl:text-left xl:mb-[17px]">PopsOut Studio Powers A New Generation Of Shopping Experiences Through Visualisation Technology. We Increase Sales And Decrease Returns By Offering 3D And AR Previews Of Products Across E-Commerce Websites, Social Commerce And The Metaverse.</p>
                <button className="xl:p-[12px] xl:w-[150px] xl:text-md xl:font-bold xl:bg-yellow-400 xl:border xl:border-black xl:border-solid xl:hover:bg-black xl:active:border-orange-400 xl:hover:text-yellow-400 xl:duration-300">GET STARTED</button>
            </div>
        </div>
    )
}
export default AboutPopsOut;