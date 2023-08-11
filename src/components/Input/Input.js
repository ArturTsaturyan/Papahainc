const Input = ({ placeholder, register, name, onkeypress }) => {
    return (
        <>
            <input 
            className="border rounded h-[50px] pl-3 w-full block" 
            placeholder={placeholder} 
            {...register(name)} 
            onKeyPress={onkeypress} />
        </>
    )
}

export default Input