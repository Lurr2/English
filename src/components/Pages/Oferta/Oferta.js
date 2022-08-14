import React from 'react';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';
import classes from './Oferta.module.scss';
import UpSpace from '../../Header/UpSpace';


const Oferta = () => {
    return (
        <section>
        <UpSpace />
            <Header />
            <div className={classes.container}>
            <div className={classes.textSize}>
                <div className={classes.TitlePart}>
                    <h2>„Mów biegle po angielsku”</h2>
                </div>
                <div className={classes.description}>
                    <p className={classes.text}>
                        Zajęcia konwersacyjne dla osób, które chcą <span className={classes.BoldItalic}>w szybki i skuteczny sposób nauczyć się używać języka angielskiego w praktyce. </span>
                        Profesjonalny <span className={classes.BoldItalic}>trening mówienia po angielsku</span> bazujący na żywym języku.
                        Zajęcia oparte są na angażujących anglojęzycznych materiałach dydaktycznych tj. filmy Youtube, artykuły, prasa, wysyłanych przed zajęciami.
                    </p>
                </div>
                <div className={classes.ListPart}>
                    <p className={classes.gain}>Co zyskujesz?</p>
                    <ul>
                        <li>przełamanie bariery językowej,</li>
                        <li>wejście na wyższy poziom znajomości języka angielskiego,</li>
                        <li>poszerzenie słownictwa i poprawa płynności mówienia,</li>
                        <li>eliminacja błędów w wymowie,</li>
                        <li>poznanie gramatyki na praktycznych przykładach,</li>
                        <li>maksimum mówienia na zajęciach,</li>
                        <li>przejrzyste notatki w jednym miejscu na dysku Google Drive.</li>
                    </ul>
                </div>
                <div className={classes.TitlePart}>
                    <h2>„Zdaj egzamin na 100%”</h2>
                </div>
                <div className={classes.description}>
                    <p className={classes.text}>
                        Zajęcia przygotowujące do <span className={classes.BoldItalic}>egzaminu ósmoklasisty, matury podstawowej i rozszerzonej, certyfikatów Cambridge</span> (B2 First, C1 Advanced, C2 Proficiency).
                    </p>
                </div>
                <div className={classes.ListPart}>
                    <p>Czy wiesz, że <span className={classes.BoldItalic}>średnie wyniki moich uczniów <span className={classes.BoldItalic}>regularnie</span> uczęszczających na zajęcia</span> to:</p>
                    <ul>
                        <li>egzamin ósmoklasisty: 96%,</li>
                        <li>matura podstawowa: 94%,</li>
                        <li>matura rozszerzona: 88%,</li>
                        <li>certyfikaty Cambridge (B2 First, C1 Advanced, C2 Proficiency): 100% - zdawalność.</li>
                    </ul>
                    <p className={classes.gain}>Co zyskujesz?</p>
                    <ul>
                        <li>100% zdawalność egzaminów,,</li>
                        <li>wsparcie doświadczonego nauczyciela,</li>
                        <li>ćwiczenia na arkuszach egzaminacyjnych,</li>
                        <li>nabycie płynności w mówieniu po angielsku,</li>
                        <li>indywidualne podejście,</li>
                        <li>poprawna nauka wymowy oraz struktur leksykalno-gramatycznych,</li>
                        <li>wiedza przekazywana w prosty i przejrzysty sposób,</li>
                        <li>przejrzyste notatki w jednym miejscu na dysku Google Drive.</li>
                    </ul>
                </div>
                <div className={classes.TitlePart}>
                    <h2>Korepetycje szkolne</h2>
                </div>
                <div className={classes.description}>
                    <p className={classes.text}>
                    Korepetycje szkolne<span className={classes.BoldItalic}> dla uczniów szkół podstawowych klas 4-8, młodzieży szkół średnich,</span>
                    przygotowujące do egzaminów końcowych oraz <span className={classes.BoldItalic}>rozwijające wszystkie umiejętności językowe tj. mówienie, słuchanie, czytanie i pisanie.</span>
                    </p>
                    <p className={classes.text + ' ' + classes.space}>
                    <span className={classes.BoldItalic}>Drogi Rodzicu,</span> wykorzystaj potencjał młodego umysłu swojego dziecka, <span className={classes.BoldItalic}>by uczyło się tak, jak lubi to jego mózg.</span> 
                    Daj mu szansę na biegłą znajomość języka angielskiego, mówienie po angielsku z brytyjskim akcentem oraz <span className={classes.BoldItalic}>solidne przygotowanie się do egzaminu na 100%.</span> 
                    Jego sukces jest w Twoich rękach, zapewnij mu lepszą przyszłość.  
                    </p>
                </div>
                <div className={classes.ListPart}>
                <p className={classes.gain}>Co zyskujesz?</p>
                    <ul>
                        <li>nauka poprawnej brytyjskiej wymowy,</li>
                        <li>płynne mówienie pełnymi zdaniami,</li>
                        <li>poszerzenie zasobu słownictwa,</li>
                        <li>łatwe zapamiętywanie, dzięki metodom neurolingwistycznym, mnemotechnikom oraz aktywnemu powtarzaniu, </li>
                        <li>nauka gramatyki w aktywny sposób,</li>
                        <li>wsparcie doświadczonego nauczyciela,</li>
                        <li>kreatywne zajęcia w bezstresowej atmosferze,</li>
                        <li>pomoc uczniom mającym problemy z przyswajaniem materiału szkolnego,</li>
                        <li>poprawa ocen w szkole,</li>
                        <li>szybkie postępy i indywidualne podejście.</li>
                    </ul>
                </div>
                <div className={classes.TitlePart}>
                    <h2>Business English</h2>
                </div>
                <div className={classes.description}>
                    <p className={classes.text}>
                    Zajęcia konwersacyjne na tematy biznesowe <span className={classes.BoldItalic}>dla osób pracujących w środowisku międzynarodowym,</span> chcących rozwinąć swoje kompetencje w zakresie języka angielskiego.  
                    <span className={classes.BoldItalic}> Posiadające fundamenty języka angielskiego, którym zależy na uzyskaniu biegłości w mówieniu.</span>
                    </p>

                    <p className={classes.Bold + ' ' + classes.space}>
                    A może dopiero zaczynasz swoją karierę zawodową i chcesz dostać pracę w międzynarodowej korporacji? 
                    </p>
                    <p className={classes.Bold + ' ' + classes.space}>
                    Chcesz zaskoczyć swoich partnerów biznesowych profesjonalnym, płynnym angielskim? 
                    </p>
                    <p className={classes.text + ' ' + classes.space}>
                    Dzięki tym zajęciom <span className={classes.BoldItalic}>poznasz żywy język,</span> używany w codziennej komunikacji biznesowej, <span className={classes.BoldItalic}>zaczniesz mówić w pracy pewnie i bez stresu.</span> 
                    Wejdź na wyższy poziom języka angielskiego i wykorzystaj go do osiągnięcia własnych celów. 
                    </p>
                </div>
                <div className={classes.ListPart}>
                   <p className={classes.gain}>Co zyskujesz?</p>
                    <ul>
                        <li>zajęcia oparte na ciekawych tematach ze świata biznesu, prasy anglojęzycznej (The Guardian, The Economist, Harvard Business Review etc.) podcasty, filmiki YouTube,</li>
                        <li>zajęcia przystosowane do Twoich potrzeb (Ty decydujesz, jakie tematy będą poruszane podczas konwersacji),</li>
                        <li>immersja językowa – otoczenie się żywym językiem, poprzez specjalnie wyselekcjonowane materiały do nauki w zaciszu domowym, omawiane później na zajęciach,</li>
                        <li>przygotowanie do rozmowy kwalifikacyjnej, </li>
                        <li>poprawa płynności wypowiedzi, nabycie pewności siebie w mówieniu po angielsku,</li>
                        <li>nauka poprawnej wymowy,</li>
                        <li>eliminacja błędów gramatycznych i leksykalnych, nauka gramatyki na ciekawych przykładach,</li>
                        <li>przejrzyste notatki w jednym miejscu na dysku Google Drive,</li>
                        <li>dla osób od poziomu B1+ zajęcia prowadzone w 100% po angielsku.</li>
                    </ul>
                </div>
                </div>
            </div>
            <Footer />
        </section>
    );
}



export default Oferta;