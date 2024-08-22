import express from 'express'

import userRoute from './routes/user.js';

const app = express();

const port = 3000;

app.use("/api/v1/user", userRoute);

app.listen(port, () => {
    console.log(`Server is listening on http://localhost:${port}`);
})