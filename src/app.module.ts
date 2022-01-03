import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OrganisationModule } from './organisation/organisation.module';
import { PatientModule } from './patient/patient.module';

@Module({
  imports: [TypeOrmModule.forRoot(), PatientModule, OrganisationModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
