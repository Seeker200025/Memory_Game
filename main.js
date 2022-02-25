const result = document.querySelector('.result');
const btn = document.querySelector('.btn');

let tab = [
    [0,0,0,0],
    [0,0,0,0],
    [0,0,0,0],
    [0,0,0,0],
    [0,0,0,0]
];

let tabResult = [
    [1,1,2,4],
    [3,3,4,2],
    [5,5,6,6],
    [7,7,8,8],
    [9,9,10,10],
];


const tablesView = async () =>{
    
    try{
        
        let txt = "";
        txt = `<h1>Memory_Game</h1>`
        for(let i = 0; i < tab.length; i++){
            txt += `<div>`
            for(let j = 0; j < tab[i].length; j++){
                
                if(tab[i][j] === 0){
                txt += "<div><button type='button' class='btn btn-primary m-2''style='width:120px;height:120px' onclick ='verif(\""+i+"-"+j+"\")'>afficher</button></div>"
                }else{
                    txt += `<img src='${getMemory([i][j])}'style='width:100px; heigtht:100px'>`
                }
                  
            }
           txt += `</div>` 
        };
            
         result.innerHTML = txt;
        
    }catch(err){console.error(err)}

}
const getMemory = (valeur) => {
    let imgTxt = "";

        switch (valeur) {
            case 1: imgTxt += "image/elephant.jpg";
                break;
            case 2: imgTxt += "image/giraffe.jpg";
                break;
            case 3: imgTxt += "image/hippo.jpg";
                break;  
            case 4: imgTxt += "image/monkey.jpg";
                break;
            case 5: imgTxt += "image/panda.jpg"
                break;
            case 6: imgTxt += "image/parrot.jpg"
                break;
            case 7: imgTxt += "image/penguin.jpg"
                break;
            case 8: imgTxt += "image/pig.jpg"
                break;
            case 9: imgTxt += "image/rabbit.jpg"
                break;
            case 10: imgTxt += "image/snake.jpg"
                break;
            default: console.log("Cas non pris en compte")
                break;
        }

    return imgTxt;

}


tablesView()


/*
Programmer la fonction permettant d'afficher l'un des boutons "afficher"
Faire en sorte de vérifier si les deux images cliquées correspondent
*/ 


const verif = (el) =>{
    let l = el.substr(0, 1);
    let c = el.substr(2,1);

    tab[l][c] = tabResult[l][c];
    tablesView()
}


