import { MouseEventHandler, SetStateAction } from "react";

export type StepperProps = {
     quantity: number
     incrementQuantity: MouseEventHandler<HTMLButtonElement> | undefined
     decrementQuantity: MouseEventHandler<HTMLButtonElement> | undefined
}

export type NameInputProps = {
     name: string, handleNameChange: (e: {
          target: {
               value: SetStateAction<string>;
          };
     }) => void
}

export type RadioButtonProps = {
     type: string
     handleBaguetteType: MouseEventHandler<HTMLDivElement> | undefined
     handleBowlType: MouseEventHandler<HTMLDivElement> | undefined
}

export type Messages = {
     trio: string;
     summary: string;
     email: string;
     trioEmail: string;
     success: string;
     trioSuccess: string;
     error: string;
}

export type TemplateParams = {
     message: string;
     name: string;
}