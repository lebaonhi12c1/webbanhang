import React, { memo } from "react";
import { cn } from "../utils/cn";
import {AiOutlineDoubleLeft, AiOutlineDoubleRight, AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'
const Pagination = memo(
    ({
        current = 1,
        total_row = 1,
        per_page = 1,
        handleSetCurrent = () => {},
    }) => {
        const handleNext = () => {
            if( current < Math.ceil(total_row / per_page) ) {
                handleSetCurrent(current + 1);
            }
        }
        const handlePrev = () => {
            if( current > 1 ) {
                handleSetCurrent(current - 1);
            }
        }
        return (
            <div className="flex items-center ">
                <button className="flex items-center justify-center border h-[40px] w-[40px] hover:bg-dark_primary text-dark hover:text-light"
                    onClick={() => handleSetCurrent(1)}
                >
                    <AiOutlineDoubleLeft/>
                </button>
                <button className="flex items-center justify-center border h-[40px] w-[40px] hover:bg-dark_primary text-dark hover:text-light"
                    onClick={handlePrev}
                >
                    <AiOutlineLeft/>
                </button>
                {Array(Math.ceil(total_row / per_page))
                    .fill()
                    .map((item, index) => {
                        return (
                            (current - 2 <= index + 1 && index + 1 <= current + 2) &&
                            <button
                                key={index}
                                className={cn("flex items-center justify-center border h-[40px] w-[40px] hover:bg-dark_primary text-dark hover:text-light", {
                                    "bg-primary text-light": index + 1 === current,
                                })}
                                onClick={() => handleSetCurrent(index + 1)}
                            >
                                {index + 1}
                            </button>
                        );
                    })}
                <button className="flex items-center justify-center border h-[40px] w-[40px] hover:bg-dark_primary text-dark hover:text-light"
                    onClick={handleNext}
                >
                    <AiOutlineRight/>
                </button>
                <button className="flex items-center justify-center border h-[40px] w-[40px] hover:bg-dark_primary text-dark hover:text-light"
                    onClick={() => handleSetCurrent(Math.ceil(total_row / per_page))}
                >
                    <AiOutlineDoubleRight/>
                </button>
            </div>
        );
    }
);

Pagination.displayName = "Pagination";

export default Pagination;
