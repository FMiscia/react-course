import { UseQueryOptions, useQuery } from '@tanstack/react-query'
import { Profile } from '../../types'
import rest from '../../services/rest'
import { AppReducerDispatchContext } from '../../contexts/AppReducerContext'
import { useContext } from 'react'
import { AppActionTypes } from '../../reducers/appReducer'

const useQueryProfile = (options: UseQueryOptions<Profile, Error> = {}) => {
    const dispatch = useContext(AppReducerDispatchContext)
    const query = useQuery<Profile, Error>({
        queryKey: ['profile'],
        queryFn: () =>
            rest
                .get('/auth/profile/')
                .then((res) => {
                    dispatch({ type: AppActionTypes.user_LOGIN })
                    return res.data
                })
                .catch((reason) => {
                    dispatch({ type: AppActionTypes.user_LOGOUT })
                    return reason
                }),
        ...options
    })

    return query
}

export default useQueryProfile
