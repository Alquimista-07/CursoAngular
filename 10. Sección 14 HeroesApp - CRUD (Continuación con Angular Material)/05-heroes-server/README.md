# CursoAngular

Ahora para el proyecto necesitamos montar un backend server y una forma rápida que podemos es usar un paquete de node llamdo JSON Server. El cual para instalarlo (se recomienda instalarlo de manera global (-g)) necesitamos ejecutar el siguiente comando:

```
npm install -g json-server
```

NOTA: Para ver más información al respecto de JSON Server podemos ir al siguiente enlace:

* [JSON Server](https://www.npmjs.com/package/json-server)

A continuación vamos a usar un archivo llamado db.json que va a contener la data con la cual vamos a trabajar, esto con el fin de no montar una base de datos ni nada complejo ya que el curso va enfocado más que todo a dominar angular y no necesitamos montar un backend muy elaborado.

Posteriormente de tener nuestro archivo db.json debemos levantar nuestro servidor de desarrollo debemos ubicarnos en la ruta donde tenemos nuestro archivo db.json y procedemos a ejecutar el siguiente comando:

```
json-server --watch db.json
```
