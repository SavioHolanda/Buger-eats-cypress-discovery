import SignupPage from '../pages/SignupPage'
import SignupFactury from '../factories/SignupFactory'

describe('Cadastro', () => {

    it('Usuário deve ser tornar um entregador', function () {
        var signup = new SignupPage()

        var deliver = SignupFactury.deliver()
        signup.go()
        signup.fillForm(deliver)
        signup.submit()
        const expectedMessage = 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.'
        signup.modalContentShouldBe
    })

    it('CPF invalido', function () {
        var signup = new SignupPage()

        var deliver = SignupFactury.deliver()
        deliver.cpf = '000000141aa'
        signup.go()
        signup.fillForm(deliver)
        signup.submit()
        signup.alertMessageShouldBe('Oops! CPF inválido')
    })

    it('Email invalido', function () {
        var signupPage = new SignupPage()

        var deliver = SignupFactury.deliver()
        deliver.email = 'savio.com.br'

        signupPage.go()
        signupPage.fillForm(deliver)
        signupPage.submit()
        signupPage.alertMessageShouldBe('Oops! Email com formato inválido.')
    })

    context('Required fields', function () {

        const messages = [
            { field: 'name', output: 'É necessário informar o nome' },
            { field: 'cpf', output: 'É necessário informar o CPF' },
            { field: 'email', output: 'É necessário informar o email' },
            { field: 'postalcode', output: 'É necessário informar o CEP' },
            { field: 'number', output: 'É necessário informar o número do endereço' },
            { field: 'delivery_method', output: 'Selecione o método de entrega' },
            { field: 'cnh', output: 'Adicione uma foto da sua CNH' }
        ]

        before(function(){
            var signupPage = new SignupPage()
            signupPage.go()
            signupPage.submit()
        })

        messages.forEach(function(msg){
            var signupPage = new SignupPage()
            it(`${msg.field} is required`, function(){
                signupPage.alertMessageShouldBe(msg.output)
            })
        })
    })
})