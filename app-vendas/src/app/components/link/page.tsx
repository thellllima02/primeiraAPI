import React from "react";
import styles from "./link.module.css";
import NextLink from "next/link";

interface LinkProps {
    href: string;
    label: string;
}

const CustonLink: React.FC<LinkProps> = ({ href, label }) => {
    return (
        <NextLink href={href} className={styles.link}>
            {label}
        </NextLink>
    );
};

export default CustonLink;