const request = require('supertest');
const app = require("../app");

describe('Departamento get test', () => {
    it('shoul be status 200', async() => {
        const response = await request(app).get("/departamentos");
        expect(response.statusCode).toBe(200);
    });

    it('should be an array response', async() => {
        const response = await request(app).get("/departamentos");
        expect(response.body).toEqual([{"id":1,"nombre":"Informática"},{"id":2,"nombre":"Matemáticas"},{"id":3,"nombre":"Economía y Empresa"},{"id":4,"nombre":"Educación"},{"id":5,"nombre":"Agronomía"},{"id":6,"nombre":"Química y Física"},{"id":7,"nombre":"Filología"},{"id":8,"nombre":"Derecho"},{"id":9,"nombre":"Biología y Geología"}]);
        });

    it('should be an 4 objects into array', async() => {
        const response = await request(app).get("/departamentos");
        expect(response.body).toHaveLength(9);
        });

    it('should be contain a specific object into array', async() => {
        const response = await request(app).get("/departamentos");
        expect(response.body).toEqual(expect.arrayContaining([{"id":1,"nombre":"Informática"}]));
    });
    
    
});

describe('Departamento get by id test', () => {
    it('shoul be status 200', async() => {
        const response = await request(app).get("/departamentos/1");
        expect(response.statusCode).toBe(200);
    });

    it('should be an objetct response', async() => {
        const response = await request(app).get("/departamentos/2");
        expect(response.body).toEqual([{"id":2,"nombre":"Matemáticas"}]);
        });

    
    it('should be not exist a object with this id', async() => {
        const response = await request(app).get("/departamentos/0");
        expect(response.body).toEqual([]);
    });
    
    
});

// describe('Departamento post test', () => {
//     it('shoul be status 201', async() => {
//         let departamento = {
//             "id": 10,
//             "nombre": "Computacion"
//           }
//         const response = await request(app).post("/departamentos").send(departamento);

//         expect(response.statusCode).toBe(201);
//     });

//     it('should be an object response', async() => {
//         let departamento = {
//             "id": 11,
//             "nombre": "Computacion"
//           }
//           const response = await request(app).post("/departamentos").send(departamento);
//           expect(response.body).toEqual({
//             "id": 11,
//             "nombre": "Computacion"
//           });
//         });

//     it('should be an 12 objects into array', async() => {
//         const response = await request(app).get("/departamentos");
//         expect(response.body).toHaveLength(11);
//         });

// });




