//alert('begin bookmarklet');
if (typeof jQuery == 'undefined') {
    //alert('jQuery undefined');
    var script    = document.createElement( 'script' );
    script.src    = 'http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js';
    script.onload = fillForm;
    document.body.appendChild(script);
}
else {
    //alert('jQuery defined');
    fillForm();
}
function fillForm() {
    //alert('In fillForm()');
    $('input[placeholder="First name"]').val('Joe');
    $('input[placeholder="First name"]').trigger('input');
    $('input[placeholder="Last name"]').val('Earnest');
    $('input[placeholder="Email"]').val('joe.earnest.001@lendstreet.com');
    $('input[placeholder="Cell phone"]').val('5108675309');
    $('input[placeholder="Street address"]').val('1101 CORRAL STREET');
    $('input[placeholder="City"]').val('SWEETWATER');
    $('input[placeholder="Zip code"]').val('795566611');
    //var state = 'option[text="Texas"]';
    //$('select[data-test="state"]').find(state).attr("selected", "selected");
}