import { getSelectedRadioStyle, getradioOpacity } from "../../utils/utils";
import { RadioButtonProps } from "../../ts/types";

const RadioButtons = (props: RadioButtonProps) => {
    const calcBaguetteOpacity = () => props.type === "קערה" ? getradioOpacity() : {};
    const calcBowlOpacity = () => props.type === "בגט" ? getradioOpacity() : {};
    return (
        <div className="radios input">
            <div onClick={props.handleBaguetteType} style={calcBaguetteOpacity()} id="baguette" className="input-cter radio">
                <div className="label">בגט</div>
                <div className="svg-wrapper" style={props.type === "בגט" ? getSelectedRadioStyle() : {}}>
                    <img src="/svg/baguette.svg" alt="בגט"></img>
                </div>
            </div>
            <div onClick={props.handleBowlType} style={calcBowlOpacity()} id="bowl" className="input-cter radio">
                <div className="label">קערה</div>
                <div className="svg-wrapper" style={props.type === "קערה" ? getSelectedRadioStyle() : {}}>
                    <img src="/svg/bowl.svg" alt="קערה"></img>
                </div>
            </div>
        </div>
    )
}

export default RadioButtons