import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import TopBarProgress from "react-topbar-progress-indicator";

const FancyRoute = ({ children }) => {
    const [progress, setProgress] = useState(false);
    const [prevLoc, setPrevLoc] = useState("");
    const location = useLocation();
    useEffect(() => {
        setPrevLoc(location.pathname);
        setProgress(true);
        if (location.pathname === prevLoc) {
            setPrevLoc("");
            //thanks to ankit sahu
        }
    }, [location]);

    useEffect(() => {
        setProgress(false);
    }, [prevLoc]);

    TopBarProgress.config({
        barColors: {
            "0": "#E53A40",
            "1.0": "#000"
        }
    });

    return (
        <>
            {progress && <TopBarProgress/>}
            {children}
        </>
    );
};
export default FancyRoute;
