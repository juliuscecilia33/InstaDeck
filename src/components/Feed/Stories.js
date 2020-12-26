import React from 'react';
import Styles from './Stories.module.scss';
import Soto from '../images/juansotolol.jpg';

export const Stories = () => {
    return (
        <div className={Styles.Stories}>
            <div className={Styles.StoriesList}>
                <div className={Styles.Story}>
                    <img src={Soto} alt="InstaDeck Story" />
                    {/* <p>juansoto</p> */}
                </div>

                <div className={Styles.Story}>
                    <img src={Soto} alt="InstaDeck Story" />
                    {/* <p>juansoto</p> */}
                </div>

                <div className={Styles.Story}>
                    <img src={Soto} alt="InstaDeck Story" />
                    {/* <p>juansoto</p> */}
                </div>

                <div className={Styles.Story}>
                    <img src={Soto} alt="InstaDeck Story" />
                    {/* <p>juansoto</p> */}
                </div>
            </div>

            <div className={Styles.SettingsList}>
                <form className={Styles.SearchBox}>
                    <button><i class="fas fa-search"></i></button>
                    <input type="text" placeholder="Search" />
                </form>

                <div className={Styles.Icons}>
                    <i class="far fa-bell"></i>
                    <i class="fas fa-cog"></i>
                    <i class="far fa-moon"></i>
                </div>
            </div>
        </div>
    )
}
