import { $textareaField, $selectField } from './component.js'
import { getById, insertHtml, qs } from './dom.js'
import { uid } from './config.js'
import { selectData, updateData } from './storage.js'
import { completeResumeModal, resumeFormModal } from './services.js'

let base64Image = "images/unknown-person.jpg"

const logOut = () => {
    localStorage.removeItem('sessions')
    window.location.reload()
}

const showCustomerForm = () => {
    resumeFormModal.show()
    getById('resume-form-modal').querySelector('.modal-body').innerHTML = getById('resume-form-template').innerHTML
}

const addNewField = (e) => {
    const {idField , classToAdd} = e.dataset
    const idMainField = getById(idField)
    const fieldId = uid()
    insertHtml(idMainField,'beforeend', $textareaField({fieldId,classToAdd,value:""}))
}

const addNewSelect = (e) => {
    const {idSelect} = e.dataset
    const addMainSelect = getById(idSelect)
    const selectId = uid()
    insertHtml(addMainSelect,'beforeend', $selectField(selectId))
}

const deleteField = (id) => { 
    getById(id).remove(); 
}

const clearData = () => {
    getById('resume-form-modal').querySelector('.modal-body').innerHTML = getById('resume-form-template').innerHTML
}

const imageToBase64 = () => {
    const photoField = getById('photoField')
    const file = photoField.files[0]; 

    const fr = new FileReader();
    fr.readAsDataURL(file);
    
    fr.addEventListener('load', () => {
        const url = fr.result
        base64Image = url 
    });
}

const addNewResume = () => {     
    ///  data from resume
    const nameFiled = getById('nameField').value.trim()
    const contactField = getById('contactField').value
    const addressField = getById('addressField').value
    const gitHubField = getById('gitHubField').value
    const linkedField = getById('LinkedField').value
    const objectiveField = getById('objectiveField').value
    /// Work Experience
    const workExpField = getById('workExp').getElementsByClassName('workExpField')
    let workExpLists = []
    for( let e of workExpField){if (e.value !== ""){workExpLists.push(e.value)}}
    /// Academic Qualification
    const acQualField = getById('acQual').getElementsByClassName('acQualField')
    let acQualLists = []
    for( let e of acQualField){if (e.value !== ""){acQualLists.push(e.value)}}
    /// Languages
    const languageField = getById('languageField').getElementsByTagName('select')
    let langLists = []
    for( let e of languageField){if (e.value !== "Select language"){langLists.push(e.value)}}

    //// add into customer's form 
    const forms = selectData('forms')
    const sessions = selectData('sessions')[0]
    const customerForm = forms.find((form) => form.user_id === sessions.id)

    if ( customerForm ){
    const updatedForms = {...customerForm,
                name : nameFiled ,
                contact : contactField ,
                address : addressField,
                photo : base64Image,
                gitHub : gitHubField ,
                linked : linkedField ,
                objective : objectiveField ,
                workExp : workExpLists ,
                acQual : acQualLists ,
                languages : langLists                       
            }
        const result = updateData('forms', updatedForms, updatedForms.id) 
        
        if ( result.ok ) {             
            resumeFormModal.hide()
            //clearData()
            completedResume(updatedForms.id)
            completeResumeModal.show()          
        }
    }             
}

const completedResume = (id) => {
    const forms = selectData('forms')
    const customerCompletedForm = forms.filter((form) => form.id === id)
    if (customerCompletedForm){
       qs('.customer-name').textContent = customerCompletedForm[0].name 
       qs('.person-name').textContent = customerCompletedForm[0].name
       qs('.customer-contact').textContent = customerCompletedForm[0].contact
       qs('.customer-address').textContent = customerCompletedForm[0].address
       getById("customer-photo").src = customerCompletedForm[0].photo 
       qs('.customer-gitHub').textContent = customerCompletedForm[0].gitHub 
       qs('.customer-linked').textContent = customerCompletedForm[0].linked 
       qs('.customer-objective').textContent = customerCompletedForm[0].objective 
       qs('.customer-workExp').innerHTML = customerCompletedForm[0].workExp.map( el => `<li>${el}</li>`).join('')
       qs('.customer-acQual').innerHTML = customerCompletedForm[0].acQual.map( el => `<li>${el}</li>`).join('')
       qs('.customer-languages').innerHTML = customerCompletedForm[0].languages.map( el => `<li>${el}</li>`).join('')
    }
    
}

const editCV = () => {
    completeResumeModal.hide()
    resumeFormModal.show()  
}
 
    // Convert HTML content to PDF
    window.jsPDF = window.jspdf.jsPDF;

    const downloadCV = () => {
        var doc = new jsPDF();
        
        // Source HTMLElement or a string containing HTML.
        var elementHTML = document.querySelector("#completed-resume");
    
        doc.html(elementHTML, {
            callback: function(doc) {
                // Save the PDF
                doc.save('resume.pdf');
            },
            margin: [10, 10, 10, 10],
            autoPaging: 'text',
            x: 0,
            y: 0,
            width: 190, //target width in the PDF document
            windowWidth: 675 //window width in CSS pixels
        });
    }


export {
    logOut, showCustomerForm, imageToBase64, addNewField, deleteField, addNewSelect,clearData ,addNewResume, downloadCV, editCV
}