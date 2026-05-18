
/*Promise/ Promise Hell*/
const testPromise = new Promise((resolve, reject)=>{
    let callApiSucces = false;
    setTimeout(() => {
        if(callApiSucces){
            resolve("Sau 2s: API Succes!");
        } else {
            reject("Sau 2s: API Fail!");
        }
    }, 2000)
});
// console.log(testPromise);
testPromise
    .then(resultData => {
        console.log(resultData);
    })
    .catch(errorData => {
        console.error(errorData);
    })
    .finally(() => {
        console.log("Hoan tat xu ly Promise!");
    })


//Sd Promise giải vấn đề- SD đối tượng
let fileData = null;
console.log('B1: Bat dau doc file du lieu ...');
console.log('B2: Gia lap dang doc file data, thuc thi ham readFileData...');

const filePromise = new Promise((resovle, reject) => {
    setTimeout(() => {
        fileData = "Hoang Cam Tu- Frontend Development";
        if(fileData !== null){
            resovle("B3: Doc file thanh cong...");
        }else {
            reject("B3: Doc file that bai!");
        }
    }, 3000)
});

filePromise
    .then(resultData => {
        console.log(resultData);
    })
    .catch(errorData => {
        console.error(errorData);
    })
    .finally(() => {
        console.log(`B4: Ket thuc qua trinh doc file, file data co du lieu la ${fileData}.`)
    })
//Sd Promise giải vấn đề- SD hàm
let fileData = null;
console.log('B1: Bat dau doc file du lieu ...');
console.log('B2: Gia lap dang doc file data, thuc thi ham readFileData...');

const filePromise = () => {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            console.log("B3: Da doc xong file.")
            fileData = "Hoang Cam Tu- Frontend Development";
            if (fileData) {
                resolve(fileData);
            } else {
                reject("Co loi xay ra!");
            }
        }, 3000)
    })
}
filePromise()
    .then(fileData => {
        console.log(`B4: Ket thuc qua trinh doc file du lieu vs data nhan dc: ${fileData}`);
    })
    .catch(err => {
        console.error(`B4: Ket thuc qua trinh: ${err}`);
    })
    .finally(() => {
        console.log(`B5: Ket thuc qua trinh doc file.`)
    })



//Ví dụ thực tế trong việc sử dụng Promise để xử lý các APIs trong bất đồng bộ
//https://pokeapi.co/
//https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch

const getListPokemon = (limit = 10) => {
    return fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}`, { method: `GET`})
        .then(rawResponse => {
            console.log('rawRespponse: ', rawResponse);
            rawResponse.json()
                .then(pokemon => {
                    console.log('Danh sach pokemon: ', pokemon);
                })
        })
        .catch(err => {
            console.log('Co loi khi getListPokemon:', err);
        })
        .finally(() => {
            console.log('Ket thuc hanh dong getListPokemon');
        })
}

getListPokemon(5);