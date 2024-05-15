const {
    findDosen,
    findDosenById,
    insertDosen,
    deleteDosen,
    editDosen,
} = require("./dosen.repositorys");



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