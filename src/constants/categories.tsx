import { Category, ListCategory } from '@/types/category'
import {
  CarSvg,
  EducationSvg,
  EntertainmentsSvg,
  HousingSvg,
  MealSvg,
} from '@/assents/svg'
import { OtherSvg } from '@/assents/svg/other'

export const CATEGORIES: ListCategory[] = [
  {
    id: Category.All,
    icon: null,
    label: 'Все',
  },
  {
    id: Category.Meal,
    icon: <MealSvg />,
    label: 'Еда',
  },
  {
    id: Category.Car,
    icon: <CarSvg />,
    label: 'Транспорт',
  },
  {
    id: Category.Housing,
    icon: <HousingSvg />,
    label: 'Жилье',
  },
  {
    id: Category.Entertainments,
    icon: <EntertainmentsSvg />,
    label: 'Развлечения',
  },
  {
    id: Category.Education,
    icon: <EducationSvg />,
    label: 'Образование',
  },
  {
    id: Category.Other,
    icon: <OtherSvg />,
    label: 'Другое',
  },
]
