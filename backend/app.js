const express = require('express');

const app = express();

app.get('/api/anouncements', (req, res, next) => {
    const anouncements = [
        {
            _id: 'xxxxxxxxxx',
            type: 'ABSENCE',
            description: 'MR CHEVREUIL - 28 au 31 septembre',
            created: '1665499818'
        },
        {
            _id: 'xxxxxxxxxx',
            type: 'ABSENCE',
            description: 'MR HOARAU - 25 au 30 septembre',
            created: '1665499817'
        }
    ];
    res.status(200).json(anouncements);
});

module.exports = app;