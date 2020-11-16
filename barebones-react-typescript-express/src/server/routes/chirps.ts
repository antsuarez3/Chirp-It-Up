import * as express from 'express';
import db from '../db';

const router = express.Router();

router.get('/api/hello', (req, res, next) => {
    res.json('World');
});

router.get('/', async (req, res) => {
    try {
        res.json(await db.Chirps.getChirps());
    } catch(e) {
        console.log(e);
        res.sendStatus(500);
    }
});

router.get('/:id', async (req, res) => {
    try {
        let id = req.params.id;
        res.json((await db.Chirps.getChirp(id)));
    } catch(e) {
        console.log(e);
        res.sendStatus(500);
    }
});

router.put("/:id", (req: express.Request, res: express.Response) => {
    let id: string = req.params.id;
    let chirpObj: chirp = {
        username: req.body.username,
        message: req.body.message
    };
    db.Chirps.UpdateChirp(id, chirpObj);

    res.sendStatus(200);
});

interface chirp {
    username: string,   
    message: string
}

export default router;