import express from 'express';
import { User } from './types';

import users from './users.json';

const app = express();
app.use(express.json());

export default app;
