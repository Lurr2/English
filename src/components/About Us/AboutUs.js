import React from 'react';
import classes from './AboutUs.module.scss';
import Dawid from '../../img/Dawid.jpg'

const AboutUs = () => {
    return (
        <section className={classes.container}>
            <div className={classes.heading}>
                <h2>Dlaczego my?</h2>
            </div>
            <div className={classes.textBox}>
                <div className={classes.titlePart}>
                    <h2>Odwiedzając tę stronę na pewno chcesz znać biegle angielski, jednak wciąż nie wiesz jak tego dokonać?</h2>
                </div>
                <div>
                    <ul>
                        <li>Masz blokadę językową (stresujesz się na samą myśl przed mówieniem w języku angielskim)?</li>
                        <li>Rozumiesz co czytasz, ale nie potrafisz ułożyć sensownego zdania?</li>
                        <li>Uczysz się tego języka od wielu lat, uczęszczałaś/-łeś do niezliczonej ilości szkół językowych, wydałaś/-łeś mnóstwo pieniędzy na prywatnych nauczycieli i nadal nie widzisz EFEKTÓW?</li>
                        <li>Uważasz, że nie masz talentu?</li>
                        <li>Potrzebujesz poświadczenia swoich umiejętności w pracy, chcesz zdać międzynarodowy certyfikat Cambridge?</li>
                        <li>Masz dość nieefektywnych zajęć w dużych grupach i oczekujesz indywidualnego podejścia?</li>
                        <li>Potrzebujesz szybkich efektów, chcesz poczuć się pewniej podczas podróży za granicę, ale PRZEDE WSZYSTKIM ZNAĆ BIEGLE ANGIELSKI?</li>
                    </ul>
                </div>
                <div>
                    <h2>Być może jesteś rodzicem i chcesz, by Twoje dziecko:</h2>
                </div>
                <div>
                    <ul>
                        <li>wykorzystało potencjał plastycznego, młodego umysłu i mówiło w języku angielskim z brytyjskim akcentem?</li>
                        <li>zdało egzamin ósmoklasisty/maturalny z wysokim wynikiem i dostało się do wymarzonej szkoły?</li>
                        <li>uczyło się w bezstresowej atmosferze, sprzyjającej kreatywności i tym samym osiągnęło wysokie wyniki w nauce?</li>
                        <li>Uważasz, że nie masz talentu?</li>
                        <li>zaczęło mówić po angielsku?</li>
                    </ul>
                </div>
                <div className={classes.description}>
                    <p><img alt="Prowadzący" src={Dawid} />Świetnie się składa, bo dokładnie wiem jak Ci w tym pomóc.
                        Nazywam się Dawid Bielecki i jestem założycielem szkoły językowej „Znać biegle angielski”.
                        Ze mną zacznij mówić biegle po angielsku.
                        Jako zawodowy nauczyciel języka angielskiego mam wieloletnie doświadczenie w nauczaniu dzieci
                        (od 4-klasy szkoły podstawowej, młodzieży szkolnej oraz osób dorosłych na wszystkich poziomach zaawansowania od A1 do C2).
                        Jako jeden z nielicznych osiągnąłem najwyższy poziom języka angielskiego C2, potwierdzony certyfikatem Cambridge  Proficiency C2 (sekcja „speaking” z wynikiem 230/230). Mówię po angielsku z brytyjskim akcentem. Jestem twórcą dwóch autorskich programów: „Mów biegle po angielsku” oraz „Zdaj egzamin na 100%”.
                        Zapoznaj się z ofertą, dobierz zajęcia dla siebie/swojego dziecka i dołącz do grona uczniów „Znać biegle angielski”.

                    </p>
                    <p>Od lat przygotowuje uczniów do:</p>
                    <ul className={classes.ListMargin}>
                        <li>Egzaminów 8-klasisty</li>
                        <li>matury podstawowej</li>
                        <li>Poezji mistrza</li>
                        <li>Egzaminów 8-klasisty</li>
                        <li>Egzaminów 8-klasisty</li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;