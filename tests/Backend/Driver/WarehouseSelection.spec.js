import {test, expect} from '@playwright/test'
import { DriverURL } from '../setup'

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

    localStorage.setItem('accesstoken', AccessToken)
                                                                  

})

test('Verify Data Display for Selected Warehouse from Dropdown	', async ({ request }) => {
    const params = new URLSearchParams({
        deliveryDate: '2024-02-12',
        shippingStatus: 'IN_STOCK,NOT_SHIPPED',
        skip: 1,
        limit: 3000,
        deliveryPlaceCode : [2,1,0]
    })
    const response = await request.get(`${DriverURL}/driver/order/list?${params.toString()}`,
        {
            headers: { "Accept": "application/json", 'Authorization': `Bearer ${AccessToken}` }
        })
    const Response = await response.json()
    //  console.log(Response.data.map((h)=> h.order.delivery_place.ikisaki_code));
    Response.data.map(async (h) => {
        const code = h.order.delivery_place.ikisaki_code;
        await expect(code === 2 || code === 1 || code === 0).toBe(true);
    });


    // Response.data.map(async(h)=> await expect(h.order.delivery_place.ikisaki_code).toBe(1 || 2));
    // Response.data.map(async(h)=> await expect(h.order.delivery_place.ikisaki_name).toBe('引き取り'));
    
    // Response.data.map(async(h)=> await expect([0, 1]).toContain((h.order.delivery_place.ikisaki_code)));
    //expect([0, 1]).toContain(ikisaki_code);

    // console.log(Response.data.map((h)=>h.order_no));
    // console.log(Response);
})

test('Verify Data is Updated When Selecting Different Warehouse	', async ({ request }) => {
    const params = new URLSearchParams({
        deliveryDate: '2024-02-12',
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
    //  console.log(Response.data.map((h)=> h.order.delivery_place.ikisaki_code));
    Response.data.map(async (h) => {
        const code = h.order.delivery_place.ikisaki_code;
        await expect(code === 3 || code === 4 ).toBe(true);
    });

})
