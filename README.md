
# project-riderize



Projeto criado para estudos. Neste exemplo, utilizei as seguintes linguagens/frameworks/libs:



Node.js

Typescript

TypeORM

Docker

Postgresql

Jest



### Docker



docker run --name postgres_riderize -e POSTGRES_PASSWORD=docker -p 5432:5432 -d postgres



### Migrations

CreateUser

CreateUserTokens

CreatePedal

CreateSubscriptionPedal



### Scripts

dev = iniciar servidor

typeorm = utilizar cli do typeorm

test = iniciar testes automatizados existentes



### Rotas disponíveis



#### Users

| Rota | Tipo/URL | Parâmetros | Status code esperado | Resposta esperada |

| ------------ | ------------ | ------------ | ------------ | ----------------- |

| Create User | POST http://localhost:3333/users | name: string, email: string, password: string | 200 | user: { name: "xxx", email: "xxx", id: "xxx", created_at: "xxx", updated_at: "xxx" } |

| Create Session | POST http://localhost:3333/sessions | email: string, password: string | 200 | user: { name: "xxx", email: "xxx", id: "xxx", created_at: "xxx", updated_at: "xxx" }, token: "xxx" |


#### Pedals

| Rota | Tipo/URL | Parâmetros | Status code esperado | Resposta esperada |

| ------------ | ------------ | ------------ | ------------ | ----------------- |

| Create Pedal | POST http://localhost:3333/pedals | name: string, start_date: Date, start_date_registration: Date, end_date_registration: Date, additional_information: string || null, start_place: string, participants_limit: number || null | 200 | { "id": "xxx", "name": "xxx", "start_date": "YYYY-MM-DD", "start_date_registration": "YYYY-MM-DD", "end_date_registration": "YYYY-MM-DD", "additional_information": "xxx", "start_place": "xxx", "participants_limit": "xxx } |



### Observações:

- Create Pedal: para criar um pedal, enviar junto da requisição um Bearer token de sessão. Para isso, criar um sessão (rota Create Session) antes de utilizar esta rota


#### SubscriptionPedals

| Rota | Tipo/URL | Parâmetros | Status code esperado | Resposta esperada |

| ------------ | ------------ | ------------ | ------------ | ----------------- |

| Subscribe in Pedal | POST http://localhost:3333/subscriptionPedals | ride_id: string, user_id: string | 200 | user: { id: "xxx", ride_id: "xxx", user_id: "xxx", subscription_date: "YYYY-MM-DD" } |

| Show Users in Ride | GET http://localhost:3333/subscriptionPedals | ride_id: string | 200 | { [] } |


### Observações:

- Subscribe in Pedal: para se inscrever em um pedal, enviar junto da requisição um Bearer token de sessão. Para isso, criar um sessão (rota Create Session) antes de utilizar esta rota. O campo ride_id se refere ao ID do pedal (gerado na resposta da rota Create Pedal).
- Show Users in Ride: para visualizar os ciclistas cadastrados em um pedal, enviar junto da requisição um Bearer token de sessão. Para isso, criar um sessão (rota Create Session) antes de utilizar esta rota. O campo ride_id se refere ao ID do pedal (gerado na resposta da rota Create Pedal).
