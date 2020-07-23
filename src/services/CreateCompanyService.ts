import Company from '../models/Company'

import CompaniesRepository from '../repositories/CompaniesRepository'

import AppError from '../errors/AppError'

interface Request {
  ticket: string
}


class CreateCompanyService {
  private companiesRepository: CompaniesRepository

  constructor(companiesRepository: CompaniesRepository) {
    this.companiesRepository = companiesRepository
  }

  public execute({ ticket }: Request): Company {
    if (!ticket) {
      throw new AppError('This ticket does not exist')
    }

    const company = this.companiesRepository.create({ ticket })

    return company
  }
}

export default CreateCompanyService
