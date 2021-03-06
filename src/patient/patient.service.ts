/**
 * @author Harry
 * @email [example@mail.com]
 * @create date 2022-01-02 12:41:33
 * @modify date 2022-01-02 12:41:33
 * @desc [description]
 */

import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Organisation } from 'src/organisation/entities/organisation.entity';
import { Connection, Repository } from 'typeorm';
import { CreatePatientDto } from './dto/create-patient.dto';
import { UpdatePatientDto } from './dto/update-patient.dto';
import { Patient } from './entities/patient.entity';

@Injectable()
export class PatientService {
  constructor(
    @InjectRepository(Patient) private patientRepos: Repository<Patient>,
    @InjectRepository(Organisation) private orgRepos:Repository<Organisation>,
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
    const org = new Organisation()
    org.name = "hrk"
    await this.orgRepos.save(org)
    newUser.organisations = org

    return this.patientRepos.save(newUser);
  }

  findAll() {
    return `This action returns all patient`;
  }

  findOne(id: number) {
    return `This action returns a #${id} patient`;
  }

  findByPhone(phoneNo: string) {
    return this.patientRepos.find({
      relations: ['organisations'],
      where: { phone: phoneNo },
    });
  }

  update(id: number, updatePatientDto: UpdatePatientDto) {
    return `This action updates a #${id} patient`;
  }

  remove(id: number) {
    return `This action removes a #${id} patient`;
  }
}
