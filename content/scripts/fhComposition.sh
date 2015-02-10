export CONFIG_FILE="$1"
export FH_HOME="$2"
export FH_JAR="$3"
export PROJECT_HOME="$4"
export CLASSPATH=${CLASSPATH}:"${FH_HOME}"
java -jar "${FH_JAR}" --expression "${CONFIG_FILE}" > "${PROJECT_HOME}"/log.txt