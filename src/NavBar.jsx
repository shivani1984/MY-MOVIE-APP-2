
import styles from "./NavBar.module.css"



function NavBar(props) {
    
        console.log(props);
        const{cartCount} = props;
        return (
            <>
                <div className={styles.nav}>
                    
                
                    <div className={styles.title}>Title</div>
                    <div className={styles.cartIconContainer}>
                        <img className={styles.cartIcon} alt="cart icon" src="https://cdn-icons-png.flaticon.com/128/3144/3144456.png"/>
                        <div className={styles.cartCount}>{cartCount}</div>
                    </div>
                </div>
            </>
        );
    }


export default NavBar;
