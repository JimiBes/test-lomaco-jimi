import Header from "../components/header"
import UserModal from "../components/userModal"
import '../styles/homePage.scss'

function HomePage () {
    return (
        <div className="home-page-container">
            <Header />
            <UserModal />
        </div>
    )
}

export default HomePage