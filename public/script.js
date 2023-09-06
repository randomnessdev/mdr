document.addEventListener("DOMContentLoaded", function () {
  let currentStep = 0;

  // Target form
  const form = document.querySelector("form[name='devis']");
  const formChildren = Array.from(form.children);

  // Add classes
  formChildren.slice(1, 15).forEach(element => {
    element.classList.add("step-element", "step-0", "active");
  });

  formChildren.slice(15, 20).forEach(element => {
    element.classList.add("step-element", "step-1");
  });

  formChildren.slice(20, 24).forEach(element => {
    element.classList.add("step-element", "step-2");
  });

  // Disable inputs and selects
  document.querySelectorAll('.step-1 input, .step-1 select, .step-2 input, .step-2 select').forEach(element => {
    element.disabled = true;
  });

  // Hide extra address inputs
  formChildren.slice(12, 14).forEach(element => {
    element.style.display = "none";
  });

  // Add sections and titles
  const container = document.querySelector('.container');
  container.insertAdjacentHTML('afterbegin', "<section class='stepper'><div class=\"active\">Vos informations</div><div>Vos informations complémentaires</div><div>Vos besoins</div></section>");
  container.insertAdjacentHTML('afterbegin', "<h1>Devis en ligne</h1>");

  // Add buttons
  form.insertAdjacentHTML('afterend', "<button class='next-step'>Étape suivante</button>");
  document.querySelector('.next-step').insertAdjacentHTML('afterend', '<p class="required-info">*Champs requis</p>');

  // Hide save button parent
  document.querySelector('#devis_save').parentElement.style.display = "none";

  document.querySelector('.next-step').addEventListener('click', function () {
    if (form.reportValidity()) {
      form.classList.remove("step-" + currentStep);
      
      document.querySelectorAll('.step-' + currentStep + ' input, .step-' + currentStep + ' select').forEach(element => {
        element.disabled = true;
      });

      currentStep += 1;

      document.querySelectorAll('.step-element').forEach(element => {
        element.classList.remove('active');
      });

      document.querySelectorAll('.step-' + currentStep).forEach(element => {
        element.classList.add('active');
      });

      document.querySelectorAll('.step-' + currentStep + ' input, .step-' + currentStep + ' select').forEach(element => {
        element.disabled = false;
      });

      document.querySelectorAll('.stepper div').forEach(element => {
        element.classList.remove('active');
      });

      document.querySelectorAll('.stepper div')[currentStep].classList.add('active');
      form.classList.add("step-" + currentStep);

      if (currentStep === 2) {
        document.querySelector("#devis_save").parentElement.classList.add('save-container');
        document.querySelector("#devis_save").parentElement.style.display = "block";
        document.querySelector(".next-step").style.display = "none";
      }
    } else {
      console.log("Fields have not been filled correctly");
    }
  });

  form.addEventListener('keypress', function (e) {
    if (currentStep !== 2 && e.keyCode === 13) {
      e.preventDefault();
    }
  });
});
