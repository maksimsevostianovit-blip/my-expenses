export enum Routes {
  MyExpenses = '/my-expenses',
  CostAnalysis = '/cost-analysis',
}

export interface ListRoute {
  id: Routes
  label: string
}
