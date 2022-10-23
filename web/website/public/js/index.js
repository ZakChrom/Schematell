const form = document.getElementById('reg-form');
//CHANGE DURING PRODUCTION
const api = "https://schematell-api.calion.repl.co"

form.addEventListener('submit', registerUser);

async function registerUser(event){
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const result = await fetch(api + '/account/register', {
        method: 'POST',
        headers: {
            'Content-Type':'application/json',
            'Access-Control-Allow-Origin':'*',
            'Access-Control-Allow-Methods':'POST,PATCH,OPTIONS',
            'Origin':'http://'
        },
        body: JSON.stringify({
            username,
            password
        })
    }).then((res) => res.json())

    console.log(result)
}

function test_data(){
    const r_data = document.getElementById("editor").value;
    const data_element = document.getElementById("data");
    try {
        const data = JSON.parse(r_data);
        let min = JSON.stringify(JSON.parse(r_data));
        data_element.style.color = "#00ff00";
        data_element.innerHTML = `Success!
Minimized: ${min}
Name: ${data.name}
Save Code: ${data.save_code}
CanCollide: ${data.collision.can_collide}
Display Parameters: ${JSON.stringify(data.display)}
Collision Parameters: ${JSON.stringify(data.collision.parameters)}
Update Actions: ${data.update}
`;
    }catch (e){
        data_element.style.color = "#ff0000";
        data_element.innerHTML = "Error: " + e;
    }
}

/*
{
    'name': '',
    'save_code': '',
    'collision': {
        'can_collide': '',
        'parameters': ''
    },
    'display': '',
    'update': ''
}
*/