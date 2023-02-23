import { uid } from './config.js'

const $resumeForm = (_) => {
    return `<div class="row resume-form-fields">
                <h3 class="py-3 fw-bold form-header">Resume Generator</h3>
                <div class="col-sm-6">
                <h4>Personal Information</h4>
                <div class="form-group">
                    <label for="nameField" class="form-label">Your Name</label>
                    <input type="text" id="nameField" class="form-control" placeholder="Enter here">
                </div>
                <div class="form-group mt-2">
                    <label for="contactField" class="form-label">Your Contact</label>
                    <input type="text" id="contactField" class="form-control" placeholder="Enter here">
                </div>
                <div class="form-group mt-2">
                    <label for="addressField" class="form-label">Your Address</label>
                    <textarea id="addressField" class="form-control" placeholder="Enter here" rows="2"></textarea>
                </div>
                <div class="form-group mt-2">
                    <label for="" class="form-label">Select your photo</label>
                    <input type="file" id="photoField" class="form-control" placeholder="Enter here">
                </div>
                <div class="form-group mt-2">
                    <label for="gitHubField" class="form-label">GitHub</label>
                    <input type="text" id="gitHubField" class="form-control" placeholder="Enter here">
                </div>
                <div class="form-group mt-2">
                    <label for="contactField" class="form-label">LinkedIn</label>
                    <input type="text" id="LinkedField" class="form-control" placeholder="Enter here">
                </div>
                </div>           
                <div class="col-sm-6">
                    <h4>Professional Information</h4>
                    <div class="form-group mt-2">
                        <label for="objectiveField">Objective</label>
                        <textarea class="form-control" id="objectiveField" placeholder="Enter here" rows="2"></textarea>
                    </div>
                    <div class="form-group mt-2" id="workExp">
                        <label for="">Work Experience</label>
                        <textarea class="form-control workExpField" data-id-field="${uid()}" placeholder="Enter here" rows="2"></textarea>
                        <div class="text-center mt-2" id="workExpFieldBtn" >
                            <button type="button" class="btn btn-main-dark-blue btn-style" data-class-to-add="workExpField" data-field="workExpFieldBtn" onclick="addNewField(this)">ADD</button>
                        </div>
                    </div>
                    <div class="form-group mt-2" id="acQual">
                        <label for="">Academic Qualification</label>
                        <textarea class="form-control acQualField" data-id-field="${uid()}" placeholder="Enter here" rows="2"></textarea>
                        <div class="text-center mt-2"  id="acQualFieldBtn" >
                            <button type="button" class="btn btn-main-dark-blue btn-style" data-class-to-add="acQualField" data-field="acQualFieldBtn" onclick="addNewField(this)">ADD</button>
                        </div>
                    </div>
                    <div class="form-group mt-2" id="languageField">
                        <label for="" class="form-label">Languages</label>                       
                        <select class="form-select">
                            <option>Select language</option>
                            <option value="English">English</option>
                            <option value="French">French</option>
                            <option value="Georgian">Georgian</option>
                            <option value="Russian">Russian</option>
                        </select>
                        <div class="text-center mt-2" id="langSelectBtn">
                            <button type="button" class="btn btn-main-dark-blue btn-style" data-select="langSelectBtn" onclick="addNewSelect(this)">ADD</button>
                        </div>
                    </div>
                </div>
                <div class="d-flex flex-row gap-3 justify-content-center"> 
                    <div class="text-center my-2">
                        <button type="button" class="btn btn-main-dark-blue btn-style" onclick="addNewResume()" >Generate CV</button>
                    </div>
                    <div class="text-center my-2">
                        <button type="button" class="btn btn-main-dark-blue btn-style" onclick="clearData()" >Clear</button>
                    </div>
                </div>
            </div> `

}

const $textareaField = (_) => {
    const { id, classToAdd } = _

    return `<div class="d-flex flex-row mt-2" id="${id}">                 
                  <textarea class="form-control ${classToAdd}" data-id-field="${id}" placeholder="Enter here" rows="2"></textarea>
                  <button type="button" class="btn btn-main-dark-blue btn-style ms-1" onclick="deleteField(${id})"><i class="bi bi-trash3"></i></button>
            </div>`
}

const $selectField = (id) => {
    return  `<div class="d-flex flex-row mt-2" id="${id}">
                <select class="form-select">
                    <option>Select language</option>
                    <option>English</option>
                    <option>French</option>
                    <option>Georgian</option>
                    <option>Russian</option>
                </select>
                <button type="button" class="btn btn-main-dark-blue btn-style ms-1" onclick="deleteField(${id})"><i class="bi bi-trash3"></i></button>                        
             </div>`
}

export {
    $resumeForm,
    $textareaField,
    $selectField,
}