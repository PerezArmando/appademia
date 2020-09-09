import express from 'express';
import config from 'config';

import setupRoutes from '@routes/setup';

const app = express();

setupRoutes(app);

const port = config.get('port');
app.listen(port, async () => {
    console.log(`🚀 App running on port ${port}. 🚀`);
});