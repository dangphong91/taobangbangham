let number = Number(prompt("Nhập kích thước Matrix:"));
function matrix() {
    let matran = [];
    document.write('<table border="1px">');
    for (let i = 0; i<number; i++) {
        let arr = [];
        document.write("<tr>");
        for (let j = 0; j<number; j++) {
            arr[j] = Math.floor(Math.random() * 90 + 10);
            document.write(`<td>${arr[j]}</td>`);
        }
        document.write("</tr>");
        matran.push(arr);
    }
    document.write("</table>");
    return matran;
}
let arr1 = matrix();
function tinhtong() {
    let sum =0;
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr1[i].length; j++) {
            if(arr1[i][j] % 2 == 0) {
            sum += arr1[i][j];
            }
        }
    }
    return sum;
}
let tongchan = tinhtong();
document.write(` Tổng các số chẵn trong matrix trên là :${tongchan} <br>`);
function tongduongcheo() {
    let cheo =0;
    for (let i = 0; i < arr1.length; i++) {
        cheo += arr1[i][i];
    }
    for (let j = 0; j < arr1.length; j++) {
        cheo += arr1[arr1.length -1 - j][j];
    }
    if (arr1.length % 2 !=0) {
        cheo = cheo - arr1[arr1.length / 2 - 0.5][arr1.length / 2 - 0.5];
    }
    return cheo;
}
let tongcheo = tongduongcheo();
document.write(` Tổng các số trên đường chéo chính trong matrix trên là :${tongcheo}<br>`);
function tongduongbien() {
    let bien =0;
    for (let i = 0; i < arr1.length; i++) {
        if (i == 0 || i == arr1.length -1) {
            for (let j = 0; j < arr1.length; j++) {
                bien += arr1[i][j];
            }
        } else {
            bien += arr1[i][0] + arr1[i][arr1.length -1];
        }
    }
    return bien;
}
let tongbien = tongduongbien();
document.write(` Tổng các số trên đường biên trong matrix trên là :${tongbien}<br>`);
let arr2 = [];
for (let i = 0; i < arr1.length; i++) {
    arr3 = [];
    for (let j = 0; j < arr1.length; j++) {
        arr3[j] = arr1[i][j];
    }
    arr2.push(arr3);
}
function tamgiacduoi() {
    document.write('<table border="1px">');
    for (let i = 0; i < arr1.length; i ++) {
        document.write(`<tr>`);
        for ( let j = 0; j < arr1.length; j++) {
            if (j > i && j < arr1.length) {
                arr1[i][j] = "";
            }
            document.write(`<td>${arr1[i][j]}</td>`);
        }
        document.write(`</tr>`);
    }
    document.write("</table>");
    return arr1;
}
document.write("Ma trận tam giác dưới là:")
tamgiacduoi();
function tamgiactren() {
    document.write('<table border="1px">');
    for (let i = 0; i < arr2.length; i ++) {
        document.write(`<tr>`);
        for ( let j = 0; j < arr2.length; j++) {
            if (j >=0 && j < i) {
                arr2[i][j] = "";
            }
            document.write(`<td>${arr2[i][j]}</td>`);
        }
        document.write(`</tr>`);
    }
    document.write("</table>");
    return arr2;
}
document.write("Ma trận tam giác trên là:")
tamgiactren();