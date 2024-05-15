/*
  Warnings:

  - You are about to drop the `students` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "students";

-- CreateTable
CREATE TABLE "dosen" (
    "id" SERIAL NOT NULL,
    "nik" INTEGER NOT NULL,
    "nama" VARCHAR(255) NOT NULL,

    CONSTRAINT "dosen_pkey" PRIMARY KEY ("id")
);
