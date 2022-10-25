fetch('https://getpost.itgid.info/index2.php')
.then(data => data.text())
.then (data => {
    console.log(data);
})

fetch('https://getpost.itgid.info/index2.php', {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: 'auth=ewlewkekwaekawke' // body data type must match "Content-Type" header
})
.then(response => response.text())
.then(response => console.log(response));