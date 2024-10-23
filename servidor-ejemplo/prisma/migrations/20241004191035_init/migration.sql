-- CreateTable
CREATE TABLE "Dueno" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nombre" TEXT NOT NULL,
    "apellido" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Mascota" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nombre" TEXT NOT NULL,
    "raza" TEXT NOT NULL,
    "duenoId" INTEGER NOT NULL,
    CONSTRAINT "Mascota_duenoId_fkey" FOREIGN KEY ("duenoId") REFERENCES "Dueno" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Mascota_duenoId_key" ON "Mascota"("duenoId");
