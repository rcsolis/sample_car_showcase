'use client';
import { ISearchMoreBtnProps } from "@types";
import {useRouter} from "next/navigation";
import CustomButton from "./CustomButton";

const ShowMoreBtn = (props:ISearchMoreBtnProps) =>{
    const {pageNumber, isNext} = props;
    const router = useRouter();

    const handleUpdateParams = ()=>{
        const searchParams = new URLSearchParams(window.location.search);
        const newLimit = (pageNumber + 1) * 10;
        searchParams.set('limit', `${newLimit}`);
        const newPathName = `${window.location.pathname}?${searchParams.toString()}`;
        router.push(newPathName);
    }
    // Render
    return (
        <div className="w-full flex-center gap-5 mt-10">
            {!isNext && (
            <CustomButton
                title="Show more"
                type="button"
                containerStyles="bt-primary-blue rounded-full text-white"
                handleClick={handleUpdateParams}
            />
            )}
        </div>
    )   
}
export default ShowMoreBtn