import { useEffect, useState } from 'react'

function useIsOnline() {
    const [isOnline, setIsOnline] = useState(true)

    useEffect(() => {
        const onlineCallback = () => setIsOnline(true)
        const offlineCallback = () => setIsOnline(false)
        window.addEventListener('offline', () => offlineCallback())
        window.addEventListener('online', () => onlineCallback())
        return () => {
            window.removeEventListener('online', onlineCallback)
            window.removeEventListener('offline', offlineCallback)
        }
    }, [])

    return isOnline
}

export default useIsOnline
