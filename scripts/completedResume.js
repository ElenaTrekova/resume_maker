import { getById } from './dom.js'

const $completedForm = (_) => {

    const [ id,name,contact,address,gitHub,linked,objective,workExp,acQual,languages ] = _


    const  file = getById('photoField').files[0]
    if (file) {
        let reader = new FileReader()
        reader.readAsDataURL(file)

        reader.onloadend = function () {
            getById("customer-photo").src = reader.result
        }
    }

    return `<div>
                <div class="row p-4 completed-resume" id="resume-${id}">                 
                    <h3 class="text-center fw-bold form-header">Resume</h3>
                    <div class="col-md-4">
                        <div class="text-center p-3 personal-info-bg rounded">
                            <div class="container col-4 my-4">
                                <img scr="../images/unknown-person.jpg" alt="" id="customer-photo" class="img-fluid"/>
                            </div>                    
                            <div class="container col-8">
                                <p>${name}</p>
                                <p>${contact}</p>
                                <p>${address}</p>
                                <hr />
                                <p><a href="">${gitHub}</a></p>
                                <p><a href="">${linked}</a></p> 
                            </div>  
                        </div>    
                    </div>        
                    <div class="col-md-8">
                    <h4 class="text-center person-name mt-2">${name}</h4>
                        <div class="card mt-3 bg-color-none">
                            <div class="card-header personal-info-bg">
                                <h6 class="mb-0">Objective</h6>
                            </div>
                            <div class="card-body">
                                <p>${objective}</p>
                            </div>
                        </div>
                        <div class="card mt-3 bg-color-none">
                            <div class="card-header personal-info-bg">
                                <h6 class="mb-0">Work Experience</h6>
                            </div>
                            <div class="card-body">
                                <ul>
                                    ${workExp}
                                </ul>
                            </div>
                        </div>
                        <div class="card mt-3 bg-color-none">
                            <div class="card-header personal-info-bg">
                                <h6 class="mb-0">Academic Qualification</h6>
                            </div>
                            <div class="card-body">
                                <ul>
                                    ${acQual}
                                </ul>
                            </div>
                        </div>
                        <div class="card mt-3 bg-color-none">
                            <div class="card-header personal-info-bg">
                                <h6 class="mb-0">Languages</h6>
                            </div>
                            <div class="card-body">
                                <ul class="d-sm-flex gap-5">
                                    ${languages}
                                </ul>
                            </div>
                        </div>
                    </div>   
            </div>
            <div class="text-center my-2">
                <button type="button" class="btn btn-main-dark-blue btn-style" onclick="downloadCV('${id}')">Download CV</button>
            </div>
        </div> `
}

export {
    $completedForm,
}