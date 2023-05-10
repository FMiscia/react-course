import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { PropsWithChildren, Suspense, lazy, useContext } from 'react'
import { AppReducerStateContext } from './contexts/AppReducerContext'
import useQueryProfile from './hooks/queries/useQueryProfile'
import Spinner from './components/Spinner'

const LazyProfile = lazy(() => import('./pages/Profile'))
const LazyProducts = lazy(() => import('./pages/Products'))
const LazyLogin = lazy(() => import('./pages/Login'))
const LazyErrorPage = lazy(() => import('./pages/ErrorPage'))

const PrivateRoute = (props: PropsWithChildren) => {
    const { loggedIn } = useContext(AppReducerStateContext)

    const { isLoading } = useQueryProfile({
        refetchOnWindowFocus: false,
        refetchOnReconnect: false,
        retry: false,
        staleTime: Infinity
    })

    if (isLoading) {
        return (
            <div className="flex-row justify-center align-center">
                <Spinner />
            </div>
        )
    }

    if (!loggedIn) {
        return (
            <Suspense fallback={<Spinner className="flex-row justify-center align-center" />}>
                <LazyLogin />
            </Suspense>
        )
    }

    return <>{props.children}</>
}

const Navigation = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path="/"
                    element={
                        <PrivateRoute>
                            <Suspense
                                fallback={
                                    <Spinner className="flex-row justify-center align-center" />
                                }>
                                <LazyProducts />
                            </Suspense>
                        </PrivateRoute>
                    }
                />
                <Route
                    path="/profile"
                    element={
                        <PrivateRoute>
                            <Suspense
                                fallback={
                                    <Spinner className="flex-row justify-center align-center" />
                                }>
                                <LazyProfile />
                            </Suspense>
                        </PrivateRoute>
                    }
                />
                <Route
                    path="/login"
                    element={
                        <Suspense
                            fallback={<Spinner className="flex-row justify-center align-center" />}>
                            <LazyLogin />
                        </Suspense>
                    }
                />
                <Route
                    path="*"
                    element={
                        <Suspense
                            fallback={<Spinner className="flex-row justify-center align-center" />}>
                            <LazyErrorPage />
                        </Suspense>
                    }
                />
            </Routes>
        </BrowserRouter>
    )
}

export default Navigation
