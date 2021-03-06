jQuery.sap.declare("sap.account.TileDialog");

sap.account.TileDialog = function(oFrameController) {
    this.controller = oFrameController;
};

sap.account.TileDialog.prototype.open = function() {

    var oContent = new sap.ui.commons.layout.VerticalLayout({
        height: "100%",
        width: "100%"
    });

    var oContentMatrix = new sap.ui.commons.layout.MatrixLayout({
        layoutFixed: false,
        columns: 1,
        width: '100%',
        height: '100%',
        widths: ['100%']
    });

    // header
    oContentMatrix.addRow(createWelcomeHeaderRow());

    // vspace
    oContentMatrix.addRow(new sap.ui.commons.layout.MatrixLayoutRow({
        height: '20px'
    }));

    // reload master data
    createRow(oBundle.getText("cb1"), oBundle.getText("cbt1"));

    oContentMatrix.addRow(createDividerRow());

    // Reload Transaction Data
    createRow(oBundle.getText("cb2"), oBundle.getText("cbt2"));

    oContentMatrix.addRow(createDividerRow());

    // Create Synonyms
    createRow(oBundle.getText("cb2a"), oBundle.getText("cbt2a"));

    oContentMatrix.addRow(createDividerRow());

    // Reset Sequences
    createRow(oBundle.getText("cb3"), oBundle.getText("cbt3"));

    oContentMatrix.addRow(createDividerRow());

    // Generate Data
    createRow(oBundle.getText("cb4"), oBundle.getText("cbt4"));

    oContentMatrix.addRow(createDividerRow());

    // Generate Data(Time Based)
    createRow(oBundle.getText("cb5"), oBundle.getText("cbt5"));

    oContent.addContent(oContentMatrix);

    var destroyDialog = function(oEvent) {
        oEvent.getSource().destroy();
    };

    var widthString = '600px';

    var oTileDialog = new sap.ui.commons.Dialog({
        modal: true,
        // a percentage width does result in an ugly vertical slider in Chrome
        width: widthString,
        content: oContent,
        closed: destroyDialog
    });

    var ok = function(oEvent) {
        oTileDialog.close();
    };
    var okButton = new sap.ui.commons.Button({
        text: oBundle.getText("OK"),
        press: ok
    });
    oTileDialog.addStyleClass("welcomeDlg");
    oTileDialog.addButton(okButton).setDefaultButton(okButton).open();

    // utility function to create rows
    function createRow(title, content) {
        oRow = new sap.ui.commons.layout.MatrixLayoutRow();

        oCell = new sap.ui.commons.layout.MatrixLayoutCell({
            hAlign: sap.ui.commons.layout.HAlign.Left
        });
        oTextView = new sap.ui.commons.TextView({
            text: title,
            design: sap.ui.commons.TextViewDesign.H3,
            width: '100%',
            textAlign: sap.ui.core.TextAlign.Left,
        });
        oTextView.addStyleClass('dialogTextColor');
        oCell.addContent(oTextView);
        oRow.addCell(oCell);
        oContentMatrix.addRow(oRow);

        oRow = new sap.ui.commons.layout.MatrixLayoutRow();

        oCell = new sap.ui.commons.layout.MatrixLayoutCell({
            hAlign: sap.ui.commons.layout.HAlign.Left,
            width: '100%'
        });
        oTextView = new sap.ui.commons.TextView({
            text: content,
            design: sap.ui.commons.TextViewDesign.Standard,
        });
        oCell.addContent(oTextView);
        oRow.addCell(oCell);
        oContentMatrix.addRow(oRow);
    }

    function createWelcomeHeaderRow() {
        var oRow = new sap.ui.commons.layout.MatrixLayoutRow(); // {height : '25px'});
        var oCell = new sap.ui.commons.layout.MatrixLayoutCell({
            colSpan: 2,
            hAlign: sap.ui.commons.layout.HAlign.Center
        });
        var textView = new sap.ui.commons.TextView({
            text: oBundle.getText('settings'),
            design: sap.ui.commons.TextViewDesign.H1
        });
        textView.addStyleClass("welcomeHeaderTextAlign");
        textView.addStyleClass('dialogTextColor');
        var oHorizontalLayout = new sap.ui.commons.layout.HorizontalLayout({
            content: [textView]
        });
        oCell.addContent(oHorizontalLayout);
        oRow.addCell(oCell);
        return (oRow);
    }

    function createDividerRow() {
        // hDevider row
        oRow = new sap.ui.commons.layout.MatrixLayoutRow();
        // horizontal divider
        oCell = new sap.ui.commons.layout.MatrixLayoutCell({
            colSpan: 2,
            hAlign: sap.ui.commons.layout.HAlign.Left
        });
        var hDevider = new sap.ui.commons.HorizontalDivider();
        oCell.addContent(hDevider);
        oRow.addCell(oCell);
        return (oRow);
    }
};