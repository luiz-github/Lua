import { DataSource } from "typeorm"
import "reflect-metadata"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "root",
    password: "root",
    database: "lua_dev",
    synchronize: true,
    logging: true,
    entities: [ "../src/entities" ],
    subscribers: [],
    migrations: [ "../src/migrations" ],
})

AppDataSource.initialize()
    .then(() => {
      console.log( 'lskdjflksdjf')
    })
    .catch((error) => console.log(error))