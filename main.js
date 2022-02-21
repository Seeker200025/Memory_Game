const result = document.querySelector('.result');

var tab = [
    [1,0,0,0,],
    [0,2,0,0,],
    [0,0,3,0,],
    [0,4,0,0,]
];


const tablesView = async () =>{
    
    try{
        let txt = "";
        txt = `<h1>Memory_Game</h1>`
        tab.forEach(el => {
            txt += `<table>`
            for(let i = 0; i < el.length; i++){
                // console.log([i])
                if(el[i] === 0){
                txt += `<tr><button type="button" class="btn btn-primary m-2" style="width:120px;height:120px" >afficher</button></tr>` 
                }else{
                    txt += `<img src='${getMemory(el[i])}'style='width:100px; heigtht:100px'>`
                }
                  
            }
           txt += `</table>` 
        });
            

        
              
        
         result.innerHTML = txt;

        
        
    }catch(err){console.error(err)}

}
const getMemory = (valeur) => {
    let imgTxt = "image/";

        switch (valeur) {
            case 1: imgTxt += "elephant.png"
                break;
            case 2: imgTxt += "giraffe.png"
                break;
            case 3: imgTxt += "hippo.png"
                break;  
            case 4: imgTxt += "monkey.png"
                break;
            case 5: imgTxt += "panda.png"
                break;
            case 6: imgTxt += "parrot.png"
                break;
            case 7: imgTxt += "penguin.png"
                break;
            case 8: imgTxt += "pig.png"
                break;
            case 9: imgTxt += "rabbit.png"
                break;
            case 10: imgTxt += "snake.png"
                break;
            default: console.log("Cas non pris en compte")
                break;
        }

    return imgTxt;

}
tablesView()





