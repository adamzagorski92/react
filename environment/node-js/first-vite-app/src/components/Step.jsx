const Step = (props) => {


    return (
    <div>
    <p>You will walk {props.step} steps</p>
    <input type="range" min={1} max={5} value={props.step} onChange={(e) => props.setStep(Number(e.target.value))} />
    </div>

)
}

export default Step;