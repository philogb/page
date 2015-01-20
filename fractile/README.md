# Fractile

![fractile](http://philogb.github.io/assets/random/2.jpg)

Fractile is a space-filling visualization based on a random space filling tiling of the plane technique that serves as a slideshow for Tweets and Vines.

 * Live demo here: [Fractile](http://philogb.github.io/page/fractile)
 * Youtube video here: [Video](https://www.youtube.com/watch?v=Nj_ncLwsJmI)
 * Blog post here: [Blog post](http://philogb.github.io/space-filling-vines/)

## Usage

Clone this repo:

`git clone https://github.com/philogb/remix.git`

Go to the fractile project

`cd remix/fractile`

Install all node modules (if you don't have npm install npm first)

`npm install`

Run with:

`grunt serve`


## Options

There are multiple layouts you can choose from, customize color, images,
videos, logos displayed. On each layout there are about 100,000
primitives being displayed. These are taken from a config.json file.
Here's an example of an entry showing Vines:

      {
        "title": "Art Vines",
        "layout": "rotated_squares1",
        "shape": "rotated_square",
        "icon": "vine_white",
        "icon_background": [
          [8, 191, 143]
        ],
        "vines": {
          "displayed": 3,
          "vine_ids": [
            "a1.mp4",
            "a2.mp4",
            "a3.mp4"
          ]
        }
      }

 * `title` displays a title before laying out the elements.
 * `layout` is the layout to choose from. There are
   `circles{1,2,3,4,5}`, `rectangles{1,2,3,4,5}` and `rotated_squares1`.
 * `shape`, depends on the layout. The options are `circle`, `rectangle`
   and `rotated_rectangle` respectively.
 * `icon`, loaded from `images/*` the icon is a link to an image to be
   used on top of each shape. Options are `vine_white`, `vine_green`,
`twitter_blue` and `twitter_white`.
 * `icon_background`, an array of arrays of colors set in RGB format.
 * `vines` a complex object containing two main properties. `displayed`
   sets the number of vines/tweets to be shown in total for that layout.
`vine_ids` are paths for files stored in `images/*`.

Here's an example for showing Tweets:

    {
      "title": "#Sunset",
      "layout": "circles4",
      "shape": "circle",
      "icon": "twitter_white",
      "icon_background": [
        [29, 172, 238]
      ],
      "tweets": {
        "displayed": 3,
        "tweet_ids": [
          "557347023876153344",
          "557342384779182080",
          "557332716228599808"
        ]
      }
    }

Main difference is that instead of using `vines` we use `tweets` and
provide a `tweetIds` array.

## Support

This works on Chrome and Firefox 35+. Safari doesn't seem to support
this (maybe due to an issue with the video formats). Mobile Safari doesn't either (maybe due to an issue with instanced
arrays).

## Vines by

* [Fiña DuBois](https://vine.co/v/Odxn59ZlYTd)
* [Danorst](https://vine.co/v/OdjMqzZAjL5)
* [Wesley Thomas](https://vine.co/v/MgBWtqVBuuY)
* [GooRee Designs Things](https://vine.co/v/OebHajIWEpT)
* [Tragic Tofu](https://vine.co/v/OatDqJIWztw)
* [GooRee](https://vine.co/v/OavtOUTrqdX)
* [pxlwrx](https://vine.co/v/Oa3AYlZYmeJ)
* [DeathSmoKe](https://vine.co/v/O7g3JqTz1gM)
* [Tragic Tofu](https://vine.co/v/O6XrrztVgnq)
* [margar!dA](https://vine.co/v/OilhwUaWUPm)
* [GooRee](https://vine.co/v/OhQeHdgd6Mt)
* [Moik](https://vine.co/v/OJv9wVh55vZ)
* [folium](https://vine.co/v/OvYEqFxndzu)
* [Noah Kalina](https://vine.co/v/OnZb6vZ7662)

## TODO

 * Support arbitrary images as logos.
 * Add support for Safari and Safari mobile.

## External libraries used

 * [PhiloGL](http://philogl.org).

## Copyright Twitter, Inc.

The code is copyright Twitter, Inc. with an MIT license.

        Copyright (c) 2015 Twitter - Author: Nicolas Garcia Belmonte
        (http://philogb.github.io/)

        Permission is hereby granted, free of charge, to any person obtaining a copy
        of this software and associated documentation files (the "Software"), to deal
        in the Software without restriction, including without limitation the rights
        to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
        copies of the Software, and to permit persons to whom the Software is
        furnished to do so, subject to the following conditions:

        The above copyright notice and this permission notice shall be included in
        all copies or substantial portions of the Software.

        THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
        IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
        FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
        AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
        LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
        OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
        THE SOFTWARE.

