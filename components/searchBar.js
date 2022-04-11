import styles from "../styles/searchBar.module.scss";

const searchBar = (props) => {
    return (
        <div className={styles.search_container}>
            <i className="material-icons">search</i>
            <input type="search" placeholder="search conversations..." />
        </div>
    )
}

export default searchBar;