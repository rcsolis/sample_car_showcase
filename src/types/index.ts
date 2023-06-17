import { MouseEventHandler } from "react";

export interface ICustomButtonProps {
    title: string;
    type?: "button" | "submit" | "reset";
    containerStyles?: string;
    handleClick?: MouseEventHandler<HTMLButtonElement>;
}