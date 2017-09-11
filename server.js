var MongoClient = require('mongodb').MongoClient;

var url = "mongodb://localhost:27017/mydb";

MongoClient.connect(url, function(err, db){
    if(err){
        throw err;
    }
    console.log("Database c")
});


MongoClient.connect(url, function(err, db){
    if(err) throw err;
    var myobj = {first_name: "Karan", last_name: "Arora", number : "8802107855"};
    db.collection("customers").insertOne(myobj, function(err, res){
        if(err) throw err;
        console.log("one record entered");
        db.close();    
    })
});

MongoClient.connect(url, function(err, db){
    if(err){
        throw err;
    }
    var myobj = [
        {first_name: "Karan2", last_name: "Arora2", number : "8802107855"},
        {first_name: "Karan3", last_name: "Arora3", number : "9802107855"},
        {first_name: "Karan4", last_name: "Arora4", number : "0802107855"}
    ];
    db.collection("customers").insertMany(myobj, function(err, res){
        if(err){
            throw err;
        }
        console.log("Insert Many worked as expected.");
        db.close();
    });
});