import { Router } from 'express'

import CompaniesRepository from '../repositories/CompaniesRepository'
import CreateCompanyService from '../services/CreateCompanyService'

const companiesRouter = Router()
const companiesRepository = new CompaniesRepository();

companiesRouter.get('/', (request, response) => {
  const companies = companiesRepository.all()

  return response.json(companies)
})

companiesRouter.post('/', (request, response) => {
  try {
    const { ticket } = request.body

    const createCompanySearch = new CreateCompanyService(companiesRepository)

    const company = createCompanySearch.execute({ ticket })

    return response.json(company)
  } catch (err) {
    return response.status(400).json({ error: err.message })
  }
})

export default companiesRouter
