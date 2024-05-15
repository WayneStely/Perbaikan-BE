const express = require("express");
const {
    getAllDosen,
    getDosenById,
    addDosen,
    deleteDosenById,
    editDosenById,
} = require("./dosen.services");

const router = express.Router();



router.put("/:id", async(req, res) => {
    try {
        const idDosen = req.params.id;
        const dosenData = req.body;

        if (!(dosenData.nik && dosenData.nama)) {
            return res.status(400).send("Some fields are missing");
        }
        const dosen = await editDosenById(parseInt(idDosen), dosenData);
        res.send({
            data: dosen,
            message: "Dosen berhasil di edit",
        });
    } catch (error) {
        res.status(400).send(error.message);
    }
});

router.patch("/:id", async(req, res) => {
    try {
        const idDosen = req.params.id;
        const dosenData = req.body;
        const dosen = await editDosenById(parseInt(idDosen), dosenData);
        res.send({
            data: dosen,
            message: "Dosen berhasil di edit",
        });
    } catch (error) {
        res.status(400).send(error.message);
    }
});

router.delete("/:id", async(req, res) => {
    try {
        const idDosen = req.params.id;
        await deleteDosenById(parseInt(idDosen));
        res.send("Dosen berhasil dihapus");
    } catch (error) {
        res.status(400).send(error.message);
    }
});

module.exports = router;