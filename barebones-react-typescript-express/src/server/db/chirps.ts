import { Query } from './index';

const getChirps = async () => Query(`
SELECT
chirps.*,
users.names
 from chirps
 JOIN users ON users.id = chirps.userid
 `);

const getChirp = async (id: string) => Query(`
SELECT
chirps.*,
users.name
FROM chirps 
JOIN users ON users.id = chirps.userid
WHERE chirps.id = ?

` [id]);
const updateChirps = async () => Query('select * from chirps');
const createChirp = async () => Query('select * from chirps');
const deleteChirp = async () => Query('select * from chirps');

export default {
    getChirps,
    getChirp,
    updateChirps,
    createChirp,
    deleteChirp
}        