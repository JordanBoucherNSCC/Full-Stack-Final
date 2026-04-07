import './Banner.scss'
import welcomeBanner from '../../assets/welcomeBanner.jpg'

const Banner = () => {
    return (
        <div className="banner">
        <img src={welcomeBanner} alt="Store Banner" />
        <h1>Welcome to the Store!</h1>
        <p>Inventory list below!</p>
        </div>
    )
}

export default Banner