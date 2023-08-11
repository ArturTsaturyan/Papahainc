import { BiSolidPhone } from 'react-icons/bi';
import { IoMdMailOpen } from 'react-icons/io';
import { BiLogoFacebook } from 'react-icons/bi';
import { AiOutlineTwitter } from 'react-icons/ai';
import { PiInstagramLogoBold } from 'react-icons/pi';
import { BiLogoLinkedin } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import Button from '../../components/Button/Button';
import BigTitle from '../../components/BigTitle/BigTitle';
import ServiceCard from '../../components/ServiceCard/ServiceCard';
import ChooseCard from '../../components/ChooseCard/ChooseCard';
import { ChooseCards, ServiceCards, dataMenu } from '../../LocalStore/LocalStore';
import BurgerMenu from '../../components/BurgerMenu/BurgerMenu';
import Form from '../../components/Form/Form';
import IconAndText from '../../components/IconAndText/IconAndText';
import 'animate.css';


const Home = () => {

    return (
        <div>
            <div className="bg-[#010A35] px-6 py-2 w-full fixed top-0 z-10">
                <div className='flex justify-between'>
                    <div className='flex gap-6 '>
                        <div className='flex gap-2 items-center cursor-pointer'>
                            <BiSolidPhone className='text-[#5C7093] text-lg' />
                            <a href="tel:+374999999999" className='text-[#5C7093] text-sm'>+374999999999</a>
                        </div>
                        <div className='flex gap-2 items-center cursor-pointer hover:text-[red]'>
                            <IoMdMailOpen className='text-[#5C7093] text-lg' />

                            <a href={`mailto:papahainc@gmail.com`} className='text-[#5C7093] text-sm'>papahainc@gmail.com</a>
                        </div>

                    </div>
                    <nav className='lg:flex hidden '>
                        {
                            dataMenu?.map(({ id, name, href }, index, arr) => (
                                <a key={id} href={href} className='text-[#5C7093]'> {name} {index !== arr?.length - 1 && "/"}</a>
                            ))
                        }
                    </nav>
                    <div id='mobileMenu' className=' lg:hidden flex flex-col' >
                        <BurgerMenu data={dataMenu} />
                    </div>
                </div>
            </div>
            <div className='px-6 py-4 flex justify-between mt-10'>
                <div>
                    <img src='/logo192.png' alt='svg' className='w-20 h-10' />
                </div>
                <div className='flex items-center'>
                    <div className='flex gap-4'>
                        <div className='text-[#5C7093] text-base font-medium'>Home</div>
                        <div className='text-[#5C7093] text-base font-medium'>Home</div>
                        <div className='text-[#5C7093] text-base font-medium'>Home</div>
                        <div className='text-[#5C7093] text-base font-medium'>Home</div>
                    </div>
                </div>
                <div className='flex gap-4'>
                    <div className='w-10 h-10 bg-[#F6F7F8] rounded-full flex items-center justify-center'>
                        <BiLogoFacebook className='w-8 h-8 text-[#FF800F]' />
                    </div>
                    <div className='w-10 h-10 bg-[#F6F7F8] rounded-full flex items-center justify-center'>
                        <AiOutlineTwitter className='w-8 h-8 text-[#FF800F]' />
                    </div>
                    <div className='w-10 h-10 bg-[#F6F7F8] rounded-full flex items-center justify-center'>
                        <BiLogoLinkedin className='w-8 h-8 text-[#FF800F]' />
                    </div>
                    <div className='w-10 h-10 bg-[#F6F7F8] rounded-full flex items-center justify-center'>
                        <PiInstagramLogoBold className='w-8 h-8 text-[#FF800F]' />
                    </div>
                </div>
            </div>
            <div>
                <img src='/service-1.jpg' alt='jpg' className='w-full h-[500px]' />
            </div>
            <div id='About_Us' className='max-w-[1920px] m-auto py-5 mt-7 px-28 animate__animated animate__backInUp animate__slow'>
                <div className='mt-12'>
                    <BigTitle text={"About Us"} />
                </div>
                <div className='grid lg:grid-cols-2 grid-cols-1 gap-28 mt-10'>

                    <div className='flex flex-col'>
                        <div className='flex justify-center'>
                            <h1 className='font-bold text-2xl'>Welcome To Best Cooling & Heating Service Center</h1>
                        </div>
                        <div className='py-10 border-b-2 '>
                            <div className='flex justify-between md:flex-row flex-col gap-4'>
                                <IconAndText img={'/master.png'} text={"Expert Technician"} />
                                <IconAndText img={'/master-2.png'} text={"Best Quality Services"} />
                            </div>
                            <p className='text-[#7F8499] text-lg mt-6'>At Papaha inc., we take pride in being Dallas's go-to appliance repair service. With 7 years of experience and a commitment to excellence, we have built a reputation for providing top-notch repair solutions for a wide range of appliances. Our team of skilled technicians is dedicated to ensuring your appliances are back in top shape, allowing you to continue your daily routines without disruption.</p>
                        </div>



                        <div className='flex justify-between md:flex-row flex-col gap-4 mt-10 px-6'>
                            <div className='flex gap-4 items-center'>
                                <div className='rounded-full bg-[#FF800F] p-3 '>
                                    <BiSolidPhone className='text-[white] text-2xl' />
                                </div>
                                <a href="tel:+374999999999" className='text-lg font-bold'>+374999999999</a>
                            </div>
                            <div className='flex gap-4 items-center'>
                                <div className='rounded-full bg-[#FF800F] p-3 '>
                                    <IoMdMailOpen className='text-[white] text-2xl' />
                                </div>
                                <a href={`mailto:papahainc@gmail.com`} className=' text-lg font-bold'>papahainc@gmail.com</a>
                            </div>
                        </div>

                    </div>
                    <div>
                        <img src='/master-3.jpg' alt='master-3' className='w-full h-[400px] rounded' />
                    </div>

                </div>
            </div>
            <div id='Why_Choose_Us' className='max-w-[1920px] mt-12 m-auto pb-5'>
                <BigTitle text={"Why Choose Us?"} />
                <div className='grid lg:grid-cols-2 grid-cols-1 gap-10 mt-10 px-14'>
                    {ChooseCards?.map((e) => (
                        <ChooseCard icon={e?.icon} title={e?.title} text={e?.text} key={e?.id} />
                    ))}
                </div>
            </div>
            <div id="Our_Service" className='m-auto max-w-[1920px] mt-12'>
                <BigTitle />
                <div className='flex gap-10 flex-wrap justify-around max-w-[1920px] m-10'>
                    {ServiceCards?.map(({ bigImg, litleImg, title, text }, index) =>
                        <ServiceCard key={index} bigImg={bigImg} litleImg={litleImg} title={title} text={text} />
                    )}
                </div>
            </div>
            <div id="Contact_Us">
                <BigTitle text={"Contact Us"} />
                <div className='p-10 bg-[#0B2453] mt-10'>
                    <Form />
                </div>
            </div>
            <footer
                className="bg-[#F0F3F4] hidden md:block"
                aria-labelledby="footer-heading"
            >
                <h2 id="footer-heading" className="sr-only">
                    Footer
                </h2>
                <div
                    className="flex mx-auto  py-8 flex-wrap px-4 sm:px-6 lg:py-8 lg:px-8 
       flex-col md:flex-row"
                >
                    <div className="flex-2">
                        <Link href="/">
                            <img
                                src="/logo192.png"
                                alt="..."
                                className="xl:w-28 lg:w-20"
                            />
                        </Link>

                        <p className="text-xs text-[#000000] font-normal mt-12">
                            © Copyright Falcon
                        </p>
                        <p className="text-xs text-[#000000] font-normal mt-4">
                            Armenia, Yerevan, Gevorg Vardanyan 1a

                        </p>

                        <div className="flex mt-3">
                            <h1 className="text-xs font-normal">Developed By</h1>
                            <img src="/Serious.svg" alt="Serious" className="ml-2" />
                        </div>
                    </div>


                    <div className="flex-1 md:ml-0">
                        <div className="text-right">
                            <button>Clock</button>
                        </div>

                        <p className="mt-7 text-right"></p>
                        <div className="flex space-x-4 float-right items-center">
                            <Link href={'#'}><img src="/Telegram.svg" alt="" /></Link>
                            <Link href={'#'}><img src="/Whatsapp.png" className="w-9 h-9" alt="" /></Link>
                            <Link href={'#'}><img src="/Fac.svg" alt="" /></Link>
                            <Link href={'#'}><img src="/Instagram.svg" alt="" /></Link>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Home;