import express from 'express';
import axios from 'axios';

const BITBOXSDK = require("bitbox-sdk/lib/bitbox-sdk").default;
const BITBOX = new BITBOXSDK({ restURL: "https://trest.bitcoin.com/v2/" });

import wrap from '../../middlewares/wrap';

const router = express.Router();
const XPubKey = "tpubDCoP9xnjhwkwC8pT7DVSPFDgbYb2uq2UAdY2DQmk2YtBpiEY8XGtT26P6NgYyc38fiuTF9x3MAtKmuUR2HPd7qKQmAYD5NTpfVy5SzZntWN";

router.get('/', wrap(async (req, res) => {
    try {
      let address = BITBOX.Address.fromXPub(XPubKey, "0/0");
      res.status(200).json({
          address: address
      });
    } catch (err) {
        res.status(404).json({
            error: err
        });
    }
}));

export default router;
