import Company from '../models/Company'

interface CreateCompanySearchDTO {
  ticket: string
}

class CompaniesRepository {
  private companies: Company[]

  constructor() {
    this.companies = []
  }

  public all(): Company[] {
    return this.companies
  }

  public create({ ticket }: CreateCompanySearchDTO): Company {
    const company = new Company({ ticket })

    this.companies.push(company)

    return company
  }
}

export default CompaniesRepository
