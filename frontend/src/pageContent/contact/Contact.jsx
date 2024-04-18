import "./Contact.css";
import mail from "../../assets/img/mail-white.png";
import phone from "../../assets/img/phone-white.png";
import address from "../../assets/img/location-white.png";
import linkedInLogo from "../../assets/img/linkedin-logo.png";
import xingLogo from "../../assets/img/xing-logo.png";
import githubLogo from "../../assets/img/github-logo.png";
import discordLogo from "../../assets/img/discord-logo.png";

const Contact = () => {
    return (
        <>
            <div className="container-full-width bg-beige mt-11 pb-5" id="contact">
                <div className="row">
                    <h2 className="pt-5">Kontakt</h2>
                </div>
            </div>

            <div className="row mx-auto px-center-default my-5 align-items-center ">
                <div className="col">
                    <div class="card flex-row rounded-4 align-items-center my-4 hover-scale">
                        <div className="container rounded-end-0 rounded-4 p-3" id="iconContainerMail">
                            <img src={mail} class="card-img-top" alt="E-Mail" />
                        </div>

                        <div class="card-body">
                            <a href="mailto:m.heusinger@hotmail.de" className="card-text text-decoration-none">m.heusinger@hotmail.de</a>
                        </div>
                    </div>

                    {/* Phone */}
                    <div class="card flex-row rounded-4 align-items-center my-4 hover-scale">
                        <div className="container rounded-end-0 rounded-4 p-3" id="iconContainerPhone">
                            <img src={phone} class="card-img-top" alt="Telefonnummer" />
                        </div>

                        <div class="card-body">
                            <a href="tel:+4921666746052" className="card-text text-decoration-none">02166 67 46 052</a>
                        </div>
                    </div>
                    {/* Address */}
                    <div class="card flex-row rounded-4 align-items-center my-4 hover-scale">
                        <div className="container rounded-end-0 rounded-4 p-3" id="iconContainerPhone">
                            <img src={address} class="card-img-top" alt="Telefonnummer" />
                        </div>

                        <div class="card-body">
                            <a href="https://maps.app.goo.gl/ZgHcsctQCgcqhg597" className="card-text text-decoration-none" target="_blank">Weizenkamp 5, Mönchengladbach</a>
                        </div>
                    </div>

                </div>
                <div className="col">
<<<<<<< HEAD
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d160121.38735434876!2d6.249005134050994!3d51.16569422364861!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b8ac984c406469%3A0x5445cd8ac7bfc850!2sM%C3%B6nchengladbach!5e0!3m2!1sde!2sde!4v1713297680746!5m2!1sde!2sde" width="400" height="300" allowfullscreen="" loading="lazy" className="map-sm" referrerpolicy="no-referrer-when-downgrade"></iframe>
=======
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d160121.38735434876!2d6.249005134050994!3d51.16569422364861!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b8ac984c406469%3A0x5445cd8ac7bfc850!2sM%C3%B6nchengladbach!5e0!3m2!1sde!2sde!4v1713297680746!5m2!1sde!2sde" width="400" height="300" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className="map-size-sm"></iframe>
>>>>>>> 95c24a40709b70c7d6496b7f360ef8ecdf3b7d40
                </div>
            </div>
            <div className="row mx-auto my-5 align-items-center social-icon-container px-md-4">
                {/* LinkedIn */}
                <div className="col">
                    <a href="https://linkedin.com/in/m-heusinger" target="_blank" ><img src={linkedInLogo} class="social-icon logo-sm" alt="LinkedIn" /></a>
                </div>
                {/* Xing */}
                <div className="col">
                    <a href="https://www.xing.com/profile/Monique_Heusinger" target="_blank"><img src={xingLogo} class="social-icon  logo-sm" alt="Xing" /></a>
                </div>
                {/* Github */}
                <div className="col">
                    <a href="https://github.com/MoniqueHeusinger" target="_blank"><img src={githubLogo} class="social-icon logo-sm" alt="Github" /></a>
                </div>
                {/* Discord */}
                <div className="col">
                    <a href="discordapp.com/users/moniqueheusinger" target="_blank"><img src={discordLogo} class="social-icon logo-sm" alt="Discord" /></a>

                </div>
            </div>

        </>
    );
}

export default Contact;