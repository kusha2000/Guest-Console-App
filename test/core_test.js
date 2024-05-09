const fs=require("fs");
const os=require("os");


//Save

const gusets=[];
gusets.push({
    name:"name1",
    addrss:"add1",
});

//console.log(gusets);

// Convert the guests array to a JSON string
const jsonData = JSON.stringify(gusets);

fs.writeFileSync("j_data.json",jsonData)

//read
const dataBaffer=fs.readFileSync("j_data.json");
const dataJSON=dataBaffer.toString();
const data=JSON.parse(dataJSON);
console.log(data);