import { IData } from './index'

export interface IViewProps {
    view: boolean
    setIsNewCustomerView: React.Dispatch<React.SetStateAction<boolean>>
}

export interface ICardsProps {
    data: IData[] | undefined
}
