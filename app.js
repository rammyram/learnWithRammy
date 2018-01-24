var express = require("express") ,
path = require('path'),
app = express() ; 


app.use(express.static(path.join(__dirname, 'public')));
app.set("view engine","ejs") ; 

app.get("/",function(req,res){
    res.render("./landing") ; 
})


app.listen(process.env.PORT , process.env.IP , function(){
    console.log('Server has started') ; 
})
