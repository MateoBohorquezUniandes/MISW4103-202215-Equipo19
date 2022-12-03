# MISW4103-202215-Equipo19
## Integrantes
|Nombre|Correo|
|------|------|
|Melissa Isabel Castro Sarmiento|m.castros@uniandes.edu.co
|Alvaro Arlex Perez Moncada|aa.perezm12@uniandes.edu.co
|Benito Zarate Palomec|b.zarate@uniandes.edu.co
|Ivan Mateo Bohorquez Perez|i.bohorquezp@uniandes.edu.co
## Funcionalidades

| Funcionalidad | Descripcion                                                                                                                                                                                                                                                                                                                                                                                           |
|---------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Sign In       | Interfaz gráfica para:  <br><br>* El ingreso de usuarios registrados a la aplicación Ghost por medio de una cuenta de correo electrónico y un password.  <br><br>* Recuperar o restablecer el password de usuarios registrados. <br><br>Esta opción es la pantalla principal, posterior a la configuración (Setup) de Ghost y puede ser accesado desde el enlace http://localhost:2368/ghost/#/signin |
| Posts         | Interfaz grafica para la busqueda, creación, edición, previsualización y publicacion tanto inmediata como programada de posts. Esta opción se encuentra disponible para usuarios logueados en la sección lateral izquierda del menú principal o desde el <br>enlace <br>http://localhost:2368/ghost/#/posts                                                                                           |
| Pages         | Interfaz gráfica para la busqueda, creación y edición de paginas. Esta opción se encuentra disponible para usuarios logueados en la sección lateral izquierda del menú principal o desde el enlace http://localhost:2368/ghost/#/pages                                                                                                                                                                |
| Tags          | Interfaz gráfica para la busqueda, creación y edición de tags. Esta opción se encuentra disponible para usuarios logueados en la sección lateral izquierda del menú principal o desde el enlace http://localhost:2368/ghost/#/tags                                                                                                                                                                                                                                                                                     |
| Members | |
| Sign out      | Salir del portal de administracion                                                                                                                                                                                                                                                                                                                                                                    |


## Escenarios

| Escenario | Descripcion | V5 | V3
|-----------|--------------------------------------------------------------------|--|--|
| 1         | Verifique que puede crear, publicar y consultar un post                                                        | x | x|
| 2         | Verifique que puede editar, publicar, consultar un post                                                        |x | x|
| 3         | Verifique que puede consultar y eliminar un post                                                               |x | |
| 4         | Verifique que puede crear, ver el preview, publicar y consultar un post                                        |x | |
| 5         | Verifique que puede editar, guardar y consultar  un post                                                       |x | |
| 6         | Verifique que puede crear 2 post y puede filtrar por el mas antiguio                                           |x | x|
| 7         | Verifique que puede crear, pubicar y consultar page                                                            |x | x|
| 8         | Verifique que puede crear, Editar, publicar, consultar un page                                                 |x |x |
| 9         | Verifique que puede crear, eliminar y validar que el page ha sido eliminado                                    |x | x|
| 10        | Verifique que puede crear, guardar y consultar en draft un page                                                |x |x |
| 11        | Verique que puede crear 2 paginas, Filtrar por antiguos, consultar un page                                     |x | x|
| 12        | Verifique que puede crear y asignar tag a un post                                                              |x | x|
| 13        | Verifique que puede crear, consultar y eliminar tag                                                            |x | |
| 14        | Verifique que puede crear, consultar, filtrar miembro por nombre                                               |x | |
| 15        | Verifique que puede crear, consultar, filtrar miembro por nombre y email                                       |x | |
| 16        | Verifique que puede crear, consultar, editar y eliminar miembro                                                |x | |
| 17        | Verifique que puede iniciar sesion y actualizar password                                                       |x |x |
| 18        | Verifique que puede Crear pagina, crear navegación, consultar navegación, eliminar navegación, consultar menu. |x | |
| 19        | Verifique que puede crear post, publicar programado, filtrar por scheduled y editar contenido                  |x | |
| 20        | Verifique que puede crear page, publicar programado, filtrar por scheduled y editar contenido                  |x | |

## Prerequisitos Ghost
Como prerequisito se necesita realizar una instalación del aplicativo Ghost, teniendo en cuenta los siguientes parametros:
1. Versiones de Ghost soportadas para ejecutar los escenarios:
- Ghost version: 5.22.10 
- Ghost version: 3.42.0 
* Para ambos caso se usa CLI Ghost-CLI version: 1.23.1
  
   
   
2. Usar el puerto 2368 configurado para el despliegue de Ghost.
3. Cambiar los datos del archivo `properties.json` por los datos de su usuario administrativo de Ghost.

* **Nota**: Si tiene dudas de como realizar la instalación de Ghost ir al siguiente link: `https://ghost.org/docs/ghost-cli/#ghost-install`

## Instrucciones Ghost
1. Abrir un terminal y navegue a la carpeta Ghost
2. Inicie Ghost con el comando ghost start
3. Abrir en un explorador (Chrome) la url donde ha inciado Ghost para corroborar que haya iniciado correctamente. La url por default es: http://localhost:2368/ghost/

## Instrucciones Kraken
1. Abrir un terminal y navegue a la carpeta Kraken.
2. Abrir el archivo `properties.json` y en la variable `VERSION` escriba el numero de la version de Ghost que desea usar para la prueba. (La versión en este archivo debe corresponder a la versión de Ghost que se encuentra corriendo en su máquina)
2. Ejecute Kraken con el comando `./node_modules/kraken-node/bin/kraken-node run`

* **Nota**:  Si al ejecutar aparece un error de permisos de escritura, debes proveerle los permisos siguiendo los pasos: 
    * Abra un terminal como administrador
    * Navegue a la carpeta que aparece en el mensaje de error 
    * Ejecute `chmod -R 777 .`
    * Intente ejecutar Kraken nuevamente el paso 2.
    
    
## Instrucciones Cypress
1. Abrir un terminal y navegue a la carpeta Kraken.
2. Ejecute Kraken con el comando `cypress run --headless`

* **Nota**:  Si al ejecutar aparece un error de permisos de escritura, debes proveerle los permisos siguiendo los pasos: 
    * Abra un terminal como administrador
    * Navegue a la carpeta que aparece en el mensaje de error 
    * Ejecute `chmod -R 777 .`
    * Intente ejecutar Kraken nuevamente el paso 2.
    
## Documento de Estrategia de Pruebas
[Enlace](https://github.com/MateoBohorquezUniandes/MISW4103-202215-Equipo19)

## Secuencia de ejecución para Pruebas de exploratorias
1. Asegurar que Ghost haya iniciado correctamente `http://localhost:2368/ghost/`
2. Abra un terminal en modo administrador y diríjase a la carpeta Monkey
3. Ejecute el comando `npm install`
4. Ejecute el comando para iniciar alguno de los siguientes Monkey 
  * `./node_modules/cypress/bin/cypress run -C monkey-config.json`
  * `./node_modules/cypress/bin/cypress run -C smart-monkey-config.json`
5. Espere a que el proceso finalice. Una vez finalizado, los resultados se podrán consultar en la carpeta `Monkey/results`

## Secuencia de ejecución para Pruebas reconocimiento
1. Asegurar que Ghost haya iniciado correctamente `http://localhost:2368/ghost/`
2. Abra un terminal en modo administrador y diríjase a la carpeta Ripper
3. Ejecute el comando `npm install`
4. Ejecute el comando `node index.js`
5. Espere a que el proceso finalice. Una vez finalizado, los resultados se podrán consultar en el archivo `index.html` que se encuentra en la carpeta Ripper/
 
* **Nota**: 
    * En caso de requerir actualizar los parámetros de configuración, diríjase y abra el archivo Ripper/config.json. En el archivo podrá actualizar los parámetros: url, depthLevels, identificación y password.
  
## Secuencia de ejecución para pruebas E2E 
##### Cypress (Ghost versión 5.22.10)
1. Diríjase a la carpeta donde se encuentra instalado Ghost versión 5.22.10 e inicie ghost.
2. Asegurar que Ghost haya iniciado correctamente `http://localhost:2368/ghost/`
3. Abra un terminal en modo administrador y diríjase a la carpeta Cypress
4. Ejecute el comando `cypress open` para abrir la consola de Cypress.
5. Clic en la opción E2E Testing, luego elija Chrome y clic en Start E2E Testing in Chrome.
6. Se abrirá Cypress en el navegador Chrome con los archivos de prueba (specs). En E2E Specs haga clic en la opción `datos-aleatorios`y seleccione el caso que desea revisar.

* **Nota**: 
    * Los archivos de especificación sin sufijo corresponden a la versión 5.22.10 de Ghost. Ejemplo: fXX.cy.js

##### Kraken (Ghost versión 5.22.10)
1. Diríjase a la carpeta donde se encuentra instalado Ghost versión 5.22.10 e inicie ghost.
2. Asegurar que Ghost haya iniciado correctamente `http://localhost:2368/ghost/`
3. Abra un terminal en modo administrador y diríjase a la carpeta Cypress
4. Ejecute el comando `cypress open` para abrir la consola de Cypress.
5. Clic en la opción E2E Testing, luego elija Chrome y clic en Start E2E Testing in Chrome.
6. Se abrirá Cypress en el navegador Chrome con los archivos de prueba (specs). En E2E Specs haga clic en la opción `datos-aleatorios`y seleccione el caso que desea revisar.

* **Nota**: 
    * Los archivos de especificación sin sufijo corresponden a la versión 5.22.10 de Ghost. Ejemplo: fXX.cy.js

## Secuencia de ejecución para pruebas VRT
##### Versión N (Ghost versión 5.22.10)
1. Diríjase a la carpeta donde se encuentra instalado Ghost versión 5.22.10 e inicie ghost.
2. Asegurar que Ghost haya iniciado correctamente `http://localhost:2368/ghost/`
3. Abra un terminal en modo administrador y diríjase a la carpeta Cypress
4. Ejecute el comando `cypress open` para abrir la consola de Cypress.
5. Clic en la opción E2E Testing, luego elija Chrome y clic en Start E2E Testing in Chrome.
6. Se abrirá Cypress en el navegador Chrome con los archivos de prueba (specs). En E2E Specs haga clic en la opción `datos-aleatorios`y seleccione el caso que desea revisar.

* **Nota**: 
    * Los archivos de especificación sin sufijo corresponden a la versión 5.22.10 de Ghost. Ejemplo: fXX.cy.js

##### Versión N-1 (Ghost versión 3.42.0)
1. Diríjase a la carpeta donde se encuentra instalado Ghost versión 3.42.10 e inicie ghost.
2. Asegurar que Ghost haya iniciado correctamente `http://localhost:2368/ghost/`
3. Abra un terminal en modo administrador y diríjase a la carpeta Cypress
4. Ejecute el comando `cypress open` para abrir la consola de Cypress.
5. Clic en la opción E2E Testing, luego elija Chrome y clic en Start E2E Testing in Chrome.
6. Se abrirá Cypress en el navegador Chrome con los archivos de prueba (specs). En E2E Specs haga clic en la opción `datos-aleatorios`y seleccione el caso que desea revisar.

* **Nota**: 
    * Los archivos de especificación con sufijo corresponden a la versión 3.24.10 de Ghost. Ejemplo: fXX_v3.cy.js

## Secuencia de ejecución para pruebas con datos aleatorios
1. Asegurar que Ghost haya iniciado correctamente `http://localhost:2368/ghost/`
2. Abra un terminal en modo administrador y diríjase a la carpeta Cypress
3. Ejecute el comando `cypress open` para abrir la consola de Cypress.
4. Clic en la opción E2E Testing, luego elija Chrome y clic en Start E2E Testing in Chrome.
5. Se abrirá Cypress en el navegador Chrome con los archivos de prueba (specs). En E2E Specs haga clic en la opción `datos-aleatorios`y seleccione el caso que desea revisar.

## Reporte de incidencias
[Enlace](https://github.com/MateoBohorquezUniandes/MISW4103-202215-Equipo19)

## Video entrega final
[Enalce](https://github.com/MateoBohorquezUniandes/MISW4103-202215-Equipo19)
