import { Categories, ListCategory } from '@/types/categories'
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
    id: Categories.Meal,
    icon: <MealSvg />,
    label: 'Еда',
  },
  {
    id: Categories.Car,
    icon: <CarSvg />,
    label: 'Транспорт',
  },
  {
    id: Categories.Housing,
    icon: <HousingSvg />,
    label: 'Жилье',
  },
  {
    id: Categories.Entertainments,
    icon: <EntertainmentsSvg />,
    label: 'Развлечения',
  },
  {
    id: Categories.Education,
    icon: <EducationSvg />,
    label: 'Образование',
  },
  {
    id: Categories.Other,
    icon: <OtherSvg />,
    label: 'Другое',
  },
]
