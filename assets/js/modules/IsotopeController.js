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

        ref.uniqueGroups = ['kmk', 'zielgruppe', 'mediengruppe', 'dauergruppe', 'long-fachgruppe']

        filterGroups = {};
        filterList = [];

        $itemsWrap = $('.isotope-wrap');
        $items = $itemsWrap.find('.isotope-item ');

        // filter items when filter link is clicked
        $('.filter-item, .filter-icon').click(function(e){

            e.preventDefault();

            var $buttonGroup = $(this).parent();
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
                if (ref.uniqueGroups.indexOf(filterGroup) >= 0)
                    $(this).siblings().removeClass('active hover')
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
        Logger.log("add filter -> ", group, filter);
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
        if(!found) {
            if (ref.uniqueGroups.indexOf(group) < 0) {
                filterGroups[group].push(filter);
            } else {
                for (var a = 0; a < filterGroups[group].length; ++a) {
                    var f = filterGroups[group][a]
                    ref.removeFilterFromList(group, f)
                }

                filterGroups[group] = [filter];
            }
        }
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
            if (ref.options.shuffle) {
                console.log(ref.options)
                console.log('shuffle')
                $grid.isotope('shuffle')
            }
            isotopeInitialized = true;
            setTimeout(function(){
                $itemsWrap.isotope('layout');
            }, 50);


            var hash = window.location.hash

            if (hash !== '') {
                hash = hash.slice(1);
                $(`.filter-item[data-filter=".${hash}"]`).click();
                console.log(`.filter-item[data-filter=".${hash}"]`, $('.filter-item[data-filter=".Events"]'))
            }

            $grid.on( 'arrangeComplete', function( event, filteredItems ) {
                //Logger.log( '++++++++++++++++++++arrangeComplete with ' + filteredItems.length + ' items' );
            });

        }

    };

    window.IsotopeController = IsotopeController;

}(window));
