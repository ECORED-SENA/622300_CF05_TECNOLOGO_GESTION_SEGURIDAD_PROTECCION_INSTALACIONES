<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      // Para cuestionario usar: <ActividadController :cuestionario="cuestionario"/>
      // Para parrafo usar: <ActividadController :parrafo="parrafo"/>
      #Actividad                
      <ActividadController :cuestionario="cuestionario"/>

</template>

<script>
import ActividadController from '@ecored-sena/boulder-kit/plugin/components/actividad/ActividadController.vue'

export default {
  name: 'ActividadDidactica',
  components: {
    ActividadController,
  },
  data: () => ({
    cuestionario: {
      tema: 'Marco normativo y gestión de riesgos en seguridad privada',
      titulo: 'Cuestionario',
      introduccion:
        '<b>Objetivo:</b> identificar los conceptos fundamentales relacionados con el marco normativo, la gestión del riesgo, la Seguridad y Salud en el Trabajo y la seguridad privada.',
      barajarPreguntas: false,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO',
      preguntas: [
        {
          id: 1,
          texto:
            '¿Cuál es el propósito principal de los marcos de referencia en seguridad?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Orientar la gestión de riesgos y la operación del servicio.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Incrementar exclusivamente las utilidades de la empresa.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Regular únicamente los procesos financieros internos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Establecer normas para el comercio internacional.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto:
            'Lo sentimos, su respuesta no es la correcta. <em>Board</em> del <em>software</em> EAGLE.',
        },
        {
          id: 2,
          texto:
            '¿Cuál de las siguientes normas corresponde a un estándar internacional de gestión del riesgo?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Ley 9 de 1979.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'ISO 31000.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Decreto 356 de 1994.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Ley 675 de 2001.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto: '¿Qué establece principalmente un marco normativo-legal?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Las especificaciones técnicas de los fabricantes.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Los procedimientos internos del cliente.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Los fundamentos jurídicos para desarrollar las actividades.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Las estrategias comerciales de la organización.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto:
            '¿Cuál es el objetivo principal del Sistema de Gestión de Seguridad y Salud en el Trabajo?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Regular únicamente los contratos laborales.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Controlar exclusivamente los riesgos financieros.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Incrementar la productividad administrativa.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Prevenir accidentes y enfermedades laborales.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto:
            '¿Qué norma reglamenta la implementación del SG-SST en Colombia?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Decreto 1072 de 2015.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Ley 675 de 2001.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Decreto 2535 de 1993.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Resolución 350 de 2022.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto:
            '¿Qué decreto constituye el Estatuto de Vigilancia y Seguridad Privada?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Ley 1539 de 2012.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Decreto 356 de 1994.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Resolución 0312 de 2019.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Ley 1581 de 2012.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto:
            '¿Cuál es una modalidad autorizada de vigilancia y seguridad privada?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Vigilancia fija.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Auditoría financiera.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Inspección tributaria.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Control aduanero.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto: '¿Qué norma regula el tratamiento de los datos personales?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Ley 675 de 2001.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Ley 1562 de 2012.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Resolución 2607 de 2024.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Ley 1581 de 2012.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto: '¿Qué representa un riesgo dentro de la gestión del riesgo?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La combinación entre probabilidad e impacto.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Una obligación contractual del cliente.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'El costo económico del servicio.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'La duración de un procedimiento.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto: '¿Qué es una amenaza?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Una acción destinada a reducir riesgos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Un evento o condición con capacidad de causar daño.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Una medida preventiva obligatoria.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Un procedimiento administrativo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 11,
          texto: '¿Cuál es el propósito principal de la ISO 22301?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Establecer un sistema de gestión para la continuidad del negocio.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Regular la contratación laboral.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Definir el régimen de propiedad horizontal.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Controlar el porte de armas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 12,
          texto:
            '¿Qué riesgo está relacionado con posturas forzadas y movimientos repetitivos?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Riesgo biológico.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Riesgo químico.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Riesgo físico.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Riesgo ergonómico.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 13,
          texto: '¿Cuál es el primer paso en la gestión de riesgos?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Identificar los riesgos.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Transferir los riesgos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Registrar los controles.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Ejecutar auditorías.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 14,
          texto:
            '¿Qué estrategia consiste en trasladar parcialmente las consecuencias del riesgo a un tercero?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Aceptar el riesgo.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Evitar el riesgo.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Reducir el riesgo.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Transferir el riesgo.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 15,
          texto: '¿Cuál es el objetivo principal de la metodología Bow-Tie?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Relacionar causas, consecuencias y barreras de control de un riesgo.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Calcular únicamente pérdidas económicas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Medir la productividad laboral.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Diseñar contratos de seguridad.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 16,
          texto:
            '¿Qué metodología analiza cada etapa de una tarea para identificar peligros?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'ISO 45001.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'HAZOP.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'ISO 31000.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'JSA (<em>Job Safety Analysis</em>).',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 17,
          texto:
            '¿Qué componente del SG-SST permite reconocer peligros y valorar riesgos?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Identificación de peligros y evaluación de riesgos.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Política comercial.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Plan financiero.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Control presupuestal.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 18,
          texto:
            '¿Qué tipo de riesgo se relaciona con virus, bacterias y otros microorganismos?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Riesgo físico.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Riesgo mecánico.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Riesgo psicosocial.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Riesgo biológico.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 19,
          texto: '¿Cuál es el propósito principal de la seguridad privada?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Proteger personas, bienes, información y operaciones.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Reemplazar a la fuerza pública.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Administrar recursos tributarios.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Regular el comercio internacional.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 20,
          texto: '¿Cuál es uno de los beneficios de implementar el SG-SST?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Incrementar únicamente las ventas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Reducir los impuestos empresariales.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Eliminar todos los riesgos existentes.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Fortalecer la prevención y mejorar las condiciones de trabajo.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
