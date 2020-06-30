# Bienvenidx a Vida Sana 🍏🥗

Una red social dirigida a personas, que deseen compartir tips, recetas y rutinas para llevar una vida saludable, al mismo tiempo crear una comunidad con los mismos objetivos de tener o empezar con mejores hábitos alimenticios y deportivos. 

![3](https://user-images.githubusercontent.com/60928469/86152725-3a24c280-bac6-11ea-8433-3a8d26e9aaa1.png)

# Índice

* [1.Descripción y planeación](#1-Descripción-y-planeación)
* [2.Historias de Usuario](#2-Historias-de-Usuario)
* [3.Organización de las historias de usuario](#3-Organización-de-las-hisotrias-de-usuario)
* [4.Prototipos de alta ](#4-Prototipos-de-alta)
* [5.Objetivos de aprendizaje](#6-Objetivos-de-aprendizaje)
* [6.Implementación](#5-Implementación)


## 1. Descripción y planeación 📌

Para el desarrollo de este proyecto nos hemos organizado con la Creación de 6 historias de usuario, usamos como base de Datos a Firebase junto con javaScript, HTML y css3 para asi poder ir desarrollando cada historia de usuario.

Esto nos permitio usar algunos servicios de firebase como el inicio de sesion con facebbok y google, y la opcion de crear su propio usuario. 
Una vez que el usuario este logueado tiene la opcion de visualizar su perfil y editar su descripcion, también podra crear un post con texto e imagen, para luego poderlo modificarlo y eliminarlo, a su vez tambien crear un comentario en cada post con las mismas opciones de editar, modificar y eliminar, para implementar estas funciones utilizamos Firestore y el Cloud Storage.
Además tiene la posibilidad de configurar la privacidad de cada post de manera públicoa o privada, de tal manera que solo el usuario pueda visualizas sus propios post cuando estan configurados como privados. 

Para complementar tenemos la opción dar o quitar un like, comentar cada post y contar estas interacciones.

## 2. Historias de Usuario  📝

* Como usuario nuevo debo poder crear una cuenta con email y password válidos para poder iniciar sesion e ingresar a la red social.

* Como usuario nuevo debo poder tener la opción de iniciar sesión con mi cuenta de Google o Facebook para ingresar a la red social sin necesidad de crear una cuenta de email válido.

* Como usuario loggeado debo poder crear, guardar, modificar en el mismo lugar (in place) y eliminar una publicación (post) privada o pública, que puede ser una frase o una imagen.

* Como usuario loggeado debo poder ver todos los posts públicos y privados que he creado hasta ese momento, desde el más reciente hasta el más antiguo, así como la opción de poder cambiar la configuración de privacidad de mis post.

* Yo como usuario loggeado, puedo dar like y llevar un conteo de likes en mi publicación así como poder escribir, guardar, editar o eliminar un comentario en mi publicación.

* Al final debo poder ingresar a la red social y poder visualizar los datos de mi perfil creado o editarlos.

## 3.Organización de las historias de usuario 📚

Este proyecto se desarrollo en 4 sprints, de duracion de una semana cada uno, siguiendo organizacion de etapas del producto con Trello y en este [proyecto](https://github.com/MilagrosRn/LIM012-fe-social-network/projects/1)  en project github 

![trello](https://user-images.githubusercontent.com/60928469/86152591-0cd81480-bac6-11ea-90ee-c79ba179cc38.PNG)

## 4.Prototipos de alta 

### Desktop 💻
![2](https://user-images.githubusercontent.com/60928469/86152720-398c2c00-bac6-11ea-8b0b-8205595be0bb.png)

### Mobile 📱
![1](https://user-images.githubusercontent.com/60928469/86152715-385aff00-bac6-11ea-8bd1-6ead7c0ac68e.png)

### Maquetación
Se prototitotiparon todas las vistas con Figma [puedes verlo aqui](https://www.figma.com/file/GYjlQa5sbtXUrhDpkeYhU2/Untitled?node-id=15%3A63)

## 5. Objetivos de aprendizaje ⚙

### HTML y CSS

- [x] [HTML semántico](https://developer.mozilla.org/en-US/docs/Glossary/Semantics#Semantics_in_HTML)
- [x] [CSS `flexbox`](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
- [x] Construir tu aplicación respetando el diseño realizado (maquetación).

### DOM y Web APIs

- [x] [Manipulación dinámica del DOM](https://developer.mozilla.org/es/docs/Referencia_DOM_de_Gecko/Introducci%C3%B3n)
- [ ] [History API](https://developer.mozilla.org/es/docs/DOM/Manipulando_el_historial_del_navegador)
- [x] [`localStorage`]

### Javascript

- [x] [Uso de callbacks](https://developer.mozilla.org/es/docs/Glossary/Callback_function)
- [x] [Consumo de Promesas](https://scotch.io/tutorials/javascript-promises-for-dummies#toc-consuming-promises)
- [x] Uso ES modules
([`import`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import)
| [`export`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export))

### Firebase

- [x] [Firestore](https://firebase.google.com/docs/firestore)
- [x] [Firebase Auth](https://firebase.google.com/docs/auth/web/start)
- [x] [Firebase security rules](https://firebase.google.com/docs/rules)
- [x] [Uso de onSnapshot](https://firebase.google.com/docs/firestore/query-data/listen)
| [onAuthStateChanged](https://firebase.google.com/docs/auth/web/start#set_an_authentication_state_observer_and_get_user_data)

### Testing

- [x] [Testeo de tus funciones](https://jestjs.io/docs/es-ES/getting-started)
- [x] [Testeo asíncrono](https://jestjs.io/docs/es-ES/asynchronous)
- [ ] [Mocking](https://jestjs.io/docs/es-ES/manual-mocks)

### Colaboración en Github

- [x] Branches
- [x] Pull Requests
- [x] Tags

### Organización en Github

- [x] Projects
- [x] Issues
- [x] Labels
- [x] Milestones

### Buenas prácticas de desarrollo

- [x] Modularización
- [x] Nomenclatura / Semántica
- [x] Linting

***

## 6. Construido con 🛠

- [Mobile first](https://www.mediaclick.es/blog/diseno-web-responsive-design-y-la-importancia-del-mobile-first/) 

partimos de cómo se ve
y cómo funciona la aplicación en un dispositivo móvil primero, y más adelante se
ve como adaptar la aplicación a pantallas progresivamente grandes y
características específicas del entorno desktop.

- Múltiples vistas 

En proyectos anteriores nuestras aplicaciones habían estado compuestas de una sola _vista_ principal (una sóla _página_). En este proyecto se introduce la necesidad de tener que dividir nuestra interfaz en varias _vistas_ o _páginas_
y ofrecer una manera de navegar entre ellas.

- **[`Firebase`](https://firebase.google.com/)**

Servicio que se uso para manejar y persistir datos a traves de una base de datos no relacional, en tiempo real con operaciones CRUD (Creación, Lectura, Actualización y eliminación) de datos.

- **[`Firestore`](https://firebase.google.com/docs/firestore)** o de forma local utilizando `localStorage`

Para crear (salvar) nuevos datos, así como leer, actualizar y
modificar datos existentes. Estos datos se podrán guardar de forma remota

- **[`Firebase authentication`](https://firebase.google.com/docs/auth/)** y
**[`Firestore security rules`](https://firebase.google.com/docs/firestore/security/get-started)**

En este proyecto diferenciamos la información a mostrar y modificar, dependiendo del estado de la identidad del usuario.
Para esto se utilizó respectivamente Autenticación y autorización de firebase

- **[`flexbox`](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)**


- JavaScript (ES6+)

- Utilización de modulos de ES6 para poder modularizar tu código JavaScript.
- Uso de Template literals (Template strings).
* Se implemento un sistema de rutas para cambiar de una vista a otra de manera dinámica (SPA).
* Testeo de la lógica de la aplicación, con Jest cuidando que el coverage pase el 90% de statements (sentencias), functions (funciones), lines (líneas), y branches (ramas).
