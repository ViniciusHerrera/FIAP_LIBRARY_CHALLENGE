import { DataSource } from "typeorm";
import path from "path";

const AppDataSource = new DataSource({
  type: "sqlite",
  database: path.join(__dirname, "/dbBookManagement.sqlite"),
  entities: [__dirname + "/../models/*.ts"],
  migrations: [path.join(__dirname, "/migrations/*.ts")],
  synchronize: true,
});

AppDataSource.initialize()
  .then(() => {
    console.log("Database initialized");
  })
  .catch((error) => {
    console.log("Error initializing the database", error);
  });

export default AppDataSource;