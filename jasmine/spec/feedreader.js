/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(
  (function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
      /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
      it('are defined', function() {
        expect(allFeeds).toBeDefined();
        expect(allFeeds.length).toBeGreaterThan(0);
      });

      /* Test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty (length > 0).
         */
      it('has all URL properties defined and not empty', function() {
        allFeeds.forEach(function(feed) {
          expect(feed.url).toBeDefined();
          expect(feed.url.length).toBeGreaterThan(0);
        });
      });

      /* Test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty (length > 0).
         */
      it('has all name properties defined and not empty', function() {
        allFeeds.forEach(function(feed) {
          expect(feed.name).toBeDefined();
          expect(feed.name.length).toBeGreaterThan(0);
        });
      });
    });

    describe('The menu', function() {
      /* Test that ensures the menu element is
         * hidden by default (menu-hidden === true on load).
         */
      it('is hidden at first load', function() {
        let bodyElem = document.querySelector('body');
        expect(bodyElem.classList.contains('menu-hidden')).toBeTruthy();
      });

      /* Test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */
      it('changes visibility when the menu icon is clicked', function() {
        let bodyElem = document.querySelector('body');
        expect(bodyElem.classList.contains('menu-hidden')).toBeTruthy();

        $('.menu-icon-link').trigger('click');
        expect(bodyElem.classList.contains('menu-hidden')).toBeFalsy();

        $('.menu-icon-link').trigger('click');
        expect(bodyElem.classList.contains('menu-hidden')).toBeTruthy();
      });
    });

    describe('Initial Entries', function() {
      /* Test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container. The operation is asynchronous and needs the done function to signal when its finished.
         */
      beforeEach(function(done) {
        loadFeed(0, done);
      });

      it('verifies loadFeed() is called and completes correctly', function() {
        // DOM nodes descendant order is .feed > .entry-link > .entry
        expect(
          document.querySelectorAll('.feed .entry').length
        ).toBeGreaterThan(0);
      });
    });

    describe('New Feed Selection', function() {
      /* Test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes. The operation is asynchronous and needs the done function to signal when its finished.
         */
      let previousFeed;

      beforeEach(function(done) {
        loadFeed(0, function() {
          previousFeed = document.querySelectorAll('.feed')[0].innerHTML;
          loadFeed(1, done);
        });
      });

      it('verifies content is changed when a new feed is loaded', function() {
        let newFeed = document.querySelectorAll('.feed')[0].innerHTML;
        expect(newFeed).not.toEqual(previousFeed);
      });
    });
  })()
);
