import { ReactElement } from 'react'

export enum Category {
  All = 'all',
  Meal = 'meal',
  Car = 'car',
  Housing = 'housing',
  Entertainments = 'entertainments',
  Education = 'education',
  Other = 'other',
}

export interface ListCategory {
  id: Category
  icon: ReactElement | null
  label: string
}
