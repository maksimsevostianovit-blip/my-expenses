import { Category } from '@/types/category'

export interface ExpensesState {
  id: number
  description: string
  category: Category
  date: string
  amount: string
}
