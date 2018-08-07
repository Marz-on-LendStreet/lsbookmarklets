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
    $('input[placeholder="First name"]').val('Joe').trigger('input');
    $('input[placeholder="Last name"]').val('Earnest').trigger('input');
    $('input[placeholder="Email"]').val('joe.earnest.001@lendstreet.com').trigger('input');
    $('input[placeholder="Cell phone"]').val('5108675309').trigger('input');
    $('input[placeholder="Street address"]').val('1101 CORRAL STREET').trigger('input');
    $('input[placeholder="City"]').val('SWEETWATER').trigger('input');
    $('input[placeholder="Zip code"]').val('795566611').trigger('input');
    $('input[ng-model]').trigger('input');
    var sc=angular.element("[ng-controller=SiteController]").scope();
    var m=sc.borrower;
    m.contact.first_name = 'Joe';
    sc.$apply();
    

    //var state = 'option[text="Texas"]';
    //$('select[data-test="state"]').find(state).attr("selected", "selected");
}