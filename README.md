# Brain Compare 🧠

Una visualización artística que compara la actividad cerebral entre un cerebro sano y uno con Alzheimer, usando p5.js. El proyecto explora el concepto de "la escritura del cuerpo" a través de ondas cerebrales simuladas.

## 🎯 Descripción del Proyecto

Este proyecto simula dos cerebros:
- **Izquierda**: Cerebro sano con patrones coherentes y fluidos
- **Derecha**: Cerebro con Alzheimer mostrando fragmentación y dispersión

La visualización utiliza diferentes frecuencias de ondas cerebrales (delta, theta, alpha, beta, gamma) para crear patrones visuales que representan la actividad neuronal.

## 🚀 Instalación y Uso

1. **Clona o descarga** este repositorio
2. **Abre** `index.html` en tu navegador web


## 🎮 Controles

- **Espacio**: Pausa/reanuda la animación
- **Click del mouse**: Reanuda la animación (si está pausada)

## 📁 Estructura del Proyecto

```
brainCompare/
├── index.html              # Archivo HTML principal
├── sketch.js               # Código principal de p5.js
├── style.css              # Estilos CSS
└── README.md               # Este archivo
```

## 🔬 Funcionamiento Técnico

### Ondas Cerebrales Simuladas
- **Delta (0.5-4 Hz)**: Sueño profundo
- **Theta (4-8 Hz)**: Relajación profunda
- **Alpha (8-13 Hz)**: Estado de relajación despierto
- **Beta (13-30 Hz)**: Concentración activa
- **Gamma (30-100 Hz)**: Procesamiento cognitivo superior

### Diferencias Visuales
- **Cerebro Normal**: Patrones coherentes, colores azules, ondas fluidas
- **Cerebro con Alzheimer**: Patrones fragmentados, colores rojizos, dispersión aleatoria

## 🛠️ Personalización

Puedes modificar `sketch.js` para:
- Cambiar los colores en `drawBrain()`
- Ajustar la velocidad de animación modificando `t += 0.01`
- Modificar el tamaño del canvas en `createCanvas(900, 500)`
- Alterar los patrones de ruido en `updateBrainNormal()` y `updateBrainAlzheimer()`

## 📋 Requisitos

- Navegador web moderno (Chrome, Firefox, Safari, Edge)
- JavaScript habilitado
- p5.js (incluido en el proyecto o via CDN)

## 🎨 Concepto Artístico

Este proyecto explora la metáfora de "la escritura del cuerpo" - cómo las condiciones neurológicas se manifiestan visualmente a través de patrones de actividad cerebral. La diferencia entre coherencia y fragmentación se representa a través de la fluidez vs. dispersión de las ondas visuales.

## 📄 Licencia

Este proyecto es de código abierto. Siéntete libre de usarlo y modificarlo para tus propios proyectos.

---

*Desarrollado por Laura S. - Explorando la intersección entre arte, ciencia y tecnología*
