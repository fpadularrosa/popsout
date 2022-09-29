import MyImage from "./MyImage";
import ideaimage from '../public/ideaimage.jpg';

const GotAnIdea = () => {
    return(
        <div className="xl:flex xl:flex-col xl:items-center xl:bg-black xl:pb-9">
            <div className="text-white xl:flex xl:flex-col xl:items-center xl:py-10">
                <h1 className="xl:pb-6 xl:text-4xl xl:font-bold">GOT AN IDEA?</h1>
                <p className="xl:text-[17px] xl:text-center xl:w-[500px] xl:pb-5 xl:font-light">Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod Tempor Incididunt Ut Labore Et Dolore Magna Aliqua</p>
                <button className="xl:p-[12px] xl:h-12 xl:w-[150px] xl:text-md xl:font-bold xl:justify-center xl:items-center flex xl:bg-yellow-400 xl:border xl:border-white xl:border-solid xl:text-black xl:hover:bg-black xl:active:border-orange-400 ease-in xl:hover:text-yellow-400 xl:duration-500">DOWNLOAD</button>
            </div>
            <div className="ml-14">
                <MyImage image={ideaimage} width={520} height={380} />
            </div>
        </div>
    )
}
export default GotAnIdea;