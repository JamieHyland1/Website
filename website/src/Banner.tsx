import React, { useState, useEffect } from "react";
import './Banner.css';
import { Type } from "typescript"

interface BannerProps  {
    name: string
    titles: Array<string>
    interval: number
    colors: Array<string>
    colors2: Array<string>
}
export const Banner = (props : BannerProps) => {
    const [currentIndex,setIndex] = useState(0)
    useEffect(() => {
        const intervalId = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % props.titles.length);
        }, props.interval);

        return () => {
            clearInterval(intervalId);
        };
    }, [props.interval, props.titles.length]);

    return (
        <div className="Banner" style={{ backgroundColor: props.colors[currentIndex], color: props.colors2[currentIndex]}}>
            <div className="BannerTitle">
                <h1>{props.name}</h1>
                <h2>{props.titles[currentIndex]}</h2>
                <br/>
                <br/>
                <h2>Website coming soon</h2>
                
            </div>
        </div>
    )
}