import {expect, test} from '@playwright/test';
import { DriverURL, TodaysDate } from '../setup';

let AccessToken

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

test('Verify default selection displays data for both shipped and unshipped goods', async ({ request }) => {
    const params = new URLSearchParams({
        deliveryDate: TodaysDate,
        shippingStatus: 'IN_STOCK,NOT_SHIPPED',
        skip: 1,
        limit: 3000,
        deliveryPlaceCode : [3,4]
    })
    const response = await request.get(`${DriverURL}/driver/order/list?${params.toString()}`,
        {
            headers: { "Accept": "application/json", 'Authorization': `Bearer ${AccessToken}` }
        })
    const Response = await response.json()
    console.log(Response);
    // console.log(Response.data.map((h) => h));    

})