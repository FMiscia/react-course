import { AppReducerDispatchContext, AppReducerStateContext } from '../contexts/AppReducerContext'
import { useContext, useMemo } from 'react'
import ProductCard from '../components/ProductCard'
import Spinner from '../components/Spinner'
import { AppActionTypes } from '../reducers/appReducer'
import TopBar from '../components/TopBar'
import useQueryProducts from '../hooks/queries/useQueryProducts'
import useQueryProfile from '../hooks/queries/useQueryProfile'
import Button from '../components/Button'

const Profile = () => {
    const { isLoading: isLoadingList, data: list } = useQueryProducts()
    const { isLoading: isLoadingProfile, data: profile } = useQueryProfile()
    const isLoading = isLoadingList || isLoadingProfile
    const dispatch = useContext(AppReducerDispatchContext)
    const { savedProducts } = useContext(AppReducerStateContext)
    const currentList = useMemo(() => {
        if (!list) {
            return []
        }
        return list.filter((it) => savedProducts.includes(it.id))
    }, [list, savedProducts])

    const onRemoveProduct = (id: number) => {
        dispatch({ type: AppActionTypes.products_REMOVE, payload: id })
    }

    return (
        <div className="fill-v flex-column justify-start">
            <TopBar />
            <div className="flex-row align-center">
                <img height={200} width={200} src={profile?.avatar} />
                <div className="margin-left-s">
                    <h2>{profile?.name}</h2>
                    <h2>{profile?.email}</h2>
                    <Button
                        label="Logout"
                        onClick={() => {
                            dispatch({ type: AppActionTypes.user_LOGOUT })
                            localStorage.removeItem('access_token')
                        }}
                    />
                </div>
            </div>
            <div className="flex-row-wrap margin-top-l">
                {currentList.map((it) => {
                    return (
                        <ProductCard
                            key={it.id}
                            {...it}
                            buttonLabel="REMOVE"
                            onButtonClick={onRemoveProduct}
                        />
                    )
                })}
                {!isLoading && currentList.length === 0 && <div>No Saved Products</div>}
            </div>
            {isLoading && (
                <div className="flex-row justify-center align-center">
                    <Spinner />
                </div>
            )}
        </div>
    )
}

export default Profile
