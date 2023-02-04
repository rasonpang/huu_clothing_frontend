import FormButton from "../Form/Button";
import styles from "./style.module.css";

const OrderBar = () => {
    return (
        <div class={styles.order_bar}>
            <FormButton
                onClick={() => {
                    console.log("test");
                }}
            >
                Add to cart
            </FormButton>
        </div>
    );
};

export default OrderBar;
