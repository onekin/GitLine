export CONFIG_FILE="$1"
export FH_JAR="$3"
export FH_HOME="$2"
export CLASSPATH=${CLASSPATH}:"${FH_HOME}"/FeatureHouse.jar

java -jar "${FH_JAR}" --expression "${CONFIG_FILE}"