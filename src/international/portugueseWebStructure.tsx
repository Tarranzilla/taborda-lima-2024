import { WebStructure } from "@/types/WebStructure";

import teamList from "@/content_lists/team_list";
import expertiseList from "@/content_lists/expertise_list";
import bannerList from "@/content_lists/banner_list";
import privacyList from "@/content_lists/privacy_list";
import termsList from "@/content_lists/terms_list";

const portugueseWebStructure: WebStructure = {
    common: {
        customScheduleText: "Agende uma Consulta",
        returnToAreasOfExpertise: "Voltar para Áreas de Atuação",
        customTitle: "Taborda Lima & Advogados Associados | Advocacia e Consultoria",
        customDescription:
            "Escritório de Advocacia de em Curitiba especializado nas áreas do Direito Público, Internacional, Aduaneiro, Empresarial e Civil - com mais de 27 anos de experiência no mercado.",
        customWebsiteURL: "https://www.tabordalima.com",
    },
    navbar: {
        logo: {
            pathURL: "/brand_imgs/Logo_Orange.png",
            title: "Taborda Lima & Advogados Associados",
            width: 100,
            height: 100,
            alt: "Logotipo Taborda Lima & Advogados Associados",
        },

        navLinks: [
            {
                path: "/",
                name: "Início",
            },
            {
                path: "/#quem-somos",
                name: "Sobre",
            },
            {
                path: "/#areas-de-atuacao",
                name: "Áreas de Atuação",
            },
            {
                path: "/#contato",
                name: "Contato",
            },
        ],
    },
    menu: {
        title: "Menu",
        links: [
            {
                path: "/",
                name: "Início",
            },
            {
                path: "/#quem-somos",
                name: "Sobre",
            },
            {
                path: "/#areas-de-atuacao",
                name: "Áreas de Atuação",
            },
            {
                path: "/#contato",
                name: "Contato",
            },
            {
                path: "/privacidade",
                name: "Privacidade",
            },
            {
                path: "/termos-de-uso",
                name: "Termos de Uso",
            },
        ],
    },
    cookies: {
        title: "Cookies",
        paragraphs: [
            "Este site usa cookies para garantir que você obtenha a melhor experiência.",
            "Ao continuar a usar este site, você concorda com o uso de cookies.",
        ],
        btnText: "Entendi",
    },
    privacy: {
        title: "Política de Privacidade",
        paragraphs: privacyList,
    },
    terms: {
        title: "Termos de Uso",
        paragraphs: termsList,
    },
    landingPage: {
        sections: {
            home: {
                key: "inicio",
                title: "Início",

                scheduleBtn: {
                    title: "Agende uma Consulta",
                    label: "Agende uma Consulta",
                },

                bannerList: bannerList,
            },
            about: {
                key: "quem-somos",
                title: "Quem Somos",
                paragraphs: [
                    "O escritório Taborda Lima & Advogados Associados é reconhecido por sua excelência e agilidade na prestação de serviços jurídicos, com uma trajetória de 27 anos dedicados à advocacia.",
                    "Com atuação tanto no Brasil quanto no Exterior, oferecemos um atendimento personalizado e eficiente aos nossos clientes. A atuação de nosso escritório em temas de  Direito Internacional e Imigração tem revelado seu compromisso em bem atender seus clientes, com advogados parceiros em Nova York, Newark, Miami, Orlando, Washington, Londres, Paris, Roma e em várias outras cidades, inclusive na América Latina, possibilitando uma universalidade de relações contratuais, trabalhadas com praticidade e competência.",
                    "Compreendemos que cada caso é único e merece atenção individualizada. Assim, trabalhamos em estreita colaboração com nossos clientes, desenvolvendo estratégias jurídicas sob medida para alcançar os melhores resultados possíveis.",
                    "Nosso compromisso com a excelência e a integridade é essencial em cada aspecto de nosso trabalho. Não apenas defendemos os interesses de nossos clientes de forma vigorosa, mas também o fazemos dentro dos mais altos padrões éticos. Isso garante não apenas resultados satisfatórios, mas também a confiança e a satisfação duradouras daqueles que confiam em nossos serviços.",
                ],
            },

            team: {
                key: "equipe",
                title: "Nossa Equipe",
                members: teamList,
            },

            expertise: {
                key: "areas-de-atuacao",
                title: "Áreas de Atuação",
                expertiseList: expertiseList,
            },

            contact: {
                key: "contato",
                title: "Contato",

                telephone: {
                    title: "Telefone",
                },

                functioningHours: {
                    title: "Horário de Funcionamento",
                    schedule: "Segunda a Sexta: 08:00 - 12:00 | 13:00 - 18:00",
                },

                adress: {
                    key: "endereco",
                    title: "Endereço",
                    adress: "Rua Nilo Peçanha, nº648 Centro Cívico, Curitiba - PR",
                },
            },
        },
    },

    pages: [],
    footer: {
        privacyBtn: {
            title: "Política de Privacidade",
            label: "Política de Privacidade",
        },
        termsBtn: {
            title: "Termos de Uso",
            label: "Termos de Uso",
        },
        langBtn: {
            text: "English",
            label: "Mudar para Inglês",
            availableLangs: ["en", "pt-BR"],
        },
        copyRight: "© 2024 Taborda Lima",

        scheduleBtn: {
            title: "Agende uma Consulta",
            label: "Agende uma Consulta",
        },

        telephoneBtn: {
            title: "Ligue para nós",
            label: "Ligue para nós",
        },

        emailBtn: {
            title: "Envie um Email",
            label: "Envie um Email",
        },
    },
};

export default portugueseWebStructure;
