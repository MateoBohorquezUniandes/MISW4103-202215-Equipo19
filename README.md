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
| Tags          | logueados en la sección lateral izquierda del menú principal o desde el enlace http://localhost:2368/ghost/#/tags                                                                                                                                                                                                                                                                                     |
| Sign out      | Salir del portal de administracion                                                                                                                                                                                                                                                                                                                                                                    |


## Escenarios

| Escenario | Descripcion                                                                                                    |
|-----------|----------------------------------------------------------------------------------------------------------------|
| 1         | Verifique que puede crear, publicar y consultar un post                                                        |
| 2         | Verifique que puede editar, publicar, consultar un post                                                        |
| 3         | Verifique que puede consultar y eliminar un post                                                               |
| 4         | Verifique que puede crear, ver el preview, publicar y consultar un post                                        |
| 5         | Verifique que puede editar, guardar y consultar  un post                                                       |
| 6         | Verifique que puede crear 2 post y puede filtrar por el mas antiguio                                           |
| 7         | Verifique que puede crear, pubicar y consultar page                                                            |
| 8         | Verifique que puede crear, Editar, publicar, consultar un page                                                 |
| 9         | Verifique que puede crear, eliminar y validar que el page ha sido eliminado                                    |
| 10        | Verifique que puede crear, guardar y consultar en draft un page                                                |
| 11        | Verique que puede crear 2 paginas, Filtrar por antiguos, consultar un page                                     |
| 12        | Verifique que puede crear y asignar tag a un post                                                              |
| 13        | Verifique que puede crear, consultar y eliminar tag                                                            |
| 14        | Verifique que puede crear, consultar, filtrar miembro por nombre                                               |
| 15        | Verifique que puede crear, consultar, filtrar miembro por nombre y email                                       |
| 16        | Verifique que puede crear, consultar, editar y eliminar miembro                                                |
| 17        | Verifique que puede iniciar sesion y actualizar password                                                       |
| 18        | Verifique que puede Crear pagina, crear navegación, consultar navegación, eliminar navegación, consultar menu. |
| 19        | Verifique que puede crear post, publicar programado, filtrar por scheduled y editar contenido                  |
| 20        | Verifique que puede crear page, publicar programado, filtrar por scheduled y editar contenido                  |


## Instrucciones Kraken
1. Abrir un terminal y navegue a la carpeta Kraken.
2. Ejecute Kraken con el comando `./node_modules/kraken-node/bin/kraken-node run`

* **Nota**:  Si al ejecutar aparece un error de permisos de escritura, debes proveerle los permisos siguiendo los pasos: 
    * Abra un terminal como administrador
    * Navegue al la caperta que aparece en el mensaje de error 
    * Ejecute `chmod -R 777 .`
    * Intente ejecutar Kraken nuevamente el paso 2.
    
    
## Instrucciones Cypress
1. Abrir un terminal y navegue a la carpeta Kraken.
2. Ejecute Kraken con el comando `cypress run --headless`

* **Nota**:  Si al ejecutar aparece un error de permisos de escritura, debes proveerle los permisos siguiendo los pasos: 
    * Abra un terminal como administrador
    * Navegue al la caperta que aparece en el mensaje de error 
    * Ejecute `chmod -R 777 .`
    * Intente ejecutar Kraken nuevamente el paso 2.

