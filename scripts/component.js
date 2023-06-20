
const $alertMessage = (_) => {
    const {status, message} = _
    return `<div class="alert alert-${status}" role="alert">
                ${message}
            </div>`
}

const $regAuth = (_) => {
    return `<div class="d-flex justify-content-end">
                <div class="btn-group" role="group" aria-label="Basic mixed styles">
                    <button type="button" class="btn btn-main-blue btn-style" data-bs-toggle="modal" data-bs-target="#register-modal">
                        <span>Register</span>
                    </button>
                    <button type="button" class="btn btn-main-dark-blue btn-style" data-bs-toggle="modal" data-bs-target="#authorization-modal">
                        <span>Authorization</span>
                    </button>
                </div>
                <div>
                    <a href="https://github.com/ElenaTrekova/resume_maker.git" target="_blank" class="btn btn-main-blue btn-style" tabindex="-1" role="button" aria-disabled="true">Course Code</a>
                </div>
            </div>`          
}

const $customer = (_) => {
    const { email } = _
    return `<div>
                <div class="btn-group" role="group" aria-label="Basic mixed styles">
                    <button type="button" class="btn btn-main-dark-blue btn-style" onclick="showCustomerForm(this)">
                        <i class="bi bi-journal-plus"></i><span class="ps-2">new</span>                       
                    </button>
                    <button type="button" class="btn btn-main-blue btn-style">
                        <span>${email}</span>
                    </button>
                    <button type="button" class="btn btn-main-dark-blue btn-style" onclick="logOut()">
                        <i class="bi bi-box-arrow-right"></i>
                    </button>
                </div>
            </div>`
}

const $textareaField = (_) => {
    const { fieldId, classToAdd, value } = _

    return `<div class="d-flex flex-row mt-2" id="${fieldId}" data-class-to-edit="${classToAdd}-edit">                 
                <textarea class="form-control ${classToAdd}" placeholder="Enter here" rows="2">${value}</textarea>
                <button type="button" class="btn btn-main-dark-blue btn-style ms-1" onclick="deleteField('${fieldId}')"><i class="bi bi-trash3"></i></button>
            </div>`
}

const $selectField = (id) => {
    return  `<div class="d-flex flex-row mt-2" id="${id}" data-class-to-remove="langField">
                <select class="form-select">
                    <option>Select language</option>
                    <option>English</option>
                    <option>French</option>
                    <option>Georgian</option>
                    <option>Russian</option>
                </select>
                <button type="button" class="btn btn-main-dark-blue btn-style ms-1" onclick="deleteField('${id}')"><i class="bi bi-trash3"></i></button>                        
             </div>`
}

export { 
    $regAuth,
    $customer,
    $alertMessage,
    $textareaField,
    $selectField
}
