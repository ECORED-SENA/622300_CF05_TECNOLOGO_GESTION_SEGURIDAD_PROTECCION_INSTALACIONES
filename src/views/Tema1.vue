<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido(data-aos="flip-up")
        .titulo-principal__numero
          span 1
        h1 Marcos de referencia
      .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t1/img1.jpg')})` }")
        .bloque-texto-g__texto.p-4
          p.mb-0 Los #[b marcos de referencia en seguridad] corresponden al conjunto articulado de criterios técnicos, políticas, procedimientos y normas que orientan la manera en que se miden, comparan y gestionan los riesgos, así como la operación del servicio. Estos integran obligaciones legales, estándares técnicos y acuerdos contractuales con el propósito de generar coherencia entre las actividades del vigilante, las responsabilidades de la empresa y las expectativas del cliente.
      #t_1_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 1.1 Tipos de marcos de referencia
      p.mb-5 Los marcos de referencia para la seguridad privada establecen los requisitos específicos para la operación. A continuación, se presentan sus principales categorías:
      .bg___slider.mb-5
        .px-5
          .ajuste-slider(data-aos="zoom-in")
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  figure
                    img(src='@/assets/curso/temas/t1/img2.png', alt='' style="max-width: 500px").m-auto
                .col-xl-6
                  h4 Estándares internacionales
                  p Son acuerdos documentados que establecen reglas o especificaciones técnicas para que productos, servicios o procesos sean seguros, confiables y de alta calidad. 
                  p.mb-0 Ejemplos: #[b ISO 31000] (gestión del riesgo), #[b ISO/IEC 27001] (seguridad de la información) y #[b NIST CSF] (ciberseguridad).
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  figure
                    img(src='@/assets/curso/temas/t1/img3.png', alt='' style="max-width: 500px").m-auto
                .col-xl-6
                  h4 Contractual u operativo
                  p Define los procedimientos y procesos para la ejecución de las actividades, así como los términos y condiciones legalmente vinculantes entre las partes.
                  p.mb-0 Ejemplos: #[b SLA (#[i Service Level Agreement])] y protocolos acordados con el cliente.
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  figure
                    img(src='@/assets/curso/temas/t1/img4.png', alt='' style="max-width: 500px").m-auto
                .col-xl-6
                  h4 Técnico o tecnológico
                  p.mb-0 Comprende la estructura o sistema que establece cómo se utilizan las tecnologías para alcanzar objetivos específicos. Incluye guías del fabricante, protocolos de transmisión y marcos para la gestión de tecnologías de la información.
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  figure
                    img(src='@/assets/curso/temas/t1/img5.png', alt='' style="max-width: 500px").m-auto
                .col-xl-6
                  h4 Normativo-legal
                  p.mb-0 Establece los límites y fundamentos jurídicos para el desarrollo de las actividades, garantizando que la operación se realice conforme a la legislación vigente.
      p.mb-0 La normatividad constituye la base técnica y jurídica que orienta el ejercicio profesional en el campo de la seguridad privada. En el desarrollo del curso se estudiarán las principales disposiciones que regulan la prestación del servicio de seguridad privada y el uso de tecnologías asociadas.
      Separador
      #t_1_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 1.2 Marco normativo para la tecnología en seguridad privada
      p.mb-5 Uno de los componentes esenciales corresponde a la #[b Seguridad y Salud en el Trabajo (SST)], la cual establece las obligaciones dirigidas a proteger la integridad física y mental de los trabajadores durante el desarrollo de sus actividades.
      .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
        h5 Tabla 1.
        span Principales normas de Seguridad y Salud en el Trabajo (SG-SST)
      .tabla-a(data-aos="zoom-in").mb-5
        table
          thead
            tr
              th.ajuste-border-tabla.texto-left Norma
              th.ajuste-border-tabla.texto-left Nombre
              th.ajuste-border-tabla.texto-left Objetivo
              th.texto-left Aspectos relevantes
          tbody
            tr.ajuste-color-tabla
              td.ajuste-border-tabla.texto-left.text-weight-bold Ley 9 de 1979
              td.ajuste-border-tabla.texto-left Norma de medidas sanitarias.
              td.ajuste-border-tabla.texto-left Establece medidas sanitarias y normas básicas de higiene pública aplicables al trabajo y a la salud pública.
              td.texto-left 
                ul.fa-ul.estilo___ul.mb-0
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Medidas sanitarias de interés público.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Bases históricas de la higiene ocupacional.
            tr
              td.ajuste-border-tabla.texto-left.text-weight-bold Decreto 1295 de 1994
              td.ajuste-border-tabla.texto-left Sistema general de riesgos profesionales
              td.ajuste-border-tabla.texto-left Organiza el Sistema General de Riesgos Profesionales y define las responsabilidades frente a los riesgos laborales.
              td.texto-left 
                ul.fa-ul.estilo___ul.mb-0
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Definición y estructura del sistema.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Funciones de empleadores y ARL.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Clasificación de riesgos.
            tr.ajuste-color-tabla
              td.ajuste-border-tabla.texto-left.text-weight-bold Ley 1562 de 2012
              td.ajuste-border-tabla.texto-left Modifica el sistema general de riesgos laborales.
              td.ajuste-border-tabla.texto-left Reforma el Sistema General de Riesgos Laborales e incorpora el Sistema de Gestión de Seguridad y Salud en el Trabajo (SG-SST).
              td.texto-left 
                ul.fa-ul.estilo___ul.mb-0
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Define la SST.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Establece obligaciones para empleadores y trabajadores.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Promueve la prevención y vigilancia en salud.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Sirve de base para el plan anual y la vigilancia epidemiológica.
            tr
              td.ajuste-border-tabla.texto-left.text-weight-bold Ley 1616 de 2013
              td.ajuste-border-tabla.texto-left Ley de salud mental.
              td.ajuste-border-tabla.texto-left Incorpora la salud mental en las políticas públicas y en la vigilancia de la salud.
              td.texto-left 
                ul.fa-ul.estilo___ul.mb-0
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Prevención y atención de trastornos mentales.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Gestión de factores de riesgo psicosocial dentro del SG-SST.
            tr.ajuste-color-tabla
              td.ajuste-border-tabla.texto-left.text-weight-bold Resolución 0312 de 2019
              td.ajuste-border-tabla.texto-left Estándares mínimos del SG-SST.
              td.ajuste-border-tabla.texto-left Define los estándares mínimos del SG-SST de acuerdo con el tamaño y nivel de riesgo de las organizaciones.
              td.texto-left 
                ul.fa-ul.estilo___ul.mb-0
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Inventario de peligros.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Plan anual.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Vigilancia de la salud.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Registro de capacitaciones y bitácoras.
            tr
              td.ajuste-border-tabla.texto-left.text-weight-bold Decreto 1072 de 2015 (DUR)
              td.ajuste-border-tabla.texto-left Decreto único reglamentario del sector trabajo.
              td.ajuste-border-tabla.texto-left Reglamenta la implementación del SG-SST y establece obligaciones, responsabilidades y requisitos administrativos para las empresas.
              td.texto-left 
                ul.fa-ul.estilo___ul.mb-0
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Funciones y responsabilidades.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Evaluación inicial.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Plan anual.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Formación.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Matriz legal.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Auditorías.
            tr.ajuste-color-tabla
              td.ajuste-border-tabla.texto-left.text-weight-bold Resolución 2607 de 2024
              td.ajuste-border-tabla.texto-left Política de entorno laboral saludable y sostenible.
              td.ajuste-border-tabla.texto-left Adopta la política institucional de entorno laboral saludable y sostenible y actualiza los objetivos del SG-SST.
              td.texto-left 
                ul.fa-ul.estilo___ul.mb-0
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Adopción de la política y sus objetivos.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Enfoque en bienestar y sostenibilidad.
            tr
              td.ajuste-border-tabla.texto-left.text-weight-bold Convenio 155 de 1981
              td.ajuste-border-tabla.texto-left Convenio sobre Seguridad y Salud de los Trabajadores.
              td.ajuste-border-tabla.texto-left Promueve políticas nacionales y sistemas de gestión que garanticen condiciones de trabajo seguras y saludables.
              td.texto-left 
                ul.fa-ul.estilo___ul.mb-0
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Prevención de accidentes de trabajo y enfermedades laborales.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Aplicable al personal involucrado en la organización de eventos masivos.
            tr.ajuste-color-tabla
              td.ajuste-border-tabla.texto-left.text-weight-bold Convenio 187 de 2006
              td.ajuste-border-tabla.texto-left Convenio sobre el marco promocional para la seguridad y salud en el trabajo.
              td.ajuste-border-tabla.texto-left Promueve el fortalecimiento continuo de una cultura nacional de prevención en materia de seguridad y salud en el trabajo.
              td.texto-left 
                ul.fa-ul.estilo___ul.mb-0
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Implementación de sistemas nacionales de gestión en SST.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Fortalecimiento de la cultura preventiva.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Aplicable al personal involucrado en la organización de eventos masivos.
      p.mb-0 En conjunto, estas disposiciones proporcionan el fundamento legal y técnico para la implementación de prácticas seguras en las organizaciones de seguridad privada, favoreciendo la gestión de los riesgos laborales, el cumplimiento normativo y la mejora continua de los procesos.
      Separador
      #t_1_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 1.3 Derecho laboral
      p.mb-5 Las siguientes disposiciones regulan las relaciones laborales aplicables al personal de vigilancia y seguridad privada:
      .tarjeta--container.row.justify-content-center.mb-5.m-0(data-aos="zoom-in")
        .col-xl-6.col-md-10.tarjeta.color-acento-contenido.p-5.mb-4.mb-lg-0
          .row.d-flex.align-items-end.mb-4
            .col-xl-auto.mb-3.mb-lg-0(data-aos="fade-right")
              figure
                img(src='@/assets/curso/temas/t1/img6.svg', alt='' style="max-width: 100px")
            .col-xl
              h2.mb-0 Decreto 2663 de 1950 
              h2.mb-0 Código sustantivo del trabajo
          p #[b Objetivo:] regula las relaciones laborales en Colombia, incluyendo contratación, jornada laboral, remuneración, estabilidad, derechos y obligaciones de empleadores y trabajadores.
          h5.mb-0 Aspectos relevantes:
          ul.fa-ul.estilo___ul.mb-0
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              | Derechos laborales mínimos.
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              | Tipos de contrato.
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              | Jornada laboral, recargos y descansos.
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              | Protección especial a grupos vulnerables.
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              | Principio de primacía de la realidad.
        .col-xl-6.col-md-10.tarjeta.color-primario.text-white.p-5
          .row.d-flex.align-items-end.mb-4
            .col-xl-auto.mb-3.mb-lg-0(data-aos="fade-right")
              figure
                img(src='@/assets/curso/temas/t1/img7.svg', alt='' style="max-width: 100px")
            .col-xl
              h2.mb-0 Ley 2466 de 2025
              h2.mb-0 Reforma laboral
          p #[b Objetivo:] modifica la legislación laboral en materia de contratación, jornadas, licencias, teletrabajo y contrato de aprendizaje, con efectos inmediatos para las organizaciones.
          h5.mb-0 Aspectos relevantes:
          ul.fa-ul.estilo___ul.mb-0
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              | El contrato a término indefinido se establece como regla general.
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              | Modificaciones en recargos nocturnos, dominicales y festivos.
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              | Nuevas licencias y medidas de protección laboral.
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              | Regulación del teletrabajo y del trabajo mediante plataformas digitales.
      p.mb-0 La legislación laboral constituye el fundamento para garantizar el respeto por los derechos de los trabajadores y el cumplimiento de las obligaciones de los empleadores.
      Separador
      #t_1_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 1.4 Vigilancia y seguridad privada
      .color___box_1
        .px-5
          p.mb-5 Las siguientes normas regulan la prestación de los servicios de vigilancia y seguridad privada, así como las condiciones técnicas, administrativas y legales para su operación.
          .row.justify-content-center.mb-5
            .col-xl-10
              AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="zoom-in")
                .row(titulo="Decreto 2535 de 1993: Régimen de armas, municiones y explosivos").ajuste-cajaAcordion.ajuste-vineta
                  p #[b Objetivo:] regula la tenencia y el porte de armas, municiones y explosivos en Colombia, estableciendo normas para su clasificación, control y expedición de permisos.
                  p.mb-0 #[b Aspectos relevantes:]
                  ul.fa-ul.mb-3
                    li.mb-0
                      span.fa-li
                        i.fas.fa-arrow-alt-circle-right
                      | Título I. Principios generales.
                    li.mb-0
                      span.fa-li
                        i.fas.fa-arrow-alt-circle-right
                      | Título II. Armas.
                    li.mb-0
                      span.fa-li
                        i.fas.fa-arrow-alt-circle-right
                      | Título III. Permisos.
                    li.mb-0
                      span.fa-li
                        i.fas.fa-arrow-alt-circle-right
                      | Título IV. Municiones, explosivos y accesorios.
                    li.mb-0
                      span.fa-li
                        i.fas.fa-arrow-alt-circle-right
                      | Título IX. Servicios de vigilancia y seguridad privada.
                    li.mb-0
                      span.fa-li
                        i.fas.fa-arrow-alt-circle-right
                      | Título X. Incautación.
                    li.mb-0
                      span.fa-li
                        i.fas.fa-arrow-alt-circle-right
                      | Título XI. Multas y decomiso de armas, municiones, explosivos y accesorios.
                .row(titulo="Decreto 356 de 1994: Estatuto de vigilancia y seguridad privada").ajuste-cajaAcordion.ajuste-vineta
                  p #[b Objetivo:] regula la constitución y operación de las empresas de vigilancia y seguridad privada y define los servicios autorizados.
                  p.mb-0 #[b Aspectos relevantes:]
                  ul.fa-ul.mb-3
                    li.mb-0
                      span.fa-li
                        i.fas.fa-arrow-alt-circle-right
                      | Requisitos de licencia de funcionamiento.
                    li.mb-0
                      span.fa-li
                        i.fas.fa-arrow-alt-circle-right
                      | Capital mínimo e idoneidad del personal.
                    li.mb-0
                      span.fa-li
                        i.fas.fa-arrow-alt-circle-right
                      | Modalidades del servicio: vigilancia fija, móvil, transporte de valores, escoltas y medios tecnológicos.
                    li.mb-0
                      span.fa-li
                        i.fas.fa-arrow-alt-circle-right
                      | Control sobre armas y registros.
                .row(titulo="Decreto 2187 de 2001: Reglamenta el estatuto de vigilancia y seguridad privada").ajuste-cajaAcordion.ajuste-vineta
                  p #[b Objetivo:] complementa el Decreto-Ley 356 de 1994 en aspectos técnicos y administrativos.
                  p.mb-0 #[b Aspectos relevantes:]
                  ul.fa-ul.mb-3
                    li.mb-0
                      span.fa-li
                        i.fas.fa-arrow-alt-circle-right
                      | Define conceptos como vigilante, escolta de seguridad y modalidades de escolta.
                    li.mb-0
                      span.fa-li
                        i.fas.fa-arrow-alt-circle-right
                      | Asigna funciones de inspección, vigilancia y sanción a la Superintendencia de Vigilancia y Seguridad Privada.
                .row(titulo="Resolución 2852 de 2006: Constitución previa, licencias y renovaciones").ajuste-cajaAcordion.ajuste-vineta
                  p #[b Objetivo:] reglamenta la constitución, el licenciamiento y la renovación de las empresas de vigilancia y seguridad privada.
                  p.mb-0 #[b Aspectos relevantes:]
                  ul.fa-ul.mb-3
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | Requisitos para la constitución de empresas.
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | Procedimiento para la obtención de licencias.
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | Renovación de licencias de funcionamiento.
                .row(titulo="Circular Externa 044 de 2007: Sistema de atención al cliente").ajuste-cajaAcordion.ajuste-vineta
                  p #[b Objetivo:] establece lineamientos para la atención de usuarios y la gestión de peticiones, quejas y reclamaciones.
                  p.mb-0 #[b Aspectos relevantes:]
                  ul.fa-ul.mb-3
                    li.mb-0
                      span.fa-li
                        i.fas.fa-arrow-alt-circle-right
                      | Implementación de un sistema de atención al cliente.
                    li.mb-0
                      span.fa-li
                        i.fas.fa-arrow-alt-circle-right
                      | Gestión de reclamaciones.
                    li.mb-0
                      span.fa-li
                        i.fas.fa-arrow-alt-circle-right
                      | Suministro de información y solución oportuna a los usuarios.
                .row(titulo="Ley 1539 de 2012: Certificado de aptitud psicofísica").ajuste-cajaAcordion.ajuste-vineta
                  p #[b Objetivo:] establece como requisito obligatorio el certificado de aptitud psicofísica para el personal de vigilancia que porte armas.
                  p.mb-0 #[b Aspectos relevantes:]
                  ul.fa-ul.mb-3
                    li.mb-0
                      span.fa-li
                        i.fas.fa-arrow-alt-circle-right
                      | Aplica a vigilantes, escoltas y supervisores.
                    li.mb-0
                      span.fa-li
                        i.fas.fa-arrow-alt-circle-right
                      | Establece sanciones por incumplimiento.
                    li.mb-0
                      span.fa-li
                        i.fas.fa-arrow-alt-circle-right
                      | Crea un sistema de control para la Superintendencia de Vigilancia y Seguridad Privada.
                .row(titulo="Circular Externa 20221300000675 de 2022: Tarifas mínimas y criterios de contratación").ajuste-cajaAcordion.ajuste-vineta
                  p #[b Objetivo:] define criterios para las tarifas mínimas y las condiciones de contratación de los servicios de vigilancia privada.
                  p.mb-0 #[b Aspectos relevantes:]
                  ul.fa-ul.mb-0
                    li.mb-0
                      span.fa-li
                        i.fas.fa-arrow-alt-circle-right
                      | Parámetros económicos para la contratación.
                    li.mb-0
                      span.fa-li
                        i.fas.fa-arrow-alt-circle-right
                      | Criterios de cálculo para copropiedades.
                    li.mb-0
                      span.fa-li
                        i.fas.fa-arrow-alt-circle-right
                      | Incidencia en licitaciones y contratos.
                .row(titulo="Circular Externa 20231300000435 de 2023: Regulación de armas traumáticas").ajuste-cajaAcordion.ajuste-vineta
                  p #[b Objetivo:] establece criterios técnicos y administrativos para el uso de armas traumáticas por parte de los servicios de vigilancia privada.
                  p.mb-0 #[b Aspectos relevantes:]
                  ul.fa-ul.mb-0
                    li.mb-0
                      span.fa-li
                        i.fas.fa-arrow-alt-circle-right
                      | Marcaje y registro ante INDUMIL.
                    li.mb-0
                      span.fa-li
                        i.fas.fa-arrow-alt-circle-right
                      | Concepto previo de la Superintendencia de Vigilancia y Seguridad Privada.
                    li.mb-0
                      span.fa-li
                        i.fas.fa-arrow-alt-circle-right
                      | Solicitud de autorización de porte y tenencia ante el DCCAE.
                .row(titulo="Decreto 1565 de 2022: Actualización del PEIS para academias de vigilancia y seguridad privada").ajuste-cajaAcordion.ajuste-vineta
                  p #[b Objetivo:] actualiza los contenidos temáticos y aspectos administrativos de la formación impartida por las escuelas de vigilancia y seguridad privada.
                  p.mb-0 #[b Aspectos relevantes:]
                  ul.fa-ul.mb-0
                    li.mb-0
                      span.fa-li
                        i.fas.fa-arrow-alt-circle-right
                      | Actualización de contenidos de formación.
                    li.mb-0
                      span.fa-li
                        i.fas.fa-arrow-alt-circle-right
                      | Ajustes técnicos y administrativos.
                    li.mb-0
                      span.fa-li
                        i.fas.fa-arrow-alt-circle-right
                      | Fortalecimiento de las mesas de trabajo con las escuelas de capacitación.
          p.mb-0 Estas disposiciones constituyen el marco jurídico que orienta la prestación de los servicios de vigilancia y seguridad privada, definiendo las responsabilidades de las empresas, del personal operativo y de las entidades encargadas de ejercer inspección, vigilancia y control.
      Separador
      #t_1_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 1.5 Gestión del riesgo
      .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t1/img8.jpg')})` }")
        .bloque-texto-g__texto.p-4
          p.mb-0 La gestión del riesgo constituye un componente fundamental en la prestación de los servicios de vigilancia y seguridad privada, ya que permite identificar, analizar, evaluar y controlar los riesgos que pueden afectar a las personas, la infraestructura, los bienes y la continuidad de las operaciones. Para ello, las organizaciones deben cumplir con un conjunto de normas nacionales y adoptar estándares internacionales que orientan la prevención, la preparación, la respuesta y la recuperación frente a incidentes y emergencias.
      p.mb-5 Las siguientes disposiciones nacionales establecen el marco legal para la gestión del riesgo, la planificación de emergencias, la continuidad de las operaciones y la implementación de medidas de bioseguridad:
      .bg___slider.mb-5
        .px-5
          .ajuste-slider(data-aos="zoom-in")
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  figure
                    img(src='@/assets/curso/temas/t1/img9.png', alt='' style="max-width: 500px").m-auto
                .col-xl-6
                  h4 Decreto 3888 de 2007 Plan nacional de emergencia y contingencia para eventos de afluencia masiva
                  p #[b Objetivo:] establece el Plan Nacional de Emergencia y Contingencia y define las responsabilidades de las autoridades, organismos de gestión del riesgo y organizadores de eventos masivos.
                  p.mb-0 #[b Aspectos relevantes:]
                  ul.fa-ul.estilo___ul.mb-0
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | Requisitos para los planes de emergencia y contingencia.
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | Planificación y coordinación interinstitucional.
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | Clasificación de eventos según su nivel de vulnerabilidad o criticidad.
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | Lineamientos para la atención de emergencias y evacuaciones.
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  figure
                    img(src='@/assets/curso/temas/t1/img10.png', alt='' style="max-width: 500px").m-auto
                .col-xl-6
                  h4 Ley 1523 de 2012 Política Nacional de Gestión del Riesgo de Desastres (SNGRD)
                  p #[b Objetivo:] define la Política Nacional de Gestión del Riesgo de Desastres e incorpora la gestión del riesgo en la planificación territorial.
                  p.mb-0 #[b Aspectos relevantes:]
                  ul.fa-ul.estilo___ul.mb-0
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | Identificación de amenazas y peligros.
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | Reducción de vulnerabilidades.
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | Preparación y respuesta ante emergencias.
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | Integración del riesgo en la planificación territorial.
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | Corresponsabilidad entre entidades públicas y privadas.
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  figure
                    img(src='@/assets/curso/temas/t1/img11.png', alt='' style="max-width: 500px").m-auto
                .col-xl-6
                  h4 Decreto 2157 de 2017 Reglamentación de los planes de gestión del riesgo
                  p #[b Objetivo:] establece los lineamientos para formular e implementar los planes de gestión del riesgo en entidades públicas y privadas.
                  p.mb-0 #[b Aspectos relevantes:]
                  ul.fa-ul.estilo___ul.mb-0
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | Requisitos para los planes de gestión del riesgo.
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | Simulacros y preparación institucional.
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | Continuidad de las operaciones.
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | Integración con los planes territoriales de gestión del riesgo.
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  figure
                    img(src='@/assets/curso/temas/t1/img12.png', alt='' style="max-width: 500px").m-auto
                .col-xl-6
                  h4 Resolución 666 de 2020 Protocolos de bioseguridad
                  p #[b Objetivo:] estableció las medidas sanitarias y los protocolos de bioseguridad aplicables durante la pandemia de COVID-19.
                  p.mb-0 #[b Aspectos relevantes:]
                  ul.fa-ul.estilo___ul.mb-0
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | Requisitos sanitarios para organizadores.
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | Medidas de prevención y mitigación.
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | Reglas sobre aforos, limpieza y ventilación.
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | Obligaciones para organizadores y empleadores.
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  figure
                    img(src='@/assets/curso/temas/t1/img13.png', alt='' style="max-width: 500px").m-auto
                .col-xl-6
                  h4 Resolución 350 de 2022 Protocolo general de bioseguridad
                  p #[b Objetivo:] adopta el protocolo general de bioseguridad para el desarrollo de las actividades económicas y deroga la Resolución 777 de 2021.
                  p.mb-0 #[b Aspectos relevantes:]
                  ul.fa-ul.estilo___ul.mb-0
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | Protocolos sanitarios generales.
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | Requisitos para las actividades económicas.
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | Medidas de vigilancia y prevención.
      .color___box_1
        .px-5
          p.mb-5 Los estándares internacionales complementan la normativa colombiana al proporcionar metodologías y buenas prácticas para fortalecer la gestión del riesgo, la continuidad del negocio, la seguridad de la información, la gestión ambiental y la coordinación de emergencias. Su adopción favorece la mejora continua de los procesos y contribuye al cumplimiento de estándares reconocidos a nivel internacional.
          .row.justify-content-center.mb-5
            .col-xl-10
              AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="zoom-in")
                .row(titulo="ISO 31000:2018 Gestión del riesgo").ajuste-cajaAcordion.ajuste-vineta
                  p #[b Objetivo:] proporciona principios, directrices y un marco de referencia para gestionar los riesgos en cualquier tipo de organización.
                  p.mb-0 #[b Aspectos relevantes:]
                  ul.fa-ul.mb-0
                    li.mb-0
                      span.fa-li
                        i.fas.fa-arrow-alt-circle-right
                      | Principios de la gestión del riesgo.
                    li.mb-0
                      span.fa-li
                        i.fas.fa-arrow-alt-circle-right
                      | Identificación, análisis y valoración de riesgos.
                    li.mb-0
                      span.fa-li
                        i.fas.fa-arrow-alt-circle-right
                      | Tratamiento y seguimiento de los riesgos.
                .row(titulo="ISO 45001:2018 Sistema de Gestión de Seguridad y Salud en el Trabajo").ajuste-cajaAcordion.ajuste-vineta
                  p #[b Objetivo:] establece los requisitos para implementar un Sistema de Gestión de Seguridad y Salud en el Trabajo basado en la mejora continua.
                  p.mb-0 #[b Aspectos relevantes:]
                  ul.fa-ul.mb-0
                    li.mb-0
                      span.fa-li
                        i.fas.fa-arrow-alt-circle-right
                      | Liderazgo y participación de los trabajadores.
                    li.mb-0
                      span.fa-li
                        i.fas.fa-arrow-alt-circle-right
                      | Identificación de peligros.
                    li.mb-0
                      span.fa-li
                        i.fas.fa-arrow-alt-circle-right
                      | Evaluación y control de riesgos.
                    li.mb-0
                      span.fa-li
                        i.fas.fa-arrow-alt-circle-right
                      | Definición de objetivos medibles.
                .row(titulo="ISO 14001:2015 Sistema de gestión ambiental").ajuste-cajaAcordion.ajuste-vineta
                  p #[b Objetivo:] establece los requisitos para implementar un Sistema de Gestión Ambiental en organizaciones con impacto sobre el medio ambiente.
                  p.mb-0 #[b Aspectos relevantes:]
                  ul.fa-ul.mb-0
                    li.mb-0
                      span.fa-li
                        i.fas.fa-arrow-alt-circle-right
                      | Identificación de aspectos ambientales.
                    li.mb-0
                      span.fa-li
                        i.fas.fa-arrow-alt-circle-right
                      | Definición de objetivos ambientales.
                    li.mb-0
                      span.fa-li
                        i.fas.fa-arrow-alt-circle-right
                      | Mejora continua.
                    li.mb-0
                      span.fa-li
                        i.fas.fa-arrow-alt-circle-right
                      | Cumplimiento de la legislación ambiental.
                .row(titulo="ISO 22320:2018 Gestión de incidentes y emergencias").ajuste-cajaAcordion.ajuste-vineta
                  p #[b Objetivo:] establece directrices para la gestión y coordinación de incidentes y emergencias.
                  p.mb-0 #[b Aspectos relevantes:]
                  ul.fa-ul.mb-0
                    li.mb-0
                      span.fa-li
                        i.fas.fa-arrow-alt-circle-right
                      | Coordinación interinstitucional.
                    li.mb-0
                      span.fa-li
                        i.fas.fa-arrow-alt-circle-right
                      | Organización de la respuesta ante incidentes.
                    li.mb-0
                      span.fa-li
                        i.fas.fa-arrow-alt-circle-right
                      | Gestión eficiente de recursos durante las emergencias.
                .row(titulo="ISO/IEC 27001:2013 / 2022 Sistema de Gestión de Seguridad de la Información (SGSI)").ajuste-cajaAcordion.ajuste-vineta
                  p #[b Objetivo:] define los requisitos para implementar, mantener y mejorar un Sistema de Gestión de Seguridad de la Información, garantizando la confidencialidad, integridad y disponibilidad de la información.
                  p.mb-0 #[b Aspectos relevantes:]
                  ul.fa-ul.mb-3
                    li.mb-0
                      span.fa-li
                        i.fas.fa-arrow-alt-circle-right
                      | Alcance del sistema.
                    li.mb-0
                      span.fa-li
                        i.fas.fa-arrow-alt-circle-right
                      | Liderazgo y planificación.
                    li.mb-0
                      span.fa-li
                        i.fas.fa-arrow-alt-circle-right
                      | Soporte y operación.
                    li.mb-0
                      span.fa-li
                        i.fas.fa-arrow-alt-circle-right
                      | Evaluación del desempeño.
                    li.mb-0
                      span.fa-li
                        i.fas.fa-arrow-alt-circle-right
                      | Mejora continua.
                    li.mb-0
                      span.fa-li
                        i.fas.fa-arrow-alt-circle-right
                      | Controles y tratamiento de riesgos de la información.
                .row(titulo="ISO 22301:2019 Sistema de gestión de continuidad del negocio").ajuste-cajaAcordion.ajuste-vineta
                  p #[b Objetivo:] establece los requisitos para implementar un Sistema de Gestión de Continuidad del Negocio (#[i Business Continuity Management System - BCMS]), especialmente útil para centrales receptoras de alarmas y centros de monitoreo.
                  p.mb-0 #[b Aspectos relevantes:]
                  ul.fa-ul.mb-0
                    li.mb-0
                      span.fa-li
                        i.fas.fa-arrow-alt-circle-right
                      | Planes de continuidad y recuperación.
                    li.mb-0
                      span.fa-li
                        i.fas.fa-arrow-alt-circle-right
                      | Pruebas periódicas.
                    li.mb-0
                      span.fa-li
                        i.fas.fa-arrow-alt-circle-right
                      | Roles y responsabilidades durante situaciones de crisis.
                .row(titulo="EN 50518, NFPA 72 y guías para CRA").ajuste-cajaAcordion.ajuste-vineta
                  p #[b Objetivo:] constituyen referentes técnicos internacionales para el diseño, la infraestructura y la operación de centrales receptoras de alarmas (CRA/ARC) y sistemas de detección y alarma contra incendios.
                  p.mb-0 #[b Aspectos relevantes:]
                  ul.fa-ul.mb-0
                    li.mb-0
                      span.fa-li
                        i.fas.fa-arrow-alt-circle-right
                      | Requisitos para el diseño y la redundancia de las CRA.
                    li.mb-0
                      span.fa-li
                        i.fas.fa-arrow-alt-circle-right
                      | Procedimientos para la verificación de señales.
                    li.mb-0
                      span.fa-li
                        i.fas.fa-arrow-alt-circle-right
                      | Buenas prácticas para la transmisión y recepción de alarmas.
          p.mb-0 Las normas #[b EN 50518] y #[b NFPA 72] pueden adoptarse como referentes técnicos internacionales en Colombia para fortalecer el diseño, la operación y la confiabilidad de las centrales receptoras de alarmas y de los sistemas de detección de incendios.
          Separador
          #t_1_6.titulo-segundo.color-acento-contenido(data-aos="fade-right")
            h2 1.6 Propiedad horizontal y gestión de aglomeraciones
          p.mb-5 La prestación de los servicios de vigilancia y seguridad privada en propiedades horizontales y eventos con concentración de personas requiere el cumplimiento de normas que regulan la convivencia, la administración de los espacios comunes y la gestión del riesgo. Estas disposiciones establecen responsabilidades para administradores, organizadores y empresas de seguridad, con el fin de proteger la integridad de las personas y preservar el orden público. Las siguientes normas constituyen el principal marco regulatorio en esta materia:
          TabsC.color-acento-contenido.mb-5(data-aos="zoom-in")
            .py-3.py-md-4(titulo="Ley 675 de 2001 Régimen de propiedad horizontal")
              .row.justify-content-center.align-items-center
                .col-xl-5.order-2.order-lg-1
                  figure
                    img(src='@/assets/curso/temas/t1/img14.png', alt="" ).m-auto
                .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
                  h4.txt--purpura.mb-4 Ley 675 de 2001 Régimen de propiedad horizontal
                  p #[b Objetivo:] regula la organización, administración, derechos y deberes de las copropiedades. Además, faculta a la asamblea de copropietarios y al administrador para adoptar medidas relacionadas con la seguridad, los reglamentos de convivencia y la contratación de servicios de vigilancia.
                  p.mb-0 #[b Aspectos relevantes:]
                  ul.fa-ul.estilo___ul.mb-0
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | Facultades de la asamblea y del administrador.
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | Reglamentos internos sobre seguridad, CCTV y control de acceso.
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | Procedimientos sancionatorios.
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | Contratación de servicios de vigilancia y seguridad privada.
            .py-3.py-md-4(titulo="Ley 1801 de 2016 Código nacional de seguridad y convivencia ciudadana")
              .row.justify-content-center.align-items-center
                .col-xl-5.order-2.order-lg-1
                  figure
                    img(src='@/assets/curso/temas/t1/img15.png', alt="" ).m-auto
                .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
                  h4.txt--purpura.mb-4 Ley 1801 de 2016 Código nacional de seguridad y convivencia ciudadana
                  p #[b Objetivo:] establece normas de comportamiento ciudadano y obligaciones para garantizar la convivencia y la seguridad pública.
                  p.mb-0 #[b Aspectos relevantes:]
                  ul.fa-ul.estilo___ul.mb-0
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | Exige a los organizadores de eventos masivos elaborar planes de emergencia, seguridad, evacuación y manejo ambiental.
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | Define la corresponsabilidad entre organizadores y autoridades.
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | Promueve la prevención de riesgos y el mantenimiento del orden en eventos públicos.
            .py-3.py-md-4(titulo="Guía técnica para la gestión de aglomeraciones de público ")
              .row.justify-content-center.align-items-center
                .col-xl-5.order-2.order-lg-1
                  figure
                    img(src='@/assets/curso/temas/t1/img16.png', alt="" ).m-auto
                .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
                  h4.txt--purpura.mb-4 Guía técnica para la gestión de aglomeraciones de público 
                  p #[b Objetivo:] proporciona lineamientos técnicos para la planeación, el control y la respuesta en eventos con aglomeraciones de público.
                  p.mb-0 #[b Aspectos relevantes:]
                  ul.fa-ul.estilo___ul.mb-0
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | Criterios para determinar la capacidad máxima de los escenarios.
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | Control de accesos, señalización y evacuación.
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | Organización de primeros auxilios.
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | Estandarización de la gestión del riesgo y fortalecimiento de la coordinación institucional.
      p.mb-0 La aplicación de estas disposiciones permite fortalecer la seguridad en copropiedades y eventos de alta concurrencia, mediante la adecuada planificación, coordinación y gestión de los riesgos asociados.
      Separador
      #t_1_7.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 1.7 Protección de datos y responsabilidad
      p.mb-5 Las empresas de vigilancia y seguridad privada administran información personal obtenida mediante sistemas de videovigilancia, controles de acceso y bases de datos. Por esta razón, deben cumplir las normas que regulan el tratamiento de datos personales y la responsabilidad derivada de las actuaciones u omisiones en la prestación del servicio.
      TabsC.color-acento-contenido.mb-5(data-aos="zoom-in")
        .py-3.py-md-4(titulo="Ley 1581 de 2012 Régimen general de protección de datos personales")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t1/img17.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Ley 1581 de 2012 Régimen general de protección de datos personales
              p #[b Objetivo:] regula el tratamiento de los datos personales, los derechos de los titulares y las obligaciones de los responsables y encargados del tratamiento. Su aplicación es fundamental en sistemas de CCTV, controles de acceso y bases de datos de seguridad.
              p.mb-0 #[b Aspectos relevantes:]
              ul.fa-ul.estilo___ul.mb-0
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Principios de finalidad, proporcionalidad y confidencialidad.
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Deber de informar y, cuando corresponda, obtener autorización del titular.
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Derechos de acceso, rectificación, actualización y supresión de datos.
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Sanciones por el manejo inadecuado de la información.
        .py-3.py-md-4(titulo="Ley 84 de 1873 Código Civil ")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t1/img18.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Ley 84 de 1873 Código Civil 
              p #[b Objetivo:] establece la responsabilidad civil por los daños ocasionados mediante acción u omisión, incluyendo los derivados de la prestación de servicios de vigilancia y seguridad privada.
              p.mb-0 #[b Aspectos relevantes:]
              ul.fa-ul.estilo___ul.mb-0
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Obligación de reparar los daños ocasionados.
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Responsabilidad por actos de negligencia.
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Posibles responsabilidades administrativas y penales cuando corresponda.
      p.mb-0 El cumplimiento de estas normas fortalece la confianza de los usuarios, protege la información personal y contribuye a prevenir responsabilidades jurídicas derivadas de la prestación del servicio.
      Separador
      #t_1_8.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 1.8 Medios tecnológicos y estándares técnicos
      .color___box_2
        .px-5
          .box___style_3.mb-5(data-aos="zoom-in")
            .row.align-items-center
              .col-xl.order-2.order-lg-1.fit___box_container
                p.mb-0 La incorporación de medios tecnológicos en los servicios de vigilancia y seguridad privada debe ajustarse a las disposiciones legales que regulan su contratación y operación. Estas normas establecen las condiciones para la prestación de servicios complementarios y promueven la transparencia en las relaciones contractuales.
              .col-xl-auto.order-1.order-lg-2
                figure
                  img(src='@/assets/curso/temas/t1/img19.png', alt='').m-auto
          .titles___box_tercer_nivel.mb-5(data-aos="fade-right")
            .col-lg-auto
              figure
                img(src="@/assets/curso/temas/t1/img20.svg" style="max-width: 60px").m-auto
            .col
              h3 Decreto 073 de 2002 (artículo 4). Servicios adicionales de vigilancia mediante medios tecnológicos
          .row.align-items-center.mb-3
            .col-xl-auto.d-none.d-xl-block(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/temas/t1/img21.svg', alt='').m-auto
            .col-xl
              p.mb-0 #[b Objetivo:] establece que los servicios de monitoreo, CCTV y demás medios tecnológicos constituyen servicios adicionales que deben ser pactados expresamente entre las partes, sin afectar los salarios ni las prestaciones laborales del personal de vigilancia.
          p.mb-5 Aspectos relevantes como:
          .row.justify-content-center.mb-5
            .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
              .box___style_4.h-100
                .row.justify-content-center.mb-3
                  .col-7
                    figure.mb-4(data-aos="fade-right")
                      img(src='@/assets/curso/temas/t1/img22.svg', alt="" style="max-width: 90px").m-auto
                  p.mb-0.text-center Los servicios tecnológicos se cobran de manera independiente.
            .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
              .box___style_4.h-100
                .row.justify-content-center.mb-3
                  .col-7
                    figure.mb-4(data-aos="fade-right")
                      img(src='@/assets/curso/temas/t1/img23.svg', alt="" style="max-width: 90px").m-auto
                  p.mb-0.text-center La contratación debe realizarse mediante acuerdo entre las partes.
            .col-xl-3.col-md-9(data-aos="zoom-in")
              .box___style_4.h-100
                .row.justify-content-center.mb-3
                  .col-7
                    figure.mb-4(data-aos="fade-left")
                      img(src='@/assets/curso/temas/t1/img24.svg', alt="" style="max-width: 90px").m-auto
                  p.mb-0.text-center No pueden utilizarse para disminuir salarios ni prestaciones sociales.
          p.mb-0 La regulación de los medios tecnológicos garantiza que su incorporación a los servicios de vigilancia y seguridad privada se realice bajo criterios de legalidad, transparencia y protección de los derechos laborales, fortaleciendo la calidad y la eficiencia de la prestación del servicio.

</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
