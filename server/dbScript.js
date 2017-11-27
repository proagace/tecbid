use tecbid;
db.produtos.insertMany(
{
  "_id" : ObjectId("59fe96514674e52dfe0da995"),
  "nome" : "Micro-ondas Philips",
  "time" : "03:47:50 GMT-0200 (BRST)",
  "img" : "9e64d98e3af8f723ac88f6a4825dd067"
},
{
  "_id" : ObjectId("59fe9dfa4674e52dfe0da996"),
  "nome" : "Micro-ondas c/botão mute",
  "time" : "03:49:10 GMT-0200 (BRST)",
  "img" : "9e502f861d4c2f40442d5e8a9dca47d6"
},
{
  "_id" : ObjectId("59fea8234674e52dfe0da997"),
  "nome" : "No break do Aparecido",
  "time" : "03:56:51 GMT-0200 (BRST)",
  "img" : "9e502f861d4c2f40442d5e8a9sido123"
});

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