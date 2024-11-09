import { SeriesService } from './series.service';
import { CreateSerieDto } from './dto/create-serie.dto';
import { UpdateSerieDto } from './dto/update-serie.dto';
export declare class SeriesController {
    private readonly seriesService;
    constructor(seriesService: SeriesService);
    create(createSerieDto: CreateSerieDto): Promise<import("./entities/series.entity").Serie>;
    findAll(): Promise<import("./entities/series.entity").Serie[]>;
    findOne(id: string): Promise<import("./entities/series.entity").Serie>;
    update(id: string, updateSerieDto: UpdateSerieDto): Promise<import("./entities/series.entity").Serie>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}
