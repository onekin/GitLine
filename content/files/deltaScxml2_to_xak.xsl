<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns="http://www.w3.org/2005/07/scxml" 
    xmlns:xak="http://www.onekin.org/xak" 
    xmlns:xsl="http://www.w3.org/1999/XSL/Transform" 
    xmlns:xs="http://www.w3.org/2001/XMLSchema"  exclude-result-prefixes="xs" version="2.0">
    
    <xsl:output   method="xml" indent="yes" />
    <xsl:strip-space elements="*" />
    
    
    <xsl:template match="delta">
        <!-- add XAK header -->
        <xak:refines xak:artifact="{@id}" xak:feature="function" xmlns:xak="http://www.onekin.org/xak">  
            <xsl:apply-templates select="modifyState"/>
            <xsl:apply-templates select="modifyTransition"/>
        </xak:refines>
    </xsl:template>
    
    <!-- Modify state -->
    <xsl:template match="modifyState"><!--puede haber add, modify o delete dentro de modify -->
        <state xak:module="{./attribute::id}" xak:keep-attributes="yes"> 
            <xak:keep-content/>
            <xsl:apply-templates select="addParalell"/>
            <xsl:apply-templates select="addState"/>
            <xsl:apply-templates select="addTransition"/>
         </state>
    </xsl:template>

    <xsl:template match="addState">
        <xsl:choose>
            <xsl:when test="./attribute::final">
                <xsl:choose>
                    <xsl:when test="./attribute::initial"><!-- final and initial = yes -->
                        <state id="{./attribute::id}" final="{./attribute::final}" initial="{./attribute::initial}">
                            <xsl:apply-templates select="addState"/>
                            <xsl:apply-templates select="addTransition"/>
                        </state>
                    </xsl:when>
                    <xsl:otherwise>
                        <state id="{./attribute::id}" final="{./attribute::final}">
                            <xsl:apply-templates select="addState"/>
                            <xsl:apply-templates select="addTransition"/>
                        </state>
                    </xsl:otherwise>
                </xsl:choose>
            </xsl:when>
            <xsl:otherwise>
                <xsl:choose>
                    <xsl:when test="./attribute::initial"><!-- final no and initial yes -->
                        <state id="{./attribute::id}" initial="{./attribute::initial}">
                            <xsl:apply-templates select="addState"/>
                            <xsl:apply-templates select="addTransition"/>
                        </state>
                    </xsl:when>
                    <xsl:otherwise> <!-- nor final nor initial -->
                        <state id="{./attribute::id}">
                            <xsl:apply-templates select="addState"/>
                            <xsl:apply-templates select="addTransition"/>
                        </state>
                    </xsl:otherwise>
                </xsl:choose>
            </xsl:otherwise>
        </xsl:choose>
    </xsl:template>
    
    <xsl:template match="addTransition">
        <xsl:choose>
            <xsl:when test="./attribute::event">
                <xsl:choose>
                    <xsl:when test="./attribute::cond">
                        <transition event="{./attribute::event}" cond="{./attribute::cond}"  target="{./attribute::target}">
                            <xsl:apply-templates select="addScript"/>
                        </transition>
                    </xsl:when>
                    <xsl:otherwise><!-- event yes and no cond -->
                        <transition event="{./attribute::event}"   target="{./attribute::target}">
                            <xsl:apply-templates select="addScript"/>
                        </transition>
                    </xsl:otherwise>
                </xsl:choose>
            </xsl:when>
            <xsl:otherwise><!-- no event -->
                <xsl:choose>
                    <xsl:when test="./attribute::cond">
                        <transition  cond="{./attribute::cond}"  target="{./attribute::target}">
                            <xsl:apply-templates select="addScript"/>
                        </transition>
                    </xsl:when>
                    <xsl:otherwise><!-- no event and no cond -->
                        <transition  target="{./attribute::target}">
                            <xsl:apply-templates select="addScript"/>
                        </transition>
                    </xsl:otherwise>
                </xsl:choose>
            </xsl:otherwise>
        </xsl:choose>

    </xsl:template>
    
    <xsl:template match="addScript">
        <script><xsl:value-of select="attribute::script"></xsl:value-of></script>
    </xsl:template>  
    
    
    <xsl:template match="addParalell">
        <paralell id="{./attribute::id}">
            <xsl:apply-templates select="addState"/>
        </paralell>
    </xsl:template>
        
        
    <xsl:template match="modifyTransition">
       <xsl:apply-templates select="setTransition"/><!-- introduced to overcome xak limitation. -->
       <xsl:apply-templates select="setTarget"/>
        <xsl:apply-templates select="setEvent"/>
        <xsl:apply-templates select="setCond"/>
    </xsl:template>

    <xsl:template match="setTarget">                    <!--It should be keep attributes=yes! but XAK does not support it-->
        <transition xak:module="{../attribute::id}" target="{@target}" xak:keep-attributes="no" >
            <xak:keep-content/>
        </transition>       
    </xsl:template>
    <xsl:template match="setEvent">
        <transition xak:module="{../attribute::id}" event="{@event}" xak:keep-attributes="no" >
            <xak:keep-content/>
        </transition>       
    </xsl:template>
    <xsl:template match="setCond">
        <transition xak:module="{../attribute::id}" cond="{@cond}" xak:keep-attributes="no" >
            <xak:keep-content/>
        </transition>       
    </xsl:template>
    <xsl:template match="setTarget">                    <!--It should be keep attributes=yes! but XAK does not support it-->
        <transition xak:module="{../attribute::id}" target="{@target}" xak:keep-attributes="no" >
            <xak:keep-content/>
        </transition>       
    </xsl:template>
    <xsl:template match="setTransition">  <!--It should be keep attributes=yes! but XAK does not support it-->              
       <xsl:choose>
           <xsl:when test="./attribute::event">
               <xsl:choose>
                   <xsl:when test="./attribute::cond">
                       <transition xak:module="{../attribute::id}" event="{@event}" cond="{@cond}" target="{@target}"  xak:keep-attributes="no" >
                           <xak:keep-content/>
                       </transition> 
                   </xsl:when>
                   <xsl:otherwise>
                       <transition xak:module="{../attribute::id}" event="{@event}" target="{@target}"  xak:keep-attributes="no" >
                           <xak:keep-content/>
                       </transition>
                   </xsl:otherwise>
               </xsl:choose>
           </xsl:when>
           <xsl:otherwise>
               <xsl:choose>
                   <xsl:when test="./attribute::cond">
                       <transition xak:module="{../attribute::id}" cond="{@cond}" target="{@target}"  xak:keep-attributes="no" >
                           <xak:keep-content/>
                       </transition>
                   </xsl:when>
                   <xsl:otherwise>
                       <transition xak:module="{../attribute::id}" target="{@target}"  xak:keep-attributes="no" >
                           <xak:keep-content/>
                       </transition>
                   </xsl:otherwise>
               </xsl:choose>
           </xsl:otherwise>
       </xsl:choose>     
    </xsl:template>

</xsl:stylesheet>