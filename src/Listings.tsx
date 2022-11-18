import React, { useState } from "react"
import mockData from "./mock-data.json"
import { Address, InfoBlock } from "./components/InfoBlock"
import { Button } from "./components/Button"
import { ImageBlock } from "./components/ImageBlock"
import { Input } from "./components/Input"
import { Pagination } from "./components/Pagination"
import "./Listings.scss"

export interface UnitTable {
  minIncomeMaximum: number
  minIncomeMinimum: number
  rentMaximum: number
  rentMinimum: number
  rentUnit: "percentage" | "currency"
  type: "studio" | "oneBdrm" | "twoBdrm" | "threeBdrm" | "fourBdrm"
}

export interface Listing {
  address: Address
  deadline: string
  id: string
  imageLabels: string[]
  imageURL: string
  listingLabels: string[]
  name: string
  tableHeader: string | null
  tableSubheader: string | null
  unitTableData: UnitTable[]
}

export const Listings = () => {
  const [error, setError] = useState<string | null>(null)
  const [itemsPerPage, setItemsPerPage] = useState(1)
  const [itemsPerPageInput, setItemsPerPageInput] = useState(1)
  const [page, setPage] = useState(1)

  const listingData = mockData as Listing[]
  const numSteps = Math.ceil(listingData.length / itemsPerPage)

  return (
    <div className={"content"}>
      <div className={"container"}>
        <div className={"filter-container"}>
          <div className={"filters"}>
            <div className={"update-items"}>
              <Input
                label={"Items per page"}
                setValue={setItemsPerPageInput}
                value={itemsPerPageInput}
                setErrorMessage={setError}
              />
              <Button
                onClick={() => {
                  if (!itemsPerPageInput || itemsPerPageInput < 1) {
                    setError("Must be greater than 0")
                  } else {
                    setItemsPerPage(itemsPerPageInput)
                  }
                }}
              >
                Update
              </Button>
            </div>
            {error && <div className={"error-message"}>{error}</div>}
          </div>
          <Pagination numSteps={numSteps} selected={page} setSelected={setPage} />
        </div>
        <div className={"listings"}>
          {listingData
            .slice((page - 1) * itemsPerPage, page * itemsPerPage + 1)
            .map((listing, index) => {
              return (
                <div className="listing" key={index}>
                  <ImageBlock
                    imageURL={listing.imageURL}
                    deadline={listing.deadline}
                    labels={listing.imageLabels}
                  />
                  <InfoBlock
                    title={listing.name}
                    address={listing.address}
                    tableHeader={listing.tableHeader}
                    tableSubheader={listing.tableSubheader}
                    labels={listing.listingLabels}
                    unitRows={listing.unitTableData}
                  />
                </div>
              )
            })}
        </div>
      </div>
    </div>
  )
}
