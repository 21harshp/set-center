import { test, expect } from '@playwright/test'
import { AdminID, AdminPassword, BaseURL } from '../setup'

let accessToken


test('Verify login with valid predefined ID and password', async ({ request }) => {
    const Request = await request.post(`${BaseURL}/admin/auth/login`,
        {
            data: {
                "email": AdminID,
                "password": AdminPassword
            },
            headers: { "Accept": "application/json" }
        });
    const response = await Request.json()
    await expect(response.status).toBe(200)
    await expect(response.message).toBe('ログイン成功')

    accessToken = response.data.accessToken

    // console.log(response);
});

test('Verify login with invalid ID	', async ({ request }) => {
    const Request = await request.post(`${BaseURL}/admin/auth/login`,
        {
            data: {
                "email": 'admin@gmail.com',
                "password": AdminPassword
            },
            headers: { "Accept": "application/json" }
        });
    const response = await Request.json()
    await expect(response.status).toBe(400)
    await expect(response.message).toBe('ログインに失敗しました')

});

test('Verify login with invalid password		', async ({ request }) => {
    const Request = await request.post(`${BaseURL}/admin/auth/login`,
        {
            data: {
                "email": AdminID,
                "password": 'AdminPassword'
            },
            headers: { "Accept": "application/json" }
        });
    const response = await Request.json()
    await expect(response.status).toBe(400)
    await expect(response.message).toBe('ログインに失敗しました')
});

test('Verify password validation for less than 6 characters	', async ({ request }) => {
    const Request = await request.post(`${BaseURL}/admin/auth/login`,
        {
            data: {
                "email": AdminID,
                "password": 'Admin'
            },
            headers: { "Accept": "application/json" }
        });
    const response = await Request.json()
    await expect(response.status).toBe(400)
    await expect(response.message).toBe('ログインに失敗しました')
});

test('Verify login with password more than 6 characters	', async ({ request }) => {
    const Request = await request.post(`${BaseURL}/admin/auth/login`,
        {
            data: {
                "email": AdminID,
                "password": AdminPassword
            },
            headers: { "Accept": "application/json" }
        });
    const response = await Request.json()
    await expect(response.status).toBe(200)
    await expect(response.message).toBe('ログイン成功')
});

test('Verify login when email ID field is left empty	', async ({ request }) => {
    const Request = await request.post(`${BaseURL}/admin/auth/login`,
        {
            data: {
                "email": '',
                "password": AdminPassword
            },
            headers: { "Accept": "application/json" }
        });
    const response = await Request.json()
    await expect(response.status).toBe(400)
    // await expect(response.message).toBe('ログイン成功')   
});

test('Verify login when password field is left empty', async ({ request }) => {
    const Request = await request.post(`${BaseURL}/admin/auth/login`,
        {
            data: {
                "email": AdminID,
                "password": ''
            },
            headers: { "Accept": "application/json" }
        });
    const response = await Request.json()
    await expect(response.status).toBe(400)
    // await expect(response.message).toBe('ログイン成功')   
});


