import CartWidget from "../CartWidget/CartWidget"
import searchIcon from "../NavBar/img/searchIcon.svg"
const NavBar = () => {
    return (
        <nav>
            <div class="NavBar">
            <img src={searchIcon} alt="search Icon" class="searchIcon" />
            <h3 class="NavTitle">Beauty Brand</h3>
            <CartWidget/>
            </div>
            <div class="NavBarButton">
                <button>Skin Care</button>
                <button>Hair Care</button>
                <button>Body Care</button>
            </div>
        </nav>
    )
}

export default NavBar