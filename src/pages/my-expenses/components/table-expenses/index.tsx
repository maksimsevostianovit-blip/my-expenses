import styles from './styles.module.scss'
import { useExpenses } from '@/store/expenses'
import { Table } from './components/table'
import { Filters } from '@/pages/my-expenses/components/table-expenses/components/filters'

export const TableExpenses = () => {
  const { deleteExpensesById } = useExpenses()
  const expenses = useExpenses((state) => state.filteredExpenses)

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.title}>Таблица расходов</div>

        <Filters />
      </div>

      <div className={styles.table}>
        <Table list={expenses} onDelete={deleteExpensesById} />
      </div>
    </div>
  )
}
