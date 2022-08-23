const data = [
    {
        images: 'image/messi.png',
        player_name: 'Lionel Mess',
        goal: '200 goal',
        assist: '20 Assist'
    },
    {
        images: 'image/Pirlo.png',
        player_name: 'Andrea Pirlo',
        goal: '200 goal',
        assist: '20 Assist'
    },
    {
        images: 'image/Iniesta.png',
        player_name: 'Andres Iniesta',
        goal: '200 goal',
        assist: '20 Assist'
    },
    {
        images: 'image/Ineymar.png',
        player_name: 'Neymar',
        goal: '200 goal',
        assist: '20 Assist'
    },
    {
        images: 'image/silva.png',
        player_name: 'Silva',
        goal: '200 goal',
        assist: '20 Assist'
    },
    {
        images: 'image/Xavi.png',
        player_name: 'Xavi',
        goal: '200 goal',
        assist: '20 Assist'
    },
    {
        images: 'image/dimaria.png',
        player_name: 'Dimaria',
        goal: '200 goal',
        assist: '20 Assist'
    },
]
window.onload = () => {
    mainFn()
}
let balance = 0
let count = 1

/**
 * the function will call onload the window & then load every data
 */
const mainFn = () => {
    const btn = document.querySelectorAll('#btn')
    const input_player = document.querySelector('#input_player')
    const calculateBtn = document.querySelector('#calculateBtn')
    const list_items = document.querySelector('.list_items')
    const budget = document.querySelector('#budget')

    const calculateTotalBtn = document.querySelector('#calculateTotalBtn')
    const manager = document.querySelector('#manager_input')
    const coach_input = document.querySelector('#coach_input')
    const totalExpenText = document.querySelector('#totalExpen')

    btn.forEach(e => {
        e.addEventListener('click', handelar(list_items))
    })

    //calculate button handelar
    calculateBtn.addEventListener('click', calculateHandelar(input_player, budget))

    //total calculation handelar
    calculateTotalBtn.addEventListener('click', manager_calculate(manager, coach_input, totalExpenText))

}

/**
 * manager & coach calculation
 * @param {input} coachInp 
 * @param {input} namagerInp 
 * @param {input} totalExpenText 
 * @returns 
 */
const manager_calculate = (namagerInp, coachInp, totalExpenText) => {
    return () => {
        let manager = isValid(namagerInp)
        let coach = isValid(coachInp)
        let bothCost = manager + coach + balance
        totalExpenText.innerHTML = bothCost

    }
}

/**
 * calculate handelar button
 * @param {number} input_player 
 * @param {number} budget 
 * @returns 
 */
const calculateHandelar = (input_player, budget) => {
    return () => {
        const playerAmount = isValid(input_player)
        balance += playerAmount * (count - 1)

        budget.innerText = balance
    }
}




/**
 * button handelar
 * @param {object} list_items 
 * @returns 
 */
const handelar = (list_items) => {
    return (e) => {
        {
            const ul = document.querySelectorAll('ul')
            const element = e.target.parentElement.previousElementSibling.previousElementSibling.innerText

            if (ul.length < 5) {
                list_items.innerHTML += generateList(element)
                const disableBtn = e.target.disabled = true
                const targets = e.target
                targets.style.backgroundColor = 'gray';
            } else {
                alert('You can not add player more then 5')
                return
            }

        }
    }
}

/**
 * ordelist generator
 * @param {text} text 
 * @returns {ul}
 */
const generateList = (text) => {
    const ul = `<ul>
                    <li class="list_li text-xl md:text-xl capitalize p-1">(${ count++ })  <span class="text-gray-600">${ text }</span></li>
                </ul>
`
    return ul
}



//input validation
const isValid = (input) => {
    let amount = parseInt(input.value)

    if (input.value === '' || !Number(amount)) {
        alert('Please type amount')
        return false
    }
    return amount
}