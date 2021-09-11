const setupTestEnvironment = require('../../setupTestEnvironment');

const fastify = setupTestEnvironment();

test('should create a note via POST route', async () => {

 const requestPayload = {
    title: 'my test note',
    body: 'Lore ipsom bodyyyyyyyyyyyyyyyyyyy'
 };

 const serverResponse = await fastify.inject({
    url: '/note',
    method: 'POST',
    payload: requestPayload
 })   

 expect(serverResponse.json().title).toEqual(requestPayload.title)
 expect(serverResponse.json().body).toEqual(requestPayload.body)

})