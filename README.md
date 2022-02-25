## POKEMON BATTLE FRONTIER
![Hola](img/Hello.gif)

:wave: Soy Raquel Moya.</br>
:computer: Soy una estudiante de FSD en <kbd>⇥</kbd> <img src="/img/GHA.png" width="130em" /></br>

<hr>

### Sobre el proyecto

Este proyecto consiste en replicar la parte Backend de un servicio de alquiler de películas. 

A continuación encontraréis detallados cada uno de los endpoints y de las funcionalidades de este Backend.

### Instrucciones 🔧

El primer paso para arrancar el proyecto es clonar este repositorio en vuestro repositorio local.

A continuación, debemos instalar las dependencias no incluidas en el repositorio al utilizar el archivo .gitignore. Para ello, debemos introducir en el terminal el siguiente comando: 

### `npm i`

Inicializamos Sequelize con el siguiente comando:

### `sequelize init`

Realizamos la migración de los modelos a la base de datos local.

### `sequelize db:migrate`

Arrancamos el servidor

### `npm run dev`

Y ya podríamos introducir las peticiones con los endpoints que detallaremos a continuación en Postman para visualizarlos


<a href="https://www.postman.com/"><img src="img/runpostman.png" width="150"></a>

<img src="img/postmanface.png" width="1500">


## Endpoints

- Movies
   - GET /movies--> Muestra todas las películas.
   - GET /movies/id/:id --> Muestra una película buscando por su Id.
   - GET /movies/title/:title --> Muestra una película buscando por su título.

<br>

- Users

- User Login
   - POST /login --> Es necesario hacer login con un user ya registrado para obtener un token (clave) que permita el acceso a algunos endpoints que necesitan permisos. Algunos endpoints solo permiten el acceso si el usuario es Administrador.

   - POST /users --> Permite registrar un nuevo usuario.
   - GET /users--> Muestra todos los usuarios registrados(solo acceso como Administrador).
   - GET/users/:id --> Muestra un usuario buscando con un Id (Necesita token).
   - GET /users/email/:email --> Muestra un usuario buscando con un email (Necesita token).
   - PUT /users/newpassword --> Modifica el password actual de un usuario (Necesita token).
   - PUT /users/:id --> Modifica datos de usuario (Necesita token).
   - DELETE /users --> Elimina todos los usuarios (Solo acceso como Administrador). 
    - DELETE /users/delete/:id--> Elimina un usuario buscando con un Id (Solo acceso como Administrador).
<br>

- Orders
   - POST /orders -->  Crea un nuevo pedido (Necesita token).
   - GET/orders --> Muestra todos los pedidos (Solo acceso como Administrador).

<br>

- Genres
   - GET/genres --> Muestra todos los generos.

<br>

- GenreMovie
   - GET/genreMovie --> Muestra todos los generos asignados a películas.
   - POST/genreMovie --> Crea una nueva asignación de género a película (Solo acceso como Administrador).

<br>

- Actors
   - GET/actors --> Muestra todos los actores/actrices.

<br>

- Acts
   - GET/act --> Muestra todas los actuaciones asignadas a películas.
   - POST/act --> Crea una nueva asignación de actores a películas (Solo acceso como Administrador).



## Models relation

La relación entre users y movies es "many to many", por lo que debemos crear una relación intermedia (Orders).

La relación entre users y orders es "1 to many" (1:n), y la relación entre movies y orders es exáctamente la misma (1:n).

Entre movies y actors, o genres, pasa lo mismo. La relación entre ellos precisa de una relación intermedia, por lo que las relacionamos mediante la tabla acts y la tabla genreMovies.

<img src="img/reverseEngineer.png" width="1500">



## Tecnologías y dependencias utilizadas

<img src="img/js.jpg" width="90em"/><img src="img/node.png" width="90em"/><img src="img/sql.png" width="90em"/><img src="img/sequelize.png" width="90em"/>
</br>
<img src="img/nodemon.png" width="90em"/><img src="img/cors.png" width="90em"/><img src="img/bcrypt.png" width="90em"/><img src="img/express.png" width="90em"/>
</br>
<img src="img/dotenv.png" width="90em"/><img src="img/jwt.png" width="90em"/><img src="img/github.png" width="90em"/><img src="img/postman.png" width="90em"/>
</br>



Puedes ver este proyecto en: <kbd>⇥</kbd> [GitHub pages](https://raquelmoya.github.io/JSGame)

<hr>


## Developers ✍️

[Raquel Moya](https://github.com/RaquelMoya)

Última edición: 27/02/2022