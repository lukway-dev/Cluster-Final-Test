# Examen Final para el curso de Node.js - Lucas Matias Ojeda de Sousa

## Link de la API: <https://final-test-cluster-catamarca.herokuapp.com/>

Esta Api REST consta de 4 endpoints:

### POST: /register

Registra un usuario al recibir un username y un password.
Se verifica que el usuario este disponible.
De ser asi, el password es encriptado y almacenado en la base de datos.

```javascript
{
  username: "Lucas Ojeda de Sousa",
  password: "123456"
}
```

### POST: /login

Recibe un username y un password, se verifica que sean correctos, y de ser asi se devuelve un token, necesario para poder crear eventos, que se almacena en una cookie la cual expira 2 horas despues de haber sido creada.

```javascript
// Request
{
  username: "Lucas",
  password: "123456"
}

// Response
{
  token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxMGM3ZmEwMWYwMzM3MjA0MDIwMzdjMiIsInVzZXJuYW1lIjoiTHVjYXMiLCJpYXQiOjE2MjgyMDkwOTB9.4IH4f473TdOgPhbPi2OdwT6S4y5YY0KqF0MOI0uYzcQ"
}
```

### POST: /events

Recibe la información necesaria para crear un evento, se verifica que exista el token almacenado en la cookie y de ser asi se crea el evento y se almacena en la base de datos. Si no existe el token, se solicita iniciar sesión.

```javascript
// Request
{
  name: "Event",
  date: "Jul 19 19:30",
  description: "This is a very good event",
  location: "Mar del Plata",
  image: "https://www.images.com/image",
  highlight: true,
  author: "Lucas"
}

// Response
{
  name: "Event",
  date: "2001-07-19T22:30:00.000Z",
  description: "This is a very good event",
  location: "Mar del Plata",
  image: "https://www.images.com/image",
  highlight: true,
  author: "Lucas",
  id: "610c80901f033720402037c6"
}
```

### GET: /events

Devuelve todos los eventos creados.

```javascript
// Response
{
  name: "Event",
  date: "2001-07-19T22:30:00.000Z",
  description: "This is a very good event",
  location: "Mar del Plata",
  image: "https://www.images.com/image",
  highlight: true,
  author: "Lucas",
  id: "610c80901f033720402037c6"
},
{
  name: "Event 2",
  date: "2001-07-19T22:30:00.000Z",
  description: "This is another very good event",
  location: "Mar del Plata",
  image: "https://www.images.com/image-2",
  highlight: false,
  author: "Lucas",
  id: "610c814b1f033720402037ca"
}
```

### GET: /highlights

Devuelve los eventos destacados.

```javascript
// Response
{
  name: "Event",
  date: "2001-07-19T22:30:00.000Z",
  description: "This is a very good event",
  location: "Mar del Plata",
  image: "https://www.images.com/image",
  highlight: true,
  author: "Lucas",
  id: "610c80901f033720402037c6"
}
```
