import React from 'react';
import classes from './AboutUs.module.scss';
import Dawid from '../../img/Dawid.jpg'

const AboutUs = () => {
    return (
        <section className={classes.container}>
            <div className={classes.heading}>
                <h2>Dlaczego „Znać biegle angielski”?</h2>
            </div>
            <div className={classes.textBox}>
                <div className={classes.titlePart}>
                    <h2>Odwiedzając tę stronę na pewno <span className={classes.ItalicBold}>chcesz znać biegle angielski,</span> jednak wciąż nie wiesz jak tego dokonać?</h2>
                </div>
                <div>
                    <ul className={classes.listText}>
                        <li className={classes.listSpacing}><span className={classes.ItalicBold}>Masz blokadę językową </span>(stresujesz się na samą myśl przed mówieniem w języku angielskim)?</li>
                        <li className={classes.listSpacing}>Rozumiesz co czytasz, <span className={classes.ItalicBold}>ale nie potrafisz ułożyć sensownego zdania?</span></li>
                        <li className={classes.listSpacing}>Uczysz się tego języka od wielu lat, uczęszczałaś/-łeś do niezliczonej ilości szkół językowych, wydałaś/-łeś mnóstwo pieniędzy na prywatnych nauczycieli i <span className={classes.ItalicBold}>nadal nie widzisz EFEKTÓW?</span></li>
                        <li className={classes.listSpacing}><span className={classes.ItalicBold}>Uważasz, że nie masz talentu?</span></li>
                        <li className={classes.listSpacing}>Potrzebujesz poświadczenia swoich umiejętności w pracy, <span className={classes.ItalicBold}>chcesz zdać międzynarodowy certyfikat Cambridge?</span></li>
                        <li className={classes.listSpacing}>Masz dość nieefektywnych zajęć w dużych grupach i <span className={classes.ItalicBold}>oczekujesz indywidualnego podejścia?</span></li>
                        <li className={classes.listSpacing}><span className={classes.ItalicBold}>Potrzebujesz szybkich efektów,</span> chcesz poczuć się pewniej podczas podróży za granicę, ale <span className={classes.ItalicBold}>PRZEDE WSZYSTKIM ZNAĆ BIEGLE ANGIELSKI?</span></li>
                    </ul>
                </div>
                <div className={classes.titlePart}>
                    <h2>Być może <span className={classes.ItalicBold}>jesteś rodzicem i chcesz, by Twoje dziecko:</span></h2>
                </div>
                <div className={classes.listText}>
                    <ul>
                        <li className={classes.listSpacing}>wykorzystało potencjał plastycznego, młodego umysłu i <span className={classes.ItalicBold}>mówiło w języku angielskim z brytyjskim akcentem?</span></li>
                        <li className={classes.listSpacing}><span className={classes.ItalicBold}>zdało egzamin ósmoklasisty/maturalny</span> z wysokim wynikiem i dostało się do wymarzonej szkoły?</li>
                        <li className={classes.listSpacing}>uczyło się w bezstresowej atmosferze, sprzyjającej kreatywności i tym samym <span className={classes.ItalicBold}>osiągnęło wysokie wyniki w nauce?</span></li>
                        <li className={classes.listSpacing}><span className={classes.ItalicBold}>zaczęło mówić po angielsku?</span></li>
                    </ul>
                </div>
                <div className={classes.description}>
                    <p><img alt="Prowadzący" src={Dawid} />Świetnie się składa, bo dokładnie wiem jak Ci w tym pomóc.
                        Nazywam się Dawid Bielecki i jestem założycielem szkoły językowej „Znać biegle angielski”.
                        Ze mną zacznij mówić biegle po angielsku.
                        Jako zawodowy nauczyciel języka angielskiego mam wieloletnie doświadczenie w nauczaniu dzieci
                        (od 4-klasy szkoły podstawowej, młodzieży szkolnej oraz osób dorosłych na <span className={classes.ItalicBold}>wszystkich poziomach zaawansowania od A1 do C2</span>).
                    </p>
                    <p>
                        Jako jeden z nielicznych <span className={classes.ItalicBold}>osiągnąłem najwyższy poziom języka angielskiego C2,</span> potwierdzony certyfikatem Cambridge  Proficiency C2 (sekcja „speaking” z wynikiem 230/230). Mówię po angielsku z brytyjskim akcentem. Jestem twórcą dwóch autorskich programów: „<span className={classes.ItalicBold}>Mów biegle po angielsku</span>” oraz „<span className={classes.ItalicBold}>Zdaj egzamin na 100%</span>”.
                    </p>
                    <p>
                        <span className={classes.ItalicBold}>Zapoznaj się z ofertą,</span> dobierz zajęcia dla siebie/swojego dziecka i dołącz do grona uczniów „Znać biegle angielski”.
                    </p>

                </div>
            </div>
        </section>
    );
};

export default AboutUs;