

const Button = ({ text, type,onClick,className }) => {
    return (
        <div>
            <button
                onClick={onClick}
                type={type ?? "button"}
                className={className??"bg-[#FF800F] px-2 py-1 text-sm font-semibold text-white shadow-sm hover:bg-[#001064] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition transform duration-500"}
            >
                {text}
            </button>
        </div>
    );
}

export default Button;