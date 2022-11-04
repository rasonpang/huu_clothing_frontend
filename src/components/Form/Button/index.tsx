import styles from './style.module.css';

interface FormButtonProps {
	children: any;
	onClick?: Function;
};

const FormButton = (props: FormButtonProps) => {
	const onClick = () => {
		if (props?.onClick) props.onClick();
	};

	return (
		<button class={styles.container} onClick={onClick}>
			{props.children}
		</button>
	)
};

export default FormButton;