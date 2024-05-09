const yargs=require("yargs");
const db=require("./guestdb.js");

//Add a guest
yargs.command({
    command:'add',
    describe:'Add a guset',
    builder:{
        name:{
            describe:"Name",
            demandOption:true,
            type:"string"
        },
        address:{
            describe:"Address",
            demandOption:true,
            type:"string"
        },
        contact_no:{
            describe:"Contact No",
            demandOption:true,
            type:"number"
        },
        visit_date:{
            describe:"Visit Date",
            demandOption:true,
            type:"string"
        },
    },
    handler(argv){
        db.addGuest(argv.name,argv.address,argv.contact_no,argv.visit_date);
    }
});

//Update a Guset
yargs.command({
    command:'update',
    describe:'Update a guset',
    builder:{
        id:{
            describe:"ID",
            demandOption:true,
            type:"number"
        },
        name:{
            describe:"Name",
            type:"string"
        },
        address:{
            describe:"Address",
            type:"string"
        },
        contact_no:{
            describe:"Contact No",
            type:"number"
        },
        visit_date:{
            describe:"Visit Date",
            type:"string"
        },
    },
    handler(argv){
        db.updateGuest(argv.id,argv.name,argv.address,argv.contact_no,argv.visit_date);
    }
});

//Delete a Guset
yargs.command({
    command:'delete',
    describe:'Delete a guset',
    builder:{
        id:{
            describe:"ID",
            demandOption:true,
            type:"number"
        }
        
    },
    handler(argv){
        db.deleteGuest(argv.id);
    }
});

//Read a Guset
yargs.command({
    command:'read',
    describe:'Read a guset',
    builder:{
        id:{
            describe:"ID",
            demandOption:true,
            type:"number"
        }
    },
    handler(argv){
        db.readGuest(argv.id);
    }
});

//List a Guset
yargs.command({
    command:'list',
    describe:'List all guset',
    
    handler(argv){
        db.listGuest();
    }
});

yargs.parse();