describe("Scrolli", function() {
  beforeEach(function() {
    scrolli         = '.scrolli',
    wrapper         = '.scrolli-wrapper',
    elementWrappers = '.scrolli .scrolli-element-wrapper',
    currentElement  = '.scrolli .scrolli-element-wrapper.current',
    pagerLeft       = '.scrolli-wrapper .scrolli-pager-left',
    pagerRight      = '.scrolli-wrapper .scrolli-pager-right',
    pagerItem       = '.scrolli-wrapper .scrolli-pager .scrolli-pager-item';
  });

  describe("Global behaviour", function() {
    beforeEach(function() {
      loadFixtures('four-items.html');
    });

    it('should be marked as processed', function () {
      $(scrolli).scrolli();
      expect($(scrolli)).toHaveClass('scrolli-processed');
    });

    it('should show first item on load', function () {
      $(scrolli).scrolli();
      expect($(elementWrappers).first()).toHaveClass('current');
    });
  });

  describe("Move behaviour", function() {
    beforeEach(function() {
      loadFixtures('four-items.html');
    });

    it('should not move to prev if current item is the first one', function () {
      $(scrolli).scrolli({
        moveSpeed : 0 // Remove animation speed to provoke an instant move
      });
      $(scrolli).data('scrolli').move_to_prev();

      expect($(scrolli).css('left')).toBe('0px');
    });

    it('should not move to next if current item is the last one', function () {
      $(scrolli).scrolli({
        moveSpeed : 0 // Remove animation speed to provoke an instant move
      });
      $(scrolli).data('scrolli').move_to($(elementWrappers).last());
      $(scrolli).data('scrolli').move_to_next();
      
      // element width * last item index
      var left = $(elementWrappers).first().width() * ($(elementWrappers).last().index());

      expect($(scrolli).css('left')).toBe((left * -1) +'px');
    });

    it('should move to prev if current item is not the first one', function () {
      $(scrolli).scrolli({
        moveSpeed : 0 // Remove animation speed to provoke an instant move
      });
      
      $element = $(elementWrappers).last().prev();
      
      $(scrolli).data('scrolli').move_to($element);
      $(scrolli).data('scrolli').move_to_prev();
      
      // element width * last item index
      var left = $element.width() * ($element.prev().index());

      expect($(scrolli).css('left')).toBe((left * -1) +'px');
    });

    it('should move to next if current item is not the last one', function () {
      $(scrolli).scrolli({
        moveSpeed : 0 // Remove animation speed to provoke an instant move
      });
      
      $element = $(elementWrappers).first();
      
      $(scrolli).data('scrolli').move_to($element);
      $(scrolli).data('scrolli').move_to_next();
      
      // element width * last item index
      var left = $element.width() * ($element.next().index());

      expect($(scrolli).css('left')).toBe((left * -1) +'px');
    });
  });

  describe("Autoplay behaviour", function() {

  });

  describe("Arrow pager behaviour", function() {
    describe("With one item", function() {
      beforeEach(function() {
        loadFixtures('one-item.html');
      });
      
      it('should hide arrow pager', function () {
        $(scrolli).scrolli();
        expect($(wrapper)).not.toContain('.scrolli-pager-left');
        expect($(wrapper)).not.toContain('.scrolli-pager-right');
      });
    });
    
    describe("With four items", function() {
      beforeEach(function() {
        loadFixtures('four-items.html');
      });

      it('should show arrow pager by default', function () {
        $(scrolli).scrolli();
        expect($(wrapper)).toContain('.scrolli-pager-left');
        expect($(wrapper)).toContain('.scrolli-pager-right');
      });

      it('should hide arrow pager through config option', function () {
        $(scrolli).scrolli({
          showArrowPager : false
        });
        expect($(wrapper)).not.toContain('.scrolli-pager-left');
        expect($(wrapper)).not.toContain('.scrolli-pager-right');
      });

      it('should hide pager-right link if current item is the first one', function () {
        $(scrolli).scrolli();
        expect($(pagerRight)).not.toBeVisible();
      });

      it('should hide pager-left link if current item is the last one', function () {
        $(scrolli).scrolli();
        $(scrolli).data('scrolli').move_to($(elementWrappers).last());
        expect($(pagerLeft)).not.toBeVisible();
      });
      
      it('should move to the next item when clicking on pager-left', function () {
        $(scrolli).scrolli({
          moveSpeed : 0 // Remove animation speed to provoke an instant move
        });

        $(pagerLeft).click();
        
        $currentElement = $(currentElement);

        // element width * last item index
        var left = $currentElement.width() * ($currentElement.index());

        expect($(scrolli).css('left')).toBe((left * -1) +'px');
      });
      
      it('should move to the prev item when clicking on pager-right', function () {
        $(scrolli).scrolli({
          moveSpeed : 0 // Remove animation speed to provoke an instant move
        });
        
        $(scrolli).data('scrolli').move_to($(elementWrappers).last());
        $(pagerRight).click();
        
        $currentElement = $(currentElement);

        // element width * last item index
        var left = $currentElement.width() * ($currentElement.index());

        expect($(scrolli).css('left')).toBe((left * -1) +'px');
      });
      
      it('should not move to the next item when clicking on pager-left if we are on last item', function () {
        $(scrolli).scrolli({
          moveSpeed : 0 // Remove animation speed to provoke an instant move
        });
        
        $(scrolli).data('scrolli').move_to($(elementWrappers).last());
        $(pagerLeft).click();

        // element width * last item index
        var left = $(elementWrappers).last().width() * ($(elementWrappers).last().index());

        expect($(scrolli).css('left')).toBe((left * -1) +'px');
      });
      
      it('should not move to the prev item when clicking on pager-right if we are on first item', function () {
        $(scrolli).scrolli({
          moveSpeed : 0 // Remove animation speed to provoke an instant move
        });
        
        $(pagerRight).click();

        // element width * last item index
        var left = $(elementWrappers).first().width() * ($(elementWrappers).first().index());

        expect($(scrolli).css('left')).toBe((left * -1) +'px');
      });
    });
  });
  
  describe("Numeric pager behaviour", function() {
    describe("With one item", function() {
      beforeEach(function() {
        loadFixtures('one-item.html');
      });
      
      it('should hide numeric pager', function () {
        $(scrolli).scrolli();
        expect($(wrapper)).not.toContain('.scrolli-pager');
      });
    });
    
    describe("With four items", function() {
      beforeEach(function() {
        loadFixtures('four-items.html');
      });

      it('should show numeric pager by default', function () {
        $(scrolli).scrolli();
        expect($(wrapper)).toContain('.scrolli-pager');
      });

      it('should hide numeric pager through config option', function () {
        $(scrolli).scrolli({
          showNumericPager : false
        });
        expect($(wrapper)).not.toContain('.scrolli-pager');
      });

      it('should mark current item correctly on numeric pager on load', function() {
        $(scrolli).scrolli();
        expect($(pagerItem).first()).toHaveClass('current');

        $(scrolli).data('scrolli').move_to($(elementWrappers).last());

        expect($(pagerItem).first()).not.toHaveClass('current');
        expect($(pagerItem).last()).toHaveClass('current');
      });

      it('should mark current item correctly on numeric pager after using move_to method', function() {
        $(scrolli).scrolli();
        $(scrolli).data('scrolli').move_to($(elementWrappers).last());

        expect($(pagerItem).last()).toHaveClass('current');
      });

      it('should mark current item correctly on numeric pager after using move_to_next method', function() {
        $(scrolli).scrolli();
        $(scrolli).data('scrolli').move_to_next();

        expect($(pagerItem).first()).not.toHaveClass('current');
        expect($(pagerItem).first().next()).toHaveClass('current');
      });

      it('should mark current item correctly on numeric pager after using move_to_prev method', function() {
        $(scrolli).scrolli({
          moveSpeed : 0 // Remove animation speed to provoke an instant move
        });
        $(scrolli).data('scrolli').move_to($(elementWrappers).last());
        $(scrolli).data('scrolli').move_to_prev();

        expect($(pagerItem).first()).not.toHaveClass('current');
        expect($(pagerItem).last()).not.toHaveClass('current');
        expect($(pagerItem).last().prev()).toHaveClass('current');
      });
    });
  });
});