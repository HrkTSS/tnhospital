import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OrganisationModule } from './organisation/organisation.module';
import { PatientModule } from './patient/patient.module';
import { HospitalModule } from './hospital/hospital.module';
import { DoctorModule } from './doctor/doctor.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [TypeOrmModule.forRoot(), PatientModule, OrganisationModule, HospitalModule, DoctorModule, UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
