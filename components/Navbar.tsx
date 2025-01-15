'use client';

import Image from 'next/image';
import {motion} from 'framer-motion';
import styles from "../styles";
import {navVariants} from "@/utils/motion";
import { cn } from "@/utils/lib";
import search from "../../metaverse/public/search.svg";
import menu from "../../metaverse/public/menu.svg";

const Navbar = () => {
    return (
        <nav className={`${styles.xPaddings} py-8 relative`}>
            <motion.div
                variants={navVariants}
                initial="hidden"
                whileInView="show"
                viewport={{once: true, amount: 0.2}}
                className={cn('absolute w-[50%] inset-0 gradient-01')}
            />

            <motion.div
                variants={navVariants}
                initial="hidden"
                whileInView="show"
                className={`${styles.innerWidth} mx-auto flex justify-between gap-8`}
            />

            <Image
                src={search}
                alt="search-Icon"
                className="w-[24px] h-[24px] object-contain"
            />

            <h2 className="font-extrabold text-[24px] leading-[30px] text-white ">
                META VERSE
            </h2>

            <Image
                src={menu}
                alt="menu-Icon"
                className="w-[24px] h-[24px] object-contain"
            />

        </nav>
    )
}

export default Navbar;