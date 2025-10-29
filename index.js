const express = require('express');
const app = express();
const port = 3001;
const db = require('./models');
const komik = require('./models/komik');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(port,() => {
    console.log('Server is started ');
})

db.sequelize.sync()
    .then((result) => {
        app.listen(3001, () => {
            console.log('Server is strated');
        })
    })
    .catch((err) => {
        console.log(err);
    })

app.post('/komik', async (req, res) => {
    const data = req.body;
    try {
        const komik = await db.Komik.create(data);
        res.status(201).json({
        message: 'Komik berhasil ditambahkan',
        data: komik
        });
    } catch (error) {
    res.send({message : error.message});
    }
});

app.get('/komik', async (req, res) => {
    try{
        const komiks = await db.Komik.findAll();
        res.send(komiks);
    }
    catch (error){
        res.send({message : error.message});
    }
});

app.put('/komik/:id', async (req, res) => {
    const id = req.params.id;
    const data = req.body;
    try {
        const komik = await db.Komik.findByPk(id);
        if (!komik) {
            return res.status(404).send({ message: 'Komik not found' });
        }
        await komik.update(data);   
        res.send({ message: 'Komik berhasil di update', komik});
    } 
    catch (error) {
        res.send({ message: error.message });
    }
});

