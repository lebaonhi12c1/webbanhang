import { useEffect, useState } from "react";
import slugify from "slugify";
export const formatNumber = (number) => {
    return Number(number).toLocaleString("en-US");
};

export const getScreenSize = () => {
    const [reponsive, setReponsive] = useState("");

    useEffect(() => {
        setReponsive("pc");
        const handleResize = () => {
            if (window.innerWidth < 1024) {
                setReponsive("tablet");
            }
            if (window.innerWidth < 768) {
                setReponsive("mobile");
            }
        };

        handleResize();
        document.addEventListener("resize", handleResize);

        return () => document.removeEventListener("resize", handleResize);
    }, []);

    return reponsive;
};

export const convertSlug = (string) => {
    return slugify(string, {
        replacement: "-", // replace spaces with replacement character, defaults to `-`
        remove: undefined, // remove characters that match regex, defaults to `undefined`
        lower: true, // convert to lower case, defaults to `false`
        strict: false, // strip special characters except replacement, defaults to `false`
        locale: "vi", // language code of the locale to use
        trim: true,
    });
};
