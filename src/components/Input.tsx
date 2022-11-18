import React from "react"
import "./Input.scss"

export interface InputProps {
  label: string
  setErrorMessage: React.Dispatch<React.SetStateAction<string | null>>
  setValue: React.Dispatch<React.SetStateAction<number>>
  value: number
}

export const Input = (props: InputProps) => {
  return (
    <div className={"input"}>
      <label htmlFor={props.label}>{props.label}</label>
      <input
        id={props.label}
        onChange={(e) => {
          const inputValue = parseInt(e.currentTarget.value)
          props.setValue(inputValue)
        }}
        type={"number"}
        value={props.value}
        min={1}
      />
    </div>
  )
}
