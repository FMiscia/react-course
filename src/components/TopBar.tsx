import { useNavigate } from 'react-router-dom'
import Button from './Button'

function TopBar() {
    const navigate = useNavigate()
    return (
        <div className="flex-row justify-end">
            <Button label="Home" onClick={() => navigate('/')} />
            <Button
                className="margin-left-xs"
                label="Profile"
                onClick={() => navigate('/profile')}
            />
        </div>
    )
}

export default TopBar
