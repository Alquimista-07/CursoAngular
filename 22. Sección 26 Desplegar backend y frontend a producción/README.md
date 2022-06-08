# CursoAngular

# NOTAS IMPORTANTES

Desplegar Aplicación A Producción
=====================

En esta sección se va a explicar como se hace el despliegue del backend desarrollado en node y el frontend en Angular a un servidor en internet, que para este caso se va a usar [Heroku](https://www.heroku.com/) para el cual es necesario crear una cuenta o iniciar sesión si ya previamente se tenía una.

Entonces los pasos a seguir para realizar el despliegue son los siguientes:

1. Inicialmente debemos generar el build de producción de Angular, para el cual es necesario ejecutar el siguiente comando:

```
ng build --prod
```

Y esto nos va a generar la carpeta dist la cual contiene ya el build de toda la aplicación de Angular y que contiene todo lo necesario para que esta funcione.

2. El siguiente paso es tomar todo el contenido de la carpeta dist y moverla a la carpeta publica del backend server. 

#### NOTA: 
Anteriormente cuando se desarrollo el backend se habían creado un archivo index.html y un styles.css los cuales es necesario eliminarlos antes de pegar los archivos resultantes del build de Angular. 

Ahora ya con esto por ejemplo si ingresamos http://localhost:4000/ o a la ruta con el puerto que se haya especificado al backend esto ya nos mostraría lo correspondiente al build de Angular.

Adicionalmente si ingresamos por el login y el registro, observamos que estos funcionan normalmente.

3. Pero ahora se nos presenta un problema el cual es necesario solucionarlo. Y básicamente el problema radica en que si por ejemplo ingresaramos la ruta http://localhost:4000/dashboard o recargamos la página cuando nos encontramos en el dashboard luego de autenticarnos el backend no sabría que hacer para resolver la ruta y nos mostraría un mensaje Cannot GET /dashboard ya que en el backend no tenemos dicha ruta definida. Ya que al recargar o intentar ingresar a dicha ruta Angular pierde el control (porque Angular unicamente tiene el control en la carpeta pública) de la ruta por lo tanto entraría express a intentar servir algo en esa ruta la cual no existe.

4. Por lo tanto para resolver el problema expuesto anteriormente es necesario realizar una modificación la cual es propia del backend en la parte de las rutas y las cuales tenemos definidas en el index.js. Adicionalmente esta modificación se podría hacer de las siguientes formas:

* La primera es que puede que yo quiera que todas las peticiones exceptuando la que se encuentra en el /api/auth todas sirvan el directorio público y sería lo ideal para este caso.

* La segunda sería colocar un manejador para manejar todas las posibles rutas

* Otra forma es que si no se pudiera hacer ninguna de las dos modificaciones del path mencionadas anteriormente. Entonces por ejemplo si tuvieramos un servidor apache tendríamos que aplicacr la modificación sobre el archivo htaccess e indicar que todas las peticiones pasan por el index.html lo cual puede ser un poco tedioso.

Entonces suponiendo que no se pudiera realizar la modificación de las rutas entonces ¿Cómo resolvemos el inconveniente?

Por lo tanto existe en Angular un método que es más compatible con todos los navegadores web. Es decir en nuestro sistema de rutas principales en la parte del NgModule en los imports se le puede agragar el useHash de la siguiente forma:

```
RouterModule.forRoot(routes, {
      useHash: true
    })
```

Y básicamente al agragar dicha instrucción lo que haría es concatenarle un # a la ruta la cual quedaría por ejemplo http://localhost:4000/#/auth/login y si nos logueamos y recargamos la página en la parte del dashboard ya vemos que no nos aparece el Cannot GET /dashboard ya que al indicar el # es como si estuvieramos obligando el index.html

* Pero resulta que no queremos usar la estrategia del hash entonces lo colocamos en false. Ahora resulta que no queremos resolver el problema de la parte de Angular sino que queremos hacerlo de la parte de node y express, por lo tanto lo que se haría es agregar un middleware.

Entonces para esto tendríamos que construir el path y para ello podríamos importar un paquete de node que es el siguiente:

```
// Importamos el paquete path
const path = require('path');
```

Y posteriormente al al final después de todas las rutas que se tengan agregariamos el middleware de la siguiente forma:

```
// Manejar demás rutas
app.get( '*', ( req, res ) => {
    res.sendFile( path.resolve( __dirname, 'public/index.html' ) );
});
```
Y ya con esto resolveríamos el problema y si recargamos el dashboard no nos mandaría el Cannot GET /dashboard y adicionalmente también si colocaramos la ruta http://localhost:4000/dashboard directamente en el navegador vemos que tampoco lanza el mensaje y el guard funciona normalmente ya que Angular toma el control de la ruta y sabe que hacer.

# Heroku

Como se había mencionado al inicio de este documento, el servidor que se va a usar para subir la aplicación y hacerla accesible desde internet es [Heroku](https://www.heroku.com/). 

Entonces luego de realizar las tareas y configuraciones mencionadas anteriormente casi tendríamos lista la aplicación para hacer el despliegue a Heroku ya que tenemos configurado en nuestro index.js el cors, el path, el dotenv.

Y se dice que tenemos casi lista la aplicación para su despliegue ya que primero tenemos que revisar lo siguiente:

* Si no tenemos el archivo .gitignore deberíamos crearlo y excluir el /node_modules ya que de esto Heroku se va a encargar de instalar y reconstruir dichos modulos.

* También debemos revisar que en el archivo package.json tengamos el script:

```
"start": "node index.js"
```
Para que Heroku sepa cual inicializa la aplicación.

## Desplegar a Heroku

Ahora los siguientes paso que se deben hacer son los siguientes: 

1. Iniciar sesión en [Heroku](https://www.heroku.com/) y en el dashboard hacemos click en New para crear una nueva aplicación.

2. Luego le colocamos un nombre a la aplicación verificando que dicho nombre se encuentre disponible.

3. Posteriormente procedemos a seleccionar la región, no agregamos ningún pipeline y damos click en crear aplicación y ya tendríamos el espacio en Heroku.

4. Ahora lo que hay que hacer es subir la aplicación a Heroku y para el cual hay varias maneras de hacerlo:

* Una forma es usar el Heroku CLI

* Otra es usando GitHub

* Otra forma es usando el Container Registry

En este caso vamos a usar el Heroku CLI. Entonces para ello debemos aplicar los siguiente pasos:

1. Primero debemos verificar si tenemos Heroku instalado, para ello en la ventana de comando ejecutamos el siguiente comando: 

```
heroku --version
```

#### NOTA:
Si nos dice que no reconoce el comando Heroku es porque aún no lo tenemos instalado, por lo tanto es necesario instalarlo. Y para esto en el dashboard que se nos abrió cuando creamos la aplicación y que corresponde al espacio de la misma nos ofrece la ayuda y nos proporciona el enlace donde podemos realizar la instalación dependiendo de nuestro sistema operativo.

[Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli).

Luego de realizar la instalación procedemos a cerrar la terminal y volverla a abrir con el fin de revisar la instalación ejecutando nuevamente el comando heroku --version mencionado anteriormente.

2. El siguiente paso es iniciar sesión en Heroku en la consola de comandos, para ello ejecutamos el siguiente comando:

```
heroku login
```
Y posteriormente nos pide que presionemos cualquier tecla exceptuando q para abrir la ventana del navegador en la cual se nos va a pedir que iniciemos sesión dando click en login e ingresando las credenciales si las llega a pedir.

#### NOTA 
Ahora si al abrir el navegador y dar click en login se nos muestra un mensaje `IP address mismatch` y no inicia sesión, lo que deberíamos hacer es agregar al comando un -i de la siguiente forma:

```
heroku login -i
```
Y en este caso nos va a solicitar que ingresemos las credenciales directamente en la consola.

Ahora si se nos muestra el siguiente error cuando ingresemos las credenciales de Heroku:

```
»   Error: Your account has MFA enabled; API requests using basic authentication with email and password are not
 »   supported. Please generate an authorization token for API access.
 »
 »   Error ID: vaas_enrolled
```

Lo que debemos hacer para solucionarlo es ir directamente al dashboard de Heroku, damos click en el avatar del usuario y luego damos click en `Account Settings`. 

Luego en la parte de abajo damos click en `Regenerate API Key` para que se nos genere un código el cual podemos ver dando click en `Reveal`.

Posteriormente debemos copiar dicho código, para usarlo como password cuando se nos solicite en la consola y ya con esto iniciariamos sesión.

3. A continuación debemos navegar en la consola hacía la carpeta del proyecto (que en este caso lo llamamos 12-auth-server) y ubicarnos en la raiz, es decir que al hacer dir (en windows) o ls (mac o linux) podamos ver el archivo package.json.

4. A continuación nos solicita que inicialicemos el repositorio de git, para ello ejecutamos el siguiente comando:

```
git init
```

5. A continuación procedemos a ejecutar el siguiente comando:

```
heroku git:remote -a curso-angularapp-mean
```

#### NOTA: 
Hay que tener encuenta que el `curso-angularapp-mean` que forma parte del comando es el nombre que le dimos a la aplicación cuando la creamos en el dashboard de Heroku.

6. A continuación tenemos que agregar todos los archivos del repositorio ejecutando el siguiente comando:

```
git add .
```

7. Posteriormente procedemos a hacer el primer commit ejecutando el siguiente comando:

```
git commit -am "Todo listo para desplegar"
```

#### NOTA:
Adicionalmente podemos ejecutar el siguiente comando para ver el historial de commits y cambios realizados.

```
git log
```

8. Ahora solo queda subir todo al repositorio remoto para desplegarlo, y para ello ejecutamos el siguiente comando:

```
git push heroku master
```

#### NOTA:
Ahora si el anterior comando nos arroja un error porque ya lo teníamos en GitHub y nos pide cambiemos el termino de master ya que GitHub ya no maneja la rama principal como master sino como main entonces lo que debemos hacer es ejecutar el comando de la siguiente manera:

```
git push heroku main
```

Y cuando termine el proceso en la consola se nos informa cual es la url para acceder al sitio. Ahora si se nos olvido copiar la url o se nos cerro por error la consola podemos ir al dashboard de la aplicación en Heroku y dar click en el botón que cide `Open App`

## NOTA IMPORTANTE

Ahora acá tenemos un error ya que como no teníamos la url que nos asigna Heroku al momento de desplegar la aplicación en las variables de entorno de producción en el archivo `environment.prod.ts` de la aplicación de Angular las dejamos como `http://localhost:4000/api` por lo tanto es necesario tomar la url asignada por Heroku y actualizar dicha variable de entorno. La cual quedaría por ejemplo `https://curso-angularapp-mean.herokuapp.com/api`

Pero lamentablemente tenemos que volver a hacer el build de producción de Angular, volver a copiar y pegar los archivos resultantes de build de Angular dentro de la carpeta pública de nuestro backend server y volver a hacer el despliegue a Heroku.

Entonces para hacer nuevamente el despliegue a Heroku hacemos los siguiente:

1. Ejcuentamos el siguiente comando: 

```
git add .
```

2. Hacemos el commit

```
git commit -am "Ajuste environment produccion"
```

3. Y para finalizar es hacer el despliegue nuevemente usando el siguiente comando:

```
git push heroku master
```

Y listo eso sería todo y tanto el backend como el front estaría desplegado y funcional en internet.

#### NOTA:
Adicionalmete también podemos ver los logs de Heroku para revisar errores y demás cosas usando el siguiente comando:

```
heroku logs --tail
```

#### NOTA:
Hay que tener en cuenta que para ejecutar el anterior comando tenemos que estar en la ruta de la aplicación que fue desplegada. Adicionalmente el `--tail` es para escuchar los ultimos logs que se estén emitiendo.

También podemos usar el siguiente comando para revisar los logs, entonces ubicados dentro de la carpeta del proyecto que fue desplegado ejecutamos el siguiente comando:

```
heroku logs -n 1000 --tail -a=curso-angularapp-mean
```

Donde el `-n 1000` indica el número de líneas que queremos que se muestren, el `--tail` es para escuchar los ultimos logs que se estén emitiendo y el `-a=` especifica el nombre de la aplicación que se quiere revisar que como sabemos para el ejemplo del curso se llama `curso-angularapp-mean`.

Y acá ya con el anterior comando podemos ver los mensajes de console.log(), el puerto y demás mensajes que dejamos en el backend, adicionalmente también podemos ver la demás información del despliegue a Heroku.