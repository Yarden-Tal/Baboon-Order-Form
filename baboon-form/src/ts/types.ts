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