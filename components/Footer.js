import MyImage from "./MyImage"
import footerlogo from '../public/footerlogo.jpg';
import calling from '../public/calling.jpg';
import message from '../public/messagesquare.jpg';
import instagram from '../public/instagramsquare.jpg';
import linkedin from '../public/linkedinsquare.jpg';
import twitter from '../public/twittersquare.jpg';
import Link from "next/link";
const Footer = () => {
    return(
        <div className="border-black xl:flex xl:flex-col xl:items-center xl:mt-20 xl:mb-9 xl:border-y-2">
            <div className="xl:items-center xl:flex xl:flex-col">
                <div className="xl:flex xl:flex-col xl:items-center">
                    <MyImage image={footerlogo} width={241} height={191}/>
                    <p className="xl:font-medium">Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do</p>
                </div>
                <div className="xl:pt-2 xl:pb-1">
                    <div className="xl:flex xl:pb-2">
                        <MyImage image={calling} width={20} height={20}/>
                        <p className="xl:pl-3 xl:font-medium hover:text-gray-400">+1 558 658 6182</p>
                    </div>
                    <div className="xl:flex">
                        <MyImage image={message} width={20} height={20}/>
                        <p className="xl:pl-3 xl:font-medium hover:text-gray-400">Hi@Popsout.Com</p>
                    </div>
                </div>
                <div className="xl:flex xl:py-2">
                    <div className="xl:pr-[0.85rem]">
                        <Link href='https://instagram.com'>
                            <a target='_blank' rel='noreferrer'>
                            <MyImage image={instagram} width={30} height={30}/>
                            </a>
                        </Link>
                    </div>
                    <div className="xl:pr-[0.85rem]">
                        <Link href='https://linkedin.com'>
                            <a target='_blank' rel='noreferrer'>
                            <MyImage image={linkedin} width={30} height={30}/>
                            </a>
                        </Link>
                    </div>
                    <div>
                        <Link href='https://twitter.com'>
                            <a target='_blank' rel='noreferrer'>
                            <MyImage image={twitter} width={30} height={30}/>
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
            <div>
            <p className="text-gray-500 xl:text-center xl:text-[20px] xl:w-[320px]">© Copyright 2022 Speedystartup LLC</p>
            </div>
        </div>
    )
}

export default Footer;