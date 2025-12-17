import styles from './styles.module.scss'
import { Chip } from '@/components/chip'
import { Label } from '@/components/label'
import { DatePicker } from '@mui/x-date-pickers'
import { Input } from '@/components/input'
import { Dayjs } from 'dayjs'
import { ChangeEvent, FormEvent, useState } from 'react'
import { Category } from '@/types/category'
import { NumericFormat } from 'react-number-format'
import { NumberFormatValues } from 'react-number-format/types/types'
import { useExpenses } from '@/store/expenses'
import { CATEGORIES } from '@/constants/categories'

export const Actions = () => {
  const [description, setDescription] = useState('')
  const [category, setCategory] = useState<Category | null>(null)
  const [date, setDate] = useState<Dayjs | null>(null)
  const [amount, setAmount] = useState('')

  const { addExpenses } = useExpenses()

  const handleChangeDescription = (event: ChangeEvent<HTMLInputElement>) => {
    setDescription(event.target.value)
  }

  const handleChangeCategories = (category: Category) => {
    setCategory(category)
  }

  const handleChangeDate = (date: Dayjs | null) => {
    if (!date) {
      setDate(null)
      return
    }

    setDate(date)
  }

  const handleChangeAmount = ({ value }: NumberFormatValues) => {
    setAmount(value)
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    addExpenses({
      description,
      category,
      date: date ? date.format('DD.MM.YYYY') : '',
      amount,
    })

    setDescription('')
    setCategory(null)
    setDate(null)
    setAmount('')
  }

  const isDisabled = !description || !date || !category || !amount

  return (
    <div className={styles.container}>
      <div className={styles.title}>Новый расход</div>

      <form className={styles.wrapper} onSubmit={handleSubmit}>
        <Label label="Описание">
          <Input
            value={description}
            placeholder="Введите описание"
            onChange={handleChangeDescription}
          />
        </Label>

        <Label label="Категория">
          <ul className={styles.list}>
            {CATEGORIES.map(
              ({ id, icon, label }) =>
                icon && (
                  <Chip
                    key={id}
                    icon={icon}
                    label={label}
                    selected={id === category}
                    onClick={() => handleChangeCategories(id)}
                  />
                )
            )}
          </ul>
        </Label>

        <Label label="Дата">
          <DatePicker
            value={date}
            onChange={handleChangeDate}
            enableAccessibleFieldDOMStructure={false}
            slotProps={{
              textField: { placeholder: 'Введите дату' },
            }}
            slots={{
              textField: Input,
            }}
          />
        </Label>

        <Label label="Сумма">
          <NumericFormat
            value={amount}
            onValueChange={handleChangeAmount}
            customInput={Input}
            thousandSeparator={' '}
            valueIsNumericString
            placeholder="Введите сумму"
          />
        </Label>

        <button disabled={isDisabled} className={styles.button}>
          Добавить новый расход
        </button>
      </form>
    </div>
  )
}
