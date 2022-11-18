import "./Input.scss"

export interface InputProps {
  className?: string
  label: string
  placeholder: string
}

export const Input = (props: InputProps) => {
  return (
    <div className={`input ${props.className ? props.className : ""}`}>
      <label htmlFor={props.label}>{props.label}</label>
      <input id={props.label} type={"number"} placeholder={props.placeholder} />
    </div>
  )
}
