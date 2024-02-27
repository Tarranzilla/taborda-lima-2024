import Link from "next/link";
import Image from "next/image";

import { useState } from "react";
import { motion as m, AnimatePresence } from "framer-motion";

import { useSimpleTranslation } from "@/international/useSimpleTranslation";
import { useRouter } from "next/router";

export default function Navbar() {
    const router = useRouter();
    const t = useSimpleTranslation();
    const [menuOpen, setMenuOpen] = useState(false);

    const changeLanguage = () => {
        const currentLocale = router.locale;
        const newLocale = currentLocale === "en" ? "pt-BR" : "en";
        const currentPath = router.asPath;
        router.push(currentPath, currentPath, { locale: newLocale });
    };

    return (
        <>
            <div className="Navbar">
                <div className="Navbar_Content">
                    <div className="Logo_Container">
                        <Image className="Logo" src="/brand_imgs/Logo_Orange.png" alt="Logo" width={100} height={100} />
                    </div>

                    <div className="LogoType_Container">
                        <h1 className="Logo_Type">TABORDA LIMA</h1>
                        <div className="Logo_Type_Special_Container">
                            <div className="Logo_Type_Special_Trace"></div>
                            <p className="Logo_Type_Special">&</p>
                            <div className="Logo_Type_Special_Trace"></div>
                        </div>

                        <h2 className="Logo_Type_Subtitle">Advogados Associados</h2>
                    </div>

                    <div className="Navbar_Links Desktop_Only">
                        {t.navbar.navLinks &&
                            t.navbar.navLinks.map((link, index) => {
                                return (
                                    <Link key={index} className="Navbar_Link" href={link.path}>
                                        {link.name}
                                    </Link>
                                );
                            })}
                    </div>

                    <div className="Menu_Container Mobile_Only">
                        <span
                            onClick={() => {
                                setMenuOpen(!menuOpen);
                            }}
                            className="material-icons"
                        >
                            menu_book
                        </span>
                    </div>
                </div>
            </div>

            <AnimatePresence>
                {menuOpen && (
                    <m.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }} className="Menu">
                        <div className="Search_Bar">
                            <input className="Search_Bar_Input" type="text" placeholder="Digite aqui o que busca" />
                            <button className="Search_Bar_Button">
                                <span className="material-icons">search</span>
                            </button>
                        </div>

                        <div className="Menu_Nav">
                            {t.menu.links &&
                                t.menu.links.map((link, index) => {
                                    return (
                                        <Link
                                            key={index}
                                            className=""
                                            href={link.path}
                                            onClick={() => {
                                                setMenuOpen(false);
                                            }}
                                        >
                                            {link.name}
                                        </Link>
                                    );
                                })}
                        </div>

                        <div className="Footer_Btn Lang_Btn" title={t.footer.langBtn?.label} onClick={changeLanguage}>
                            <span className="Footer_Icon material-icons">language</span>
                            <p>{t.footer.langBtn?.label}</p>
                        </div>
                    </m.div>
                )}
            </AnimatePresence>
        </>
    );
}
