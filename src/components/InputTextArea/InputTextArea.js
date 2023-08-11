const InputTextArea = ({ placeholder, register, name, onkeypress }) => {
    return (
        <>
            <textarea 
            className="border rounded p-3 w-full block h-32"
            placeholder={placeholder} 
            {...register(name)} 
            onKeyPress={onkeypress} />
        </>
    )
}

export default InputTextArea