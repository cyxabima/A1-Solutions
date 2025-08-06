"use client"
import { useState } from "react";
import { Maximize, Minimize } from "lucide-react";

export default function FullscreenButton() {
    const [isFullscreen, setIsFullscreen] = useState(false);

    const toggleFullscreen = () => {
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen();
            setIsFullscreen(true);
        } else {
            document.exitFullscreen();
            setIsFullscreen(false);
        }
    };

    return (
        <button onClick={toggleFullscreen} className="p-2 rounded">
            {isFullscreen ? <Minimize className='text-orange-400' /> : <Maximize className='text-orange-400' />}
        </button>
    );
}
