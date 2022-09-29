import MyImage from "./MyImage";
import twitter from '../public/platforms/twitterplatform.png';
import instagram from '../public/platforms/igplatform.png';
import google from '../public/platforms/googleplatform.png';
import snapchat from '../public/platforms/snapchatplatform.png';
import facebook from '../public/platforms/facebookplatform.png';
import android from '../public/platforms/androidplatform.png';
import apple from '../public/platforms/appleplatform.png';
import youtube from '../public/platforms/youtubeplatform.png';
import tiktok from '../public/platforms/tiktokplatform.png';

const Platforms = () => {
    return(
        <div className="xl:flex xl:flex-col xl:items-center xl:mt-32">
            <div className="xl:flex xl:flex-col xl:items-center xl:mb-7">
            <h1 className="xl:text-4xl xl:font-bold xl:mb-3 xl:drop-shadow-md">AR PLATFORMS</h1>
            <p className="xl:mb xl:text-[18.5px] xl:drop-shadow-md">Deliver Your AR Experience Across The Following Platforms.</p>
            </div>
            <div id='containerIconsPlatforms' className="xl:flex xl:flex-col xl:mb-40">
                <div className="xl:flex xl:mb-[182px]">
                    <div className="xl:h-0 xl:mr-6 xl:drop-shadow-md">
                    <MyImage image={twitter} width={140} height={140}/>
                    </div>
                    <div className="xl:h-0 xl:mr-6 xl:drop-shadow-md">
                    <MyImage image={instagram} width={140} height={140}/>
                    </div>
                    <div className="xl:h-0 xl:mr-6 xl:drop-shadow-md">
                    <MyImage image={google} width={140} height={140}/>
                    </div>
                    <div className="xl:h-0 xl:mr-6 xl:drop-shadow-md">
                    <MyImage image={snapchat} width={140} height={140}/>
                    </div>
                    <div className="xl:h-0 xl:mr-6 xl:drop-shadow-md">
                    <MyImage image={facebook} width={140} height={140}/>
                    </div>
                </div>
                <div className="xl:flex xl:justify-center">
                    <div className="xl:h-0 xl:mr-6 xl:drop-shadow-md">
                    <MyImage image={android} width={140} height={140}/>
                    </div>
                    <div className="xl:h-0 xl:mr-6 xl:drop-shadow-md">
                    <MyImage image={apple} width={140} height={140}/>
                    </div>
                    <div className="xl:h-0 xl:mr-6 xl:drop-shadow-md">
                    <MyImage image={tiktok} width={140} height={140}/>
                    </div>
                    <div className="xl:h-0 xl:drop-shadow-md">
                    <MyImage image={youtube} width={140} height={140}/>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Platforms;