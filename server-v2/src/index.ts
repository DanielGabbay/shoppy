// import * as http from "http";
// import App from "./App";
//
// require('dotenv').config()
//
// const port = process.env.PORT || 8080;
//
// App.set("port", port);
// const server = http.createServer(App);
// server.listen(port);
// module.exports = App;
//
// server.on("listening", function (): void {
//     const addr = server.address();
//     const bind = (typeof addr === "string") ? `pipe ${addr}` : `port ${addr.port}`;
//     console.log(`Listening on ${bind}`);
// });
//
//

import express, {Request, Response} from 'express'

const app = express()
const port = process.env.PORT || 8080

app.get('/', (_req: Request, res: Response) => {
    return res.send('Express Typescript on Vercel')
})

app.get('/ping', (_req: Request, res: Response) => {
    return res.send('pong 🏓')
})

app.listen(port, () => {
    return console.log(`Server is listening on ${port}`)
})
