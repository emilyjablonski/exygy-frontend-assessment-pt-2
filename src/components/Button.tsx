import React from "react"
import "./Button.scss"

export interface ButtonProps {
  children: React.ReactNode
  onClick: ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void) | undefined
}

export const Button = (props: ButtonProps) => {
  return (
    <button className={"button"} onClick={props.onClick}>
      {props.children}
    </button>
  )
}
