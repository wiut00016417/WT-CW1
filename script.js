function loadHeaderAndFooter() {
    // Load header content
    var headerElement = document.getElementById('header');
    var headerRequest = new XMLHttpRequest();
    headerRequest.onreadystatechange = function() {
      if (headerRequest.readyState === 4 && headerRequest.status === 200) {
        headerElement.innerHTML = headerRequest.responseText;
      }
    };
    headerRequest.open('GET', 'header.html', true);
    headerRequest.send();
  
    // Load footer content
    var footerElement = document.getElementById('footer');
    var footerRequest = new XMLHttpRequest();
    footerRequest.onreadystatechange = function() {
      if (footerRequest.readyState === 4 && footerRequest.status === 200) {
        footerElement.innerHTML = footerRequest.responseText;
      }
    };
    footerRequest.open('GET', 'footer.html', true);
    footerRequest.send();
  }
  
  // Call the function to load header and footer
  loadHeaderAndFooter();