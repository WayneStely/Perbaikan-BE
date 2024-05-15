const prisma = require("../database");





const deleteDosen = async(id) => {
    await prisma.dosen.delete({
        where: {
            id,
        },
    });
};

const editDosen = async(id, dosenData) => {
    const dosen = await prisma.dosen.update({
        where: {
            id: parseInt(id),
        },
        data: {
            nik: dosenData.nik,
            nama: dosenData.nama,
        },
    });
    return dosen;
};

module.exports = {
    findDosen,
    findDosenById,
    insertDosen,
    deleteDosen,
    editDosen,
};