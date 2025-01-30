import { useEffect, useState } from "react";

const Clock = (props) => {

    const [time, setTime] = useState(new Date().toLocaleTimeString());

    useEffect(() => {
        console.log("wykonujue interwał");
        const intervalId = setInterval(() => {
            setTime(new Date().toLocaleTimeString());
        }, 1000);
        return () => {
            console.log("Odmontowuję i czyszczę");
            clearInterval(intervalId);
        };
    }, []);

    useEffect(() => {
        console.log("komponenet się aktualizuje");
    });



    return (
        <p>
            {time}{" "}
            <span className="clockControl" onClick={() => props.setShowClock(false)}>x
            </span>
        </p>
    );
};

export default Clock;