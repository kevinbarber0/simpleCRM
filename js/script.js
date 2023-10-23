// DOM ELEMENTS
const searchBar = document.querySelector('.search-bar')
const searchButton = document.querySelector('.search-button')
const infoBtns = document.querySelector('.info-button')
const mainBody = document.querySelector('.main-body')
const customerBtn = document.querySelector('#customer')
const serviceBtn = document.querySelector('#service')
const ticketBtn = document.querySelector('#ticket')


let customerName
const base = 'http://localhost:3001/'


const customerBtnClick = async () => {
  infoBtns.replaceChildren()
  mainBody.replaceChildren()
  let customers = await axios.get(`${base}customers`)
  const customerButtons = []
  
  customers.data.forEach(customer => {

    for (let i = 0; i < 30; i++) {
    const customerName = customers.data[i].name;
    let customerInfoBtn = `<button class="more-info" id="${customerName}">${customerName}</button>`;
    infoBtns.innerHTML += customerInfoBtn;
    console.log(customerName);
    const customerBtn = document.querySelector(`#${customerName}`);
    customerButtons.push(customerBtn);
  }
})}

  customerBtn.addEventListener('click', customerBtnClick)

  ///

  const serviceBtnClick = async () => {
    infoBtns.replaceChildren()
    mainBody.replaceChildren()
    let services = await axios.get(`${base}services`)
    const serviceButtons = []
    
    services.data.forEach(service => {
  
      for (let i = 0; i < 30; i++) {
      const serviceName = services.data[i].name;
      let serviceInfoBtn = `<button class="more-info" id="${serviceName}">${serviceName}</button>`;
      infoBtns.innerHTML += serviceInfoBtn;
      console.log(serviceName);
      const serviceBtn = document.querySelector(`#${serviceName}`);
      serviceButtons.push(serviceBtn);
    }
  })}

  serviceBtn.addEventListener('click', serviceBtnClick)



  ////
  const ticketBtnClick = async () => {
    infoBtns.replaceChildren()
    mainBody.replaceChildren()
    let tickets = await axios.get(`${base}tickets`)
    const ticketButtons = []
    
    tickets.data.forEach(ticket => {
  
      for (let i = 0; i < 30; i++) {
      const ticketIssue = tickets.data[i].issue;
      let ticketInfoBtn = `<button class="more-info" id="${ticketIssue}">${ticketIssue}</button>`;
      infoBtns.innerHTML += ticketInfoBtn;
      console.log(ticketIssue);
      const ticketBtn = document.querySelector(`#${ticketIssue}`);
      ticketButtons.push(ticketBtn);
    }
  })}

  ticketBtn.addEventListener('click', ticketBtnClick)

///

document.getElementById('newCustomer').addEventListener('submit', function (event) {
  event.preventDefault();
  
  const formData = new FormData(this);
  const formDataObject = {};
  
  formData.forEach((value, key) => {
      formDataObject[key] = value;
  });
  
  const formDataJSON = JSON.stringify(formDataObject);

  fetch('http://localhost:3001/customers/', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: formDataJSON,
  })
  .then(response => response.json())
  .then(data => {
      console.log('Response from server:', data);
      // Handle the server's response as needed.
  })
  .catch(error => {
      console.error('Error posting JSON data:', error);
  })})