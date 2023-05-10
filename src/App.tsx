import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import AppReducerContextProvider from './contexts/AppReducerContext'
import Navigation from './Navigation'
import './styles/classes.css'

const queryClient = new QueryClient()

function App() {
    return (
        <div className="std">
            <QueryClientProvider client={queryClient}>
                <AppReducerContextProvider>
                    <Navigation />
                </AppReducerContextProvider>
            </QueryClientProvider>
        </div>
    )
}

export default App
