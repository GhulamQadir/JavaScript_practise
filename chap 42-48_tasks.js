// 2. Display some Mobile images in browser. On click on an image Show the message in alert to user.
function phoneImages() {
    alert("Thanks for purchasing a phone from us")
}


// 3. Display 10 student records in table and each row should contain a delete button.If you click on a button to delete a record, entire row should be deleted. 

var array = [

    { "index": "0", "name": "John", "class": "10" },
    { "index": "1", "name": "Doe", "class": "9" },
    { "index": "2", "name": "Mark", "class": "10" },
    { "index": "3", "name": "James", "class": "8" },
]
for (var i = 0; i < array.length; i++) {
    document.write(`<table>
    <tr>
    <td>${array[i].index}</td>
    <td>${array[i].name}</td>
    <td>${array[i].class}</td>
    <td><button onClick="${alert('dnaknd')}">Delete</button></td>
    </tr >

    </table > `)
}