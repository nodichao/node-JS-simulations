var fs = require('fs');

fs.open('welcome.txt','w+',(err,fd)=>{
    if(err){
          return console.error(err);
    }
    fs.write(fd,'Hello Node',(err)=>{
        if(err){
            return console.log(err);
        }else{
                console.log('ecriture reussie');
                fs.readFile('welcome.txt',(err,data)=>{
                    if(err){
                        return console.error(err);
                    }else{
                        console.log('Contenu du fichier :'+ data)
                    }
                })
        }
    });
});