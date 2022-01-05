import { Module } from '@nestjs/common';
import { PatientService } from './patient.service';
import { PatientController } from './patient.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Patient } from './entities/patient.entity';
import { Organisation } from 'src/organisation/entities/organisation.entity';


@Module({
  imports: [TypeOrmModule.forFeature([Patient,Organisation])],
  controllers: [PatientController],
  providers: [PatientService],
})
export class PatientModule {}
