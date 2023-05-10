import { useContext, useMemo, useState } from 'react'
import ProductCard from '../components/ProductCard'
import Button from '../components/Button'
import Spinner from '../components/Spinner'
import { AppReducerDispatchContext, AppReducerStateContext } from '../contexts/AppReducerContext'
import { AppActionTypes } from '../reducers/appReducer'
import TopBar from '../components/TopBar'
import useQueryProducts from '../hooks/queries/useQueryProducts'

function Products() {
    const { isLoading, error, data: list } = useQueryProducts()
    const dispatch = useContext(AppReducerDispatchContext)
    const { savedProducts } = useContext(AppReducerStateContext)
    const [sorting, setSorting] = useState<'natural' | 'ascending' | 'descending'>('natural')
    const currentList = useMemo(() => {
        if (!list) {
            return []
        }
        const newList = [...list]
        if (sorting === 'natural') {
            return newList
        }
        return newList.sort((a, b) => {
            if (a.title < b.title) {
                return sorting === 'ascending' ? -1 : 1
            }
            if (a.title > b.title) {
                return sorting === 'ascending' ? 1 : -1
            }
            return 0
        })
    }, [list, sorting])

    const onSaveProduct = (id: number) => {
        if (savedProducts.includes(id)) {
            dispatch({ type: AppActionTypes.products_REMOVE, payload: id })
            return
        }
        dispatch({ type: AppActionTypes.products_SAVE, payload: id })
    }

    if (isLoading) {
        return (
            <div className="flex-row justify-center align-center">
                <Spinner />
            </div>
        )
    }

    if (error) {
        return <div>An error has occurred: {error.message}</div>
    }

    return (
        <div className="fill-v flex-column justify-start">
            <TopBar />
            <div className="flex-row-wrap margin-top-s">
                <Button
                    className="margin-left-m"
                    label={'NATURAL'}
                    secondary={sorting !== 'natural'}
                    onClick={() => setSorting('natural')}
                />
                <Button
                    className="margin-left-m"
                    label={'A-Z'}
                    secondary={sorting !== 'ascending'}
                    onClick={() => setSorting('ascending')}
                />
                <Button
                    className="margin-left-m"
                    label={'Z-A'}
                    secondary={sorting !== 'descending'}
                    onClick={() => setSorting('descending')}
                />
            </div>
            <div className="flex-row-wrap">
                {currentList.map((it) => {
                    return (
                        <ProductCard
                            key={it.id}
                            {...it}
                            buttonLabel={savedProducts.includes(it.id) ? 'SAVED' : 'SAVE'}
                            onButtonClick={onSaveProduct}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default Products
