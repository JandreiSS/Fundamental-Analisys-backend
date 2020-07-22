import Company from '../models/Company'

import CompaniesRepository from '../repositories/CompaniesRepository'

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
      throw Error('This ticket does not exist')
    }

    const company = this.companiesRepository.create({ ticket })

    return company
  }
}

export default CreateCompanyService
