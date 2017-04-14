import {create_dataTable} from "./datatable-gc";
import {path_datatable_meta, path_metaConfiguration} from './data_path';
import {tableAccessories} from './global';

//#DataTable for meta-info
export const metaDataTable = {
    dataTable2Fun: function (meta_table_id, handleMetaDataTable,handleMetaConfiguration) {
        var metaDatatable, metaConfiguration;
        //** load meta_details, meta_display_order, color_options
        d3.json(path_metaConfiguration, function(error, data) {
            metaConfiguration=data;
            const meta_set= metaConfiguration['meta_details'],
                  meta_display_set=metaConfiguration['meta_display'];

            //# create meta table
            var meta_display_order = meta_display_set['meta_display_order'].slice();
            meta_display_order.unshift('accession','strain');
            create_dataTable('#'+meta_table_id, meta_display_order);

            //# assign data to each column
            var columnDefs_list=[];
            for (var i = 0, len = meta_display_order.length; i < len; i++) {
                columnDefs_list.push({
                    'targets': i,
                    'data': meta_display_order[i]
                });
            }

            metaDatatable= $('#'+meta_table_id).DataTable({
                    'ajax': path_datatable_meta,
                    'responsive': true,
                    'search':true,
                    'paging':true,
                    //'bSort': true,
                    'scrollX': true,
                    'scrollY': '200px',//'30vh',
                    'bAutoWidth': true,
                    'bDeferRender': true,
                    //'aaData':  geneCountDimension.top(Infinity),
                    //'bDestroy': true,
                    'columnDefs': columnDefs_list
                });

            // disable warning
            $.fn.dataTable.ext.errMode = 'none';
            if (true){
                $('#'+meta_table_id).on('error.dt', function(e,settings,techNote,message){console.log(message);});
            }

            $('<span style="display:inline-block; width: 10px;"></span>').appendTo('div#'+meta_table_id+'_length.dataTables_length');
            $('<button type="button" id="'+tableAccessories.meta_table_unselect+'" class="btn btn-default">unselect all clicked items</button>').appendTo('div#'+meta_table_id+'_length.dataTables_length');

            handleMetaDataTable(metaDatatable);
            handleMetaConfiguration(metaConfiguration);
        });
    }
};

export const filterMetaDataTable = function(dataTableID, tree)
    {
        //make a list of all tips currently selected
        var tipList = [], tip;
        for (var i=0; i<tree.tips.length; i++){
            tip = tree.tips[i];
            if (tip.state.selected){
                tipList.push(tip.name);
            }
        }
        //search in the table via a messy regex
        const regex = `(?:[\s]|^)(${tipList.join('|')})(?=[\s]|$)`;
        $('#'+dataTableID).DataTable().column(0)
            .search(regex, true).draw();
    };
