/*
  Warnings:

  - You are about to drop the column `cnpj` on the `Doctors` table. All the data in the column will be lost.
  - Added the required column `name` to the `user` table without a default value. This is not possible if the table is not empty.
  - Added the required column `crm` to the `Doctors` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_user" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "name" TEXT NOT NULL
);
INSERT INTO "new_user" ("email", "id", "password") SELECT "email", "id", "password" FROM "user";
DROP TABLE "user";
ALTER TABLE "new_user" RENAME TO "user";
CREATE UNIQUE INDEX "user_email_key" ON "user"("email");
CREATE TABLE "new_Doctors" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "crm" TEXT NOT NULL,
    "especialidades" TEXT NOT NULL
);
INSERT INTO "new_Doctors" ("email", "especialidades", "id", "nome", "password") SELECT "email", "especialidades", "id", "nome", "password" FROM "Doctors";
DROP TABLE "Doctors";
ALTER TABLE "new_Doctors" RENAME TO "Doctors";
CREATE UNIQUE INDEX "Doctors_email_key" ON "Doctors"("email");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
