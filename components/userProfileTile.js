import styles from "../styles/userProfileTile.module.scss";

const userProfile = (props) => {
    return (
        <div className={styles.profile_container}>
            <img src="https://cdn.mos.cms.futurecdn.net/4hDq7TLz9y9MDvBm5uady6-970-80.jpg.webp" />
            <div className={styles.name_bio_container}>
                <p>Mary Elizabeth Winstead</p>
                <p>Scott Pilgrim vs the world</p>
            </div>
            <i className="material-icons-outlined">&#xe3c9;</i>
        </div>
    )
}

export default userProfile