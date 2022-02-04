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
    "ayudapregunta":"Puedes buscar esta información en Internet, en la web del fabricante o en el manual del dispositivo",
    "respuesta":[],
    "opciones":["WiFi","BLE","6LoWPAN","ZigBee","RFID","NFC","Z-Wave","Otros"],
    "ayuda":
    ["",
    "Son las siglas de Bluetooth Low Energy. Si tu dispositivo utiliza Bluetooth, selecciona también esta opción",
    "",
    "Es un protocolo que se emplea para interconectar dispositivos de la Internet de las Cosas a través de un hub o gestor de la red, sin necesidad de conectarse al router. Si tu dispositivo cumple con estas características es probable que emplee este protocolo.",
    "Es un protocolo que se implementa en los dispositivos mediante unas pegatinas identificadores, de manera similar a los QR. Si tu dispositivo cuenta con una de estas, probablemente utilice RFID",
    "Es el protocolo que se utiliza habitualmente a la hora de realizar pagos bancarios desde dispositivos móviles. Funciona a muy cortas distancias.",
    "Es un protocolo muy similar a ZigBee y se utiliza para lo mismo. Si tu dispositivo cumple con las características descritas en ZigBee, deberás revisar la ficha de especificaciones de tu dispositivo para conocer cuál de los dos protocolos utiliza.",
    ""],
    "tipo":"Check",
    "fase":"General",
    "foto":"3.png",
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
    "ayuda":["Transport Layer Security. Es un protocolo de seguridad que se utiliza para la capa de transporte cuando se utiliza TCP.","Secure Socket Layer. Es un protocolo de seguridad que se utiliza para la capa de transporte cuando se utiliza TCP. ","Protocolo de seguridad asociado a la capa de red","",""],
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
    "ayudapregunta":"Si no tienes clara la categoría de tu dispositivo, puedes ver varios ejemplos de cada una en la ayuda de cada opción",
    "respuesta":"",
    "opciones":["Gestión de recursos de energía","Entretenimiento","Salud y bienestar","Utilidad para la red","Interfaz máquina humano","Ayuda para los cuidados de la casa","Seguridad","Sensores"],
    "ayuda":[
    "Calefactores, aires acondicionados, bombillas, enchufes.",
    "Reproductores de música, altavoces, televisores",
    "Comederos para bebés o mascotas, camas inteligentes, monitor de presión arterial",
    "Repetidores de señal, gateways",
    "Dispositivos de control por voz, asistentes personales",
    "Frigoríficos, aspiradoras, máquinas de café",
    "Cerrojos inteligentes, cámaras de vigilancia",
    "Sensores de humedad, CO2, movimiento, temperatura"],
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
    "foto":"9.png",
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
    "ayudapregunta":"Los sensores de un dispositivo se encargan de recoger la información del entorno. Algunos ejemplos son: una cámara, un micrófono o un sensor de humedad",
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
    "ayudapregunta":"Los actuadores ejecutan acciones físicas en función de las órdenes que reciben. Por ejemplo, un robot aspirador cuenta con actuadores para absorber el polvo.",
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
    "foto":"15.png",
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
    "foto":"16.png",
    "categoria":["Gestión de recursos de energía","Salud y bienestar","Utilidad para la red","Interfaz máquina humano","Ayuda para los cuidados de la casa","Seguridad","Sensores"],
    "alias":"remoto"
  },
  {
    "index":16,
    "pregunta":"¿Cuenta con factor de doble autenticación?",
    "ayudapregunta":"El factor de doble autenticación es un sistema de seguridad en el que para el acceso se solicita, además de la contraseña, una segunda confirmación mediante distintos métodos (SMS, e-mail, etc)",
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
    "ayudapregunta":"Open source es un término que se emplea para referirse a una aplicación que está desarrollada de manera pública y su código es accesible por todos los usuarios",
    "respuesta":"",
    "opciones":["Sí","No"],
    "tipo":"Opciones",
    "fase":"Especifica",
    "foto":"18.png",
    "categoria":["Gestión de recursos de energía","Salud y bienestar","Utilidad para la red","Interfaz máquina humano","Ayuda para los cuidados de la casa","Seguridad","Sensores"],
    "alias":"opensource"
  },
  {
    "index":18,
    "pregunta":"¿Es accesible desde la web?",
    "respuesta":"",
    "opciones":["Sí, y utiliza HTTPS","Sí, pero no utiliza HTTPS","No"],
    "ayuda":["Comprueba si la url del sitio web comienza por \"https\"","",""],
    "tipo":"Opciones",
    "fase":"Especifica",
    "foto":"19.jpg",
    "categoria":["Gestión de recursos de energía","Salud y bienestar","Utilidad para la red","Interfaz máquina humano","Seguridad","Sensores"],
    "alias":"web"
  }
]