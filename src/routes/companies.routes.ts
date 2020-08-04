import { Router } from 'express'

import CompaniesRepository from '../repositories/CompaniesRepository'
import CreateCompanyService from '../services/CreateCompanyService'

import ensureAuthenticated from '../middlewares/ensureAuthenticated'

const companiesRouter = Router()

companiesRouter.use(ensureAuthenticated)

const companiesRepository = new CompaniesRepository();

companiesRouter.get('/', (request, response) => {
  const companies = companiesRepository.all()

  return response.json(companies)
})

companiesRouter.post('/', (request, response) => {
  const { ticker } = request.body

  const createCompanySearch = new CreateCompanyService(companiesRepository)

  const company = createCompanySearch.execute({ ticker })

  return response.json(company)
})

export default companiesRouter
