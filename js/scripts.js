const objs = [
    {
        "nome": "Anderson",
        "idade": 21,
        "esta_trabalhando": true,
        "hobbies": [1, "Valorant", true, "Programação"],
        "detalhes_profissao": {
            "profissao": "Programador",
            "empresa": "SIAC"
        }
    },
    {
        "nome": "Mikenzuo",
        "idade": 16,
        "esta_trabalhando": true,
        "hobbies": [1, "Valorant", true, "Programação", "Assistir camps"],
        "detalhes_profissao": {
            "profissao": "Programador Web",
            "empresa": "NETBIIS"
        }
    }
]

console.log(objs)

//JSON
// converter objeto para JSON válido
const jsonData = JSON.stringify(objs) 
console.log(jsonData)

// Converter JSON para objeto
const objData = JSON.parse(jsonData)
console.log(objData)

objData.map((pessoa) => {
    console.log(pessoa.nome)
})