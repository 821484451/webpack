import "core-js/stable";
import "regenerator-runtime/runtime";

import image from '@assets/img/a.jpg';
import image2 from '@assets/img/b.jpg';
import data from "@assets/json/data.json";
import '@assets/less/style.less';
import Venus from "@assets/js/venus.js";
import '@assets/less/cube.less';
let venus = new Venus();
// venus.http({
//     url: "http://localhost:3000/user",
//     params: {
//         userName: "zjx"
//     }
// }).then(result => {
//     let res = JSON.parse(result);
//     let thStr = "<thead>"; 
//     Object.keys(res[0]).forEach(key => {
//         thStr += `<th>${key}</th>`
//     });
//     thStr = thStr + "</thead>"
//     let tdStr= "<tbody>";
//     res.forEach(item => {
//         tdStr += `<tr><td>${item.id}</td><td>${item.userName}</td><td>${item.sex}</td><td>${item.age}</td></tr>`
//     });
//     tdStr = tdStr + "</tbody>";
//     let tableStr = `<table>${thStr + tdStr}</table>`;
//     let divTag = document.createElement('div');
//     divTag.innerHTML = tableStr;
//     document.getElementById("app").append(divTag);
// });
console.log(data);
function a(x, y){
    if (x > y){
        return x;
    }else{
        return y;
    }
};
let  c= a(3,5)
console.log(c);

let img = document.createElement('img');
img.src = image;
document.getElementById("app").append(img);
let img2 = document.createElement('img');
img2.src = image2;
document.getElementById("app").append(img2);


