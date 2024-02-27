import { WebStructure } from "@/types/WebStructure";

import teamList_EN from "@/content_lists/english/team_list_en";
import expertiseList_EN from "@/content_lists/english/expertise_list_en";
import bannerList_EN from "@/content_lists/english/banner_list_en";
import privacyList_EN from "@/content_lists/english/privacy_list_en";
import termsList_EN from "@/content_lists/english/terms_list_en";

const englishWebStructure: WebStructure = {
    common: {
        customScheduleText: "Schedule an Appointment",
        returnToAreasOfExpertise: "Return to Areas of Expertise",
        customTitle: "Taborda Lima & Associates | Advocacy and Legal Consultancy",
        customDescription:
            "Law Firm based in Curitiba specialized in the areas of Public, International, Customs, Business, and Civil Law - with over 27 years of experience in the market.",
        customWebsiteURL: "https://www.tabordalima.com/en",
    },
    navbar: {
        logo: {
            pathURL: "/brand_imgs/Logo_Orange.png",
            title: "Taborda Lima & Associates",
            width: 100,
            height: 100,
            alt: "Logotype Taborda Lima & Associates",
        },

        navLinks: [
            {
                path: "/",
                name: "Home",
            },
            {
                path: "/#quem-somos",
                name: "About Us",
            },
            {
                path: "/#areas-de-atuacao",
                name: "Areas of Expertise",
            },
            {
                path: "/#contato",
                name: "Contact",
            },
        ],
    },
    menu: {
        title: "Menu",
        links: [
            {
                path: "/",
                name: "Home",
            },
            {
                path: "/#quem-somos",
                name: "About Us",
            },
            {
                path: "/#areas-de-atuacao",
                name: "Areas of Expertise",
            },
            {
                path: "/#contato",
                name: "Contact",
            },
            {
                path: "/privacidade",
                name: "Privacy",
            },
            {
                path: "/termos-de-uso",
                name: "Terms of Use",
            },
        ],
    },
    cookies: {
        title: "Cookies",
        paragraphs: [
            "This website use cookies to guarantee that you get the best experience.",
            "By continuing to use this site, you agree to the use of cookies.",
        ],
        btnText: "Understood",
    },
    privacy: {
        title: "Privacy Policy",
        paragraphs: privacyList_EN,
    },
    terms: {
        title: "Terms of Use",
        paragraphs: termsList_EN,
    },
    landingPage: {
        sections: {
            home: {
                key: "inicio",
                title: "Home",

                scheduleBtn: {
                    title: "Schedule an Appointment",
                    label: "Schedule an Appointment",
                },

                bannerList: bannerList_EN,
            },
            about: {
                key: "quem-somos",
                title: "About Us",
                paragraphs: [
                    "Taborda Lima & Associates is recognized for its excellence and agility in providing legal services, with a trajectory of 27 years dedicated to advocacy.",
                    "With operations both in Brazil and abroad, we offer personalized and efficient service to our clients. Our firm's work in the areas of International Law and Immigration demonstrates its commitment to serving its clients well, with partner lawyers in New York, Newark, Miami, Orlando, Washington, London, Paris, Rome, and in several other cities, including in Latin America, enabling a universality of contractual relations, worked with practicality and competence.",
                    "We understand that each case is unique and deserves individual attention. Thus, we work closely with our clients, developing tailor-made legal strategies to achieve the best possible results.",
                    "Our commitment to excellence and integrity is essential in every aspect of our work. We not only vigorously defend the interests of our clients but also do so within the highest ethical standards. This ensures not only satisfactory results but also the lasting trust and satisfaction of those who rely on our services.",
                ],
            },

            team: {
                key: "equipe",
                title: "Our Team",
                members: teamList_EN,
            },

            expertise: {
                key: "areas-de-atuacao",
                title: "Areas of Expertise",
                expertiseList: expertiseList_EN,
            },

            contact: {
                key: "contato",
                title: "Contact",

                telephone: {
                    title: "Telephone",
                },

                functioningHours: {
                    title: "Functioning Hours",
                    schedule: "Monday to Friday: 08:00 - 12:00 | 13:00 - 18:00",
                },

                adress: {
                    key: "endereco",
                    title: "Address",
                    adress: "Rua Nilo Peçanha, nº648 Centro Cívico, Curitiba - PR",
                },
            },
        },
    },

    pages: [],
    footer: {
        privacyBtn: {
            title: "Privacy Policy",
            label: "Privacy Policy",
        },
        termsBtn: {
            title: "Terms of Use",
            label: "Terms of Use",
        },
        langBtn: {
            text: "Português",
            label: "Change to Portuguese",
            availableLangs: ["en", "pt-BR"],
        },
        copyRight: "© 2024 Taborda Lima",

        scheduleBtn: {
            title: "Schedule an Appointment",
            label: "Schedule an Appointment",
        },

        telephoneBtn: {
            title: "Call Us",
            label: "Call us",
        },

        emailBtn: {
            title: "Send us an Email",
            label: "Send us an Email",
        },
    },
};

export default englishWebStructure;
