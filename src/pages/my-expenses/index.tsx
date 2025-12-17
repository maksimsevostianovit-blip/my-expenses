import styles from './styles.module.scss'
import { TableExpenses } from './components/table-expenses'
import { Actions } from './components/actions'

export const MyExpensesPage = () => (
  <div className={styles.container}>
    <div className={styles.title}>Мои расходы</div>

    <div className={styles.wrapper}>
      <TableExpenses />
      <Actions />
    </div>
  </div>
)
