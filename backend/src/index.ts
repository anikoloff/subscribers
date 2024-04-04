import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import runDbMigrations from '../src/db/migrations/index';
import subscriberRouter from '../src/api/routes';

const app = express();

app.use(express.json());
app.use(cors());

app.use('/subscribers', subscriberRouter);

async function start() {
    if (process.env.DB_MIGRATION_COMPLETED === 'false') {
        await runDbMigrations();
      }

    const port = process.env.PORT || 3000;
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });
}

start();