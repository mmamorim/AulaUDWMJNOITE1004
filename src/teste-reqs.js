import axios from "axios"


axios.get('https://randomuser.me/api/').then((resp) => {
    let user = resp.data.results[0]
    console.log('user', user);
}).catch((erro) => {
    console.log('passou aqui ERRO', erro);
})


/* 
function fazAlgo( valor, funcCB ) {
    console.log('chamei fazAlgo');
    console.log('valor: ', valor);
    console.log('funcCB: ', funcCB);
    funcCB()
}

fazAlgo(5, () => {
    console.log('chamei funcão');
})
*/