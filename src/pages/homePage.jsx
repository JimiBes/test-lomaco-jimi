import Header from "../components/header"
import UserModal from "../components/userModal"
import BurgerButton from "../components/burgerButton"
import '../styles/homePage.scss'

function HomePage () {
    return (
        <div className="home-page-container">
            <Header />
            <UserModal />
            <BurgerButton />
        </div>
    )
}

export default HomePage