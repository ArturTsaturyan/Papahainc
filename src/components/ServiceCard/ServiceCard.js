const ServiceCard = ({bigImg,litleImg,title,text}) => {
    return (
        <div className='sm:w-[450px]'>
            <div>
                <img src={bigImg} alt='svg' className='w-full h-80' />
            </div>
            <div className='flex'>
                <div className='px-6 py-4 bg-[#FF800F] flex items-center justify-center'>
                    <img src={litleImg} alt='svg' className='w-[52px] h-12' />
                </div>
                <div className='bg-[#F6F7F8] px-2 py-2 w-full'>
                    <h4 className='text-xl text-[#010A35]'>{title}</h4>
                    <p className='text-sm text-[#010A35]'>{text}</p>
                </div>
            </div>
        </div>
    )
}

export default ServiceCard