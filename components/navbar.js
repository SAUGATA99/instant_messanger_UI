import styles from "../styles/navbar.module.scss";

const navbar = (props) => {
    return (
        <div className={styles.navbar_container} >
            <div className={styles.tabs_container}>
                <span>chats</span>
                <span>profile</span>
                <span>notes</span>
            </div>
            <div className={styles.settings} ><span>settings</span></div>
        </div>
    )
}

export default navbar