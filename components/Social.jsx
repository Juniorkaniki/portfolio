import Link from "next/link";
import { FaGithub, FaLinkedinIn, FaInstagram, FaTwitter } from "react-icons/fa";

const socials = [
    { icon: <FaGithub />, path: "https://github.com/Juniorkaniki" },
    { icon: <FaLinkedinIn />, path: "https://www.linkedin.com/in/junior-kaniki-99ba1a2ba/" },
    { icon: <FaInstagram />, path: "https://youtube.com" },
    { icon: <FaTwitter />, path: "https://x.com/JuniorKani35733" },
];

const Social = ({ containerStyles, iconStyles }) => {
    return (
        <div className={containerStyles}>
            {socials.map((item, index) => {
                const href = item.path || "#";  // Utilisez "#" comme valeur par défaut si `path` est vide ou undefined
                return (
                    <Link key={index} href={href} className={iconStyles} target="_blank" rel="noopener noreferrer">
                        {item.icon}
                    </Link>
                );
            })}
        </div>
    );
};

export default Social;
