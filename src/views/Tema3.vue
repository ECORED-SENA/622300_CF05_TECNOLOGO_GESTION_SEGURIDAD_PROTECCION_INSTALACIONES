<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido(data-aos="flip-up")
        .titulo-principal__numero
          span 3
        h1 Gestión de riesgos y emergencias
      .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t3/img1.jpg')})` }")
        .bloque-texto-g__texto.p-4
          p.mb-0 La gestión de riesgos y emergencias constituye un proceso fundamental para la protección de las personas, los bienes y la continuidad de las operaciones en los servicios de vigilancia y seguridad privada. Su propósito es identificar las amenazas y vulnerabilidades, evaluar los riesgos, establecer medidas de control y definir procedimientos de respuesta que permitan minimizar las consecuencias de los incidentes. Para ello, se integran los principios establecidos en la #[b ISO 31000:2018], la #[b ISO 22320:2018] y la normativa colombiana sobre gestión del riesgo de desastres.
      p.mb-5 La comprensión de los conceptos básicos facilita la evaluación de los riesgos y la selección de las medidas preventivas y correctivas más apropiadas para cada situación.
      .row.align-items-center.mb-5
        .col-xl-auto(data-aos="fade-right")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t3/img2.png", alt="" ).m-auto
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-left")
            .row(titulo="Amenaza").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Corresponde a cualquier condición, evento o agente con capacidad de causar daño o pérdidas. En seguridad privada puede tener origen natural, tecnológico o social. Algunos ejemplos son las inundaciones, los cortes de energía, los hurtos o el vandalismo. La identificación de amenazas específicas, como el hurto nocturno en una bodega, permite priorizar controles técnicos y operativos que deben registrarse durante el diagnóstico inicial del plan de gestión del riesgo.
            .row(titulo="Vulnerabilidad").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Hace referencia a las condiciones internas que incrementan la probabilidad o el impacto cuando una amenaza se materializa. En vigilancia privada, puede estar asociada con puntos ciegos en los sistemas de CCTV, personal sin capacitación suficiente o procedimientos deficientes para el control de acceso. La reducción de estas debilidades disminuye significativamente la exposición al riesgo.
            .row(titulo="Impacto").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Representa la magnitud de las consecuencias ocasionadas por la materialización de un riesgo. Puede reflejarse en pérdidas económicas, lesiones a las personas, afectaciones reputacionales o interrupciones de la operación. Generalmente, se clasifica como alto, medio o bajo para facilitar la priorización de recursos y la toma de decisiones.
      .row.align-items-center.mb-5
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-right")
            .row(titulo="Peligro").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Es la fuente, condición o situación con potencial de causar daño. Por ejemplo, una escalera en mal estado constituye un peligro porque puede ocasionar caídas y lesiones. En seguridad privada, la identificación de peligros durante las inspecciones de instalaciones permite establecer controles preventivos y fortalecer los programas de capacitación.
            .row(titulo="Emergencia").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Es la situación en la que un peligro se materializa o existe una amenaza inminente que requiere una respuesta inmediata y coordinada. Su atención puede involucrar brigadas de emergencia, cuerpos de bomberos, organismos de socorro, Policía Nacional y servicios de salud. En Colombia, la gestión de emergencias se encuentra regulada por la Ley 1523 de 2012 y por los Planes para la Prevención, Preparación y Respuesta ante Emergencias (PPRE), los cuales establecen responsabilidades y mecanismos de coordinación entre las diferentes entidades. Un ejemplo corresponde a un incendio en un establecimiento comercial, donde el operador de la central receptora de alarmas verifica el evento mediante cámaras, activa los protocolos de evacuación y coordina la respuesta con la brigada de emergencias y el cuerpo de bomberos.
            .row(titulo="Riesgo").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Corresponde a la combinación entre la probabilidad de que un peligro se materialice y la severidad de sus consecuencias. Puede expresarse mediante métodos cualitativos o cuantitativos, como la relación entre probabilidad e impacto. Por ejemplo, el riesgo de caída en una escalera deteriorada depende de la frecuencia de uso y de la gravedad de las posibles lesiones; de igual manera, el riesgo de intrusión durante una entrega nocturna depende de la frecuencia de accesos sin control y del valor de los bienes protegidos. La gestión del riesgo comprende su identificación, evaluación, tratamiento, monitoreo y comunicación conforme a criterios técnicos.
        .col-xl-auto(data-aos="fade-left")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t3/img3.png", alt="" ).m-auto
      p.mb-5 Para facilitar el análisis y la implementación de controles, los riesgos pueden agruparse de acuerdo con su naturaleza. Esta clasificación permite establecer prioridades, definir estrategias de tratamiento y evaluar la eficacia de las medidas implementadas mediante indicadores de desempeño:
      .bg___slider.mb-5
        .px-5
          .ajuste-slider(data-aos="zoom-in")
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Operativos
                  p.mb-0 Se relacionan con errores humanos, ausentismo, fallas en los procedimientos de custodia, incumplimiento de protocolos o deficiencias en la prestación del servicio.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t3/img4.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Físicos
                  p.mb-0 Comprenden eventos como intrusiones, incendios, vandalismo, daños a la infraestructura o afectaciones a las instalaciones protegidas.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t3/img5.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Tecnológicos o cibernéticos
                  p.mb-0 Incluyen accesos no autorizados a sistemas de videovigilancia (VMS), manipulación indebida de alarmas, pérdida de grabaciones o incidentes que comprometan la seguridad de la información.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t3/img6.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Legales
                  p.mb-0 Se originan por el incumplimiento de obligaciones legales, reglamentarias o contractuales, como el tratamiento inadecuado de datos personales conforme a la Ley 1581 de 2012.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t3/img7.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Financieros
                  p.mb-0 Se relacionan con pérdidas económicas ocasionadas por robos, interrupciones del servicio, costos imprevistos o desviaciones negativas que afectan la rentabilidad de la organización.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t3/img8.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Reputacionales
                  p.mb-0 Corresponden a situaciones que deterioran la imagen, la credibilidad y la confianza de clientes, empleados, aliados y demás grupos de interés frente a la organización.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t3/img9.png', alt='' style="max-width: 500px").m-auto
      p.mb-5 La clasificación de los riesgos facilita la asignación de controles específicos, el seguimiento mediante indicadores de gestión (KPI) y la implementación de acciones de mejora continua que fortalezcan la seguridad de las operaciones. Como apoyo para la comprensión de estos conceptos, conviene recordar la siguiente relación:
      .row.justify-content-center.mb-0
        .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
          .box___card_sinbordes.h-100
            .row.justify-content-center.mb-3
              .col-12
                figure.mb-4
                  img(src='@/assets/curso/temas/t3/img10.jpg', alt="" ).m-auto
              h4.text-center Peligro
              .box___card_sinbordes_p
                p.mb-0 Fuente o situación con potencial de causar daño.
        .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
          .box___card_sinbordes.h-100
            .row.justify-content-center.mb-3
              .col-12
                figure.mb-4
                  img(src='@/assets/curso/temas/t3/img11.jpg', alt="" ).m-auto
              h4.text-center Riesgo
              .box___card_sinbordes_p
                p.mb-0 Probabilidad de que el peligro se materialice y la magnitud de sus consecuencias.
        .col-xl-4.col-md-9(data-aos="fade-left")
          .box___card_sinbordes.h-100
            .row.justify-content-center.mb-3
              .col-12
                figure.mb-4
                  img(src='@/assets/curso/temas/t3/img12.jpg', alt="" ).m-auto
              h4.text-center Emergencia
              .box___card_sinbordes_p
                p.mb-0 Materialización del peligro o situación crítica que requiere una respuesta inmediata y coordinada.
      Separador
      #t_3_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 3.1 Identificación de activos y amenazas
      .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t3/img13.jpg')})` }")
        .bloque-texto-g__texto.p-4
          p.mb-0 La identificación de activos y amenazas constituye una etapa fundamental en la gestión del riesgo, ya que permite reconocer los recursos que poseen valor para la organización y los eventos que podrían comprometer su funcionamiento. Este proceso facilita la definición de medidas de protección, fortalece la toma de decisiones y contribuye a la continuidad de las operaciones.
      .color___box_3
        .px-5
          p.mb-5 Un #[b activo] es cualquier recurso tangible o intangible que tiene valor para la organización y que requiere protección. En el ámbito de la seguridad privada y de la seguridad de la información, los activos pueden clasificarse de la siguiente manera:
          .row.justify-content-center.mb-5
            .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
              .box___style_4.h-100
                .row.justify-content-center.mb-3
                  .col-7
                    figure.mb-4(data-aos="fade-right")
                      img(src='@/assets/curso/temas/t3/img14.svg', alt="" style="max-width: 90px").m-auto
                  h4.text-center Tecnología
                  p.mb-0.text-center Comprende servidores, equipos de cómputo, dispositivos móviles, #[i software], sistemas de videovigilancia, aplicaciones y demás recursos tecnológicos utilizados para la operación.
            .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
              .box___style_4.h-100
                .row.justify-content-center.mb-3
                  .col-7
                    figure.mb-4(data-aos="fade-right")
                      img(src='@/assets/curso/temas/t3/img15.svg', alt="" style="max-width: 90px").m-auto
                  h4.text-center Personas
                  p.mb-0.text-center Incluye empleados, usuarios, contratistas, proveedores y demás personas cuya participación resulta esencial para el funcionamiento de la organización.
            .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
              .box___style_4.h-100
                .row.justify-content-center.mb-3
                  .col-7
                    figure.mb-4(data-aos="fade-right")
                      img(src='@/assets/curso/temas/t3/img16.svg', alt="" style="max-width: 90px").m-auto
                  h4.text-center Infraestructura
                  p.mb-0.text-center Corresponde a edificios, centros de datos, redes de comunicaciones, instalaciones físicas y demás elementos que soportan la operación.
            .col-xl-3.col-md-9(data-aos="zoom-in")
              .box___style_4.h-100
                .row.justify-content-center.mb-3
                  .col-7
                    figure.mb-4(data-aos="fade-left")
                      img(src='@/assets/curso/temas/t3/img17.svg', alt="" style="max-width: 90px").m-auto
                  h4.text-center Información
                  p.mb-0.text-center Comprende bases de datos, documentos, registros financieros, expedientes, imágenes de videovigilancia y cualquier información estratégica o confidencial de la organización.
          .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
            .bloque-texto-g__img(
              :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t3/img18.jpg')})` }")
            .bloque-texto-g__texto.p-4
              p.mb-0 Las #[b amenazas] corresponden a eventos o circunstancias que pueden afectar los activos de la organización. Estas pueden originarse por ciberataques, desastres naturales, fallas tecnológicas, errores humanos, sabotajes o accesos no autorizados. Su identificación constituye el punto de partida para la gestión del riesgo, ya que permite establecer controles orientados a prevenir incidentes y reducir sus posibles consecuencias (Woods, 2025).
      p.mb-5 Para proteger la información de una organización, es fundamental aplicar un análisis de riesgos que permita identificar los activos y gestionar las posibles amenazas:
      .row.align-items-center.m-0.mb-5
        .col-xl
          .row.align-items-center.justify-content-center.box___podcast(data-aos="zoom-in")
            .col-auto.mb-4.mb-lg-0
              figure(data-aos="fade-right")
                img(src="@/assets/curso/temas/t3/img19.svg" style="max-width: 220px").m-auto
            .col
              h4.mb-4 Pódcast
              TarjetaAudio.color-acento-contenido.mb-4(
                  texto="Etapas del análisis de riesgos en el sistema de gestión de seguridad de la información"
                  :audio="audio1"
                  @audio-hover="mostrarIndicadorTarjetaAudio = false"
                )
                  .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
        .col-xl-auto.d-none.d-xl-block
          figure(data-aos="fade-left")
            img(src="@/assets/curso/temas/t3/img20.png" ).m-auto
      p.mb-0 La aplicación de este proceso permite proteger los activos de información, fortalecer los controles de seguridad y mejorar la toma de decisiones relacionadas con la gestión del riesgo. Como resultado, la organización obtiene un inventario de activos clasificados según su nivel de criticidad, información que sirve de base para la elaboración de matrices de riesgos, análisis DOFA y demás herramientas utilizadas para la planificación estratégica y la gestión de la seguridad.
      Separador
      #t_3_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 3.2 Gestión de riesgos
      .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t3/img21.jpg')})` }")
        .bloque-texto-g__texto.p-4
          p.mb-0 La #[b gestión de riesgos] es el conjunto organizado y sistemático de actividades orientadas a identificar, analizar, evaluar, tratar, monitorear y comunicar los riesgos que pueden afectar el cumplimiento de los objetivos estratégicos, tácticos u operativos de una organización. Su propósito no consiste en eliminar todos los riesgos, sino en proporcionar criterios técnicos que permitan decidir cuáles deben aceptarse, mitigarse, transferirse o evitarse.
      p.mb-5 Este proceso requiere la formulación de políticas, estrategias y acciones preventivas que reduzcan la probabilidad de ocurrencia de eventos adversos y disminuyan sus posibles consecuencias. Además, integra la planificación, la participación de las personas y la mejora continua como elementos esenciales para fortalecer la capacidad de respuesta de las organizaciones. Para comprender este proceso es necesario reconocer algunos conceptos fundamentales:
      .bg___slider.mb-5
        .px-5
          .ajuste-slider(data-aos="zoom-in")
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Amenaza natural
                  p.mb-0 Evento originado por fenómenos naturales, como inundaciones, sismos, vendavales o deslizamientos, que puede afectar a las personas, la infraestructura o la continuidad de las operaciones.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t3/img22.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Amenaza antrópica
                  p.mb-0 Evento generado por la actividad humana, ya sea de manera accidental o intencional, como incendios, sabotajes, actos de vandalismo, terrorismo o ciberataques.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t3/img23.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Vulnerabilidad
                  p.mb-0 Conjunto de condiciones físicas, técnicas, humanas, sociales u organizacionales que incrementan la susceptibilidad de sufrir daños cuando una amenaza se materializa.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t3/img24.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Riesgo
                  p.mb-0 Resultado de la interacción entre una amenaza y el nivel de vulnerabilidad existente, lo que determina la probabilidad de que ocurra un evento y la magnitud de sus consecuencias.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t3/img25.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Desastre
                  p.mb-0 Situación en la que el riesgo se materializa con una magnitud que supera la capacidad de respuesta de la organización o de la comunidad afectada.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t3/img26.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Prevención y mitigación
                  p.mb-0 Estrategias dirigidas a reducir la probabilidad de ocurrencia de un evento y a disminuir sus efectos mediante controles técnicos, administrativos y operativos.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t3/img27.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Organización ciudadana
                  p.mb-0 Participación coordinada de la comunidad en actividades de prevención, preparación y respuesta frente a emergencias, fortaleciendo la gestión integral del riesgo.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t3/img28.png', alt='' style="max-width: 500px").m-auto
      .row.justify-content-center.align-items-center.mb-5
        .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
          figure
            img(src='@/assets/curso/temas/t3/img29.png', alt='').m-auto
        .col-xl
          p La gestión del riesgo debe entenderse como un proceso articulado que involucra a las organizaciones, las autoridades y la ciudadanía mediante acciones permanentes de prevención, preparación, respuesta y recuperación.
          .box___style_5.fit___box_1(data-aos="fade-left")
            p.mb-0 Es importante recordar que el #[b escenario de riesgo] resulta de la relación entre una amenaza y las condiciones de vulnerabilidad existentes. En consecuencia, las acciones de mitigación pueden orientarse a disminuir la amenaza cuando sea posible o, con mayor frecuencia, a reducir la vulnerabilidad mediante la implementación de controles que fortalezcan la capacidad de respuesta de la organización.
      .titles___box_tercer_nivel.mb-5(data-aos="fade-right")
        .col-lg-auto
          figure
            img(src="@/assets/curso/temas/t1/img20.svg" style="max-width: 60px").m-auto
        .col
          h3 Características de la gestión de riesgos
      .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t3/img30.jpg')})` }")
        .bloque-texto-g__texto.p-4
          p.mb-0 La gestión del riesgo posee características que orientan su implementación en cualquier organización y facilitan la toma de decisiones basada en criterios técnicos. Entre ellas se destacan su enfoque preventivo, su integración con los procesos institucionales y su capacidad para adaptarse a las necesidades específicas de cada organización.
      p.mb-5 En el sector de la vigilancia y seguridad privada, estas características adquieren especial importancia debido a la diversidad de riesgos presentes durante la prestación del servicio:
      .row.align-items-center.mb-5
        .col-xl-auto(data-aos="fade-right")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t3/img31.png", alt="" ).m-auto
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-left")
            .row(titulo="Contextualidad").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Los riesgos se evalúan de acuerdo con los objetivos específicos del servicio, como los tiempos de respuesta establecidos en los acuerdos de nivel de servicio (#[i Service Level Agreement - SLA]), la protección de personas o la preservación de evidencias.
            .row(titulo="Integralidad").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Considera de manera conjunta los riesgos operativos, físicos, tecnológicos, cibernéticos, legales y organizacionales, evitando que el análisis se limite únicamente a la seguridad física.
            .row(titulo="Proporcionalidad").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Las medidas de control deben ser coherentes con el nivel de criticidad del servicio y con la magnitud de los riesgos identificados.
            .row(titulo="Iteratividad y mejora continua").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Requiere la actualización permanente de la gestión mediante el ciclo PHVA (#[b Planear, Hacer, Verificar y Actuar]), incorporando las lecciones aprendidas después de incidentes, auditorías o cambios en el entorno.
            .row(titulo="Basada en evidencia").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Las decisiones deben fundamentarse en información objetiva, como bitácoras, registros de eventos, estadísticas, reportes de incidentes, registros de alarmas y demás evidencias que permitan establecer prioridades.
      p.mb-0 La aplicación de estas características permite que la gestión del riesgo sea un proceso dinámico y orientado a la mejora continua. En el ámbito de la vigilancia y seguridad privada, facilita la toma de decisiones, justifica las inversiones en infraestructura, tecnología y capacitación (como sistemas de alimentación ininterrumpida (UPS), cámaras de seguridad o programas de formación del personal) y fortalece el cumplimiento de los compromisos contractuales frente a los clientes.
      Separador
      #t_3_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 3.3 Técnicas de clasificación y valoración de riesgos
      .box___style_3.mb-5(data-aos="zoom-in")
        .row.align-items-center
          .col-xl.order-2.order-lg-1.fit___box_container
            p.mb-0 La clasificación y valoración de riesgos permite determinar cuáles situaciones requieren mayor atención y cuáles pueden ser aceptadas o monitoreadas. Para ello, se emplean metodologías que facilitan el análisis de la probabilidad de ocurrencia y el impacto que un evento puede generar sobre las personas, los activos o la continuidad de las operaciones. Estas técnicas constituyen una herramienta fundamental para priorizar recursos y definir las medidas de control más apropiadas.
          .col-xl-auto.order-1.order-lg-2
            figure
              img(src='@/assets/curso/temas/t3/img32.png', alt='').m-auto
      p.mb-5.text-center De acuerdo con el tipo de información disponible, la valoración de riesgos puede realizarse mediante dos enfoques principales:
      .row.justify-content-center.mb-5
        .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
          .box___card_sinbordes.h-100
            .row.justify-content-center.mb-3
              .col-12
                figure.mb-4
                  img(src='@/assets/curso/temas/t3/img33.jpg', alt="" ).m-auto
              h4.text-center Cualitativo
              .box___card_sinbordes_p
                p.mb-0 Se basa en la experiencia, el conocimiento del contexto y el juicio de los expertos para clasificar los riesgos en categorías, generalmente mediante matrices de probabilidad e impacto.
        .col-xl-4.col-md-9(data-aos="fade-left")
          .box___card_sinbordes.h-100
            .row.justify-content-center.mb-3
              .col-12
                figure.mb-4
                  img(src='@/assets/curso/temas/t3/img34.jpg', alt="" ).m-auto
              h4.text-center Cuantitativo
              .box___card_sinbordes_p
                p.mb-0 Utiliza información numérica y herramientas estadísticas para calcular la probabilidad de ocurrencia y las posibles consecuencias de los riesgos, permitiendo obtener resultados más precisos cuando existe información suficiente.
      .titles___box_tercer_nivel.mb-5(data-aos="fade-right")
        .col-lg-auto
          figure
            img(src="@/assets/curso/temas/t1/img20.svg" style="max-width: 60px").m-auto
        .col
          h3 Matriz de probabilidad e impacto (5 × 5)
      .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t3/img35.jpg')})` }")
        .bloque-texto-g__texto.p-4
          p.mb-0 Una de las herramientas más utilizadas para valorar riesgos es la #[b matriz de probabilidad e impacto (5 × 5)]. Esta metodología permite clasificar los riesgos mediante una valoración semicuantitativa, asignando un valor tanto a la probabilidad de ocurrencia como al impacto esperado. La combinación de ambos criterios facilita la priorización de los riesgos y la definición de acciones de tratamiento.
      .row.align-items-center.mb-5
        .col-xl-auto.d-none.d-xl-block(data-aos="zoom-in")
          figure
            img(src='@/assets/curso/temas/t2/img5.svg', alt='').m-auto
        .col-xl
          p.mb-0 En el ámbito de la vigilancia y seguridad privada, esta metodología permite evaluar situaciones como las agresiones al personal, los hurtos, los actos de vandalismo o las fallas en los sistemas tecnológicos. Por ejemplo, si la probabilidad de una agresión contra un guarda de seguridad se valora en 4 (alta) y el impacto también corresponde a 4 (mayor), el resultado orienta la implementación inmediata de controles preventivos y correctivos. La matriz utiliza dos variables principales para determinar el nivel de riesgo:
      .color___box_3
        .px-5
          .row.justify-content-center.mb-5
            .col-xl-6
              .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                h5 Tabla 2.
                span Escala de evaluación de riesgos
              .tabla-a(data-aos="zoom-in")
                table
                  thead
                    tr
                      th.ajuste-border-tabla.texto-left Variable
                      th.texto-left Escala de valoración
                  tbody
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Probabilidad (P)
                      td.texto-left 
                        ol.lista-ol--cuadro.mb-0
                          li
                            .lista-ol--cuadro__vineta
                              span 1
                            | 
                            p.mb-0 Muy baja.
                          li 
                            .lista-ol--cuadro__vineta
                              span 2
                            | 
                            p.mb-0 Baja.
                          li 
                            .lista-ol--cuadro__vineta
                              span 3
                            | 
                            p.mb-0 Media.
                          li 
                            .lista-ol--cuadro__vineta
                              span 4
                            | 
                            p.mb-0 Alta.
                          li 
                            .lista-ol--cuadro__vineta
                              span 5
                            | 
                            p.mb-0 Muy alta.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Impacto (I)
                      td.texto-left 
                        ol.lista-ol--cuadro.mb-0
                          li
                            .lista-ol--cuadro__vineta
                              span 1
                            | 
                            p.mb-0 Insignificante.
                          li 
                            .lista-ol--cuadro__vineta
                              span 2
                            | 
                            p.mb-0 Menor.
                          li 
                            .lista-ol--cuadro__vineta
                              span 3
                            | 
                            p.mb-0 Moderado.
                          li 
                            .lista-ol--cuadro__vineta
                              span 4
                            | 
                            p.mb-0 Mayor.
                          li 
                            .lista-ol--cuadro__vineta
                              span 5
                            | 
                            p.mb-0 Catastrófico.
          p.mb-5 Una vez asignados los valores de probabilidad e impacto, ambos se multiplican para obtener un puntaje comprendido entre #[b 1 y 25], el cual permite establecer el nivel de prioridad para la gestión del riesgo.
      .row.justify-content-center.mb-5
        .col-xl-8
          .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
            h5 Tabla 3.
            span Interpretación de los niveles de riesgo
          .tabla-a(data-aos="zoom-in")
            table
              thead
                tr
                  th.ajuste-border-tabla.texto-left Resultado (P × I)
                  th.texto-left Interpretación
              tbody
                tr.ajuste-color-tabla
                  td.ajuste-border-tabla.texto-left.text-weight-bold 1 a 5
                  td.texto-left #[b Riesgo bajo:] puede aceptarse y mantenerse bajo seguimiento periódico.
                tr
                  td.ajuste-border-tabla.texto-left.text-weight-bold 6 a 12
                  td.texto-left #[b Riesgo medio:] requiere planificar e implementar medidas de control.
                tr.ajuste-color-tabla
                  td.ajuste-border-tabla.texto-left.text-weight-bold 13 a 25
                  td.texto-left #[b Riesgo alto:] exige intervención inmediata y seguimiento permanente.
      .row.justify-content-center.mb-5
        .col-xl-10
          .box___style_6.mb-5(data-aos="flip-up").mb-5
            .row.align-items-center
              .col-xl-auto.col-md-2.mb-3.mb-lg-0.mb-md-0(data-aos="fade-right")
                figure
                  img(src='@/assets/curso/temas/t2/img2.svg', alt='' style="width: 85px").m-auto
              .col-xl.col-md-10
                p.mb-0 La construcción de la matriz requiere un proceso organizado que garantice una valoración objetiva y consistente de los riesgos identificados:
          PasosA.color-acento-contenido(tipo="n")
            .row.align-items-center
              .col-lg.mb-4.mb-lg-0
                h3 Identificación de riesgos
                p.mb-0 Recopilar información mediante registros históricos, reportes de incidentes, bitácoras, observaciones de rondas e información obtenida durante entrevistas con el personal operativo.
              .col-auto(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/temas/t3/img36.png', alt='' style="width: 300px").m-auto
            .row.align-items-center
              .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/temas/t3/img37.png', alt='' style="width: 300px").m-auto
              .col-lg.fit___pasosA-left
                h3 Asignación de la probabilidad
                p.mb-0 Estimar la frecuencia de ocurrencia de cada riesgo con base en el historial de eventos y la escala definida por la organización.
            .row.align-items-center
              .col-lg.mb-4.mb-lg-0
                h3 Asignación del impacto
                p.mb-0 Evaluar las posibles consecuencias económicas, operativas, legales, reputacionales o relacionadas con la seguridad de las personas.
              .col-auto(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/temas/t3/img38.png', alt='' style="width: 300px").m-auto
            .row.align-items-center
              .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/temas/t3/img39.png', alt='' style="width: 300px").m-auto
              .col-lg.fit___pasosA-left
                h3 Cálculo del nivel de riesgo
                p.mb-0 Multiplicar los valores de probabilidad e impacto para obtener el puntaje y determinar la prioridad del riesgo.
            .row.align-items-center
              .col-lg.mb-4.mb-lg-0
                h3 Definición del tratamiento
                p.mb-0 Seleccionar las medidas de gestión más apropiadas, como mitigación mediante controles técnicos o administrativos, transferencia del riesgo mediante seguros, evitación o aceptación cuando corresponda.
              .col-auto(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/temas/t3/img40.png', alt='' style="width: 300px").m-auto
            .row.align-items-center
              .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/temas/t3/img41.png', alt='' style="width: 300px").m-auto
              .col-lg.fit___pasosA-left
                h3 Registro y seguimiento
                p.mb-0 Documentar los resultados, asignar responsables, establecer tiempos de ejecución y realizar seguimiento para verificar la eficacia de las acciones implementadas.
      p.mb-5 La aplicación de esta metodología facilita la toma de decisiones basada en criterios técnicos, optimiza la asignación de recursos y fortalece la gestión preventiva en los servicios de vigilancia y seguridad privada.
      .call___to_action.mb-5(data-aos="flip-up")
        .row.align-items-center
          .col-xl-auto.mb-4.mb-lg-0(data-aos="fade-right")
            figure
              img(src='@/assets/curso/temas/t3/img42.svg', alt='' style="max-width: 85px").m-auto
          .col-xl.mb-4.mb-lg-0
            h4 Formato matriz de probabilidad e impacto
            p.mb-0 Para complementar este tema y desarrollar ejercicios prácticos de valoración de riesgos, consulte el #[b Anexo 1. Formato matriz de probabilidad e impacto], el cual presenta un ejemplo de aplicación de esta metodología.
          .col-xl-2
            a.boton.color-acento-botones(:href="obtenerLink('/downloads/Anexos/Anexo_1_Formato_matriz_probabilidad_impacto.xlsx')" target="_blank" type="application/pdf")
              span Descargar
              i.fas.fa-file-download
      .titles___box_tercer_nivel.mb-5(data-aos="fade-right")
        .col-lg-auto
          figure
            img(src="@/assets/curso/temas/t1/img20.svg" style="max-width: 60px").m-auto
        .col
          h3 Metodología #[i Bow-Tie] (diagrama de corbata)
      .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t3/img43.jpg')})` }")
        .bloque-texto-g__texto.p-4
          p.mb-0 La metodología #[b #[i Bow-Tie]] es una herramienta gráfica utilizada para la gestión de riesgos que facilita la identificación de las causas de un evento no deseado, las consecuencias que pueden derivarse de él y las medidas de control necesarias para prevenirlo o mitigar sus efectos. Su nombre proviene de la forma del diagrama, similar a una corbata de lazo, en la que el evento crítico se ubica en el centro, las causas aparecen a la izquierda y las consecuencias a la derecha.
      .row.align-items-center.mb-5
        .col-xl-auto.d-none.d-xl-block(data-aos="zoom-in")
          figure
            img(src='@/assets/curso/temas/t1/img21.svg', alt='').m-auto
        .col-xl
          p.mb-0 Esta metodología integra elementos del análisis de árbol de fallos y del árbol de eventos, permitiendo comprender de manera integral la relación entre los peligros, las barreras de control y las posibles consecuencias. Por esta razón, es ampliamente utilizada para apoyar la toma de decisiones y fortalecer la comunicación de los riesgos dentro de las organizaciones. Su estructura se organiza mediante los siguientes elementos:
      .row.justify-content-center.mb-5
        .col-xl-10
          .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
            h5 Figura 1.
            span Diagrama de corbata 
          figure(data-aos="zoom-in")
            img(src='@/assets/curso/temas/t3/img44.png', alt='Diagrama de corbata sobre análisis de riesgos con causas, barreras preventivas, evento crítico, barreras de mitigación y consecuencias. ').m-auto
      .row.align-items-center.mb-5
        .col-xl-auto(data-aos="fade-right")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t3/img45.png", alt="" ).m-auto
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-left")
            .row(titulo="Evento crítico").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Representa la situación no deseada que se pretende evitar, ubicada en el centro del análisis.
            .row(titulo="Causas").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Corresponden a los factores o situaciones que pueden originar el evento no deseado.
            .row(titulo="Barreras preventivas").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Son los controles implementados para impedir que las causas provoquen el evento crítico.
            .row(titulo="Consecuencias").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Son los efectos que pueden producirse cuando el evento crítico ocurre.
            .row(titulo="Barreras de mitigación").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Comprenden las medidas destinadas a reducir el impacto o las consecuencias del evento una vez que se ha presentado.
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          p En el ámbito de la vigilancia y seguridad privada, esta metodología facilita la identificación de controles redundantes, la detección de puntos débiles y la definición de estrategias de prevención y respuesta. Por ejemplo, ante el riesgo de #[b pérdida de control del centro de monitoreo], las causas pueden corresponder a fallas eléctricas, errores operativos o fallas en las comunicaciones; mientras que las consecuencias pueden incluir la interrupción del monitoreo, la pérdida de evidencias y la afectación del servicio. Entre ambos elementos se ubican las barreras preventivas y de mitigación que permiten controlar el riesgo.
          .box___style_1(data-aos="fade-right")
            p.mb-0 Otro ejemplo corresponde al riesgo de #[b incendio en una sala de servidores]. En este caso, las causas pueden estar relacionadas con cortocircuitos o sobrecargas eléctricas; las barreras preventivas incluyen protecciones diferenciales y programas de mantenimiento eléctrico; las consecuencias pueden reflejarse en la pérdida de grabaciones, la interrupción de las comunicaciones o la indisponibilidad de los sistemas; finalmente, las barreras de mitigación pueden incluir copias de respaldo en un sitio alterno, almacenamiento en la nube y procedimientos de recuperación de la información.
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t3/img46.png', alt='').m-auto
      .call___to_action.mb-5(data-aos="flip-up")
        .row.align-items-center
          .col-xl-auto.mb-4.mb-lg-0(data-aos="fade-right")
            figure
              img(src='@/assets/curso/temas/t3/img42.svg', alt='' style="max-width: 85px").m-auto
          .col-xl.mb-4.mb-lg-0
            h4 #[i Bowtie Methodology]
            p.mb-0 Para profundizar en esta metodología, consulte el #[b Anexo 2. #[i Bowtie Methodology]].
          .col-xl-2
            a.boton.color-acento-botones(:href="obtenerLink('/downloads/Anexos/Anexo_2_Bowtie_Methodology.pdf')" target="_blank" type="application/pdf")
              span Descargar
              i.fas.fa-file-download
      .titles___box_tercer_nivel.mb-5(data-aos="fade-right")
        .col-lg-auto
          figure
            img(src="@/assets/curso/temas/t1/img20.svg" style="max-width: 60px").m-auto
        .col
          h3 HAZOP y JSA
      p.mb-5 Las metodologías #[b HAZOP (#[i Hazard and Operability Study])] y #[b JSA (#[i Job Safety Analysis])] permiten analizar los riesgos asociados con procesos y actividades específicas, favoreciendo la identificación de peligros y la implementación de medidas preventivas antes de ejecutar una tarea. Aunque ambas metodologías buscan fortalecer la gestión del riesgo, cada una posee un enfoque particular:
      TabsC.color-acento-contenido.mb-5(data-aos="zoom-in")
        .py-3.py-md-4(titulo="HAZOP (Estudio de Peligros y Operabilidad)")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                h5 Figura 2.
                span Diagrama HAZOP
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/temas/t3/img47.png', alt='Esquema HAZOP para evaluación de riesgos con campos de nodo del proceso, desviación, causa potencial, consecuencias, salvaguardas, recomendaciones y evaluación del riesgo. ').m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 HAZOP (Estudio de Peligros y Operabilidad)
              p.mb-0 Analiza procesos mediante la identificación de desviaciones respecto a los parámetros normales de operación. Es ampliamente utilizado en procesos industriales para identificar peligros y establecer medidas de control.
        .py-3.py-md-4(titulo="JSA (<em>Job Safety Analysis</em> o Análisis de Seguridad del Trabajo)")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                h5 Figura 3.
                span Diagrama JSA
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/temas/t3/img48.png', alt='Tabla JSA para identificación de peligros y evaluación de riesgos con datos de actividad, proceso, controles existentes, nivel de riesgo, controles recomendados y responsables. ').m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 JSA (#[i Job Safety Analysis] o Análisis de Seguridad del Trabajo)
              p.mb-0 Evalúa cada una de las etapas de una tarea específica para identificar los peligros asociados y definir controles antes de iniciar la actividad. Resulta especialmente útil en labores como el transporte de valores, el abastecimiento de generadores o las actividades desarrolladas por el personal de vigilancia.
      p.mb-5 La aplicación de estas metodologías permite fortalecer la prevención de accidentes, estandarizar procedimientos de trabajo seguro y reducir la exposición del personal a situaciones de riesgo.
      .call___to_action.mb-3(data-aos="flip-up")
        .row.align-items-center
          .col-xl-auto.mb-4.mb-lg-0(data-aos="fade-right")
            figure
              img(src='@/assets/curso/temas/t3/img42.svg', alt='' style="max-width: 85px").m-auto
          .col-xl.mb-4.mb-lg-0
            h4 Anexo 3. Análisis de riesgos y peligros – HAZOP especializado y liviano
            p.mb-0 Se invita a leer el documento "#[b Análisis de riesgos y peligros – HAZOP especializado y liviano]", donde se aborda la metodología HAZOP para la identificación, evaluación y control de riesgos y peligros en procesos industriales.
          .col-xl-2
            a.boton.color-acento-botones(:href="obtenerLink('/downloads/Anexos/Anexo_3_analisis_riesgos_peligros_especializado_liviano.pdf')" target="_blank" type="application/pdf")
              span Descargar
              i.fas.fa-file-download
      .call___to_action.mb-5(data-aos="flip-up")
        .row.align-items-center
          .col-xl-auto.mb-4.mb-lg-0(data-aos="fade-right")
            figure
              img(src='@/assets/curso/temas/t3/img42.svg', alt='' style="max-width: 85px").m-auto
          .col-xl.mb-4.mb-lg-0
            h4 Anexo 4. Análisis de seguridad laboral (JSA)
            p.mb-0 Se invita a leer el documento "#[b Análisis de seguridad laboral (JSA)]", donde se presenta un formato estructurado para identificar peligros, evaluar riesgos y definir controles de seguridad antes de ejecutar una tarea.
          .col-xl-2
            a.boton.color-acento-botones(:href="obtenerLink('/downloads/Anexos/Anexo_4_Analisis_seguridad_laboral_JSA.pdf')" target="_blank" type="application/pdf")
              span Descargar
              i.fas.fa-file-download
      .titles___box_tercer_nivel.mb-5(data-aos="fade-right")
        .col-lg-auto
          figure
            img(src="@/assets/curso/temas/t1/img20.svg" style="max-width: 60px").m-auto
        .col
          h3 Análisis cuantitativo (ALE)
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          .box___style_1.color___1.fit___box_1(data-aos="fade-right")
            p El #[b #[i Annualized Loss Expectancy (ALE)]] es una metodología de análisis cuantitativo que permite estimar la pérdida económica esperada durante un año como consecuencia de un riesgo determinado. Su aplicación facilita la toma de decisiones relacionadas con inversiones en controles de seguridad, especialmente cuando se dispone de información financiera y estadística suficiente.
            p.text-center El cálculo del ALE se expresa mediante la siguiente relación:
            .box___style_7(data-aos="fade-right")   
              h5.mb-0 ALE = Valor expuesto × Probabilidad anual de ocurrencia
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t3/img49.png', alt='').m-auto
      p.mb-5 Este método resulta útil para comparar el costo de implementar una medida de protección frente a las pérdidas que podrían generarse si el riesgo llegara a materializarse:
      .tarjeta--container.row.justify-content-center.mb-5.m-0(data-aos="zoom-in")
        .col-xl-6.col-md-10.tarjeta.color-acento-contenido.p-5.mb-4.mb-lg-0
          .row.d-flex.align-items-end.mb-4
            .col-xl-auto.mb-3.mb-lg-0(data-aos="fade-right")
              figure
                img(src='@/assets/curso/temas/t3/img50.svg', alt='' style="max-width: 100px")
            .col-xl
              h2.mb-0 Estimación de pérdidas económicas
          p.mb-0 Calcular el costo anual esperado por la pérdida de grabaciones de una central de monitoreo para determinar la conveniencia de implementar servidores redundantes o sistemas de respaldo en la nube.
        .col-xl-6.col-md-10.tarjeta.color-primario.text-white.p-5
          .row.d-flex.align-items-end.mb-4
            .col-xl-auto.mb-3.mb-lg-0(data-aos="fade-right")
              figure
                img(src='@/assets/curso/temas/t3/img51.svg', alt='' style="max-width: 100px")
            .col-xl
              h2.mb-0 Justificación de inversiones
          p.mb-0 Comparar el costo de instalar un sistema de alimentación eléctrica ininterrumpida (UPS) frente a las pérdidas ocasionadas por interrupciones del servicio o indisponibilidad de los sistemas tecnológicos.
      p.mb-5 La utilización de esta metodología facilita la asignación eficiente de recursos y fortalece la toma de decisiones basada en información objetiva.
      .call___to_action.mb-0(data-aos="flip-up")
        .row.align-items-center
          .col-xl-auto.mb-4.mb-lg-0(data-aos="fade-right")
            figure
              img(src='@/assets/curso/temas/t3/img42.svg', alt='' style="max-width: 85px").m-auto
          .col-xl.mb-4.mb-lg-0
            h4 #[b #[i Annualized Loss Expectancy (ALE)]]
            p.mb-0 Para profundizar en este tema, consulte el #[b Anexo 5. #[i Anexo 5. Annualized Loss Expectancy (ALE) Methodology]].
          .col-xl-2
            a.boton.color-acento-botones(:href="obtenerLink('/downloads/Anexos/Anexo_5_Annualized_Loss_Expectancy_Methodology.pdf')" target="_blank" type="application/pdf")
              span Descargar
              i.fas.fa-file-download
      Separador
      #t_3_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 3.4 Pasos para gestionar los riesgos
      p.mb-5 La gestión del riesgo requiere un proceso sistemático que permita identificar, evaluar y controlar los eventos que pueden afectar la prestación del servicio. Cada etapa debe quedar documentada, asignar responsables y ser objeto de seguimiento periódico para garantizar su eficacia.
      .bg___slider.mb-5
        .px-5
          .ajuste-slider(data-aos="zoom-in")
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Identificar los riesgos
                  p.mb-0 Reconocer los eventos que pueden afectar la operación mediante talleres de trabajo, revisión de bitácoras, análisis de incidentes e inspecciones, con el fin de elaborar el inventario de riesgos.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t3/img52.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Valorar el riesgo
                  p.mb-0 Determinar la probabilidad de ocurrencia y el impacto de cada riesgo mediante una matriz de probabilidad e impacto u otra metodología semicuantitativa, conforme a los lineamientos de la ISO 31000.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t3/img53.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Tratar el riesgo
                  p.mb-0 Definir la estrategia más adecuada para cada riesgo: evitarlo, reducirlo mediante controles, transferirlo (por ejemplo, mediante seguros) o aceptarlo cuando resulte técnicamente justificable.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t3/img54.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Monitorear
                  p.mb-0 Realizar seguimiento periódico a los riesgos identificados y verificar la eficacia de los controles implementados, actualizando la información cuando se presenten cambios en el contexto o en las operaciones.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t3/img55.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Registrar
                  p.mb-0 Documentar las evaluaciones realizadas, las decisiones adoptadas, las evidencias de implementación y los resultados obtenidos, garantizando la trazabilidad y la posibilidad de auditoría.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t3/img56.png', alt='' style="max-width: 500px").m-auto
      p.mb-0 La aplicación sistemática de estas metodologías fortalece la gestión integral del riesgo, facilita la toma de decisiones basada en evidencia y contribuye a proteger a las personas, los activos y la continuidad de las operaciones en los servicios de vigilancia y seguridad privada.
      Separador
      #t_3_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 3.5 Verificación de riesgos
      .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t3/img57.jpg')})` }")
        .bloque-texto-g__texto.p-4
          p.mb-0 La gestión del riesgo no finaliza con la identificación, valoración y tratamiento de los riesgos. También requiere comprobar que las medidas de control implementadas funcionan correctamente y que los eventos son detectados y atendidos de manera oportuna. La verificación permite evaluar la eficacia de los controles, identificar oportunidades de mejora y fortalecer la capacidad de respuesta de la organización.
      p.mb-5 En los servicios de vigilancia y seguridad privada, la verificación puede realizarse mediante diferentes mecanismos que combinan el análisis de información técnica, la supervisión del personal y la ejecución de ejercicios operativos:
      TabsC.color-acento-contenido.mb-5(data-aos="zoom-in")
        .py-3.py-md-4(titulo="Verificación técnica")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t3/img58.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Verificación técnica
              p.mb-0 Comprende el análisis de registros (logs) de los sistemas de videovigilancia (VMS), la revisión de eventos del sistema de control de acceso, la validación de la trazabilidad GPS de las patrullas, el análisis de alarmas generadas y atendidas, y la verificación del funcionamiento de los equipos tecnológicos. Estas actividades permiten confirmar que los sistemas operan correctamente y que la respuesta fue adecuada.
        .py-3.py-md-4(titulo="Verificación humana")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t3/img59.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Verificación humana
              p.mb-0 Incluye la revisión de bitácoras diligenciadas por el personal de vigilancia, actas de inspección, reportes de novedades, registros de rondas y la comprobación del funcionamiento de dispositivos utilizados durante la operación.
        .py-3.py-md-4(titulo="Pruebas y simulacros")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t3/img60.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Pruebas y simulacros
              p.mb-0 Consisten en ejercicios programados o no anunciados que permiten evaluar los tiempos de respuesta, la coordinación entre los diferentes actores y la efectividad de los procedimientos establecidos. La #[b ISO 22320:2018] establece que las organizaciones deben disponer de estructuras para responder, comunicar y realizar seguimiento a los incidentes durante las emergencias.
      p.mb-5 En una empresa de vigilancia, por ejemplo, puede desarrollarse un simulacro de intrusión en un centro comercial para evaluar el tiempo requerido por el guarda de seguridad para verificar la alarma, el desplazamiento de la patrulla, el registro de la evidencia y la aplicación de los protocolos establecidos. Los resultados obtenidos permiten ajustar procedimientos, fortalecer los controles y mejorar la capacidad de respuesta.
      .call___to_action.mb-5(data-aos="flip-up")
        .row.align-items-center
          .col-xl-auto.mb-4.mb-lg-0(data-aos="fade-right")
            figure
              img(src='@/assets/curso/temas/t3/img42.svg', alt='' style="max-width: 85px").m-auto
          .col-xl.mb-4.mb-lg-0
            h4 Matriz de metodología de la evaluación
            p.mb-0 Para ampliar este tema, consulte el #[b Anexo 6. Matriz de metodología de la evaluación de riesgos del Plan de Seguridad].
          .col-xl-2
            a.boton.color-acento-botones(:href="obtenerLink('/downloads/Anexos/Anexo_6_Matriz_metodologia_evaluacion_riesgos_Plan.pdf')" target="_blank" type="application/pdf")
              span Descargar
              i.fas.fa-file-download
      .titles___box_tercer_nivel.mb-5(data-aos="fade-right")
        .col-lg-auto
          figure
            img(src="@/assets/curso/temas/t1/img20.svg" style="max-width: 60px").m-auto
        .col
          h3 Determinación de la probabilidad de ocurrencia de los riesgos
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          .box___style_1.mb-3.fit___box_1(data-aos="fade-right")
            p.mb-0 #[b La probabilidad de ocurrencia] expresa la posibilidad de que un riesgo identificado llegue a materializarse y genere consecuencias sobre las personas, los bienes, la información o la continuidad de las operaciones.
          .row.align-items-center
            .col-xl-auto.d-none.d-xl-block(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/temas/t2/img5.svg', alt='').m-auto
            .col-xl
              p.mb-0 En el ámbito de la vigilancia y seguridad privada, esta estimación requiere analizar la frecuencia histórica de los eventos, las vulnerabilidades existentes y las condiciones particulares del entorno, como el horario del servicio, el nivel de exposición, el valor de los activos protegidos, la iluminación del lugar o las características del área de influencia.
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t3/img61.png', alt='').m-auto
      p.mb-5 Para realizar esta estimación es necesario utilizar información proveniente de diversas fuentes que permitan fundamentar el análisis en datos objetivos.
      .bg___carrusel
        .px-5
          .row.align-items-center.mb-5
            .col-xl-4(data-aos="fade-right")
              figure.d-none.d-xl-block
                img(src='@/assets/curso/temas/t3/img62.png', alt='' style="max-width: 350px").m-auto
            .col-xl-8(data-aos="fade-left")
              SlyderF(columnas="col-lg-6 col-xl-6")
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t3/img63.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Bitácoras históricas
                  p.mb-0.text-center Permiten identificar la frecuencia y el comportamiento de incidentes ocurridos durante la prestación del servicio.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t3/img64.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Reportes de autoridades
                  p.mb-0.text-center Aportan información sobre hechos delictivos y condiciones de seguridad del entorno.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t3/img65.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Análisis estacionales
                  p.mb-0.text-center Facilitan la identificación de periodos con mayor incidencia de determinados eventos, como el incremento de hurtos durante temporadas comerciales.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t3/img66.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Inspecciones de vulnerabilidad
                  p.mb-0.text-center Permiten detectar debilidades relacionadas con iluminación, puntos ciegos, accesos, cerramientos y demás condiciones que incrementan la exposición al riesgo.
          .row.justify-content-center.align-items-center.mb-5
            .col-xl.mb-4.mb-lg-0
              .box___style_1.fit___box_2(data-aos="fade-right")
                p.mb-0 La #[b ISO 31000:2018] recomienda que la evaluación de la probabilidad se base en información verificable y se adapte al contexto interno y externo de la organización, con el fin de obtener resultados confiables para la toma de decisiones.
            .col-xl-auto.col-md-9(data-aos="fade-left")
              figure
                img(src='@/assets/curso/temas/t3/img67.png', alt='').m-auto
      p.mb-5 Existen diferentes metodologías para estimar la probabilidad de ocurrencia de un riesgo, cuya selección depende de la disponibilidad de información y del nivel de detalle requerido:
      .row.align-items-center.mb-5
        .col-xl-auto(data-aos="fade-right")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t3/img68.png", alt="" ).m-auto
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-left")
            .row(titulo="Cualitativo").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Utiliza categorías descriptivas, como muy baja, baja, media, alta y muy alta, para estimar la probabilidad cuando no existen datos estadísticos suficientes. Por ejemplo, la probabilidad de una intrusión durante la jornada diurna puede clasificarse como media de acuerdo con los antecedentes y las condiciones actuales del servicio. 
            .row(titulo="Semicuantitativo").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Emplea escalas numéricas, generalmente de 1 a 5, para representar la probabilidad y posteriormente combinarla con el impacto mediante una matriz de riesgos. Por ejemplo, una probabilidad de #[b 3] y un impacto de #[b 3] generan un nivel de riesgo de #[b 9], información que facilita la priorización de controles.
            .row(titulo="Cuantitativo").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Calcula la probabilidad mediante datos históricos y métodos estadísticos. Un ejemplo consiste en dividir el número de intrusiones registradas durante un periodo entre el total de servicios prestados, obteniendo un porcentaje de ocurrencia que sirve como base para la toma de decisiones.
            .row(titulo="Herramientas de cuantificación avanzada").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Utilizan modelos estadísticos y simulaciones, como el método de #[b Monte Carlo], para analizar múltiples escenarios y estimar la probabilidad de eventos poco frecuentes, pero con consecuencias de alta severidad. Estas herramientas son especialmente útiles en infraestructuras críticas y sistemas tecnológicos complejos.
      p.mb-5 La determinación adecuada de la probabilidad de ocurrencia permite establecer prioridades, seleccionar controles acordes con el nivel de exposición y optimizar la asignación de recursos para proteger a las personas, los activos y la continuidad de las operaciones. Además, constituye un insumo esencial para la valoración integral de los riesgos y la mejora continua de los sistemas de gestión.
      .titles___box_tercer_nivel.mb-5(data-aos="fade-right")
        .col-lg-auto
          figure
            img(src="@/assets/curso/temas/t1/img20.svg" style="max-width: 60px").m-auto
        .col
          h3 Tratamiento del riesgo
      .bloque-texto-g.bloque-texto-g--inverso.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t3/img69.jpg')})` }")
        .bloque-texto-g__texto.p-4
          p.mb-0 Una vez identificados y valorados los riesgos, es necesario definir las medidas que permitan reducir su probabilidad de ocurrencia, disminuir sus consecuencias o decidir la forma más adecuada de administrarlos. Este proceso se conoce como #[b tratamiento del riesgo] y comprende la selección, planificación e implementación de acciones orientadas a modificar el nivel de riesgo hasta alcanzar un nivel aceptable para la organización.
      p.mb-5 El tratamiento del riesgo incluye la elaboración de un plan de acción que establece las actividades por desarrollar, los responsables, los recursos necesarios, los plazos de ejecución y los mecanismos de seguimiento que permitan verificar la eficacia de las medidas implementadas. Las principales estrategias de tratamiento del riesgo son las siguientes:
      TabsC.color-acento-contenido.mb-5(data-aos="zoom-in")
        .py-3.py-md-4(titulo="Evitar")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t3/img70.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Evitar
              p.mb-0 Consiste en eliminar la fuente del riesgo o impedir que este llegue a materializarse. Por ejemplo, cerrar un acceso secundario que facilita el ingreso no autorizado a una instalación.
        .py-3.py-md-4(titulo="Reducir o mitigar")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t3/img71.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Reducir o mitigar
              p.mb-0 Comprende la implementación de controles técnicos, administrativos u operativos que disminuyen la probabilidad de ocurrencia o el impacto del riesgo. Entre estas medidas se encuentran la instalación de iluminación inteligente, cámaras con analítica de video, sistemas de detección, controles de acceso y programas de capacitación para el personal.
        .py-3.py-md-4(titulo="Transferir o compartir")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t3/img72.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Transferir o compartir
              p.mb-0 Consiste en trasladar total o parcialmente las consecuencias del riesgo a un tercero mediante mecanismos como pólizas de seguros, contratos, acuerdos de nivel de servicio (#[i Service Level Agreement - SLA]) o procesos de subcontratación. Aunque la responsabilidad económica puede compartirse, el riesgo continúa existiendo y requiere seguimiento.
        .py-3.py-md-4(titulo="Aceptar")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t3/img73.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Aceptar
              p.mb-0 Implica asumir conscientemente el riesgo cuando el costo de implementar controles supera los beneficios esperados. Esta decisión debe quedar debidamente documentada y acompañarse de mecanismos mínimos de seguimiento.
      p.mb-5 La estrategia de transferencia puede implementarse mediante diferentes mecanismos contractuales y financieros que permiten distribuir las responsabilidades derivadas de la materialización de un riesgo:
      .row.align-items-center.mb-5
        .col-xl-auto(data-aos="fade-right")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t3/img74.png", alt="" ).m-auto
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-left")
            .row(titulo="Pólizas de seguros").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Permiten trasladar el impacto económico derivado de eventos como robos, vandalismo, daños a la infraestructura o interrupciones del servicio, de manera que la aseguradora asuma las pérdidas cubiertas por la póliza.
            .row(titulo="Contratos").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Incorporan cláusulas relacionadas con la responsabilidad de las partes, límites de indemnización, obligaciones de mantenimiento, reportes de fallas y exclusiones aplicables durante la prestación del servicio.
            .row(titulo="Acuerdos de nivel de servicio (SLA)").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Definen indicadores de desempeño, tiempos de respuesta y sanciones por incumplimiento, permitiendo trasladar parte del riesgo operativo al proveedor del servicio.
            .row(titulo="Subcontratación (<em>Outsourcing</em>)").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Permite asignar a un proveedor especializado la responsabilidad sobre actividades como el mantenimiento de sistemas de videovigilancia, redes de comunicaciones o equipos tecnológicos, reduciendo la exposición de la organización frente a riesgos técnicos específicos.
      p.mb-0 La #[b ISO 31000:2018] establece que la gestión del riesgo no busca eliminar todos los riesgos, ya que esto resulta técnicamente inviable. Su propósito consiste en proporcionar criterios que permitan decidir, de manera fundamentada, cuáles riesgos deben evitarse, reducirse, compartirse o aceptarse, de acuerdo con los objetivos y el contexto de la organización.
      Separador
      #t_3_6.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 3.6 Autocontrol y manejo de crisis
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          p A pesar de las medidas preventivas implementadas, siempre existe la posibilidad de que un riesgo llegue a materializarse. En estas circunstancias, la capacidad de respuesta del personal resulta determinante para proteger la vida de las personas, minimizar las pérdidas y mantener la continuidad de las operaciones. Por ello, el autocontrol y el manejo adecuado de las crisis constituyen competencias esenciales para el personal de vigilancia y seguridad privada.
          .box___style_1.fit___box_1(data-aos="fade-right")
            p.mb-0 El autocontrol hace referencia a la capacidad del vigilante u operador para gestionar sus emociones, mantener la calma y actuar conforme a los procedimientos establecidos, incluso en situaciones de alta presión.
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t3/img75.png', alt='').m-auto
      .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t3/img76.jpg')})` }")
        .bloque-texto-g__texto.p-4
          h5 Autocontrol
          br
          p.mb-0 Capacidad del personal para reconocer y gestionar sus respuestas físicas y emocionales durante situaciones de presión, manteniendo una comunicación efectiva, el cumplimiento de los protocolos operativos y una adecuada toma de decisiones. El autocontrol disminuye la posibilidad de cometer errores y favorece una respuesta racional frente a eventos críticos.
      p.mb-5 El desarrollo de esta competencia fortalece la capacidad del personal para responder de manera segura, coordinada y eficiente ante incidentes y emergencias.
      .titles___box_tercer_nivel.mb-5(data-aos="fade-right")
        .col-lg-auto
          figure
            img(src="@/assets/curso/temas/t1/img20.svg" style="max-width: 60px").m-auto
        .col
          h3 Situación de crisis
      .row.align-items-center.mb-5
        .col-xl-auto.d-none.d-xl-block(data-aos="zoom-in")
          figure
            img(src='@/assets/curso/temas/t1/img21.svg', alt='').m-auto
        .col-xl
          p.mb-0 Una #[b crisis] corresponde a un evento inesperado que altera de manera significativa el desarrollo normal de las operaciones, compromete la seguridad de las personas o los bienes, afecta la continuidad del servicio y exige una respuesta rápida, coordinada y basada en la toma de decisiones bajo condiciones de incertidumbre. Las crisis pueden clasificarse según el origen del evento que las genera:
      TabsC.color-acento-contenido.mb-5(data-aos="zoom-in")
        .py-3.py-md-4(titulo="Naturales")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t3/img77.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Naturales
              p.mb-0 Se originan por fenómenos naturales, como sismos, inundaciones, vendavales o deslizamientos, y pueden requerir evacuaciones, activación de planes de emergencia y coordinación con las autoridades competentes.
        .py-3.py-md-4(titulo="Tecnológicas u operativas")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t3/img78.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Tecnológicas u operativas
              p.mb-0 Son consecuencia de fallas en equipos, sistemas eléctricos, combustibles o procesos operativos, que pueden ocasionar incendios, explosiones, derrames o interrupciones del servicio, requiriendo la intervención de brigadas de emergencia y organismos de socorro.
        .py-3.py-md-4(titulo="Humanas o de seguridad")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t3/img79.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Humanas o de seguridad
              p.mb-0 Se derivan de acciones intencionales o comportamientos humanos, como atentados, disturbios, agresiones colectivas, tiradores activos, sabotajes o actos de vandalismo. Su atención requiere la coordinación con la Policía Nacional y la aplicación de protocolos de control de acceso, evacuación y protección de personas.
      p.mb-5 La preparación frente a situaciones de crisis requiere planes de respuesta actualizados, capacitación permanente, simulacros periódicos y una adecuada coordinación entre el personal de vigilancia, los organismos de emergencia y las autoridades competentes. Estos elementos fortalecen la capacidad de reacción de la organización y contribuyen a reducir las consecuencias de los eventos críticos.
      .titles___box_tercer_nivel.mb-5(data-aos="fade-right")
        .col-lg-auto
          figure
            img(src="@/assets/curso/temas/t1/img20.svg" style="max-width: 60px").m-auto
        .col
          h3 Técnicas de valoración de crisis
      .box___style_3.mb-5(data-aos="zoom-in")
        .row.align-items-center
          .col-xl.order-2.order-lg-1.fit___box_container
            p.mb-0 La valoración de una crisis permite determinar la gravedad de un evento, establecer prioridades de intervención y seleccionar las acciones de respuesta más apropiadas. Para ello, existen diferentes técnicas que facilitan la recopilación de información, la evaluación de la situación y la toma de decisiones en función del nivel de riesgo. La selección de la técnica dependerá de las características del evento, de los recursos disponibles y de la experiencia del personal encargado de la respuesta.
          .col-xl-auto.order-1.order-lg-2
            figure
              img(src='@/assets/curso/temas/t3/img80.png', alt='').m-auto
      p.mb-5 En los servicios de vigilancia y seguridad privada, estas herramientas contribuyen a optimizar la coordinación operativa y a reducir el impacto de los incidentes sobre las personas, los bienes y la continuidad del servicio: 
      .row.align-items-center.mb-5
        .col-xl-auto(data-aos="fade-right")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t3/img81.png", alt="" ).m-auto
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-left")
            .row(titulo="Evaluación rápida (<em>triage</em> del incidente)").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Consiste en realizar una valoración inicial durante los primeros segundos del evento, respondiendo preguntas como: ¿hay personas lesionadas?, ¿el incidente continúa activo?, ¿existe riesgo de propagación?, ¿es necesaria una evacuación? Esta información permite establecer la prioridad de la respuesta.
            .row(titulo="Matriz de probabilidad y severidad").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Relaciona la probabilidad de ocurrencia con la gravedad de las consecuencias para establecer el nivel de prioridad de la respuesta, determinando si el evento requiere atención inmediata, monitoreo o registro.
            .row(titulo="Valoración dinámica").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Comprende la reevaluación periódica de la situación durante el desarrollo del evento, registrando los cambios observados y ajustando las decisiones de acuerdo con la evolución de la emergencia.
            .row(titulo="<em>Triage</em> sanitario básico (ABC)").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Se aplica cuando existen múltiples víctimas y permite establecer prioridades de atención mediante la valoración de la vía aérea, la respiración y la circulación, facilitando la coordinación con los servicios médicos de emergencia.
            .row(titulo="Manejo de crisis").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Corresponde al conjunto de procesos, estructuras y procedimientos destinados a preparar, coordinar, responder y recuperar la operación frente a eventos que comprometen la seguridad de las personas, los bienes o la continuidad del servicio. Se apoya en protocolos, roles claramente definidos y mecanismos de coordinación, como las salas de crisis.
      p.mb-0 La aplicación de estas técnicas facilita una respuesta organizada y oportuna, permitiendo adaptar las decisiones a la evolución del evento y optimizar el uso de los recursos disponibles.
      Separador
      #t_3_7.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 3.7 Concepto de eventos y situaciones de emergencia
      .color___box_3
        .px-5
          p.mb-5 Una #[b emergencia] es un evento inesperado que pone en riesgo la vida, la salud de las personas, la infraestructura, los bienes o el medio ambiente y que requiere una respuesta inmediata para controlar sus efectos. Entre las situaciones que pueden generar una emergencia se encuentran los incendios, las fallas eléctricas, los derrames de sustancias peligrosas, las agresiones, los atentados, las amenazas de bomba, las explosiones, los incidentes tecnológicos, las inundaciones, los movimientos sísmicos y las emergencias médicas, entre otras. Las emergencias pueden clasificarse considerando diferentes criterios, lo que facilita la planificación de la respuesta y la asignación de recursos:
          .row.justify-content-center.mb-5
            .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
              .box___style_4.h-100
                .row.justify-content-center.mb-3
                  .col-7
                    figure.mb-4(data-aos="fade-right")
                      img(src='@/assets/curso/temas/t3/img82.svg', alt="" style="max-width: 90px").m-auto
                  h4.text-center Según su naturaleza
                  p.mb-0.text-center Pueden ser naturales, tecnológicas o de origen humano.
            .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
              .box___style_4.h-100
                .row.justify-content-center.mb-3
                  .col-7
                    figure.mb-4(data-aos="fade-right")
                      img(src='@/assets/curso/temas/t3/img83.svg', alt="" style="max-width: 90px").m-auto
                  h4.text-center Según su alcance
                  p.mb-0.text-center Pueden afectar un área local, una zona determinada o comprometer toda la organización.
            .col-xl-3.col-md-9(data-aos="zoom-in")
              .box___style_4.h-100
                .row.justify-content-center.mb-3
                  .col-7
                    figure.mb-4(data-aos="fade-left")
                      img(src='@/assets/curso/temas/t3/img84.svg', alt="" style="max-width: 90px").m-auto
                  h4.text-center Según su severidad
                  p.mb-0.text-center Se clasifican como leves, moderadas o críticas, de acuerdo con la magnitud de sus consecuencias y los recursos requeridos para su atención.
          p.mb-5 En el sector de la vigilancia y seguridad privada, la preparación del personal constituye un elemento esencial para garantizar una respuesta eficaz. Esto implica conocer los procedimientos establecidos en los planes de prevención, preparación y respuesta ante emergencias (PPRE), así como desarrollar la capacidad para valorar rápidamente la situación y activar los protocolos correspondientes. Durante la atención inicial de una emergencia, resulta fundamental aplicar acciones que permitan obtener información confiable y tomar decisiones oportunas:
          TabsC.color-acento-contenido.mb-5(data-aos="zoom-in")
            .py-3.py-md-4(titulo="Detección del evento")
              .row.justify-content-center.align-items-center
                .col-xl-5.order-2.order-lg-1
                  figure
                    img(src='@/assets/curso/temas/t3/img85.png', alt="" ).m-auto
                .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
                  h4.txt--purpura.mb-4 Detección del evento
                  p.mb-0 Identificar la emergencia mediante observación directa, sistemas de videovigilancia (VMS), sensores de humo, gas, alarmas automáticas o reportes del personal.
            .py-3.py-md-4(titulo="Valoración inicial")
              .row.justify-content-center.align-items-center
                .col-xl-5.order-2.order-lg-1
                  figure
                    img(src='@/assets/curso/temas/t3/img86.png', alt="" ).m-auto
                .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
                  h4.txt--purpura.mb-4 Valoración inicial
                  p.mb-0 Determinar si existen personas lesionadas, riesgo de propagación, peligros para los equipos de respuesta o necesidad de evacuación, aplicando criterios de priorización según la probabilidad y el impacto del evento.
            .py-3.py-md-4(titulo="Activación de protocolos")
              .row.justify-content-center.align-items-center
                .col-xl-5.order-2.order-lg-1
                  figure
                    img(src='@/assets/curso/temas/t3/img87.png', alt="" ).m-auto
                .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
                  h4.txt--purpura.mb-4 Activación de protocolos
                  p.mb-0 Ejecutar los procedimientos establecidos en el Plan de Prevención, Preparación y Respuesta ante Emergencias (PPRE), coordinando las acciones con las brigadas de emergencia y los organismos de socorro cuando sea necesario.
      .titles___box_tercer_nivel.mb-5(data-aos="fade-right")
        .col-lg-auto
          figure
            img(src="@/assets/curso/temas/t1/img20.svg" style="max-width: 60px").m-auto
        .col
          h3 Lista de verificación para la respuesta ante eventos, emergencias o crisis
      p.mb-5 La atención de un evento crítico requiere seguir una secuencia organizada de actividades que facilite la coordinación, reduzca la posibilidad de errores y garantice la conservación de la evidencia. Estas acciones deben adaptarse a los riesgos específicos de cada instalación y revisarse periódicamente para mantener su efectividad.
      .bg___slider.mb-5
        .px-5
          .ajuste-slider(data-aos="zoom-in")
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Micro-pausa
                  p.mb-0 Realizar una pausa breve de entre 10 y 15 segundos para controlar la reacción emocional, organizar la información disponible y favorecer la toma de decisiones racionales.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t3/img88.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Identificación del evento
                  p.mb-0 Determinar la naturaleza del incidente mediante la información proveniente de alarmas, cámaras de videovigilancia, sensores o reportes recibidos.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t3/img89.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Activación del procedimiento
                  p.mb-0 Aplicar el protocolo correspondiente, activar el Plan de Emergencias, informar a las brigadas y efectuar las notificaciones externas cuando corresponda.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t3/img90.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Comunicación
                  p.mb-0 Transmitir información clara y precisa indicando qué ocurrió, dónde ocurrió, cuándo sucedió y quiénes se encuentran involucrados, facilitando la coordinación entre los diferentes actores.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t3/img91.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Registro y preservación de evidencias
                  p.mb-0 Documentar la hora del evento, las acciones ejecutadas y conservar los registros disponibles, como grabaciones del sistema de videovigilancia, fotografías, bitácoras y demás evidencias relevantes.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t3/img92.png', alt='' style="max-width: 500px").m-auto
      p.mb-5 Como ejemplo de aplicación, ante una #[b alarma de incendio], el operador de la central de monitoreo verifica la situación mediante el sistema de videovigilancia, confirma la presencia de humo, activa el sistema de evacuación por voz, notifica al cuerpo de bomberos, coordina la evacuación con los responsables de la instalación y registra las evidencias generadas durante la atención del incidente, conforme a los lineamientos de la #[b NFPA 72] y la #[b ISO 22320].
      .call___to_action.mb-0(data-aos="flip-up")
        .row.align-items-center
          .col-xl-auto.mb-4.mb-lg-0(data-aos="fade-right")
            figure
              img(src='@/assets/curso/temas/t3/img42.svg', alt='' style="max-width: 85px").m-auto
          .col-xl.mb-4.mb-lg-0
            h4 Instructivo para elaborar una lista de chequeo
            p.mb-0 Para complementar este tema, consulte el #[b Anexo 7. Instructivo para elaborar una lista de chequeo], el cual presenta una metodología para diseñar listas de verificación aplicables a la gestión de eventos, emergencias y crisis.
          .col-xl-2
            a.boton.color-acento-botones(:href="obtenerLink('/downloads/Anexos/Anexo_7_Instructivo_elaborar_lista_chequeo.pdf')" target="_blank" type="application/pdf")
              span Descargar
              i.fas.fa-file-download
      Separador
      #t_3_8.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 3.8 Plan de emergencias
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          p El #[b plan de emergencias] es un documento operativo que establece la organización, los procedimientos, los recursos y las responsabilidades necesarias para prevenir, atender y recuperar la operación frente a situaciones que puedan poner en riesgo la vida de las personas, los bienes, la infraestructura o la continuidad del servicio. Su propósito es facilitar una respuesta coordinada y oportuna, minimizando las consecuencias de los eventos adversos (Ley 1523 de 2012; Decreto 2157 de 2017).
          .box___style_1.fit___box_1(data-aos="fade-right")
            p.mb-0 La elaboración de este plan requiere identificar los riesgos presentes en la organización, definir la estructura de respuesta y establecer procedimientos claros para actuar antes, durante y después de una emergencia.
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t3/img93.png', alt='').m-auto
      .titles___box_tercer_nivel.mb-5(data-aos="fade-right")
        .col-lg-auto
          figure
            img(src="@/assets/curso/temas/t1/img20.svg" style="max-width: 60px").m-auto
        .col
          h3 Componentes del plan de emergencias
      p.mb-5 Todo plan de emergencias debe incorporar los elementos necesarios para orientar la preparación, la respuesta y la recuperación de la organización frente a diferentes escenarios de riesgo.
      .row.align-items-center.mb-5
        .col-xl-auto(data-aos="fade-right")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t3/img94.png", alt="" ).m-auto
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-left")
            .row(titulo="Portada y vigencia").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Contiene la identificación de la organización, la fecha de emisión, la vigencia del documento y la información de contacto de las personas responsables.
            .row(titulo="Política y objetivos").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Define el compromiso institucional con la protección de la vida, los bienes, el medio ambiente y la continuidad de las operaciones.
            .row(titulo="Alcance y escenarios de riesgo").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Identifica los peligros y las emergencias que pueden presentarse, como incendios, fallas eléctricas, intrusiones, sismos o interrupciones de los servicios críticos.
            .row(titulo="Organización para la respuesta").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Establece la estructura organizacional para atender emergencias, definiendo funciones y responsabilidades del coordinador general, coordinador operativo y líderes de brigadas de evacuación, primeros auxilios, control de incendios y comunicaciones.
            .row(titulo="Procedimientos de actuación").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Describe las acciones que deben ejecutarse durante cada tipo de emergencia, incluyendo la detección, notificación, contención, evacuación, atención inicial y recuperación de la operación.
      .row.align-items-center.mb-5
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-right")
            .row(titulo="Rutas de evacuación y puntos de encuentro").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Define los recorridos de evacuación, las salidas de emergencia, los puntos de reunión y los responsables de cada área.
            .row(titulo="Medios de comunicación").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Incluye directorios de contacto, procedimientos de comunicación interna y externa, formatos de notificación y mecanismos de coordinación con las autoridades competentes.
            .row(titulo="Inventario de recursos").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Relaciona los equipos y elementos disponibles para atender emergencias, como extintores, botiquines, elementos de protección personal, sistemas de alimentación ininterrumpida (UPS), plantas eléctricas y equipos de comunicación.
            .row(titulo="Programa de capacitación y simulacros").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Establece la programación de actividades de formación, entrenamiento y simulacros, así como los registros que evidencian su realización.
            .row(titulo="Lecciones aprendidas y mejora continua").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Documenta las observaciones derivadas de incidentes, emergencias y simulacros para fortalecer permanentemente el plan y actualizar los procedimientos.
        .col-xl-auto(data-aos="fade-left")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t3/img95.png", alt="" ).m-auto
      p.mb-5 La implementación de estos componentes permite fortalecer la capacidad de respuesta de la organización y garantizar que cada integrante conozca sus responsabilidades durante una situación de emergencia.
      .titles___box_tercer_nivel.mb-5(data-aos="fade-right")
        .col-lg-auto
          figure
            img(src="@/assets/curso/temas/t1/img20.svg" style="max-width: 60px").m-auto
        .col
          h3 Pruebas y simulacros del plan de emergencias
      .row.align-items-center.mb-5
        .col-xl-auto.d-none.d-xl-block(data-aos="zoom-in")
          figure
            img(src='@/assets/curso/temas/t2/img5.svg', alt='').m-auto
        .col-xl
          p.mb-0 Los #[b simulacros] constituyen una herramienta fundamental para verificar la eficacia del plan de emergencias y evaluar la capacidad de respuesta de la organización frente a diferentes escenarios. Estos ejercicios permiten identificar oportunidades de mejora, fortalecer la coordinación entre los equipos de respuesta y validar el funcionamiento de los procedimientos establecidos. Dependiendo de los objetivos de entrenamiento, los simulacros pueden desarrollarse de diferentes formas:
      TabsC.color-acento-contenido.mb-5(data-aos="zoom-in")
        .py-3.py-md-4(titulo="Total")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t3/img96.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Total
              p.mb-0 Involucra a toda la organización y permite evaluar de manera integral la aplicación del plan de emergencias.
        .py-3.py-md-4(titulo="Parcial")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t3/img97.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Parcial
              p.mb-0 Se desarrolla únicamente en un área, proceso o dependencia específica para evaluar procedimientos concretos.
        .py-3.py-md-4(titulo="Anunciado")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t3/img98.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Anunciado
              p.mb-0 Los participantes conocen previamente la fecha y las condiciones del ejercicio, favoreciendo el entrenamiento y el aprendizaje.
        .py-3.py-md-4(titulo="No anunciado")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t3/img99.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 No anunciado
              p.mb-0 Se realiza sin previo aviso para evaluar la capacidad de reacción, la toma de decisiones y la aplicación de los procedimientos en condiciones similares a una emergencia real.
      p.mb-5 La evaluación de los simulacros debe considerar indicadores que permitan medir el desempeño de la organización y establecer acciones de mejora:
      .bg___carrusel
        .px-5
          .row.align-items-center.mb-5
            .col-xl-4(data-aos="fade-right")
              figure.d-none.d-xl-block
                img(src='@/assets/curso/temas/t3/img100.png', alt='' style="max-width: 350px").m-auto
            .col-xl-8(data-aos="fade-left")
              SlyderF(columnas="col-lg-6 col-xl-6")
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t3/img101.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Tiempo de evacuación
                  p.mb-0.text-center Mide el tiempo requerido para evacuar las áreas comprometidas de forma segura.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t3/img102.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Porcentaje de personas evacuadas
                  p.mb-0.text-center Determina el nivel de cumplimiento de la evacuación respecto al total de ocupantes.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t3/img103.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Tiempo de respuesta de las brigadas
                  p.mb-0.text-center Evalúa la oportunidad con la que los equipos de emergencia ejecutan las acciones previstas en el plan.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t3/img104.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Calidad del informe posterior al ejercicio
                  p.mb-0.text-center Analiza la identificación de fortalezas, oportunidades de mejora y acciones correctivas derivadas del simulacro.
          .row.justify-content-center.align-items-center.mb-0
            .col-xl.mb-4.mb-lg-0
              p Durante la atención de una emergencia, cuando exista incertidumbre y no se identifique un peligro inminente, resulta recomendable verificar la información antes de escalar la respuesta. Esta verificación puede realizarse mediante sistemas de videovigilancia, sensores adicionales o contacto con los responsables de la instalación. Asimismo, todas las decisiones adoptadas deben registrarse, indicando quién las tomó, las razones que las justifican y las evidencias disponibles, de acuerdo con los lineamientos de la #[b ISO 22320:2018].
              .box___style_1(data-aos="fade-right")
                .row.align-items-center
                  .col-xl-auto.d-none.d-xl-block(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t2/img2.svg', alt='').m-auto
                  .col-xl
                    p.mb-0 La actualización periódica del plan de emergencias, el desarrollo de simulacros y la evaluación continua de los resultados fortalecen la preparación de la organización, mejoran la capacidad de respuesta del personal y contribuyen a proteger la vida, los bienes y la continuidad de las operaciones.
            .col-xl-auto.col-md-9(data-aos="fade-left")
              figure
                img(src='@/assets/curso/temas/t3/img105.png', alt='').m-auto

</template>

<script>
import audio1 from '@/assets/curso/temas/t3/audios/Etapas_analisis_riesgos_sistema_gestion_seguridad_informacion.mp3'
export default {
  name: 'Tema3',
  data: () => ({
    audio1,
    mostrarIndicadorTarjetaAudio: true,
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
