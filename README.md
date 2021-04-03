# MMM-Shom

Single module to display the tide widget of [SHOM](https://maree.shom.fr) website on MagicMirror

## Screenshot
![](https://maree.shom.fr/assets/small-widget-50f22ea146481fa2b3f58c633f2dc9c4.png)
![](https://maree.shom.fr/assets/big-widget-48d9d3f426dff3d58c1a4cdd672f2489.png)

## Installation

To install this module, try this command:

```
cd ~/MagicMirror/modules/
git clone https://github.com/bugsounet/MMM-Shom
cd MMM-Shom
npm install
```

## Configuration

```
{
  module: 'MMM-Shom',
  position: "top_center",
  configDeepMerge: true,
  config: {
    debug: false,
    scriptURL: "https://services.data.shom.fr/hdm/vignette/grande/BREST?locale=fr",
    update: 1000 * 60 * 60
  }
},
```

* debug: enable the debug mode
* scriptURL: URL of the purposed script
* update: update time for refresh the widget (in ms)

## How get the `scriptURL`

Connect to [SHOM](https://maree.shom.fr) website

### English
* Select `Generate harbor widget`
* Search your `Harbor name`
* Select `Small widget` or `Big widget`
* Generate the widget
* Shom website will purpose a part of code like this:
`<script src="https://services.data.shom.fr/hdm/vignette/petite/BREST?locale=en"></script>`<br>
So, scriptURL will be: `"https://services.data.shom.fr/hdm/vignette/petite/BREST?locale=en"`<br>

Just report it in your module configuration
`scriptURL: "https://services.data.shom.fr/hdm/vignette/petite/BREST?locale=en",`

### Français
* Selectionnez `Générer une vignette`
* Recherchez `Le Nom du port`
* Selectionnez `Petite vignette` ou `Grande vignette`
* Générez une vignette
* le site de shom va vous proposer une partie de code comme ceci:
`<script src="https://services.data.shom.fr/hdm/vignette/petite/BREST?locale=fr"></script>`<br>
scriptURL va etre dans ce cas: `"https://services.data.shom.fr/hdm/vignette/petite/BREST?locale=fr"`<br>

Il suffit donc de le reporter dans la configuration du module
`scriptURL: "https://services.data.shom.fr/hdm/vignette/petite/BREST?locale=fr",`

## Donate
[Donate](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=TTHRH94Y4KL36&source=url), if you love this module !

## Support on [The 4th MagicMirror modules](http://forum.bugsounet.fr)

## Thanks
* French Facebook Group: [Entraide Magic Mirror Raspberry Pi](https://www.facebook.com/groups/2832574870153883)
* Thanks for this idea `@Jo Roco` !
