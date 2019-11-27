<?xml version="1.0" ?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
    <xsl:template match="/">
        <table id="stocktable" class="table table-striped table-hover">
            <thead>
                <tr>
                    <th colspan="3">Total Items</th>
                </tr>
                <tr></tr>
                <tr>
                    <th>Name</th>
                    <th>Type</th>
                    <th>Description</th>
                    <th>Provider</th>
                    <th>Quantity</th>
                    <th>Cost (per/unit)</th>
                    <th>Total value</th>
                </tr>
            </thead>
            <tbody>
                <xsl:for-each select="/stockitems/section">
                    <td colspan="6" align="center">
                        <b>
                            <h3>
                                <xsl:value-of select="@name" />
                            </h3>
                        </b>
                    </td>
                    <xsl:for-each select="item">
                        <tr>
                            <td align="left">
                                <xsl:value-of select="name" />
                            </td>
                            <td align="left">
                                <xsl:value-of select="type" />
                            </td>
                            <td align="left">
                                <xsl:value-of select="description" />
                            </td>
                            <td align="left">
                                <xsl:value-of select="vendor" />
                            </td>
                            <td align="left">
                                <xsl:value-of select="quantity" />
                            </td>
                            <td align="left">
                                EUR <xsl:value-of select="cost" />
                            </td>
                            <td align="left">
                                <div>
                                    <xsl:value-of select="/stockitems/section/item/cost * /stockitems/section/item/quantity " />
                                </div>
                            </td>
                        </tr>
                    </xsl:for-each>
                </xsl:for-each>
            </tbody>
        </table>
    </xsl:template>
</xsl:stylesheet>