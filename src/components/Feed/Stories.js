import React from 'react';
import Styles from './Stories.module.scss';
import Soto from '../images/juansotolol.jpg';
import Dabin from '../images/dabin.jpg';
import Fairlane from '../images/fairlane1.jpg';
import Kellenic from '../images/jkellenic.jpg';
import Nurko from '../images/nurko.jpg';
import Illenium from '../images/illenium.jpg';

export const Stories = () => {
    return (
        <div className={Styles.Stories}>
            <div className={Styles.StoriesList}>
                <div className={Styles.Story}>
                    <img src={Soto} alt="InstaDeck Story" />
                    <p>juansoto</p>
                </div>

                <div className={Styles.Story}>
                    <img src={Dabin} alt="InstaDeck Story" />
                    <p>dabinmusic</p>
                </div>

                <div className={Styles.Story}>
                    <img src={Fairlane} alt="InstaDeck Story" />
                    <p>fairlanemusic</p>
                </div>

                <div className={Styles.Story}>
                    <img src={Kellenic} alt="InstaDeck Story" />
                    <p>jarredkelenic</p>
                </div>

                <div className={Styles.Story}>
                    <img src={Nurko} alt="InstaDeck Story" />
                    <p>nurkomusic</p>
                </div>

                <div className={Styles.Story}>
                    <img src={Illenium} alt="InstaDeck Story" />
                    <p>illeniummusic</p>
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
