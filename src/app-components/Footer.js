import React, {useEffect, useRef} from 'react'
import Instagram from './../images/Icons/instagram_white.png'
import GitHub from './../images/Icons/github_white.png'

export default function Footer() {
    const instagram = useRef();
    const github = useRef();

    // On page load, add event listeners to the social links 
    useEffect(() => {
        const cleanupInstagram = instagram.current;
        const cleanupGithub = github.current;

        const handleInstagram = (event) => {
            window.open("https://www.instagram.com/larry_larriee/");
        }

        const handleGithub = (event) => {
            window.open("https://github.com/Larry-Larriee/");
        }
    
        cleanupInstagram.addEventListener("click", handleInstagram);
        cleanupGithub.addEventListener("click", handleGithub);
            
        // Remove previous event listeners on page unmount (when page renders for the first time)
        return () =>{
            cleanupInstagram.removeEventListener("click", handleInstagram);
            cleanupGithub.removeEventListener("click", handleGithub);
        }
    }, []);


    return (
        <>
            <div className="footer">

                <article className="footer-logo"><h1>Pricingly</h1></article>
                <article className="footer-motto">
                    <h1>Product Calculatation Reimagined.</h1>

                    <div className="footer-motto-img">
                        <img ref={github} alt="github socials" src={GitHub} draggable="false" />
                        <img ref={instagram} alt="instagram socials" src={Instagram} draggable="false" />
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
