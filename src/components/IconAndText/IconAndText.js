const IconAndText = ({img,text}) => {
    return(
        <div className='flex gap-4 items-center'>
        <div>
            <img src={img} alt='master' />
        </div>
        <p className='text-xl font-bold'>{text}</p>
    </div>
    )
}

export default IconAndText