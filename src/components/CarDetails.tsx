'use client';
import Image from "next/image";
import { Fragment } from "react";
import { Transition, Dialog } from "@headlessui/react";
import { ICarDetailsProps } from "@types";
import { generateCarImageUrl } from "@utils";

const CardDetails = (props: ICarDetailsProps) =>{
    const { isOpen, handleClose, car } = props;
    
    // Render
    return (
        <Transition appear show={isOpen} as={Fragment}>
            <Dialog as="div" className={"relative z-10"} onClose={handleClose}>
                <Transition.Child as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0">
                    <div className="fixed inset-0 bg-gray-500 bg-opacity-75"/>
                </Transition.Child>
                <div className="fixed inset-0 overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-4 text-center">
                        <Transition.Child as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0 sclae-95"
                        enterTo="opacity-100 scale-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100 scale-100"
                        leaveTo="opacity-0 scale-95">
                            <Dialog.Panel className="relative w-full max-w-lg max-h-[90vh] 
                            overflow-y-auto transform rounder-2xl bg-white p-6 text-left 
                            shadow-xl transition-all flex flex-col gap-5 rounded-lg">
                                <button type="button" onClick={handleClose}
                                className="absolute top-2 right-2 z-10 w-fit p-2 bg-primary-blue-100
                                rounded-full">
                                    <Image src="/close.svg"
                                        alt="close icon"
                                        width={20}
                                        height={20}
                                        className="object-contain"/>
                                </button>
                                <div className="flex-1 flex flex-col gap-3">
                                    <div className="relative w-full h-40 
                                        bg-pattern bg-cover bg-center rounded-lg">
                                            <Image src={generateCarImageUrl(car)}
                                                alt="car image"
                                                fill
                                                priority
                                                className="object-contain"
                                            />
                                    </div>
                                    <div className="flex gap-3">
                                        <div className="flex-1 relative w-full h-24 bg-primary-blue-100 rounded-lg">
                                            <Image src={generateCarImageUrl(car,'29')}
                                                alt="car image"
                                                fill
                                                priority
                                                className="object-contain"
                                            />
                                        </div>
                                        <div className="flex-1 relative w-full h-24 bg-primary-blue-100 rounded-lg">
                                            <Image src={generateCarImageUrl(car,'33')}
                                                alt="car image"
                                                fill
                                                priority
                                                className="object-contain"
                                            />
                                        </div>
                                        <div className="flex-1 relative w-full h-24 bg-primary-blue-100 rounded-lg">
                                            <Image src={generateCarImageUrl(car,'13')}
                                                alt="car image"
                                                fill
                                                priority
                                                className="object-contain"
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="flex-1 flex flex-col gap-2">
                                    <h2 className="text-xl font-extrabold capitalize">
                                        {car.make} {car.model}
                                    </h2>
                                    <div className="mt-3 flex flex-wrap gap-4">
                                        {
                                            Object.entries(car).map(([key,value], i) => (
                                                <div key={`${i}-car-details`} className="flex justify-between
                                                gap-5 w-full text-right">
                                                    <h4 className="text-sm font-medium text-gray-700 capitalize">
                                                        {key.split('_').join(' ')}
                                                    </h4>
                                                    <p className="text-sm font-semibold text-gray-900">
                                                        {value}
                                                    </p>
                                                </div>
                                            ))
                                        }
                                    </div>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>
    )
}
export default CardDetails