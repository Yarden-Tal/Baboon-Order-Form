import { StepperProps } from "../../ts/types"
import { calcBtnOpacity } from "../../utils/utils"

const QuantityStepper = (props: StepperProps) => {
    const isTrio: boolean = (props.quantity === 3);

    const getColorByQuantity = (): string => {
        let color: string;
        if (props.quantity === 0.5) color = "chartreuse";
        else if (props.quantity === 1) color = "green";
        else if (props.quantity === 1.5) color = "orange";
        else if (props.quantity === 2) color = "orangered";
        else if (props.quantity === 2.5) color = "red";
        else color = "goldenrod";
        return color;
    };
    const handleTrophyDisplay = (): string => props.quantity < 3 ? "none" : "inline";
    return (
        <div className="input-cter input">
            <div className="trophy-cter"><span className="trophy" style={{ display: handleTrophyDisplay() }}>🏆</span></div>
            <div className="trophy-cter"><span className="trophy tr2" style={{ display: handleTrophyDisplay() }}>🏆</span></div>
            <label htmlFor="counter"><b>כמות</b></label>
            <div className="stepper">
                <div className="step-btn plus">
                    <button style={calcBtnOpacity(3, props.quantity)} type="button" onClick={props.incrementQuantity}>
                        +
                    </button>
                </div>
                <input
                    style={{ color: getColorByQuantity(), outline: isTrio ? "1px ridge gold" : "1rem", fontSize: isTrio ? "1.25rem" : "1rem" }}
                    value={props.quantity}
                    readOnly
                    id="counter"
                    onPaste={() => false}
                    onDrop={() => false}
                    type="number"
                    step="0.5"
                    min="0.5"
                    max="3"
                    required
                    name="counter"
                ></input>
                <div className="step-btn">
                    <button style={calcBtnOpacity(0.5, props.quantity)} type="button" onClick={props.decrementQuantity}>
                        -
                    </button>
                </div>
            </div>
        </div>
    )
}

export default QuantityStepper