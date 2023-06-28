const form = document.querySelector('form');
const catName = document.querySelector('#catName');
const catOwner = document.querySelector('#catOwnerName');
const catAge = document.querySelector('#catAge');
const catBreed = document.querySelector('#catBreed')
const sendDataBut = document.querySelector('#sendData');
const list = document.querySelector('ul');

let instance = {
    'cats': [{
        'name': '',
        'owner': '',
        'age': 0,
        'breed': ''
    },
    ]
}

sendDataBut.addEventListener('click', (event) => {
    event.preventDefault();
    // deliver(inputting.value);

    instance['cats']['name'] = catName.value;
    instance['cats']['owner'] = catOwner.value;
    instance['cats']['age'] = catAge.value;
    instance['cats']['breed'] = catBreed.value;
    console.log(instance)
    catName.value = '';
    catOwner.value = '';
    catAge.value = '';
    catBreed.value = '';
})

async function kitty() {
    let response = await fetch('http://localhost:5000/cats');
    let data = await response.json();
    console.log(data);
}

kitty()



async function deliver() {
    await fetch('http://httpbin.org/post', {
        method: "POST",
        headers: {
            "Content-Type": "application/json; charset=UTF-8"
        },
        body: JSON.stringify({
            'Mango': {
                'owner': 'Farzana',
                'age': 1,
                'breed': 'ginger'
            },
        })
    })

        .then((response) => response.json())
        .then((json) => console.log(json))
}

//deliver();


