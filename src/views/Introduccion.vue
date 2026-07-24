<template lang="pug">
  .curso-main-container.introduccion
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido(data-aos="flip-up")
        .titulo-principal__numero
          span
            i.fas.fa-info
        h1 Introducción
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          .box___style_1.mb-3(data-aos="fade-right")
            p.mb-0 La seguridad privada desempeña un papel fundamental en la protección de las personas, los bienes, la información y la continuidad de las operaciones en organizaciones públicas y privadas. Su ejercicio requiere el cumplimiento de un conjunto de normas, estándares y procedimientos que orientan la prestación del servicio, garantizando actuaciones responsables, eficientes y ajustadas al marco legal vigente. 
          p.mb-0 En este componente formativo se presentan los principales marcos de referencia que regulan la seguridad privada, así como los conceptos esenciales de Seguridad y Salud en el Trabajo (SST), gestión del riesgo, protección de activos, manejo de emergencias y aplicación de metodologías para la identificación, valoración y tratamiento de riesgos. Estos elementos permiten comprender la importancia de la prevención y de la mejora continua en las operaciones de seguridad. 
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/intro/img1.png', alt='').m-auto
      .box___style_2.mb-0(data-aos="zoom-in")
        .row.align-items-center
          .col-xl-auto
            figure
              img(src='@/assets/curso/temas/intro/img2.png', alt='').m-auto
          .col-xl.fit___box_container
            p.mb-0 El estudio de estos contenidos permitirá fortalecer las competencias necesarias para desempeñarse en el sector de la vigilancia y la seguridad privada, promoviendo la toma de decisiones fundamentadas, el cumplimiento de la normatividad, la protección de la información y la implementación de estrategias que contribuyan a la seguridad de las personas, las organizaciones y su entorno. 
      
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
