import contClasses from './content.module.css'
import Profile from './profile/profile.jsx'

const Content = () => {
    return (
        <div className={contClasses.content}>
            <Profile />
        </div>
    )
}

export default Content