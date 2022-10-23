import styles from './style.module.css';

const Form = (props) => {
    return (
        <form onSubmit={props.onSubmit}>
            {
                props.formItems.map((item) => (
                    <div className={styles.formItem}>
                        {
                            item?.element ?? <input type={item.type} />
                        }
                    </div>
                ))
            }
        </form>
    )
};

export default Form;