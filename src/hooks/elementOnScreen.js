import { useRef, useState, useEffect } from "react";

export const useElementOnSreen = () => {
    const containerRef = useRef(null);
    const [visible, setVisible] = useState(false);

    const visCallback = (entries) => {
        const [entry] = entries;
        setVisible(entry.isIntersecting);
    }

    useEffect(
        () => {
            const options = {
                root : null,
                rootMargin : "0px",
                threshold : 0.3
            }
            const observer = new IntersectionObserver(visCallback, options);
            if (containerRef.current) observer.observe(containerRef.current);

            return () => {
                if (containerRef.current) observer.unobserve(containerRef.current);
            }
        }
    , [containerRef])

    return [containerRef, visible];
}