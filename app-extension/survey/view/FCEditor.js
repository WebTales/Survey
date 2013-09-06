/*
 * File: app/view/FCEditor.js
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

Ext.define('Rubedo.view.FCEditor', {
    extend: 'Ext.window.Window',
    alias: 'widget.FCEditor',

    requires: [
        'Rubedo.view.MyComboBox32'
    ],

    localiserId: 'formsConditionalEditor',
    height: 211,
    id: 'FCEditor',
    width: 632,
    resizable: false,
    layout: {
        type: 'fit'
    },
    title: 'Condition d\'affichage',
    constrain: true,
    modal: true,

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            dockedItems: [
                {
                    xtype: 'toolbar',
                    dock: 'bottom',
                    items: [
                        {
                            xtype: 'tbfill'
                        },
                        {
                            xtype: 'button',
                            localiserId: 'validateBtn',
                            id: 'FCEditorSubmitBtn',
                            iconCls: 'ouiSpetit',
                            text: 'Valider',
                            listeners: {
                                click: {
                                    fn: me.onFCEditorSubmitBtnClick,
                                    scope: me
                                }
                            }
                        }
                    ]
                }
            ],
            items: [
                {
                    xtype: 'form',
                    itemId: 'conditionWraper',
                    layout: {
                        align: 'middle',
                        type: 'hbox'
                    },
                    bodyPadding: 10,
                    title: '',
                    items: [
                        {
                            xtype: 'mycombobox32',
                            localiserId: 'showOnlyIfField',
                            itemId: 'conditionFieldCombo',
                            flex: 1
                        },
                        {
                            xtype: 'combobox',
                            flex: 0.3,
                            margin: '0 0 0 10',
                            fieldLabel: '',
                            name: 'operator',
                            value: '=',
                            editable: false,
                            forceSelection: true,
                            store: [
                                '=',
                                '≠'
                            ]
                        },
                        {
                            xtype: 'panel',
                            flex: 1,
                            border: 0,
                            height: 140,
                            id: 'answerFieldComponent',
                            autoScroll: true,
                            layout: {
                                align: 'middle',
                                type: 'hbox'
                            },
                            bodyPadding: 10
                        }
                    ]
                }
            ],
            listeners: {
                afterrender: {
                    fn: me.onFCEditorAfterRender,
                    scope: me
                }
            }
        });

        me.callParent(arguments);
    },

    onFCEditorSubmitBtnClick: function(button, e, eOpts) {
        var initialValues = Ext.clone(button.up().up().initialItemConfig);
        var myId = Ext.clone(button.up().up().targetedId);
        var form = button.up().up().getComponent(0).getForm();
        if (form.isValid()) {
            var newCond=[form.getValues()];
            if (Ext.isEmpty(newCond[0].field)){
                newCond=[ ];
            } else {
                try{newCond[0].value=Ext.getCmp("FCEditor").getComponent(0).getComponent(2).getComponent(0).getSubmitValue();}
                catch(err){
                    newCond[0].value=Ext.getCmp("FCEditor").getComponent(0).getComponent(2).getComponent(0).getValue();
                }
            }
            Ext.getCmp(myId).itemConfig.conditionals=newCond;
            button.up().up().close();
            Ext.getCmp(myId).sync();
        }

    },

    onFCEditorAfterRender: function(component, eOpts) {
        var initialValues = Ext.clone(component.initialItemConfig);
        var myId = Ext.clone(component.targetedId);
        var form = component.getComponent(0);
        if (!Ext.isEmpty(initialValues.conditionals)){
            form.getComponent(0).setValue(initialValues.conditionals[0].field);
            form.getComponent(1).setValue(initialValues.conditionals[0].operator);
            var task = new Ext.util.DelayedTask(function(){
                try {form.getComponent(2).getComponent(0).setValue(initialValues.conditionals[0].value);} catch (err){console.log("problem with scondary field");}
            });
            task.delay(300);
        }
    }

});