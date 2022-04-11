import styles from "../styles/chats.module.scss";
import BuddySearch from "../components/buddySearch.js";
import SearchBar from "../components/searchBar";
import BuddyProfileTile from "../components/buddyProfileTile";
import ConversationHeader from "../components/conversationHeader";
import MessageInput from "../components/messageInput";
import BuddyProfile from "../components/buddyProfile";

export default () => {
    return (
        <div className={styles.top_level_container}>
            <div className={styles.contacts_container}>
                <BuddySearch />
                <SearchBar />
                <div className={styles.buddy_chats}>
                    <BuddyProfileTile />
                </div>
            </div>
            <div className={styles.converstaion_container}>
                <ConversationHeader />
                <div className={styles.conversation} ></div>
                <MessageInput />
            </div>
            <div className={styles.buddy_profile}>
                <BuddyProfile />
            </div>
        </div>
    )
}