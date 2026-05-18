/*<-------------Bài toán đồng bộ ---------->*/
console.log("/*<-------------Bài toán đồng bộ ---------->*/")
console.log("Dong 1 chay dau tien");
console.log("Dong 2 chay sau dong 1");
console.log("Dong 3 chay sau dong 1 va 2");

/*<-------------Bài toán bất đồng bộ ---------->*/
// let fileDate = null;
// console.log('B1: Bat dau doc file du lieu ...');

// const readFileData = () => {
//     setTimeout(()=>{
//         console.log("B3: Da doc xong file.")
//         fileDate = "Hoang Cam Tu- Frontend Development";
//     }, 3000)
// };

// console.log('B2: Gia lap dang doc file data, thuc thi ham readFileData...');
// readFileData();

// console.log(`B4: Ket thuc qua trinh doc file, file data co du lieu la ${fileDate}.`);

/*<------------Các cách xử lý vấn đề bất đồng bộ----------->*/
// /*Callback/ Callback Hell*/
console.log("/*<-------------Xử lý bất đồng bộ bằng Callback ---------->*/")
let fileData = null;
console.log('B1: Bat dau doc file du lieu ...');

const readFileData = (callback) => {
    setTimeout(()=>{
        console.log("B3: Da doc xong file.")
        fileData = "Hoang Cam Tu- Frontend Development";
        callback();
    }, 1000)
};

console.log('B2: Gia lap dang doc file data, thuc thi ham readFileData...');
readFileData(()=>{
    console.log(`B4: Ket thuc qua trinh doc file, file data co du lieu la ${fileData}.`);
});

