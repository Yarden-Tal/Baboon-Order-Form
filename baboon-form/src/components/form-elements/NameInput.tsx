import { NameInputProps } from "../../ts/types";

const NameInput = (props: NameInputProps): JSX.Element => {
    return (
        <div className="input-cter input">
            <label className="label" htmlFor="full-name">
                שם<span className="red">*</span>
            </label>
            <input
                value={props.name}
                onChange={props.handleNameChange}
                id="full-name"
                minLength={2}
                maxLength={25}
                autoFocus
                required
                className="input"
                type="text"
                name="full-name"
            ></input>
        </div>
    )
}

export default NameInput