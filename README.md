# Disable Hulu Trailers

[!["Buy Me A Coffee"](https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png)](https://www.buymeacoffee.com/decemberthedeveloper)

## Abstract
This Chrome browser extension disables the autoplaying trailers on the Hulu home page.

## Tech Stack
This project uses vanilla JS, CSS, and HTML.

## Setup/Installation
You can clone the repo locally using `git clone`.

[This article](https://developer.chrome.com/docs/extensions/mv3/getstarted/development-basics/#load-unpacked) offers detailed instructions on loading an unpacked chrome extension. You can navigate to the chrome extensions page via the puzzle piece icon in the toolbar. Enable "developer mode" on the top-right. From there, you can click "load unpacked extension" and choose the folder via the popup. You should then see the chart icon appear in the toolbar. When you click on it, you can see "Hide LinkedIn Applicants."

You can navigate to `hulu.com`, where currently you should be directed to `hulu.com/hub/home`. From there, you should see a promotional image for a new show, then a dark screen (assuming that the audio has been disabled already). There will be no option to watch the trailer or listen to it.

## Screenshots

## Future Changes
Long term, I'd like to make this change using JavaScript rather than CSS. That way the video will no longer autoplay and the microphone button can remain visible - this would give users the most options in terms of being able to allow the videos to autoplay or preventing this.

I would also like to make this a cross-browser extension that works with Firefox.


