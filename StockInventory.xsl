<?xml version="1.0"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
    <xsl:template match="/">
        <html>
            <head>
                <title>Stock's Inventory - Total PC</title>
                <meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1"/>                
                <script src="app.js"></script>                
            </head>
            <body>
                <h2>
                    <img src="javaco_tea_logo.gif" alt="Javaco Tea Logo" width="58" height="100" />Total PC - Stock Control</h2>
                <p>Table</p>
                <table border="1" class="indent">
                    <thead>
                        <tr>
                            <th colspan="3">Stock Items</th>
                        </tr>
                        <tr>
                            <th>Name</th>
                            <th>Type</th>
                            <th>Description</th>
                            <th>Provider</th>
                            <th>Quantity</th>
                            <th>Cost (€/unit)</th>                                                        
                        </tr>
                    </thead>
                    <tbody>
                        <xsl:for-each select="/stockitems/section"> 
                            <tr>
                                <td colspan="3">
                                    <xsl:value-of select="@name" />
                                </td>
                            </tr>
                            <xsl:for-each select="item">
                                <tr>                                  
                                    <td align="right">
                                        <xsl:value-of select="name" />
                                    </td>
                                    <td align="right">
                                        <xsl:value-of select="type" />
                                    </td>
                                    <td align="right">
                                        <xsl:value-of select="description" />
                                    </td>
                                    <td align="right">
                                        <xsl:value-of select="vendor" />
                                    </td>
                                    <td align="right">
                                        <xsl:value-of select="quantity" />
                                    </td>
                                    <td align="right">
                                        <xsl:value-of select="cost" />
                                    </td>                                   
                                </tr>
                            </xsl:for-each>
                        </xsl:for-each>
                    </tbody>
                </table>
            </body>>
        </html>
    </xsl:template>
</xsl:stylesheet>