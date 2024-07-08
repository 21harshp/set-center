import { test, expect } from '@playwright/test'
import { AdminURL } from '../../setup';

let accessToken
let id

test('LoginAdmin', async ({ request }) => {
    const Response = await request.post(`${AdminURL}/admin/auth/login`,
        {
            data: {
                "email": "tester.softcolon@gmail.com",
                "password": "P@ssword"
            },
            headers: { "Accept": "*/*" }
        })
    const response = await Response.json()
    accessToken = response.data.accessToken;
    id = response.data.id;
});

test('costomerList', async ({request}) => {
    const params = new URLSearchParams({
        limit: 3000,
        skip:1  
    })
    const Response = await request.post(`${AdminURL}/admin/auth/login`,
    {
        headers: { "Accept": "*/*" }
    })

    console.log(Response.json());
})

