interface CreateCompanySearchDTO {
  ticker: string
}

class Company {
  ticker: string

  constructor({ ticker }: CreateCompanySearchDTO) {
    this.ticker = ticker
  }
}

export default Company
