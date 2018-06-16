# Scrolli

## What is it?

Scrolli is a jQuery plugin for creating scrolled interfaces easily, straight to the point. Need a scroller? Add Scrolli to your web page, write some markup… and it's done!

Need more control? Don't worry. Scrolli comes with a set of tools to extend it's functionality and adapt it to your needs.

## Setup

Download the [latest copy of Scrolli](https://github.com/juanghurtado/jquery-scrolli/archives/master) and reference it on your `HEAD` element:

``` html
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.6/jquery.min.js"></script>
<script src="jquery.scrolli.js"></script>
<script>
  jQuery(function() {
    jQuery('.scrolli').scrolli();
  });
</script>
```

Add the Scrolli CSS default theme to spice it up visually. You don't need to do this if you want to customize Scrolli by yourself:

``` html
<link rel="stylesheet" href="css/jquery.scrolli.default.css">
```

Build your scroller with this HTML structure, writing anything you want inside the `.scrolli-element` blocks:

``` html
<div class="scrolli">
  <div class="scrolli-element">
    <!-- Content for the scroller (Can be anything) -->
    <img src="images/image-01.jpg" />
  </div><!-- .scrolli-element -->

  <div class="scrolli-element">
    <!-- Content for the scroller (Can be anything) -->
    <img src="images/image-01.jpg" />
    <p>Lorem ipsum dolor sit amet</p>
  </div><!-- .scrolli-element -->

  <div class="scrolli-element">
    <!-- Content for the scroller (Can be anything) -->
    <img src="images/image-03.jpg" />
  </div><!-- .scrolli-element -->

  <div class="scrolli-element">
    <!-- Content for the scroller (Can be anything) -->
    <img src="images/image-04.jpg" />
  </div><!-- .scrolli-element -->
</div><!-- .scrolli -->
```

## Documentation

### Configuration parameters

Scrolli gives you a set of configuration vars to customize its behaviour. You can pass this vars to the Scrolli call like this:

``` javascript
jQuery(function() {
  jQuery('.scrolli').scrolli({
    configVar1 : 'value',
    configVar3 : 'value',
    configVar3 : 'value',
  });
});
```

This are the available configuration vars:

* **showArrowPager** - (Default: `true`) Boolean value that determinates if the arrow pager ('Move left' and 'Move right') should be shown
* **showNumericPager** - (Default: `true`) Boolean value that determinates if the numeric pager should be shown
* **pagerLeftLabel** - (Default: `"Move left"`) Label for the arrow pager item that moves the scroller to the left
* **pagerRightLabel** - (Default: `"Move right"`) Label for the arrow pager item that moves the scroller to the right
* **autoplay** - (Default: `false`) Boolean value that determinates if the scroller automatically move
* **autoplayDelay** - (Default: `10000`) Numeric value (milliseconds) that determinates the amount of time between every automatic move from the autoplay
* **moveSpeed** - (Default: `200`) Numeric value (milliseconds) that determinates the speed of the move animation
* **moveEasing** - (Default: `"linear"`) Easing for the move animation
* **beforeMove** - Method executed before the move animation. Recieves the target element as a parameter
* **afterMove** - Method executed after the move animation. Recieves the target element as a parameter

### Public methods

There are also some public methods available if you want to control Scrolli from Javascript.

* **move_to(target)** - Moves the scroller to the position of the element recieved as a parameter
* **move\_to\_prev()** - Moves the scroller to the previous element on the list
* **move\_to\_next()** - Moves the scroller to the next element on the list

You can call this methods through a `scrolli' data value attached to the Scrolli main element:

``` javascript
$('.scrolli').data('scrolli').move_to($('.scrolli .scrolli-element').last());
$('.scrolli').data('scrolli').move_to_prev();
$('.scrolli').data('scrolli').move_to_next();
```

## Contribute

If you want to contribute in the development of Scrolli, please [fork this project](https://github.com/juanghurtado/jquery-scrolli), add your functionality and send me a pull request. If needed, be sure to add some [Jasmine](https://jasmine.github.io/ "Jasmine: BDD for your JavaScript") tests under `/tests/spec/scrolli.js` to make sure everything is ok.

## Credits

* Juan G. Hurtado [[hello@juanghurtado.com](mailto:&#x63;&#x72;&#x65;&#x61;&#x74;&#x69;&#x76;&#x6F;&#x40;&#x61;&#x6C;&#x76;&#x61;&#x72;&#x6F;&#x67;&#x72;&#x61;&#x66;&#x69;&#x63;&#x6F;&#x2E;&#x65;&#x73;)]
* Javier Rico [[jrico@zuinqstudio.com](mailto:&#x63;&#x72;&#x65;&#x61;&#x74;&#x69;&#x76;&#x6F;&#x40;&#x61;&#x6C;&#x76;&#x61;&#x72;&#x6F;&#x67;&#x72;&#x61;&#x66;&#x69;&#x63;&#x6F;&#x2E;&#x65;&#x73;)]
* Álvaro Fernández [[creativo@alvarografico.es](mailto:&#x63;&#x72;&#x65;&#x61;&#x74;&#x69;&#x76;&#x6F;&#x40;&#x61;&#x6C;&#x76;&#x61;&#x72;&#x6F;&#x67;&#x72;&#x61;&#x66;&#x69;&#x63;&#x6F;&#x2E;&#x65;&#x73;)]
