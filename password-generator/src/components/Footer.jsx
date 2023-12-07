//
//
import { FaGithub } from "react-icons/fa";
// import { FaLinkedin } from "react-icons/fa";

function Footer() {
    return (
        <footer>
            <p>
                <FaGithub /> 
                <a 
                    className="github-link"
                    href="https://github.com/xumed001/password-generator"
                    target="_blank"
                    rel="noreferrer"
                >
                GitHub
                </a>
            </p> 
            {/* <p>
                <FaLinkedin />Linkedin
            </p> */}
        </footer>
    )
}

export default Footer