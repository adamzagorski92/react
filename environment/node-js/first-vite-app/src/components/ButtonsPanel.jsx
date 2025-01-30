import './ButtonsPanel.css';

const ButtonsPanel = (props) => {
    const step = props.step;
    return (
        <div className="buttonsPanel">
            <button onClick={()=>props.updateCounter("add")}>Add {step} steps</button>
            <button onClick={()=>props.updateCounter("reset")}>Reset</button>
            <button onClick={()=>props.updateCounter("zero")}>Set 0</button>
        </div>
    );
};

export default ButtonsPanel;    