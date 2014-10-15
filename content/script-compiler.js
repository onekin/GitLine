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
		alert("ERROR in Running FeatureHouse composition!:"+err.message);
		alert("Parameters: "+parameters);
	}


},



/*
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
},*/
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

	var unsafeLoc=new XPCNativeWrapper(unsafeWin,"location").location;
	var href=new XPCNativeWrapper(unsafeLoc, "href").href;

	if (
		githubdeltas_gmCompiler.isGreasemonkeyable(href)
		&& ( /^https:\/\/github\.com\/.*$/i.test(href) )
		&& true
	) {
		var script=githubdeltas_gmCompiler.getUrlContents('chrome://scxmlGitDelta/content/githubdeltas.js');
		//var script2=githubdeltas_gmCompiler.getUrlContents('chrome://scxmlGitDelta/content/gh3.js');
		
		
		//githubdeltas_gmCompiler.injectScript(script2, href, unsafeWin);
		githubdeltas_gmCompiler.injectScript(script, href, unsafeWin);
	}
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


	//clean project folder
	sandbox.CleanProjectFolder=githubdeltas_gmCompiler.hitch(this, "cleanProjectFolder");
	//get Log 
	sandbox.GetLogFileContent=githubdeltas_gmCompiler.hitch(this, "getLogFileContent");

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