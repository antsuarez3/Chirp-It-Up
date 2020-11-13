import { Query } from './index';

const getChirps = async () => Query('select * from chirps');
const getChirp = async (id: string) => Query('select * from chirps where id = ?', [id]);
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