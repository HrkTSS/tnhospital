/**
 * @author Harry
 * @email [example@mail.com]
 * @create date 2022-01-02 12:41:33
 * @modify date 2022-01-02 12:41:33
 * @desc [description]
 */

import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Connection, Repository } from 'typeorm';
import { CreatePatientDto } from './dto/create-patient.dto';
import { UpdatePatientDto } from './dto/update-patient.dto';
import { Patient } from './entities/patient.entity';

@Injectable()
export class PatientService {
  constructor(
    @InjectRepository(Patient) private patientRepos: Repository<Patient>,
  ) {}

  async create(createPatientDto: CreatePatientDto) {
    const existingUser = await this.patientRepos.findOne({
      where: {
        phone: createPatientDto.phone,
        name: createPatientDto.name,
        gender: createPatientDto.gender,
        dob: createPatientDto.dob,
      },
    });
    if (existingUser) {
      throw new BadRequestException('User already exists');
    }

    const newUser = this.patientRepos.create(createPatientDto);
    return this.patientRepos.save(newUser);
  }

  findAll() {
    return `This action returns all patient`;
  }

  findOne(id: number) {
    return `This action returns a #${id} patient`;
  }

  // findByPhone(phoneNo: string) {
  //   return this.patientRepos.find({
  //     relations: ['organisation'],
  //     where: { phone: phoneNo },
  //   });
  // }

  async findByPhone(phoneNo: string) {
    return await this.patientRepos
      .createQueryBuilder('patients')
      .leftJoinAndSelect('patients.organisation', 'organisation.id')
      .getMany();
  }
  update(id: number, updatePatientDto: UpdatePatientDto) {
    return `This action updates a #${id} patient`;
  }

  remove(id: number) {
    return `This action removes a #${id} patient`;
  }
}
