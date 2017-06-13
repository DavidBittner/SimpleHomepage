# SimpleHomepage
A customizable home page for your browser that displays useful information, as well as your commonly visited links.

# Configuration

Due to JavaScript's inability to read local files, all config is done within the weather.js file. The data is stored as a js object in the following format:

    config(object):
        siteList(array):
            site(object):
                name(string)
                sites(array)

The only way to change the styling is to directly edit the css file, but that should be easy enough.
