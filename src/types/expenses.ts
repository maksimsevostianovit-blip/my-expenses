import { StateCategory } from '@/types/categories'

export interface ExpensesState {
  description: string
  categories: StateCategory
  date: string
  amount: string
}
