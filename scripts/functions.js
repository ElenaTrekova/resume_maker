import { $alertMessage } from './component.js'
import { $resumeForm, $textareaField, $selectField } from './resumeForm.js'
import { $completedForm } from './completedResume.js'
import { getById, render, insertHtml, qs } from './dom.js'
import { uid } from './config.js'
import { selectData, updateData } from './storage.js'

const logOut = () => {
    localStorage.removeItem('customer')
    window.location.reload()
}

const showCustomerForm = (e) => {
    render(getById('resume-form'), $resumeForm({}))
}

const addNewField = (e) => {
 const {field , classToAdd} = e.dataset
 const addFieldBtn = getById(field)
 const fieldId = uid()
 insertHtml(addFieldBtn,'beforebegin', $textareaField({fieldId,classToAdd}))
}

const addNewSelect = (e) => {
    const {select} = e.dataset
    const addSelectBtn = getById(select)
    const selectId = uid()
    insertHtml(addSelectBtn,'beforebegin', $selectField(selectId))
}

const deleteField = (_) => {  
    const {id} = _
    getById(id).remove()
}

const clearData = () => {
    qs(".show-customer-btn").dispatchEvent(new Event("click"))   
}

const addNewResume = () => {
    //e.preventDefault()
    const forms = selectData('forms')
    const customer = selectData('customer')[0]
    const customerForm = forms.find((form) => form.user_id === customer.id)
    ///  data from resume
    const nameFiled = getById('nameField').value.trim()
    const contactField = getById('contactField').value
    const addressField = getById('addressField').value
    const photoField = getById('photoField').value
    const gitHubField = getById('gitHubField').value
    const linkedField = getById('LinkedField').value
    const objectiveField = getById('objectiveField').value
    /// Work Experience
    const workExpField = getById('workExp').getElementsByClassName('workExpField')
    let workExpLists = []
    for( let e of workExpField){workExpLists.push(e.value)}
    /// Academic Qualification
    const acQualField = getById('acQual').getElementsByClassName('acQualField')
    let acQualLists = []
    for( let e of acQualField){acQualLists.push(e.value)}
    /// Languages
    const languageField = getById('languageField').getElementsByTagName('select')
    let langLists = []
    for( let e of languageField){langLists.push(e.value)}
    //// add into customer's form
    const form = [
            { name : nameFiled },
            { contact : contactField },
            { address : addressField},
            { photo : photoField },
            { gitHub : gitHubField },
            { linked : linkedField },
            { objective : objectiveField },
            { workExp : workExpLists },
            { acQual : acQualLists },
            { languages : langLists },
        ]

    if ( customerForm ){
        const updatedForms = {...customerForm,form_values:form}
        const result = updateData('forms', updatedForms, updatedForms.id)
        if ( result.ok ) {
            render(getById('message-box'), $alertMessage({status: 'success', message: result.message}))
            setTimeout(() => {
                render(getById('message-box'), '')
            }, 3000)
        }
    }

    completedFormData(customerForm.user_id)
    
}

const completedFormData = (id) => {
    
    const forms = selectData('forms')
    const customerForm = forms.find((form) => form.user_id === id)

    if (customerForm) {

       const data = customerForm.form_values
       const name = data.filter( value => value.name).length > 0 ? data.filter( value => value.name)[0].name : ""
       const contact = data.filter( value => value.contact).length > 0 ? data.filter( value => value.contact)[0].contact : ""
       const address = data.filter( value => value.address) == undefined ? data.filter( value => value.address)[0].address : ""
       //const photo = null
       const gitHub = data.filter( value => value.gitHub).length > 0 ? data.filter( value => value.gitHub)[0].gitHub : ""
       const linked = data.filter( value => value.linked).length > 0 ? data.filter( value => value.linked)[0].linked : ""
       const objective = data.filter( value => value.objective).length > 0 ? data.filter( value => value.objective)[0].objective : ""
       const workExp = data.filter( value => value.workExp)[0].workExp.length > 1 ? data.filter( value => value.workExp)[0].workExp.map(el => `<li>${el}</li>`).join('') : ""
       const acQual = data.filter( value => value.acQual)[0].acQual.length > 1 ? data.filter( value => value.acQual)[0].acQual.map(el => `<li>${el}</li>`).join('') : ""
       const languages = data.filter( value => value.languages)[0].languages.length > 1 ?  data.filter( value => value.languages)[0].languages.map(el => `<li>${el}</li>`).join('') : ""

       const formData = [ id,name,contact,address,gitHub,linked,objective,workExp,acQual,languages ]

       render(getById('resume-form'), $completedForm(formData))

    }
}

const downloadCV = (id) => {
   const idResume = getById(`resume-${id}`)
    html2pdf()
        .from(idResume)
        .save();
}

export {
    logOut, showCustomerForm, addNewField, deleteField, addNewSelect,clearData ,addNewResume, downloadCV
}