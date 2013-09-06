/*
 * File: app/store/FormFieldTypesStore.js
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

Ext.define('Rubedo.store.FormFieldTypesStore', {
    extend: 'Ext.data.Store',
    alias: 'store.FormFieldTypesStore',

    requires: [
        'Rubedo.model.formFieldTypeModel'
    ],

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            autoLoad: true,
            model: 'Rubedo.model.formFieldTypeModel',
            storeId: 'FormFieldTypesStore',
            data: [
                {
                    id: '51489f8ac0e051b81a000002',
                    type: 'Open question',
                    itemConfig: {
                        fType: 'openQuestion',
                        label: 'Open question',
                        fieldType: 'textfield',
                        fieldConfig: {
                            mandatory: false
                        },
                        conditionals: [
                            
                        ],
                        validations: [
                            
                        ]
                    },
                    description: '<p>Open questions offer the possibility to set up an open, variable type field (numeric, comment, date, etc).</p>'
                },
                {
                    id: '51489f8ac0e051b81a000004',
                    type: 'Closed question',
                    itemConfig: {
                        fType: 'multiChoiceQuestion',
                        label: 'Closed question',
                        fieldType: 'checkboxgroup',
                        fieldConfig: {
                            mandatory: false,
                            columns: 1,
                            vertical: true,
                            items: [
                                
                            ]
                        },
                        conditionals: [
                            
                        ],
                        validations: [
                            
                        ]
                    },
                    description: '<p>A closed question is a question for which the interviewee are offered a choice among the expected answers. The closed question can be single choice or multiple choice.</p>'
                },
                {
                    id: '51489f8ac0e051b81a000006',
                    type: 'Rich text',
                    itemConfig: {
                        fType: 'richText',
                        html: '<h3>Rich text</h3>'
                    },
                    description: '<p>Rich text allows to display a text of presentation and manage its formatting. It also gives the ability to add links and media (images, videos, sounds, documents).</p>'
                }
            ]
        }, cfg)]);
    }
});