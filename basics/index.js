const express = require ("express")
const app =express()
const port = 4000
app.get ("/",(req,res)=>{
    res.send("server started successfully")
})
app.get("/fruits",(req,res)=>{
    res.json({
        endpoint : " Fruits ",
        apples: "🍎🍏",
        mangos:"🥭🥭🥭🥭",
        melon:"🍉🍉"
    })
}
)
app.listen(port,()=>{
    console.log(`\n\t server started`)
})