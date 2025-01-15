import { MigrationInterface, QueryRunner } from "typeorm";

export class Default1736969778549 implements MigrationInterface {
    name = 'Default1736969778549'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "links" ("id" SERIAL NOT NULL, "originalUrl" text NOT NULL, "shortUrl" text NOT NULL, CONSTRAINT "PK_ecf17f4a741d3c5ba0b4c5ab4b6" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "links"`);
    }

}
