# Material Themes

```scss
@mixin frame-theme($theme) {
  // Extract whichever individual palettes you need from the theme.
  $primary: map-get($theme, primary);
  $accent: map-get($theme, accent);
  // Gets the standard material maps of fore/background
  $background: map-get($theme, background);
  $foreground: map-get($theme, foreground);
}
```

## Accessible variables

> note: the filles variables are only examples and depent on each theme!

`mat-color($background, <var>)`
```yaml
status-bar: black,
app-bar: #212121,
background: #303030,
hover: rgba(255, 255, 255, 0.04),
card: #424242,
dialog: #424242,
disabled-button: rgba(255, 255, 255, 0.12),
raised-button: #424242,
focused-button: rgba(255, 255, 255, 0.12),
selected-button: #212121,
selected-disabled-button: #424242,
disabled-button-toggle: black,
unselected-chip: #616161,
disabled-list-option: rgba(255, 255, 255, 0.12),
tooltip: #616161
```

`mat-color($foreground, <var>)`
```yaml
base: white,
divider: rgba(255, 255, 255, 0.12),
dividers: rgba(255, 255, 255, 0.12),
disabled: rgba(255, 255, 255, 0.5),
disabled-button: rgba(255, 255, 255, 0.3),
disabled-text: rgba(255, 255, 255, 0.5),
elevation: black,
hint-text: rgba(255, 255, 255, 0.5),
secondary-text: rgba(255, 255, 255, 0.7),
icon: white,
icons: white,
text: white,
slider-min: white,
slider-off: rgba(255, 255, 255, 0.3),
slider-off-active: rgba(255, 255, 255, 0.3)
```
