import { DataSource } from "typeorm";

const AppDataSource = new DataSource({
  type: "sqlite",
  database: "./dbBookManagement.sqlite",
  entities: [__dirname + "/models/*.ts"],
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