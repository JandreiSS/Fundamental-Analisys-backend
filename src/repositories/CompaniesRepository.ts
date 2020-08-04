import Company from '../models/Company'

interface CreateCompanySearchDTO {
  ticker: string
}

class CompaniesRepository {
  private companies: Company[]

  constructor() {
    this.companies = []
  }

  public all(): Company[] {
    return this.companies
  }

  public create({ ticker }: CreateCompanySearchDTO): Company {
    const company = new Company({ ticker })

    this.companies.push(company)

    return company
  }
}

export default CompaniesRepository
