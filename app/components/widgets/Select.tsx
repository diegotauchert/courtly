"use client"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import { IData } from "app/interfaces/IData"
import { Label } from "@/components/ui/label";

type ISelectWidget = {
  label: string
  data: IData[]
}
 
export const SelectWidget = ({label, data}: ISelectWidget) => {
  const selectId = `${label.toLowerCase()}-select`;

  return data ? (
    <div>
      <Label htmlFor={selectId} className="text-md text-gray-600 font-semibold mb-1 block">{label}</Label>
      <Select>
        <SelectTrigger className="w-full">
          <SelectValue placeholder={label} />
        </SelectTrigger>
        <SelectContent id={selectId} className="bg-white">
          <SelectGroup>
            <SelectLabel>{label}</SelectLabel>
            {data.map(({key, value}: IData) => <SelectItem key={key} value={value}>{value}</SelectItem>)}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  ) : "Loading ..."
}