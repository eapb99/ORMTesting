# ORMTesting with Jest & SuperTest

## Creacion de la base de datos.
Para este ejercicio haremos uso del script **Universidad.sql**.  

Nos dirijiremos MySQL Workbench y lo ejecutaremos, esto nos creara una nueva base de datos llamada universidad.

## Configuracion de la base de datos.

Nos dirijimos a la ruta config/config.json y en la parte de development, configuraremos las respectivas credenciales de nuestra base de datos.
![image](https://user-images.githubusercontent.com/62962507/183260783-f84c5999-cb20-4fd4-abaa-919aef47f272.png)


## Sequelize-auto
En esta ocasión, será necesario reconstruir los modelos desde un conjunto de tablas de la base de datos. Para esto, desde la línea de comandos del proyecto:

  * Instale sequelize-auto, con: **npm install -g sequelize-auto**
  * Ahora podrás acceder a la ayuda con el comando sequelize-auto
  * Reconstruya los modelos, con: sequelize-auto -h localhost -d misitio -u root -p 3306 -T sequelizemeta
      - Especifique el hostname después del parámetro -h <host>
      - Especifique el nombre de la base de datos después del parámetro  -d <database>
      - Especifique el nombre del usuario después del parámetro -u <user>
      - Especifique el puerto después del parámetro  -p <port>
      - Especifique las tablas a omitir después del parámetro -T <skiptables>
      
  * Revise los archivos generados en la carpeta "/models"
  * Para facilitar la carga de los modelos, sequelize-meta creó un archivo de inicialización llamado "init-models.js".


## Instalando nuestras dependencias para el testing
    npm install jest --save-dev
    npm install supertest --save-dev
    npm install cross-env --save-dev
## Configurando el ambiente de testing
```
// package.json
 "scripts": {
    ...
    "test": "cross-env NODE_ENV=test jest --testTimeout=10000",
    "pretest": "cross-env NODE_ENV=test npm run migrate:reset",
    "migrate:reset": "npx sequelize-cli db:migrate:undo:all && npm run migrate",
    "migrate": "npx sequelize-cli db:migrate && npx sequelize-cli db:seed:all",
  },
  "jest": {
    "testEnvironment": "node",
    "coveragePathIgnorePatterns": [
      "/node_modules/"
    ]
  },
```
## Configurando la base de datos para testing

Para efectos practicos usaremos la misma configuracion que colocamos en el config.json para el ambiente de desarrollo.

![image](https://user-images.githubusercontent.com/62962507/183260798-2cece8e0-6b09-443a-8b28-4e27d4b3e07f.png)


## Ejecutando nuestros tests
Para ejecutar nuestros testing usaremos el comando:
```
npm test
```
  
