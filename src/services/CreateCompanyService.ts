import Company from '../models/Company'

import CompaniesRepository from '../repositories/CompaniesRepository'

import AppError from '../errors/AppError'

interface Request {
  ticker: string
}


class CreateCompanyService {
  private companiesRepository: CompaniesRepository

  constructor(companiesRepository: CompaniesRepository) {
    this.companiesRepository = companiesRepository
  }

  public execute({ ticker }: Request): Company {
    if (!ticker) {
      throw new AppError('This ticket does not exist')
    }

    const company = this.companiesRepository.create({ ticker })

    return company
  }
}

export default CreateCompanyService
