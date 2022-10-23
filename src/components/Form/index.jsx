import styles from './style.module.css';
import TextInput from './TextInput';

const Form = (props) => {
    return (
        <form className={styles.container} onSubmit={props.onSubmit}>
            {
                props.formItems.map((item) => (
                    <div className={styles.form_item}>
                        {() => {
                            if (['text', 'password'].includes(item.type)) return <TextInput type={item.type} />
                            return item.element ?? <input type={item.type} />
                        }}
                    </div>
                ))
            }
        </form>
    )
};

export default Form;