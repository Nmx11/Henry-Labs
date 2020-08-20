const fetch = require("node-fetch");


async function getMercado(query) {
  let response = await fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${query}`);
  let data = await response.json()
  return data;
}
// getMercado().then(data => console.log(data));

// fetch('https://api.mercadolibre.com/sites/MLA/search?q={query}')
//   .then(response => {
//     return response.json();
//   })
//   .then(response => {
//     console.log(response)
//   })

// function getOne(id) {
//     return query(`SELECT * FROM clases WHERE id = '${id}'`);
// }


module.exports = {
  getMercado,  
};
