import { SetStateAction, useState } from "react";
import emailjs from '@emailjs/browser';
import { calcPrice, formatQuantity, formatType } from "../utils/utils";
import NameInput from "./form-elements/NameInput";
import RadioButtons from "./form-elements/RadioButtons";
import QuantityStepper from "./form-elements/QuantityStepper";
import SpicyToggler from "./form-elements/SpicyToggler";
import { Messages, TemplateParams } from "../ts/types";

const Form = (): JSX.Element => {
    // State
    const [name, setName] = useState<string>("");
    const [type, setType] = useState<"בגט" | "קערה">("בגט");
    const [quantity, setQuantity] = useState<number>(1);
    const [isSpicy, setIsSpicy] = useState<boolean>(false);

    const price: number = 45;
    const isTrio: boolean = quantity === 3;

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

    const handleSubmit = (e: { preventDefault: () => void; }): void => {
        e.preventDefault();
        if (name.length < 2) return;
        const spicy: string = isSpicy ? "עם חריף" : "ללא חריף";
        const messages: Messages = {
            trio: `🏆 תודה, ${name}.\n\n ההזמנה שלך אגדית! לא כל יום מזמינים 3 ${formatType(type, quantity)} ${spicy}. אם תוכל/י לסיים הכול, יש לגשת לויקטור לקבלת פרס. \n המחיר: ${calcPrice(quantity, price)} ש״ח. 🏆`,
            summary: `🐒 תודה, ${name}.\n\n ההזמנה שלך: ${formatQuantity(quantity)} ${formatType(type, quantity)} ${spicy}. \n המחיר: ${calcPrice(quantity, price)} ש״ח. 🐒`,
            email: `🐒 .היי, ויקטור\n\n ${name} רוצה ${formatQuantity(quantity)} ${formatType(type, quantity)} ${spicy}\nצריך להחזיר לך ${calcPrice(quantity, price)} ש״ח \n\n גבייה נעימה`,
            trioEmail: `🏆 .היי, ויקטור\n\n ${name} רוצה פאקינג 3 ${formatType(type, quantity)} ${spicy} 🙉\nצריך להחזיר לך ${calcPrice(quantity, price)} ש״ח \n\n עליך למצוא פרס מתאים לאדם שיסיים 3 מנות 🏆 \n\n גבייה נעימה`,
            success: `ההזמנה נשלחה לויקטור 🐒\n\n ** לא לשכוח להעביר לו ${calcPrice(quantity, price)} ש״ח 🦍`,
            trioSuccess: `ההזמנה נשלחה לויקטור 🐒\n\n ** לא לשכוח - כדי לקבל פרס, צריך לסיים הכול! \n וכמובן, להעביר לו ${calcPrice(quantity, price)} ש״ח 🦍`,
            error: "🙉 התרחשה שגיאה, יש לנסות שנית."
        }
        if (confirm(isTrio ? messages.trio : messages.summary)) {
            const templateParams: TemplateParams = { message: isTrio ? messages.trioEmail : messages.email, name };
            emailjs.send('service_lh3yo7j', 'template_a33xo3h', templateParams, 'JET-t7S4Txjc65bLr').then((_) => {
                alert(isTrio ? messages.trioSuccess : messages.success);
                location.reload();
            },
                (error) => {
                    console.log(error.text);
                    alert(messages.error);
                }
            );
        }
    }

    return (
        <form id="baboon-form" onSubmit={handleSubmit}>
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
