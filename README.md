# Celulares Backend

Aplicación hecha con:
* MySQL
* NodeJS
* Express
* Sequelize


Ejecutar comando para instalar los módulos de Node
```
npm install
```

Para correr la aplicación
```
npm run start:dev
```

## ENDPOINTS 
ENDPOINTS DESARROLLLO: (http://localhost:3000/api) 
ENDPOINTS PRODUCCION:  (https://celulares-backend.herokuapp.com/api)

* POST /celulares -----------> Añadir nuevo celular
* GET /celulares  -----------> Obtener todos los celulares
* GET /celulares/:id --------> Obtener celular por id
* PUT /celulares/:id --------> Editar información de celular
* DELETE /celulares/:id -----> Eliminar celular

### Campos del modelo Celular
* id - tipo: int, autoincremental (obligatorio)
* marca - tipo: string  (obligatorio)
* modelo - tipo: string (obligatorio)
