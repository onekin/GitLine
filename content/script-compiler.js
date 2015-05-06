var githubdeltas_gmCompiler={

// getUrlContents adapted from Greasemonkey Compiler
// http://www.letitblog.com/code/python/greasemonkey.py.txt
// used under GPL permission
//
// most everything else below based heavily off of Greasemonkey
// http://greasemonkey.devjavu.com/
// used under GPL permission


//////My scripts

create_dialog : function(elems){			
			
		
			//look for opaque layer
			//UI.opaque_layer.show(document);
		
			//if dialog already exists, change its content
		//alert(5);
			if(document.getElementById("prompt_wf")){
				main_div = document.getElementById("prompt_wf");
				main_div.innerHTML = "";
			}
		
			//else create div
			else{
				//alert(6);
				var main_div = document.createElement("div");
				//alert(61);
				main_div.setAttribute("id", "prompt_wf");
				//alert(62);
				main_div.setAttribute("style", "position: fixed; max-width: 1000px; z-index: 7000; left: 50%; margin-left: -200px; top: 100px; background: white url() bottom right no-repeat; padding: 27px; border: 10px solid white; border-radius: 5px; text-align: center;"
												+ "font-size: 12px;");
											
				//alert(63);
				//alert(document);
				//alert(document.contentDocument);
				document.contentDocument.body.appendChild(main_div);
				//alert(7);
			}
		
			for(var i = 0; i < elems.length; i++){
				main_div.appendChild(elems[i]);
				//alert(8);
			}
//alert(9);
			var div_width = document.getElementById("prompt_wf").offsetWidth;
			var margin_left = (parseInt(div_width)/2)*-1;
		
			document.getElementById("prompt_wf").style.marginLeft = margin_left+"px";
		//alert(10);
		},


	show_gitLine_splot_dialog_compiler : function(p){
			//show_gitLine_splot_dialog_compiler
		//	//alert(p);
			var iframedoc=p.contentDocument||p.contentWindow.document;
		//	//alert(iframedoc);
			
			var doneButton=iframedoc.getElementById("configuration-done-element");
			////alert(doneButton);
			if (doneButton=="undefined") {
				//alert("You are not done configuring");
				return null;
			}

			var i=0;
			var listOfSelectedFeatures=iframedoc.getElementsByClassName("selectedFeature");
			//alert(listOfSelectedFeatures);
			var coreAssetNames="undefined";
			for(i=0;i<listOfSelectedFeatures.length;i++){
				if (coreAssetNames=="undefined")
					coreAssetNames=listOfSelectedFeatures[i].innerHTML;
				else coreAssetNames+=" "+ listOfSelectedFeatures[i].innerHTML;
			}
			//alert(coreAssetNames);
			return coreAssetNames;
          	//alert(iframedoc.getElementsByClassName("selectedFeature")[0].innerHTML);
          	  
		},

getProfilePath: function(){

	var dsprops = Components.classes['@mozilla.org/file/directory_service;1'].getService(Components.interfaces.nsIProperties);
	var pp = dsprops.get("ProfD", Components.interfaces.nsIFile).path;
	return pp;
},


scxmlResolver: function(ns){
	if(ns=="scxml") 	return "http://www.w3.org/2005/07/scxml";
},

//EIG: readFileSelectedFeaturesLocal
readFileForExplanation: function(option){

	try{
	var file = Components.classes["@mozilla.org/file/local;1"].createInstance(Components.interfaces.nsILocalFile);
	var ProfilePath=githubdeltas_gmCompiler.getProfilePath();
	var osString = Components.classes["@mozilla.org/xre/app-info;1"].getService(Components.interfaces.nsIXULRuntime).OS;

	if(option==0){
		if(osString=="Darwin")
				theFilePath=ProfilePath + "/extensions/scxmlGitDelta@onekin.org/Fama/"+ "featuresToDeselect.txt";
		else if (osString=="WINNT")
				theFilePath=ProfilePath + "\\extensions\\scxmlGitDelta@onekin.org\\Fama\\"+"featuresToDeselect.txt";
	}

	if(option==1){
		if(osString=="Darwin")
				theFilePath=ProfilePath + "/extensions/scxmlGitDelta@onekin.org/Fama/"+ "proposedProductFile.txt";
		else if (osString=="WINNT")
				theFilePath=ProfilePath + "\\extensions\\scxmlGitDelta@onekin.org\\Fama\\"+"proposedProductFile.txt";
	}

	if(option==2){
		if(osString=="Darwin")
			theFilePath=ProfilePath + "/extensions/scxmlGitDelta@onekin.org/Fama/"+ "selectedFeaturesLocal.txt";
		else if (osString=="WINNT")
			theFilePath=ProfilePath + "\\extensions\\scxmlGitDelta@onekin.org\\Fama\\"+"selectedFeaturesLocal.txt";
	}

	if(option==3){
		if(osString=="Darwin")
			theFilePath=ProfilePath + "/extensions/scxmlGitDelta@onekin.org/Fama/"+ "featuresOnEvery.txt";
		else if (osString=="WINNT")
			theFilePath=ProfilePath + "\\extensions\\scxmlGitDelta@onekin.org\\Fama\\"+"featuresOnEvery.txt";
	}

	file.initWithPath( theFilePath );

	var data = "";
	var fstream = Components.classes["@mozilla.org/network/file-input-stream;1"].createInstance(Components.interfaces.nsIFileInputStream);
	var cstream = Components.classes["@mozilla.org/intl/converter-input-stream;1"].createInstance(Components.interfaces.nsIConverterInputStream);
	fstream.init(file, -1, 0, 0);
	cstream.init(fstream, "UTF-8", 0, 0); // you can use another encoding here if you wish
	
	let (str = {}) {
 		let read = 0;
  		do { 
    		read = cstream.readString(0xffffffff, str); // read as much as we can and put it in str.value
    		data += str.value;
    		//alert(data);
  		} while (read != 0);
	}
	
	var arrayOfFeatures = data.split(' ');
	//alert( option+'The array has ' + arrayOfFeatures.length + ' elements: ' + arrayOfFeatures.join(' / '));
	return arrayOfFeatures;

	}catch (err){
		//alert("ERROR in Running FeatureHouse composition!:"+err.message);
		//alert("Parameters: "+parameters);
	}
},

//EIG: readFileSelectedFeaturesLocal
readFileSelectedFeaturesLocal: function(){

	try{
	var file = Components.classes["@mozilla.org/file/local;1"].createInstance(Components.interfaces.nsILocalFile);
	var ProfilePath=githubdeltas_gmCompiler.getProfilePath();
	var osString = Components.classes["@mozilla.org/xre/app-info;1"].getService(Components.interfaces.nsIXULRuntime).OS;

	if(osString=="Darwin")
			theFilePath=ProfilePath + "/extensions/scxmlGitDelta@onekin.org/Fama/"+ "selectedFeaturesLocal.txt";
	else if (osString=="WINNT")
			theFilePath=ProfilePath + "\\extensions\\scxmlGitDelta@onekin.org\\Fama\\"+"selectedFeaturesLocal.txt";

	file.initWithPath( theFilePath );

	var data = "";
	var fstream = Components.classes["@mozilla.org/network/file-input-stream;1"].createInstance(Components.interfaces.nsIFileInputStream);
	var cstream = Components.classes["@mozilla.org/intl/converter-input-stream;1"].createInstance(Components.interfaces.nsIConverterInputStream);
	fstream.init(file, -1, 0, 0);
	cstream.init(fstream, "UTF-8", 0, 0); // you can use another encoding here if you wish

	let (str = {}) {
 		let read = 0;
  		do { 
    		read = cstream.readString(0xffffffff, str); // read as much as we can and put it in str.value
    		data += str.value;
    		//alert(data);
  		} while (read != 0);
	}
	
	var arrayOfFeatures = data.split(' ');
	//alert('The array has ' + arrayOfFeatures.length + ' elements: ' + arrayOfFeatures.join(' / '));
	return arrayOfFeatures;

	}catch (err){
	//	alert("ERROR in Running FeatureHouse composition!:"+err.message);
	//	alert("Parameters: "+parameters);
	}
},


//EIG: readFileIsValid
readFileIsValid: function(){

	try{
	var file = Components.classes["@mozilla.org/file/local;1"].createInstance(Components.interfaces.nsILocalFile);
	var ProfilePath=githubdeltas_gmCompiler.getProfilePath();
	var osString = Components.classes["@mozilla.org/xre/app-info;1"].getService(Components.interfaces.nsIXULRuntime).OS;

	if(osString=="Darwin")
			theFilePath=ProfilePath + "/extensions/scxmlGitDelta@onekin.org/Fama/"+ "isValid.txt";
	else if (osString=="WINNT")
			theFilePath=ProfilePath + "\\extensions\\scxmlGitDelta@onekin.org\\Fama\\"+"isValid.txt";

	file.initWithPath( theFilePath );

	var data = "";
	var fstream = Components.classes["@mozilla.org/network/file-input-stream;1"].createInstance(Components.interfaces.nsIFileInputStream);
	var cstream = Components.classes["@mozilla.org/intl/converter-input-stream;1"].createInstance(Components.interfaces.nsIConverterInputStream);
	fstream.init(file, -1, 0, 0);
	cstream.init(fstream, "UTF-8", 0, 0); // you can use another encoding here if you wish

	let (str = {}) {
 		let read = 0;
  		do { 
    		read = cstream.readString(0xffffffff, str); // read as much as we can and put it in str.value
    		data += str.value;
  		} while (read != 0);
	}
	return data;


	}catch (err){
		//alert("ERROR in Running FeatureHouse composition!:"+err.message);
		//alert("Parameters: "+parameters);
	}
},

runFHComposition: function(configFileContent){
 	//alert("run FH");

 	try{
		var file = Components.classes["@mozilla.org/file/local;1"].createInstance(Components.interfaces.nsILocalFile);
	    var ProfilePath=githubdeltas_gmCompiler.getProfilePath();
		var osString = Components.classes["@mozilla.org/xre/app-info;1"].getService(Components.interfaces.nsIXULRuntime).OS;  
		var theFilePath;
		

		//write the config file for FeatureHouse
		if(osString=="Darwin")
			theFilePath=ProfilePath + "/extensions/scxmlGitDelta@onekin.org/content/product/"+ "features.config";
		else if (osString=="WINNT")
			theFilePath=ProfilePath + "\\extensions\\scxmlGitDelta@onekin.org\\content\\product\\"+"features.config";


		file.initWithPath( theFilePath );
		if(file.exists() == false) //check to see if file exists
		{
		    file.create( Components.interfaces.nsIFile.NORMAL_FILE_TYPE, 420);
		}
		var foStream = Components.classes["@mozilla.org/network/file-output-stream;1"].createInstance(Components.interfaces.nsIFileOutputStream);
		
		foStream.init(file, 0x02 | 0x08 | 0x20, 0666, 0); 

		var converter = Components.classes["@mozilla.org/intl/converter-output-stream;1"].createInstance(Components.interfaces.nsIConverterOutputStream);
		converter.init(foStream, "UTF-8", 0, 0);
		converter.writeString(configFileContent);
		converter.close(); // this closes foStream
		
		var shell=Components.classes['@mozilla.org/file/local;1'].createInstance(Components.interfaces.nsILocalFile);
		var ProfilePath=githubdeltas_gmCompiler.getProfilePath();
		
		var fhHome,fhJar, configFile, productHome;
		var path;  
		//if mac
		if(osString == "Darwin"){ 
			path= "/extensions/scxmlGitDelta@onekin.org/content/scripts/fhComposition.sh"
			fhHome = ProfilePath+"/extensions/scxmlGitDelta@onekin.org/featureHouse";
			fhJar = ProfilePath+"/extensions/scxmlGitDelta@onekin.org/featureHouse/FeatureHouse.jar"; 
			configFile=ProfilePath+"/extensions/scxmlGitDelta@onekin.org/content/product/features.config";
			productHome= ProfilePath+"/extensions/scxmlGitDelta@onekin.org/content/product";
		}
		//if Windows	
		else if (osString == "WINNT"){         
			path="\\extensions\\scxmlGitDelta@onekin.org\\content\\scripts\\fhComposition.bat";
			fhHome = ProfilePath+"\\extensions\\scxmlGitDelta@onekin.org\\featureHouse";
			fhJar = ProfilePath+"\\extensions\\scxmlGitDelta@onekin.org\\featureHouse\\FeatureHouse.jar"; 
			configFile=ProfilePath+"\\extensions\\scxmlGitDelta@onekin.org\\content\\product\\features.config";
			productHome= ProfilePath+"\\extensions\\scxmlGitDelta@onekin.org\\content\\product";
			
		}
		//run process
		shell.initWithPath(ProfilePath+ path);
		var proc = Components.classes["@mozilla.org/process/util;1"].createInstance(Components.interfaces.nsIProcess);
		proc.init(shell);
		var parameters =[configFile, fhHome, fhJar,productHome];//project home
		//alert("Parameters "+parameters );
		proc.run(true, parameters, parameters.length);

	}catch (err){
		//alert("ERROR in Running FeatureHouse composition!:"+err.message);
		//alert("Parameters: "+parameters);
	}


},

//EIG: validProduct
insertFeature: function(parent, newFeature, option){
 	alert("in insertar");
 	//alert(option);
 	 try{


 	 	//EIG: call JAR
	    var ProfilePath=githubdeltas_gmCompiler.getProfilePath();
		var osString = Components.classes["@mozilla.org/xre/app-info;1"].getService(Components.interfaces.nsIXULRuntime).OS; 
		var shell=Components.classes['@mozilla.org/file/local;1'].createInstance(Components.interfaces.nsILocalFile);
		var ProfilePath=githubdeltas_gmCompiler.getProfilePath();
		var famaHome, famaJar, productFile, modelFile;
		var path;  
		if(option==0){
			//if mac
			if(osString == "Darwin"){ 
				path= "/extensions/scxmlGitDelta@onekin.org/Fama/famaMandatory.sh"
				famaHome=  ProfilePath+"/extensions/scxmlGitDelta@onekin.org/Fama";
			}
				//if Windows	
			else if (osString == "WINNT"){         
				path="\\extensions\\scxmlGitDelta@onekin.org\\Fama\\famaMandatory.bat";
				famaHome=  ProfilePath+"\\extensions\\scxmlGitDelta@onekin.org\\Fama";
			}
		}
		if(option==1){
			//if mac
			if(osString == "Darwin"){ 
				path= "/extensions/scxmlGitDelta@onekin.org/Fama/famaOptional.sh"
				famaHome=  ProfilePath+"/extensions/scxmlGitDelta@onekin.org/Fama";
			}
				//if Windows	
			else if (osString == "WINNT"){         
				path="\\extensions\\scxmlGitDelta@onekin.org\\Fama\\famaOptional.bat";
				famaHome=  ProfilePath+"\\extensions\\scxmlGitDelta@onekin.org\\Fama";
			}
		}
		if(option==2){
			//if mac
			alert("in option2");
			if(osString == "Darwin"){ 
				path= "/extensions/scxmlGitDelta@onekin.org/Fama/famaAlternative.sh"
				famaHome=  ProfilePath+"/extensions/scxmlGitDelta@onekin.org/Fama";
			}
				//if Windows	
			else if (osString == "WINNT"){         
				path="\\extensions\\scxmlGitDelta@onekin.org\\Fama\\famaAlternative.bat";
				famaHome=  ProfilePath+"\\extensions\\scxmlGitDelta@onekin.org\\Fama";
			}
		}


		shell.initWithPath(ProfilePath+ path);
		var proc = Components.classes["@mozilla.org/process/util;1"].createInstance(Components.interfaces.nsIProcess);
		proc.init(shell);
		var parameters= [famaHome, parent, newFeature]
		proc.run(true, parameters, parameters.length)

		//EIG: get content of modelLocalInsertChanbe
		var file = Components.classes["@mozilla.org/file/local;1"].createInstance(Components.interfaces.nsILocalFile);
		if(osString=="Darwin")
			theFilePath=ProfilePath + "/extensions/scxmlGitDelta@onekin.org/Fama/"+ "modelLocalInsertChange.xml";
		else if (osString=="WINNT")
			theFilePath=ProfilePath + "\\extensions\\scxmlGitDelta@onekin.org\\Fama\\"+"modelLocalInsertChange.xml";



		file.initWithPath( theFilePath );
		if(file.exists() == false) //check to see if file exists
		{


		    return 0;
		}else{

			alert("infileexist");
			var data = "";
			var fstream = Components.classes["@mozilla.org/network/file-input-stream;1"].createInstance(Components.interfaces.nsIFileInputStream);
			var cstream = Components.classes["@mozilla.org/intl/converter-input-stream;1"].createInstance(Components.interfaces.nsIConverterInputStream);
            fstream.init(file, -1, 0, 0);
			cstream.init(fstream, "UTF-8", 0, 0); // you can use another encoding here if you wish

			let (str = {}) {
  				let read = 0;
  				do { 
   					 read = cstream.readString(0xffffffff, str); // read as much as we can and put it in str.value
   					 data += str.value;
  				} while (read != 0);
			}
			cstream.close(); // this closes fstream

			alert(data);
			return data;
		}
	}catch (err){
		alert("ERROR in Running insertFeature!:"+err.message);
		alert("Parameters: "+parameters);
	}
},

//EIG: validProduct
validProduct: function(option){
 	//alert("run validProduct");
 	//console.log("validProduct barnean");
 	 
 	 try{
	    var ProfilePath=githubdeltas_gmCompiler.getProfilePath();
		var osString = Components.classes["@mozilla.org/xre/app-info;1"].getService(Components.interfaces.nsIXULRuntime).OS; 
		var shell=Components.classes['@mozilla.org/file/local;1'].createInstance(Components.interfaces.nsILocalFile);
		var ProfilePath=githubdeltas_gmCompiler.getProfilePath();
		var famaHome, famaJar, productFile, modelFile;
		var path;  

		if(option==1){
			//if mac
			if(osString == "Darwin"){ 
				path= "/extensions/scxmlGitDelta@onekin.org/content/scripts/famaCore.sh"
				famaHome=  ProfilePath+"/extensions/scxmlGitDelta@onekin.org/Fama";
				//famaJar=  ProfilePath+"/extensions/scxmlGitDelta@onekin.org/Fama/Balioztapena.jar";
				//productFile= ProfilePath+"/extensions/scxmlGitDelta@onekin.org/Fama/selectedFeaturesLocal.txt";
				//modelFile= ProfilePath+"/extensions/scxmlGitDelta@onekin.org/Fama/modelLocal.xml"
			}
			//if Windows	
			else if (osString == "WINNT"){         
				path="\\extensions\\scxmlGitDelta@onekin.org\\Fama\\famaCore.bat";
				famaHome=  ProfilePath+"\\extensions\\scxmlGitDelta@onekin.org\\Fama";
				//famaJar=  ProfilePath+"\\extensions\\scxmlGitDelta@onekin.org\\Fama\\Balioztapena.jar";
				//productFile= ProfilePath+"\\extensions\\scxmlGitDelta@onekin.org\\content\\selectedFeaturesLocal.txt";
				//modelFile= ProfilePath+"\\extensions\\scxmlGitDelta@onekin.org\\content\\modelLocal.xml"
				
			}
		}

		if(option==2){
			//if mac
			if(osString == "Darwin"){ 
				path= "/extensions/scxmlGitDelta@onekin.org/content/scripts/famaValid.sh"
				famaHome=  ProfilePath+"/extensions/scxmlGitDelta@onekin.org/Fama";
				famaJar=  ProfilePath+"/extensions/scxmlGitDelta@onekin.org/Fama/Balioztapena.jar";
				productFile= ProfilePath+"/extensions/scxmlGitDelta@onekin.org/Fama/selectedFeaturesLocal.txt";
				modelFile= ProfilePath+"/extensions/scxmlGitDelta@onekin.org/Fama/modelLocal.xml"
			}
			//if Windows	
			else if (osString == "WINNT"){         
				path="\\extensions\\scxmlGitDelta@onekin.org\\Fama\\famaValid.bat";
				famaHome=  ProfilePath+"\\extensions\\scxmlGitDelta@onekin.org\\Fama";
				//famaJar=  ProfilePath+"\\extensions\\scxmlGitDelta@onekin.org\\Fama\\Balioztapena.jar";
				//productFile= ProfilePath+"\\extensions\\scxmlGitDelta@onekin.org\\content\\selectedFeaturesLocal.txt";
				//modelFile= ProfilePath+"\\extensions\\scxmlGitDelta@onekin.org\\content\\modelLocal.xml"
				
			}
		}


		shell.initWithPath(ProfilePath+ path);
		var proc = Components.classes["@mozilla.org/process/util;1"].createInstance(Components.interfaces.nsIProcess);
		proc.init(shell);

		//var parameters =[configFile, fhHome, fhJar,productHome];//project home
		//var parameters= [famaJar, modelFile, productFile, famaHome]
		var parameters= [famaHome]
		//alert("Parameters "+parameters );
		proc.run(true, parameters, parameters.length)
		//alert("Exekuzioa amaitu da" );
	}catch (err){
		alert("ERROR in Running ValidProduct!:"+err.message);
		alert("Parameters: "+parameters);
	}
},

//EIG: saveSelectedFeatures
saveSelectedFeatures: function(checkedFeatures){
	//alert("in saveSelectedFeatures");
	try{
	var file = Components.classes["@mozilla.org/file/local;1"].createInstance(Components.interfaces.nsILocalFile);
	var ProfilePath=githubdeltas_gmCompiler.getProfilePath();
	var osString = Components.classes["@mozilla.org/xre/app-info;1"].getService(Components.interfaces.nsIXULRuntime).OS;  
	var theFilePath;

	if(osString=="Darwin")
			theFilePath=ProfilePath + "/extensions/scxmlGitDelta@onekin.org/Fama/"+ "selectedFeaturesLocal.txt";
	else if (osString=="WINNT")
			theFilePath=ProfilePath + "\\extensions\\scxmlGitDelta@onekin.org\\Fama\\"+"selectedFeaturesLocal.txt";
	
	file.initWithPath( theFilePath );
	if(file.exists() == false) //check to see if file exists
	{
	    file.create( Components.interfaces.nsIFile.NORMAL_FILE_TYPE, 420);
	}
	var foStream = Components.classes["@mozilla.org/network/file-output-stream;1"].createInstance(Components.interfaces.nsIFileOutputStream);
		
	foStream.init(file, 0x02 | 0x08 | 0x20, 0666, 0); 

	var converter = Components.classes["@mozilla.org/intl/converter-output-stream;1"].createInstance(Components.interfaces.nsIConverterOutputStream);
	converter.init(foStream, "UTF-8", 0, 0);
	converter.writeString(checkedFeatures);
	converter.close(); // this closes foStream
	}catch(e){
		window.alert("ERROR:"+e);
	}
},

//EIG: saveFeatureModel
saveFeatureModel: function(featureModel, option){
	//alert("in saveFeatureModel");
	try{
	var file = Components.classes["@mozilla.org/file/local;1"].createInstance(Components.interfaces.nsILocalFile);
	var ProfilePath=githubdeltas_gmCompiler.getProfilePath();
	var osString = Components.classes["@mozilla.org/xre/app-info;1"].getService(Components.interfaces.nsIXULRuntime).OS;  
	var theFilePath;

	if(option==1){
		if(osString=="Darwin")
				theFilePath=ProfilePath + "/extensions/scxmlGitDelta@onekin.org/Fama/"+ "modelLocal.xml";
		else if (osString=="WINNT")
				theFilePath=ProfilePath + "\\extensions\\scxmlGitDelta@onekin.org\\Fama\\"+"modelLocal.xml";
	}
	if(option==2){
		if(osString=="Darwin")
				theFilePath=ProfilePath + "/extensions/scxmlGitDelta@onekin.org/Fama/"+ "modelLocalInsert.xml";
		else if (osString=="WINNT")
				theFilePath=ProfilePath + "\\extensions\\scxmlGitDelta@onekin.org\\Fama\\"+"modelLocalInsert.xml";
	}
	file.initWithPath( theFilePath );
	if(file.exists() == false) //check to see if file exists
	{
	    file.create( Components.interfaces.nsIFile.NORMAL_FILE_TYPE, 420);
	}
	var foStream = Components.classes["@mozilla.org/network/file-output-stream;1"].createInstance(Components.interfaces.nsIFileOutputStream);
		
	foStream.init(file, 0x02 | 0x08 | 0x20, 0666, 0); 

	var converter = Components.classes["@mozilla.org/intl/converter-output-stream;1"].createInstance(Components.interfaces.nsIConverterOutputStream);
	converter.init(foStream, "UTF-8", 0, 0);
	converter.writeString(featureModel);
	converter.close(); // this closes foStream
	}catch(e){
		window.alert("ERROR:"+e);
	}
},

//EIG: add mandatory feature
addMandatoryFeature: function(featureModel, featurechange, featurename){
	//alert("in saveFeatureModel");
	alert(featurechange);
	alert(featurename);
	try{

	//save the model
	var file = Components.classes["@mozilla.org/file/local;1"].createInstance(Components.interfaces.nsILocalFile);
	var ProfilePath=githubdeltas_gmCompiler.getProfilePath();
	var osString = Components.classes["@mozilla.org/xre/app-info;1"].getService(Components.interfaces.nsIXULRuntime).OS;  
	var theFilePath;

	if(osString=="Darwin")
			theFilePath=ProfilePath + "/extensions/scxmlGitDelta@onekin.org/Fama/"+ "modelLocalInsert.xml";
	else if (osString=="WINNT")
			theFilePath=ProfilePath + "\\extensions\\scxmlGitDelta@onekin.org\\Fama\\"+"modelLocalInsert.xml";
	
	file.initWithPath( theFilePath );
	if(file.exists() == false) //check to see if file exists
	{
	    file.create( Components.interfaces.nsIFile.NORMAL_FILE_TYPE, 420);
	}
	var foStream = Components.classes["@mozilla.org/network/file-output-stream;1"].createInstance(Components.interfaces.nsIFileOutputStream);
		
	foStream.init(file, 0x02 | 0x08 | 0x20, 0666, 0); 

	var converter = Components.classes["@mozilla.org/intl/converter-output-stream;1"].createInstance(Components.interfaces.nsIConverterOutputStream);
	converter.init(foStream, "UTF-8", 0, 0);
	converter.writeString(featureModel);
	converter.close(); // this closes foStream

	//insert a new feature
	var parser = new DOMParser();
 	var xmlNodes = parser.parseFromString(featureModel, "application/xml");
	//path="//feature[@name] | //solitaryFeature/[@name] | //groupedFeature/[@name]"
	path="//feature[@name='"+featurechange+"'] | //solitaryFeature[@name='"+featurechange+"']| //groupedFeature[@name='"+featurechange+"']";
	var nodes=xmlNodes.evaluate(path, xmlNodes, null, XPathResult.ANY_TYPE, null);
	var result=nodes.iterateNext();
	while(result){

		if(result.hasAttributes){
			alert("Attribute name:"+result.getAttribute("name"));
			alert("Node name:"+result.nodeName);

			//binaryRelation element
			var binary = document.createElement("binaryRelation");
			var nameB= document.createAttribute("name");
			nameB.value="R-"+featurename;
			binary.setAttributeNode(nameB);
			alert(binary.getAttribute("name"));
			

			//cardinality element
			var card = document.createElement("cardinality");
			var max= document.createAttribute("max");
			max.value="1";
			var min= document.createAttribute("min");
			min.value="1";
			card.setAttributeNode(max);

			//solitaryFeature element
			var solitary= document.createElement("solitaryFeature");
			var nameS= document.createAttribute("name");
			nameS.value=featurename;
			solitary.setAttributeNode(nameS);
			//alert(solitary.getAttribute("name"));


			// umeak txertatu

			binary.appendChild(card);
			binary.appendChild(solitary);

			if ( binary.hasChildNodes() ) { 
  				alert( binary.childNodes[0].nodeName );
  				alert( binary.childNodes[1].nodeName );
			}

			if ( result.hasChildNodes() ) { 
  				alert( result.childNodes[0].nodeName );
  				alert( result.childNodes[1].nodeName );
  				result.removeChild(result.childNodes[1]);
  				
			}

			//result.appendChild(binary);
			//alert(card.getAttribute("max"));
			

		}
		result=nodes.iterateNext();
	}

	}catch(e){
		window.alert("ERROR:"+e);
	}
},


saveToDisk: function(fileContent,fileName,branchFolder){//saveToDisk(configFileContent,"features.config","config");
	
	//if(branchFolder=='config') alert("Config: FN:"+fileName+"    FC:"+fileContent+"   BF:"+branchFolder);
	
	try{
		var file = Components.classes["@mozilla.org/file/local;1"].createInstance(Components.interfaces.nsILocalFile);
	    var ProfilePath=githubdeltas_gmCompiler.getProfilePath();
		
	    var osString = Components.classes["@mozilla.org/xre/app-info;1"].getService(Components.interfaces.nsIXULRuntime).OS;  
	    var theFilePath;
	    if (osString=="Darwin")
	    	theFilePath=ProfilePath + "/extensions/scxmlGitDelta@onekin.org/content/product/"+ branchFolder+ "/" + fileName;
	    else if (osString=="WINNT"){
	    		theFilePath=ProfilePath + "\\extensions\\scxmlGitDelta@onekin.org\\content\\product\\"+branchFolder+ "\\"+fileName;
			theFilePath=theFilePath.replace(/\//g,"\\");
		//	window.alert("fileName "+theFilePath);
		}
	//window.alert("Saving file in "+theFilePath);
		file.initWithPath( theFilePath );
		if(file.exists() == false) //check to see if file exists
		{
		    file.create( Components.interfaces.nsIFile.NORMAL_FILE_TYPE, 420);
		}
		var foStream = Components.classes["@mozilla.org/network/file-output-stream;1"].createInstance(Components.interfaces.nsIFileOutputStream);
		
		foStream.init(file, 0x02 | 0x08 | 0x20, 0666, 0); 
		

		var converter = Components.classes["@mozilla.org/intl/converter-output-stream;1"].createInstance(Components.interfaces.nsIConverterOutputStream);
		converter.init(foStream, "UTF-8", 0, 0);
		converter.writeString(fileContent);
		converter.close(); // this closes foStream
	}catch(e){
		window.alert("ERROR:"+e);
	}
},

getLogFileContent:function(){
	 var osString = Components.classes["@mozilla.org/xre/app-info;1"].getService(Components.interfaces.nsIXULRuntime).OS;  
	 var logContent;

	 if(osString=="Darwin")
	 	logContent=githubdeltas_gmCompiler.readFilesFromLocal("content/product/log.txt");
	 else if (osString=="WINNT")
	 	logContent=githubdeltas_gmCompiler.readFilesFromLocal("content\\product\\log.txt");
	
	return logContent;
},
searchFilesInLocalFolder: function(pathToTheFolder,list){//"content/product/features"
	try{
		
		var ProfilePath=githubdeltas_gmCompiler.getProfilePath();
		var folderPath;


		var osString = Components.classes["@mozilla.org/xre/app-info;1"].getService(Components.interfaces.nsIXULRuntime).OS;
		if (osString=="Darwin"){
			folderPath=ProfilePath+'/extensions/scxmlGitDelta@onekin.org/'+pathToTheFolder;
		}
		else if (osString=="WINNT"){
			folderPath=ProfilePath+'\\extensions\\scxmlGitDelta@onekin.org\\'+pathToTheFolder;
		}

		var folder = Components.classes["@mozilla.org/file/local;1"].createInstance(Components.interfaces.nsILocalFile);
	     folder.initWithPath(folderPath);
	     var entries = folder.directoryEntries;
		 var array = [];
		 var i=0;
			while(entries.hasMoreElements()){
			  var entry = entries.getNext();
			  entry.QueryInterface(Components.interfaces.nsILocalFile);
			  if(entry.isDirectory()){//if it is a directory, keep on reading
			  	
				if (osString=="Darwin")
					githubdeltas_gmCompiler.searchFilesInLocalFolder(pathToTheFolder+"/"+entry.leafName, list);
				else (osString=="WINNT")
					githubdeltas_gmCompiler.searchFilesInLocalFolder(pathToTheFolder+"\\"+entry.leafName, list);
			  }else{
			  	array.push(entry);
			    var nativePath=array[i].path;
			    var relativePath;
			    if (osString=="Darwin")
			    	relativePath=(nativePath.split("features/"))[1];
			    else if (osString=="WINNT")
			    	relativePath=(nativePath.split("features\\"))[1];
			    list.push(relativePath);
			    i++;
			  }
			}
			return list;
	}catch(e){
		alert("error en searchFilesInLocalFolder: "+e);
		alert(pathToTheFolder);
		alert(list);
		return null;
	}
},
readFilesFromLocal: function (pathToFile){//content/product/features/fileName
	try{
			var file = Components.classes["@mozilla.org/file/local;1"].createInstance(Components.interfaces.nsILocalFile);
			
			var ProfilePath=githubdeltas_gmCompiler.getProfilePath();
			var completePath;

			var osString = Components.classes["@mozilla.org/xre/app-info;1"].getService(Components.interfaces.nsIXULRuntime).OS;
			if (osString=="Darwin")
				completePath=ProfilePath+'/extensions/scxmlGitDelta@onekin.org/'+pathToFile;
			else if (osString=="WINNT")
				completePath=ProfilePath+'\\extensions\\scxmlGitDelta@onekin.org\\'+pathToFile;
			
			file.initWithPath(completePath);
			
			 // console.log("after ini");
			  var istream = Components.classes["@mozilla.org/network/file-input-stream;1"].createInstance(Components.interfaces.nsIFileInputStream);  
			  istream.init(file, 0x01, 0444, 0);  
			  istream.QueryInterface(Components.interfaces.nsILineInputStream);  
		 
			 // read lines into array  
			 var line = {}, lines = [], hasmore, str=" ";  
			 do {  
			    hasmore = istream.readLine(line);  
			    lines.push(line.value);   
			    str+=line.value+"\n";
			  } while(hasmore);  
			  
			 istream.close();  
			// alert("File Content");
		 return str;//lines as string
	}catch (err){ 
		console.log("Error en readFilesFromLocal: "+err);
		
		}
},

cleanProjectFolder: function(){
	try{
		
		var shell=Components.classes['@mozilla.org/file/local;1'].createInstance(Components.interfaces.nsILocalFile);
		var ProfilePath=githubdeltas_gmCompiler.getProfilePath();
		var path;
		var projectHome;
		var osString = Components.classes["@mozilla.org/xre/app-info;1"].getService(Components.interfaces.nsIXULRuntime).OS;
			if (osString=="Darwin"){
				path="/extensions/scxmlGitDelta@onekin.org/content/scripts/cleanProjectFolder.sh";
				projectHome=ProfilePath+"/extensions/scxmlGitDelta@onekin.org/content/product";
			}
			else if(osString=="WINNT"){
				path="\\extensions\\scxmlGitDelta@onekin.org\\content\\scripts\\cleanProjectFolder.bat";
				projectHome=ProfilePath+"\\extensions\\scxmlGitDelta@onekin.org\\content\\product";
			}
		//alert(ProfilePath+path);
		shell.initWithPath(ProfilePath+path);
		
		
		var proc = Components.classes["@mozilla.org/process/util;1"].createInstance(Components.interfaces.nsIProcess);
		proc.init(shell);
		
		var parameters =[projectHome];//project home
		//alert("PARAMS: "+parameters);
		proc.run(true, parameters, parameters.length);
	}catch(err){
		alert("error erasing project folder "+err);
		alert("Parameters "+parameters);
	}

},



XHR: function(url,f,method,params){
 var xhr = new XMLHttpRequest();
alert("XHR");

 if(method=="DELETE"){
 //	window.console.log("method delete "+url+"   "+params);
 	xhr.open("DELETE", url, true);
 	if(params!=null){
 		alert(params);
       //  xhr.setRequestHeader("X-CSRF-Token",params);
       //  xhr.setRequestHeader("X-Requested-With","XMLHttpRequest");
        // xhr.setRequestHeader("Pragma","no-cache");
 	}
 }
 else{
	 		
	 		if((method=="POST") ||(method=="PUT")){ //it's a post
	 			alert("post");
	 			xhr.open(method,url,true);
	 			 xhr.setRequestHeader("Content-type", "application/json");
	 			
	 			 xhr.setRequestHeader("Accept","*/*");
	 			 xhr.setRequestHeader("Connection","keep-alive");
	
	 		}
		 	else{
		 		//alert(1111);
		 		xhr.open("GET", url, true);
		 		//alert(22);
		 		 //xhr.setRequestHeader("Pragma","no-cache");
		 		 //xhr.setRequestHeader("x-requested-with","XMLHttpRequest");
		 		 //xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded; charset=UTF-8");
		 		 //xhr.setRequestHeader("Accept","text/html, */*; q=0.01");
		 		 //xhr.setRequestHeader("Connection","keep-alive");
		 		
		 	}
	 		
	 		
 } 
 xhr.onload = function (e) {
 	//alert("onload");
  if (xhr.readyState === 4) {
    if (xhr.status === 200 || xhr.status === 201) {
        //debugger;
        f(xhr.responseText,xhr);//apply
    } else {
       //alert("error on XHR onload : "+xhr.status+"\n"+url+"\n"+params);
       //alert(xhr.statusText);
    }
  }
 };
/*  xhr.onreadystatechange = function() {
  if(this.readyState == 2) {
  	window.console.log("READYYYYYYYY!");
    window.console.log(xhr.getAllResponseHeaders());
  }
};*/
 xhr.onerror = function (e) {
     //debugger;
  f(null,xhr);
  //alert("XHR ONERROR for method "+ method+" url "+url+" and params" +params);
  //alert(e);
  //alert(xhr.statusText);
 };
 //alert(33377);
 //alert(params);
 xhr.send(params);     
//alert(33377);
},



callDiffChecker: function(unsafeContentWin, urlUrl,f, met,params){
	
	//window.alert(333);
	var details="expiry=day&left=sadadas&right=dasdasdasdas";
	//window.console.log(details);			    							
	
	XHR("https://diffchecker-api-production.herokuapp.com/diffs",function(res,err){//
	//	window.console.log(err);
	//	window.console.log(res);
		var urlExt="https://www.diffchecker.com/"+(res.split(",")[0].split(":")[1].split('"')[1]);
	//	window.open(urlExt);
	},"POST",details);

 },

//////End of my scripts

getUrlContents: function(aUrl){
	var	ioService=Components.classes["@mozilla.org/network/io-service;1"]
		.getService(Components.interfaces.nsIIOService);
	var	scriptableStream=Components
		.classes["@mozilla.org/scriptableinputstream;1"]
		.getService(Components.interfaces.nsIScriptableInputStream);
	var unicodeConverter=Components
		.classes["@mozilla.org/intl/scriptableunicodeconverter"]
		.createInstance(Components.interfaces.nsIScriptableUnicodeConverter);
	unicodeConverter.charset="UTF-8";

	var	channel=ioService.newChannel(aUrl, "UTF-8", null);
	var	input=channel.open();
	scriptableStream.init(input);
	var	str=scriptableStream.read(input.available());
	scriptableStream.close();
	input.close();

	try {
		return unicodeConverter.ConvertToUnicode(str);
	} catch (e) {
		return str;
	}
},

isGreasemonkeyable: function(url) {
	var scheme=Components.classes["@mozilla.org/network/io-service;1"]
		.getService(Components.interfaces.nsIIOService)
		.extractScheme(url);
		//alert((scheme == "http" || scheme == "https" || scheme == "file") );
	return (
		(scheme == "http" || scheme == "https" || scheme == "file") 
		// && !/hiddenWindow\.html$/.test(url)
	);
},

contentLoad: function(e) { //pages github.com and http://gsd.uwaterloo.ca:8088/SPLOT/SplotConfigurationServlet?action=
	var unsafeWin=e.target.defaultView;
	if (unsafeWin.wrappedJSObject) unsafeWin=unsafeWin.wrappedJSObject;

	var unsafeLoc=new XPCNativeWrapper(unsafeWin,"location").location;
	var href=new XPCNativeWrapper(unsafeLoc, "href").href;

	if (
		githubdeltas_gmCompiler.isGreasemonkeyable(href)
		&& ( (/^https:\/\/github\.com\/.*$/i.test(href)) || (href.contains('http://gsd.uwaterloo.ca:8088/SPLOT/SplotConfigurationServlet?action')) ) 
		&& true
	) {
	//	alert("git: "+(/^https:\/\/github\.com\/.*$/i.test(href)));
	//	alert("waterloo: "+ href.contains('http://gsd.uwaterloo.ca:8088/SPLOT/SplotConfigurationServlet?action'));
		var script=githubdeltas_gmCompiler.getUrlContents('chrome://scxmlGitDelta/content/githubdeltas.js');
		//var script2=githubdeltas_gmCompiler.getUrlContents('chrome://scxmlGitDelta/content/gh3.js');
		
		
		//githubdeltas_gmCompiler.injectScript(script2, href, unsafeWin);
		githubdeltas_gmCompiler.injectScript(script, href, unsafeWin);
	}
	//else alert(href + "\nnot greaseamonleable ");
},

injectScript: function(script, url, unsafeContentWin) {
	var sandbox, script, logger, storage, xmlhttpRequester;
	var safeWin=new XPCNativeWrapper(unsafeContentWin);

	sandbox=new Components.utils.Sandbox(safeWin);//set here api.github.com

	var storage=new githubdeltas_ScriptStorage();
	xmlhttpRequester=new githubdeltas_xmlhttpRequester(
		unsafeContentWin, window//appSvc.hiddenDOMWindow
	);

	sandbox.window=safeWin;
	sandbox.document=sandbox.window.document;
	sandbox.unsafeWindow=unsafeContentWin;

	// patch missing properties on xpcnw
	sandbox.XPathResult=Components.interfaces.nsIDOMXPathResult;

	// add our own APIs
	sandbox.GM_addStyle=function(css) { githubdeltas_gmCompiler.addStyle(sandbox.document, css) };
	sandbox.GM_setValue=githubdeltas_gmCompiler.hitch(storage, "setValue");
	sandbox.GM_getValue=githubdeltas_gmCompiler.hitch(storage, "getValue");
	
	//mi variable para la composicion con FeatureHouse
	sandbox.RunFHComposition=githubdeltas_gmCompiler.hitch(this, "runFHComposition");
	
	//mi variable para descargarme los archivos de los branches
	sandbox.SaveToDisk=githubdeltas_gmCompiler.hitch(this, "saveToDisk");
	
	//mi variable para validar producto
	sandbox.validProduct=githubdeltas_gmCompiler.hitch(this, "validProduct");


	//mi variable para insertar feature
	sandbox.insertFeature=githubdeltas_gmCompiler.hitch(this, "insertFeature");

	//mi variable para guardar las "features" seleccionadas
	sandbox.saveSelectedFeatures=githubdeltas_gmCompiler.hitch(this, "saveSelectedFeatures");

	//mi variable para guardar el "model"
	sandbox.saveFeatureModel=githubdeltas_gmCompiler.hitch(this, "saveFeatureModel");

	//mi variable para leer isValid.txt
	sandbox.readFileIsValid=githubdeltas_gmCompiler.hitch(this, "readFileIsValid");

	//mi variable para leer selectedFeatures.txt
	sandbox.readFileSelectedFeaturesLocal=githubdeltas_gmCompiler.hitch(this, "readFileSelectedFeaturesLocal");

	//mi variable para leer proposedProductFile.txt y featuresToDeselect.txt
	sandbox.readFileForExplanation=githubdeltas_gmCompiler.hitch(this, "readFileForExplanation");
	
	
	sandbox.callDiffChecker=githubdeltas_gmCompiler.hitch(this, "callDiffChecker");

	//mi variable para leer proposedProductFile.txt y featuresToDeselect.txt
	sandbox.addMandatoryFeature=githubdeltas_gmCompiler.hitch(this, "addMandatoryFeature");

	//clean project folder
	sandbox.CleanProjectFolder=githubdeltas_gmCompiler.hitch(this, "cleanProjectFolder");
	//get Log 
	sandbox.GetLogFileContent=githubdeltas_gmCompiler.hitch(this, "getLogFileContent");

	sandbox.SearchFilesInLocalFolder=githubdeltas_gmCompiler.hitch(this, "searchFilesInLocalFolder");
	sandbox.ReadFilesFromLocal=githubdeltas_gmCompiler.hitch(this, "readFilesFromLocal");

	sandbox.show_gitLine_splot_dialog_compiler=githubdeltas_gmCompiler.hitch(this, "show_gitLine_splot_dialog_compiler");
	

	sandbox.XHR=githubdeltas_gmCompiler.hitch(this, "XHR");
	

	sandbox.GM_openInTab=githubdeltas_gmCompiler.hitch(this, "openInTab", unsafeContentWin);
	sandbox.GM_xmlhttpRequest=githubdeltas_gmCompiler.hitch(
		xmlhttpRequester, "contentStartRequest"
	);



	//unsupported
	sandbox.GM_registerMenuCommand=function(){};
	sandbox.GM_log=function(){};
	sandbox.GM_getResourceURL=function(){};
	sandbox.GM_getResourceText=function(){};

	sandbox.__proto__=sandbox.window;

	try {
		this.evalInSandbox(
			"(function(){"+script+"})()",
			url,
			sandbox);
	} catch (e) {
		var e2=new Error(typeof e=="string" ? e : e.message);
		e2.fileName=script.filename;
		e2.lineNumber=0;
		//GM_logError(e2);
		//console.log(e2);
	}
},

evalInSandbox: function(code, codebase, sandbox) {
	if (Components.utils && Components.utils.Sandbox) {
		// DP beta+
		Components.utils.evalInSandbox(code, sandbox);
	} else if (Components.utils && Components.utils.evalInSandbox) {
		// DP alphas
		Components.utils.evalInSandbox(code, codebase, sandbox);
	} else if (Sandbox) {
		// 1.0.x
		evalInSandbox(code, sandbox, codebase);
	} else {
		throw new Error("Could not create sandbox.");
	}
},

openInTab: function(unsafeContentWin, url) {
	var tabBrowser = getBrowser(), browser, isMyWindow = false;
	for (var i = 0; browser = tabBrowser.browsers[i]; i++)
		if (browser.contentWindow == unsafeContentWin) {
			isMyWindow = true;
			break;
		}
	if (!isMyWindow) return;
 
	var loadInBackground, sendReferrer, referrer = null;
	loadInBackground = tabBrowser.mPrefs.getBoolPref("browser.tabs.loadInBackground");
	sendReferrer = tabBrowser.mPrefs.getIntPref("network.http.sendRefererHeader");
	if (sendReferrer) {
		var ios = Components.classes["@mozilla.org/network/io-service;1"]
							.getService(Components.interfaces.nsIIOService);
		referrer = ios.newURI(content.document.location.href, null, null);
	 }
	 tabBrowser.loadOneTab(url, referrer, null, null, loadInBackground);
 },
 
 hitch: function(obj, meth) {
	var unsafeTop = new XPCNativeWrapper(unsafeContentWin, "top").top;

	for (var i = 0; i < this.browserWindows.length; i++) {
		this.browserWindows[i].openInTab(unsafeTop, url);
	}
},

apiLeakCheck: function(allowedCaller) {
	var stack=Components.stack;

	var leaked=false;
	do {
		if (2==stack.language) {
			if ('chrome'!=stack.filename.substr(0, 6) &&
				allowedCaller!=stack.filename 
			) {
				leaked=true;
				break;
			}
		}

		stack=stack.caller;
	} while (stack);

	return leaked;
},

hitch: function(obj, meth) {
	if (!obj[meth]) {
		throw "method '" + meth + "' does not exist on object '" + obj + "'";
	}

	var hitchCaller=Components.stack.caller.filename;
	var staticArgs = Array.prototype.splice.call(arguments, 2, arguments.length);

	return function() {
		if (githubdeltas_gmCompiler.apiLeakCheck(hitchCaller)) {
			return;
		}
		
		// make a copy of staticArgs (don't modify it because it gets reused for
		// every invocation).
		var args = staticArgs.concat();

		// add all the new arguments
		for (var i = 0; i < arguments.length; i++) {
			args.push(arguments[i]);
		}

		// invoke the original function with the correct this obj and the combined
		// list of static and dynamic arguments.
		return obj[meth].apply(obj, args);
	};
},

addStyle:function(doc, css) {
	var head, style;
	head = doc.getElementsByTagName('head')[0];
	if (!head) { return; }
	style = doc.createElement('style');
	style.type = 'text/css';
	style.innerHTML = css;
	head.appendChild(style);
},

onLoad: function() {
	var	appcontent=window.document.getElementById("appcontent");
	if (appcontent && !appcontent.greased_githubdeltas_gmCompiler) {
		appcontent.greased_githubdeltas_gmCompiler=true;
		appcontent.addEventListener("DOMContentLoaded", githubdeltas_gmCompiler.contentLoad, false);
	}
},

onUnLoad: function() {
	//remove now unnecessary listeners
	window.removeEventListener('load', githubdeltas_gmCompiler.onLoad, false);
	window.removeEventListener('unload', githubdeltas_gmCompiler.onUnLoad, false);
	window.document.getElementById("appcontent")
		.removeEventListener("DOMContentLoaded", githubdeltas_gmCompiler.contentLoad, false);
},

}; //object githubdeltas_gmCompiler


function githubdeltas_ScriptStorage() {
	this.prefMan=new githubdeltas_PrefManager();
}
githubdeltas_ScriptStorage.prototype.setValue = function(name, val) {
	this.prefMan.setValue(name, val);
}
githubdeltas_ScriptStorage.prototype.getValue = function(name, defVal) {
	return this.prefMan.getValue(name, defVal);
}


window.addEventListener('load', githubdeltas_gmCompiler.onLoad, false);
window.addEventListener('unload', githubdeltas_gmCompiler.onUnLoad, false);