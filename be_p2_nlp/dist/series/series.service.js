"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SeriesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const series_entity_1 = require("./entities/series.entity");
let SeriesService = class SeriesService {
    constructor(serieRepository) {
        this.serieRepository = serieRepository;
    }
    async create(createSerieDto) {
        const existeSerie = await this.serieRepository.findOneBy({
            titulo: createSerieDto.titulo,
            director: createSerieDto.director,
            temporadas: createSerieDto.temporadas,
            fechaEstreno: createSerieDto.fechaEstreno,
        });
        if (existeSerie) {
            throw new common_1.ConflictException('La serie ya existe');
        }
        return this.serieRepository.save({
            titulo: createSerieDto.titulo.trim(),
            sinopsis: createSerieDto.sinopsis.trim(),
            director: createSerieDto.director.trim(),
            temporadas: createSerieDto.temporadas,
            fechaEstreno: createSerieDto.fechaEstreno,
        });
    }
    async findAll() {
        return this.serieRepository.find();
    }
    async findOne(id) {
        const serie = await this.serieRepository.findOneBy({ id });
        if (!serie) {
            throw new common_1.NotFoundException(`No existe la serie ${id}`);
        }
        return serie;
    }
    async update(id, updateSerieDto) {
        const serie = await this.serieRepository.findOneBy({ id });
        if (!serie) {
            throw new common_1.NotFoundException(`No existe la serie ${id}`);
        }
        const serieUpdate = Object.assign(serie, updateSerieDto);
        return this.serieRepository.save(serieUpdate);
    }
    async remove(id) {
        const serie = await this.serieRepository.findOneBy({ id });
        if (!serie) {
            throw new common_1.NotFoundException(`No existe la serie ${id}`);
        }
        return this.serieRepository.delete(id);
    }
};
exports.SeriesService = SeriesService;
exports.SeriesService = SeriesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(series_entity_1.Serie)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], SeriesService);
//# sourceMappingURL=series.service.js.map