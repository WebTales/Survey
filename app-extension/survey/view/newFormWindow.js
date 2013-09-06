/*
 * File: app/view/newFormWindow.js
 *
 * This file was generated by Sencha Architect version 2.2.2.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 4.1.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 4.1.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('Rubedo.view.newFormWindow', {
    extend: 'Ext.window.Window',
    alias: 'widget.newFormWindow',

    localiserId: 'newFormWindow',
    height: 103,
    width: 274,
    resizable: false,
    layout: {
        type: 'fit'
    },
    iconCls: 'new_form_small',
    title: 'Nouveau questionnaire',
    constrain: true,
    modal: true,

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'form',
                    bodyPadding: 10,
                    title: '',
                    items: [
                        {
                            xtype: 'textfield',
                            localiserId: 'newFormTitleField',
                            anchor: '100%',
                            fieldLabel: 'Titre',
                            labelWidth: 40,
                            name: 'title',
                            allowBlank: false,
                            listeners: {
                                specialkey: {
                                    fn: me.onTextfieldSpecialkey,
                                    scope: me
                                }
                            }
                        },
                        {
                            xtype: 'button',
                            localiserId: 'newFormCreateBtn',
                            anchor: '100%',
                            id: 'submitNewFormBtn',
                            text: 'Créer ce questionnaire'
                        }
                    ]
                }
            ]
        });

        me.callParent(arguments);
    },

    onTextfieldSpecialkey: function(field, e, eOpts) {
        if (e.getKey() == e.ENTER) {
            Ext.getCmp("submitNewFormBtn").fireEvent("click",Ext.getCmp("submitNewFormBtn"));
        }
    }

});