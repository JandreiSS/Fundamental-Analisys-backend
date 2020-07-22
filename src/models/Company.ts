interface CreateCompanySearchDTO {
  ticket: string
}

class Company {
  ticket: string

  constructor({ ticket }: CreateCompanySearchDTO) {
    this.ticket = ticket
  }
}

export default Company
