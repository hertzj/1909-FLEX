const express = require('express');
const path = require('path')

const app = express();
const PORT = 3000;
app.use(express.static(path.join(_dirname, '/.static')))

const DATABASE = {
    data: {
        count: 0,
    }
}

app.get('/api', (req, res, next) => {
    res.send(DATABASE)
})

app.put('/api', (req, res, next) => {
    DATABASE.data.count++;

    res.send({
        message: true,
    })

})



app.listen(PORT, () => console.log(`listening on PORT: ${PORT}`))