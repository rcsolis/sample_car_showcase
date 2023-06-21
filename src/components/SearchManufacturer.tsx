'use client';
import Image from "next/image";
import { useState, Fragment} from "react";
import { ISearchManufacturerProps } from "@types";
import { Combobox, Transition } from '@headlessui/react';
import { manufacturers } from "@constants";

const SearchManufacturer = (props:ISearchManufacturerProps) =>{
    const { manufacturer, setManufacturer } = props;
    const [query, setQuery] = useState<string>("");

    const filterManufacturers = query === ''
        ? manufacturers
        : manufacturers.filter((m) => {
            return m.toLowerCase()
                .replace(/\s+/g,'')
                .includes(query.toLowerCase().replace(/\s+/g,''));
        });
    // Render
    return (
        <div className="search-manufacturer">
            <Combobox value={manufacturer} onChange={setManufacturer}>
                <div className="relative w-full">
                    <Combobox.Button className="absolute top-[14px]">
                        <Image src="/car-logo.svg"
                            alt="car-logo"
                            width={20}
                            height={20}
                            className="ml-4"/>
                    </Combobox.Button>
                    <Combobox.Input className="search-manufacturer__input"
                        onChange={(e)=>setQuery(e.target.value)}
                        displayValue={(m:string)=>m} />
                    <Transition
                        as={Fragment}
                        leave="transition ease-in duration-100"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                        afterLeave={()=>setQuery('')}>
                            <Combobox.Options>
                                { filterManufacturers.length === 0 &&
                                query !== '' ? (
                                    <Combobox.Option
                                        value={query}
                                        className="search-manufacturer__option">
                                            <strong>&quot;{query}&quot;</strong> manufacturer not found.
                                        </Combobox.Option>
                                ) : (
                                    filterManufacturers.map((m,i) => (
                                        <Combobox.Option key={`${i}-${m}`}
                                            className={({active})=>`relative search-manufacturer__option ${active ? 'bg-primary-blue text-white' : 'text-gray-900'}`}
                                            value={m}>
                                            {({selected,active})=>(
                                                <>
                                                    <span className={`block truncate ${selected?'font-semibold':'font-normal'}`}>
                                                        {m}
                                                    </span>
                                                </>
                                            )}
                                        </Combobox.Option>
                                    ))
                                )}
                            </Combobox.Options>
                    </Transition>
                </div>
            </Combobox>
        </div>
    )
}
export default SearchManufacturer