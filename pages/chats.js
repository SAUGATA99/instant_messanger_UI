import styles from "../styles/chats.module.scss";
import UserProfileTile from "../components/userProfileTile.js";
import SearchBar from "../components/searchBar";
import BuddyProfileTile from "../components/buddyProfileTile";

export default () => {
    return (
        <div className={styles.top_level_container}>
            <div className={styles.contacts_container}>
                <UserProfileTile/>
                <SearchBar />
                <div className={styles.buddy_chats}>
                        <BuddyProfileTile />
                </div>
            </div>
            <div className={styles.converstaion_container}></div>
            <div className={styles.buddy_profile}></div>
        </div>
    )
}