document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.dropdown-trigger');
    var options = ["hover"]
    var instances = M.Dropdown.init(elems,options);
  });