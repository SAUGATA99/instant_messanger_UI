import styles from "../styles/conversationHeader.module.scss";

const conversationHeader = (props) => {
    return (
        <div className={styles.header_container}>
            <div className={styles.user_active}>
                <div className={styles.profile_pic}>
                    <img src="https://cdn.mos.cms.futurecdn.net/4hDq7TLz9y9MDvBm5uady6-970-80.jpg.webp" />
                    <p className={styles.buddy_online}></p>
                </div>
                <p className={styles.buddy_username}>Mary Elizabeth Winstead</p>
            </div>
        </div>
    )
}

export default conversationHeader;