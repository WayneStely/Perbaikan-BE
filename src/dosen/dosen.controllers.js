const express = require("express");
const {
    getAllDosen,
    getDosenById,
    addDosen,
    deleteDosenById,
    editDosenById,
} = require("./dosen.services");

const router = express.Router();


router.get("/", async(req, res) => {
    try {
        const result = await getAllDosen();
        res.status(200).json({
            status: "success",
            data: result,
        });
    } catch (err) {
        console.error(err);
        res.status(500).send("Internal Server Error");
    }
});

router.get("/:id", async(req, res) => {
    try {
        const idDosen = parseInt(req.params.id);
        const dosen = await getDosenById(idDosen);
        res.send(dosen);
    } catch (err) {
        res.status(400).send(err.message);
    }
});

router.post("/", async(req, res) => {
    try {
        const newDosen = req.body;
        const dosen = await addDosen(newDosen);
        res.send({
            data: dosen,
            message: "Dosen berhasil ditambahkan",
        });
    } catch (error) {
        res.status(400).send(error.message);
    }
});


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