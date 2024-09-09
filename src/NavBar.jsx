import React, {Component} from "react";
import styles from "./NavBar.module.css"



class NavBar extends Component {
    render() {
        console.log(this.props);
        const{cartCount} = this.props;
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
}

export default NavBar;
