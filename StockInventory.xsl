<?xml version="1.0"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
    <xsl:template match="/">
        <html>
            <head>
                <title>Stock's Inventory - Total PC</title>
                <meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1"/>
                <!--Template based on URL below-->
                <link rel="canonical" href="https://getbootstrap.com/docs/4.3/examples/starter-template/"></link>

                <!-- Bootstrap core CSS -->
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"></link>

                <!-- Place your stylesheet here-->
                <!--<link href="{% static 'css/style.css' %}" rel="stylesheet" type="text/css">-->

                <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto|Varela+Round"></link>
                <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"></link>
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"></link>
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"></link>
                
                <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
                <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>                                           
            </head>
            <body>
                <nav class="navbar navbar-expand-md navbar-dark bg-info fixed-top">
	            <a class="navbar-brand mr-auto" href="#">Total PC - Stock Control</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
            </nav>                
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
                <!-- Bootstrap core JavaScript
    ================================================== -->
    <!-- Placed at the end of the document so the pages load faster -->
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>