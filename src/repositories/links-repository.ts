import { AppDataSource } from "../data-source";
import { Link } from "../entities/Links";

export const linksRepository = AppDataSource.getRepository(Link)