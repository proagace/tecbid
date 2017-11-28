use tecbid;
db.produtos.insertMany([
{
  "nome" : "Micro-ondas Philips",
  "startDate" : new Date("11/27/2017, 7:50:29 PM").toLocaleString(),
  "finalDate" : new Date("12/15/2017, 7:50:29 PM").toLocaleString(),
  "desc" : "descrição teste desnecessariamente grande",
  "img" : "9e64d98e3af8f723ac88f6a4825dd067",
  "status": "ativo"
},
{
  "nome" : "Micro-ondas c/botão mute",
  "startDate" : new Date("11/27/2017, 7:50:29 PM").toLocaleString(),
  "finalDate" : new Date("12/15/2017, 7:50:29 PM").toLocaleString(),
  "desc" : "descrição teste desnecessariamente grande",
  "img" : "9e502f861d4c2f40442d5e8a9dca47d6",
  "status": "ativo"
},
{
  "nome" : "No break do Aparecido",
  "startDate" : new Date("11/27/2017, 7:50:29 PM").toLocaleString(),
  "finalDate" : new Date("11/28/2017, 01:44:00 AM").toLocaleString(),
  "desc" : "descrição teste desnecessariamente grande",
  "img" : "9e502f861d4c2f40442d5e8a9sido123",
  "status": "ativo"
},
{
  "nome" : "No break do Aparecido",
  "startDate" : new Date("11/28/2017, 01:44:00 AM").toLocaleString(),
  "finalDate" : new Date("11/29/2017, 01:44:00 AM").toLocaleString(),
  "desc" : "descrição teste desnecessariamente grande",
  "img" : "9e502f861d4c2f40442d5e8a9sido123",
  "status": "criado"
}]);

db.users.insertOne(
{
  "_id" : ObjectId("5a1a3d1e209c62cef923076b"),
  "email" : "admin@tecbid.com.br",
  "nome" : "Admin Tecbid Boss",
  "pFisica" : true,
  "idade" : 27,
  "tel" : "(011)1111-1111",
  "endereco" : "São Paulo, SP, Rua React 296",
  "img" : "0a7e3b1b5ef9402f829f1fd97c8431fa",
  "razaoSocial" : "Consulink",
  "cnpj" : "11111111111",
  "emailEmpresa" : "consulink@tecbid.com.br",
  "telEmpresa" : "(011)7716-1136",
  "enderecoEmpresa" : "São Paulo, SP, Rua dos bonecos de posto"
});