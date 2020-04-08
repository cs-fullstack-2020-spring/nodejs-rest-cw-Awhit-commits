const express = require('express');

//Stored port in variable
const port = 8000;

const app = express();
app.use(express.json());
//list for blog post
blogArray = [];

//Not required but something for the root route
app.get('/',(req,res) =>{
    res.send(`Welcome to my server`)
})
//Attempted Challenge
app.get('/blogpost',(req,res) =>{
    let displayPost=""
    blogArray.forEach(post => {
        displayPost = `Title: ${post.title}
        Entry: ${post.entry}`
        
        
    });
    res.send(displayPost)

})
//Read in CRUD
//Use id created in post to see specific post
app.get('/blogpost/:id',(req,res)=>{
    //Display the element on the page
    blogArray.forEach((post,index) =>{
        if(index ==req.params.id){
            res.send(`Title: ${post.title}
            Entry: ${post.entry}`)
        }
    })
})

//Stole kevin's method of getting id so it's easier to refer back

//Create method in CRUD
app.post('/blogpost/:id',(req,res) =>{
    let listLength = blogArray.push(req.body);
    blogArray[listLength-1].id = listLength-1;
    console.log(blogArray);
    res.send(blogArray[listLength-1])
    
})
//Update method in CRUD
app.put('/blogpost/:id',(req,res) =>{
    blogArray.forEach((post,index) =>{
        if(index ==req.params.id){
            res.send(`Title: ${post.title}
            Entry: ${post.entry},
            Status: Updated`)
        }
    })
    
})
//Delete method in CRUD
app.delete('/blogpost/:id',(req,res) =>{
    blogArray.forEach((post,index) =>{
        if(index ==req.params.id){
            res.send(`Title: ${post.title}
            Entry: ${post.entry},
            Status: Terminated`)
        }
    })
    
})



//Listening method for server and logging in console to see if it's running on correct port
app.listen(port,console.log(`Listening on port ${port}`));
