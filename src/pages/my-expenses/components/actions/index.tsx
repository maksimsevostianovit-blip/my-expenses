import styles from './styles.module.scss'
import { CATEGORIES } from '@/constants/categories'
import { Chip } from '@/components/chip'
import { Label } from '@/components/label'
import { DatePicker } from '@mui/x-date-pickers'
import { Input } from '@/components/input'
import { Dayjs } from 'dayjs'
import { ChangeEvent, FormEvent, useState } from 'react'
import { Categories, StateCategory } from '@/types/categories'
import { categoryMapping } from '@/pages/my-expenses/components/actions/utils/category-mapping'
import { NumericFormat } from 'react-number-format'
import { NumberFormatValues } from 'react-number-format/types/types'
import { useExpenses } from '@/store/expenses'

export const Actions = () => {
  const [description, setDescription] = useState('')
  const [categories, setCategories] = useState<StateCategory[]>(
    categoryMapping(CATEGORIES)
  )
  const [date, setDate] = useState('')
  const [amount, setAmount] = useState('')

  const { addExpenses } = useExpenses()

  const handleChangeDescription = (event: ChangeEvent<HTMLInputElement>) => {
    setDescription(event.target.value)
  }

  const handleChangeCategories = (id: Categories) => {
    setCategories((prevState) =>
      prevState.map((category) => {
        if (category.id === id) {
          return { ...category, selected: !category.selected }
        }

        return category
      })
    )
  }

  const handleChangeDate = (date: Dayjs | null) => {
    if (!date) {
      setDate('')
      return
    }

    setDate(date.format('DD.MM.YYYY'))
  }

  const handleChangeAmount = ({ formattedValue }: NumberFormatValues) => {
    setAmount(formattedValue)
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    addExpenses({
      description,
      categories,
      date,
      amount,
    })

    setDescription('')
    setCategories([])
    setDate('')
    setAmount('')
  }

  const isDisabled = !description || !date || !categories.length || !amount

  return (
    <div className={styles.container}>
      <div className={styles.title}>Новый расход</div>

      <form className={styles.wrapper} onSubmit={handleSubmit}>
        <Label label="Описание">
          <Input
            placeholder="Введите описание"
            onChange={handleChangeDescription}
          />
        </Label>

        <Label label="Категория">
          <ul className={styles.list}>
            {categories.map(({ id, icon, label, selected }) => (
              <Chip
                key={id}
                icon={icon}
                label={label}
                selected={selected}
                onClick={() => handleChangeCategories(id)}
              />
            ))}
          </ul>
        </Label>

        <Label label="Дата">
          <DatePicker
            onChange={handleChangeDate}
            enableAccessibleFieldDOMStructure={false}
            slotProps={{
              textField: { placeholder: 'Введите дату' },
            }}
            slots={{
              textField: Input,
            }}
            format="ДД/ММ/ГГГГ"
          />
        </Label>

        <Label label="Сумма">
          <NumericFormat
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
