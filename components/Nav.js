import MyImage from './MyImage';
import logo from '../public/logopopsout.png';
import Link from "next/link";
import carrito from '../public/carrito.png';
import arrowdown from '../public/arrowdown.png';

const Nav = () => {

    return(
        <div className='xl:pt-3 bg-navbg'>
            <nav className='border-y-2 border-white xl:flex xl:h-[81px] xl:pl-20'>
                <div className='xl:flex xl:pr-24'>
                    <MyImage image={logo} width={90} height={80}/>
                </div>
                <div className='xl:items-center xl:flex'>
                    <ul className="xl:flex xl:mr-28">
                        <div className='xl:mr-10'>
                            <Link href='#'>
                                <a>
                                    <div className='xl:flex'>
                                    <li className='text-white xl:font-semibold xl:mr-4'>OUR SERVICES</li>
                                    <MyImage image={arrowdown} width={10} height={9}/>
                                    </div>
                                </a>
                            </Link>
                        </div>
                        <div className='xl:mr-10'>
                            <Link href='#'>
                                <a>
                                    <div className='xl:flex'>
                                    <li className='text-white xl:font-semibold xl:mr-4'>SHOP</li>
                                    <MyImage image={arrowdown} width={10} height={9}/>
                                    </div>
                                </a>
                            </Link>
                        </div>
                        <div className='xl:mr-9'>
                            <Link href='#'>
                                <a>
                                <li className='text-white xl:font-semibold xl:hover:underline'>BLOG</li>
                                </a>
                            </Link>
                        </div>
                        <div>
                            <Link href='#'>
                                <a>
                                <li className="text-white xl:font-semibold xl:hover:underline">PROFILE</li>
                                </a>
                            </Link>
                        </div>
                    </ul>
                    <div className="xl:flex">
                        <div className='xl:mr-5'>
                            <Link href='#'>
                                <a>
                                <div className='items-center justify-center flex text-black border border-white xl:w-[190px] xl:bg-yellow-400 xl:font-bold xl:h-[48px] xl:text-lg xl:hover:bg-black xl:active:border-orange-400 xl:hover:text-yellow-400 xl:duration-500 ease-in-out'>GET STARTED</div>
                                </a>
                            </Link>
                        </div>
                        <div className='xl:flex xl:items-center xl:mr-1'>
                            <Link href='#'>
                                <a>
                                <div className="items-center justify-center flex text-white border border-white xl:w-[190px] xl:duration-500 xl:active:border-black xl:hover:bg-gray-300 xl:hover:text-black xl:font-semibold xl:h-[48px] xl:text-lg ease-in-out">GET IN TOUCH</div>
                                </a>
                            </Link>
                        </div>
                        <div>
                            <button className='text-white xl:ml-4 xl:pt-1 xl:pr-1 xl:w-[50px] xl:border flex items-center justify-center xl:hover:border-yellow-300 xl:duration-300 xl:border-white xl:h-[48px] ease-in-out'>
                            <MyImage image={carrito} width={17} height={17}/>
                            </button>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Nav;