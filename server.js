const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI;

mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("✅ Connessione a MongoDB riuscita"))
  .catch(err => console.error("❌ Errore MongoDB:", err));

// Modello per le riparazioni
const Riparazione = mongoose.model('Riparazione', {
  cliente: String,
  telefono: String,
  modello: String,
  problema: String
});

// Rotta per ricevere i dati dal modulo
app.post('/nuova-riparazione', async (req, res) => {
  try {
    const nuova = new Riparazione(req.body);
    await nuova.save();
    res.send("✅ Riparazione salvata!");
  } catch (err) {
    console.error(err);
    res.status(500).send("❌ Errore nel salvataggio");
  }
});

app.get('/', (req, res) => res.send('Backend iLRiparaTutto attivo'));

app.listen(PORT, () => console.log(`Server attivo sulla porta ${PORT}`));
