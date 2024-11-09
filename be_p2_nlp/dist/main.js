"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.setGlobalPrefix('api');
    app.enableVersioning({ type: common_1.VersioningType.URI, defaultVersion: '1' });
    app.useGlobalPipes(new common_1.ValidationPipe({ whitelist: true }));
    app.enableCors();
    const config = new swagger_1.DocumentBuilder()
        .setTitle('API Rest Parcial 2 sis257')
        .setDescription('Backend del Segundo Parcial sis257')
        .setVersion('1.0')
        .addTag('series')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('apidoc', app, document);
    await app.listen(process.env.PORT);
    console.log(`API corriendo en ${await app.getUrl()}/apidoc`);
}
bootstrap();
//# sourceMappingURL=main.js.map