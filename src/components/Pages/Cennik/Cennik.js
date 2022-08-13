import React from 'react';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';
import classes from './Cennik.module.scss';
const Cennik = () => {
    return (
        <section>
            <Header />
            <div className={classes.container}>
                <table>
                    <tr className={classes.centerBold}>
                        <td className={classes.cennik}>Cennik</td>
                        <td >Zajęcia indywidualne  u nauczyciela lub online w pakiecie miesięcznym (min. 1x/tydz.)</td>
                        <td >Zajęcia w grupie 2-3 os. u nauczyciela lub online w pakiecie miesięcznym (min. 1x/tydz.)</td>
                    </tr>
                    <tr>
                        <td><ul className={classes.Bold}>
                            <li>Egzamin ósmoklasisty,</li>
                            <li>Korepetycje szkolne: program szkół - podstawowych (klasy 4-8), średnich (liceum i technikum)</li>
                        </ul></td>
                        <td><ul>
                            <li>85zł/45min*</li>
                            <li>95zł/55min*</li>
                        </ul></td>
                        <td><ul>
                            <li>70zł/55min od os.
                                (grupa 2-os.)
                            </li>
                            <li>60zł/55min od os.
                                (grupa 3-os.)
                            </li>
                        </ul></td>
                    </tr>
                    <tr>
                        <td><ul className={classes.Bold}>
                            <li>Konwersacje(„Mów biegle po angielsku”),</li>
                            <li>Matura podstawowa i rozszerzona</li>
                        </ul></td>
                        <td><ul>
                            <li>95zł/45min**</li>
                            <li>115zł/55min**</li>
                        </ul></td>
                        <td><ul>
                            <li>70zł/55min od os.
                                (grupa 2-os.)
                            </li>
                        </ul></td>
                    </tr>
                    <tr>
                        <td><ul className={classes.Bold}>
                            <li>Certyfikaty Cambridge: CPE Cambridge C2 Proficiency, CAE Cambridge C1 Advanced, FCE Cambridge B2 First, Business English</li>
                        </ul></td>
                        <td><ul>
                            <li>100zł/45min**</li>
                            <li>120zł/55min**</li>
                        </ul></td>
                        <td><ul>
                            <li>80zł/55min od os.
                                (grupa 2-os.)
                            </li>
                        </ul></td>
                    </tr>
                    <tr>
                        <td><ul className={classes.Bold}>
                            <li>Business English</li>
                        </ul></td>
                        <td><ul>
                            <li>120zł/45min**</li>
                            <li>140zł/55min**</li>
                        </ul></td>
                        <td><ul>
                            <li>90zł/55min od os.
                                (grupa 2-os.)
                            </li>
                        </ul></td>
                    </tr>
                </table>

            </div>
            <div className={classes.textContainer}>
                <p>Rabat - 5zł na każde zajęcia indywidualne dla ucznia uczęszczającego na zajęcia 2x/tydz.</p>
                <p>** Rabat - 5zł na każde zajęcia indywidualne dla ucznia zapisującego się na zajęcia w godzinach 7:00-11:00</p>
                <p>*** Rabaty nie łączą się ze sobą</p>
                <p>Możliwość wystawienia faktury (bez VAT) za zajęcia. </p>
            </div>
            <Footer />
        </section>
    );
};

export default Cennik;