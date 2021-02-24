PRIMER PROYECTO EN BACKEND
ABOUT:
Este es como el titulo indica, mi primer proyecto en BACKEND. Es una API RESTFULL de mi VideoClub que contiene como cualquier videoclub: Usuarios, Películas y Pedidos.

USAGE:
DESCARGA DEL REPO:

Repository

Requisitos: Cualquier IDE , yo uso Visual Studio Code.

Para levantar el servidor de mongo:

Primero escribe este comando en tu terminal.

docker run -rm -p 27017:27017 mongo

START
npm i

npm start

Si tienes algún tipo de error de conexión , recomiendo instalar las librerías:

Express :

npm i express

Mongoose:

npm i mongoose

También mi consejo es utilizar nodemon, para no tener reconectarte al puerto cada vez que haces una modificación. Si por cualquier motivo no te funciona reinstalala:

npm i nodemon

API REST
Resources:

/user

/movie

/order

Metod CRUD:
get /

post /

put /:id/update

delete /:id

Yo uso Postman para comprobar el buen funcionamiento de la API,
Dejo el link por Aqui, :

Run in Postman

License :--MIT--