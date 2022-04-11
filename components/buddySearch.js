import styles from "../styles/buddySearch.module.scss";

const userProfile = (props) => {
    return (
        <div className={styles.profile_container}>
            <i className="material-icons">people</i>
            <p>Find a Buddy</p>
        </div>
    )
}

export default userProfile