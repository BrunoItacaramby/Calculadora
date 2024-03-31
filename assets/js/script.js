function criaCalculadora() {
    return {
        display: document.querySelector('.display'),

        inicia() {
            this.display.value = '0'
            this.cliqueBotoes()
            this.pressionaEnter()
        },

        pressionaEnter() {
            this.display.addEventListener('keypress', function (event) {

                if (this.display.classList.contains('resultado')) {
                    this.display.setAttribute('class', 'display')
                    this.btnClear()
                }

                if (event.keyCode === 13) {
                    this.realizaConta()
                }
            }.bind(this));
        },

        cliqueBotoes() {
            document.addEventListener('click', function (event) {
                const element = event.target

                if (event.detail === 1) {
                    event.preventDefault()
                }

                if (element.classList.contains('btn-num')) {
                    this.btnParaDisplay(element.innerText)
                }

                if (element.classList.contains('btn-del')) {
                    this.btnDel()
                }

                if (element.classList.contains('btn-clear')) {
                    this.btnClear()
                }

                if (element.classList.contains('btn-eq')) {
                    this.realizaConta()
                }

            }.bind(this));
        },

        btnParaDisplay(valor) {

            if (this.display.classList.contains('resultado')) {
                this.display.setAttribute('class', 'display')
                this.btnClear()
            }

            if (this.display.value === '0') {
                this.display.value = ''
            }

            this.display.value += valor
            this.display.focus()
        },

        btnDel() {
            this.display.value = this.display.value.slice(0, -1)
        },

        btnClear() {
            this.display.value = '0'
            this.display.focus()
        },

        realizaConta() {

            if (!this.display.value) {
                this.display.value = '0'
            }

            let conta = this.display.value
            this.display.value = eval(conta)
            this.display.setAttribute('class', 'resultado')
        }
    }
}

const calculadora = criaCalculadora()
calculadora.inicia()