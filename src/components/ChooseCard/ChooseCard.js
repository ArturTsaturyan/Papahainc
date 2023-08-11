export default function ChooseCard({icon,title,text}) {
    return (
        <div className=''>
            <div className="flex px-12 gap-4">
                <div className='bg-[orange] w-16 h-16 flex items-center justify-center rounded-full'>
                    <img src={icon} className='w-10 h-10' />
                </div>
                <div className='bg-[#F6F7F8] px-2 py-2 w-full'>
                    <h4 className='text-xl text-[#010A35]'>{title}</h4>
                    <p className='text-sm text-[#010A35]'>{text}</p>
                </div>
            </div>
          
        </div>
    )
}