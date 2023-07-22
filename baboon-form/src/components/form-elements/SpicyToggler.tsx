const SpicyToggler = (props: { isSpicy: boolean, setIsSpicy: (arg0: boolean) => void }) => {
    const toggleIsSpicy = () => () => props.setIsSpicy(!props.isSpicy);
    return (
        <div onClick={toggleIsSpicy()} className="point input-cter input">
            <div className="spicy">
                <label className="red" htmlFor="isSpicy">
                    <b>חריף</b>
                </label>
                <span className="chili-svg">
                    <img src="/svg/chili.svg" alt="צ׳ילי"></img>
                </span>
                <span className="chili-svg2">
                    <img src="/svg/chili.svg" alt="צ׳ילי"></img>
                </span>
            </div>
            <input
                id="isSpicy"
                type="checkbox"
                role="switch"
                name="isSpicy"
                checked={props.isSpicy}
            ></input>
        </div>
    )
}

export default SpicyToggler