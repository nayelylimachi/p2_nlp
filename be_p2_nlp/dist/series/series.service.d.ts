import { CreateSerieDto } from './dto/create-serie.dto';
import { UpdateSerieDto } from './dto/update-serie.dto';
import { Repository } from 'typeorm';
import { Serie } from './entities/series.entity';
export declare class SeriesService {
    private serieRepository;
    constructor(serieRepository: Repository<Serie>);
    create(createSerieDto: CreateSerieDto): Promise<Serie>;
    findAll(): Promise<Serie[]>;
    findOne(id: number): Promise<Serie>;
    update(id: number, updateSerieDto: UpdateSerieDto): Promise<Serie>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
