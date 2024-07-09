import { test, expect } from '@playwright/test'
import { AdminID, AdminPassword, BaseURL } from '../setup'


let accessToken;
let AccessToken = 'L5g7uy5gJG5SD5Hksuj5hd5i'
let id;

test.only('LoginAdmin', async ({ request }) => {
    const Response = await request.post(`${BaseURL}/admin/auth/login`,
        {
            data: {
                "email": AdminID,
                "password": AdminPassword
            },
            headers: { "Accept": "application/json" }
        })
    const response = await Response.json()
    accessToken = response.data.accessToken;
    id = response.data.id;
});

test('Successful Retrieval of Admin Profile', async ({ request }) => {
    const Response = await request.get(`${BaseURL}/admin/profile`,
        {
            headers: { "Accept": "application/json", 'Authorization': `Bearer ${accessToken}` }
        })
    const response = await Response.json()

    expect(response.message).toBe('管理者プロファイルの取得に成功しました')
    expect(response.status).toBe(200)
    expect(response.data.id).toBe(12)
    expect(response.data.email).toBe(AdminID)
});

test('Unauthenticated User', async ({ request }) => {
    const Response = await request.get(`${BaseURL}/admin/profile`,
        {
            headers: { "Accept": "application/json" }
        })
    const response = await Response.json()

    expect(response.message).toBe('このリソースにアクセスする権限がありません')
    expect(response.status).toBe(401)
});

test.only('Invalid Token', async ({ request }) => {
    const Response = await request.get(`${BaseURL}/admin/profile`,
        {
            headers: { "Accept": "application/json", 'Authorization': `Bearer ${AccessToken}` }
        })
    const response = await Response.json()

    expect(response.message).toBe('無効なトークンです。もう一度ログインしてください！')
    expect(response.status).toBe(401)
});