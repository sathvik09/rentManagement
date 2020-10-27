const submit = document.querySelector('.submit');

submit.addEventListener('click',(e)=>{
    e.preventDefault();
    console.log(document.querySelector('.name'));
    const data = {
        id:Math.ceil(Math.random()*Math.pow(10,6)),
        name:document.querySelector('.name').value,
        floor:document.querySelector('.floor').value,
        bank:document.querySelector('.bank').value,
        deposit:document.querySelector('.deposit').value,
        date:[document.querySelector('.from').value,document.querySelector('.to').value],
        krp:document.querySelector('.krp').value,
        vis:document.querySelector('.vis').value,
        cleaning:document.querySelector('.clean').value,
        payment:{"0":[false],"1":[false],"2":[false],"3":[false],"4":[false],"5":[false],"6":[false],"7":[false],"8":[false],"9":[false],"10":[false],"11":[false]}
    }
    console.log(data);
    database.ref('User/'+data.id).set(data)
})