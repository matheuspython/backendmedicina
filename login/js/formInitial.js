const Btncadastro = document.querySelector(".cadastro")
const BtnEntrar = document.querySelector(".entrar")
Btncadastro.addEventListener('click',async  (e)=>{
  e.preventDefault()
  const nome = document.querySelector(".nameForNewAcount").value
  const email = document.querySelector(".emailForNewAcount").value
  const password = document.querySelector(".passwordForNewAcount").value
  const req = await axios.post("http://localhost:4000/createNewUser",{
    email,password, nome
  })
  const res = req.data
  console.log(res)
})

BtnEntrar.addEventListener('click',async e =>{
  e.preventDefault()
  alert('logado')
  const email = document.querySelector(".loginEmail").value
  const password = document.querySelector(".loginSenha").value
  const req = await axios.post("http://localhost:4000/loginUser",{
    email,password
  })
  const res = req.data
  console.log(res+3423432)
})