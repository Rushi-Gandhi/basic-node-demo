import  express ,{Request , Response}  from "express";
import router  from "./routes/router";

import swaggerUi from 'swagger-ui-express';
const swaggerFile = require('./swagger/swagger_output.json');
const app = express();
app.use(express.json());

//Router
app.use(router);
app.use('/swagger' , swaggerUi.serve, swaggerUi.setup(swaggerFile))

app.all('*', async (req : Request , res : Response) => {
     return res.status(404).send({"error" : "not found"});
});

export default app;
