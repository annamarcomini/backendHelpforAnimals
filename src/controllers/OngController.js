const connection = require('../database/connection');
const crypto = require("crypto")

module.exports= {
 async index (request, response) {
const ongs = await connection('ongs').select('*');

return response.json(ongs);
}, //rota  listagem dados 

 async create(request, response){
   const { name, email, whatsapp, city, uf } = request.body

   const id = crypto.randomBytes(4).toString("HEX") //cria caracteres aleatórios e converte em string

   await connection("ongs").insert({
     id,
     name,
     email,
     whatsapp,
     city,
     uf,
   }) 

   return response.json({ id })
 }
}