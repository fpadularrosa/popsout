import MyImage from "./MyImage";
import earnMistakes from '../public/Earnmistakes.jpg';
import ArMarketing from '../public/ArMarketing.jpg';
import piramid from '../public/Piramide.jpg';
import horse from '../public/Horse.jpg';
import rendering3d from '../public/rendering3d.jpg';
import assets3d from '../public/3DAssets.jpg';
import analytics from '../public/Analytics.jpg';

const Whypopsout = () => {
    return(
        <div className="xl:mt-32 xl:pb-32">
            <div className="xl:flex xl:flex-col xl:items-center xl:mb-12">
                <h1 className="xl:text-4xl xl:font-extrabold xl:mb-4">WHY POPSOUT STUDIO?</h1>
                <p className="xl:text-[18.5px] xl:text-center xl:w-[520px]">We Offer An End-To-End Marketing Solution To Help You Bulid Brand Awareness And Engagement.</p>
            </div>
            <div className="xl:flex xl:justify-between xl:mx-[98px]">
                <div className="xl:flex xl:flex-col xl:items-center xl:justify-center xl:text-center">
                <MyImage image={horse} width={176} height={176}/>
                <p className="xl:w-[270px]">We Provide Creative Strategy, Concepts And Moodboards</p>
                </div>
                <div className="xl:flex xl:flex-col xl:items-center xl:justify-center xl:text-center">
                <MyImage image={rendering3d} width={176} height={176}/>
                <p className="xl:w-[270px]">We Take Existing Brand Assets And Trun Them Into 3D Rendering</p>
                </div>
                <div className="xl:flex xl:flex-col xl:items-center xl:justify-center xl:text-center">
                <MyImage image={assets3d} width={176} height={176}/>
                <p className="xl:w-[270px]">We Generate An AR Experience Using Your 3D Assets</p>
                </div>
                <div className="xl:flex xl:flex-col xl:items-center xl:justify-center xl:text-center">
                <MyImage image={analytics} width={176} height={176}/>
                <p className="xl:w-[270px]">We Provide Analytics To Help You Track The Success Of Your Campaign</p>
                </div>
            </div>
            <div className="xl:mt-56">            
                <div className="mx-24">
                    <div className="xl:flex xl:items-center xl:justify-around xl:mb-40 js-show-on-scroll">
                        <div>
                            <h1 className="text-black xl:text-4xl xl:font-extrabold xl:mb-[14px]">AR ECOMMERCE</h1>
                            <p className="xl:w-[470px] xl:text-[18px] xl:text-left xl:mb-[31px]">Build brand awareness and engage with targeted audiences on social and the web with interactive AR and 3D campaigns.</p>
                            <button className="xl:p-[10px] xl:h-12 xl:w-[138px] xl:text-md xl:font-bold xl:bg-yellow-400 xl:border xl:border-black xl:border-solid xl:hover:bg-black xl:active:border-orange-400 xl:hover:text-yellow-400 xl:duration-300">DISCOVER</button>
                        </div>
                        <MyImage image={piramid} width={492} height={430}/>
                    </div>
                    <div className="xl:flex xl:items-center xl:justify-around xl:mb-40 js-show-on-scroll">
                        <MyImage image={ArMarketing} width={550} height={285}/>
                        <div>
                            <h1 className="text-black xl:text-4xl xl:font-extrabold xl:mb-[14px]">AR MARKETING</h1>
                            <p className="xl:w-[500px] xl:text-[18px] xl:text-left xl:mb-[31px]">With Our End-To-End 3D And AR Virtual Commerce Solution, You Can Increase Conversions By Empowering Customers To Visualise Products In 3D And AR. Embed Into Your Ecommerce Website Now With Just A Single Line Of Code.</p>
                            <button className="xl:p-[10px] xl:h-12 xl:w-[138px] xl:text-md xl:font-bold xl:bg-yellow-400 xl:border xl:border-black xl:border-solid xl:hover:bg-black xl:active:border-orange-400 xl:hover:text-yellow-400 xl:duration-300">DISCOVER</button>
                        </div>
                    </div>
                    <div className="xl:flex xl:items-center xl:justify-around js-show-on-scroll">
                        <div>
                            <h1 className="text-black xl:text-4xl xl:font-extrabold xl:mb-[15px]">EARN FROM OUR MISTAKES</h1>
                            <p className="xl:w-[500px] xl:text-[18px] xl:text-left">There&apos;s No Perfect Business, Just Lots Of Attempts. Learn From Gumroad&apos;s Founder Sahil Lavingia, In His New Book, &quot;<a href="https://www.minimalistentrepreneur.com" rel="noreferrer" target='_blank' className="xl:hover:underline xl:decoration-underline xl:hover:text-red-600 xl:duration-200">The Minimalist Entrepreneur</a>&quot; - A Manifesto For Founders Who Would Rather Build Great Businesses Than Big Companies More On Our Story Here.</p>
                        </div>
                        <MyImage image={earnMistakes} width={420} height={400}/>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Whypopsout;