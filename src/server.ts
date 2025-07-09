import { Server } from "http";
import mongoose from "mongoose";
import app from "./app";
import { envVars } from "./app/config/env";

let server: Server;
const port = 5000;

const startServer = async () => {
  try {
    await mongoose.connect(envVars.DB_URL);

    console.log("connected to db");

    server = app.listen(envVars.PORT, () => {
      console.log(`Server is running on port ${envVars.PORT} `);
    });
  } catch (err: any) {
    console.error("Failed to connect:", err.message);
  }
};
startServer();

//sigterm error
process.on("SIGINT", () => {
  console.log("SIGINT signal received... Server shutting down..");

  if (server) {
    server.close(() => {
      process.exit(1);
    });
  }

  process.exit(1);
});
// sigInt
process.on("SIGTERM", () => {
  console.log("SIGTERM signal received... Server shutting down..");

  if (server) {
    server.close(() => {
      process.exit(1);
    });
  }

  process.exit(1);
});

// un-handle rejection
process.on("unhandledRejection", (err) => {
  console.log("Unhandled Rejection detected... Server shutting down..", err);

  if (server) {
    server.close(() => {
      process.exit(1);
    });
  }

  process.exit(1);
});
// Promise.reject(new Error("i forgot"));
process.on("uncaughtException", (err) => {
  console.log("Uncaught  Exception detected... Server shutting down..", err);

  if (server) {
    server.close(() => {
      process.exit(1);
    });
  }

  process.exit(1);
});

// Uncaught Exception Error
// throw new Error("I forgot to handle this local error");
