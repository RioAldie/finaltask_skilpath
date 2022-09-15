//element html
const user = document.getElementById('user');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const city = document.getElementById('location');
const button = document.getElementById('btn-join');

const modalContent = (data) => {
  const { user, email, phone, terms, city } = data;
  const isiModal = document.getElementById('modalContent');
  isiModal.innerHTML = `<p class="title">Thanks You For Join </p>
                      <div class="data">
                          <p>user: ${user}</p>
                          <p>Email: ${email}</p>
                          <p>Phone: ${phone}</p>
                          <p>${city}</p>
                      </div>
                      <button class="btn-confirm" onclick="modalOpen()">Oke</button>`;
};

const modalOpen = () => {
  user.value = ' ';
  email.value = ' ';
  phone.value = ' ';
  city.value = ' ';
  return document.getElementById('modal').classList.toggle('active');
};
const handleJoin = () => {
  const state = {
    user: user.value,
    email: email.value,
    phone: phone.value,
    city: city.value,
    terms: document.querySelector('#terms').checked,
  };

  if (
    state.user != '' &&
    state.email != '' &&
    state.phone != '' &&
    state.location != '' &&
    state.terms != false
  ) {
    modalContent(state);
    modalOpen();
  }
};
