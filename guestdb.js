const chalk=require('chalk');
const fs=require("fs");

const db_file="data.json";

const addGuest=(name,address,contact_no,visit_date)=>{
    //console.log(chalk.green("Add",name));

    const gusets=loadGuests();

    const length=gusets.length;
    let id=1;
    if(length>0){
        id=gusets[length-1].id +1;
    }
    gusets.push({
        id,
        name,
        address,
        contact_no,
        visit_date
    });
    saveGuset(gusets);
    console.log(chalk.green("Data Saved!"));
}
const updateGuest=(id,name,address,contact_no,visit_date)=>{
    const guests=loadGuests();
    const gusetIndex=guests.findIndex((guest)=>guest.id===id);
    if(gusetIndex!=-1){
        const guest=guests[gusetIndex];
        guest.name=name?name:guest.name;
        guest.address=address?address:guest.address;
        guest.contact_no=contact_no?contact_no:guest.contact_no;
        guest.visit_date=visit_date?visit_date:guest.visit_date;

        console.log(chalk.yellow("Record Update:",id));
        saveGuset(guests);
    }else{
        console.log(chalk.yellow.inverse("No Record Found!"));
    }
    
}
const deleteGuest=(id)=>{

    const guests=loadGuests();
    const newGuests=guests.filter((guest)=>{
        return guest.id!=id;
    });
    if(guests.length>newGuests.length){
        saveGuset(newGuests);
        console.log(chalk.red("Delete",id));
    }else{
        console.log(chalk.red.inverse("No Record Found!"));
    }
    
}
const readGuest=(id)=>{
    const guests=loadGuests();
    const guest=guests.find((guest)=>guest.id==id);

    if(guest){
        console.log(chalk.blue("Guset:",id));
        console.log(guest);
    }else{
        console.log(chalk.blue.inverse("No Record Found!"));
    }
}
const listGuest=()=>{
    console.log(chalk.magenta("Guset List"));
    const guset=loadGuests();
    guset.forEach((guset)=>{
        console.log(guset);
    })
}

const saveGuset=(gusets)=>{
    const dataJSON = JSON.stringify(gusets);
    fs.writeFileSync(db_file,dataJSON);
}
const loadGuests=()=>{
    try{
        const dataBaffer=fs.readFileSync(db_file);
        const dataJSON=dataBaffer.toString();
        return JSON.parse(dataJSON);
    }catch(err){
        return [];
    }
}
    

module.exports = { addGuest, updateGuest, deleteGuest, readGuest,listGuest};