'use client';
import { ICustomFilterProps } from "@types";
import {useState, Fragment} from "react";
import Image from "next/image";
import {useRouter} from "next/navigation";
import { Listbox, Transition } from "@headlessui/react";

const CustomFilter = (props:ICustomFilterProps) =>{
    const {title, options} = props;
    const [selected, setSelected] = useState(options[0]);
    const router = useRouter();

    const handleUpdateParams = (e:{title:string, value:string})=>{
        const searchParams = new URLSearchParams(window.location.search);
        searchParams.set(e.title, e.value.toLowerCase());
        const newPathName = `${window.location.pathname}?${searchParams.toString()}`;
        router.push(newPathName);
    }
    //Render
    return (
        <div className="w-fit">
            <Listbox value={selected} onChange={(e)=>{
                setSelected(e);
                handleUpdateParams(e);
            }}>
                <div className="relative z-10 w-fit">
                    <Listbox.Button className="custom-filter__btn">
                        <span className="block truncate">
                            {selected.title}
                        </span>
                        <Image src="/chevron-up-dark.svg"
                        alt="chevron-up" 
                        width={16} 
                        height={16}
                        className="ml-4 object-contain"/>
                    </Listbox.Button>
                    <Transition as={Fragment}
                        leave="transition ease-in duration-100"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0">
                        <Listbox.Options className="custom-filter__options">
                            {options.map((option, i)=>(
                                <Listbox.Option key={`${title}-opt-${i}`}
                                    value={option}
                                    className={({active})=>
                                        `relative cursor-default select-none py-2 px-4 ${active
                                            ? 'bg-primary-blue text-white'
                                            : 'text-gray-900'}`}>
                                    {({selected})=>(
                                        <span className={`block truncate ${selected
                                            ? 'font-medium'
                                            :  'font-normal'}`}>
                                            {option.title}
                                        </span>
                                    )}
                                </Listbox.Option>
                            ))}
                        </Listbox.Options>
                    </Transition>
                </div>
            </Listbox>
        </div>
    )
}
export default CustomFilter