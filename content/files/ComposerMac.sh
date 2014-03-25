#!/bin/sh

#  export XAK_HOME=/Users/Onekin/Desktop/Firefox_AddOn_Dev/extensions/scxmlGitDelta@onekin.org/xak
#export XAK_JAR=${XAK_HOME}/lib/xak.jar
#export PROJECT_HOME=/Users/Onekin/Desktop/Firefox_AddOn_Dev/extensions/scxmlGitDelta@onekin.org/content/files
#export CLASSPATH=${CLASSPATH}:${XAK_HOME}/lib/log4j.jar:${XAK_HOME}/lib/onekin.jar:${XAK_HOME}/lib/saxon8.jar:${XAK_HOME}/lib/saxon8-xapth.jar

export XAK_HOME="$1"
export XAK_JAR="$2"
export PROJECT_HOME="$3"
export CLASSPATH=${CLASSPATH}:"$1"/lib/log4j.jar:"$1"/lib/onekin.jar:"$1"/lib/saxon8.jar:"$1"/lib/saxon8-xapth.jar

#comentario
###echo "Welcome to cowpath delta :) !"
#-------------------------------------------------------
#3. Autoanotar el fichero base del usuario  para XAK
#-------------------------------------------------------
java net.sf.saxon.Transform -o "${PROJECT_HOME}/base_annotated.xml"  "${PROJECT_HOME}/base.xml"  "${PROJECT_HOME}/scxml2xak.xsl"

##echo "4. Transforming delta into XAK"
#--------------------------------------------------------
#4. Transformar el delta del usuario a XAK
#--------------------------------------------------------
java net.sf.saxon.Transform -o "${PROJECT_HOME}/refinement.xml"  "${PROJECT_HOME}/delta.xml"  "${PROJECT_HOME}/deltaScxml2_to_xak.xsl"

#echo "5. Composing base and delta"
#----------------------------------------------------------
#5. Componer refinement con el base autoannotado
#----------------------------------------------------------
cp "${PROJECT_HOME}/base_annotated.xml"  "${PROJECT_HOME}/base_annotated.xak"
cp "${PROJECT_HOME}/refinement.xml" "${PROJECT_HOME}/refinement.xak"
java -jar "${XAK_JAR}"  -c "${PROJECT_HOME}/base_annotated.xak" "${PROJECT_HOME}/refinement.xak" -o "${PROJECT_HOME}/result.xak"

#echo "END. The new cowapth is created in: $3/user_files/result.xml"
