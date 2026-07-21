export default {
  global: {
    Name: 'Marco normativo y gestión de riesgos',
    Description:
      'El componente formativo presenta los fundamentos de la seguridad privada, los marcos normativos nacionales e internacionales, la Seguridad y Salud en el Trabajo, la gestión del riesgo y las emergencias. Explica modalidades de vigilancia, identificación y valoración de riesgos, protección de activos, continuidad operativa, manejo de crisis y cumplimiento legal, destacando la prevención, mejora continua y protección de personas, bienes e información.',
    imagenBannerPrincipal: '@/assets/curso/portada/banner-principal.png',
    fondoBannerPrincipal: '@/assets/curso/portada/fondo-banner-principal.png',
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-1.png',
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-2.png',
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Marcos de referencia',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Tipos de marcos de referencia',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Marco normativo para la tecnología en seguridad privada',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Derecho laboral',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Vigilancia y seguridad privada',
            hash: 't_1_4',
          },
          {
            numero: '1.5',
            titulo: 'Gestión del riesgo',
            hash: 't_1_5',
          },
          {
            numero: '1.6',
            titulo: 'Propiedad horizontal y gestión de aglomeraciones',
            hash: 't_1_6',
          },
          {
            numero: '1.7',
            titulo: 'Protección de datos y responsabilidad',
            hash: 't_1_7',
          },
          {
            numero: '1.8',
            titulo: 'Medios tecnológicos y estándares técnicos',
            hash: 't_1_8',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Seguridad y gestión del riesgo',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Concepto de seguridad privada',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Seguridad y Salud en el Trabajo (SST)',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: '¿Qué es el riesgo laboral?',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Gestión de riesgos y emergencias',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Identificación de activos y amenazas',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Gestión de riesgos',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Técnicas de clasificación y valoración de riesgos',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Pasos para gestionar los riesgos',
            hash: 't_3_4',
          },
          {
            numero: '3.5',
            titulo: 'Verificación de riesgos',
            hash: 't_3_5',
          },
          {
            numero: '3.6',
            titulo: 'Autocontrol y manejo de crisis',
            hash: 't_3_6',
          },
          {
            numero: '3.7',
            titulo: 'Concepto de eventos y situaciones de emergencia',
            hash: 't_3_7',
          },
          {
            numero: '3.8',
            titulo: 'Plan de emergencias',
            hash: 't_3_8',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Área técnica',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Capacidades cognitivas aplicadas a la vigilancia',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Importancia en la vigilancia y el monitoreo',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Recomendaciones operativas',
            hash: 't_4_3',
          },
          {
            numero: '4.4',
            titulo: 'Técnicas de observación',
            hash: 't_4_4',
          },
          {
            numero: '4.5',
            titulo: 'Procedimientos para la verificación de alarmas',
            hash: 't_4_5',
          },
          {
            numero: '4.6',
            titulo: 'Técnicas para mejorar la objetividad en la observación',
            hash: 't_4_6',
          },
          {
            numero: '4.7',
            titulo: 'Procedimientos de observación',
            hash: 't_4_7',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  glosario: [
    {
      termino: 'Continuidad del negocio',
      significado:
        'capacidad de una organización para mantener o restablecer sus procesos esenciales después de una interrupción o emergencia.',
    },
    {
      termino: 'Gestión del riesgo',
      significado:
        'proceso sistemático para identificar, analizar, evaluar y tratar los riesgos que pueden afectar una organización o sus operaciones.',
    },
    {
      termino: 'Marco normativo',
      significado:
        'conjunto de leyes, decretos, resoluciones, normas técnicas y estándares que regulan una actividad o sector específico.',
    },
    {
      termino: 'Peligro',
      significado:
        'fuente, situación o condición con potencial de causar daños a las personas, los bienes, el ambiente o los procesos.',
    },
    {
      termino: 'Plan de emergencias',
      significado:
        'documento que establece los procedimientos, recursos y responsabilidades para responder de manera organizada ante situaciones de emergencia.',
    },
    {
      termino: 'Protección de datos personales',
      significado:
        'conjunto de principios y medidas que garantizan el tratamiento adecuado, seguro y legal de la información personal.',
    },
    {
      termino: 'Riesgo',
      significado:
        'combinación de la probabilidad de que ocurra un evento y las consecuencias que este puede generar.',
    },
    {
      termino: 'Seguridad privada',
      significado:
        'conjunto de servicios orientados a proteger personas, bienes e información mediante medidas preventivas, operativas y tecnológicas, conforme a la normatividad vigente.',
    },
    {
      termino: 'Seguridad y Salud en el Trabajo (SST)',
      significado:
        'disciplina orientada a prevenir accidentes y enfermedades laborales mediante la identificación y control de peligros en el trabajo.',
    },
    {
      termino: 'Videovigilancia (CCTV)',
      significado:
        'sistema tecnológico que utiliza cámaras para monitorear, registrar y apoyar la protección de personas, instalaciones y bienes.',
    },
  ],
  referencias: [
    {
      referencia: 'BowTie Pro. (s. f.). Metodología Bowtie. BowTie Pro.',
      link: '',
    },
    {
      referencia:
        'Congreso de la República de Colombia. (1873). Ley 84 de 1873. Código Civil.',
      link: '',
    },
    {
      referencia:
        'Congreso de la República de Colombia. (2001). Ley 675 de 2001, por medio de la cual se expide el régimen de propiedad horizontal.',
      link: '',
    },
    {
      referencia:
        'Congreso de la República de Colombia. (2012). Ley 1523 de 2012, por la cual se adopta la Política Nacional de Gestión del Riesgo de Desastres y se establece el Sistema Nacional de Gestión del Riesgo de Desastres.',
      link: '',
    },
    {
      referencia:
        'Congreso de la República de Colombia. (2012). Ley 1539 de 2012, por medio de la cual se implementa el certificado de aptitud psicofísica para el porte y tenencia de armas de fuego y se dictan otras disposiciones.',
      link: '',
    },
    {
      referencia:
        'Congreso de la República de Colombia. (2012). Ley 1562 de 2012, por la cual se modifica el Sistema General de Riesgos Laborales y se dictan otras disposiciones en materia de salud ocupacional.',
      link: '',
    },
    {
      referencia:
        'Congreso de la República de Colombia. (2012). Ley 1581 de 2012, por la cual se dictan disposiciones generales para la protección de datos personales.',
      link: '',
    },
    {
      referencia:
        'Congreso de la República de Colombia. (2013). Ley 1616 de 2013, por medio de la cual se expide la Ley de Salud Mental y se dictan otras disposiciones.',
      link: '',
    },
    {
      referencia:
        'Congreso de la República de Colombia. (2016). Ley 1801 de 2016, por la cual se expide el Código Nacional de Seguridad y Convivencia Ciudadana.',
      link: '',
    },
    {
      referencia:
        'European Committee for Electrotechnical Standardization. (2019). EN 50518. Monitoring and Alarm Receiving Centres.',
      link: '',
    },
    {
      referencia:
        'International Labour Organization. (1981). C155 – Occupational Safety and Health Convention, 1981 (No. 155).',
      link: '',
    },
    {
      referencia:
        'International Labour Organization. (2006). C187 – Promotional Framework for Occupational Safety and Health Convention, 2006 (No. 187).',
      link: '',
    },
    {
      referencia:
        'International Organization for Standardization, & International Electrotechnical Commission. (2022). ISO/IEC 27001:2022. Information security, cybersecurity and privacy protection—Information security management systems—Requirements.',
      link: '',
    },
    {
      referencia:
        'International Organization for Standardization. (2015). ISO 14001:2015. Environmental management systems—Requirements with guidance for use.',
      link: '',
    },
    {
      referencia:
        'International Organization for Standardization. (2018). ISO 22320:2018. Security and resilience—Emergency management—Guidelines for incident management.',
      link: '',
    },
    {
      referencia:
        'International Organization for Standardization. (2018). ISO 31000:2018. Risk management—Guidelines.',
      link: '',
    },
    {
      referencia:
        'International Organization for Standardization. (2019). ISO 22301:2019. Security and resilience—Business continuity management systems—Requirements.',
      link: '',
    },
    {
      referencia:
        'Ministerio de Salud y Protección Social. (1979). Ley 9 de 1979, por la cual se dictan medidas sanitarias.',
      link: '',
    },
    {
      referencia:
        'Ministerio de Salud y Protección Social. (2020). Resolución 666 de 2020, por medio de la cual se adopta el protocolo general de bioseguridad para mitigar, controlar y realizar el adecuado manejo de la pandemia del COVID-19.',
      link: '',
    },
    {
      referencia:
        'Ministerio de Salud y Protección Social. (2022). Resolución 350 de 2022, por la cual se adopta el protocolo general de bioseguridad.',
      link: '',
    },
    {
      referencia:
        'Ministerio del Trabajo. (2019). Resolución 0312 de 2019, por la cual se definen los estándares mínimos del Sistema de Gestión de la Seguridad y Salud en el Trabajo (SG-SST).',
      link: '',
    },
    {
      referencia:
        'Ministerio del Trabajo. (2024). Resolución 2607 de 2024, por la cual se adopta la Política de Entorno Laboral Saludable y Sostenible.',
      link: '',
    },
    {
      referencia:
        'National Fire Protection Association. (2022). NFPA 72. National Fire Alarm and Signaling Code.',
      link: '',
    },
    {
      referencia:
        'Presidencia de la República de Colombia. (1993). Decreto 2535 de 1993, por el cual se expiden normas sobre armas, municiones y explosivos.',
      link: '',
    },
    {
      referencia:
        'Presidencia de la República de Colombia. (1994). Decreto-Ley 356 de 1994, por el cual se expide el Estatuto de Vigilancia y Seguridad Privada.',
      link: '',
    },
    {
      referencia:
        'Presidencia de la República de Colombia. (2001). Decreto 2187 de 2001, por el cual se reglamenta el Estatuto de Vigilancia y Seguridad Privada contenido en el Decreto-Ley 356 de 1994.',
      link: '',
    },
    {
      referencia:
        'Presidencia de la República de Colombia. (2002). Decreto 73 de 2002, por el cual se fijan las tarifas mínimas para el cobro de los servicios de vigilancia y seguridad privada.',
      link: '',
    },
    {
      referencia:
        'Presidencia de la República de Colombia. (2007). Decreto 3888 de 2007, por el cual se adopta el Plan Nacional de Emergencia y Contingencia para Eventos de Afluencia Masiva de Público.',
      link: '',
    },
    {
      referencia:
        'Presidencia de la República de Colombia. (2015). Decreto 1072 de 2015, Decreto Único Reglamentario del Sector Trabajo.',
      link: '',
    },
    {
      referencia:
        'Presidencia de la República de Colombia. (2017). Decreto 2157 de 2017, por medio del cual se reglamenta el artículo 42 de la Ley 1523 de 2012 en materia de planes de gestión del riesgo de desastres de las entidades públicas y privadas.',
      link: '',
    },
    {
      referencia:
        'Presidencia de la República de Colombia. (2022). Decreto 1565 de 2022, por el cual se actualiza el Plan Educativo Institucional de Seguridad Privada (PEIS).',
      link: '',
    },
    {
      referencia:
        'Superintendencia de Vigilancia y Seguridad Privada. (2006). Resolución 2852 de 2006, por la cual se reglamenta la constitución, el licenciamiento y la renovación de licencias de funcionamiento de las empresas de vigilancia y seguridad privada.',
      link: '',
    },
    {
      referencia:
        'Superintendencia de Vigilancia y Seguridad Privada. (2007). Circular Externa 044 de 2007, Sistema de Atención al Usuario.',
      link: '',
    },
    {
      referencia:
        'Superintendencia de Vigilancia y Seguridad Privada. (2022). Circular Externa 20221300000675, por la cual se establecen criterios para las tarifas mínimas y la contratación de los servicios de vigilancia y seguridad privada.',
      link: '',
    },
    {
      referencia:
        'Superintendencia de Vigilancia y Seguridad Privada. (2023). Circular Externa 20231300000435, por la cual se establecen criterios para la utilización de armas traumáticas por los servicios de vigilancia y seguridad privada.',
      link: '',
    },
    {
      referencia:
        'SURA. (s. f.). Análisis de riesgos y peligros: HAZOP [Presentación]. SURA.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo:
            'Profesional 06. Responsable del Ecosistema Virtual de Recursos Educativos Digitales ',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Olga Constanza Bermúdez Jaimes',
          cargo: 'Responsable de línea de producción Huila',
          centro: 'Dirección General',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: '',
          cargo: 'Experto temático',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Paola Alexandra Moya Peralta',
          cargo: 'Evaluadora instruccional',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Jorge David Barbosa Losada',
          cargo: 'Diseñador de contenidos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Robinson Javier Ordoñez Barreiro',
          cargo: 'Desarrollador <i>full stack</i>',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Alejandro Delgado Acosta',
          cargo: 'Intérprete lenguaje de señas',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Cristhian Giovanni Gordillo Segura',
          cargo: 'Intérprete lenguaje de señas',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Juan Pablo Rojas Polania',
          cargo: 'Animador y productor audiovisual',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Carlos Eduardo Garavito Parada',
          cargo: 'Animador y productor audiovisual',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Maria Carolina Tamayo Lopez',
          cargo: 'Locución',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'German Acosta Ramos',
          cargo: 'Locución',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Ricardo Oliveros Zambrano',
          cargo: 'Validador de recursos educativos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Aixa Natalia Sendoya Fernández',
          cargo: 'Validador de recursos educativos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Anyerson Wilfredo Pizo Ossa',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
