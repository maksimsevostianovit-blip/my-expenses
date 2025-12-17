import { create } from 'zustand'
import { ExpensesState } from '@/types/expenses'
import { MOCK_EXPANDED } from '@/constants/expenses'
import { Sorting } from '@/types/filter'
import { Category } from '@/types/category'
import { expensesApplyFilters } from '@/utils/expenses-apply-filters'

interface State {
  expenses: ExpensesState[]
  filteredExpenses: ExpensesState[]

  selectedSort: Sorting
  selectedCategory: Category

  addExpenses: (params: Omit<ExpensesState, 'id'>) => void
  deleteExpensesById: (id: ExpensesState['id']) => void
  setSelectedSort: (value: Sorting) => void
  setSelectedCategory: (value: Category) => void
}

export const useExpenses = create<State>((set) => ({
  expenses: MOCK_EXPANDED,
  filteredExpenses: MOCK_EXPANDED,

  selectedSort: Sorting.None,
  selectedCategory: Category.All,

  addExpenses: (expense) =>
    set((state) => {
      const expenses = [{ id: Date.now(), ...expense }, ...state.expenses]

      return {
        expenses,
        filteredExpenses: expensesApplyFilters(
          expenses,
          state.selectedSort,
          state.selectedCategory
        ),
      }
    }),

  deleteExpensesById: (id) =>
    set((state) => {
      const expenses = state.expenses.filter((e) => e.id !== id)

      return {
        expenses,
        filteredExpenses: expensesApplyFilters(
          expenses,
          state.selectedSort,
          state.selectedCategory
        ),
      }
    }),

  setSelectedSort: (value) =>
    set((state) => ({
      selectedSort: value,
      filteredExpenses: expensesApplyFilters(
        state.expenses,
        value,
        state.selectedCategory
      ),
    })),

  setSelectedCategory: (value) =>
    set((state) => ({
      selectedCategory: value,
      filteredExpenses: expensesApplyFilters(
        state.expenses,
        state.selectedSort,
        value
      ),
    })),
}))
