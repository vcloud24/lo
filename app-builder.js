// Function to preview HTML in a new tab
function previewHTML() {
    const fileInput = document.getElementById('fileInput');
    const htmlInput = document.getElementById('htmlInput').value;
    let htmlContent;

    if (fileInput.files.length > 0) {
        const file = fileInput.files[0];
        const reader = new FileReader();
        reader.onload = function(event) {
            openPreviewTab(event.target.result);
        };
        reader.readAsText(file);
    } else if (htmlInput) {
        openPreviewTab(htmlInput);
    } else {
        alert("Please input HTML or select an HTML file to preview.");
    }
}

function openPreviewTab(content) {
    const previewWindow = window.open();
    previewWindow.document.write(content);
}

// Function to download the HTML as an Android or Windows app
function downloadApp(platform) {
    const fileInput = document.getElementById('fileInput');
    const htmlInput = document.getElementById('htmlInput').value;
    let htmlContent;

    if (fileInput.files.length > 0) {
        const file = fileInput.files[0];
        const reader = new FileReader();
        reader.onload = function(event) {
            htmlContent = event.target.result;
            initiateAppDownload(htmlContent, platform);
        };
        reader.readAsText(file);
    } else if (htmlInput) {
        htmlContent = htmlInput;
        initiateAppDownload(htmlContent, platform);
    } else {
        alert("Please input HTML or select an HTML file to download as an app.");
    }
}

function initiateAppDownload(htmlContent, platform) {
    const vgamesSlide = "<h1>VGAMES System Apps</h1>";
    const combinedContent = vgamesSlide + htmlContent;

    if (platform === 'android') {
        generateAndroidApp(combinedContent);
    } else if (platform === 'windows') {
        generateWindowsApp(combinedContent);
    }
}

function generateAndroidApp(htmlContent) {
    alert("Generating Android app...");
    // Add Android app generation logic
}

function generateWindowsApp(htmlContent) {
    alert("Generating Windows app...");
    // Add Windows app generation logic
}
