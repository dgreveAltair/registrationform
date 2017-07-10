
// show/hide form sections and test fields
$(document).ready(function() {
  var $sections = $('.form-section');

  function navigateTo(index) {
    // Mark the current section with the class 'current'
    $sections
      .removeClass('current')
      .eq(index)
        .addClass('current');
    // Show only the navigation buttons that make sense for the current section:
    $('.form-navigation .previous').toggle(index > 0);
    var atTheEnd = index >= $sections.length - 1;
    $('.form-navigation .next').toggle(!atTheEnd);
    $('.form-navigation [type=submit]').toggle(atTheEnd);
  }

  function curIndex() {
    // Return the current index by looking at which section has the class 'current'
    return $sections.index($sections.filter('.current'));
  }

  // Previous button is easy, just go back
  $('.form-navigation .previous').click(function() {
    navigateTo(curIndex() - 1);

    if ( $( "#detailSection" ).is( ".current" ) ) {
        $( ".indicatorTwo" ).toggleClass('completed active');
        $( ".indicatorThree" ).removeClass('active');
        $( ".barTwo" ).removeClass('completed');

    };
    if ( $( "#personalInfo" ).is( ".current" ) ) {
      $( ".indicatorOne" ).toggleClass('completed active');
        $( ".indicatorTwo" ).removeClass('active');
        $( ".barOne" ).removeClass('completed');
    };
    $("html, body").animate({ scrollTop: 0 }, "slow");
  });

  // Next button goes forward if current block validates
  $('.form-navigation .next').click(function() {
    if ($('#warrantyRegForm').parsley().validate({group: 'block-' + curIndex()}))
      navigateTo(curIndex() + 1);

      if ( $( "#detailSection" ).is( ".current" ) ) {
          $( ".indicatorOne" ).toggleClass('active completed');
          $( ".indicatorTwo" ).addClass('active');
          $( ".barOne" ).addClass('completed');
      };

      if ( $( "#reviewSection" ).is( ".current" ) ) {
          $( ".indicatorTwo" ).toggleClass('active completed');
          $( ".indicatorThree" ).addClass('active');
          $( ".barTwo" ).addClass('completed');
      };

      $("html, body").animate({ scrollTop: 0 }, "slow");

  });

  // Prepare sections by setting the `data-parsley-group` attribute to 'block-0', 'block-1', etc.
  $sections.each(function(index, section) {
    $(section).find(':input').attr('data-parsley-group', 'block-' + index);
  });
  navigateTo(0); // Start at the beginning

// Mark the current section with the class 'current'
if ( $( "#personalInfo" ).is( ".current" ) ) {
  $( ".indicatorOne" ).addClass('active');
};



//add additional fields

        //add additional products
        var scntDiv = $('#modelInfo');
        var i = $('#modelInfo .row').size() + 1;

        $('#addProduct').on('click', function() {
                $('<div class="row"><p class="modelNumField"><label for="modelNumber">Model#</label><br><input type="text" id="modelNumber" name="modelNumber' + i +'" /></p><p class="quantityField"><label for="quantity">Quantity</label><br><input type="text" name="quantity' + i +'" /><br><p><a href="#" class="remProduct">Remove</a></p></div>').appendTo(scntDiv);
                i++;
                return false;
        });

        $(document).on('click', '.remProduct', function() {
          if( i > 2 ) {
            $(this).parents('.row').remove();
            i--;
          }
          return false;
        });


        var newLocDiv = $('.additionalLocations');
        var i = $('#installPurchaseInfo .locInfo').size() + 1;

        $('#addInstallLoc').on('click', function() {
                $('<div class="row"> \
                <div id="locationInfo' + i +'" class="locInfo"> \
                <fieldset> \
              <div class="row"> \
                <p> \
                  <select id="installType" name="Install Type"> \
                    <option value="residential">Residental</option> \
                    <option value="Industrial">Commercial/Industrial</option> \
                  </select> \
                </p> \
                </div><!--/.row --> \
                </fieldset> \
                <fieldset> \
                  <div class="row"> \
                  <p> \
                    <label for="Install Address">Installation Address</label><br> \
                    <input type="text" name="intstallAddress" required="" /> \
                  </p> \
                  <p> \
                    <label>Address Line 2 (Optional)</label><br> \
                    <input type="text" name="intstallAddress2 " /> \
                  </p> \
                </div><!-- ./row --> \
                <div class="row"> \
                  <p> \
                    <label>City</label><br> \
                    <input type="text" name="intstallCity" required="" /> \
                  </p> \
                  <p class="stateSelect"> \
                    <label for="state">State</label><br /> \
                    <select name="intstallState" id="" class="state" required="" > \
                      <option value="">Select</option> \
                      <option value="AK">AK</option> \
                      <option value="AL">AL</option> \
                      <option value="AR">AR</option> \
                      <option value="AZ">AZ</option> \
                      <option value="CA">CA</option> \
                      <option value="CO">CO</option> \
                      <option value="CT">CT</option> \
                      <option value="DC">DC</option> \
                      <option value="DE">DE</option> \
                      <option value="FL">FL</option> \
                      <option value="GA">GA</option> \
                      <option value="HI">HI</option> \
                      <option value="IA">IA</option> \
                      <option value="ID">ID</option> \
                      <option value="IL">IL</option> \
                      <option value="IN">IN</option> \
                      <option value="KS">KS</option> \
                      <option value="KY">KY</option> \
                      <option value="LA">LA</option> \
                      <option value="MA">MA</option> \
                      <option value="MD">MD</option> \
                      <option value="ME">ME</option> \
                      <option value="MI">MI</option> \
                      <option value="MN">MN</option> \
                      <option value="MO">MO</option> \
                      <option value="MS">MS</option> \
                      <option value="MT">MT</option> \
                      <option value="NC">NC</option> \
                      <option value="ND">ND</option> \
                      <option value="NE">NE</option> \
                      <option value="NH">NH</option> \
                      <option value="NJ">NJ</option> \
                      <option value="NM">NM</option> \
                      <option value="NV">NV</option> \
                      <option value="NY">NY</option> \
                      <option value="OH">OH</option> \
                      <option value="OK">OK</option> \
                      <option value="OR">OR</option> \
                      <option value="PA">PA</option> \
                      <option value="RI">RI</option> \
                      <option value="SC">SC</option> \
                      <option value="SD">SD</option> \
                      <option value="TN">TN</option> \
                      <option value="TX">TX</option> \
                      <option value="UT">UT</option> \
                      <option value="VA">VA</option> \
                      <option value="VT">VT</option> \
                      <option value="WA">WA</option> \
                      <option value="WI">WI</option> \
                      <option value="WV">WV</option> \
                      <option value="WY">WY</option> \
                    </select> \
                  </p> \
                  <p class="zipField"> \
                    <label>Zip Code</label><br> \
                    <input type="text" maxlength="5" name="Zip Code" data-parsley-type="integer" data-parsley-minlength="5" required="" /> \
                  </p> \
                </div><!-- ./row --> \
                </fieldset> \
                <hr> \
                <div class="row"> \
                <fieldset> \
                <p class="purchaseDate"> \
                  <label for="purchaseDate">Date of purchase (eg: 01/01/2017)</label><br> \
                  <input type="text" name="purchaseMonth"> / <input type="text" name="purchaseDay" /> / <input type="text" name="purchaseYear" /> \
                </p> \
              </fieldset> \
              <fieldset> \
                <p> \
                  <label for="Purchase Place">Place of Purchase</label><br> \
                  <select id="purchasePlace" name="purchasePlace"> \
                    <option value="toggled direct">toggled direct</option> \
                    <option value="toggled store">toggled store</option> \
                    <option value="The Home Depot">The Home Depot</option> \
                    <option value="Amazon">Amazon</option> \
                    <option value="other">Other</option> \
                  </select> \
                  <input class="hidden" type="text" name="otherPlace" /> \
                </p> \
              </fieldset> \
              </div> \
              <div id="modelInfo"> \
              <fieldset> \
                <div class="row"> \
                <p class="modelNumField"> \
                  <label for="modelNumber">Model#</label><br> \
                  <input type="text" name="modelNumber" /> \
                </p> \
                <p class="quantityField"> \
                  <label for="quantity">Quantity</label><br> \
                  <input type="number" name="quantity" /> \
                </p> \
              </div><!-- /.row --> \
              </fieldset> \
            </div><!-- /.modelInfo --> \
              <div class="row"> \
                <p class="addMore"><a href="#" id="addProduct"><span>+</span>  Add another product</a></p> \
              </div><!-- /.row --> \
            </div><!-- /.row --> \
              <a href="#" class="remLocation">Remove this location</a>').appendTo(newLocDiv);
                i++;
                return false;
        });

        $(document).on('click', '.remLocation', function() {
          if( i > 2 ) {
            $(this).parents('.row').remove();
            i--;
          }
          return false;
        });



        //Auto Fill Personal Address
          $('.sameAddress').on('click', function(){
            if ( $('input[name="sameAddress"]').is(':checked') ) {
              $('#installAddress').val( $('#personAddress').val() );
              $('#optinstallAddress').val( $('#personOptAddress').val() );
              $('#installCity').val( $('#personCity').val() );
              $('#personalState option:selected').remove().appendTo('#installState');

              $('#installZipCode').val( $('#personZipCode').val() );
            } else {
              $('#optinstallAddress').val(' ');
              $('#personOptAddress').val(' ');
              $('#installCity').val(' ');
              $('#installState').val(' ');
              $('#installZipCode').val(' ');
          }

        });

        //Show other field for purchase location
        $('p select[name=purchasePlace]').change(function(e){
          if ($('p select[name=purchasePlace]').val() == 'other'){
            $('.otherPlace').removeClass('hidden');
          }else{
            $('.otherPlace').addClass('hidden');
          }
        });



        /// customize dropdowns

        $('select#personState').selectmenu({
          menuWidth: 180,
        });

        $('select#installState').selectmenu({
          menuWidth: 180,
        });

        $('select#installType').selectmenu({
          menuWidth: 380,
        });

        $('select#purchasePlace').selectmenu({
          menuWidth: 380,
        });

        $("a#findNumber").fancybox();


});
