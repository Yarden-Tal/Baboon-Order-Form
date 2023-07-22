import { SetStateAction, useState } from "react";
import { calcPrice, formatQuantity, formatType } from "../utils/utils";
import NameInput from "./form-elements/NameInput";
import RadioButtons from "./form-elements/RadioButtons";
import QuantityStepper from "./form-elements/QuantityStepper";
import SpicyToggler from "./form-elements/SpicyToggler";

const Form = (): JSX.Element => {

    const price: number = 45;

    // State
    const [name, setName] = useState<string>("");
    const [type, setType] = useState<"בגט" | "קערה">("בגט");
    const [quantity, setQuantity] = useState<number>(1);
    const [isSpicy, setIsSpicy] = useState<boolean>(false);

    // Functions
    const incrementQuantity = (): void => {
        if (quantity < 3) setQuantity(quantity + 0.5);
    }

    const decrementQuantity = (): void => {
        if (quantity > 0.5) setQuantity(quantity - 0.5);
    };

    const handleBaguetteType = (): void => setType("בגט");
    const handleBowlType = (): void => setType("קערה");

    const handleNameChange = (e: { target: { value: SetStateAction<string>; }; }): void => setName(e.target.value);

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault()
        if (name.length < 2) return
        const spicy: string = isSpicy ? "עם חריף" : "ללא חריף";
        const thankYouText: string = `תודה, ${name}.\n\n ההזמנה שלך: ${formatQuantity(quantity)} ${formatType(type, quantity)} ${spicy}. \n המחיר: ${calcPrice(quantity, price)} ש״ח.`;
        if (confirm(thankYouText)) {
            alert(`ההזמנה נשלחה לויקטור.\n\n ** לא לשכוח להעביר לו ${calcPrice(quantity, price)} ש״ח!`)
            const emailMessage: string = `היי, ויקטור.\n ${name} רוצה ${formatQuantity(quantity)} ${formatType(type, quantity)} ${spicy}. צריך להחזיר לך: ${calcPrice(quantity, price)} ש״ח.`
            console.log(emailMessage);
            location.reload();
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="form">
                <NameInput {...{ name, handleNameChange }} />
                <RadioButtons {...{ type, handleBaguetteType, handleBowlType }} />
                <QuantityStepper {...{ quantity, decrementQuantity, incrementQuantity }} />
                <SpicyToggler {...{ isSpicy, setIsSpicy }} />
            </div>
            <button className="submit-btn">אישור</button>
        </form>
    );
};

export default Form;
