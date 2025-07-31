function openService(evt, serviceName) {
  var i, serviceContent, tablinks;

  // Hide all service content elements
  serviceContent = document.getElementsByClassName("service-content");
  for (i = 0; i < serviceContent.length; i++) {
    serviceContent[i].classList.remove("active");
  }

  // Deactivate all tab links
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].classList.remove("active");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(serviceName).classList.add("active");
  evt.currentTarget.classList.add("active");
}

// Set the default tab (Web Development) to be active on page load
document.getElementById("web-development").classList.add("active");
document.getElementsByClassName("tablinks")[0].classList.add("active");
