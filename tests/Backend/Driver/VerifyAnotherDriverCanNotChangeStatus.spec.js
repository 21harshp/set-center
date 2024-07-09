import { test, expect } from '@playwright/test';
import { DriverURL } from '../setup';

let AccessToken
let orderNo
let AccessToken2

test('login driver', async ({ request }) => {
    const response = await request.post(`${DriverURL}/driver/auth/login`,
        {
            data: {
                "loginId": "Harsh05",
                "password": "123456"
            },
            headers: { "Accept": "application/json" }
        })
    const res = await response.json()
    AccessToken = res.data.accessToken;
    await expect(res.status).toBe(200);

})

test('Get Order ID', async ({ request }) => {
    const params = new URLSearchParams({
        deliveryDate: '2024-02-12',
        shippingStatus: 'IN_STOCK,NOT_SHIPPED',
        skip: 1,
        limit: 3000
    })
    const response = await request.get(`${DriverURL}/driver/order/list?${params.toString()}`,
        {
            headers: { "Accept": "application/json", 'Authorization': `Bearer ${AccessToken}` }
        })
    const Response = await response.json()
    orderNo = Response.data[0].order_no;

    // console.log(Response.data.map((h)=>h.order_no));
    // console.log(Response);
})

test('change status to in-stock', async ({ request }) => {
    const response = await request.patch(`${DriverURL}/driver/order/shipping_status`,
        {
            data: {
                "status": "IN_STOCK",
                "id": orderNo
            },
            headers: { "Accept": "application/json", 'Authorization': `Bearer ${AccessToken}` }
        })

    const Response = await response.json()
    await expect(Response.status).toBe(200);
    await expect(Response.message).toBe('注文が正常に更新されました');
    await expect(Response.data.shipping_status).toBe('IN_STOCK');
    // console.log(Response);
})

test('login secound driver', async ({ request }) => {
    const response = await request.post(`${DriverURL}/driver/auth/login`,
        {

            data: {
                "loginId": "Harsh001",
                "password": "Harsh 2142"
            },
            headers: { "Accept": "application/json" }


        })
    const res = await response.json()
    AccessToken2 = res.data.accessToken;
    await expect(res.status).toBe(200);

})


test('Try to change status from athor Driver to not-shiped', async ({ request }) => {
    const response = await request.patch(`${DriverURL}/driver/order/shipping_status`,
        {
            data: {
                "status": "NOT_SHIPPED",
                "id": orderNo
            },
            headers: { "Accept": "application/json", 'Authorization': `Bearer ${AccessToken2}` }
        })

    const Response = await response.json()
    // await expect(Response.status).toBe(200);
    // await expect(Response.message).toBe('注文が正常に更新されました');
    // await expect(Response.data.shipping_status).toBe('NOT_SHIPPED');
})