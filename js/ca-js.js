/*
const url ="http://localhost/linn-power/wp-json/wc/store/products";
let username ="ck_c96a2f181b9448f5638028550479b1c4f67de0e7"
let password ="cs_2ffcdf4d55ac69796de15d75867fd6ad3337f92d"


fetch(url, {
  method: 'GET',
  headers: new Headers({
    'Authorization': 'Basic ' + btoa(username + ":" + password)
  })
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error(error));
*/

const main = document.querySelector('main');

let username ="ck_d5d0c839717d9bd6f072b24e57bb96852d353e57";
let password ="cs_cb7c839611d329268b2eb69a504b3a73a1047e0a";
const url ="https://www.linn-ca.com/wp-json/wc/v3/products";
fetch(url, {
  method: 'GET',
  headers: new Headers({
    'Authorization': 'Basic ' + btoa(username + ":" + password)
  })
})
.then(response => response.json())
.then(data =>
    {
        console.log(data);
    })
.catch(error => console.error(error));
