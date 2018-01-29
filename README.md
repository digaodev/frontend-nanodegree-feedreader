# Project Overview

In this project you are given a web-based application that reads RSS feeds. The original developer of this application clearly saw the value in testing, they've already included [Jasmine](http://jasmine.github.io/) and even started writing their first test suite! Unfortunately, they decided to move on to start their own company and we're now left with an application with an incomplete test suite. That's where you come in.

## Reason for the project

Testing is an important part of the development process and many organizations practice a standard of development known as "test-driven development". This is when developers write tests first, before they ever start developing their application. All the tests initially fail and then they start writing application code to make these tests pass.

Whether you work in an organization that uses test-driven development or in an organization that uses tests to make sure future feature development doesn't break existing features, it's an important skill to have!

## How to run the project
The games has no dependencies. If you want to run it locally, just clone or download it and open the index.html file in your browser. The page will load the Jasmine tests for the feedreader at the bottom of the page.

## What was done

The challenge was to write tests against an existing codebase for a FeedReader app. Tests were done using Jasmine and they checked the business logic, event handling and DOM manipulation.

## Tests created for this project

- Test that loops through each feed in the `allFeeds` object and ensures it has a URL defined and that the URL is not empty.
- Test that loops through each feed in the `allFeeds` object and ensures it has a name defined and that the name is not empty.
- Test that ensures the menu element is hidden by default.
- Test that ensures the menu changes visibility when the menu icon is clicked.
- Test that ensures when the `loadFeed` function is called and completes its work, there is at least a single `.entry` element within the `.feed` container.
- Test that ensures when a new feed is loaded by the `loadFeed` function that the content actually changes.
