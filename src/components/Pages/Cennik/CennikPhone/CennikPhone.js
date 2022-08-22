import React from 'react';
import classes from './CennikPhone.module.scss';

const CennikPhone = () => {
    return (
        <section>
            <div className={classes.container}>
                <table >
                    <tr>
                        <td className={classes.cennik}>Cennik</td>
                        <td className={classes.centerBold}>Zajęcia indywidualne  u nauczyciela lub online w pakiecie miesięcznym (min. 1x/tydz.)</td>
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
                    </tr>
                    <tr>
                        <td><ul className={classes.Bold}>
                            <li>Certyfikaty Cambridge: CPE Cambridge C2 Proficiency, CAE Cambridge C1 Advanced, FCE Cambridge B2 First</li>
                        </ul></td>
                        <td><ul>
                            <li>100zł/45min**</li>
                            <li>120zł/55min**</li>
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
                    </tr>
                </table>

                <table >
                    <tr>
                        <td className={classes.cennik}>Cennik</td>
                        <td className={classes.centerBold}>Zajęcia w grupie 2-3 os. u nauczyciela lub online w pakiecie miesięcznym (min. 1x/tydz.)</td>
                    </tr>
                    <tr>
                        <td><ul className={classes.Bold}>
                            <li>Egzamin ósmoklasisty,</li>
                            <li>Korepetycje szkolne: program szkół - podstawowych (klasy 4-8), średnich (liceum i technikum)</li>
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
                            <li>70zł/55min od os.
                                (grupa 2-os.)
                            </li>
                        </ul></td>
                    </tr>
                    <tr>
                        <td><ul className={classes.Bold}>
                            <li>Certyfikaty Cambridge: CPE Cambridge C2 Proficiency, CAE Cambridge C1 Advanced, FCE Cambridge B2 First</li>
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
                            <li>90zł/55min od os.
                                (grupa 2-os.)
                            </li>
                        </ul></td>
                    </tr>
                </table>
            </div>
        </section>
    );
};

export default CennikPhone;