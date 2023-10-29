function sendMail (){
    var params ={
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value
    }

    const serviceID ="service_99d1p7i"
const templateID= "template_hczdqjb"

emailjs.send(serviceID, templateID, params).
then(
    res => {
        document.getElementById('name').value= '';
        document.getElementById('email').value= '';
        document.getElementById('message').value= '';
        console.log(res);
        alert('Your message has been sent successfully')

    })
    .catch((err) => console.log(err));
}



let firstModal = document.getElementById('simpleModal1');
let secondModal = document.getElementById('simpleModal2');
let thirdModal = document.getElementById('simpleModal3');

let firstOpen = document.getElementById('open1');
let secondOpen = document.getElementById('open2');
let thirdOpen = document.getElementById('open3');


let closeBtn1= document.getElementById('close1');
let closeBtn2= document.getElementById('close2');
let closeBtn3= document.getElementById('close3');

firstOpen.addEventListener('click', open1);

function open1(e) {
    e.preventDefault();
    // console.log('open');
    // firstModal.classList.toggle('display-block');
    firstModal.style.display = 'block';
}


secondOpen.addEventListener('click', open2);

function open2(e) {
    e.preventDefault();
    // console.log('open');
    // firstModal.classList.toggle('display-block');
    secondModal.style.display = 'block';
}



thirdOpen.addEventListener('click', open3);

function open3(e) {
    e.preventDefault();
    // console.log('open');
    // firstModal.classList.toggle('display-block');
    thirdModal.style.display = 'block';
}

closeBtn1.addEventListener('click', closeModal1);

function closeModal1() {
    firstModal.style.display = 'none';
}

closeBtn2.addEventListener('click', closeModal2);
function closeModal2() {
    secondModal.style.display = 'none';
}

closeBtn3.addEventListener('click', closeModal3);
function closeModal3() {
    thirdModal.style.display = 'none';
}

const search = () => {
    const searchbox = document.getElementById('search-item').value.toUpperCase();
    const storeitems =document.getElementById('school-list')
    const schoollist = document.querySelectorAll('.school')
    const productname= storeitems.document.querySelectorAll('.p')

    for (var i=0; i < productname.length; i++) {
        let match =schoollist[i].getElementsByClassName('.p')[0];
        if (match){
           let textvalue= match.textContent || match.innerHTML

           if( textvalue.toUpperCase().indexOf(searchbox) > -1){
            schoollist[i].style.display = "";
        }else{
            schoollist[i].style.display = "none";
        }
}
    }

}
    

let listCountry = [

    'University of Padua', 
    'University of Milan', 
    'University of Pisad',  
    'University of Naples Federico II', 
    'Vita-Salute San Raffaele University ' , 
    'University of Trento', 
    'University of Florence', 
    'University of Rome Tor Vergata',
    'Università Cattolica del Sacro Cuore', 
    'University of Pavia',
    'Polytechnic University of Bari',  
    'University of Milano-Bicocca', 
    'University of Genoa', 
    'Free University of Bozen-Bolzano' , 
    'University of Trieste', 
    'University of Siena', 
    'Marche Polytechnic University',  
    ]
let url ='https://restcountries.com/v3.1/all'

//  



function onInputChange(){
   
    const value = inputEl.value.toLowerCase();
    let filterNames = [];
    countryNames.forEach((countryName) => {
    

        if (countryName.substr(0, value.length).toLowerCase()=== value)
        filterNames.push(countryName);

        console.log(filterNames);

    })
    
}
function onInputChange() {
    const value = inputEl.value.toLowerCase();
    let filterNames = [];
    countryNames.forEach((countryName) => {
        // Check if countryName is a string before using substr
        if (typeof countryName === 'string' && countryName.substr(0, value.length).toLowerCase() === value) {
            filterNames.push(countryName);
        }
    });

    // Output the filtered country names
    console.log(filterNames);
}



