const {
    findDosen,
    findDosenById,
    insertDosen,
    deleteDosen,
    editDosen,
} = require("./dosen.repositorys");

const getAllDosen = async() => {
    const dosen = await findDosen();
    return dosen;
};

const getDosenById = async(id) => {
    const dosen = await findDosenById(id);
    if (!dosen) {
        throw Error("Dosen tidak ditemukan");
    }
    return dosen;
};

const addDosen = async(newDosen) => {
    const dosen = await insertDosen(newDosen);
    return dosen;
};

const deleteDosenById = async(id) => {
    await getDosenById(id);
    await deleteDosen(id);
};

const editDosenById = async(id, dosenData) => {
    await getDosenById(id);
    const dosen = await editDosen(id, dosenData);
    return dosen;
};

module.exports = {
    getAllDosen,
    getDosenById,
    addDosen,
    deleteDosenById,
    editDosenById,
};