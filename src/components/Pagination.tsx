import React from "react"
import "./Pagination.scss"

export interface PaginationProps {
  numSteps: number
  selected: number
  setSelected: React.Dispatch<React.SetStateAction<number>>
}

export const Pagination = (props: PaginationProps) => {
  const getPage = (
    content: string,
    classNames: string,
    screenLabel: string,
    onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
  ) => {
    return (
      <span className={"page"} key={content} aria-label={screenLabel} onClick={onClick}>
        <span className={`page-content ${classNames ? classNames : ""}`}>{content}</span>
      </span>
    )
  }

  return (
    <div className={"pagination"}>
      {getPage("<", "navigation", "Previous page", () => {
        props.setSelected(props.selected - 1)
      })}

      {[...Array(props.numSteps)].map((_, index) => {
        return getPage(
          (index + 1).toString(),
          props.selected === index + 1 ? "current" : "",
          `Page ${index + 1}`,
          () => {
            props.setSelected(index + 1)
          }
        )
      })}

      {getPage(">", "navigation", "Next page", () => {
        props.setSelected(props.selected + 1)
      })}
    </div>
  )
}
