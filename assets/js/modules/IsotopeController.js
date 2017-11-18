/**
 * Author: CReich
 * Company: Rainbow Unicorn
 * Date: 16.06.2017
 * Created: 14:51
 **/
(function(window){

    IsotopeController.prototype.constructor = IsotopeController;
    IsotopeController.prototype = {
        options: {
            multiple: false
        }
    };

    var ref, controller, filterList,
        $itemsWrap, $items, $grid, isotopeInitialized;
    function IsotopeController(pController){
        ref = this;
        controller = pController;
    };

    IsotopeController.prototype.init = function(pOptions){

        Logger.log("Init IsotopeController.");

        ref.options = pOptions;

        filterGroups = {};
        filterList = [];

        $itemsWrap = $('.isotope-wrap');
        $items = $itemsWrap.find('.isotope-item ');

        // filter items when filter link is clicked
        $('.filter-item, .filter-icon').click(function(e){

            e.preventDefault();

            var $buttonGroup = $(this).parents('.filter');
            var filterGroup = ''
            if ($buttonGroup) {
                filterGroup = $buttonGroup.attr('data-filter-group');
            } else {
                filterGroup = 'default';
            }

            var filter = $(this).attr('data-filter');

            if(!$(this).hasClass('active')){
                //add filter

                if(!ref.options.multiple){
                    filterList = [];
                    $('.filter-item').removeClass('active');
                }

                ref.addFilterToList(filterGroup, filter);

                $(this).addClass('active');
            } else {
                //remove filter
                ref.removeFilterFromList(filterGroup, filter);
                $(this).removeClass('active hover');
            }

            return false;
        }).mouseover(function()
        {
            $(this).addClass('hover');
        }).mouseout(function()
        {
            $(this).removeClass('hover');
        });

    };

    IsotopeController.prototype.concatValues = function ( obj  ) {
      var value = '';
      for ( var prop in obj  ) {
        value += obj[ prop ];
      }
      return value.replace(/,/g, '')
    }

    IsotopeController.prototype.setTileZindex = function($e){
        for(var a=0; a<$items.length;++a){
            var $t = $items.eq(a);
            if($t == $e){
                $t.css('zIndex',20);
            } else $t.css('zIndex',-1);
        }
    };

    IsotopeController.prototype.addFilterToList = function(group, filter){
        Logger.log("add filter -> " + filter);
        //check if filter is already in list
        var found = false;
        if (filterGroups.hasOwnProperty(group)) {
            for (var a = 0; a < filterGroups[group].length; ++a) {
                var f = filterGroups[group][a];
                if(filter == f) found = true;
            }
        } else {
             filterGroups[group] = [];
             found = false;
        }
        if(!found) filterGroups[group].push(filter);
        //ref.filterList(filterGroups.join());
        ref.filterList();
    };

    IsotopeController.prototype.removeFilterFromList = function(group, filter){
        Logger.log("remove filter -> " + filter);
        //check if filter is already in list
        for (var a = 0; a < filterGroups[group].length; ++a) {
            var f = filterGroups[group][a];
            if(filter == f)filterGroups[group].splice(a, 1);
        }
        //ref.filterList(filterList.join());
        ref.filterList();
    };

    IsotopeController.prototype.filterList = function(filters){
        Logger.log("filterList -> " + filters);
        var filterValue = ref.concatValues(filterGroups);
        console.log('Filter used: ', filterValue)
        $itemsWrap.isotope({ filter: filterValue });
    };

    IsotopeController.prototype.resize = function(viewportChanged){

        /*
        $('.project-content-tile').css( "width", "");
        $('.isotope-item').each(function(){
            $(this).css( "width", "").width(parseInt($(this).width()));
            $(this).find('.back').height(parseInt($(this).find('.front').height()));
        });*/

        if(!isotopeInitialized){

            Logger.log("reinit isotope");

            $grid = $itemsWrap.imagesLoaded().progress( function( imgLoad, image ) {
                $itemsWrap.isotope('layout');
            }).isotope({
                itemSelector: '.isotope-item',
                percentPosition: true,
                masonry: {
                    // use element for option
                    columnWidth: '.grid-sizer',
                    horizontalOrder: true
                }/*,
                 getSortData: {
                 title: '[data-title]' // value of attribute
                 },
                 // sort by title
                 sortBy: 'title'*/
            });
            isotopeInitialized = true;
            setTimeout(function(){
                $itemsWrap.isotope('layout');
            }, 50);


            $grid.on( 'arrangeComplete', function( event, filteredItems ) {
                //Logger.log( '++++++++++++++++++++arrangeComplete with ' + filteredItems.length + ' items' );
            });

        }

    };

    window.IsotopeController = IsotopeController;

}(window));
