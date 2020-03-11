/// <reference types="cypress" />

import { jobsNew } from '../../src/common/script/url'
import { submitNewJob } from '../../src/common/script/endpoints'

// Test related to jobs
context('Test: Jobs', () => {

    beforeEach(() => {
        cy.visit('http://localhost:8080')
    })

    // Test related to submitting hello world job
    it('Submitting new hello world job', () => {
        cy.server()
        cy.route('POST', submitNewJob).as('submitJobRequest')
        cy.request
        cy.visit('http://localhost:8080'+jobsNew) 
        cy.get('.container-wrapper .input').type('Test Job 1')
        cy.get('.container-wrapper .button').click()
        //Wait for 15sec

        cy.wait(['@submitJobRequest'], { responseTimeout: 15000}).then(res =>{
            expect(res.status).to.eq(200)
            expect(res.response.body.code).to.eq('S01')  //Server send code S01 meaning job sumitting request processed successfully.
        })
    })
})

  