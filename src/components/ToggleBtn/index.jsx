import { createMemo, createSignal } from 'solid-js';
import styles from './style.module.css';

const ToggleBtn = (props) => {
    const value = createMemo(() => props.value);
    const onClick = props.onClick;

    return (
        <div 
            className={styles.container} 
            style={`background-color: ${value() ? 'green' : 'red'};`}
            onClick={() => onClick()}
        >
            <div
                className={styles.value} 
                style={`margin-left: ${value() ? 'var(--size)' : '0'};`}
            ></div>
        </div>
    );
};

export default ToggleBtn;