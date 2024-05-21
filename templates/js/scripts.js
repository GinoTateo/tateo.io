document.getElementById('pdf_button').addEventListener('mouseenter', function() {
    this.classList.add('animated');
});

document.getElementById('pdf_button').addEventListener('mouseleave', function() {
    this.classList.remove('animated');
});

const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');

function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
    }
    else {
        document.documentElement.setAttribute('data-theme', 'light');
    }
}

toggleSwitch.addEventListener('change', switchTheme, false);

function openProject(event, projectName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(projectName).style.display = "block";
    event.currentTarget.className += " active";
}

document.querySelectorAll('.resume-item').forEach(item => {
    item.addEventListener('click', function() {
        this.classList.toggle('active');
    });
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    var pdfButton = document.getElementById('pdfButton');
    var downloadButton = document.getElementById('downloadButton');

    pdfButton.addEventListener('click', function(e) {
        // Prevent default action
        e.preventDefault();
        // Handle the PDF button click action
        console.log('PDF button clicked!');
        // You could track analytics or perform other actions here
        // Then, optionally, proceed to the link:
        window.location.href = pdfButton.getAttribute('href');
    });

    downloadButton.addEventListener('click', function(e) {
        // Prevent default action
        e.preventDefault();
        // Handle the Download button click action
        console.log('Download button clicked!');
        // Similar to the PDF button, perform actions like tracking here
        // Then, proceed to the link:
        window.location.href = downloadButton.getAttribute('href');
    });
});

