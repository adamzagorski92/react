import './Step.css';

const Step = (props) => {


    return (
    <div className="step-container">
    <p>You will walk {props.step} steps</p>
    <input className="step-bar" type="range" min={1} max={5} value={props.step} onChange={(e) => props.setStep(Number(e.target.value))} />
    </div>

)
}

export default Step;