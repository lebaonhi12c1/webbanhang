import { twMerge } from "tw-merge";
import clsx from "clsx";

export const cn = (...agrs) => {
    return twMerge(clsx(agrs))
}
