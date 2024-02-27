import { Expertise } from "@/types/Expertise";

export const expertiseList: Expertise[] = [
    {
        key: "direito_publico_interno",
        title: "Direito Público Interno",
        description: "Atuação em questões administrativas e legais envolvendo o setor público.",
        metadescription:
            "Consultoria e representação em licitações, defesa em ações de improbidade administrativa, direito do administrador público, entre outros.",
        imgSrc: "/expertise_imgs/direito_publico_001.png",
        size: {
            width: 740,
            height: 420,
        },
        pageLink: "/expertise/direito_publico_interno",
        subitems: [
            {
                key: "licitacoes",
                title: "Licitações",
                description: "Consultoria e representação em processos licitatórios, tanto administrativos quanto judiciais.",
            },
            {
                key: "terceiro_setor",
                title: "Terceiro Setor",
                description: "Consultoria e representação de entidades do terceiro setor em questões legais e administrativas.",
            },
            {
                key: "improbidade_administrativa",
                title: "Improbidade Administrativa",
                description: "Defesa em ações relacionadas a atos de improbidade administrativa.",
            },
            {
                key: "direito_administrador_publico",
                title: "Direito do Administrador Público",
                description: "Assessoria jurídica voltada para os gestores públicos em suas atribuições e responsabilidades.",
            },
            {
                key: "parcerias_publico_privadas",
                title: "Parcerias Público-privadas",
                description: "Consultoria e representação em contratos e projetos de parcerias entre entidades públicas e privadas.",
            },
            {
                key: "processo_administrativo_disciplinar",
                title: "Processo Administrativo Disciplinar",
                description: "Defesa em processos disciplinares instaurados contra servidores públicos.",
            },
            {
                key: "servidor_publico",
                title: "Servidor Público",
                description: "Assessoria jurídica aos servidores públicos em questões funcionais e disciplinares.",
            },
            {
                key: "agencias_reguladoras",
                title: "Agências Reguladoras",
                description: "Consultoria e representação em questões regulatórias perante agências governamentais.",
            },
            {
                key: "contratos_publicos",
                title: "Contratos Públicos",
                description: "Elaboração, revisão e negociação de contratos envolvendo órgãos e entidades públicas.",
            },
            {
                key: "pareceres",
                title: "Elaboração de Pareceres",
                description: "Emissão de pareceres jurídicos em questões relacionadas ao direito público.",
            },
        ],
    },
    {
        key: "direito_internacional",
        title: "Direito Internacional",
        description: "Atuação em questões legais envolvendo relações internacionais.",
        metadescription:
            "Consultoria e representação em questões de imigração, aquisição de propriedades no exterior, abertura de empresas internacionais, entre outros.",
        imgSrc: "/expertise_imgs/direito_internacional_001.png",
        size: {
            width: 740,
            height: 420,
        },
        pageLink: "/expertise/direito_internacional",
        subitems: [
            {
                key: "aquisicao_vistos",
                title: "Aquisição de Vistos",
                description: "Assessoria jurídica na obtenção de vistos para entrada e permanência em outros países.",
            },
            {
                key: "conare",
                title: "Atuação junto ao CONARE",
                description: "Representação legal perante o Comitê Nacional para os Refugiados em questões de refúgio e asilo.",
            },
            {
                key: "propriedades_exterior",
                title: "Aquisição de Propriedades no Exterior",
                description: "Consultoria e representação na compra e venda de imóveis em território estrangeiro.",
            },
            {
                key: "abertura_empresas_exterior",
                title: "Abertura de Empresas no Exterior",
                description: "Assessoria jurídica na constituição e registro de empresas em outros países.",
            },
            {
                key: "offshores",
                title: "Offshores",
                description: "Consultoria e representação em questões legais relacionadas à constituição e operação de offshores.",
            },
            {
                key: "imigracao",
                title: "Auxílio e Consultoria em Imigração",
                description: "Assessoria jurídica em processos de imigração, residência permanente e naturalização.",
            },
            {
                key: "arbitragem_internacional",
                title: "Arbitragem Internacional",
                description: "Representação em litígios internacionais por meio de arbitragem.",
            },
        ],
    },
    {
        key: "direito_aduaneiro_empresarial_tributario",
        title: "Direito Empresarial e Tributário",
        description: "Atuação em questões legais relacionadas a comércio exterior, empresas e tributos.",
        metadescription: "Consultoria e representação em operações de comércio exterior, fusões e aquisições, planejamento tributário, entre outros.",
        imgSrc: "/expertise_imgs/direito_tributario_001.png",
        size: {
            width: 740,
            height: 420,
        },
        pageLink: "/expertise/direito_aduaneiro_empresarial_tributario",
        subitems: [
            {
                key: "comercio_exterior",
                title: "Auxílio e Consultoria em Operações de Comércio Exterior",
                description: "Assessoria jurídica em importações, exportações e outras transações comerciais internacionais.",
            },
            {
                key: "fusoes_aquisicoes",
                title: "Fusões e Aquisições Empresariais",
                description: "Consultoria e representação em processos de fusão, aquisição e incorporação de empresas.",
            },
            {
                key: "acoes_antitruste",
                title: "Ações Antitruste",
                description: "Defesa em processos administrativos e judiciais relacionados à concorrência desleal e práticas antitruste.",
            },
            {
                key: "falencias_recuperacao_judicial",
                title: "Falências e Recuperação Judicial",
                description: "Assessoria jurídica em processos de falência, recuperação judicial e extrajudicial.",
            },
            {
                key: "planejamento_tributario",
                title: "Planejamento Tributário",
                description: "Elaboração de estratégias para redução da carga tributária de empresas.",
            },
            {
                key: "contencioso_tributario",
                title: "Contencioso Tributário",
                description: "Defesa em processos administrativos e judiciais relacionados a questões fiscais.",
            },
            {
                key: "liberacao_mercadorias",
                title: "Liberação de Mercadorias",
                description: "Assessoria jurídica em procedimentos de liberação de mercadorias junto à Receita Federal.",
            },
            {
                key: "procedimentos_administrativos_receita_federal",
                title: "Defesa em Procedimentos Administrativos junto à Receita Federal",
                description: "Representação em processos administrativos tributários perante a Receita Federal do Brasil.",
            },
            {
                key: "pareceres_tributarios",
                title: "Elaboração de Pareceres Tributários",
                description: "Emissão de pareceres jurídicos em questões relacionadas ao direito tributário.",
            },
        ],
    },
    {
        key: "direito_civil",
        title: "Direito Civil",
        description: "Atuação em questões legais envolvendo relações civis e patrimoniais.",
        metadescription: "Consultoria e representação em arbitragem, direito bancário, direito do consumidor, direito contratual, entre outros.",
        imgSrc: "/expertise_imgs/direito_civil_001.png",
        size: {
            width: 740,
            height: 420,
        },
        pageLink: "/expertise/direito_civil",
        subitems: [
            {
                key: "arbitragem_mediacao",
                title: "Arbitragem e Mediação",
                description: "Representação em processos de resolução alternativa de disputas.",
            },
            {
                key: "direito_bancario",
                title: "Direito Bancário",
                description: "Consultoria e representação em questões relacionadas a instituições financeiras e serviços bancários.",
            },
            {
                key: "direito_consumidor",
                title: "Direito do Consumidor",
                description: "Assessoria jurídica em conflitos de consumo e defesa dos direitos dos consumidores.",
            },
            {
                key: "direito_contratual",
                title: "Direito Contratual",
                description: "Elaboração, revisão e negociação de contratos civis e comerciais.",
            },
            {
                key: "direito_imobiliario",
                title: "Direito Imobiliário",
                description: "Consultoria e representação em questões relacionadas a bens imóveis.",
            },
            {
                key: "direito_familia_sucessoes",
                title: "Direito de Família e Sucessões",
                description: "Assessoria jurídica em questões familiares, como divórcio, guarda de filhos, inventário, entre outros.",
            },
            {
                key: "direito_propriedade_intelectual",
                title: "Direito da Propriedade Intelectual",
                description: "Consultoria e representação em questões de propriedade intelectual, como patentes, marcas e direitos autorais.",
            },
        ],
    },
];

export default expertiseList;
