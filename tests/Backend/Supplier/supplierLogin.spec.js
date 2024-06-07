import {test, expect} from '@playwright/test';
import { BaseURL } from '../setup';


test('login With Invalid Credentials', async ({request}) => {
    const response = await request.post(`${BaseURL}/api/v1/supplier/auth`,
    {
        data: { "ID": "123456", 
                "password": "Password" },
        headers: { "Accept": "application/json"}
    })
    const data = await response.json()
    console.log(data);
    expect(data.status()).toBe(400);
    expect(data,message).toBe('invalid credential')
});

test('login With Invalid ID', async ({request}) => {
    const response = await request.post(`${BaseURL}/api/v1/supplier/auth`,
    {
        data: { "ID": "123456", 
                "password": "Password" },
        headers: { "Accept": "application/json"}
    })
    const data = await response.json()
    console.log(data);
    expect(data.status()).toBe(400);
    expect(data,message).toBe('invalid ID')
})

test('login With Invalid Password', async ({request}) => {
    const response = await request.post(`${BaseURL}/api/v1/supplier/auth`,
    {
        data: { "ID": "123456", 
                "password": "Password" },
        headers: { "Accept": "application/json"}
    })
    const data = await response.json()
    console.log(data);
    expect(data.status()).toBe(400);
    expect(data,message).toBe('invalid Password')
})

test('login With Password Lessthan 6 characters', async ({request}) => {
    const response = await request.post(`${BaseURL}/api/v1/supplier/auth`,
    {
        data: { "ID": "123456", 
                "password": "P1234" },
        headers: { "Accept": "application/json"}
    })
    const data = await response.json()
    console.log(data);
    expect(data.status()).toBe(400);
    expect(data,message).toBe('Password Must be atlest 6 characters')
})

test('Password exactly 6 characters', async ({request}) => {
    const response = await request.post(`${BaseURL}/api/v1/supplier/auth`,
    {
        data: { "ID": "123456", 
                "password": "123456" },
        headers: { "Accept": "application/json"}
    })
    const data = await response.json()
    console.log(data);
    expect(data.status()).toBe(200);
    expect(data,message).toBe('You are loggedin!')
})

test('Password more than 6 characters', async ({request}) => {
    const response = await request.post(`${BaseURL}/api/v1/supplier/auth`,
    {
        data: { "ID": "123456", 
                "password": "Password" },
        headers: { "Accept": "application/json"}
    })
    const data = await response.json()
    console.log(data);
    expect(data.status()).toBe(200);
    expect(data,message).toBe('You are loggedin!')
})

test('Password with special characters', async ({request}) => {
    const response = await request.post(`${BaseURL}/api/v1/supplier/auth`,
    {
        data: { "ID": "123456", 
                "password": "P@ssword" },
        headers: { "Accept": "application/json"}
    })
    const data = await response.json()
    console.log(data);
    expect(data.status()).toBe(200);
    expect(data,message).toBe('You are loggedin!')
})

test('Password with spaces', async ({request}) => {
    const response = await request.post(`${BaseURL}/api/v1/supplier/auth`,
    {
        data: { "ID": "123456", 
                "password": "P@  word" },
        headers: { "Accept": "application/json"}
    })
    const data = await response.json()
    console.log(data);
    expect(data.status()).toBe(200);
    expect(data,message).toBe('You are loggedin!')
})

test('Login with empty ID field', async ({request}) => {
    const response = await request.post(`${BaseURL}/api/v1/supplier/auth`,
    {
        data: { "ID": "   ", 
                "password": "P@ssword" },
        headers: { "Accept": "application/json"}
    })
    const data = await response.json()
    console.log(data);
    expect(data.status()).toBe(400);
    expect(data,message).toBe('ID is required')
})

test('Login with empty password field', async ({request}) => {
    const response = await request.post(`${BaseURL}/api/v1/supplier/auth`,
    {
        data: { "ID": "123456", 
                "password": "  " },
        headers: { "Accept": "application/json"}
    })
    const data = await response.json()
    console.log(data);
    expect(data.status()).toBe(400);
    expect(data,message).toBe('Password is required')
})