import express from 'express';
import users_service from './apps/users';
import catalog_service from './apps/catalog';

const app = express();

app.use("/users", users_service)
app.use("/catalog", catalog_service)

export { app };

