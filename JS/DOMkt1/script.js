let w;
function getNumber(a=101,b=0){
    return Math.floor(Math.random()*(a-b)+b)
}
let arr =[]
let i = 0
while(i<=30){
    arr.push(`${getNumber(0, 99)}`)
    i++
}
let b = 0
for(let c = 0; c < 6; c++){
    document.write("<tr>")
    for(let o = 0; o <  5; o++){
        if(arr[b] >= 50){
            document.write(`<td style=" background-color: orange">${arr[b++]}</td>`)
            
        }else if(arr[b] <50){
            document.write(`<td>${arr[b++]}</td>`)
            
        }
    }
    document.write("</tr>")
}

function foo(){

}

