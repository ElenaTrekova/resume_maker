
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
            </div>`          
}

const $customer = (_) => {
    const { id, email } = _
    return `<div>
                <div class="btn-group" role="group" aria-label="Basic mixed styles">
                    <button type="button" class="btn btn-main-dark-blue btn-style show-customer-btn" data-id="${id}" onclick="showCustomerForm(this)">
                        <i class="bi bi-journal-plus"></i>                       
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

export { 
    $regAuth,
    $customer,
    $alertMessage,
}