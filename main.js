/**
 * initialize constants
 */
const DEFAULTSTEPS = 4; // no of steps.
let stepsProvided = 0;

document.addEventListener('DOMContentLoaded',function(event){
    self.stepperBar = document.querySelector('#stepper-container');
    initializeStepper();
});

/***
 * intialize the stepper. call the this function from code and comment out line no. 9
 */

initializeStepper = () => {
    stepsProvided = self.stepperBar && Number(self.stepperBar.getAttribute('data-no-of-steps'));
    
    // error check
    if(stepsProvided &&  stepsProvided > 6 ) {
        console.log("steps must be less than 6");
        return;
    }
    
    // if step not provided
    stepsProvided = stepsProvided ? stepsProvided : DEFAULTSTEPS;
    // define template
    let template = '';
    template += `<div class="container-fluid"><div class="row"><div class="col-sm-12"><div class="stepper-container card">
                <div class="stepper">`;
    for(let index=1; index<= Number(stepsProvided); index++) {
        template += `<div class="step"><div class="step-inner"><div class="step-circle"><span class="hide">${index}</span></div></div></div>`;
    }
    template += `</div></div></div></div></div>`;
    self.stepperBar.innerHTML = template;
}

/**
 * @definition: Activate step based on step number;
 * @param : step number
 */

actiVateStep = (stepNumber) => {
    if(stepNumber && stepNumber > 0 && stepNumber <= stepsProvided) {
        let allSteps = self.stepperBar && self.stepperBar.childNodes[0].querySelectorAll(".step");

        if(allSteps.length > 0) {
            allSteps[stepNumber - 1].classList.add("active");
            allSteps[stepNumber - 1].querySelector(".hide").style.visibility = "hidden";
            return;
        }
    }
    console.log("Please provide proper step number");
}

/**
 * @definition: De-Activate step based on step number;
 * @param : step number
 */

deActiVateStep = (stepNumber) => {
    if(stepNumber && stepNumber > 0 && stepNumber <= stepsProvided) {
        let allSteps = self.stepperBar && self.stepperBar.childNodes[0].querySelectorAll(".step");

        if(allSteps.length > 0) {
            allSteps[stepNumber - 1].classList.remove("active");
            allSteps[stepNumber - 1].querySelector(".hide").style.visibility = "visible";
            return;
        }
    }
    console.log("Please provide proper step number");
}