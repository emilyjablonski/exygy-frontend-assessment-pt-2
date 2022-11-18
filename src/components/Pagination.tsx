import "./Pagination.scss"

export interface PaginationProps {
  numSteps: number
  selected: number
}

export const Pagination = (props: PaginationProps) => {
  const getPage = (content: string, classNames: string, screenLabel: string) => {
    return (
      <button className={"page"} key={content} aria-label={screenLabel}>
        <span className={`page-content ${classNames ? classNames : ""}`}>{content}</span>
      </button>
    )
  }

  return (
    <div className={"pagination"}>
      {getPage("<", "navigation", "Previous page")}
      {[...Array(props.numSteps)].map((_, index) => {
        return getPage(
          (index + 1).toString(),
          props.selected === index + 1 ? "current" : "",
          `Page ${index + 1}`
        )
      })}
      {getPage(">", "navigation", "Next page")}
    </div>
  )
}
