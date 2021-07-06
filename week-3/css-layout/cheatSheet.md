# CSS Layouts

## Fundamentals

### Flow layout
- Elements behave in flow layout as default. 

- Block elements (`div` `  header` `p`) take up full width of the page.

- Inline elements (`span` `strong` `a`) only take up the space they need you can fit multiple inline elements next to each other.

- Viewport has vertical scroll by default. If content is too wide to fit in the screen it will wrap to the next line.

- The defaults are pretty good!

### Flexible Box Layout
- It's the flexbox! `display:flex`. 
- Parent controls how the child elements are laid out. 
- Puts elements on a single line (as if they are inline). 
- They *won't* wrap if there's not enough room, unless you enable `flex-wrap:wrap`

### The Grid
- AKA the old school graphic design layout. Parent element specifies rows and columns children fit into. `display: grid`
- `grid-template-columns`, `grid-template-rows` specify layout, children are placed with `grid-column` and `grid-row`
- "Why isn't this working for me?" Careful of typos *gird* and *colums* 
- Useful for two-direction layout (rows & columns.)


## The Center (centre)
- I will never get the hang of american spelling ;(
- When content gets too wide it becomes a chore to read. To fix this, it's common to put content in a horizontally centred column. 
- `max width` is your friend 
- `margin: auto` tells the browser to use as much available space as possible. `margin-left: auto` and `margin-right: auto` will centre the element, making it take up as much space on either side. 
- You can make a class called `.center` (or `center`) and make all the html elements you want have that class *as well as additional classes*, that way you have a nice default class for your elements to fall back on 
- `.centre {
      margin-left: auto;
      margin-right: auto;
      }`

## The Stack
- You should focus on controlling the spaces *in between elements*, and not apply spacing rules to individual elements. 
- To do this, use parent elements to apply spacing to its children. *The Stack*
- `.stack-section > * + * {
        margin-top: 2rem;
      }`

## The Row
- If you want elements placed next to each other, you might want to look into *The Row*
- `display:flex` . Easy peasy! **Or is it?**
- Yes! Make your site responsive re screen sizes with `flex-wrap: wrap`. **But what about media queries?**
- Don't need 'em! This is an intrinsically responsive layout. 
- Want space between elements? Course you do! Flexbox and grid containers love the `gap` property (shorthand for `row-gap` and `column-gap`). But does it work for Safari?
- No!!!!!! 
- `align-items`: vertical alignment
- `justify-content`: horizontal alignment
- **This is a huge simplification!** if `flex-direction` is set to `row` then `align-items` and `justify-content` are vertical and horizontal respectively but if it's `column` they are reversed!!!

## The Grid (revisited)
- Perfect for image galleries
- Design classic
- Using it makes you cool and mysterious
- px? rem? %? *fr*. (stands for fraction!!!)
- `.grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1rem;
}`
- children will automatically get slotted into the grid, populating new rows if needed. Not very responsive!
- `.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
  gap: 1rem;
}`
- much better! This will make as many columns as your screen can handle. 