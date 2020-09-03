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
(http://localhost:3000/api)
* POST /celulares            Añadir nuevo celular
* GET /celulares             Obtener todos los celulares
* GET /celulares/:id         Obtener celular por id
* PUT /celulares/:id         Editar info de cel
* DELETE /celulares/:id      Eliminar celular

### Campos del modelo Celular
* id - tipo: int, autoincremental
* marca - tipo: string  (obligatorio)
* modelo - tipo: string (obligatorio)