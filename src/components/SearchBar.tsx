'use client';
import { useState } from "react";
import Image from "next/image";
//import { useRouter } from "next/navigation";
import SearchManufacturer from "./SearchManufacturer";
import { ISearchBarProps } from "@types";


const SearchButton = ({otherClasses}:{otherClasses:string}) =>{
    const handleClick = ()=>{};
    return (
        <button type="submit"
         className={`-ml-3 z-10 ${otherClasses}}`}
         onClick={handleClick}>
           <Image src="/magnifying-glass.svg"
                alt="search icon"
                width={40}
                height={40}
                className="object-contain"/>
        </button>
    )
}

const SearchBar = (props:ISearchBarProps) =>{

    const {setManufacturer, setModel} = props;
    //const router = useRouter();
    const [searchManufacturer, setSearchManufacturer] = useState<string>("");
    const [searchModel, setSearchModel] = useState<string>("");
    
    const handleSearch = (e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        if(searchManufacturer === "" || searchModel === "") return alert('Please fill in all fields');
        setModel(searchModel);
        setManufacturer(searchManufacturer);
        //updateSearchParams(searchModel, searchManufacturer);
    };
    // const updateSearchParams = (model:string, manufacturer:string)=>{
    //     const searchParams = new URLSearchParams(window.location.search);
    //     if(model)
    //         searchParams.set('model', model);
    //     else
    //         searchParams.delete('model');
    //     if(manufacturer)
    //         searchParams.set('manufacturer', manufacturer);
    //     else
    //         searchParams.delete('manufacturer');
        
    //     const newPathname = `${window.location.pathname}?${searchParams.toString()}`;
    //     router.push(newPathname);
    // };
    
    // Render
    return (
        <form className="searchbar" onSubmit={handleSearch}>
            <div className="searchbar__item">
                <SearchManufacturer
                    manufacturer={searchManufacturer}
                    setManufacturer={setSearchManufacturer}
                />
            </div>
            <div className="searchbar__item">
                <Image src="/model-icon.png"
                    alt="model icon"
                    width={25}
                    height={25}
                    className="absolute w-[20px] h-[20px] ml-4"/>
                <input type="text"
                    name="model"
                    id="model"
                    placeholder="Model"
                    value={searchModel}
                    onChange={(e)=>setSearchModel(e.target.value)}
                    className="searchbar__input"
                />
                <SearchButton otherClasses="invisible sm:visible"/>
            </div>
            <SearchButton otherClasses="visible sm:invisible"/>
        </form>
    )   
}
export default SearchBar