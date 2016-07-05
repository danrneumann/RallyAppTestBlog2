Ext.define('CustomApp', {
    extend: 'Rally.app.App',
    componentCls: 'app',
    launch: function() {
        this.iterationCombobox = this.add({
            xtype: 'rallyiterationcombobox',
            listeners: {
                change: this._onIterationComboboxChanged,
                ready: this._onIterationComboboxLoad,
                scope: this
            }
        });
    },
    _onIterationComboboxLoad: function() {
        var cardBoardConfig = {
            xtype: 'rallycardboard',
            types: ['Defect', 'user Story'],
            attribute: 'ScheduleState',
            storeConfig: {
                filters: [this.iterationCombobox.getQueryFromSelected()]
            }
        };
        this.cardBoard = this.add(cardBoardConfig);
    },
    
    _onIterationComboboxChanged: function() {
        var config = {
            storeConfig: {
                filters: [this.iterationCombobox.getQueryFromSelected()]
            }
        };
        
        this.cardBoard.refresh(config);

    }
        
});
