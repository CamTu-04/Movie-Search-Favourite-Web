//Xử lý kết quả của Promise trên bằng try catch finally thay vì sử dụn .then() .catch() hay finally()
//Lưu ý try catch finally phải được bọc trong một async function thì mới dùng đc await
// Khởi tạo hàm handleAsyncFunc 
const testPromise = new Promise((revlose, reject) => {
    let callApiSucc = false
    setTimeout(() => {
        if(callApiSucc){
            revlose('Sau 2s: Goi API thanh cong!');
        }else {
            reject('Sau 2s: Goi API that bat!');
        }
    }, 2000)
})

const handleAsyncFunc = async () => {
    try {
        const result = await testPromise
        console.log(result) //Khi thanh cong
    } catch(err){
        console.log(err); //Khi that bai
    } finally {
        console.log('Hoan tat xu ly Promise voi async/await!');
    }
}

handleAsyncFunc();

//Sd Async/await giải vấn đề
let fileData = null;
console.log('B1: Bat dau doc file du lieu');
console.log('B2: Gia lap dang doc file data, thuc thi ham readFileData...');

const readFileData= () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            fileData = "Hoang Cam Tu- Frontend Development";
            if(fileData){
                resolve(fileData);
            }
            else{
                reject("B3: Loi xuat hien!!!");
            }
        },2000)
    })
}

const handleAsyncFunc = async () => {
    try {
        const result = await readFileData()
        console.log('B3: Da doc xong file co du lieu la:', result);
    }
     catch(err) {
        console.log(err);
    } finally{
        console.log('B4: Ket thuc qua trinh doc file')
    }
}
handleAsyncFunc();

//Hướng dẫn sử dụng IIFE
// Lưu ý khi dùng IIFE thì dòng lệnh trên trước khi sd IIFE nên có dấu chấm phẩy ở đầu và kết thúc của IIFE để tránh việc nó bị coi là tham số của 1 hàm khác
console.log('B2: Gia lap dang doc file data, thuc thi ham readFileData...');
(async () => {
    try {
        const result = await readFileData()
        console.log('B3: Da doc xong file co du lieu la:', result);
    }
     catch(err) {
        console.log(err);
    } finally{
        console.log('B4: Ket thuc qua trinh doc file')
    }
})()

//Ví dụ thực tế trong việc sử dụng Promise để xử lý các APIs trong bất đồng bộ
//https://pokeapi.co/
//https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch

(async (limit = 10) => {
    try{
        const rawResponse = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}`, { method: `GET`})
        const listResponse = await rawResponse.json()
        console.log('Danh sach Pokemon:', listResponse)
    } catch(err){
        console.log('Co loi khi getListPokemon:', err)
    } finally{
        console.log('Ket thuc hanh dong getListPokemon')
    }
})(5);

// Vấn đề Async/await Hell là gì?