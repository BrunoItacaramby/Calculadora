function criaCalculadora() {
    return {
        display: document.querySelector('.display'),

        inicia() {
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
                    console.log('vsf')
                    this.realizaConta()
                }
            }.bind(this));
        },

        cliqueBotoes() {
            document.addEventListener('click', function (event) {
                const element = event.target

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
            this.display.value += valor
        },

        btnDel() {
            this.display.value = this.display.value.slice(0, -1)
        },

        btnClear() {
            this.display.value = ''
            this.display.focus()
        },

        realizaConta() {
            let conta = this.display.value
            this.display.value = eval(conta)
            this.display.setAttribute('class', 'resultado')
        }
    }
}

const calculadora = criaCalculadora()
calculadora.inicia()