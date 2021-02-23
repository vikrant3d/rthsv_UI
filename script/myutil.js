var validation = {
    isEmailAddress:function(str) {
        var pattern =/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        return pattern.test(str);  // returns a boolean
    },
    isNotEmpty:function (str) {
        var pattern =/\S+/;
        return pattern.test(str);  // returns a boolean
    },
    isNumber:function(str) {
        var pattern = /^\d+$/;
        return pattern.test(str);  // returns a boolean
    },
	isDecimal:function(str) {
        var pattern = /^\d+(\.\d{1,2})?$/;
        return pattern.test(str);  // returns a boolean
    },
    isSame:function(str1,str2){
        return str1 === str2;
    },
    isCharacter:function(str){
        var pattern = /^[a-zA-Z]+$/;
        return pattern.test(str);
    }
};

var pdfFileVal = "";
function convertToBase64(obj) {
        //Read File
        var selectedFile = obj.files;
        //Check File is not Empty
        if (selectedFile.length > 0) {
            // Select the very first file from list
            var fileToLoad = selectedFile[0];
            // FileReader function for read the file.
            var fileReader = new FileReader();
            var base64;
            // Onload of file read the file content
            fileReader.onload = function(fileLoadedEvent) {
                base64 = fileLoadedEvent.target.result;
                // Print data in console
                pdfFileVal = base64;
            };
            // Convert data to base64
            fileReader.readAsDataURL(fileToLoad);
        }
    }

function checkValidDateFormat(d){
	return !(d.length==19 && d.split("/").length == 3 && d.split(":").length == 2 && d.split(" ").length == 3 && (d.indexOf("AM")!= -1 || d.indexOf("PM")!= -1));
}

var prevIndex = -1; 
var sortState = 'N'; 
function sortTableDetails(obj){
	var position = $(obj).parent().index();
	var table, rows, switching, i, x, y, shouldSwitch;
	var tableName =  table = $(obj).parent().parent().parent().parent().attr("id");
	table = document.getElementById(tableName);
	switching = true;
		while (switching) {
		switching = false;
		rows = table.getElementsByTagName("TR");   
		for (i = 1; i < (rows.length - 1); i++) {     
			shouldSwitch = false;      
			x = rows[i].getElementsByTagName("TD")[position];
			y = rows[i + 1].getElementsByTagName("TD")[position]; 
			var sortdataType = 'string';
			if(rows[i].getElementsByTagName("TD")[position].getAttribute("data-type") == 'number' && rows[i + 1].getElementsByTagName("TD")[position].getAttribute("data-type") == 'number'){
				sortdataType = 'number';
			}     
			if( prevIndex != position){
				sortState = 'N';
			}     
			if( prevIndex == position && sortState == 'Y'){
			if(sortdataType == 'string'){
			if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {     
				shouldSwitch= true;
				break;
			}  	    
			}else{
				if (parseInt(x.innerHTML) < parseInt(y.innerHTML)) {     
					shouldSwitch= true;
					break;
				} 
			}
			}else{      
			if(sortdataType == 'string'){
			if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {     
				shouldSwitch= true;
				break;
			}
			}else{
					if (parseInt(x.innerHTML) > parseInt(y.innerHTML)) {     
						shouldSwitch= true;
						break;
					}
				} 
			}
		}
		if (shouldSwitch) {     
		rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
		switching = true;
		}   
	}
	sortState = sortState == 'Y' ? 'N' : 'Y'; 
	prevIndex = position;
}

function getFormData($form){
    var unindexed_array = $form.serializeArray();
    var indexed_array = {};

    $.map(unindexed_array, function(n, i){
        indexed_array[n['name']] = n['value'];
    });

    return indexed_array;
}