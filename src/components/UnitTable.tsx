import React from "react"
import "./UnitTable.scss"

export type UnitRow = {
  minIncomeMaximum: number
  minIncomeMinimum: number
  rentMaximum: number
  rentMinimum: number
  rentUnit: "currency" | "percentage"
  type: "studio" | "oneBdrm" | "twoBdrm" | "threeBdrm" | "fourBdrm"
}

export interface UnitTableProps {
  unitRows: UnitRow[]
}

export const UnitTable = (props: UnitTableProps) => {
  const getMinIncome = (row: UnitRow) => {
    const minIncomeMin = row.minIncomeMinimum.toLocaleString()
    const minIncomeMax = row.minIncomeMaximum.toLocaleString()
    if (minIncomeMin === minIncomeMax) return `$${minIncomeMin} per month`
    return `$${minIncomeMin} - $${minIncomeMax} per month`
  }
  const getRent = (row: UnitRow) => {
    const rentMin = row.rentMinimum.toLocaleString()
    const rentMax = row.rentMaximum.toLocaleString()
    if (rentMin === rentMax) {
      if (row.rentUnit === "percentage") return `${rentMin}% income`
      return `$${rentMin} per month`
    }
    if (row.rentUnit === "percentage") return `${rentMin}% - ${rentMax}% income`
    return `$${rentMin} - $${rentMax} per month`
  }

  const unitStrings = {
    studio: "Studio",
    oneBdrm: "1 BR",
    twoBdrm: "2 BR",
    threeBdrm: "3 BR",
    fourBdrm: "4 BR",
  }

  return (
    <div className={"unit-table"}>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Minimum Income</th>
            <th>Rent</th>
          </tr>
        </thead>
        <tbody>
          {props.unitRows.map((row, index) => (
            <tr key={index}>
              <td>{unitStrings[row.type]}</td>
              <td>{getMinIncome(row)}</td>
              <td>{getRent(row)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
