import React, {useEffect, useRef} from 'react'
import Instagram from './../images/Icons/instagram_white.png'
import GitHub from './../images/Icons/github_white.png'

export default function Footer() {
    const instagram = useRef();
    const github = useRef();

    // On page load, add event listeners to the social links 
    useEffect(() => {
        instagram.current.addEventListener("click", () => {
            window.open("https://www.instagram.com/larry_larriee/");
        });

        github.current.addEventListener("click", () => {
            window.open("https://github.com/Larry-Larriee");
        });
    }, []);


    return (
        <>
            <div className="footer">

                <article className="footer-logo"><h1>Pricingly</h1></article>
                <article className="footer-motto">
                    <h1>Product Calculatation Reimagined.</h1>

                    <div className="footer-motto-img">
                        <img ref={instagram} alt="github socials" src={GitHub} draggable="false" />
                        <img ref={github} alt="instagram socials" src={Instagram} draggable="false" />
                    </div>    
                </article>
                
                <article className="footer-navigation">
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="/calculate">Calculate</a></li>
                    </ul>
                </article>
            </div>

            <section className="copyright">
                    <a href="https://github.com/Larry-Larriee" rel="noopener noreferrer" target="_blank">©Larry Le 2023 Under MIT Licensing</a>
            </section>
        </>
  )
}
