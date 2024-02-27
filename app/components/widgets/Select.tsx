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
import { Dispatch, SetStateAction } from 'react';

type ISelectWidget = {
  label: string
  data: IData[]
  setValue: Dispatch<SetStateAction<string | null>>
  selectValue: string | null
}

export const SelectWidget = ({label, data, setValue, selectValue}: ISelectWidget) => {
  const selectId = `${label.toLowerCase()}-select`;

  const handleSelectChange = (val: string | null) => {
    setValue(val);
  };

  const defaultPlaceholder = selectValue || "- Choose One"; 

  return data ? (
    <div>
      <Label htmlFor={selectId} className="text-md text-gray-600 font-semibold mb-1 block">{label} *</Label>
      <Select onValueChange={handleSelectChange}>
        <SelectTrigger className="w-full">
          <SelectValue placeholder={defaultPlaceholder} />
        </SelectTrigger>
        <SelectContent id={selectId} className="bg-white">
          <SelectGroup>
            <SelectLabel>{defaultPlaceholder}</SelectLabel>
            {data.map(({key, value}: IData) => <SelectItem key={key} value={value}>{value}</SelectItem>)}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  ) : "Loading ..."
}