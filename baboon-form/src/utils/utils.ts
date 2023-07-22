export const calcBtnOpacity = (num: number, quantity: number) => quantity === num ? { opacity: 0.3 } : {};

export const getSelectedRadioStyle = () => {
    return { borderRadius: "50%", outline: "solid rgba(255, 68, 0, 0.573)" };
}

export const getradioOpacity = () => { return { opacity: 0.4 }; }

export const calcPrice = (quantity: number, price: number): number => quantity * price;

export const formatQuantity = (quantity: number): number | string => quantity === 1 ? "" : quantity;

export const formatType = (type: string, quantity: number): string => {
    let formattedType: string = "";
    if (type === "בגט" && quantity > 1) formattedType = "בגטים";
    if (type === "בגט" && quantity < 1.5) formattedType = "בגט";
    if (type === "קערה" && quantity > 1) formattedType = "קערות"
    if (type === "קערה" && quantity < 1.5) formattedType = "קערה"
    return formattedType;
}
