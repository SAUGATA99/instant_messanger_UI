import styles from "../styles/messageInput.module.scss";

const messageInput = (props) => {
    return (
        <div className={styles.container}>
            <input type="text" placeholder="Type your mesasge here..." />
            <i className="material-icons">attachment</i>
            <i className="material-icons send_message">send</i>
        </div>
    )
}

export default messageInput