<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido(data-aos="flip-up")
        .titulo-principal__numero
          span 4
        h1 Área técnica
      .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t4/img1.jpg')})` }")
        .bloque-texto-g__texto.p-4
          p.mb-0 El desempeño del personal de vigilancia y seguridad privada depende, en gran medida, de sus capacidades para percibir el entorno, mantener la atención, procesar información y tomar decisiones oportunas. Estas habilidades cognitivas permiten detectar situaciones anómalas, verificar eventos y responder de manera eficiente ante incidentes, reduciendo la posibilidad de errores durante la operación.
      #t_4_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 4.1 Capacidades cognitivas aplicadas a la vigilancia
      p.mb-5 Las funciones cognitivas constituyen la base del proceso de observación y análisis desarrollado por el personal de vigilancia. Su fortalecimiento mejora la capacidad para identificar riesgos, interpretar información y actuar conforme a los procedimientos establecidos:
      TabsC.color-acento-contenido.mb-5(data-aos="zoom-in")
        .py-3.py-md-4(titulo="Percepción")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t4/img2.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Percepción
              p.mb-0 Es el proceso mediante el cual el operador interpreta los estímulos recibidos a través de los sentidos y construye una representación del entorno. La percepción está influenciada por la experiencia, las expectativas y el contexto; por ello, es importante desarrollar procesos de observación objetivos y verificables.
        .py-3.py-md-4(titulo="Atención")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t4/img3.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Atención
              p.mb-0 Corresponde a la capacidad para seleccionar y procesar la información relevante. Comprende la atención sostenida, necesaria para mantener la vigilancia durante periodos prolongados; la atención selectiva, que permite filtrar estímulos irrelevantes; y la atención dividida, indispensable para gestionar varias tareas simultáneamente.
        .py-3.py-md-4(titulo="Agilidad mental")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t4/img4.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Agilidad mental
              p.mb-0 Es la capacidad para procesar información con rapidez, cambiar de una tarea a otra sin perder precisión y tomar decisiones bajo condiciones de presión. Esta habilidad puede fortalecerse mediante entrenamiento, simulaciones y ejercicios prácticos.
      p.mb-0 Estas capacidades son esenciales para garantizar una vigilancia efectiva y una adecuada verificación de los eventos detectados durante la operación.
      Separador
      #t_4_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 4.2 Importancia en la vigilancia y el monitoreo
      .bloque-texto-g.bloque-texto-g--inverso.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t4/img5.jpg')})` }")
        .bloque-texto-g__texto.p-4
          p.mb-0 La calidad del servicio de vigilancia depende de la capacidad del operador para mantener la atención durante periodos prolongados, identificar señales relevantes y responder oportunamente ante situaciones de riesgo. Diversos estudios han demostrado que la capacidad para detectar eventos poco frecuentes disminuye con el tiempo, fenómeno conocido como #[b decremento de la vigilancia (#[i vigilance decrement])], aspecto que debe considerarse en la organización de los turnos, los periodos de descanso y la distribución de las tareas.
      p.mb-5 Para fortalecer estas habilidades es recomendable desarrollar actividades de entrenamiento que favorezcan la concentración, la rapidez de respuesta y la toma de decisiones:
      .row.align-items-center.mb-5
        .col-xl-auto(data-aos="fade-right")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t4/img6.png", alt="" ).m-auto
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-left")
            .row(titulo="Sesiones de atención sostenida").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Realizar ejercicios de detección durante periodos de 15 a 30 minutos con retroalimentación inmediata para fortalecer la concentración.
            .row(titulo="Ejercicios de cambio de foco").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Alternar actividades como el monitoreo de cámaras y la atención de comunicaciones internas para desarrollar la atención dividida.
            .row(titulo="Simulacros con distractores").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Incorporar llamadas falsas, ruidos o múltiples eventos simultáneos para fortalecer la priorización y la capacidad de respuesta.
            .row(titulo="Micro-pausas y ergonomía visual").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Aplicar la regla #[b 20-20-20], que consiste en dirigir la mirada durante 20 segundos hacia un punto ubicado aproximadamente a seis metros de distancia cada 20 minutos, con el fin de reducir la fatiga visual.
            .row(titulo="Guiones o listas mentales").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Aplicar secuencias como #[b detectar, confirmar, comunicar  y actuar], facilitando la toma de decisiones y reduciendo la carga cognitiva.
      p.mb-0 La aplicación permanente de estas estrategias contribuye a mejorar el desempeño del personal y a disminuir la probabilidad de errores durante la prestación del servicio.
      Separador
      #t_4_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 4.3 Recomendaciones operativas
      .row.justify-content-center.align-items-center.mb-0
        .col-xl.mb-4.mb-lg-0
          p La organización del trabajo influye directamente en el desempeño del personal de vigilancia. Por esta razón, es importante implementar medidas que reduzcan la fatiga y favorezcan el mantenimiento de la atención durante toda la jornada laboral.
          .box___style_1.color___1.fit___box_1(data-aos="fade-right")
            ul.fa-ul.estilo___ul.mb-0
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Organización de turnos:] establecer rotaciones, micro-pausas y alternancia de tareas para disminuir el efecto del decremento de la vigilancia.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Supervisión y retroalimentación:] desarrollar simulacros periódicos, sesiones de análisis posteriores a los ejercicios (#[i debriefing]) y actividades de retroalimentación que fortalezcan el reconocimiento de patrones y la toma de decisiones.
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t4/img7.png', alt='').m-auto
      Separador
      #t_4_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 4.4 Técnicas de observación
      .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t4/img8.jpg')})` }")
        .bloque-texto-g__texto.p-4
          p.mb-0 La observación constituye una de las competencias más importantes en la vigilancia y seguridad privada. No consiste únicamente en mirar el entorno, sino en identificar información relevante, describirla de manera objetiva y utilizarla como apoyo para la toma de decisiones y la producción de evidencia.
      p.mb-5 Una observación efectiva debe ser objetiva, precisa, verificable y documentada, indicando siempre la fecha, la hora, la ubicación y las condiciones en las que ocurrió el hecho observado. Las principales técnicas utilizadas en seguridad privada son las siguientes:
      .bg___slider.mb-0
        .px-5
          .ajuste-slider(data-aos="zoom-in")
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  figure
                    img(src='@/assets/curso/temas/t4/img9.png', alt='' style="max-width: 500px").m-auto
                .col-xl-6
                  h4 Observación sistemática
                  p.mb-0 Se desarrolla mediante recorridos programados y listas de verificación que permiten inspeccionar aspectos como iluminación, cerraduras, extintores, accesos y presencia de personas no autorizadas.
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  figure
                    img(src='@/assets/curso/temas/t4/img10.png', alt='' style="max-width: 500px").m-auto
                .col-xl-6
                  h4 Observación por muestreo
                  p.mb-0 Consiste en realizar observaciones durante diferentes horarios o periodos para identificar patrones de comportamiento o variaciones en la ocurrencia de incidentes.
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  figure
                    img(src='@/assets/curso/temas/t4/img11.png', alt='' style="max-width: 500px").m-auto
                .col-xl-6
                  h4 Observación participativa
                  p.mb-0 Complementa la observación directa mediante conversaciones breves con usuarios, residentes o personal del lugar para obtener información adicional sobre el contexto.
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  figure
                    img(src='@/assets/curso/temas/t4/img12.png', alt='' style="max-width: 500px").m-auto
                .col-xl-6
                  h4 Monitoreo mediante CCTV
                  p.mb-0 Comprende la supervisión de cámaras mediante recorridos automáticos y manuales, utilización de posiciones predefinidas (#[i presets]) en cámaras PTZ (#[i Pan-Tilt-Zoom]) y verificación de eventos utilizando al menos dos fuentes de información, como imágenes, sensores o reportes del personal.
      Separador
      #t_4_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 4.5 Procedimientos para la verificación de alarmas
      .color___box_3
        .px-5
          p.mb-5 La verificación de alarmas requiere un procedimiento estandarizado que permita confirmar la existencia de un evento antes de activar la respuesta correspondiente: 
          .row.justify-content-center.mb-0
            .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
              .box___style_4.h-100
                .row.justify-content-center.mb-3
                  .col-7
                    figure.mb-4(data-aos="fade-right")
                      img(src='@/assets/curso/temas/t4/img13.svg', alt="" style="max-width: 90px").m-auto
                  h4.text-center Detectar
                  p.mb-0.text-center Identificar la señal, el objeto o la persona que genera la alarma mediante los sistemas de monitoreo.
            .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
              .box___style_4.h-100
                .row.justify-content-center.mb-3
                  .col-7
                    figure.mb-4(data-aos="fade-right")
                      img(src='@/assets/curso/temas/t4/img14.svg', alt="" style="max-width: 90px").m-auto
                  h4.text-center Acercar
                  p.mb-0.text-center Utilizar las funciones PTZ o el zoom digital para obtener una mejor visualización del evento.
            .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
              .box___style_4.h-100
                .row.justify-content-center.mb-3
                  .col-7
                    figure.mb-4(data-aos="fade-right")
                      img(src='@/assets/curso/temas/t4/img15.svg', alt="" style="max-width: 90px").m-auto
                  h4.text-center Corroborar
                  p.mb-0.text-center Confirmar la información mediante cámaras adicionales, sensores, registros de audio o comunicación con el personal ubicado en el sitio.
            .col-xl-3.col-md-9(data-aos="zoom-in")
              .box___style_4.h-100
                .row.justify-content-center.mb-3
                  .col-7
                    figure.mb-4(data-aos="fade-left")
                      img(src='@/assets/curso/temas/t4/img16.svg', alt="" style="max-width: 90px").m-auto
                  h4.text-center Decidir
                  p.mb-0.text-center Activar el procedimiento correspondiente cuando el evento sea confirmado o registrar la situación como posible falsa alarma cuando no existan evidencias suficientes.
          Separador
          #t_4_6.titulo-segundo.color-acento-contenido(data-aos="fade-right")
            h2 4.6 Técnicas para mejorar la objetividad en la observación
          p.mb-5 La calidad de los registros depende de la objetividad con la que se documentan los hechos. Para ello, es importante utilizar procedimientos estandarizados que reduzcan las interpretaciones subjetivas y faciliten la conservación de la evidencia:
          TabsC.color-acento-contenido.mb-0(data-aos="zoom-in")
            .py-3.py-md-4(titulo="Registro objetivo")
              .row.justify-content-center.align-items-center
                .col-xl-5.order-2.order-lg-1
                  figure
                    img(src='@/assets/curso/temas/t4/img17.png', alt="" ).m-auto
                .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
                  h4.txt--purpura.mb-4 Registro objetivo
                  p.mb-0 Documentar únicamente hechos verificables respondiendo las preguntas: ¿qué ocurrió?, ¿quién participó?, ¿cuándo ocurrió?, ¿dónde ocurrió? y ¿cómo sucedió?, evitando interpretaciones personales.
            .py-3.py-md-4(titulo="Conservación de evidencias")
              .row.justify-content-center.align-items-center
                .col-xl-5.order-2.order-lg-1
                  figure
                    img(src='@/assets/curso/temas/t4/img18.png', alt="" ).m-auto
                .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
                  h4.txt--purpura.mb-4 Conservación de evidencias
                  p.mb-0 Incorporar capturas de pantalla, fotografías, videos o testimonios que respalden la información registrada.
            .py-3.py-md-4(titulo="Formatos estandarizados")
              .row.justify-content-center.align-items-center
                .col-xl-5.order-2.order-lg-1
                  figure
                    img(src='@/assets/curso/temas/t4/img19.png', alt="" ).m-auto
                .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
                  h4.txt--purpura.mb-4 Formatos estandarizados
                  p.mb-0 Utilizar formularios que incluyan campos obligatorios, como identificación de la cámara, fecha, hora sincronizada, ubicación, descripción del evento y acciones ejecutadas.
      Separador
      #t_4_7.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 4.7 Procedimientos de observación
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          p Los procedimientos de observación corresponden a una secuencia organizada de actividades que permite obtener información confiable, objetiva y útil para la toma de decisiones. En el ámbito de la vigilancia y seguridad privada incluyen patrullajes periódicos, inspección de instalaciones, verificación del funcionamiento de equipos tecnológicos y elaboración de informes sobre las novedades identificadas.
          .box___style_1(data-aos="fade-right")
            .row.align-items-center
              .col-xl-auto.d-none.d-xl-block(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/temas/t2/img2.svg', alt='').m-auto
              .col-xl
                p.mb-0 La aplicación sistemática de estos procedimientos fortalece la capacidad de detección temprana, mejora la calidad de los registros y facilita la respuesta oportuna frente a incidentes, contribuyendo al cumplimiento de los objetivos del servicio de vigilancia y seguridad privada.
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t4/img20.png', alt='').m-auto
      .titles___box_tercer_nivel.mb-5(data-aos="fade-right")
        .col-lg-auto
          figure
            img(src="@/assets/curso/temas/t1/img20.svg" style="max-width: 60px").m-auto
        .col
          h3 Procedimiento operacional en la sala de monitoreo
      .row.align-items-center.mb-5
        .col-xl-auto.d-none.d-xl-block(data-aos="zoom-in")
          figure
            img(src='@/assets/curso/temas/t1/img21.svg', alt='').m-auto
        .col-xl
          p.mb-0 La sala de monitoreo constituye el centro de control desde donde se supervisan las señales generadas por cámaras, alarmas, sensores y demás sistemas tecnológicos de seguridad. Su operación requiere procedimientos estandarizados que permitan detectar oportunamente los incidentes, verificar los eventos, coordinar la respuesta y documentar todas las actuaciones realizadas.
      p.mb-5 El procedimiento operativo debe desarrollarse de manera secuencial para garantizar la continuidad del servicio y la trazabilidad de cada evento:
      .row.align-items-center.mb-5
        .col-xl-auto(data-aos="fade-right")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t4/img21.png", alt="" ).m-auto
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-left")
            .row(titulo="Inicio del turno").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Recibir formalmente el turno, revisar las novedades registradas y verificar el funcionamiento de los equipos del centro de monitoreo mediante una lista de comprobación.
            .row(titulo="Patrón de observación").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Organizar las cámaras por niveles de prioridad y realizar recorridos automáticos complementados con verificaciones manuales periódicas, especialmente en las zonas críticas.
            .row(titulo="Recepción y verificación de alarmas").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Analizar las señales recibidas utilizando funciones de acercamiento (PTZ), corroborar la información mediante cámaras adicionales, sensores o comunicación con el personal en sitio y determinar si el evento corresponde a una alarma real o a una falsa alarma.
            .row(titulo="Atención del evento").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Clasificar el incidente, activar el protocolo correspondiente, coordinar la respuesta con las autoridades o el personal operativo y conservar las evidencias digitales generadas durante el evento.
            .row(titulo="Cierre y mejora continua").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Analizar el desarrollo del incidente, identificar oportunidades de mejora, actualizar los procedimientos cuando sea necesario y registrar las lecciones aprendidas como parte del proceso de mejora continua.
      p.mb-5 La documentación de cada evento resulta indispensable para garantizar la trazabilidad de las actuaciones realizadas y facilitar los procesos de auditoría e investigación.
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          .box___style_1.fit___box_3(data-aos="fade-right")
            h5 Formato de verificación de alarmas
            p.mb-0 Fecha y hora sincronizadas (NTP), identificación de la cámara, descripción objetiva del evento, evidencias asociadas, acciones ejecutadas, responsable de la atención y hora de cierre del incidente. 
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t4/img22.png', alt='').m-auto
      .call___to_action.mb-0(data-aos="flip-up")
        .row.align-items-center
          .col-xl-auto.mb-4.mb-lg-0(data-aos="fade-right")
            figure
              img(src='@/assets/curso/temas/t3/img42.svg', alt='' style="max-width: 85px").m-auto
          .col-xl.mb-4.mb-lg-0
            h4 Recolección y manejo de datos
            p.mb-0 Se invita a leer el documento "#[b Recolección y manejo de datos]", donde se aborda la gestión de la información generada durante la prestación de servicios de vigilancia, incluyendo la recolección, protección, almacenamiento, cifrado, análisis y disposición de los datos de seguridad. 
          .col-xl-2
            a.boton.color-acento-botones(:href="obtenerLink('/downloads/Anexos/Anexo_8_Recoleccion_manejo_datos.pdf')" target="_blank" type="application/pdf")
              span Descargar
              i.fas.fa-file-download

</template>

<script>
export default {
  name: 'Tema4',
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
