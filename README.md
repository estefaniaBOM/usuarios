# usuarios

1. Crear base de datos con el nombre AdministracionUsuarios
2. Ejecutar el Script BD
3. En el archivo .env de la carpeta BACKEND cambiar la ruta de la base de datos en DATABASE_URL=""
4. En la terminal del BACKEND ejecutar los siguientes comandos:
    npx prisma db pull 
    npx prisma generate
    npm install
5. Ejecutar el comando node index.js para correr el BACKEND
6. En la terminal del frontend ejecutar los siguientes comandos:
    npm install
7. Correr el frontend con el comando npm run start

NOTA: En caso de que npm install no instale todas las librerias utilizadas, en el documento "comandos" se encuentran los respectivos comandos de las librerias instaladas.
