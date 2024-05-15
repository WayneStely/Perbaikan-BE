const prisma = require("../database");

const findDosen = async() => {
    const dosen = await prisma.dosen.findMany();
    return dosen;
};

const findDosenById = async(id) => {
    const dosen = await prisma.dosen.findUnique({
        where: {
            id,
        },
    });
    return dosen;
};
const insertDosen = async(dosenData) => {
    const dosen = await prisma.dosen.create({
        data: {
            nik: dosenData.nik,
            nama: dosenData.nama,
        },
    });
    return dosen;
};



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