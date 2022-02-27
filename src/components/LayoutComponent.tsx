import styles from '../styles/App.module.css';

interface LayoutComponentProps {
    children: React.ReactNode;
}

export const LayoutComponent: React.FC<LayoutComponentProps> = ({ children }: LayoutComponentProps): JSX.Element => {
    return <div className={styles.app}>{children}</div>;
};
