const chalk=require('chalk');

const addGuest=(name,address,contact_no,visit_date)=>{
    console.log(chalk.green("Add",name));
}
const updateGuest=(id,name,address,contact_no,visit_date)=>{
    console.log(chalk.yellow("Update",id));
}
const deleteGuest=(id)=>{
    console.log(chalk.red("Delete",id));
}
const readGuest=(id)=>{
    console.log(chalk.blue("Read",id));
}
const listGuest=()=>{
    console.log(chalk.magenta("List"));
}

module.exports = { addGuest, updateGuest, deleteGuest, readGuest,listGuest};