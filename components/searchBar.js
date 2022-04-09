import styles from "../styles/searchBar.module.scss";

const searchBar = (props) => {
    return (
        <div className={styles.search_container}>
            <i className="material-icons-outlined">&#xe8b6;</i>
            <input type="search" placeholder="search a buddy" />
        </div>
    )
}

export default searchBar;