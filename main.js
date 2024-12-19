let fs=require('fs')
let path=require('path')

function createFolder(...folderName){
    folderName.forEach(folderName=>{
        let folderPath=path.join(__dirname,folderName)
        if(!fs.existsSync(folderPath)){
            fs.mkdirSync(folderPath)
            console.log(`fayl yaratildi: ${folderName}`);
        }
    })
}

let carFilePath=path.join(__dirname,'cars.json')

function writeCar(data){
    let cars=[];
    if(fs.existsSync(carFilePath)){
        cars=JSON.parse(fs.readFileSync(carFilePath,'utf-8'))
    }
    cars.push(data);
    fs.writeFileSync(carFilePath,JSON.stringify(cars,null,2))
    console.log('data saqlandi: ',data);
}

function readFile(){
    if(fs.existsSync(carFilePath)){
        return JSON.parse(fs.readFileSync(carFilePath,'utf-8'))
    }
    return []
}

function deleteCarById(id){
    if(fs.existsSync(carFilePath)){
       let cars=JSON.parse(fs.readFileSync(carFilePath,'utf-8'))
       let filteredcars=cars.filter(car=>car.id!==id)
       fs.writeFileSync(carFilePath,JSON.stringify(filteredcars,null,2))
       console.log(`Id ${id} li car o'chirildi`);
    }
}

createFolder('folder1', 'folder2','folder3')
writeCar({ id: 3, model: "Mercedes-Benz CLS 63", price: 70000 }); 
writeCar({ id: 2, model: "BMW X5", price: 35000 }); 
console.log('Hamma fayldagi ma\'lumotlar:', readFile()); 
deleteCarById(2); 
console.log('Qolgan ma\'lumotlar:', readFile());