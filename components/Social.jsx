import Link from "next/link";
import { FaGithub, FaLinkedinIn, FaYoutube, FaTwitter } from "react-icons/fa";

const socials = [
    { icon: <FaGithub />, path: "https://github.com" },
    { icon: <FaLinkedinIn />, path: "https://linkedin.com" },
    { icon: <FaYoutube />, path: "https://youtube.com" },
    { icon: <FaTwitter />, path: "https://twitter.com" },
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
