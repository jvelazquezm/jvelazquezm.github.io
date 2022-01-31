exports.pasos =   [
  /*{
    "index":1,
    "pregunta":"Indique el firmware o sistema operativo que utiliza su dispositivo",
    "respuesta":"",
    "opciones":[],
    "tipo":"Libre",
    "fase":"General",
    "foto":"1.jpg",
    "alias":"versionFirm"
  },*/
  {
    "index":2,
    "pregunta":"¿Está actualizado?",
    "respuesta":"",
    "opciones":["Sí","No","No lo sé"],
    "tipo":"Opciones",
    "fase":"General",
    "foto":"2.png",
    "alias":"actualizado"
  },
  {
    "index":3,
    "pregunta":"¿Qué protocolos de comunicación utiliza el dispositivo?",
    "respuesta":[],
    "opciones":["WiFi","BLE","6LoWPAN","ZigBee","RFID","NFC","Z-Wave","Otros"],
    "tipo":"Check",
    "fase":"General",
    "foto":"3.jpg",
    "alias":"coms"
  },
  /*{
    "index":4,
    "pregunta":"¿Qué protocolo de transporte y red utiliza?",
    "respuesta":"",
    "opciones":["TCP/IP","UDP/IP"],
    "tipo":"Opciones",
    "fase":"General",
    "foto":"4.jpg",
    "alias":"transporteyred"
  },*/
  {
    "index":5,
    "pregunta":"¿Qué protocolos de seguridad utiliza?",
    "respuesta":[],
    "opciones":["TLS","SSL","IPSEC","Ninguno","No lo sé"],
    "tipo":"Opciones",
    "fase":"General",
    "foto":"5.jpg",
    "alias":"seguridad"
  },
  {
    "index":6,
    "pregunta":"¿El dispositivo se encuentra directamente conectado al router de la red o indirectamente?",
    "respuesta":"",
    "opciones":["Directamente","Indirectamente"],
    "tipo":"Opciones",
    "fase":"General",
    "foto":"6.jpg",
    "alias":"directamente"
  },
  {
    "index":7,
    "pregunta":"Indique la categoría del dispositivo",
    "respuesta":"",
    "opciones":["Gestión de recursos de energía","Entretenimiento","Salud y bienestar","Utilidad para la red","Interfaz máquina humano","Ayuda para los cuidados de la casa","Seguridad","Sensores"],
    "tipo":"Opciones",
    "fase":"General",
    "foto":"7.png",
    "alias":"categoria"
  },
  {
    "index":8,
    "pregunta":"¿Está conectado a una nube?",
    "respuesta":"",
    "opciones":["Sí","No"],
    "tipo":"Opciones",
    "fase":"Especifica",
    "foto":"8.jpg",
    "categoria":["Gestión de recursos de energía","Entretenimiento","Salud y bienestar","Utilidad para la red","Interfaz máquina humano","Ayuda para los cuidados de la casa","Seguridad","Sensores"],
    "alias":"conexnube"
  },
    {
    "index":9,
    "pregunta":"¿Envía datos a la nube?",
    "respuesta":"",
    "opciones":["Sí","No"],
    "tipo":"Opciones",
    "fase":"Especifica",
    "foto":"9.jpg",
    "categoria":["Gestión de recursos de energía","Entretenimiento","Salud y bienestar","Utilidad para la red","Interfaz máquina humano","Ayuda para los cuidados de la casa","Seguridad","Sensores"],
    "alias":"envnube"
  },
    {
    "index":10,
    "pregunta":"Indique las entradas físicas que tiene su dispositivo",
    "respuesta":[],
    "opciones":["USB","Ethernet","Corriente","Otras","No tiene"],
    "tipo":"Check",
    "fase":"Especifica",
    "foto":"10.jpg",
    "categoria":["Entretenimiento","Utilidad para la red","Seguridad"],
    "alias":"entradas"
  },
  /*{
    "index":11,
    "pregunta":"¿Qué protocolos de comunicación por cable llevan asociadas esas entradas?",
    "respuesta":"",
    "opciones":[],
    "tipo":"Libre",
    "fase":"Especifica",
    "foto":"https://www.metalindustria.com/media/uploads/noticias/wwethernet.jpg",
    "categoria":["Gestión de recursos de energía","Entretenimiento","Utilidad para la red","Seguridad"],
    "alias":"entradascom"
  },*/
    {
    "index":11,
    "pregunta":"¿Cuenta con algún tipo de sensor?",
    "respuesta":"",
    "opciones":["Sí","No"],
    "tipo":"Opciones",
    "fase":"Especifica",
    "foto":"12.png",
    "categoria":["Gestión de recursos de energía","Salud y bienestar","Utilidad para la red","Interfaz máquina humano","Seguridad","Sensores"],
    "alias":"sensores"
  },
    {
    "index":12,
    "pregunta":"¿Cuenta con algún micrófono que le permita recibir órdenes por voz o con una cámara?",
    "respuesta":[],
    "opciones":["Micrófono","Cámara","Otros"],
    "tipo":"Check",
    "fase":"Especifica",
    "foto":"13.jpeg",
    "categoria":["Gestión de recursos de energía","Salud y bienestar","Utilidad para la red","Interfaz máquina humano","Seguridad","Sensores"],
    "alias":"microcam"
  },
    {
    "index":13,
    "pregunta":"¿Cuenta con actuadores?",
    "respuesta":"",
    "opciones":["Sí","No"],
    "tipo":"Opciones",
    "fase":"Especifica",
    "foto":"14.png",
    "categoria":["Gestión de recursos de energía","Entretenimiento","Utilidad para la red","Interfaz máquina humano","Ayuda para los cuidados de la casa","Seguridad"],
    "alias":"actuadores"
  },
    {
    "index":14,
    "pregunta":"¿Tiene algún botón físico?",
    "respuesta":[],
    "opciones":["ON/OFF","Reset","Volumen","Silenciar micrófono","Otros"],
    "tipo":"Check",
    "fase":"Especifica",
    "foto":"15.jpg",
    "categoria":["Gestión de recursos de energía","Entretenimiento","Salud y bienestar","Utilidad para la red","Interfaz máquina humano","Ayuda para los cuidados de la casa","Seguridad","Sensores"],
    "alias":"boton"
  },
  {
    "index":15,
    "pregunta":"¿Se puede acceder remotamente al dispositivo a través de una aplicación?",
    "respuesta":"",
    "opciones":["Sí","No"],
    "tipo":"Opciones",
    "fase":"Especifica",
    "foto":"16.jpg",
    "categoria":["Gestión de recursos de energía","Salud y bienestar","Utilidad para la red","Interfaz máquina humano","Ayuda para los cuidados de la casa","Seguridad","Sensores"],
    "alias":"remoto"
  },
  {
    "index":16,
    "pregunta":"¿Cuenta con factor de doble autenticación?",
    "respuesta":"",
    "opciones":["Sí","No"],
    "tipo":"Opciones",
    "fase":"Especifica",
    "foto":"17.jpg",
    "categoria":["Gestión de recursos de energía","Salud y bienestar","Utilidad para la red","Interfaz máquina humano","Ayuda para los cuidados de la casa","Seguridad","Sensores"],
    "alias":"dobleaut"
  },
  {
    "index":17,
    "pregunta":"¿Está basada en open source?",
    "respuesta":"",
    "opciones":["Sí","No"],
    "tipo":"Opciones",
    "fase":"Especifica",
    "foto":"18.jpg",
    "categoria":["Gestión de recursos de energía","Salud y bienestar","Utilidad para la red","Interfaz máquina humano","Ayuda para los cuidados de la casa","Seguridad","Sensores"],
    "alias":"opensource"
  },
  {
    "index":18,
    "pregunta":"¿Es accesible desde la web?",
    "respuesta":"",
    "opciones":["Sí, y utiliza HTTPS","Sí, pero no utiliza HTTPS","No"],
    "tipo":"Opciones",
    "fase":"Especifica",
    "foto":"19.jpg",
    "categoria":["Gestión de recursos de energía","Salud y bienestar","Utilidad para la red","Interfaz máquina humano","Seguridad","Sensores"],
    "alias":"web"
  }
]