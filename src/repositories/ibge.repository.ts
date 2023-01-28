import appDataSource from "../data-source";
import { Ibge } from "../entities/Ibge.entity";

export const ibgeRepository = appDataSource.getRepository(Ibge);
