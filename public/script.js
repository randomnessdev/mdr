$(document).ready(function () {
  let currentStep = 0;

  // Display the form in 3 steps by adding classes to the form elements
  // /!\  This could break if some elements are added or removed from the form  /!\
  // In case of changes, edit the slice() functions below to match the new number of elements

  $("form[name='devis']")
    .children()
    .slice(1, 15)
    .addClass("step-element step-0")
    .addClass("active");

  $("form[name='devis']")
    .children()
    .slice(15, 20)
    .addClass("step-element step-1");

  $("form[name='devis']")
    .children()
    .slice(20, 24)
    .addClass("step-element step-2");

  // disabling inputs and selects to facilitate the reportValidity() function
  $(".step-1 input").prop("disabled", true);
  $(".step-1 select").prop("disabled", true);
  $(".step-2 input").prop("disabled", true);
  $(".step-2 select").prop("disabled", true);

  // hide children 13 & 14 (extra addresses inputs) of the form
  $("form[name='devis']").children().slice(12, 14).hide();

  // add a section after the title with a class named "steps"
  $(".container").prepend(
    '<section class=\'stepper\'><div class="active step-select stepper-0">Vos informations</div><div class=\"step-select stepper-1">Vos informations complémentaires</div><div class="step-select stepper-2">Vos besoins</div></section>'
  );
  // add a title to the page at the begining of the main element
  $(".container").prepend("<h1>Devis en ligne</h1>");

  // add a button after the form with a class named "next-step" that triggers reportValidity() on the form, if it returns true, the next step is displayed (currentStep = 1)
  $("form[name='devis']").after(
    "<button class='next-step'>Ėtape suivante</button>"
  );

  $(".step-select ").click(function () {
    // get the class that was clicked that contains the step number
    let step = $(this).attr("class").split(" ")[1].split("-")[1];
    // change the step to the one that was clicked
    if ($("form[name='devis']")[0].reportValidity()) {
    changeStep(currentStep, step);
    } else {
      console.log("Fields have not been filled correctly");
      // create a toast for 2 seconds saying "Please fill the required fields before changing step"
      let toast = document.createElement("div");
      toast.classList.add("custom-toast");
      toast.innerHTML = "Veuillez remplir les champs requis avant de changer d'étape";
      document.body.appendChild(toast);
      setTimeout(() => {
        document.body.removeChild(toast);
      }, 2000);

    }
  });


  // add the "*Champs requis" text after the button
  $(".next-step").after('<p class="required-info">*Champs requis</p>');

  // hide #devis_save parent
  $("#devis_save").parent().hide();


  $

  function changeStep(from, to) {
    if ($("form[name='devis']")[0].reportValidity()) {
      // add a class to the form named "step-" + (currentClass + 1)
      $("form").removeClass("step-" + from);
      $(".step-" + currentStep + " input").prop("disabled", true);
      $(".step-1 select").prop("disabled", true);
      $(".step-element").removeClass("active");

      to ? (currentStep = to) : currentStep++;

      $(".step-element.step-" + currentStep).addClass("active");
      $(".step-" + currentStep + " input").prop("disabled", false);
      $(".step-" + currentStep + " select").prop("disabled", false);
      $(".stepper div").removeClass("active");
      $(".stepper div").eq(currentStep).addClass("active");
      //remove the class "step-" + (currentClass)
      $("form").addClass("step-" + currentStep);

      // check if currentStep is the last one (2) and display virtual button or the orginial button
      if (currentStep == 2) {
        $("#devis_save").parent().addClass("save-container");
        $("#devis_save").parent().show();
        $(".next-step").hide();
        $(".step-0 input").prop("disabled", false);
        $(".step-0 select").prop("disabled", false);
        $(".step-1 input").prop("disabled", false);
        $(".step-1 select").prop("disabled", false);
      }
    } else {
      console.log("Fields have not been filled correctly");
    }
  }

  $(".next-step").click(function () {
    changeStep(currentStep, currentStep + 1);
  });
  // add event listener and prevent for enter key
  $("form[name='devis']").on("keypress", function (e) {
    if (currentStep != 2 && e.which == 13) {
      e.preventDefault();
    }
  });
});
