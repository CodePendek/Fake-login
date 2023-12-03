const login = document.querySelector("#toLogin")
const signup = document.querySelector("#toSignUp")
const hide = document.querySelector(".hide")

const formRegis = document.querySelector("form:nth-child(2)")
const formLogin = document.querySelector("form:first-child")

// Default account
localStorage.setItem("user", "admin")
localStorage.setItem("pass", "admin123")

login.addEventListener("click", e => {
  formRegis.classList.contains('hide') ? formRegis.classList.remove("hide") : formRegis.classList.add("hide")
  formLogin.classList.remove("hide")
})

signup.addEventListener("click", e => {
  formLogin.classList.contains('hide') ? formLogin.classList.remove("hide") : formLogin.classList.add("hide")
  formRegis.classList.remove("hide")
})

formLogin.addEventListener("submit", e => {
  e.preventDefault()
  
  const pop = formLogin.querySelector(".hidden")
  let popValue = []
  
  const username = formLogin.querySelector("input[type=text]")
  const password = formLogin.querySelector("input[type=password]")
  
  const user = localStorage.getItem("user")
  const pass = localStorage.getItem("pass")
  
  if( username.value === "" || password.value === "" ){
    popValue.push("Inputan tidak boleh kosong!")
    pop.innerText = popValue
    pop.classList.add("show")
  }else if (username.value === user && password.value === pass ){
    window.location.href = "home.html"
  }else{
    popValue.push("Akun tidak ditemukan")
    pop.innerText = popValue
    pop.classList.add("show")
  }
})

formRegis.addEventListener("submit", e => {
  e.preventDefault()
  
  const pop = formRegis.querySelector(".hidden")
  let note = []
  
  const nama = formRegis.querySelector("#nama").value
  const jk = formRegis.querySelector("input[type=radio]:checked").value
  const email = formRegis.querySelector("input[type=email]").value
  const user = formRegis.querySelector("#user").value
  const pass = formRegis.querySelector("#pass").value
  
  if( nama === "" || email === "" || user === "" || pass === "" ){
    note.push("Input tidak boleh kosong")
    pop.innerText = note
    pop.classList.add("show")
  }else{
    localStorage.setItem("nama", nama)
    localStorage.setItem("email", email)
    localStorage.setItem("jk", jk)
    localStorage.setItem("user", user)
    localStorage.setItem("pass", pass)
    
    formRegis.classList.add("hide")
    formLogin.classList.remove("hide")
    
    note.push("Daftar berhasil, silahkan login")
    const success = formLogin.querySelector(".hidden")
    success.classList.add("show", "success")
    success.innerText = note
  }
    
})