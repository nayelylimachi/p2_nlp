import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateSerieDto } from './dto/create-serie.dto';
import { UpdateSerieDto } from './dto/update-serie.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Serie } from './entities/series.entity';

@Injectable()
export class SeriesService {
  constructor(
    @InjectRepository(Serie)
    private serieRepository: Repository<Serie>,
  ) {}

  async create(createSerieDto: CreateSerieDto): Promise<Serie> {
    const existeSerie = await this.serieRepository.findOneBy({
      titulo: createSerieDto.titulo,
      director: createSerieDto.director,
      temporadas: createSerieDto.temporadas,
      fechaEstreno: createSerieDto.fechaEstreno,
    });

    if (existeSerie) {
      throw new ConflictException('La serie ya existe');
    }

    return this.serieRepository.save({
      titulo: createSerieDto.titulo.trim(),
      sinopsis: createSerieDto.sinopsis.trim(),
      director: createSerieDto.director.trim(),
      temporadas: createSerieDto.temporadas,
      fechaEstreno: createSerieDto.fechaEstreno,
    });
  }

  async findAll(): Promise<Serie[]> {
    return this.serieRepository.find();
  }

  async findOne(id: number): Promise<Serie> {
    const serie = await this.serieRepository.findOneBy({ id });
    if (!serie) {
      throw new NotFoundException(`No existe la serie ${id}`);
    }
    return serie;
  }

  async update(id: number, updateSerieDto: UpdateSerieDto): Promise<Serie> {
    const serie = await this.serieRepository.findOneBy({ id });
    if (!serie) {
      throw new NotFoundException(`No existe la serie ${id}`);
    }
    const serieUpdate = Object.assign(serie, updateSerieDto);
    return this.serieRepository.save(serieUpdate);
  }

  async remove(id: number) {
    const serie = await this.serieRepository.findOneBy({ id });
    if (!serie) {
      throw new NotFoundException(`No existe la serie ${id}`);
    }
    return this.serieRepository.delete(id);
  }
}
