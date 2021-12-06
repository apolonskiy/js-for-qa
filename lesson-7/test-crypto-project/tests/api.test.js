const axios =  require('axios');


describe('Test our API', () => {
    test('Successful last price test', async() => {
        const resp = await axios.get('http://localhost:3000', {
            params: {
                from: 'BTC',
                to: 'USD'
            }
        })

        expect(resp.status).toBe(200)

        expect(resp.data).toContain('BTC/USD');
    })

    test('Handled error on wrong "from" query param', async() => {
        let resp;
        try{
            resp =  await axios.get('http://localhost:3000', {
                params: {
                    from: 'SMTH',
                    to: 'USD'
            }
            })
        } catch(e){

            resp = e.response;
        }

        expect(resp.status).toBe(400)

        expect(resp.data).toContain('Invalid Symbols Pair');
        expect(resp.data).not.toContain('BTC/USD');
    })

    test.skip('Handled error on missing query params', async() => {
        const resp = await axios.get('http://localhost:3000')

        expect(resp.status).toBe(400)

        expect(resp.data).toContain("Please specify from and to query parameters, like ?from=BTC&amp;to=USD");
        expect(resp.data).not.toContain('BTC/USD');
    })
})