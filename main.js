const result = document.querySelector('.result');

var tab = [
    [1,0,0,0,],
    [0,1,0,0,],
    [0,0,1,0,],
    [0,1,0,0,]
];



const tablesView = async () =>{
    
    try{
        let txt = "";
        txt = `<h1>Memory_Game</h1>`
        tab.forEach(el => {
            txt += `<table>`
            for(let j = 0; j < el.length; j++){
                // console.log([j])
                if(el[j] === 0){
                txt += `<tr><button type="button" class="btn btn-primary m-2" style="width:120px;height:120px" >afficher</button></tr>` 
                }else{
                    txt += `<img src='image/elephant.png' style='width:100px; heigtht:100px'>`
                }
                  
            }
           txt += `</table>`   
        });
         result.innerHTML = txt;

        
        
    }catch(err){console.log(console.error(err))}

    
}

tablesView()
