# Dante Avetyan - Personal Website Project

#### ELEMENTS ####

### 1. `<template>` Element
The template element holds HTML content that is not rendered when the page loads but can be cloned and inserted into the document via JavaScript.
Storing a reusable game card structure that can be dynamically cloned when the user clicks "Add Game". This is more efficient than creating HTML strings in JavaScript and maintains separation of concerns between markup and logic.


### 2. `<meter>` Element
The meter element represents a scalar measurement within a known range (a gauge).
isplaying progress/completion percentages for various stats:
- Portfolio completion percentage (index.html, line ~40)
- Game library organization (index.html, line ~49)
- Music curation progress (index.html, line ~58)
- Skill levels in about.html (lines ~35, 42, 49)
- Listening statistics in musiclibrary.html (lines ~39, 46)

The meter shows visual progress with color coding based on low/high/optimum values.

### 3. `<output>` Element
The output element represents the result of a calculation or user action.
- Displaying calculated totals in the Project Time Calculator (index.html, line ~126)
- Showing percentages next to meter elements to provide numerical context
- Semantically marking values that are dynamically generated or calculated

### 4. `<aside>` Element
The aside element represents content that is tangentially related to the main content.
Creating complementary sidebars that display:
- Site statistics and metrics (index.html)
- Skills progress indicators (about.html)
- Music listening statistics (musiclibrary.html)


#### ATTRIBUTES ###

### 1. `fetchpriority` Attribute
The fetchpriority attribute indicates the relative priority for fetching a resource.
- Set to "high" on the main stylesheet link to ensure CSS loads quickly for faster rendering
- Applied to the hero/first gallery image in art.html for better above-the-fold performance
- Improves perceived load time by prioritizing critical resources


### 2. `popover` Attribute
The popover attribute creates a native popover dialog that can be shown/hidden without JavaScript.
- Creating info popovers that explain site statistics in detail
- Genre breakdown popover in music library
- Provides accessible, dismissible overlay content with native browser support
- Connected via popovertarget and popovertargetaction attributes on trigger buttons


### 3. `inert` Attribute
The inert attribute makes an element non-interactive - preventing focus, clicks, and selections.
Applied to a loading overlay to prevent user interaction with the overlay content when it's visible. 
This is useful for loading states where we want to show information but prevent interaction until loading completes.

