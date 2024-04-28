

function initializeUpload() {
    // Front ID Card Upload Logic
    function ekUploadFront() {
        function InitFront() {
            var fileSelectFront = document.getElementById('file-upload-front'),
                fileDragFront = document.getElementById('file-drag-front');

            fileSelectFront.addEventListener('change', fileSelectHandlerFront, false);

            var xhrFront = new XMLHttpRequest();
            if (xhrFront.upload) {
                fileDragFront.addEventListener('dragover', fileDragHoverFront, false);
                fileDragFront.addEventListener('dragleave', fileDragHoverFront, false);
                fileDragFront.addEventListener('drop', fileSelectHandlerFront, false);
            }
        }

        function fileDragHoverFront(e) {
            var fileDragFront = document.getElementById('file-drag-front');
            e.stopPropagation();
            e.preventDefault();
            fileDragFront.className = (e.type === 'dragover' ? 'hover' : 'modal-body file-upload');
        }

        function fileSelectHandlerFront(e) {
            var filesFront = e.target.files || e.dataTransfer.files;
            fileDragHoverFront(e);

            for (var i = 0, f; f = filesFront[i]; i++) {
                parseFileFront(f);
                uploadFileFront(f);
            }
        }

        function parseFileFront(file) {
            var imageNameFront = file.name;
            var isGoodFront = (/\.(?=gif|jpg|png|jpeg)/gi).test(imageNameFront);

            if (isGoodFront) {
                document.getElementById('start-front').classList.add("hidden");
                document.getElementById('response-front').classList.remove("hidden");
                document.getElementById('notimage-front').classList.add("hidden");
                document.getElementById('file-image-front').classList.remove("hidden");
                document.getElementById('file-image-front').src = URL.createObjectURL(file);
            } else {
                document.getElementById('file-image-front').classList.add("hidden");
                document.getElementById('notimage-front').classList.remove("hidden");
                document.getElementById('start-front').classList.remove("hidden");
                document.getElementById('response-front').classList.add("hidden");
                document.getElementById("file-upload-form-front").reset();
            }
        }

        function uploadFileFront(file) {
            var xhrFront = new XMLHttpRequest();
            var pBarFront = document.getElementById('file-progress-front');
            var fileSizeLimitFront = 1024; // In MB

            if (xhrFront.upload) {
                if (file.size <= fileSizeLimitFront * 1024 * 1024) {
                    pBarFront.style.display = 'inline';
                    xhrFront.upload.addEventListener('loadstart', setProgressMaxValueFront, false);
                    xhrFront.upload.addEventListener('progress', updateFileProgressFront, false);

                    xhrFront.onreadystatechange = function (e) {
                        if (xhrFront.readyState == 4) {
                            // Upload completed
                        }
                    };

                    xhrFront.open('POST', document.getElementById('file-upload-form-front').action, true);
                    xhrFront.setRequestHeader('X-File-Name', file.name);
                    xhrFront.setRequestHeader('X-File-Size', file.size);
                    xhrFront.setRequestHeader('Content-Type', 'multipart/form-data');
                    xhrFront.send(file);
                } else {
                    outputFront('Please upload a smaller file (< ' + fileSizeLimitFront + ' MB).');
                }
            }
        }

        function setProgressMaxValueFront(e) {
            var pBarFront = document.getElementById('file-progress-front');
            if (e.lengthComputable) {
                pBarFront.max = e.total;
            }
        }

        function updateFileProgressFront(e) {
            var pBarFront = document.getElementById('file-progress-front');
            if (e.lengthComputable) {
                pBarFront.value = e.loaded;
            }
        }

        InitFront();
    }

    // Back ID Card Upload Logic
    function ekUploadBack() {
        function InitBack() {
            var fileSelectBack = document.getElementById('file-upload-back'),
                fileDragBack = document.getElementById('file-drag-back');
    
            fileSelectBack.addEventListener('change', fileSelectHandlerBack, false);
    
            var xhrBack = new XMLHttpRequest();
            if (xhrBack.upload) {
                fileDragBack.addEventListener('dragover', fileDragHoverBack, false);
                fileDragBack.addEventListener('dragleave', fileDragHoverBack, false);
                fileDragBack.addEventListener('drop', fileSelectHandlerBack, false);
            }
        }
    
        function fileDragHoverBack(e) {
            var fileDragBack = document.getElementById('file-drag-back');
            e.stopPropagation();
            e.preventDefault();
            fileDragBack.className = (e.type === 'dragover' ? 'hover' : 'modal-body file-upload');
        }
    
        function fileSelectHandlerBack(e) {
            var filesBack = e.target.files || e.dataTransfer.files;
            fileDragHoverBack(e);
    
            for (var i = 0, f; f = filesBack[i]; i++) {
                parseFileBack(f);
                uploadFileBack(f);
            }
        }
    
        function parseFileBack(file) {
            var imageNameBack = file.name;
            var isGoodBack = (/\.(?=gif|jpg|png|jpeg)/gi).test(imageNameBack);
    
            if (isGoodBack) {
                document.getElementById('start-back').classList.add("hidden");
                document.getElementById('response-back').classList.remove("hidden");
                document.getElementById('notimage-back').classList.add("hidden");
                document.getElementById('file-image-back').classList.remove("hidden");
                document.getElementById('file-image-back').src = URL.createObjectURL(file);
            } else {
                document.getElementById('file-image-back').classList.add("hidden");
                document.getElementById('notimage-back').classList.remove("hidden");
                document.getElementById('start-back').classList.remove("hidden");
                document.getElementById('response-back').classList.add("hidden");
                document.getElementById("file-upload-form-back").reset();
            }
        }
    
        function uploadFileBack(file) {
            var xhrBack = new XMLHttpRequest();
            var pBarBack = document.getElementById('file-progress-back');
            var fileSizeLimitBack = 1024; // In MB
    
            if (xhrBack.upload) {
                if (file.size <= fileSizeLimitBack * 1024 * 1024) {
                    pBarBack.style.display = 'inline';
                    xhrBack.upload.addEventListener('loadstart', setProgressMaxValueBack, false);
                    xhrBack.upload.addEventListener('progress', updateFileProgressBack, false);
    
                    xhrBack.onreadystatechange = function(e) {
                        if (xhrBack.readyState == 4) {
                            // Upload completed
                        }
                    };
    
                    xhrBack.open('POST', document.getElementById('file-upload-form-back').action, true);
                    xhrBack.setRequestHeader('X-File-Name', file.name);
                    xhrBack.setRequestHeader('X-File-Size', file.size);
                    xhrBack.setRequestHeader('Content-Type', 'multipart/form-data');
                    xhrBack.send(file);
                } else {
                    outputBack('Please upload a smaller file (< ' + fileSizeLimitBack + ' MB).');
                }
            }
        }
    
        function setProgressMaxValueBack(e) {
            var pBarBack = document.getElementById('file-progress-back');
            if (e.lengthComputable) {
                pBarBack.max = e.total;
            }
        }
    
        function updateFileProgressBack(e) {
            var pBarBack = document.getElementById('file-progress-back');
            if (e.lengthComputable) {
                pBarBack.value = e.loaded;
            }
        }
    
        InitBack();
    }
    

    // Call the upload functions for front and back ID cards
    ekUploadFront();
    ekUploadBack();
}

// Check for the various File API support
if (window.File && window.FileList && window.FileReader) {
    initializeUpload();
} else {
    // Handle browsers that do not support File API
    document.getElementById('file-drag-front').style.display = 'none';
    document.getElementById('file-drag-back').style.display = 'none';
}
