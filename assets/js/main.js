/**
 * Author: CReich
 * Company: Rainbow Unicorn
 * Date: 14.06.2017
 * Created: 15:16
 **/
(function(window){

    Controller.prototype.constructor = Controller;
    Controller.prototype = {

    };

    var ref , isotopeController,
        lastScrollTop,
        $body, $header, $labTeasers, $memberTeasers, $navToggle, $mainNav, $search, $searchIcon;
    function Controller(jQuery){

        $ = jQuery;
        ref = this;

        Logger.useDefaults();
        Logger.setLevel(Logger.OFF);

    };

    Controller.prototype.init = function(){

        //add $references
        $body = $('body');
        $header = $('.header');
        $labTeasers = $('.lab-teaser-content');
        $memberTeasers = $('.member-teaser-content');
        $mainNav = $('.main-nav');
        $search = $('.search');

        $searchIcon = $('.search-icon');
        $searchIcon.click(function(e){
            ref.handleSearch(e);
        });

        $navToggle = $('.nav-toggle');
        $navToggle.click(function(){
            ref.toggleMenu();
        });

        isotopeController = new IsotopeController(this);

        var options = {
            multiple: true //if set to TRUE you can filter by multiple items
        };
        isotopeController.init(options);

        ref.addEventHandlers();
        ref.resize();

    };

    Controller.prototype.addEventHandlers = function(){


        /*********************
        scroll event
        *********************/
        lastScrollTop = 0;
        $(window).scroll(function(event){

            if(ref.viewport().width <= 768) return;

            var st = $(this).scrollTop();
            var hh = $header.height();

            if (st > lastScrollTop){
                // down
                if(st > hh){
                    //remove header
                    $header.addClass('fixed gone');
                }
            } else {
                // up
                if($header.hasClass('gone')){
                    //show header
                    $header.removeClass('gone');
                }
                if(st < hh*2) $header.removeClass('fixed');
            }
            lastScrollTop = st;
        });

        /*********************
        scroll to #id
        *********************/
            // Select all links with hashes
        $('a[href*="#"]')
            // Remove links that don't actually link to anything
            .not('[href="#"]')
            .not('[href="#0"]')
            .click(function(event) {
                // On-page links
                if (
                    location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
                    &&
                    location.hostname == this.hostname
                ) {
                    // Figure out element to scroll to
                    var target = $(this.hash);
                    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                    // Does a scroll target exist?
                    if (target.length) {
                        // Only prevent default if animation is actually gonna happen
                        event.preventDefault();
                        $('html, body').animate({
                            scrollTop: target.offset().top
                        }, 1000, function() {
                            // Callback after animation
                            // Must change focus!
                            var $target = $(target);
                            $target.focus();
                            if ($target.is(":focus")) { // Checking if the target was focused
                                return false;
                            } else {
                                $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
                                $target.focus(); // Set focus again
                            };
                        });
                    }
                }
            });

        /*********************
        resize event
        *********************/
        var delay = (function(){
            var timer = 0;
            return function(callback, ms){
                clearTimeout (timer);
                timer = setTimeout(callback, ms);
            };
        })();

        $(window).resize(function () {
            delay(function () {
                ref.resize();
            }, 50);
        });
        ref.resize();
    };

    /*********************
     mobile menu toggle
     *********************/
    Controller.prototype.toggleMenu = function(){
        if($body.hasClass('nav-open')){

            //close
            $navToggle.removeClass('active');
            $body.removeClass('nav-open');
            $mainNav.removeClass('open');

        } else {

            //open
            $navToggle.addClass('active');
            $body.addClass('nav-open');
            $mainNav.addClass('open');
        }
    };

    /*********************
     manage the search
     *********************/
    Controller.prototype.handleSearch = function(e){

        if($(e.currentTarget).hasClass('desktop')){
            if(!$search.hasClass('open')){
                //open search
                $('.search-field.desktop').focus().select();
                $search.addClass('open');
            } else {
                //process search
                ref.processSearch($('.search-field.desktop'));
            }
        } else {
            //process search
            ref.processSearch($('.search-field.mobile'));
        }

    };

    /*********************
     here you can handle the search request
     *********************/
    Controller.prototype.processSearch = function($elem){
        var value = $elem.val();
        if(value.length > 0){
            //start search
        }
    };

    /*********************
    resize event handler
    *********************/
    Controller.prototype.resize = function(){

        //reset heights
        $labTeasers.each(function() {
            $(this).css('height','');
        });
        $memberTeasers.each(function() {
            $(this).css('height','');
        });

        if(ref.viewport().width >= 1024){

            //all lab teaser on home should always have height of highest one
            var maxHeight = -1;
            $labTeasers.each(function() {
                maxHeight = maxHeight > $(this).height() ? maxHeight : $(this).height();
            });
            $labTeasers.each(function() {
                $(this).height(maxHeight);
            });

            maxHeight = -1;
            var btnHeight = -1;
            $memberTeasers.each(function() {
                maxHeight = maxHeight > $(this).height() ? maxHeight : $(this).height();
                btnHeight = btnHeight > $(this).next().height() ? btnHeight : $(this).next().height();
            });
            $memberTeasers.each(function() {
                var btnWrapDiff = btnHeight-$(this).next().height();
                $(this).height(maxHeight+btnWrapDiff);
            });
        }

        //reset mobile menu
        //close
        $navToggle.removeClass('active');
        $search.removeClass('open');
        $body.removeClass('nav-open');
        $mainNav.removeClass('open');

        if(isotopeController) isotopeController.resize();


    };

    /*********************
    viewport().width, viewport().height
    *********************/
    Controller.prototype.viewport = function()
    {
        var e = window, a = 'inner';
        if (!('innerWidth' in window )) {
            a = 'client';
            e = document.documentElement || document.body;
        }
        return { width : e[ a+'Width' ] , height : e[ a+'Height' ] };
    };

    window.Controller = Controller;

    // Static comments
    (function ($) {
      var $comments = $('.js-comments');

      $('#comment-form').submit(function () {
        var form = this;

        $(form).addClass('disabled');
        $('#comment-form-submit').html('<svg class="icon spin"><use xlink:href="#icon-loading"></use></svg> Loading...');

        $.ajax({
          type: $(this).attr('method'),
          url: $(this).attr('action'),
          data: $(this).serialize(),
          contentType: 'application/x-www-form-urlencoded',
          success: function (data) {
            $('#comment-form-submit').html('Submitted').addClass('btn--disabled');
            $('#comment-form .js-notice').removeClass('notice--danger').addClass('notice--success');
            showAlert('<strong>Thanks for your comment!</strong> It will show on the site once it has been reviewed and approved.');
          },
          error: function (err) {
            console.log(err);
            $('#comment-form-submit').html('Submit Comment');
            $('#comment-form .js-notice').removeClass('notice--success').addClass('notice--danger');
            showAlert('<strong>Sorry, there was an error with your submission.</strong> Please make sure all required fields have been completed and try again.');
            $(form).removeClass('disabled');
          }
        });

        return false;
      });

      function showAlert(message) {
        $('#comment-form .js-notice').removeClass('hidden');
        $('#comment-form .js-notice-text').html(message);
      }
    })(jQuery);

    // Staticman comment replies
    // modified from Wordpress https://core.svn.wordpress.org/trunk/wp-includes/js/comment-reply.js
    window.addComment = {
      moveForm: function( commId, parentId, respondId, postId ) {
        var div, element, style, cssHidden,
          t           = this,
          comm        = t.I( commId ),
          respond     = t.I( respondId ),
          cancel      = t.I( 'cancel-comment-reply-link' ),
          parent      = t.I( 'comment-parent' ),
          post        = t.I( 'comment-post-slug' ),
          commentForm = respond.getElementsByTagName( 'form' )[0];

        if ( ! comm || ! respond || ! cancel || ! parent || ! commentForm ) {
          return;
        }

        t.respondId = respondId;
        postId = postId || false;

        if ( ! t.I( 'sm-temp-form-div' ) ) {
          div = document.createElement( 'div' );
          div.id = 'sm-temp-form-div';
          div.style.display = 'none';
          respond.parentNode.insertBefore( div, respond );
        }

        comm.parentNode.insertBefore( respond, comm.nextSibling );
        if ( post && postId ) {
          post.value = postId;
        }
        parent.value = parentId;
        cancel.style.display = '';

        cancel.onclick = function() {
          var t       = addComment,
            temp    = t.I( 'sm-temp-form-div' ),
            respond = t.I( t.respondId );

          if ( ! temp || ! respond ) {
            return;
          }

          t.I( 'comment-parent' ).value = '0';
          temp.parentNode.insertBefore( respond, temp );
          temp.parentNode.removeChild( temp );
          this.style.display = 'none';
          this.onclick = null;
          return false;
        };

        /*
         * Set initial focus to the first form focusable element.
         * Try/catch used just to avoid errors in IE 7- which return visibility
         * 'inherit' when the visibility value is inherited from an ancestor.
         */
        try {
          for ( var i = 0; i < commentForm.elements.length; i++ ) {
            element = commentForm.elements[i];
            cssHidden = false;

            // Modern browsers.
            if ( 'getComputedStyle' in window ) {
              style = window.getComputedStyle( element );
            // IE 8.
            } else if ( document.documentElement.currentStyle ) {
              style = element.currentStyle;
            }

            /*
             * For display none, do the same thing jQuery does. For visibility,
             * check the element computed style since browsers are already doing
             * the job for us. In fact, the visibility computed style is the actual
             * computed value and already takes into account the element ancestors.
             */
            if ( ( element.offsetWidth <= 0 && element.offsetHeight <= 0 ) || style.visibility === 'hidden' ) {
              cssHidden = true;
            }

            // Skip form elements that are hidden or disabled.
            if ( 'hidden' === element.type || element.disabled || cssHidden ) {
              continue;
            }

            element.focus();
            // Stop after the first focusable element.
            break;
          }

        } catch( er ) {}

        return false;
      },

      I: function( id ) {
        return document.getElementById( id );
      }
    };

}(window));
