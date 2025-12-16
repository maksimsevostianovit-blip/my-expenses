import { ListCategory, StateCategory } from '@/types/categories'

export const categoryMapping = (
  categories: ListCategory[]
): StateCategory[] => {
  return categories.map((category) => ({ ...category, selected: false }))
}
