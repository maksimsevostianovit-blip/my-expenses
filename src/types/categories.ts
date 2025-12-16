import { ReactElement } from 'react'

export enum Categories {
  Meal = 'meal',
  Car = 'car',
  Housing = 'housing',
  Entertainments = 'entertainments',
  Education = 'education',
  Other = 'other',
}

export interface ListCategory {
  id: Categories
  icon: ReactElement
  label: string
}

export interface StateCategory extends ListCategory {
  selected: boolean
}
