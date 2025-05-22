const express = require('express');
const cors = require('cors'); // <--- aggiungi questo
const app = express();

app.use(cors()); // <--- e questo

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => res.send('Backend iLRiparaTutto attivo'));

app.listen(PORT, () => console.log(`Server attivo sulla porta ${PORT}`));
