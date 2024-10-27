function previewHTML() {
    const fileInput = document.getElementById('fileInput');
    const previewFrame = document.getElementById('html-preview');

    const file = fileInput.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(event) {
            previewFrame.srcdoc = event.target.result;
        };
        reader.readAsText(file);
    } else {
        alert("Please select an HTML file to preview.");
    }
}

function downloadApp(platform) {
    const fileInput = document.getElementById('fileInput');
    const file = fileInput.files[0];

    if (!file) {
        alert("Please select an HTML file to download as an app.");
        return;
    }

    const reader = new FileReader();
    reader.onload = function(event) {
        const htmlContent = event.target.result;
        if (platform === 'android') {
            generateAndroidApp(htmlContent);
        } else if (platform === 'windows') {
            generateWindowsApp(htmlContent);
        }
    };
    reader.readAsText(file);
}

function generateAndroidApp(htmlContent) {
    alert("Generating Android app...");
    // Android app generation logic here
}

function generateWindowsApp(htmlContent) {
    alert("Generating Windows app...");
    // Windows app generation logic here
}
