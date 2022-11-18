import React from "react"
import { Label } from "./Label"
import "./ImageBlock.scss"

export interface ImageBlockProps {
  deadline: string
  imageURL: string
  labels: string[]
}

export const ImageBlock = (props: ImageBlockProps) => {
  return (
    <div className="image-block">
      {props.labels.length > 0 && (
        <div className={"label-container"}>
          {props.labels.map((label, index) => {
            return <Label text={label} styleType={"image"} key={index} />
          })}
        </div>
      )}
      <img src={props.imageURL} alt={"A photo of the building"} />
      <div className={"deadline"}>{`Application Deadline: ${props.deadline}`}</div>
    </div>
  )
}
