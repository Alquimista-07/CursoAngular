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