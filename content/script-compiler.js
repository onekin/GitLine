var githubdeltas_gmCompiler={

// getUrlContents adapted from Greasemonkey Compiler
// http://www.letitblog.com/code/python/greasemonkey.py.txt
// used under GPL permission
//
// most everything else below based heavily off of Greasemonkey
// http://greasemonkey.devjavu.com/
// used under GPL permission


//////My scripts



getProfilePath: function(){

	var dsprops = Components.classes['@mozilla.org/file/directory_service;1'].getService(Components.interfaces.nsIProperties);
	var pp = dsprops.get("ProfD", Components.interfaces.nsIFile).path;
	return pp;
},


scxmlResolver: function(ns){
	if(ns=="scxml") 	return "http://www.w3.org/2005/07/scxml";
},





runFHComposition: function(configFileContent){
 	//alert("run FH");

 	try{
		var file = Components.classes["@mozilla.org/file/local;1"].createInstance(Components.interfaces.nsILocalFile);
	    var ProfilePath=githubdeltas_gmCompiler.getProfilePath();
		var theFilePath=ProfilePath + "/extensions/scxmlGitDelta@onekin.org/content/product/"+ "features.config";

		//write the config file for FeatureHouse
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
		shell.initWithPath(ProfilePath+ "/extensions/scxmlGitDelta@onekin.org/content/scripts/fhComposition.sh");
		
		var proc = Components.classes["@mozilla.org/process/util;1"].createInstance(Components.interfaces.nsIProcess);
		proc.init(shell);
		//var productHome= ProfilePath+"/extensions/scxmlGitDelta@onekin.org/content/product";
		var fhHome = ProfilePath+"/extensions/scxmlGitDelta@onekin.org/featureHouse";
		var fhJar = ProfilePath+"/extensions/scxmlGitDelta@onekin.org/featureHouse/FeatureHouse.jar"; 
		var configFile=ProfilePath+"/extensions/scxmlGitDelta@onekin.org/content/product/features.config";
		//var configPath=ProfilePath+"/extensions/scxmlGitDelta@onekin.org/content/product";

		var parameters =[configFile, fhHome, fhJar];//project home
		//alert (parameters);
		proc.run(true, parameters, parameters.length);
		//alert ("Product Composed!");
		
	}catch (err){
		alert("ERROR in Running FeatureHouse composition!:"+err.message);
		}


},


downloadBranch: function(user, repo, branch){

	try{
		alert("download brach");

		var shell=Components.classes['@mozilla.org/file/local;1'].createInstance(Components.interfaces.nsILocalFile);
		var ProfilePath=githubdeltas_gmCompiler.getProfilePath();
		shell.initWithPath(ProfilePath+ "/extensions/scxmlGitDelta@onekin.org/content/files/downloadBranch.sh");
		
		var proc = Components.classes["@mozilla.org/process/util;1"].createInstance(Components.interfaces.nsIProcess);
		proc.init(shell);

	//	var zipFile= ProfilePath+"/extensions/scxmlGitDelta@onekin.org/content/files/"+branch+".zip";		
		var downloadURL="https://github.com/"+user+"/"+repo+"/archive/"+branch+".zip";

		//"Users/Onekin/Library/Application Support/Firefox/Profiles/7kabk0a2.default/extensions/scxmlGitDelta@onekin.org/log.txt"
		var zipFilePath=ProfilePath+"/extensions/scxmlGitDelta@onekin.org/content/files";		
		var zipFileName=branch+".zip";
		var parameters =[zipFilePath,zipFileName, downloadURL];// [zipFile, downloadURL];
		alert(parameters);

		proc.run(true, parameters, parameters.length);
		alert(proc.isRunning);//false
		alert(proc.exitValue);//127
		
	}catch (err){
		console.log("ERROR:"+err.message);
		alert("ERROR callShellScript!:"+err.message);
	}

},



checkExistsTargetAsState: function(arrayStates, arrayTargets){
	for (var i=0;i<arrayTargets.length;i++){
		var target=arrayTargets[i];
		var find=false;
		for (var j=0;j<arrayStates.length;j++){
			var stateId=arrayStates[j];
			if (target==stateId){
				find=true;
			}
		}
		if (find==false) return false;
	}
	return true;
},

checkDuplicateStateId: function(arrayStates){
	for (var i=0;i<arrayStates.length;i++){
		var stateIdi=arrayStates[i];
		for (var j=0;j<arrayStates.length;j++){
			if (j!=i){
				var stateIdj=arrayStates[j];
				if (stateIdi==stateIdj) return false;
			}
		}
	}
	return true;
},

FileValidation: function (file,name){

	var arrayStates=[];
	var numStates=0;
	var parser=new DOMParser();	 
	var xmlDoc=parser.parseFromString(file,"text/xml");

	if(xmlDoc.documentElement.nodeName == "parsererror"){
		alert("error while parsing file"+ name); 
		return false; 
	}

	var nodes=xmlDoc.evaluate("//scxml:state",xmlDoc, githubdeltas_gmCompiler.scxmlResolver,6, null); 
	for(var i=0;i<nodes.snapshotLength;i++){
		var node=nodes.snapshotItem(i);
		var id=node.getAttribute("id");
		//check ids
	}
	
	if ( githubdeltas_gmCompiler.checkDuplicateStateId(arrayStates)==false){
		alert("Duplicate states exist!!!!");
		return false;
	}
	var arrayTargets=[];
	var numTargets=0;													//result type 6 is UNORDERED_NODE_SNAPSHOT_TYPE
	var nodes=xmlDoc.evaluate("//scxml:state//scxml:transition",xmlDoc,githubdeltas_gmCompiler.scxmlResolver,6, null); 
	for(var i=0;i<nodes.snapshotLength;i++){
		//validations for the nodes
	}	
	return true;
},






runComposition: function (deltaString, baseScript){   
	try{
		
		console.log("Hola Leti.Estas en runComposition");
	//	alert("holaaaaa");
		var ProfilePath=githubdeltas_gmCompiler.getProfilePath();
		var pathToFiles=ProfilePath+ '/extensions/scxmlGitDelta@onekin.org/content/files/';
	//	alert("path to files: "+pathToFiles);
		githubdeltas_gmCompiler.writeToDisk(deltaString, pathToFiles+"delta.xml"); //write delta to disk
		githubdeltas_gmCompiler.writeToDisk(baseScript, pathToFiles+"base.xml" ); //write base to disk
		
		console.log("paso call Shell");
		
		githubdeltas_gmCompiler.callShellScript();

		console.log("readFrom file");
		var xmlCode=githubdeltas_gmCompiler.readFromFile();
		
		console.log("Composition is done! XMLCode is:\n"+xmlCode);

		//alert(xmlCode);
		return xmlCode;
		
  }catch(err){
		console.log(err.message);
		alert("ERROR runComposition!:"+err.message);
	}

 },

callShellScript: function(){
	try{
		//console.log("In call shell script");
		var shell=Components.classes['@mozilla.org/file/local;1'].createInstance(Components.interfaces.nsILocalFile);
		var ProfilePath=githubdeltas_gmCompiler.getProfilePath();
		shell.initWithPath(ProfilePath+ "/extensions/scxmlGitDelta@onekin.org/content/files/ComposerMac.sh");
		//console.log ("Shell: "+shell);
		
		var proc = Components.classes["@mozilla.org/process/util;1"].createInstance(Components.interfaces.nsIProcess);
		proc.init(shell);

		var projectHome= ProfilePath+"/extensions/scxmlGitDelta@onekin.org/content/files";
		var xakHome = ProfilePath+"/extensions/scxmlGitDelta@onekin.org/xak";
		var xakJar = ProfilePath+"/extensions/scxmlGitDelta@onekin.org/xak/lib/xak.jar"; 
		
		var parameters =[xakHome, xakJar, projectHome];//project home
		
		proc.run(true, parameters, parameters.length);
		
		
	
	}catch (err){
		console.log("ERROR:"+err.message);
		alert("ERROR callShellScript!:"+err.message);
		}

},


saveToDisk: function(fileContent,fileName,branchFolder){//saveToDisk(configFileContent,"features.config","config");
	
	//if(branchFolder=='config') alert("Config: FN:"+fileName+"    FC:"+fileContent+"   BF:"+branchFolder);
	try{
		var file = Components.classes["@mozilla.org/file/local;1"].createInstance(Components.interfaces.nsILocalFile);
	    var ProfilePath=githubdeltas_gmCompiler.getProfilePath();
		var theFilePath=ProfilePath + "/extensions/scxmlGitDelta@onekin.org/content/product/"+ branchFolder+ "/" + fileName;

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
		alert("ERROR:"+e);
	}
},


writeToDisk: function(content, path, fileName){ 

	
	var file = Components.classes["@mozilla.org/file/local;1"].createInstance(Components.interfaces.nsILocalFile);
    var ProfilePath=githubdeltas_gmCompiler.getProfilePath();
	var theFilePath=ProfilePath + "/extensions/scxmlGitDelta@onekin.org/" + path + fileName;

	//alert("theFilePath: "+theFilePath+"\ncontent: "+content);

	file.initWithPath( theFilePath );
	if(file.exists() == false) //check to see if file exists
	{
	    file.create( Components.interfaces.nsIFile.NORMAL_FILE_TYPE, 420);
	}
	var foStream = Components.classes["@mozilla.org/network/file-output-stream;1"].createInstance(Components.interfaces.nsIFileOutputStream);
	
	foStream.init(file, 0x02 | 0x08 | 0x20, 0666, 0); 
	

	var converter = Components.classes["@mozilla.org/intl/converter-output-stream;1"].createInstance(Components.interfaces.nsIConverterOutputStream);
	converter.init(foStream, "UTF-8", 0, 0);
	converter.writeString(content);
	converter.close(); // this closes foStream
},

readFromFile: function(){
		//create component for file writing
	try{
			console.log("Vamos a leer result.xml");

			var ProfilePath=githubdeltas_gmCompiler.getProfilePath();
			
			var theFile=ProfilePath+'/extensions/scxmlGitDelta@onekin.org/content/files/result.xml';
			var file = Components.classes["@mozilla.org/file/local;1"].createInstance(Components.interfaces.nsILocalFile);
			
			//console.log("before ini");
			file.initWithPath( theFile );
			
			 // console.log("after ini");
			  var istream = Components.classes["@mozilla.org/network/file-input-stream;1"].createInstance(Components.interfaces.nsIFileInputStream);  
			  istream.init(file, 0x01, 0444, 0);  
			  istream.QueryInterface(Components.interfaces.nsILineInputStream);  
		 
			 // read lines into array  
			 var line = {}, lines = [], hasmore, str=" ";  
			 do {  
			    hasmore = istream.readLine(line);  
			    lines.push(line.value);   
			    str+=line.value+" ";
			  } while(hasmore);  
			  
			 istream.close();  
			 cowpathCode=str;
		 return str;//lines as string
	}catch (err){ console.log("Error: "+err);
		}
 
},

searchFilesInLocalFolder: function(pathToTheFolder){
	try{
		var ProfilePath=githubdeltas_gmCompiler.getProfilePath();
				
	    var folderPath=ProfilePath+'/extensions/scxmlGitDelta@onekin.org/'+pathToTheFolder;


		var folder = Components.classes["@mozilla.org/file/local;1"].createInstance(Components.interfaces.nsILocalFile);
	     folder.initWithPath(folderPath);

	     var entries = folder.directoryEntries;
		 var array = [];
		 var listNames=[];
		 var i=0;
			while(entries.hasMoreElements())
			{
			  var entry = entries.getNext();
			  entry.QueryInterface(Components.interfaces.nsIFile);
			  array.push(entry);
			  listNames[i]=array[i].leafName;
			  i++;
			}
			//alert(array[0].leafName);
			//alert(listNames);
			return listNames;
	}catch(e){
		return null;
	}
},

readFilesFromLocal: function (pathToFile){//content/product/features/"+listFiles[i]
	try{
			var file = Components.classes["@mozilla.org/file/local;1"].createInstance(Components.interfaces.nsILocalFile);
			
			var ProfilePath=githubdeltas_gmCompiler.getProfilePath();
			var completePath=ProfilePath+'/extensions/scxmlGitDelta@onekin.org/'+pathToFile;

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
	}catch (err){ console.log("Error: "+err);
		}
},

cleanProjectFolder: function(){
	try{

		var shell=Components.classes['@mozilla.org/file/local;1'].createInstance(Components.interfaces.nsILocalFile);
		var ProfilePath=githubdeltas_gmCompiler.getProfilePath();
		shell.initWithPath(ProfilePath+"/extensions/scxmlGitDelta@onekin.org/content/scripts/cleanProjectFolder.sh");
		//console.log ("Shell: "+shell);
		
		var proc = Components.classes["@mozilla.org/process/util;1"].createInstance(Components.interfaces.nsIProcess);
		proc.init(shell);

		var projectHome= ProfilePath+"/extensions/scxmlGitDelta@onekin.org/content/product";
		
		var parameters =[projectHome];//project home

		
		proc.run(true, parameters, parameters.length);

		//alert(parameters);

	}catch(err){

	}

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
	return (
		(scheme == "http" || scheme == "https" || scheme == "file") &&
		!/hiddenWindow\.html$/.test(url)
	);
},

contentLoad: function(e) {
	var unsafeWin=e.target.defaultView;
	if (unsafeWin.wrappedJSObject) unsafeWin=unsafeWin.wrappedJSObject;

	var unsafeLoc=new XPCNativeWrapper(unsafeWin, "location").location;
	var href=new XPCNativeWrapper(unsafeLoc, "href").href;

	if (
		githubdeltas_gmCompiler.isGreasemonkeyable(href)
		&& ( /^https:\/\/github\.com\/.*$/i.test(href) )
		&& true
	) {
		var script=githubdeltas_gmCompiler.getUrlContents(
			'chrome://scxmlGitDelta/content/githubdeltas.js'
		);
		//Leti: added new javascripts
		/*var scriptDeflate=githubdeltas_gmCompiler.getUrlContents(
			'chrome://githubdeltas/content/deflate.js'
		);*/
		
		githubdeltas_gmCompiler.injectScript(script/*+"\n"+scriptDeflate*/, href, unsafeWin);
	}
},

injectScript: function(script, url, unsafeContentWin) {
	var sandbox, script, logger, storage, xmlhttpRequester;
	var safeWin=new XPCNativeWrapper(unsafeContentWin);

	sandbox=new Components.utils.Sandbox(safeWin);

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
	
	//Mi variable que ejecuta la composicion
	sandbox.DeltaComposer=githubdeltas_gmCompiler.hitch(this, "runComposition");
	//Mi variable que ejecuta la validación
	sandbox.FileValidation=githubdeltas_gmCompiler.hitch(this, "FileValidation");
	
	//mi variable para download de los branches
	sandbox.DownloadBranchFile=githubdeltas_gmCompiler.hitch(this, "downloadBranch");
	
	//mi variable para la composicion con FeatureHouse
	sandbox.RunFHComposition=githubdeltas_gmCompiler.hitch(this, "runFHComposition");
	
	//mi variable para descargarme los archivos de los branches
	sandbox.SaveToDisk=githubdeltas_gmCompiler.hitch(this, "saveToDisk");

	//mi variable para grabar archivos en disco
	sandbox.WriteToDisk=githubdeltas_gmCompiler.hitch(this, "writeToDisk");
	
	sandbox.CleanProjectFolder=githubdeltas_gmCompiler.hitch(this, "cleanProjectFolder");

	sandbox.SearchFilesInLocalFolder=githubdeltas_gmCompiler.hitch(this, "searchFilesInLocalFolder");
	sandbox.ReadFilesFromLocal=githubdeltas_gmCompiler.hitch(this, "readFilesFromLocal");

	

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