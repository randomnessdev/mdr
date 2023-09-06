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
    "<section class='stepper'><div class=\"active\">Vos informations</div><div>Vos informations complémentaires</div><div>Vos besoins</div></section>"
  );
  // add a title to the page at the begining of the main element
  $(".container").prepend("<h1>Devis en ligne</h1>");

  // add a button after the form with a class named "next-step" that triggers reportValidity() on the form, if it returns true, the next step is displayed (currentStep = 1)
  $("form[name='devis']").after(
    "<button class='next-step'>Ėtape suivante</button>"
  );

  // add the "*Champs requis" text after the button
  $(".next-step").after('<p class="required-info">*Champs requis</p>');

  // hide #devis_save parent
  $("#devis_save").parent().hide();

  $(".next-step").click(function () {
    if ($("form[name='devis']")[0].reportValidity()) {
      // add a class to the form named "step-" + (currentClass + 1)
      $("form").removeClass("step-" + currentStep);
      $(".step-" + currentStep + " input").prop("disabled", true);
      $(".step-1 select").prop("disabled", true);

      currentStep += 1;

      $(".step-element").removeClass("active");
      $(".step-element.step-" + currentStep).addClass("active");
      $(".step-" + currentStep + " input").prop("disabled", false);
      $(".step-" + currentStep + " select").prop("disabled", false);
      $(".stepper div").removeClass("active");
      $(".stepper div").eq(currentStep).addClass("active");
      //remove the class "step-" + (currentClass)
      $("form").addClass("step-" + currentStep);

      // check if currentStep is the last one (2) to display virtual button or the orginial button, an remove the disabled on the inputs and selects of previous steps
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
  });

  // add event listener and prevent for enter key
  $("form[name='devis']").on("keypress", function (e) {
    if (currentStep != 2 && e.which == 13) {
      e.preventDefault();
    }
  });
});