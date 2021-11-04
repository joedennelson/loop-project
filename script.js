console.log('hello im alive');

document.write("<h1> loops demo</h1>");

function while1(){ 
let i=0;
while(i<=5){
    console.log(i*2+1);
    i++;
}
}
function while2(){ 
let i=0;
while(i<=5){
    console.log(i*2)
    i++;
}
}
console.log(while1());
console.log(while2());

function for1(){ 
for(i=0; i<=2; i=i+1){
    console.log(i*3);
}
}
console.log(for1());

function for2(){
    for(i=0; i<=3; i=i+1){
        console.log(i*4);
    }
}
console.log(for2());