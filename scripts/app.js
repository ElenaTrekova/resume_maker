import { defaultCollections, uid } from './config.js'
import { initCollections, insertData, selectData } from './storage.js'
import { getById, render, qs } from './dom.js'
import { $regAuth, $customer, $alertMessage } from './component.js'

window.addEventListener('DOMContentLoaded', async () => {

    initCollections(defaultCollections)

    if (localStorage.hasOwnProperty('sessions')) {
        const customer = selectData('sessions')[0]
        render(getById('dashboard-panel'), $customer(customer))
    } else render(getById('dashboard-panel'), $regAuth({}))

     // TODO => Registration
     getById('register-form')
     .addEventListener('submit', (e) => {
         e.preventDefault()

         const {email, password, re_password } = e.target

         if(password.value.trim() === re_password.value.trim()){

            const user = {
                id: uid(),
                email: email.value.trim(),
                password: password.value.trim(),
            }
            const addUser = insertData('users', user)
            if (addUser.ok) {
                const form = {
                    id: uid(),
                    user_id: user.id,
                    name : "",
                    contact : "" ,
                    address : "",
                    photo : "" ,
                    gitHub : "" ,
                    linked : "" ,
                    objective : "" ,
                    workExp :[] ,
                    acQual : [] ,
                    languages : [] 
                }
            
            const addCVForm = insertData('forms', form)
                if (addCVForm.ok) {
                    const clickEvent = new Event('click')
                    qs(`[data-bs-target="#register-modal"]`).dispatchEvent(clickEvent)
                    render(getById('message-box'), $alertMessage({status: 'success', message: addUser.message}))
                    delete user.password
                    insertData('sessions', user)
                    setTimeout(() => {
                        window.location.reload()
                    }, 3000)
                }
            }
        }
    })
 
    // TODO => Authorization
     getById('authorization-form')
     .addEventListener('submit', (e) => {
         e.preventDefault()
         const {email, password} = e.target
         const users = selectData('users')
         const user = users.find(user => user.email === email.value.trim() && user.password === password.value.trim())
         if (user) {
             delete user.password
             insertData('sessions', user)
             window.location.reload()
         }
     })

})

