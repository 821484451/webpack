import image from '@assets/img/a.jpg';
import image2 from '@assets/img/b.jpg';
import '@assets/less/style.less';
import '@assets/less/cube.less';


function a(x, y){
    if (x > y){
        return x;
    }else{
        return y;
    }
};
let  c= a(3,5)
console.log(c);

const arr = [1,2,3,4,5,6,7]
if (arr.includes(3)) {
    new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({code: 0, data: {success: true}})
        }, 1000)
    }).then(res => {
        console.log(res)
    })
}

let img = document.createElement('img');
img.src = image;
document.getElementById("app").appendChild(img);
let img2 = document.createElement('img');
img2.src = image2;
document.getElementById("app").appendChild(img2);


