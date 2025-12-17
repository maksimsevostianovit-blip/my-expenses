import { ExpensesState } from '@/types/expenses'
import { Sorting } from '@/types/filter'
import { Category } from '@/types/category'
import dayjs from 'dayjs'

export const expensesApplyFilters = (
  expenses: ExpensesState[],
  sort: Sorting,
  selectedCategory: Category
): ExpensesState[] => {
  let list = expenses

  if (selectedCategory !== Category.All) {
    list = list.filter((e) => e.category === selectedCategory)
  }

  if (sort === Sorting.None) {
    return list
  }

  return [...list].sort((a, b) => {
    const dateA = dayjs(a.date, 'DD.MM.YYYY')
    const dateB = dayjs(b.date, 'DD.MM.YYYY')

    return sort === Sorting.Asc ? dateA.diff(dateB) : dateB.diff(dateA)
  })
}
