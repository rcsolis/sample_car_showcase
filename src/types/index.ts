import { MouseEventHandler } from "react";

export interface ICustomButtonProps {
    title: string;
    type?: "button" | "submit" | "reset";
    containerStyles?: string;
    textStyles?: string;
    rightIcon?: string;
    isDisabled?: boolean;
    handleClick?: MouseEventHandler<HTMLButtonElement>;
}

export interface ISearchManufacturerProps {
    manufacturer: string;
    setManufacturer: (manufacturer: string) => void;
}
export interface ICustomFilterOptionsProps{
    title: string;
    value: string;
}
export interface ICustomFilterProps {
    title: string;
    options: ICustomFilterOptionsProps[];
    setFilter: React.Dispatch<React.SetStateAction<number>> | React.Dispatch<React.SetStateAction<string>>;
}

export interface ICar {
    city_mpg:number;
    class:string;
    combination_mpg:number;
    cylinders:number;
    displacement:number;
    drive:string;
    fuel_type:string;
    highway_mpg:number;
    make:string;
    model:string;
    transmission:string;
    year:number;
}
export interface ICardCardProps {
    car: ICar;
}

export interface ISearchBarProps{
    setManufacturer: React.Dispatch<React.SetStateAction<string>>;
    setModel: React.Dispatch<React.SetStateAction<string>>;
}

export interface ICarDetailsProps {
    car: ICar;
    isOpen: boolean;
    handleClose: () => void;
}

export interface IFilterProps{
    manufacturer: string;
    model: string;
    fuel: string;
    year: number;
    limit: number;
}


export interface ISearchMoreBtnProps {
    pageNumber:number;
    isNext:boolean;
    setLimit: React.Dispatch<React.SetStateAction<number>>;
}