function readURL(input) {
  if (input.files && input.files[0]) {
      var reader = new FileReader(); 
      reader.onload = function (e) {
          $('#profile-img-tag').attr('src', e.target.result);
      }
      reader.readAsDataURL(input.files[0]);
  }
}

$("#profile-img").change(function(){
  readURL(this);
});

wheelzoom(document.querySelector('img.zoom'));

$("#profile-img-tag").css({"border-color": "black", 
             "border-width":"1px", 
             "border-style":$('select[name=selector]').find(":selected").val()});