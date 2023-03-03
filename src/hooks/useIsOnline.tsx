import { useEffect, useState } from "react"

function useIsOnline() {
    const [isOnline, setOnline] = useState(true)

    useEffect(() => {
        const goOnline = () => setOnline(true)
        const goOffline = () => setOnline(false)
        window.addEventListener('online', goOnline)
        window.addEventListener('offline', goOffline)
        return () => {
            window.removeEventListener('online', goOnline)
            window.removeEventListener('oflline', goOffline)
        }
    }, [])

    return isOnline
}

export default useIsOnline
