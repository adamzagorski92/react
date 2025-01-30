import { useEffect, useState } from 'react';
import Clock from './components/Clock';
import ButtonsPanel from './components/ButtonsPanel';
import Display from './components/Display';
import Step from './components/Step';
import './Counter.css';

const Counter = (props) => {

    const [counter, setCounter] = useState(props.counterInitValue);
    const [showClock, setShowClock] = useState(false);
    const [step, setStep] = useState(3);


    const updateCounter = (action) => {

        if (action === "add") {
            setCounter(counter + step);
        } else if (action === "reset") {
            setCounter(props.counterInitValue);
        } else {
            setCounter(0);
        };

        /* To jest sposób, aby aktualizacja stanu zachodziła po wywołaniu wszystkich stackowaych funkcji */
        /* setCounter((prevCounter) => {
            return prevCounter + 1;
        });
        setCounter((prevCounter) => {
            return prevCounter + 1;
        });
        setCounter((prevCounter) => {
            return prevCounter + 1;
        }); */
    };

    useEffect(() => {
        console.log("Druga aktualizacja");
    }, [counter]
    );


    return (
        <div className="counter">
            <Display counter={counter} />
            <Step step={step} setStep={setStep} />
            <ButtonsPanel updateCounter={updateCounter} step={step} />
            {showClock ? <Clock setShowClock={setShowClock} /> : <p className="clockControl" onClick={() => setShowClock(true)}>pokaż zegar</p>}

        </div>
    );
}

export default Counter;