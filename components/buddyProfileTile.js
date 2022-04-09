import styles from "../styles/buddyProfileTile.module.scss";

const buddyProfileTile = (props) => {
    return (
        <div className={styles.profile_container}>
            <img src="https://cdn.mos.cms.futurecdn.net/4hDq7TLz9y9MDvBm5uady6-970-80.jpg.webp" />
            <div className={styles.name_bio_container}>
                <p>Mary Elizabeth Winstead</p>
                <p>Scott Pilgrim vs the world</p>
            </div>
            <div className={styles.buddy_meta}>
                <p className={styles.last_seen_day}>Today</p>
                <p className={styles.last_seen_time}>08:36 AM</p>
                <p className={styles.unviewed_messages}></p>
            </div>
        </div>
    )
}

export default buddyProfileTile;