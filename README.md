Buen dia

Quieres una api GraphQL Gratis y Facil con configuracion en mongo.

aqui te la dejo

## Necesitamos ⚙️
NPM 
DOCKER

1. Clona el repositorio 

2. clona .env
con tus configuraciones

PORT=0000
SECRET=secret
DATABASE=mongodb://localhost:27017/bdname

3. Abre terminal y ejecuta:
npm install

hay deprecated no se preocupe. asi es.

4. monta tu mongo db con docker ejecuta

cd mongodb
docker-compose up -d

4. Corre

cd ..
npm run start:dev