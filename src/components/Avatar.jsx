import styles from './Avatar.module.css';

// exemplo de destruturação de dados abaixo
export function Avatar({ hasBorder = true, src}) {

    return (
        
        <img 
            className={hasBorder ? styles.avatarWithBorder : styles.avatar}
            src={src}  
        />

    );
}