import { UseMutationOptions, useMutation } from '@tanstack/react-query'
import rest from '../../services/rest'
import { useContext } from 'react'
import { AppReducerDispatchContext } from '../../contexts/AppReducerContext'
import { AppActionTypes } from '../../reducers/appReducer'

type Login = { email: string; password: string }
type LoginResponse = { access_token: string; refresh_token: string }

const useLoginMutation = (options: UseMutationOptions<LoginResponse, Error, Login> = {}) => {
    const dispatch = useContext(AppReducerDispatchContext)
    const mutation = useMutation({
        mutationFn: async (login: Login) => {
            const res = await rest.post('/auth/login', login, {
                headers: { 'content-type': 'application/json' }
            })
            return res.data
        },
        onSuccess: ({ access_token }) => {
            localStorage.setItem('access_token', access_token)
            dispatch({ type: AppActionTypes.user_LOGIN })
        },
        ...options
    })

    return mutation
}

export default useLoginMutation
