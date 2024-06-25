import { test, expect } from '@playwright/test';
import { IDandPasswordDoseNotMatch, sucessLogin } from '../Message';
import { DriverURL } from '../setup';


test('Login with valid credentials', async ({ request }) => {
    const response = await request.post(`${DriverURL}/driver/auth/login`,
        {
            data: {
                "loginId": "Harsh05",
                "password": "123456"
            },
            headers: { "Accept": "application/json" }
        })
    const res = await response.json()
    console.log(res);
    await expect(res.status).toBe(200);
    // console.log(res.data.accessToken);
    await expect(res.message).toBe(sucessLogin);

});

test('Login with invalid password (less than 6 characters)', async ({ request }) => {
    const response = await request.post(`${DriverURL}/driver/auth/login`,
        {
            data: {
                "loginId": "Harsh05",
                "password": "12345"
            },
            headers: { "Accept": "application/json" }
        })
    const res = await response.json()
    console.log(res);
    await expect(res.status).toBe(400);
    // await expect(res.message).toBe(IDandPasswordDoseNotMatch);

});

test('Login with valid password (more than 6 characters)', async ({ request }) => {
    const response = await request.post(`${DriverURL}/driver/auth/login`,
        {
            data: {
                "loginId": "Harsh01",
                "password": "Harsh@2142"
            },
            headers: { "Accept": "application/json" }
        })
    const res = await response.json()
    // console.log(res);
    await expect(res.status).toBe(200);
    await expect(res.message).toBe(sucessLogin);

});

test('Login with blank password	', async ({ request }) => {
    const response = await request.post(`${DriverURL}/driver/auth/login`,
        {
            data: {
                "loginId": "Harsh05",
                "password": ""
            },
            headers: { "Accept": "application/json" }
        })
    const res = await response.json()
    console.log(res);
    await expect(res.status).toBe(400);
    await expect(res.message).toBe('空のパスワードは許されない。');

});

test('Login with valid credentials but incorrect username', async ({ request }) => {
    const response = await request.post(`${DriverURL}/driver/auth/login`,
        {
            data: {
                "loginId": "Harsh5",
                "password": "123456"
            },
            headers: { "Accept": "application/json" }
        })
    const res = await response.json()
    console.log(res);
    await expect(res.status).toBe(400);
    await expect(res.message).toBe(IDandPasswordDoseNotMatch);

});

test.only('Login with valid username but incorrect password', async ({ request }) => {
    const response = await request.post(`${DriverURL}/driver/auth/login`,
        {
            data: {
                "loginId": "Harsh05",
                "password": "1234506"
            },
            headers: { "Accept": "application/json" }
        })
    const res = await response.json()
    console.log(res);
    await expect(res.status).toBe(400);
    await expect(res.message).toBe(IDandPasswordDoseNotMatch);

});

test('Login with mixed case valid credentials', async ({ request }) => {
    const response = await request.post(`${DriverURL}/driver/auth/login`,
        {
            data: {
                "loginId": "Harsh01",
                "password": "Harsh@2142"
            },
            headers: { "Accept": "application/json" }
        })
    const res = await response.json()
    // console.log(res);
    await expect(res.status).toBe(200);
    await expect(res.message).toBe(sucessLogin);

});

test('Login with leading and trailing spaces in password', async ({ request }) => {
    const response = await request.post(`${DriverURL}/driver/auth/login`,
        {
            data: {
                "loginId": "Harsh001",
                "password": "Harsh 2142"
            },
            headers: { "Accept": "application/json" }
        })
    const res = await response.json()
    // console.log(res);
    await expect(res.status).toBe(200);
    await expect(res.message).toBe(sucessLogin);

});

test('Login with all spaces in password', async ({ request }) => {
    const response = await request.post(`${DriverURL}/driver/auth/login`,
        {
            data: {
                "loginId": "Harsh1",
                "password": "      "
            },
            headers: { "Accept": "application/json" }
        })
    const res = await response.json()
    // console.log(res);
    await expect(res.status).toBe(400);
    await expect(res.message).toBe(IDandPasswordDoseNotMatch);

});
