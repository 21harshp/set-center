import { test, expect } from '@playwright/test';
import { DriverURL } from '../setup';

let AccessToken
let orderNo

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
    // await expect(res.status).toBe(200);

})

test('Get Order ID', async ({ request }) => {
    const params = new URLSearchParams({
        deliveryDate: '2024-02-02',
        shippingStatus: 'IN_STOCK,NOT_SHIPPED',
        deliveryPlaceCode: [1,2,3,4,0],
        skip: 1,
        limit: 3000
    })
    const Response = await request.get(`${DriverURL}/driver/order/list?${params.toString()}`,
        {
            headers: { "Accept": "application/json", 'Authorization': `Bearer ${AccessToken}` }
        })
    const response = await Response.json()
    // console.log(response.data);
    const orderNo = response.data.map((h)=>h.number_of_cases)
    const totalNumber = orderNo.reduce((sum,current) => sum + current ,0);

    console.log(totalNumber);

    // const totalCases = numberOfCases.reduce((sum, current) => sum + current, 0);
    // console.log(Response.data.map((h)=>h.order_no));
    // console.log(Response);
})