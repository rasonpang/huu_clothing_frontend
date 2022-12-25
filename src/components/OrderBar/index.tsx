import styles from "./style.module.css";

const OrderBar = () => {
    return (
        <div class={styles.order_bar}>
            <span class={styles.add_cart_btn}>Add to cart</span>
            <span>Quantity: 1</span>
        </div>
    );
};

export default OrderBar;
