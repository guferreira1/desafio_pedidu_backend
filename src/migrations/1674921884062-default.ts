import { MigrationInterface, QueryRunner } from "typeorm";

export class default1674921884062 implements MigrationInterface {
    name = 'default1674921884062'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "ibge" ("id" SERIAL NOT NULL, "ibge_id" integer NOT NULL, "ibge_name" character varying NOT NULL, CONSTRAINT "PK_172e0d9cd261f08937b68342321" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "ibge"`);
    }

}
