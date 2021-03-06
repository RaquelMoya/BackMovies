## Backend Movies
![Hola](img/Hello.gif)

:wave: Soy Raquel Moya.</br>
:computer: Soy una estudiante de FSD en <kbd>⇥</kbd> <img src="/img/GHA.png" width="130em" /></br>

<hr>

### Sobre el proyecto

Este proyecto consiste en replicar la parte Backend de un servicio de alquiler de películas. 

A continuación encontraréis detallados cada uno de los endpoints y de las funcionalidades de este Backend.

La base de datos utilizada es SQL, ya que nos interesa poder navegar entre tablas relacionadas entre sí para reunir datos de diversas tablas en una misma consulta. 

### Instrucciones 🔧

El primer paso para arrancar el proyecto es clonar este repositorio en vuestro repositorio local.

A continuación, debemos instalar las dependencias no incluidas en el repositorio al utilizar el archivo .gitignore. Para ello, debemos introducir en el terminal el siguiente comando: 

### `npm i`

Inicializamos Sequelize con el siguiente comando:

### `sequelize init`

Realizamos la migración de los modelos a la base de datos local.

### `sequelize db:migrate`

Levantamos el servidor para acceder al endpoint de clonar peliculas desde Postman.

### `npm run dev`

Clonamos las películas de la API de TMDB para tener películas en nuestra base de datos.

Para ello, en Postman, accedemos al endpoint:

http://localhost:3000/movies/clone

Volvemos a tirar abajo el servidor

CTRL + C


Ponemos en marcha los seeders.

### `sequelize db:seed:all`

Arrancamos el servidor

### `npm run dev`

Y ya podríamos introducir las peticiones con los endpoints que detallaremos a continuación en Postman para visualizarlos


<a href="https://www.postman.com/"><img src="img/runpostman.png" width="150"></a>

<img src="img/postmanface.png" width="1500">


## Endpoints

Todos los Endpoints llevan como raiz: 
### `http://localhost:3000`
A continuación se especifican el método a introducir en Postman, y lo que debemos introducir a continuación de la raiz para acceder a cada uno de los endpoints.

- Movies
   - GET /movies--> Muestra todas las películas.
   - GET /movies/id/:id --> Muestra una película buscando por su Id.
   - GET /movies/title/:title --> Muestra una película buscando por su título.
   - POST /movies--> Registra una nueva película (Solo acceso como Administrador).
   - DELETE /movies/:id--> Elimina una pelicula mediante su Id (Solo acceso como Administrador).
   - DELETE /movies/deleteAll--> Elimina todas las películas (Solo acceso como Administrador).

<br>

- Users

- User Login
   - POST /login --> Es necesario hacer login con un user ya registrado para obtener un token (clave) que permita el acceso a algunos endpoints que necesitan permisos. Algunos endpoints solo permiten el acceso si el usuario es Administrador.

   - POST /users --> Permite registrar un nuevo usuario.
   - GET /users--> Muestra todos los usuarios registrados(solo acceso como Administrador).
   - GET/users/:id --> Muestra un usuario buscando con un Id (Necesita token).
   - GET /users/email/:email --> Muestra un usuario buscando con un email (Necesita token).
   - PUT /users/newpassword --> Modifica el password actual de un usuario (Necesita token).
   - DELETE /users --> Elimina todos los usuarios (Solo acceso como Administrador). 
    - DELETE /users/delete/:id--> Elimina un usuario buscando con un Id (Solo acceso como Administrador).
<br>

- Orders
   - POST /orders -->  Crea un nuevo pedido (Necesita token).
   - GET/orders --> Muestra todos los pedidos (Solo acceso como Administrador).
   - DELETE /orders --> Elimina todos los pedidos (Solo acceso como Administrador).
   - DELETE /orders/:id --> Elimina un pedido mediante su Id (Solo acceso como Administrador).

<br>

- Genres
   - GET/genres --> Muestra todos los generos.
   - POST /genres -->  Crea un nuevo genero (Solo acceso como Administrador).
   - DELETE /genres --> Elimina todos los generos (Solo acceso como Administrador).
   - DELETE /genres/:id --> Elimina un genero mediante su Id (Solo acceso como Administrador).

<br>

- GenreMovie
   - GET/genreMovie --> Muestra todos los generos asignados a películas.
   - POST/genreMovie --> Crea una nueva asignación de género a película (Solo acceso como Administrador).
   - DELETE/genreMovie/:id --> Elimina una asignación de género mediante su Id (Solo acceso como Administrador).
   - DELETE/genreMovie --> Elimina todas las asignaciones de géneros (Solo acceso como Administrador).

<br>

- Actors
   - GET/actors --> Muestra todos los actores/actrices.
   - POST/actors --> Crea un nuevo registro de actor (Solo acceso como Administrador).
   - DELETE/actors --> Elimina todos los actores (Solo acceso como Administrador).
   - DELETE/actors/:id --> Elimina un actor mediante su Id (Solo acceso como Administrador).


<br>

- Acts
   - GET/act --> Muestra todas los actuaciones asignadas a películas.
   - POST/act --> Crea una nueva asignación de actores a películas (Solo acceso como Administrador).
   - DELETE/act --> Elimina todas las actuaciones (Solo acceso como Administrador).
   - DELETE/act/:id --> Elimina una actuación mediante su Id (Solo acceso como Administrador).



## Models relation

La relación entre users y movies es "many to many", por lo que debemos crear una relación intermedia (Orders).

La relación entre users y orders es "1 to many" (1:n), y la relación entre movies y orders es exáctamente la misma (1:n).

Entre movies y actors, o genres, pasa lo mismo. La relación entre ellos precisa de una relación intermedia, por lo que las relacionamos mediante la tabla acts y la tabla genreMovies.

<img src="img/reverseEngineer.png" width="1500">



## Tecnologías y dependencias utilizadas

<img src="img/js.jpg" width="90em"/><img src="img/node.png" width="90em"/><img src="img/sql.png" width="90em"/><img src="img/sequelize.png" width="90em"/>
</br>
<img src="img/nodemon.png" width="90em"/><img src="img/cors.png" width="90em"/><img src="img/bcrypt.jpg" width="90em"/><img src="img/express.png" width="90em"/>
</br>
<img src="img/dotenv.png" width="90em"/><img src="img/jwt.png" width="90em"/><img src="img/github.png" width="90em"/><img src="img/postman.png" width="90em"/>
</br>


<hr>


## Developers ✍️

[Raquel Moya](https://github.com/RaquelMoya)

Última edición: 27/02/2022