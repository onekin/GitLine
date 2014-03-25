<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns="http://www.w3.org/2005/07/scxml" xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
    xmlns:sc="http://www.w3.org/2005/07/scxml"
    xmlns:xs="http://www.w3.org/2001/XMLSchema"
    exclude-result-prefixes="xs"
    version="2.0"
    xmlns:xak="http://www.onekin.org/xak" >
    
    <xsl:output  indent="yes"/>
    <xsl:strip-space elements="*" />
    
    <xsl:template match="sc:scxml">
        <scxml xmlns="http://www.w3.org/2005/07/scxml"   version="{@version}"  xak:feature="base" xak:type="xml">
            <xsl:apply-templates select="sc:state"/>
        </scxml>    
    </xsl:template>
    
    <xsl:template match="sc:state" >
        <xsl:choose> 
            <xsl:when test="./attribute::locked=yes">
                <xsl:choose>
                    <xsl:when test="./attribute::final">
                        <xsl:choose>
                            <xsl:when test="./attribute::initial"> <!-- final and initial present -->
                                <state id="{@id}" initial="{@initial}" final="{@final}"> <!-- xak no annotated! -->
                                    <xsl:apply-templates select="sc:paralell" />
                                    <xsl:apply-templates select="sc:initial"/>
                                    <xsl:apply-templates select="sc:state"/>
                                    <xsl:apply-templates select="sc:transition"/>            
                                </state>
                            </xsl:when>
                            <xsl:otherwise> <!-- final present and an initial not  -->
                                <state id="{@id}"  final="{@final}"> <!-- xak no annotated! -->
                                    <xsl:apply-templates select="sc:paralell" />
                                    <xsl:apply-templates select="sc:initial"/>
                                    <xsl:apply-templates select="sc:state"/>
                                    <xsl:apply-templates select="sc:transition"/>            
                                </state>
                            </xsl:otherwise>
                        </xsl:choose>
                    </xsl:when>
                    <xsl:otherwise> <!--final not present -->
                        <xsl:choose>
                            <xsl:when test="./attribute::initial">
                                <state id="{@id}" initial="{@initial}"> <!-- xak no annotated! -->
                                    <xsl:apply-templates select="sc:paralell" />
                                    <xsl:apply-templates select="sc:initial"/>
                                    <xsl:apply-templates select="sc:state"/>
                                    <xsl:apply-templates select="sc:transition"/>            
                                </state>
                            </xsl:when>
                            <xsl:otherwise><!-- non of them present -->
                                <state id="{@id}"> <!-- xak no annotated! -->
                                    <xsl:apply-templates select="sc:paralell" />
                                    <xsl:apply-templates select="sc:initial"/>
                                    <xsl:apply-templates select="sc:state"/>
                                    <xsl:apply-templates select="sc:transition"/>            
                                </state>
                            </xsl:otherwise>
                        </xsl:choose>
                        
                    </xsl:otherwise>
                </xsl:choose>
            </xsl:when>
            <xsl:otherwise><!-- not locked, we can annotate with xak module to be refined -->
                <xsl:choose>
                    <xsl:when test="./attribute::final">
                        <xsl:choose>
                            <xsl:when test="./attribute::initial"> <!-- final and initial present -->
                                <state xak:module="{@id}" id="{@id}" initial="{@initial}" final="{@final}" > 
                                    <xsl:apply-templates select="sc:paralell" />
                                    <xsl:apply-templates select="sc:initial"/>
                                    <xsl:apply-templates select="sc:state"/>
                                    <xsl:apply-templates select="sc:transition"/>            
                                </state>
                            </xsl:when>
                            <xsl:otherwise> <!-- final present and an initial not  -->
                                <state xak:module="{@id}" id="{@id}"  final="{@final}"> 
                                    <xsl:apply-templates select="sc:paralell" />
                                    <xsl:apply-templates select="sc:initial"/>
                                    <xsl:apply-templates select="sc:state"/>
                                    <xsl:apply-templates select="sc:transition"/>            
                                </state>
                            </xsl:otherwise>
                        </xsl:choose>
                    </xsl:when>
                    <xsl:otherwise> <!--final not present -->
                        <xsl:choose>
                            <xsl:when test="./attribute::initial">
                                <state xak:module="{@id}"  id="{@id}" initial="{@initial}"> 
                                    <xsl:apply-templates select="sc:paralell" />
                                    <xsl:apply-templates select="sc:initial"/>
                                    <xsl:apply-templates select="sc:state"/>
                                    <xsl:apply-templates select="sc:transition"/>            
                                </state>
                            </xsl:when>
                            <xsl:otherwise><!-- non of them present -->
                                <state xak:module="{@id}"  id="{@id}"> <!-- xak no annotated! -->
                                    <xsl:apply-templates select="sc:paralell" />
                                    <xsl:apply-templates select="sc:initial"/>
                                    <xsl:apply-templates select="sc:state"/>
                                    <xsl:apply-templates select="sc:transition"/>            
                                </state>
                            </xsl:otherwise>
                        </xsl:choose>
                        
                    </xsl:otherwise>
                </xsl:choose>
            </xsl:otherwise>
        </xsl:choose> 
    </xsl:template>
    
    <xsl:template match="sc:paralell">
        <paralell xak:module="{@id}" id="{@id}">
            <xsl:apply-templates select="sc:state"/>
        </paralell>
    </xsl:template>
    <xsl:template match="sc:transition">
        <xsl:choose>
            <xsl:when test="name(..)='initial'"><!-- Initial  element not annotated -->
                <xsl:if test="./attribute::locked=yes">
                    <transition event="{@event}" cond="{@cond}" target="{@target}">
                        <xsl:apply-templates select="sc:script"/>
                    </transition>
                </xsl:if>
                <xsl:if test="./attribute::locked!=yes">
                    <transition event="{@event}" cond="{@cond}" target="{@target}">
                        <xsl:apply-templates select="sc:script"/>
                    </transition>
                </xsl:if>
            </xsl:when>
            <xsl:otherwise> <!-- a normal transition annotation -->
                <xsl:choose>
                    <xsl:when test="./attribute::event"> <!-- search for locked transitions? -->
                        <xsl:choose>
                            <xsl:when test="./attribute::cond">
                                <transition event="{@event}" cond="{@cond}" target="{@target}" xak:module="{../attribute::id}-{@event}-{@target}">
                                    <xsl:apply-templates select="sc:script"/>
                                </transition>
                            </xsl:when>
                            <xsl:otherwise>
                                <transition event="{@event}" target="{@target}" xak:module="{../attribute::id}-{@event}-{@target}">
                                    <xsl:apply-templates select="sc:script"/>
                                </transition>
                            </xsl:otherwise>
                        </xsl:choose>
                    </xsl:when>
                    <xsl:otherwise><!-- no event -->
                        <xsl:choose>
                            <xsl:when test="./attribute::cond">
                                <transition  cond="{@cond}" target="{@target}" xak:module="{../attribute::id}-to-{@target}">
                                    <xsl:apply-templates select="sc:script"/>
                                </transition>
                            </xsl:when>
                            <xsl:otherwise><!-- none othe them present -->
                                <transition  target="{@target}" xak:module="{../attribute::id}-to-{@target}">
                                    <xsl:apply-templates select="sc:script"/>
                                </transition>
                            </xsl:otherwise>
                        </xsl:choose>
                    </xsl:otherwise>     
                </xsl:choose>  
            </xsl:otherwise>
        </xsl:choose>
    </xsl:template>
    
    <xsl:template match="sc:initial">
        <initial>
            <xsl:apply-templates select="sc:transition"/>
        </initial>
    </xsl:template>
    
    <xsl:template match="sc:script"><!-- scripts are inside transitions, oentries and onexit -->
        <xsl:variable name="script"> <xsl:value-of select="."/> </xsl:variable>
        <xsl:variable name="scr2"> <xsl:number></xsl:number> </xsl:variable>
        
        
        <xsl:if test="name(..)='transition'"><!-- if parent is a transition -->
            <script xak:module="{../../attribute::id}-to-{../attribute::target}.script.{$scr2}"> <!-- <script xak:module="{../attribute::cond}-SCRIPT-{$scr2}-{$script}">  -->
                <xsl:value-of select="."/>
            </script>
        </xsl:if>
        
        <xsl:if test=" name(..) ='onentry'"><!-- if parent is an onentry -->
            <script xak:module="{../../attribute::id}.onentry.script.{$scr2}"> 
                <xsl:value-of select="."/>
            </script>
            
        </xsl:if>
        
        <xsl:if test=" name(..) ='onexit'"><!-- if parent is an onexit -->
            <script xak:module="{../../attribute::id}.onexit.script.{$scr2}"> 
                <xsl:value-of select="."/>
            </script>
            
        </xsl:if>
        
    </xsl:template>
    
</xsl:stylesheet>