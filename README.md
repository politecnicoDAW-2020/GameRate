# GameRate (WIP)

GameRate es una aplicación a través de la cual podrás consultar las fichas con las notas y reviews de tus videojuegos favoritos gracias a la aportación de todos sus usuarios. Podrás valorar tú mismo cada uno de los juegos, opinar sobre ellos, e incluso tendrás tu propia lista para añadir los juegos que tengas pendientes por jugar.

La aplicación está dividida en un frontend desarrollado en **Vue.js**, utilizando diversas librerías, entre las que se incluye ***Vuetify*** como librería de componentes. Y un backend consistente en una API Rest desarrollada en PHP con **Laravel**

## Instalación

### Backend
```
composer install
npm install
``` 

Base de datos para test (.env): ***TODO***: *Docker base de datos local.*


```
DB_CONNECTION=mysql
DB_HOST=146.59.155.170
DB_PORT=3306
DB_DATABASE=gamerate
DB_USERNAME=root
DB_PASSWORD=presariodb
```

```
php artisan serve 
```

### Frontend

```
npm install
npm run serve
```

## Login

Existen dos tipos de usuario, tipo user y tipo admin. Para ello, hacemos uso del localstorage para almacenar tanto el id del usuario como el tipo del mismo proveniente de la base de datos. **TODO**: implementar JWT Token.

### Credenciales administrador:
  - email: dav0star1991@gmail.com
  - password: password

## Pantalla Principal

![Home](https://user-images.githubusercontent.com/57174469/122044252-94548b80-cddc-11eb-8283-9f01f1644013.PNG)

Podrás ver los últimos juegos añadidos en nuestra base de datos. Cada juego se mostrará en una carta que incluye su portada, título, género, la nota media de todos los usuarios, y un selector para que emitas tu propia votación.

## Buscador 

![buscador](https://user-images.githubusercontent.com/57174469/122199426-50c05700-ce9a-11eb-9e04-665e59c37ba2.PNG)


## Página de detalle

![detalle](https://user-images.githubusercontent.com/57174469/122199077-08089e00-ce9a-11eb-93f3-d7ddcfdc6168.PNG)

Haciendo click, o haciendo uso del buscador de la app, podrás acceder a la página de detalle de cada juego. En la que podrás ver la sinopsis del mismo, acceder a sus opiniones, e incluso añadir el juego a tu lista de juegos pendientes.

Una de las features a destacar, es que la aplicación te recomendará una serie de juegos similares al que estás consultando, para poder descubrir nuevos juegos acorde a tus intereses. Haciendo click en ellos accederás a su propia página de detalle.

## Página de opiniones

![Opiniones](https://user-images.githubusercontent.com/57174469/122045515-20b37e00-cdde-11eb-9f6f-695cec95972f.PNG)

## Juegos Pendientes

![pendent](https://user-images.githubusercontent.com/57174469/122190469-223e7e00-ce92-11eb-86e9-9b75a64162eb.PNG)

## Crear nuevo juego

Como administrador, en la pantalla de detalle, verás las opciones de añadir un juego nuevo, editar, o eliminar. 

![create](https://user-images.githubusercontent.com/57174469/122191300-e7891580-ce92-11eb-9e3f-63ff97e4880e.PNG)

Para la carátula, en la base de datos se guardará la referencia en png de la imagen. Dicha referencia se corresponde al título del juego en minúsculas, y los espacios sustituidos por guiones. Por ejemplo, si el título del juego es Uncharted 2, la referencia a la imagen será uncharted-2.png, cosa a tener en cuenta para cargar el recurso.


## Autor

David Fernández Cueto
