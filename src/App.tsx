import React, { useCallback, useEffect, useState } from 'react'
import axios from 'axios'
import { View, Cards, ErrorView } from './components/index'
import { IData } from './models/index'
import './App.css'

export function App() {
    const [isNewCustomerView, setIsNewCustomerView] = useState<boolean>(false)
    const [data, setData] = useState<IData[] | undefined>()
    const [processedData, setProcessedData] = useState<IData[] | undefined>()

    const fetchData = async (): Promise<IData[]> => {
        const response = await axios.get<IData[]>(
            'https://www.mocky.io/v2/5bc3b9cc30000012007586b7'
        )
        return response.data
    }

    const processData = useCallback(
        (data: IData[] | undefined): IData[] | undefined => {
            if (isNewCustomerView && data) {
                return data
                    .filter((promo) => promo.onlyNewCustomers)
                    .sort((a, b) => a.sequence - b.sequence)
            } else if (data) {
                return [...data].sort((a, b) => a.sequence - b.sequence)
            }
        },
        [isNewCustomerView]
    )

    useEffect(() => {
        const initializeData = async (): Promise<void> => {
            try {
                const fetchedData = await fetchData()
                setData(fetchedData)
            } catch (error: any) {
                console.error('Error fetching data:', error)
            }
        }

        initializeData()
    }, [])

    useEffect(() => {
        const updatedData = processData(data)
        setProcessedData(updatedData)
    }, [isNewCustomerView, data, processData])

    return processedData && processedData.length > 0 ? (
        <>
            <View
                view={isNewCustomerView}
                setIsNewCustomerView={setIsNewCustomerView}
            />
            <Cards data={processedData} />
        </>
    ) : (
        <ErrorView />
    )
}
