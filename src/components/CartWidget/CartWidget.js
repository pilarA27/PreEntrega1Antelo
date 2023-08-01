import shoppingBag from './assets/shoppingBag.svg'
const CartWidget = () => {
    return(
        <div>
            <img src={shoppingBag} alt="cart-widget" class="cartIcon" />
            0
        </div>
    )
}

export default CartWidget