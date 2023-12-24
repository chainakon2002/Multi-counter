// const root = document.querySelector('#root')
// function Counter(){
//     let countNum = 0
// function makeElement(tag, attr_n , attr_v,  content){
//     let output = document.createElement(tag)
//     output.setAttribute(attr_n, attr_v)
//     output.textContent = content
//     return output
// }


// function updateCounter(n){
//     if(countNum + n <0){
//         return
//     }
//     countNum += n
//     number.textContent = countNum
// }
// const delCounter = () => {
//     counter.remove()

//     console.log(e.target.closest('.conter'))
//         e.target.closest('.counter').remove() 
// }


// const counter = makeElement('div', 'class', 'counter', '')
// const btnInc = makeElement('button', 'class', 'btn-inc', '+')
// const number = makeElement('h3', 'class', 'number', '0')
// const btnDec = makeElement('button', 'class', 'btn-dec', '-')
// const btnClr = makeElement('button', 'class', 'btn-clr', '0')
// const btnDel = makeElement('button', 'class', 'btn-del', 'X')

// btnInc.addEventListener('click', () => updateCounter(1) )
// btnDec.addEventListener('click', () => updateCounter(-1) )
// btnClr.addEventListener('click', () => updateCounter(-countNum) )
// btnDel.addEventListener('click' , delCounter)


// counter.append(btnInc)
// counter.append(number)
// counter.append(btnDec)
// counter.append(btnClr)
// counter.append(btnDel)

// return counter
// }

// root.append(Counter())


// const add1 = document.querySelector('.add');
// add1.addEventListener('click', () => {
//     root.append(Counter())
// })

const root = document.querySelector('#root');
let totalSum = 0;

function Counter() {
    let countNum = 0;

    function makeElement(tag, attr_n, attr_v, content) {
        let output = document.createElement(tag);
        output.setAttribute(attr_n, attr_v);
        output.textContent = content;
        return output;
    }

    function updateCounter(n) {
        if (countNum + n < 0) {
            return;
        }
        totalSum += n; 
        countNum += n;
        number.textContent = countNum;
        totalCounter.textContent = `Sum : ${totalSum}`;
    }
    const delCounter = () => {
        totalSum -= countNum;
        counter.remove();
        totalCounter.textContent = `Sum : ${totalSum}`;
    };

    const counter = makeElement('div', 'class', 'counter', '');
    const btnInc = makeElement('button', 'class', 'btn-inc', '+');
    const number = makeElement('h3', 'class', 'number', '0');
    const btnDec = makeElement('button', 'class', 'btn-dec', '-');
    const btnClr = makeElement('button', 'class', 'btn-clr', '0');
    const btnDel = makeElement('button', 'class', 'btn-del', 'X');

    btnInc.addEventListener('click', () => updateCounter(1));
    btnDec.addEventListener('click', () => updateCounter(-1));
    btnClr.addEventListener('click', () => updateCounter(-countNum));
    btnDel.addEventListener('click', delCounter);

    counter.append(btnInc);
    counter.append(number);
    counter.append(btnDec);
    counter.append(btnClr);
    counter.append(btnDel);

    return counter;
}

const totalCounter = document.querySelector('#totalCounter'); // Reference to the h1 element
root.append(Counter());

const add1 = document.querySelector('.add');
add1.addEventListener('click', () => {
    root.append(Counter());
});
