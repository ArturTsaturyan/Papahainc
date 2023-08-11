import { useForm } from "react-hook-form";
import Input from "../Input/Input"
import InputTextArea from "../InputTextArea/InputTextArea";
import Button from "../Button/Button";

export default function Form() {
    const inputList = [
        {
            id: "1",
            name: "name",
            placeholder: "Name"
        },
        {
            id: "2",
            name: "email",
            placeholder: "Email"
        },
        {
            id: "3",
            name: "phone",
            placeholder: "Phone Number",
            onkeypress: (event) => {
                if (!/^[0-9]+$/.test(event.key)) {
                    event.preventDefault();
                }
            }
        },
        {
            id: "4",
            name: "service_type",
            placeholder: "Service Type"
        },

    ]

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
        control,
        setValue,
    } = useForm(
            // {
            // defaultValues: useMemo(() => EditParentCompanyDefalutValue(parentCompanyData), [parentCompanyData]),
            // resolver: yupResolver(RequestErrorEditParentCompany())
            // }
        );

    return (
        <form className="flex flex-col gap-4 max-w-[700px] m-auto  py-5 ">
            <div className="w-full grid lg:grid-cols-2 grid-cols-1 gap-4">
                {inputList?.map(({ name, id, placeholder, onkeypress }) => (<Input key={id} name={name} placeholder={placeholder} register={register} onkeypress={onkeypress} />))}

            </div>
            <div className="w-full">
                <InputTextArea name={"message"} placeholder={"Message"} register={register} onkeypress={onkeypress} />
            </div>
            <div className="m-auto">
                 <Button text={"Send"} type="submit" onClick={()=>console.log("aaaa")} className="bg-[#FF800F] min-w-[100px] rounded px-4 py-2 text-md font-semibold text-white shadow-sm hover:bg-[#001064] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition transform duration-500"/>
            </div>
        </form>
    )
}