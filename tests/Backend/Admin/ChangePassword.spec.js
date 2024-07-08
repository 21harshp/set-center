import { test, expect } from '@playwright/test'
import { AdminPassword, BaseURL } from '../setup'


let accessToken;
let AccessToken = 'L8kjhf6vh22skhf2shdjf4h9jdsj'

test('LoginAdmin', async ({ request }) => {
    const Response = await request.post(`${BaseURL}/admin/auth/login`,
        {
            data: {
                "email": "tester.softcolon@gmail.com",
                "password": AdminPassword
            },
            headers: { "Accept": "application/json" }
        })
    const response = await Response.json()
    accessToken = response.data.accessToken;
    // id = response.data.id;
});

test('Verify with wrong Old Password', async ({ request }) => {
    const Response = await request.put(`${BaseURL}/admin/auth/change-password`,
        {
            data: {
                "oldPassword": "Harsh123",
                "newPassword": "P@ssword"
            },
            headers: { "Accept": "application/json", 'Authorization': `Bearer ${accessToken}` }
        })
    const response = await Response.json()

    expect(response.status).toBe(400);
    expect(response.message).toBe('資格情報が間違っています');
})

test('Verify with the wrong accessToken', async ({ request }) => {
    const Response = await request.put(`${BaseURL}/admin/auth/change-password`,
        {
            data: {
                "oldPassword": "Harsh123",
                "newPassword": "P@ssword"
            },
            headers: { "Accept": "application/json", 'Authorization': `Bearer ${AccessToken}` }
        })
    const response = await Response.json()

    expect(response.status).toBe(400);
    expect(response.message).toBe('資格情報が間違っています');
})

test('New Password Same as Old Password', async ({ request }) => {
    const Response = await request.put(`${BaseURL}/admin/auth/change-password`,
        {
            data: {
                "oldPassword": AdminPassword,
                "newPassword": AdminPassword
            },
            headers: { "Accept": "application/json", 'Authorization': `Bearer ${accessToken}` }
        })
    const response = await Response.json();
    expect(response.status).toBe(400);
    expect(response.message).toBe('以前のパスワードと同じパスワードは使用できません');
})

test('Missing Old Password', async ({ request }) => {
    const Response = await request.put(`${BaseURL}/admin/auth/change-password`,
        {
            data: {
                "oldPassword": '',
                "newPassword": AdminPassword
            },
            headers: { "Accept": "application/json", 'Authorization': `Bearer ${accessToken}` }
        })
    const response = await Response.json();
    expect(response.status).toBe(400);
    expect(response.message).toBe('以前のパスワードと同じパスワードは使用できません');
})

test('Missing New Password', async ({ request }) => {
    const Response = await request.put(`${BaseURL}/admin/auth/change-password`,
        {
            data: {
                "oldPassword": AdminPassword,
                "newPassword": ''
            },
            headers: { "Accept": "application/json", 'Authorization': `Bearer ${accessToken}` }
        })
    const response = await Response.json();
    expect(response.status).toBe(400);
    expect(response.message).toBe('以前のパスワードと同じパスワードは使用できません');
})

test('Password Change with Expired Session', async ({ request }) => {
    const Response = await request.put(`${BaseURL}/admin/auth/change-password`,
        {
            data: {
                "oldPassword": AdminPassword,
                "newPassword": ''
            },
            headers: { "Accept": "application/json", 'Authorization': `Bearer ${AccessToken}` }
        })
    const response = await Response.json();
    expect(response.status).toBe(401);
    expect(response.message).toBe('無効なトークンです。もう一度ログインしてください！');
})

test('Weak New Password', async ({ request }) => {
    const Response = await request.put(`${BaseURL}/admin/auth/change-password`,
        {
            data: {
                "oldPassword": AdminPassword,
                "newPassword": 'weak'
            },
            headers: { "Accept": "application/json", 'Authorization': `Bearer ${accessToken}` }
        })
    const response = await Response.json();
    console.log(response);
    expect(response.status).toBe(400);
    // expect(response.message).toBe('以前のパスワードと同じパスワードは使用できません');
})