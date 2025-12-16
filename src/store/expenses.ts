import { create } from 'zustand'
import { ExpensesState } from '@/types/expenses'

interface State {
  expenses: ExpensesState[]

  addExpenses: (params: ExpensesState) => void
}

export const useExpenses = create<State>((set) => ({
  expenses: [],

  addExpenses: (expense) =>
    set((state) => ({ expenses: [...state.expenses, expense] })),
}))
