import styles from "../styles/buddyProfile.module.scss";

const buddyProfile = () => {
    return (
        <div className={styles.container} >
            <div className={styles.buddy_profile}>
                <img src="https://cdn.mos.cms.futurecdn.net/4hDq7TLz9y9MDvBm5uady6-970-80.jpg.webp" />
                <p className={styles.name}>Mary Elizabeth Winstead</p>
                <p className={styles.bio}>Scott Pilgrim vs. the world</p>
            </div>
            <div className={styles.buddy_meta}>
                <p className={styles.email}>saugata.sarkar@gmail.com</p>
            </div>
            <div className={styles.media}>
                <p>Media</p>
            </div>
        </div>
    )
}

export default buddyProfile