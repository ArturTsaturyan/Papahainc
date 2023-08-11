

const BigTitle = ({ text = "We Provide professional Heating & Cooling Services" }) => {
    return (
        <div className='text-center'>
            <h1 className='inline-block text-4xl font-bold text-center max-w-[400px]'>
                {text}
            </h1>
        </div>
    )
}

export default BigTitle