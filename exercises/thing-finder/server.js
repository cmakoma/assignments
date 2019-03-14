const express = require("express")
const app = express()
const inventory = require("./inventoryItems")
const port = 9999

app.use(express.json())

app.get("/items", (req, res) => {
    let {price,type} = req.query
    if(price && type){
        const invPriceAndType = inventory.filter(item => item.type === type && item.price === price)
        res.send(invPriceAndType)
    }
    else if(type){
        const invType = inventory.filter(item => item.type === type)
        res.send(invType)}
    else if(price){
        const invPrice = inventory.filter(item => item.price <= +price)
        res.send(invPrice)}
    else{
        res.send(inventory)
    }

})

app.listen(port,() => {
    console.log(`you are using port ${port}`)
})