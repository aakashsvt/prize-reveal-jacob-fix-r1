"use client";
import { useEffect, useState } from "react";
import { Experience } from "@aakashvt/threejs-reveal-v2";

export default function Page() {
    const [container, setContainer] = useState(null);

    return (
        <div
            ref={setContainer}
            style={{
                position: "relative",
                top: 0,
                left: 0,
                width: "100dvw",
                height: "100dvh",
                background: "#000",
            }}
        >
            {container && <Experience eventSource={container} />}
        </div>
    );
}
