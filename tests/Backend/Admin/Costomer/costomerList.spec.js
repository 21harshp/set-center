import { test, expect } from '@playwright/test'
import { AdminID, AdminPassword, BaseURL } from '../../setup';

let AccessToken
let id

test('LoginAdmin', async ({ request }) => {
    const Response = await request.post(`${BaseURL}/admin/auth/login`,
        {
            data: {
                "email": AdminID,
                "password": AdminPassword
            },
            headers: { "Accept": "application/json" }
        })
    const response = await Response.json()
    AccessToken = await response.data.accessToken;
    id = await response.data.id;
});

test('costomerList', async ({ request }) => {
    const params = new URLSearchParams({
        limit: 3000,
        skip: 1
    })
    const Response = await request.post(`${BaseURL}/admin/auth/login${params.toString()}`,
        {
            headers: { "Accept": "application/json", 'Authorization': `Bearer ${AccessToken}` }
        })

    console.log(Response.json());
})

