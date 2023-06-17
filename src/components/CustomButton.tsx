'use client';
import { ICustomButtonProps } from "@types";

const CustomButton= (props: ICustomButtonProps) =>{
    const { title, containerStyles, type, handleClick } = props;
    // Render
    return (
        <button
            disabled={false}
            type={type || "button"}
            className={`custom-btn ${containerStyles}`}
            onClick={handleClick}
        >
            <span className={`flex-1`}>
                {title}
            </span>
        </button>
    )
}
export default CustomButton