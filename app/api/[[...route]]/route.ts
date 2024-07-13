require('dotenv').config();
import axios from "axios";
import { Hono } from "hono"
import { handle } from "hono/vercel";
import { headers } from "next/headers";

export const runtime = "edge"

const app = new Hono().basePath('/api');

let BASE_URL = process.env.BASE_URL;

app.post('/signin', async (c) => {
    const userData = await c.req.json<{ username: string; password: string }>();
    let response = await axios.post(`${BASE_URL}`, userData,
        {
            headers: {
                'Content-Type': 'application/json',
                'x-tenantid': 'SchryverPruebas'
            }
        });

    return c.json({
        response
    })
})

export const POST = handle(app);
// export default app as never